import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export default async function handler(req, res) {

  console.log("CHAT.JS NUEVO FUNCIONANDO");

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );


  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }


  if (req.method !== "POST") {
    return res.status(405).json({
      error:"Método no permitido"
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