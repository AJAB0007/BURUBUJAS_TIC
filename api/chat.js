import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  // =========================
  // CORS
  // =========================
  const origin = req.headers.origin;

  const allowedOrigins = [
    "http://localhost:5500",
    "https://ajab0007.github.io"
  ];

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  // =========================
  // PETICIÓN OPTIONS
  // =========================
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // =========================
  // SOLO POST
  // =========================
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  // =========================
  // PROCESAR MENSAJE
  // =========================
  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "No se recibió ningún mensaje."
      });
    }

    const response = await openai.responses.create({

      model: "gpt-5.6-luna",

      instructions: `
Eres BURBUJITAI, un asistente educativo del curso T.I.C. I.

Ayuda a los estudiantes con temas relacionados con:
- Software
- Tipos de software
- Instalación de software
- Seguridad de la información
- Firma digital
- Criptografía
- Certificados digitales

Responde en español.
Explica de forma clara, sencilla y educativa.
Si el estudiante pregunta algo relacionado con sus tareas, ayúdalo paso a paso.
`,

      input: message

    });

    return res.status(200).json({
      answer: response.output_text
    });

  } catch (error) {

    console.error("ERROR OPENAI:", error);

    return res.status(500).json({
      error: "Error al comunicarse con el asistente."
    });
  }
}