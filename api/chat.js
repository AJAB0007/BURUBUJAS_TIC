import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export default async function handler(req, res) {


  // ==========================
  // CONFIGURACIÓN CORS
  // ==========================

  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://ajab0007.github.io"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );


  // Respuesta para verificación CORS

  if (req.method === "OPTIONS") {

    return res.status(204).end();

  }



  // ==========================
  // SOLO PERMITIR POST
  // ==========================

  if (req.method !== "POST") {

    return res.status(405).json({

      error:
      "Método no permitido."

    });

  }



  try {


    // ==========================
    // RECIBIR PREGUNTA
    // ==========================


    const {
      message
    } = req.body;



    if (!message) {


      return res.status(400).json({

        error:
        "No se recibió ninguna pregunta."

      });


    }



    // ==========================
    // CONSULTAR OPENAI
    // ==========================


    const response =
    await openai.responses.create({


      model:
      "gpt-5.6-luna",


      instructions: `

Eres BURBUJITAI, un asistente educativo
para estudiantes del curso T.I.C.

Tu función es ayudar con dudas académicas.

Reglas:

- Responde siempre en español.
- Explica de forma sencilla.
- Usa ejemplos cuando sea necesario.
- No inventes información.
- Si no sabes algo indica que necesitas más información.
- Mantén respuestas claras y cortas.

`,


      input:
      message,


      max_output_tokens:
      300


    });



    // ==========================
    // DEVOLVER RESPUESTA
    // ==========================


    return res.status(200).json({

      answer:
      response.output_text

    });



  } catch(error) {


    console.error(
      "Error OpenAI:",
      error
    );


    return res.status(500).json({

      error:
      "Error al consultar el asistente."

    });


  }


}