import OpenAI from "openai"; 

const client = new OpenAI({
    apiKey: Process.env.OPENAI_API_KEY
}); 

const allowedOrigins = [
     "https://ajab0007.github.io",
     "http://localhost:5500",
     "http://127.0.0.1:5500"
]; 

export default async function handler(req, res){
    const origin = req.headers.origin; 

    if(allowedOrigins.includes(origin)){
        res.setHeader(
            "Access-Control-Allow-Origin",
            origin
        );

    }

    res.setHeader(
         "Access-Control-Allow-Methods",
         "POST, OPTIONS"
    )

    res.setHeader(
         "Access-Control-Allow-Headers",
         "Content-Type"
    ); 

}

 if (req.method === "OPTIONS") {

    return res
      .status(204)
      .end();

  }


  if (req.method !== "POST") {

    return res.status(405).json({
      error: "Método no permitido."
    });

  }


  try {

    const {
      message,
      context
    } = req.body;


    if (
      !message ||
      typeof message !== "string"
    ) {

      return res.status(400).json({
        error: "Debes enviar una pregunta."
      });

    }


    // Evitar mensajes enormes
    const cleanMessage =
      message
        .trim()
        .slice(0, 2000);


    const cleanContext =
      typeof context === "string"
        ? context.slice(0, 6000)
        : "";


    const response =
      await client.responses.create({

        model: "gpt-5.6-luna",

        instructions: `
Eres "Asistente TIC", un tutor educativo para estudiantes
de cuarto diseño.

Tu objetivo es ayudar a comprender los temas del curso
Tecnologías de la Información y la Comunicación.

Reglas:
- Responde en español claro y sencillo.
- Explica paso a paso cuando sea necesario.
- Prioriza el contexto del curso proporcionado.
- Si el contexto no contiene la respuesta, indícalo y luego
  puedes dar una explicación general.
- No inventes contenido del curso.
- No respondas de forma innecesariamente extensa.
- Ayuda al alumno a aprender, no solo a copiar respuestas.
        `,

        input: `
CONTEXTO DEL CURSO:
${cleanContext}

PREGUNTA DEL ESTUDIANTE:
${cleanMessage}
        `,

        max_output_tokens: 500
      });


    return res.status(200).json({
      answer: response.output_text
    });


  } catch (error) {

    console.error(
      "Error OpenAI:",
      error
    );


    return res.status(500).json({
      error:
        "No se pudo obtener respuesta del asistente."
    });

  }


