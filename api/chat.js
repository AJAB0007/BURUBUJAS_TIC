import OpenAI from "openai";


export default async function handler(req, res) {

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

  // Responder al preflight del navegador
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


    const response =
      await openai.responses.create({

        model: "gpt-5.6-luna",

        instructions: `
Eres BURBUJITAI, un asistente educativo del curso T.I.C.

Responde en español sencillo.
Explica con ejemplos.
Ayuda solamente con temas académicos.
`,

        input: message,

        max_output_tokens: 300

      });


    return res.status(200).json({

      answer: response.output_text

    });


  } catch(error) {


    console.error(error);


    return res.status(500).json({

      error: "Error del servidor"

    });


  }

}