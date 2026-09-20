import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  // =========================
  // CORS
  // =========================

  const allowedOrigins = [
    "http://localhost:5500",
    "https://ajab0007.github.io"
  ];

  const origin = req.headers.origin;

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

  // Petición previa del navegador
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Solo permitir POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "No se recibió ninguna pregunta."
      });
    }

    const response = await openai.responses.create({

      model: "gpt-5.6-luna",

      instructions: `
Eres BURBUJITAI, un asistente educativo del curso T.I.C. I.

Tu función es ayudar a los estudiantes a comprender
los temas del curso.

Responde de manera clara, sencilla y educativa.

No realices las tareas completas por el estudiante.
Ayúdalo a comprender el procedimiento.

Utiliza ejemplos cuando sea necesario.
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