import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido."
    });
  }

  try {

    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({
        error: "Debes enviar una pregunta."
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",

      reasoning: {
        effort: "none"
      },

      instructions: `
Eres un asistente educativo para estudiantes de T.I.C.

Responde en español claro y sencillo.
Explica de forma breve.
No inventes información.
      `,

      input: message,

      max_output_tokens: 300
    });

    return res.status(200).json({
      answer: response.output_text
    });

  } catch (error) {

    console.error("Error:", error);

    return res.status(500).json({
      error: "Error al consultar la IA."
    });

  }

}