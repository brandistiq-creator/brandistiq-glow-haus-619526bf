import OpenAI from "openai";

const MAX_MESSAGE_LENGTH = 2000;
const MAX_BODY_BYTES = 12000;

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json({ reply: "AI demo trenutačno nije aktiviran. Pokušajte ponovno kasnije ili pošaljite upit putem kontaktne stranice." }, { status: 503 });
  }

  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return Response.json({ reply: "Zahtjev mora biti poslan u JSON formatu." }, { status: 415 });
    }

    const declaredLength = Number(req.headers.get("content-length") || 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return Response.json({ reply: "Poruka je prevelika. Skratite je i pokušajte ponovno." }, { status: 413 });
    }

    const body = await req.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    if (!message) return Response.json({ reply: "Napišite pitanje." }, { status: 400 });
    if (message.length > MAX_MESSAGE_LENGTH) {
      return Response.json({ reply: `Poruka može sadržavati najviše ${MAX_MESSAGE_LENGTH} znakova.` }, { status: 413 });
    }

    const client = new OpenAI({ apiKey, timeout: 20000, maxRetries: 1 });
    const response = await client.responses.create({
      model: "gpt-5-mini",
      instructions: "Ti si BrandistiQ AI asistent. Odgovaraj na hrvatskom jeziku, kratko i korisno. Pomažeš korisniku razumjeti koje digitalno rješenje mu treba: web stranica, web aplikacija, kalkulator, AI asistent, automatizacija ili SEO. Ne obećavaj točnu cijenu; cijene su samo početne orijentacije: landing 150 €, poslovna web 200 €, SEO web 250 €, napredna web 350 €, web shop 500 €, web aplikacija 600 €, napredna aplikacija 900 €, AI rješenje 400 €. Napomeni da konačna cijena ovisi o opsegu i da cijene treba potvrditi ponudom. Ne traži osjetljive osobne podatke. Ako korisnik želi ponudu, uputi ga na /kontakt/.",
      input: message
    });

    return Response.json({ reply: response.output_text || "Nisam uspio sastaviti odgovor. Pokušajte ponovno." }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    // Detailed provider errors are intentionally not returned to the public client.
    return Response.json({ reply: "Došlo je do greške u AI servisu. Pokušajte ponovno za trenutak." }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
};

export const config = { path: "/api/ai" };
