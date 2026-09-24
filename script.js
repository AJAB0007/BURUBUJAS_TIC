const exercises = {

  tarea_1: [
    {
      question: "¿Qué es el software?",
      options: ["Las partes físicas de una computadora.", "El conjunto de programas, instrucciones y datos que permiten realizar tareas.",
         "Únicamente el sistema operativo.", "Los dispositivos conectados a Internet."],
      answer: 1
    },
    {
      question: "¿Cuál de los siguientes elementos pertenece al hardware?",
      options: ["Windows.", "Google Chrome.", "Memoria RAM.", "Microsoft Word."],
      answer: 2
    },
    {
      question: "¿Cuál de los siguientes es un ejemplo de software de sistema?",
      options: ["Windows.", 
        "Word.", "Photoshop.", "IntelliJ IDEA."],
      answer: 0
    },
    {
      question: "¿Qué significa instalar un programa?",
      options: ["Eliminar todos sus archivos.",
         "Descargar una imagen del programa.", 
         "Incorporar al sistema los archivos, configuraciones y componentes necesarios para ejecutarlo.",
          "Crear un acceso directo."],
      answer: 2
    },
    {
      question: "¿Qué debemos comprobar antes de instalar un programa?",
      options: ["Solamente su nombre.",
         "Únicamente cuánto cuesta.", "Sistema operativo, RAM, almacenamiento, procesador y otros requisitos.", 
         "El color del icono."],
      answer: 2
    },
    {
      question: "¿Qué indican los requisitos mínimos de un programa?",
      options: ["Las características básicas necesarias para poder ejecutarlo.",
         "Las mejores características disponibles en el mercado.", 
         "El precio mínimo del programa.", 
         "Las características del desarrollador."],
      answer: 0
    },
    {
       question: "¿Cuál es la fuente más apropiada para descargar un programa?",
      options: [
         "Cualquier página que aparezca primero.",
         "Una publicación desconocida de redes sociales.", 
         "El sitio oficial del desarrollador o una tienda oficial.", 
         "Un enlace enviado por una persona desconocida."],
      answer: 2
    },
    {
      question: "¿Eliminar un acceso directo significa que el programa fue desinstalado?",
      options: [
         "Sí, siempre.",
         "Solamente en Windows.", 
         "Sí, porque desaparece del escritorio.", 
         "No, el programa puede continuar instalado."],
      answer: 3
    },
    {
      question: "¿Qué término engloba al software creado para causar daños, obtener información o realizar acciones no autorizadas?",
      options: [
         "Hardware.",
         "Malware.", 
         "Freeware.", 
         "Firmware."],
      answer: 1
    },
    {
      question: "¿Cuál de las siguientes opciones describe correctamente al ransomware?",
      options: [
         "Programa utilizado para diseñar imágenes.",
         "Sistema utilizado para actualizar Windows.", 
         "Malware que busca bloquear o cifrar información y exigir un pago.", 
         "Programa que mejora automáticamente la memoria RAM."],
      answer: 2
    }
      
  ],


  tarea_2: [
    {
      question: "¿Qué principio de seguridad busca que la información sea accesible únicamente para personas o sistemas autorizados?",
      options: [
         "Integridad.",
         "Compatibilidad.", 
         "Confidencialidad.", 
         "Disponibilidad."],
      answer: 2
    },
    {
      question: "Si una persona modifica sin autorización un documento, ¿qué propiedad se está afectando principalmente?",
      options: [
         "Integridad.",
         "Confidencialidad.", 
         "Compatibilidad.", 
         "Arquitectura."],
      answer: 0
    },
    {
      question: "¿Qué propiedad permite comprobar que una persona, programa o documento corresponde realmente al origen que afirma tener?",
      options: [
         "Rendimiento.",
         "Autenticidad.", 
         "Almacenamiento.", 
         "Confidencialidad."],
      answer: 1
    },
    {
      question: "¿Cuál describe mejor el propósi|to estudiado de la criptografía?",
      options: [
         "Incrementar la velocidad del procesador.",
         "Proteger información y comunicaciones mediante técnicas matemáticas, algoritmos y claves.", 
         "Eliminar automáticamente los virus.", 
         "Reducir el tamaño físico de los dispositivos."],
      answer: 1
    },
    {
      question: ". ¿Cuál es una característica fundamental de la criptografía simétrica?",
      options: [
         "No utiliza claves.",
         "Utiliza exclusivamente una clave pública.", 
         "Utiliza una clave secreta compartida para las operaciones de cifrado y descifrado.", 
         "Utiliza obligatoriamente tres claves diferentes."],
      answer: 2
    },
    {
      question: "¿Por qué una imagen de una firma manuscrita no equivale a una firma digital criptográfica?",
      options: [
         "Porque las firmas manuscritas solamente funcionan en papel.",
         "Porque una imagen no utiliza por sí misma mecanismos criptográficos para verificar integridad e identidad asociada al firmante.", 
         "Porque una imagen siempre está cifrada.", 
         "Porque las firmas digitales no utilizan documentos."],
      answer: 1
    },
    {
      question: "En el funcionamiento simplificado de una firma digital, ¿qué papel desempeña el hash?",
      options: [
         "Sustituye permanentemente al documento original.",
         "Es un resumen matemático del documento que participa en el proceso de firma y permite detectar modificaciones posteriores.", 
         "Funciona exclusivamente como contraseña del usuario.", 
         "Es la clave pública del firmante."],
      answer: 1
    },
    {
      question: "¿Cuál de las siguientes afirmaciones describe con mayor precisión un certificado digital?",
      options: [
         "Es una contraseña temporal utilizada para acceder a Internet.",
         "Es un mecanismo destinado únicamente a cifrar archivos almacenados.", 
         "Vincula una identidad o dominio con una clave pública y puede incluir información sobre titular, emisor y vigencia.", 
         "Es una copia digitalizada de la identificación personal del usuario."],
      answer: 2
    },
    {
      question: "Un usuario accede a un sitio mediante HTTPS y el navegador establece correctamente una conexión protegida con TLS. ¿Cuál es la interpretación técnicamente más adecuada de esta situación según los contenidos estudiados?",
      options: [
         "HTTPS demuestra inequívocamente que toda la información publicada en el sitio es verdadera.",
         "La utilización de HTTPS garantiza que el propietario del sitio nunca realizará actividades maliciosas.", 
         "HTTPS contribuye al cifrado de la comunicación, a preservar su integridad y a autenticar al servidor mediante certificados, pero estas propiedades no deben interpretarse como una garantía absoluta sobre la legitimidad de todo el contenido del sitio.", 
         "HTTPS únicamente indica que el servidor utiliza una contraseña más compleja que los sitios HTTP."],
      answer: 2
    }
    
  ],


  tarea_3: [
    {
    title: "Ejercicio 1 - Ventas mensuales",

    content: `
      <img
        src="./imagenes/ejercicio1-t3.png"
        alt="Ejercicio 1 - Ventas mensuales"
        class="topic-image"
      >

      <button
  class="primary-btn"
  onclick="openSpreadsheet(0)"
>
  📊 Abrir hoja de cálculo
</button>
    `
  },

  {
    title: "Ejercicio 2 - Gastos mensuales",

    content: `
      <img
        src="./imagenes/ejercicio2-t3.png"
        alt="Ejercicio 2 - Gastos mensuales"
        class="topic-image"
      >

      <button
  class="primary-btn"
  onclick="openSpreadsheet(1)"
>
  📊 Abrir hoja de cálculo
</button>
    `
  },

  {
    title: "Ejercicio 3 - Calificaciones",

    content: `
      <img
        src="./imagenes/ejercicio3-t3.png"
        alt="Ejercicio 3 - Calificaciones"
        class="topic-image"
      >

      <button
  class="primary-btn"
  onclick="openSpreadsheet(2)"
>
  📊 Abrir hoja de cálculo
</button>
    `
  }
  

  ],


  tarea_4: [
    {
      question: "¿Cuál dispositivo se usa principalmente para escribir?",
      options: ["Monitor", "Teclado", "Impresora", "Bocina"],
      answer: 1
    },
    {
      question: "¿Qué significa CPU?",
      options: [
        "Unidad Central de Procesamiento",
        "Control Principal de Usuario",
        "Computadora Personal Universal",
        "Centro de Programas Útiles"
      ],
      answer: 0
    },
    {
      question: "¿Cuál de estos es un navegador web?",
      options: ["Chrome", "Word", "Excel", "Paint"],
      answer: 0
    },
    {
      question: "¿Qué etiqueta HTML se usa para un título principal?",
      options: ["<p>", "<img>", "<h1>", "<a>"],
      answer: 2
    },
    {
      question: "¿Qué lenguaje se usa para dar estilo a una página web?",
      options: ["CSS", "SQL", "Java", "Python"],
      answer: 0
    }
  ]

};



/* =====================================================
   CONTENIDO DE LAS TAREAS
===================================================== */

const contents = {

  tarea_1: {

    title: "Software.",

    topics: [

      {
      
        title: "Software", 
        icon: "🖥️",

        content: `
          <p>
            El software es el conjunto de programas, instrucciones y datos que permiten que una computadora o
            dispositivo electrónico realice tareas. No es un elemento físico: indica al hardware qué debe hacer. 
            
           </p>
           <p>
           Ejemplos comunes son Windows, Word, Chrome, WhatsApp, un antivirus y los videojuegos.
          </p>

          <p>
            A diferencia del hardware, el software no es algo físico que podamos tocar.

           </p> 
           
           <p>
           El hardware corresponde a los componentes físicos: monitor, teclado, mouse, procesador, memoria RAM
            y almacenamiento. El software corresponde a los programas e instrucciones: sistemas operativos,
            aplicaciones y herramientas de desarrollo.
          </p>


          <p> 
          El software permite crear documentos, navegar por Internet, realizar cálculos, diseñar, comunicarse,
          reproducir contenido multimedia, administrar información y controlar dispositivos.

          </p>

           <p> Dejo por acá un video interesante, educativo e informativo acerca de Software y algunos tipos de Software. </p>
        <a 

          href= "https://youtu.be/gVaE2F0jOJs?si=JQDeLADDHVVfEfvM"
          target=_blank"
          rel="noopener noreferrer"
          class="youtube-btn"
        >
          ▶️ Ver video en Youtube

        </a>
        <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/gVaE2F0jOJs"
      title="Video de YouTube"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share
      "
      allowfullscreen>
    </iframe>
  </div>

        
        `
      },


      {
        title: "Tipos de Software",
        icon: "🖥️",

        content: `
          <p>
            Existen diferentes tipos de software.
          </p>

          <ul>
            <li>Software de sistema.</li>

            <p>
            El software de sistema administra el equipo, por ejemplo Windows, Linux, Android o macOS. 
            </p>

            <p> El software de sistema es el conjunto de programas fundamentales que gestionan directamente el hardware de una computadora o dispositivo y sirven de base sobre la cual se ejecutan el resto de las aplicaciones. 
            Actúa como capa intermedia entre los componentes físicos (procesador, memoria, almacenamiento) y el usuario.</p>

            <p>Administración de recursos: Controla y distribuye el uso del procesador (CPU), la memoria RAM y las unidades de almacenamiento.</p>
            <p>Comunicación con el hardware: Traduce las peticiones de los programas a instrucciones que los componentes físicos puedan entender.</p>
            <p>Seguridad y permisos: Restringe el acceso no autorizado a los archivos del sistema y gestiona las cuentas de usuario.</p>

            <p>
            
            </p

            <p> - Componentes Principales: </p>

            <p>   Sistemas Operativos (SO): La estructura principal del equipo (ej. Linux, Windows, macOS, Android, iOS).</p>
            <p>   Controladores de dispositivo (Drivers): Módulos que permiten al sistema operativo interactuar con periféricos específicos (tarjetas de video, impresoras, adaptadores Wi-Fi).</p>
            <p>   Firmware / BIOS / UEFI: Código grabado directamente en la memoria del hardware que inicializa los componentes al encender el equipo.</p>
            <p>   Cargadores de arranque (Bootloaders): Programas encargados de cargar el sistema operativo en la memoria RAM tras el encendido.</p>
           
           
            <li>
            El software de aplicación.
            </li>

            <p>El software de aplicación comprende todos los programas y herramientas desarrolladas para realizar tareas específicas en beneficio directo del usuario final. 
            A diferencia del software de sistema, no gestiona los componentes físicos del equipo, 
            sino que utiliza los recursos del sistema operativo para procesar datos, automatizar trabajos, 
            comunicar información o brindar entretenimiento.</p>
        
            <li>
            El software de programación.
            </li>

            <p>El software de programación (o herramientas de desarrollo) comprende el conjunto de programas que permiten a los desarrolladores escribir, probar, depurar, traducir y mantener otros programas informáticos. Sirve como el puente técnico que transforma las instrucciones redactadas 
            en lenguajes comprensibles por humanos en código ejecutable por el hardware o el sistema operativo.</p> 
            <p></p> 
            <p></p> 

      
            <li>Software Libre, Propietario y de Código Abierto </li>

            <p>
            El software propietario pertenece a una organización o desarrollador y su licencia limita ciertos usos,
            modificaciones o redistribuciones. 
            </p>
            <p>
            
            El software de código abierto permite consultar el código fuente y,
            según la licencia, modificarlo o redistribuirlo. 
            <p>

            <p>
            
            El software libre enfatiza las libertades del usuario para
            ejecutar, estudiar, modificar y compartir el programa.


            </p>


            <li>Paquetes de Software</li>

            <p> Un paquete o suite de software reúne programas o herramientas relacionadas que buscan cubrir un conjunto de necesidades. Una suite ofimática, 
            por ejemplo, puede integrar procesador de textos, hoja decálculo y presentaciones.</p>
            
            <li> Suites Ofimáticas</li>

            <p>Las suites ofimáticas se utilizan para productividad académica, personal y empresarial. Microsoft 365 y LibreOffice son ejemplos conocidos. 
            Writer cumple funciones semejantes a Word, Calc a Excel e Impress a PowerPoint</p>

            <li> Software de Diseño </li>

            <p>Permite crear, modificar o producir contenido visual, técnico o multimedia. Entre los ejemplos pueden mencionarse Photoshop, GIMP, Blender o AutoCAD, según el tipo de trabajo. </p>
           
           
            <li> Software de Comunicación </li>


            
            <p>Facilita el intercambio de información mediante correo, mensajería, videollamadas y plataformas colaborativas. Es fundamental en educación y trabajo remoto. </p>
            
          </ul>


          <p> Dejo por acá un video interesante, educativo e informativo acerca de loos Tipos de Software. </p>
        <a 

          href= "https://youtu.be/uAm-YcVwH38?si=ZMVJ_lbhK6vX80R7"
          target=_blank"
          rel="noopener noreferrer"
          class="youtube-btn"
        >
          ▶️ Ver video en Youtube

        </a>

        <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/uAm-YcVwH38"
      title="Video de YouTube"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share
      "
      allowfullscreen>
    </iframe>
  </div>
        `
      },

      {
        title: "Instalación de Programas. ", 
        icon: "💽", 

        content: `
      <ul>

        <li> ¿Que Significa Instalar? </li>
        <p>Instalar significa incorporar al sistema los archivos, configuraciones, dependencias y permisos necesarios para ejecutar correctamente un programa. Durante el proceso pueden copiarse archivos, crearse carpetas, 
        registrarse componentes y generarse accesos direccesos directos.  </p>

        <p>Antes de instalar debe comprobarse el sistema operativo, procesador, memoria RAM, espacio de almacenamiento y, 
        cuando corresponda, tarjeta gráfica, conexión a Internet u otros componentes.</p>

        <li> Proceso de Instalación.</li>

        <p>Preparación: Primero se identifica la necesidad, se elige el programa y se comprueban requisitos y compatibilidad.
        Luego se obtiene el instalador desde una fuente confiable, preferiblemente el sitio oficial del desarrollador o una tienda oficial.</p>
        
        <p>Ejecución del Administrador:En Windows son comunes archivos .exe y .msi. Al iniciar el instalador se deben leer las opciones,
        permisos y condiciones, en lugar de aceptar automáticamente todas las pantallas. </p>

        <p>Configuración y Finalización:Algunos instaladores permiten seleccionar ubicación, componentes, accesos directos o preferencias. 
        Después de instalar, se ejecuta el programa y se verifica que funcione correctamente.  </p>


        <li> Desinstalación de Programas. </li> 

        <p>Desinstalar significa retirar correctamente un programa y los componentes que el sistema tiene registrados para él. El procedimiento debe realizarse con las herramientas del sistema operativo o con el desinstalador 
        oficial.</p>

        <p>Motivos para desisntalar: Puede desinstalarse software porque ya no se utiliza, ocupa espacio, presenta errores, fue sustituido, es
incompatible o representa un riesgo. </p>


        <p>Archivos Residuales:Tras una desinstalación pueden permanecer configuraciones, carpetas, cachés o datos del usuario. Estos
elementos se conocen comúnmente como archivos residuales, estos deben de eleminarse para una desisntalación completa, ya que estos archivos al no ser eliminados ocupan espacio en el almacenamiento interno. 
</p>
</u>
        
        
        <p> Dejo por acá un video interesante, educativo e informativo acerca de la instalación y desinstalación de programas en PC (Windows). </p>
        <a 

          href= "https://www.youtube.com/watch?v=GyZ1SDyHf4Y&pp=ygUmaW5zdGFsYWNpw7NuIGRlIHVuIHByb2dyYW1hIGVuIHdpbmRvd3M%3D"
          target=_blank"
          rel="noopener noreferrer"
          class="youtube-btn"
        >
          ▶️ Ver video en Youtube

        </a>

        
        <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/GyZ1SDyHf4Y"
      title="Video de YouTube"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share
      "
      allowfullscreen>
    </iframe>
  </div>

        `
      },

      {
        title: "Guia de estudio.",
        icon: "📓",
        content: `

        <div class="pdf-container">

    <div class="pdf-card">

      <div class="pdf-info">

        <span class="pdf-icon">📄</span>

      </div>

      <div class="pdf-buttons">

        <a
          href="./pdf/guia_software.pdf"
          target="_blank"
          class="pdf-view-btn"
        >
          👁 Ver
        </a>

        <a
          href="./pdf/guia_software.pdf"
          download
          class="pdf-download-btn"
        >
          ⬇ Descargar
        </a>

      </div>

    </div>

  </div>

        `
      }


    
    ]

  },



  tarea_2: {

    title: "Tarea 2",

    topics: [

       {
        title: "Seguridad de la Información.",
        icon: "🔐",

        content: `
        <p>
        La seguridad de la información es el conjunto de medidas, políticas y tecnologías diseñadas para proteger la 
        confidencialidad, integridad y disponibilidad de los datos frente a accesos no autorizados, 
        modificaciones o interrupciones.  
        </p>
      
        <p>
            La seguridad de la informacion busca proteger los datos y los sistemas frente al acceso, uso, divulgacion o 
            modificacion no autorizados. Para esta unidad se trabajan especialmente tres propiedades: confidencialidad, 
            integridad y autenticidad. Estas propiedades se complementan y permiten analizar distintos riesgos de 
            programas y documentos electronicos.
          </p>
        <ul>  

         

          <li>Confidencialidad.</li>
          <p>La confidencialidad procura que la informacion solo sea accesible para personas o sistemas autorizados.
          Puede apoyarse en controles de acceso, permisos, autenticacion de usuarios y cifrado. La finalidad no es
          esconder que el archivo existe, sino impedir que personas no autorizadas conozcan su contenido.</p>

          <p>Ejemplo: un profesor almacena las calificaciones en un sistema al que solo acceden usuarios 
          autorizados. Publicar accidentalmente el archivo afectaria la confidencialidad</p>

        <li>Integridad.</li>
         <p>La integridad busca conservar la exactitud del contenido y detectar cambios no autorizados. Puede apoyarse
         en controles de permisos, hashes, firmas digitales y otros mecanismos.</p>

         <p>Asegura que la información permanezca precisa, completa y libre de alteraciones no autorizadas.</p>
         <p>Ejemplo: Ejemplo: si un contrato cambia de Q1,000 a Q10,000 despues de ser aprobado, existe un problema de 
         integridad aunque el archivo siga abriendo normalmente.</p>
        
         <li>Disponibilidad.</li>
        
         
          <p>Garantiza que los sistemas y datos estén accesibles para los usuarios cuando lo requieran.</p>

          <li>Integridad.</li>

          <p> La integridad busca conservar la exactitud del contenido y detectar cambios no autorizados. 
          Puede apoyarse en controles de permisos, hashes, firmas digitales y otros mecanismos.
          </p>

          <p>Ejemplo: si un contrato cambia de Q1,000 a Q10,000 despues de ser aprobado, existe un problema de
          integridad aunque el archivo siga abriendo normalmente</p>
        </ul>

      <p>Autenticidad:</p>
      <ul>
      <p>Antes de ejecutar software es conveniente comprobar su procedencia: sitio oficial, tienda reconocida,
desarrollador esperado y, cuando el sistema lo muestre, informacion de firma o editor. La autenticidad reduce
el riesgo de ejecutar archivos manipulados o suplantados, pero debe combinarse con otras medidas de
seguridad.
      </p>
      <p> Ejemplo: "ActualizacionOficial.exe" puede llamarse asi sin haber sido producido por la empresa que 
      aparenta representar.</p>
      </ul> 

    <p>Autenticidad de Programas:</p>
      <ul>
      <p> La autenticidad busca comprobar que una identidad, programa, documento o comunicacion corresponde
     realmente al origen que afirma tener. Un nombre de archivo, un logotipo o una direccion visualmente parecida 
     no bastan para demostrar autenticidad.
      </p>
      <p> Ejemplo: dos instaladores pueden tener el mismo icono; uno procede del sitio oficial y otro de un enlace
desconocido. La apariencia no permite determinar por si sola cual es autentico.</p>
      </ul> 


      <p>Autenticidad de Documentos Electronicos:</p>
      <ul>
      <p> En documentos digitales interesa saber quien esta asociado con su emision o firma y si el contenido
permanece igual al que fue firmado. Las firmas digitales y los certificados pueden participar en esta
verificacion.
      </p>
      <p> Ejemplo:Ejemplo: en un contrato firmado digitalmente, una modificacion posterior puede provocar que la
verificacion de la firma deje de ser valida.</p>

      </ul> 

      <img
      src="./imagenes/cuadro_c1.jpeg"
      alt="Ejemplo de la seg. de la info."
      class="topic-image"
      >
        

        
        `
        
      },

       {
        title: "Firma Digital",
        icon: "✍️",

        content: `
          <p>
            Una firma digital es un mecanismo tecnológico
            que permite verificar la autenticidad de un
            documento electrónico.
          </p>

          <p>La firma digital es un mecanismo criptografico que permite verificar la integridad de los datos firmados y la 
          relacion de la firma con una clave privada. Cuando esa clave esta vinculada de manera confiable con una 
          identidad, tambien contribuye a la autenticidad del firmante. </p>

          <p> Una firma digital es un mecanismo criptográfico basado en infraestructura de clave pública 
          (PKI) que verifica la identidad del firmante y garantiza que un documento electrónico no ha sido alterado.
            También permite comprobar que el documento
            no haya sido modificado.
          </p>

          <li>Firma Electronica y Firma Digital.</li>

          <p>En lenguaje cotidiano pueden confundirse, pero no son necesariamente equivalentes. "Firma electronica" 
          puede ser un concepto mas amplio para distintos mecanismos electronicos de aceptacion o identificacion; 
          "firma digital" se refiere aqui al mecanismo basado en criptografia de clave publica. El alcance juridico 
          concreto depende de la normativa aplicable. </p>

          <p> Ejemplo: escribir un nombre al final de un formulario puede considerarse una forma electronica de
          aceptacion en ciertos contextos, pero no constituye automaticamente una firma digital criptografica.</p>


          <img 
          src="./imagenes/firmaDigital.png"
          alt="Ejemplo de la seg. de la info."
          class="topic-image"
          >
        


        

        `
      },

      {
        title: "¿Como Funciona una Firma Digital.",
        icon: "✍️",

        content: `
           <p> ¿Como Funciona? </p> 
          <ul>
          <li>Cripotografía.</li>
          <p>La criptografia utiliza tecnicas matematicas, algoritmos y claves para proteger informacion y comunicaciones. 
          Se emplea en cifrado, firmas digitales, protocolos de comunicacion segura y otros mecanismos. No debe 
          entenderse como un unico programa, sino como un conjunto de tecnicas. </p>
          
          <p>Ejemplo: Esquema: datos legibles -> algoritmo + clave -> datos cifrados. Para recuperar la informacion se realiza 
          la operacion criptografica correspondiente con los elementos autorizados.</p>

          <p> Utiliza un par de claves matemáticas (una privada para firmar y otra pública para verificar). </p>

          <li>Integridad.</li>

          <p>La integridad se enfoca exclusivamente en garantizar que el documento no haya sido alterado, 
          modificado ni corrompido desde el momento exacto en que se aplicó la firma.</p>


          <p>Mecanismo técnico: Se basa en algoritmos hash (como SHA-256) que generan un código único representativo del archivo.</p>
          <p>Efecto de modificación: Si se altera un solo espacio, coma o carácter del archivo firmado, 
          el cálculo del hash cambia drásticamente y el sistema declara la firma como inválida.</p>
          <p>Objetivo principal: Garantizar que lo que firmaste es exactamente lo que el destinatario está leyendo.</p>
  

          <p>Crea una huella digital única del archivo; si alguien modifica el documento, la firma se invalida de inmediato.</p> 

          <li>Seguridad.</li>
          <p> A diferencia de una simple imagen de tu rastro manuscrito, ofrece una prueba sólida contra fraudes y manipulaciones.</p>
          <p>La seguridad abarca el conjunto de medidas criptográficas y legales que aseguran la validez de la identidad del firmante y el control de las credenciales.</p>
          <p>Mecanismo técnico: Utiliza Criptografía Asimétrica mediante un par de claves únicas: la clave privada 
          (secreta y en custodia estricta del usuario) y la clave pública (accesible a cualquiera para verificar).</p>
          <p>Autenticidad: Confirma de forma matemática quién es el autor de la firma sin revelar su clave secreta.</p>
          <p>No Repudio: Impide que el emisor niegue haber firmado el documento, ya que solo su clave privada pudo haber generado ese registro específico.</p>



      <p> Dejo por acá un video interesante, educativo e informativo acerca de las firmas digitales. </p>
        <a 

          href= "https://youtu.be/Kd109KC4xm8?si=y_9TKAHDBmf654o6"
          target=_blank"
          rel="noopener noreferrer"
          class="youtube-btn"
        >
          ▶️ Ver video en Youtube

        </a>

        <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/Kd109KC4xm8"
      title="Video de YouTube"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share
      "
      allowfullscreen>
    </iframe>
  </div>


        `
      },

       {
        title: "Tipos de Criptografía.",
        icon: "📚",

        content: `
          <p>
            Claves Criptograficas.
          </p>
          <ul>Una clave criptografica es un valor utilizado por un algoritmo. La seguridad depende en gran medida de
generar, almacenar, utilizar y proteger correctamente las claves. Una clave privada o secreta expuesta puede
comprometer los mecanismos que dependen de ella</ul>

          <ul>
          <li>Criptografía Simetrica.</li>
          <p>La criptografia simetrica utiliza una clave secreta compartida para cifrar y descifrar. Es apropiada para
procesar grandes cantidades de datos con eficiencia. Su reto principal es distribuir y proteger la clave
compartida.</p>

          <p>Ejemplo: Ana y Carlos poseen la misma clave secreta. Ana cifra un archivo y Carlos utiliza esa clave
para descifrarlo.</p>

          <li> Criptografía Asimetrica.</li>
          <p>La criptografia asimetrica utiliza un par de claves relacionadas: publica y privada. La publica puede
distribuirse; la privada debe permanecer protegida. Este enfoque participa en firmas digitales y en
mecanismos para establecer comunicaciones seguras.</p>
          <p>Ejemplo: compartir la clave publica no significa entregar la clave privada. Ambas estan relacionadas
matematicamente, pero cumplen funciones diferentes.</p>

          <li>Comparación.</li>
          <p>os dos modelos no deben verse necesariamente como competidores. En sistemas reales pueden
combinarse: los mecanismos asimetricos ayudan, por ejemplo, a autenticacion o establecimiento de secretos,
mientras el cifrado simetrico protege eficientemente grandes cantidades de datos. </p>
          <p>Idea clave: simetrica = secreto compartido; asimetrica = par publica/privada. Cada una resuelve
necesidades diferentes.</p>
          </u>


          <img 
          src="./imagenes/tiposDeCriptografía.png"
          alt="Ejemplo de la seg. de la info."
          class="topic-image"
          >
        `
      },


      {
        title: "Certificados Digitales",
        icon: "🔐",

        content: `
          <p>
            Los certificados digitales permiten identificar
            a una persona, organización o sitio web
            de manera electrónica.
          </p>

          <p>Un certificado digital vincula una clave publica con informacion de una identidad o dominio. Puede contener
sujeto, emisor, clave publica, numero de serie, periodo de validez y firma digital del emisor.</p>

          <p>Ejemplo: el certificado de un sitio ayuda al navegador a evaluar si la clave publica presentada esta
asociada con el dominio solicitado dentro de una cadena de confianza.</p>
<ul>

          <li>Autoridades Certificadoras</li>

      <p>Una Autoridad Certificadora (CA) participa en la emision de certificados y en una infraestructura de confianza.
Los sistemas mantienen autoridades raiz confiables y pueden construir cadenas desde el certificado del
servidor hasta una raiz reconocida</p>

          <li>Vigencia y Revocación. </li>

        <p>Un certificado tiene un periodo de validez. Ademas, puede existir la necesidad de invalidarlo antes de su
        fecha de expiracion, por ejemplo si la clave privada asociada se considera comprometida. Los sistemas
        pueden utilizar mecanismos de comprobacion de estado segun el contexto.</p>

        <li>TLS Y HTPPS.</li>
        <p>HTTPS es HTTP protegido mediante TLS. TLS permite establecer una comunicacion cifrada, proteger la 
        integridad de los datos en transito y autenticar al servidor mediante certificados. Durante el establecimiento de 
        la sesion se negocian parametros criptograficos y se crean secretos de sesion.</p>
        <p>HTTPS (HTTP Secure) no es un protocolo diferente a HTTP, sino la combinación de HTTP operando sobre una capa de seguridad llamada TLS 
        (Transport Layer Security, el sucesor moderno del obsoleto SSL).</p>

        <p>En el modelo de capas de red, mientras que HTTP opera en la capa de aplicación enviando texto plano por el puerto 80, 
        HTTPS añade la capa TLS justo antes de entregar los paquetes a la capa de transporte TCP (puerto 443).</p>
        <p>Ejemplo: al iniciar sesion en una plataforma HTTPS, las credenciales viajan dentro de un canal
protegido por TLS; esto no sustituye otras medidas de seguridad de la cuenta.</p>

        <li>Lo que HTTPS No Garantiza</li>
        <p>HTTPS no certifica que una noticia sea verdadera, que una tienda vaya a cumplir una promesa o que un
archivo ofrecido sea benigno. Un sitio fraudulento tambien puede obtener un certificado para su propio
dominio. HTTPS indica principalmente que existe una conexion protegida con el servidor autenticado para ese
dominio.</p>
<p> Ejemplo: "banco-ejemplo-falso.com" podria tener HTTPS. El candado no convierte ese dominio en el
sitio oficial de un banco real.</p>

<li> Riesgos Frecuentes. </li>

<p>Entre los riesgos se encuentran suplantacion de sitios, instaladores modificados, documentos manipulados,
robo de credenciales, claves privadas expuestas y confianza excesiva en elementos visuales como logotipos
o candados. La seguridad requiere combinar controles tecnicos con decisiones responsables del usuario.</p>

<p>Caso: un correo urgente incluye un enlace a un dominio parecido al oficial. El usuario debe revisar la
direccion real y no confiar solo en el diseño de la pagina.</p>

</ul>


  <p>
    Dejo por acá un video interesante, educativo e informativo acerca de Certificados Digitales:
  </p>

  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/jzJBGBxGN14"
      title="Video de YouTube"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share
      "
      allowfullscreen>
    </iframe>
  </div>

   <img 
          src="./imagenes/tlsHttps.png"
          alt="Ejemplo de la seg. de la info."
          class="topic-image"
          >


        `
      },


      {
        title: "Guia de estudio.",
        icon: "📓",
        content: `

        <div class="pdf-container">

    <div class="pdf-card">

      <div class="pdf-info">

        <span class="pdf-icon">📄</span>

      </div>

      <div class="pdf-buttons">

        <a
          href="./pdf/seguirdad_firmas_digitales.pdf"
          target="_blank"
          class="pdf-view-btn"
        >
          👁 Ver
        </a>

        <a
          href="./pdf/seguirdad_firmas_digitales.pdf"
          download
          class="pdf-download-btn"
        >
          ⬇ Descargar
        </a>

      </div>

    </div>

  </div>

        `
      }
    ]

  },



  tarea_3: {

    title: "Tarea 3",

    topics: [

      {
        title: "Automatización de Hojas de Cálculo.",
        icon: "📖",

        content: `
          <p>¿Qué son las Macros y los Controles?.
          </p>

          <li>Imagina que una Macro es como la grabadora de voz de tu teléfono: presionas Grabar, realizas una serie de
acciones en tu hoja de cálculo (dar formato, borrar celdas, pintar bordes) y luego presionas Detener. Cuando le das
Play, la computadora repite exactamente esos pasos en un segundo.</li>

<li>Los Controles de Formulario son los botones visibles en tu pantalla que usas para darle "Play" a tus macros con un
solo clic.</li>>

          <ul></ul>
        `
      },
      {
        title: " Almacenamiento, Gráficos y Estadística.",
        icon: "📖",

        content: `
          <p>
           Organizar, Calcular y Graficar.
          </p>
          <li> 
Almacenamiento: Es como organizar un armario: cada columna guarda un solo tipo de información (ej. solo
fechas o solo montos de dinero).</li>
<li>Estadística: Fórmulas que resumen tus datos rápidamente responder preguntas como: ¿Cuánto gasté en
promedio? o ¿Cuál fue el gasto más alto?</li>

<li>Gráficos: Dibujos con tus datos para entender los resultados de un vistazo sin leer toda la tabla.</li>
        `
      }

    ]

  },



  tarea_4: {

    title: "Tarea 4",

    topics: [

      {
        title: "",
        icon: "📖",

        content: `
          <p>
          .
          </p>
        `
      }

    ]

  }

};

// Ejercicios para tareas Pedagogicas- 

const pedagogicas={

  
}


/*==========================
EJERCICIOS INTEGRADORES

============================*/

const integrativeExercises = {

  tarea_1: [

    {
      type: "text",

      question:
        "Explica con tus propias palabras qué es el software."
    },


    {
      type: "text",

      question:
        "¿Cuál es la diferencia entre hardware y software?"
    },


    {
      type: "comparison",

      title:
        "Compara el software libre y el software propietario.",

      columns: [
        "Aspecto",
        "Software Libre",
        "Software Propietario"
      ],

      rows: [
        "Acceso al código fuente",
        "Tipo de licencia",
        "Posibilidad de modificarlo",
        "Ejemplo"
      ]
      
    },


    {
      type: "text",

      question:
        "Escribe cuatro riesgos de descargar programas de fuentes desconocidas y una medida preventiva para cada uno."
    },

    {
      type: "comparison",

      title:
        "Escribe cinco programas que conozcas y clasifícalos como software de sistema, aplicación o programación.",

      columns: [
        "Software.",
        "Ejemplos."
      ],
      rows: [
        "De Sistema.",
        "De Aplicación.",
        "De Programación."
      ]
    }

  ],


  tarea_2: [

    {
      type: "comparison",

      title:
        "Complete los Siguientes enunciados.",

      columns: [
        "Aspecto.",
        "Descripción."
        
      ],

      rows: [
        "Seguridad de la información.",
        "Criptografía.",
        "Firma digital.",
        "CA",
        "TLS/HTTPS"

      ]
      
    },

  ],


  tarea_3: [],

  tarea_4: []

};



/* =====================================================
   NOMBRES DE LAS TAREAS
===================================================== */

const subjectNames = {

  tarea_1: "Tarea 1 - Software.",

  tarea_2: "Tarea 2 - Contenidos Digitales. ",

  tarea_3: "Tarea 3 -  Macros y Estadística.",

  tarea_4: "Tarea 4"

};


const exerciseStatus = { 
  tarea_1: true, 
  tarea_2: true, 
  tarea_3: true, 
  tarea_4: false
};



/*=================================
asistente BURBUJITAI
===================================*/

const aiButton =
  document.getElementById("aiButton");

const aiChat =
  document.getElementById("aiChat");

const aiClose =
  document.getElementById("aiClose");

const aiSend =
  document.getElementById("aiSend");

const aiInput =
  document.getElementById("aiInput");

const aiMessages =
  document.getElementById("aiMessages");


aiButton.addEventListener("click", () => {

  aiChat.classList.remove("hidden");

});


aiClose.addEventListener("click", () => {

  aiChat.classList.add("hidden");

});


aiSend.addEventListener("click", sendAIMessage);


async function sendAIMessage() {

  const question = aiInput.value.trim();

  if (!question) {
    return;
  }

  // Mostrar mensaje del alumno
  const userMessage = document.createElement("div");

  userMessage.className = "ai-message user";

  userMessage.textContent = question;

  aiMessages.appendChild(userMessage);

  aiInput.value = "";


  // Mostrar mensaje temporal de la IA
  const botMessage = document.createElement("div");

  botMessage.className = "ai-message bot";

  botMessage.textContent = "🤖 Pensando...";

  aiMessages.appendChild(botMessage);

  aiMessages.scrollTop = aiMessages.scrollHeight;


  // Desactivar botón mientras responde
  aiSend.disabled = true;

  
  

try {

  console.log("ANTES DEL FETCH");
  console.log("Pregunta enviada:", question);

  const response = await fetch(
    "https://burubujas-tic-7rie.vercel.app/api/chat",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: question
      })
    }
  );

  console.log("Respuesta recibida:", response.status);

  const text = await response.text();

  console.log("Respuesta Vercel:", text);

  const data = JSON.parse(text);

  if (!response.ok) {
    throw new Error(
      data.error || "Error del servidor."
    );
  }

  botMessage.textContent =
    data.answer || "No hubo respuesta";

} catch (error) {

  console.error("ERROR CHAT:", error);

  botMessage.textContent =
    "⚠️ No pude conectarme con el asistente. Intenta nuevamente.";

} finally {

  aiSend.disabled = false;

}

aiMessages.scrollTop =
  aiMessages.scrollHeight;


  aiMessages.scrollTop =
    aiMessages.scrollHeight;

}


/*=========================
contexto de la tarea
========================*/

function getAIContext() {

  if (
    currentSubject &&
    contents[currentSubject]
  ) {

    const task =
      contents[currentSubject];


    const text =
      task.topics
        .map(topic => {

          // Quitamos las etiquetas HTML
          const temp =
            document.createElement("div");

          temp.innerHTML =
            topic.content;


          return `
Tema: ${topic.title}

${temp.innerText}
          `;

        })
        .join("\n\n");


    return `
Curso: T.I.C. I

Tarea actual:
${task.title}

Contenido:
${text}
    `;

  }


  return `
Curso: T.I.C. I.
El alumno actualmente no tiene una tarea abierta.
  `;

}

/* =====================================================
   ELEMENTOS HTML
===================================================== */

//imagenes

//

const loginSection =
  document.getElementById("loginSection");

const dashboardSection =
  document.getElementById("dashboardSection");

const taskMenuSection =
  document.getElementById("taskMenuSection");

const contentSection =
  document.getElementById("contentSection");

const quizSection =
  document.getElementById("quizSection");

const resultSection =
  document.getElementById("resultSection");


const contentBtn =
  document.getElementById("contentBtn");

const exerciseBtn =
  document.getElementById("exerciseBtn");

const taskBackBtn =
  document.getElementById("taskBackBtn");

const contentBackBtn =
  document.getElementById("contentBackBtn");
  


const studentNameInput =
  document.getElementById("studentName");

const studentGradeInput =
  document.getElementById("studentGrade");

const studentCodeInput = 
  document.getElementById("studentCode"); 

const teacherNameInput = 
  document.getElementById("teacherName");

const loginError =
  document.getElementById("loginError");


const enterBtn =
  document.getElementById("enterBtn");

const logoutBtn =
  document.getElementById("logoutBtn");

const backBtn =
  document.getElementById("backBtn");

const nextBtn =
  document.getElementById("nextBtn");

const retryBtn =
  document.getElementById("retryBtn");

const homeBtn =
  document.getElementById("homeBtn");


const integrativeBtn =
  document.getElementById("integrativeBtn");

const integrativeSection =
  document.getElementById("integrativeSection");

const integrativeBackBtn =
  document.getElementById("integrativeBackBtn");

const saveIntegrativeBtn =
  document.getElementById("saveIntegrativeBtn");

const integrativeContainer =
  document.getElementById("integrativeContainer");

const integrativeMessage =
  document.getElementById("integrativeMessage");

const integrativePdfBtn =
  document.getElementById("integrativePdfBtn");


/**
 * EXCEL
 */

const spreadsheetSection =
  document.getElementById("spreadsheetSection");


const addColumnBtn =
  document.getElementById("addColumnBtn");

const createChartBtn =
  document.getElementById("createChartBtn");

//const pieChartBtn =
  //document.getElementById("pieChartBtn");

  const addRowBtn =
  document.getElementById("addRowBtn");

  const spreadsheetPdfBtn =
  document.getElementById(
    "spreadsheetPdfBtn"
  );

  spreadsheetPdfBtn.addEventListener(
  "click",
  generateSpreadsheetPDF
);

const clearSpreadsheetBtn =
  document.getElementById("clearSpreadsheetBtn");

/*const applyFormulaBtn =
  document.getElementById("applyFormulaBtn");*/

const calculateFormulaBtn =
  document.getElementById("calculateFormulaBtn");

const barChartBtn =
  document.getElementById(
    "barChartBtn"
  );

const lineChartBtn =
  document.getElementById(
    "lineChartBtn"
  );

const pieChartBtn =
  document.getElementById(
    "pieChartBtn"
  );

const spreadsheetCanvas =
  document.getElementById(
    "spreadsheetChart"
  );

const formulaInput =
  document.getElementById("formulaInput");

const formulaResult =
  document.getElementById("formulaResult");

const spreadsheetTable =
  document.getElementById("spreadsheetTable");

const spreadsheetHeaderRow =
  document.querySelector(
    "#spreadsheetTable thead tr"
  );


/* =====================================================
   VARIABLES
===================================================== */

let student = null;

let currentSubject = "";

let currentQuestion = 0;

let score = 0;

let answered = false;

let selectedAnswers = [];


/**
 * EXCEL
 */

let spreadsheetChartInstance = null;

let currentSpreadsheetExercise = null;

const spreadsheetExerciseData = {
  0: {},
  1: {},
  2: {}
};

const spreadsheetExerciseCharts = {
  0: null,
  1: null,
  2: null
};


/* =====================================================
   BOTONES
===================================================== */

enterBtn.addEventListener(
  "click",
  enterStudent
);


logoutBtn.addEventListener(
  "click",
  logout
);

const practicalExercisesPdfBtn =
  document.getElementById(
    "practicalExercisesPdfBtn"
  );



/*
  Cuando presionamos Volver desde las preguntas,
  regresamos al menú de la tarea.
*/

practicalExercisesPdfBtn.addEventListener(
  "click",
  generatePracticalExercisesPDF
);

backBtn.addEventListener("click", () => {

  openTask(currentSubject);

});


nextBtn.addEventListener(
  "click",
  nextQuestion
);


retryBtn.addEventListener("click", () => {

  startQuiz(currentSubject);

});


homeBtn.addEventListener(
  "click",
  showDashboard
);


// ejericios integradores

// 

if (integrativePdfBtn) {

  integrativePdfBtn.addEventListener(
    "click",
    generateIntegrativePDF
  );

}

if (integrativeBtn) {

  integrativeBtn.addEventListener(
    "click",
    () => {

      showIntegrativeExercises(
        currentSubject
      );

    }
  );

}

// volver

if (integrativeBackBtn) {

  integrativeBackBtn.addEventListener(
    "click",
    () => {

      integrativeSection.classList.add(
        "hidden"
      );

      taskMenuSection.classList.remove(
        "hidden"
      );

    }
  );

}

function generatePracticalExercisesPDF() {

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  const practicalExercises =
    exercises["tarea_3"];

  if (
    !practicalExercises ||
    practicalExercises.length === 0
  ) {

    alert(
      "No existen ejercicios para generar el PDF."
    );

    return;
  }

  // ==============================
  // ENCABEZADO
  // ==============================

  doc.setFontSize(20);

  doc.text(
    "T.I.C. I",
    105,
    20,
    {
      align: "center"
    }
  );

  doc.setFontSize(16);

  doc.text(
    "Tarea 3 - Ejercicios prácticos",
    105,
    30,
    {
      align: "center"
    }
  );

  doc.setFontSize(11);

  doc.text(
    "Tecnologías de la Información y la Comunicación I",
    105,
    38,
    {
      align: "center"
    }
  );

  let y = 52;

  // ==============================
  // EJERCICIOS
  // ==============================

  practicalExercises.forEach(
    (exercise, index) => {

      if (index > 0) {

        doc.addPage();

        y = 25;

      }

      doc.setFontSize(15);

      doc.text(
        exercise.title,
        20,
        y
      );

      y += 10;

      // Buscar imagen dentro del contenido

      const temp =
        document.createElement("div");

      temp.innerHTML =
        exercise.content;

      const img =
        temp.querySelector("img");

      if (img) {

        const imageWidth = 170;
        const imageHeight = 90;

        doc.addImage(
          img.src,
          "PNG",
          20,
          y,
          imageWidth,
          imageHeight
        );

        y += imageHeight + 15;

      }

      doc.setFontSize(10);

      doc.text(
        "Realiza el ejercicio utilizando la hoja de cálculo.",
        20,
        y
      );

    }
  );

  // ==============================
  // PIE DE PÁGINA
  // ==============================

  const totalPages =
    doc.internal.getNumberOfPages();

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {

    doc.setPage(page);

    doc.setFontSize(9);

    doc.text(
      `T.I.C. I - Tarea 3 | Página ${page} de ${totalPages}`,
      105,
      290,
      {
        align: "center"
      }
    );

  }

  doc.save(
    "Tarea_3_Ejercicios_Practicos.pdf"
  );
}

function openSpreadsheet(exerciseIndex = 0) {

  currentSpreadsheetExercise = exerciseIndex;

  dashboardSection.classList.add("hidden");
  taskMenuSection.classList.add("hidden");
  contentSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  document
    .getElementById("practicalExercisesSection")
    .classList.add("hidden");

  spreadsheetSection.classList.remove("hidden");

  createSpreadsheet();

  restoreSpreadsheetData(currentSpreadsheetExercise);

}


// CREAR TABLA 

let spreadsheetRows = 5;
let spreadsheetColumns = 5;
function createSpreadsheet() {

  spreadsheetHeaderRow.innerHTML = "";

  spreadsheetBody.innerHTML = "";

  const rowHeader = document.createElement("th");
  rowHeader.textContent = "Fila";
  spreadsheetHeaderRow.appendChild(rowHeader);

  for (
    let col = 1;
    col <= spreadsheetColumns;
    col++
  ) {

    const th =
      document.createElement("th");

    th.textContent =
      getColumnName(col);

    spreadsheetHeaderRow.appendChild(th);

  }

  for (
    let row = 1;
    row <= spreadsheetRows;
    row++
  ) {

    const tr =
      document.createElement("tr");

    const numberCell =
      document.createElement("td");

    numberCell.textContent = row;

    numberCell.className =
      "spreadsheet-row-number";

    tr.appendChild(numberCell);

    for (
      let col = 0;
      col < spreadsheetColumns;
      col++
    ) {

      const td =
        document.createElement("td");

      td.className =
        "spreadsheet-td";

      td.dataset.row = row;
      td.dataset.col = col;

      const input =
        document.createElement("input");

      input.type = "text";

      input.className =
        "spreadsheet-cell";

      input.dataset.row = row;
      input.dataset.col = col;

      // GUARDAR CAMBIOS
      input.addEventListener(
        "input",
        () => {

          saveSpreadsheetData(
            currentSpreadsheetExercise
          );

        }
      );

      td.appendChild(input);

      tr.appendChild(td);

    }

    spreadsheetBody.appendChild(tr);

  }

}

function saveSpreadsheetData(exerciseIndex) {

  if (exerciseIndex === null) {
    return;
  }

  const data = {};

  const cells =
    document.querySelectorAll(
      ".spreadsheet-cell"
    );

  cells.forEach(cell => {

    const row =
      cell.dataset.row;

    const col =
      cell.dataset.col;

    const key =
      `${row}_${col}`;

    data[key] =
      cell.value;

  });

  spreadsheetExerciseData[exerciseIndex] =
    data;
}

function restoreSpreadsheetData(exerciseIndex) {

  const data =
    spreadsheetExerciseData[exerciseIndex];

  if (!data) {
    return;
  }

  const cells =
    document.querySelectorAll(
      ".spreadsheet-cell"
    );

  cells.forEach(cell => {

    const row =
      cell.dataset.row;

    const col =
      cell.dataset.col;

    const key =
      `${row}_${col}`;

    if (
      Object.prototype.hasOwnProperty.call(
        data,
        key
      )
    ) {

      cell.value =
        data[key];

    }

  });
}


async function generateSpreadsheetPDF() {

  // Guardar lo que el alumno escribió
  saveSpreadsheetData(currentSpreadsheetExercise);

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF("p", "mm", "a4");

  const exercise =
    exercises["tarea_3"][currentSpreadsheetExercise];

  if (!exercise) {

    alert("No se encontró el ejercicio.");

    return;
  }


  /* =========================================
     OBTENER IMAGEN DEL EJERCICIO
  ========================================= */

  const imagePaths = [
    "./imagenes/ejercicio1-t3.png",
    "./imagenes/ejercicio2-t3.png",
    "./imagenes/ejercicio3-t3.png"
  ];

  const imagePath =
    imagePaths[currentSpreadsheetExercise];


  // Función para cargar la imagen
  const loadImage = (src) => {

    return new Promise((resolve, reject) => {

      const img = new Image();

      img.onload = () => resolve(img);

      img.onerror = () =>
        reject(
          new Error("No se pudo cargar la imagen.")
        );

      img.src = src;

    });

  };


  let exerciseImage = null;

  try {

    exerciseImage =
      await loadImage(imagePath);

  } catch (error) {

    console.error(error);

  }


  /* =========================================
     PÁGINA 1
     ENUNCIADO
  ========================================= */

  doc.setFontSize(20);

  doc.text(
    "T.I.C. I",
    105,
    20,
    {
      align: "center"
    }
  );


  doc.setFontSize(16);

  doc.text(
    exercise.title,
    105,
    30,
    {
      align: "center"
    }
  );


  doc.setFontSize(10);

  doc.text(
    "Tecnologías de la Información y la Comunicación I",
    105,
    38,
    {
      align: "center"
    }
  );


  // Imagen del ejercicio

  if (exerciseImage) {

    const imageWidth = 175;
    const imageHeight = 100;

    doc.addImage(
      exerciseImage,
      "PNG",
      17,
      50,
      imageWidth,
      imageHeight
    );

  }


  doc.setFontSize(11);

  doc.text(
    "Enunciado del ejercicio",
    20,
    160
  );


  doc.setFontSize(10);

  const instruction =
    "Ingresa los datos indicados en el ejercicio, " +
    "aplica las fórmulas solicitadas y genera el gráfico correspondiente.";

  const instructionLines =
    doc.splitTextToSize(
      instruction,
      170
    );

  doc.text(
    instructionLines,
    20,
    168
  );


  doc.setFontSize(8);

  doc.text(
    "T.I.C. I - Tarea 3",
    105,
    290,
    {
      align: "center"
    }
  );


  /* =========================================
     PÁGINA 2
     TRABAJO DEL ALUMNO
  ========================================= */

  doc.addPage();


  doc.setFontSize(18);

  doc.text(
    "Trabajo realizado",
    105,
    20,
    {
      align: "center"
    }
  );


  doc.setFontSize(14);

  doc.text(
    exercise.title,
    15,
    35
  );


  /* =========================================
     TABLA DE DATOS
  ========================================= */

  doc.setFontSize(13);

  doc.text(
    "Datos ingresados",
    15,
    48
  );


  const cells =
    document.querySelectorAll(
      ".spreadsheet-cell"
    );


  const rows = {};


  cells.forEach(cell => {

    const row =
      Number(cell.dataset.row);

    const col =
      Number(cell.dataset.col);


    if (!rows[row]) {

      rows[row] = [];

    }


    rows[row][col] =
      cell.value;

  });


  let tableY = 57;

  const cellWidth = 42;

  const cellHeight = 8;


  doc.setFontSize(9);


  Object.keys(rows).forEach(
    rowNumber => {

      let x = 15;


      rows[rowNumber].forEach(
        value => {

          doc.rect(
            x,
            tableY,
            cellWidth,
            cellHeight
          );


          doc.text(
            String(value || ""),
            x + 2,
            tableY + 5
          );


          x += cellWidth;

        }
      );


      tableY += cellHeight;

    }
  );


  /* =========================================
     FÓRMULA
  ========================================= */

  tableY += 10;


  doc.setFontSize(13);

  doc.text(
    "Fórmula utilizada",
    15,
    tableY
  );


  tableY += 7;


  doc.setFontSize(10);

  const formula =
    formulaInput.value || "No se ingresó fórmula.";


  doc.text(
    formula,
    15,
    tableY
  );


  /* =========================================
     RESULTADO
  ========================================= */

  tableY += 12;


  doc.setFontSize(13);

  doc.text(
    "Resultado",
    15,
    tableY
  );


  tableY += 7;


  doc.setFontSize(11);

  doc.text(
    formulaResult.textContent || "-",
    15,
    tableY
  );


  /* =========================================
     GRÁFICO
  ========================================= */

  if (
    spreadsheetCanvas &&
    spreadsheetCanvas.width > 0 &&
    spreadsheetCanvas.height > 0
  ) {

    tableY += 15;


    doc.setFontSize(13);

    doc.text(
      "Gráfico generado",
      15,
      tableY
    );


    tableY += 5;


    const chartImage =
      spreadsheetCanvas.toDataURL(
        "image/png"
      );


    doc.addImage(
      chartImage,
      "PNG",
      15,
      tableY,
      180,
      100
    );

  }


  /* =========================================
     PIE DE PÁGINA
  ========================================= */

  doc.setFontSize(8);

  doc.text(
    "T.I.C. I - Tarea 3",
    105,
    290,
    {
      align: "center"
    }
  );


  /* =========================================
     GUARDAR PDF
  ========================================= */

  const fileName =
    `Tarea_3_Ejercicio_${currentSpreadsheetExercise + 1}.pdf`;


  doc.save(fileName);

}



function getColumnName(number) {

  let name = "";

  while (number > 0) {

    const remainder =
      (number - 1) % 26;

    name =
      String.fromCharCode(
        65 + remainder
      ) + name;

    number =
      Math.floor(
        (number - 1) / 26
      );

  }

  return name;

}

clearSheetBtn.addEventListener(
  "click",
  () => {

    createSpreadsheet();

    formulaInput.value = "";

    formulaResult.textContent = "-";

  }
);

//FORMULAS

calculateFormulaBtn.addEventListener(
  "click",
  applySpreadsheetFormula
);

function applySpreadsheetFormula() {

  const formula =
    formulaInput.value.trim();

  if (!formula) {

    formulaResult.textContent =
      "Escribe una fórmula";

    return;

  }

  try {

    const result =
      calculateFormula(formula);

    formulaResult.textContent =
      result;

  } catch (error) {

    formulaResult.textContent =
      "❌ Fórmula no válida";

    console.error(error);

  }

}


function calculateFormula(formula) {

  let expression =
    formula
      .toUpperCase()
      .trim();


  if (expression.startsWith("=")) {

    expression =
      expression.substring(1);

  }


  // =========================================
  // SI
  // =========================================

  if (expression.startsWith("SI(")) {

    return calculateSI(expression);

  }


  // =========================================
  // SUMA
  // =========================================

  if (expression.startsWith("SUMA(")) {

    const values =
      getRangeValues(expression);

    return values.reduce(
      (total, value) =>
        total + value,
      0
    );

  }


  // =========================================
  // PROMEDIO
  // =========================================

  if (expression.startsWith("PROMEDIO(")) {

    const values =
      getRangeValues(expression);

    if (values.length === 0) {

      return 0;

    }

    return (
      values.reduce(
        (a, b) => a + b,
        0
      ) / values.length
    );

  }


  // =========================================
  // MIN
  // =========================================

  if (expression.startsWith("MIN(")) {

    const values =
      getRangeValues(expression);

    return Math.min(...values);

  }


  // =========================================
  // MAX
  // =========================================

  if (expression.startsWith("MAX(")) {

    const values =
      getRangeValues(expression);

    return Math.max(...values);

  }


  // =========================================
  // OPERACIONES
  // =========================================

  expression =
    expression.replace(
      /([A-Z]+)(\d+)/g,
      (_, column, row) => {

        return getCellValue(
          column,
          Number(row)
        );

      }
    );


  if (
    /^[0-9+\-*/().]+$/.test(
      expression
    )
  ) {

    return Function(
      `"use strict"; return (${expression})`
    )();

  }


  throw new Error(
    "Fórmula no reconocida"
  );

}

// FUNCIÓN SI 

function calculateSI(expression) {

  const inside =
    expression.substring(
      3,
      expression.length - 1
    );


  const parts =
    splitFormulaArguments(
      inside
    );


  if (parts.length !== 3) {

    throw new Error(
      "La función SI necesita 3 argumentos"
    );

  }


  const condition =
    evaluateCondition(
      parts[0]
    );


  if (condition) {

    return evaluateFormulaValue(
      parts[1]
    );

  }


  return evaluateFormulaValue(
    parts[2]
  );

}

// SISTEMA DE CONDICIONES 

function evaluateCondition(condition) {

  condition =
    condition.trim();


  // Y

  if (
    condition.startsWith("Y(")
  ) {

    const inside =
      condition.substring(
        2,
        condition.length - 1
      );

    const parts =
      splitFormulaArguments(
        inside
      );

    return parts.every(
      part =>
        evaluateCondition(part)
    );

  }


  // O

  if (
    condition.startsWith("O(")
  ) {

    const inside =
      condition.substring(
        2,
        condition.length - 1
      );

    const parts =
      splitFormulaArguments(
        inside
      );

    return parts.some(
      part =>
        evaluateCondition(part)
    );

  }


  // Convertir referencias de celdas

  condition =
    condition.replace(
      /([A-Z]+)(\d+)/g,
      (_, column, row) => {

        return getCellValue(
          column,
          Number(row)
        );

      }
    );


  if (
    condition.includes(">=")
  ) {

    const [a, b] =
      condition.split(">=");

    return (
      Number(a) >= Number(b)
    );

  }


  if (
    condition.includes("<=")
  ) {

    const [a, b] =
      condition.split("<=");

    return (
      Number(a) <= Number(b)
    );

  }


  if (
    condition.includes("<>")
  ) {

    const [a, b] =
      condition.split("<>");

    return (
      Number(a) !== Number(b)
    );

  }


  if (
    condition.includes("=")
  ) {

    const [a, b] =
      condition.split("=");

    return (
      Number(a) === Number(b)
    );

  }


  if (
    condition.includes(">")
  ) {

    const [a, b] =
      condition.split(">");

    return (
      Number(a) > Number(b)
    );

  }


  if (
    condition.includes("<")
  ) {

    const [a, b] =
      condition.split("<");

    return (
      Number(a) < Number(b)
    );

  }


  return false;

}

// ARGUMENTOS DE FUNCIONES 

function splitFormulaArguments(text) {

  const parts = [];

  let current = "";

  let level = 0;


  for (
    let i = 0;
    i < text.length;
    i++
  ) {

    const char =
      text[i];


    if (char === "(") {

      level++;

    }


    if (char === ")") {

      level--;

    }


    if (
      char === ";" &&
      level === 0
    ) {

      parts.push(
        current.trim()
      );

      current = "";

    }

    else {

      current += char;

    }

  }


  if (current.trim()) {

    parts.push(
      current.trim()
    );

  }


  return parts;

}

// DEVOLVER TEXTO 

function evaluateFormulaValue(value) {

  value =
    value.trim();


  // Texto

  if (
    value.startsWith('"') &&
    value.endsWith('"')
  ) {

    return value.substring(
      1,
      value.length - 1
    );

  }


  // Si es otra función

  if (
    value.startsWith("SI(")
  ) {

    return calculateSI(
      value
    );

  }


  // Si es una celda

  const cellMatch =
    value.match(
      /^([A-Z]+)(\d+)$/
    );


  if (cellMatch) {

    return getCellValue(
      cellMatch[1],
      Number(cellMatch[2])
    );

  }


  // Número

  const number =
    Number(value);


  if (!isNaN(number)) {

    return number;

  }


  return value;

}




function getCellValue(
  column,
  row
) {

  const columnNumber =
    column
      .split("")
      .reduce(
        (total, letter) =>
          total * 26 +
          letter.charCodeAt(0) -
          64,
        0
      );

  const cell =
    document.querySelector(
      `.spreadsheet-cell[data-row="${row}"][data-col="${columnNumber - 1}"]`
    );

  if (!cell) {

    return 0;

  }

  const value =
    parseFloat(
      cell.value
    );

  return isNaN(value)
    ? 0
    : value;

}

function getSelectedSpreadsheetRange() {

    if (
        !selectedSpreadsheetCells ||
        selectedSpreadsheetCells.length === 0
    ) {
        return null;
    }

    const rows =
        selectedSpreadsheetCells.map(cell =>
            Number(cell.dataset.row)
        );

    const cols =
        selectedSpreadsheetCells.map(cell =>
            Number(cell.dataset.col)
        );

    const minRow = Math.min(...rows);
    const maxRow = Math.max(...rows);

    const minCol = Math.min(...cols);
    const maxCol = Math.max(...cols);

const startColumn =
    getColumnName(minCol + 1);

const endColumn =
    getColumnName(maxCol + 1);

    return `${startColumn}${minRow}:${endColumn}${maxRow}`;
}

function getRangeValues(expression) {

    const match =
        expression.match(
            /([A-Z]+)(\d+):([A-Z]+)(\d+)/
        );

    if (!match) {
        return [];
    }

    const startColumn =
        columnToNumber(match[1]);

    const startRow =
        Number(match[2]);

    const endColumn =
        columnToNumber(match[3]);

    const endRow =
        Number(match[4]);

    const values = [];

    for (
        let row = startRow;
        row <= endRow;
        row++
    ) {

        for (
            let col = startColumn;
            col <= endColumn;
            col++
        ) {

            const value =
                getCellValue(
                    getColumnName(col),
                    row
                );

            values.push(value);
        }
    }

    return values;
}

 function columnToNumber(column) {

  return column
    .split("")
    .reduce(
      (total, letter) =>
        total * 26 +
        letter.charCodeAt(0) -
        64,
      0
    );

 }

 document
  .querySelectorAll(
    ".formula-buttons button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const formula =
          button.dataset.formula;

       if (formula === "SUMA") {

    const range =
        getSelectedSpreadsheetRange();

    if (!range) {
        alert("Primero selecciona un rango de celdas.");
        return;
    }

    formulaInput.value =
        `=SUMA(${range})`;

}

else if (formula === "PROMEDIO") {

    const range =
        getSelectedSpreadsheetRange();

    if (!range) {
        alert("Primero selecciona un rango de celdas.");
        return;
    }

    formulaInput.value =
        `=PROMEDIO(${range})`;

}

else if (formula === "MIN") {

    const range =
        getSelectedSpreadsheetRange();

    if (!range) {
        alert("Primero selecciona un rango de celdas.");
        return;
    }

    formulaInput.value =
        `=MIN(${range})`;

}

else if (formula === "MAX") {

    const range =
        getSelectedSpreadsheetRange();

    if (!range) {
        alert("Primero selecciona un rango de celdas.");
        return;
    }

    formulaInput.value =
        `=MAX(${range})`;

}

        else if (formula === "SI") {

  formulaInput.value =
    '=SI(A1>=60;"APROBADO";"REPROBADO")';

 }

else if (
  formula === "SI_ANIDADO"
) {

  formulaInput.value =
    '=SI(A1>=80;"EXCELENTE";SI(A1>=60;"APROBADO";"REPROBADO"))';

}

        else {

          formulaInput.value =
            "=A1+B1";

        }

      }
    );

  });


  spreadsheetBackBtn.addEventListener(
  "click",
  () => {

    spreadsheetSection.classList.add(
      "hidden"
    );

    showPracticalExercises(
      currentSubject
    );

  }
);




/* =====================================================
   GRÁFICOS
===================================================== */

barChartBtn.addEventListener(
  "click",
  () => {

    createSpreadsheetChart("bar");

  }
);


lineChartBtn.addEventListener(
  "click",
  () => {

    createSpreadsheetChart("line");

  }
);


pieChartBtn.addEventListener(
  "click",
  () => {

    createSpreadsheetChart("pie");

  }
);


function createSpreadsheetChart(type) {

    const labels = [];
    const values = [];

    // Obtener las filas de la hoja
    const rows = document.querySelectorAll(
        "#spreadsheetTable tbody tr"
    );

    rows.forEach(row => {

        const cells = row.querySelectorAll(
            ".spreadsheet-cell"
        );

        // Necesitamos al menos columna A y B
        if (cells.length < 2) {
            return;
        }

        const label = cells[0].value.trim();

        const value = parseFloat(
            cells[1].value
        );

        // Ignorar filas vacías o encabezados
        if (
            label !== "" &&
            !isNaN(value)
        ) {

            labels.push(label);
            values.push(value);

        }

    });

    // Verificar que haya datos
    if (values.length === 0) {

        alert(
            "Ingresa una etiqueta en la columna A y un número en la columna B."
        );

        return;
    }

    // Eliminar gráfico anterior
    if (spreadsheetChartInstance) {

        spreadsheetChartInstance.destroy();

        spreadsheetChartInstance = null;
    }

    // Crear nuevo gráfico
    spreadsheetChartInstance =
        new Chart(
            spreadsheetCanvas,
            {

                type: type,

                data: {

                    labels: labels,

                    datasets: [

                        {
                            label: "Ventas",
                            data: values
                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    animation: false,

                    resizeDelay: 100

                }

            }
        );
}



/*==============================
EJERCICIOS INTEGRADORES AUTO
===================================*/
function showIntegrativeExercises(subject) {

  const activities =
    integrativeExercises[subject];


  if (!activities || activities.length === 0) {

    alert(
      "Todavía no hay ejercicios integradores disponibles."
    );

    return;

  }


  taskMenuSection.classList.add(
    "hidden"
  );

  dashboardSection.classList.add(
    "hidden"
  );

  contentSection.classList.add(
    "hidden"
  );

  quizSection.classList.add(
    "hidden"
  );


  integrativeSection.classList.remove(
    "hidden"
  );


  document
    .getElementById("integrativeTitle")
    .textContent =
    `${subjectNames[subject]} - Integradores`;


  integrativeContainer.innerHTML = "";


  activities.forEach(
    (activity, activityIndex) => {


      /* =========================
         PREGUNTA ABIERTA
      ========================= */

      if (activity.type === "text") {

        const card =
          document.createElement("div");


        card.className =
          "integrative-card";


        card.innerHTML = `

          <h3>
            ${activityIndex + 1}.
            ${activity.question}
          </h3>

          <textarea
            class="integrative-answer"
            data-activity="${activityIndex}"
            placeholder="Escribe tu respuesta aquí..."
          ></textarea>

        `;


        integrativeContainer.appendChild(
          card
        );

      }


      /* =========================
         CUADRO COMPARATIVO
      ========================= */

      if (
        activity.type ===
        "comparison"
      ) {

        const card =
          document.createElement("div");


        card.className =
          "integrative-card";


        let tableHTML = `

          <h3>
            ${activityIndex + 1}.
            ${activity.title}
          </h3>

          <div class="comparison-wrapper">

          <table class="comparison-table">

            <thead>

              <tr>

        `;


        activity.columns.forEach(
          column => {

            tableHTML += `
              <th>
                ${column}
              </th>
            `;

          }
        );


        tableHTML += `

              </tr>

            </thead>

            <tbody>

        `;


        activity.rows.forEach(
          (row, rowIndex) => {

            tableHTML += `

              <tr>

                <td class="comparison-label">
                  ${row}
                </td>

            `;


            for (
              let columnIndex = 1;
              columnIndex <
              activity.columns.length;
              columnIndex++
            ) {

              tableHTML += `

                <td>

                  <textarea
                    class="comparison-answer"
                    data-activity="${activityIndex}"
                    data-row="${rowIndex}"
                    data-column="${columnIndex}"
                    placeholder="Escribe..."
                  ></textarea>

                </td>

              `;

            }


            tableHTML += `

              </tr>

            `;

          }
        );


        tableHTML += `

            </tbody>

          </table>

          </div>

        `;


        card.innerHTML =
          tableHTML;


        integrativeContainer.appendChild(
          card
        );

      }

    }
  );


  restoreIntegrativeAnswers(
    subject
  );

}

// SALVAR RESPUESTAS 

if (saveIntegrativeBtn) {

  saveIntegrativeBtn.addEventListener(
    "click",
    saveIntegrativeAnswers
  );

}

function saveIntegrativeAnswers() {

  const data = {

    student:
      student.name,

    grade:
      student.grade,

    subject:
      currentSubject,

    date:
      new Date()
        .toLocaleString("es-GT"),

    textAnswers: [],

    comparisonAnswers: []

  };


  /* PREGUNTAS ABIERTAS */

  document
    .querySelectorAll(
      ".integrative-answer"
    )
    .forEach(textarea => {

      data.textAnswers.push({

        activity:
          Number(
            textarea.dataset.activity
          ),

        answer:
          textarea.value

      });

    });


  /* CUADROS COMPARATIVOS */

  document
    .querySelectorAll(
      ".comparison-answer"
    )
    .forEach(textarea => {

      data.comparisonAnswers.push({

        activity:
          Number(
            textarea.dataset.activity
          ),

        row:
          Number(
            textarea.dataset.row
          ),

        column:
          Number(
            textarea.dataset.column
          ),

        answer:
          textarea.value

      });

    });


  const key =
    `integrative_${student.name}_${currentSubject}`;


  localStorage.setItem(
    key,
    JSON.stringify(data)
  );


  integrativeMessage.textContent =
    "✅ Respuestas guardadas correctamente.";

}

// POR SI RECARGAN 

function restoreIntegrativeAnswers(subject) {

  const key =
    `integrative_${student.name}_${subject}`;


  const saved =
    localStorage.getItem(key);


  if (!saved) {
    return;
  }


  const data =
    JSON.parse(saved);


  data.textAnswers.forEach(
    item => {

      const textarea =
        document.querySelector(
          `.integrative-answer[data-activity="${item.activity}"]`
        );


      if (textarea) {

        textarea.value =
          item.answer;

      }

    }
  );


  data.comparisonAnswers.forEach(
    item => {

      const textarea =
  document.querySelector(
    `.comparison-answer[data-activity="${item.activity}"][data-row="${item.row}"][data-column="${item.column}"]`
  );


      if (textarea) {

        textarea.value =
          item.answer;

      }

    }
  );

}


// pdf integrador

async function generateIntegrativePDF() {

  try {

    /* ================================
       VERIFICAR JSPDF
    ================================= */

    if (!window.jspdf) {

      alert("No se pudo cargar la librería PDF.");

      return;
    }

    const { jsPDF } = window.jspdf;


    /* ================================
       GUARDAR RESPUESTAS ACTUALES
    ================================= */

    saveIntegrativeAnswers();


    const key =
      `integrative_${student.name}_${currentSubject}`;


    const saved =
      localStorage.getItem(key);


    if (!saved) {

      alert(
        "Primero debes guardar tus respuestas."
      );

      return;
    }


    const data =
      JSON.parse(saved);


    const activities =
      integrativeExercises[currentSubject];


    if (!activities) {

      alert(
        "No existen actividades integradoras."
      );

      return;
    }


    /* ================================
       CREAR PDF
    ================================= */

    const doc =
      new jsPDF();


    let y = 20;



    /* ================================
       ENCABEZADO
    ================================= */

    doc.setFont(
      "helvetica",
      "bold"
    );


    doc.setFontSize(18);

    doc.text(
      "Liceo Nueva Generación",
      20,
      20
    );


    doc.setFontSize(11);


    doc.text(
      "Curso: T.I.C. I",
      20,
      26
    );


    doc.text(
      `Nombre: ${student.name}`,
      20,
      30
    );


    doc.text(
      `Grado: ${student.grade}`,
      20,
      34
    );


    doc.text(
      `Clave: ${student.code || ""}`,
      20,
      38
    );


    doc.text(
      `Profesor: ${student.teacher || ""}`,
      20,
      42
    );



    /* ================================
       LOGO
    ================================= */

    try {

      const response =
        await fetch(
          "./imagenes/logolng.png"
        );


      const blob =
        await response.blob();


      const logoBase64 =
        await new Promise(
          (resolve, reject) => {

            const reader =
              new FileReader();


            reader.onload =
              () => resolve(
                reader.result
              );


            reader.onerror =
              reject;


            reader.readAsDataURL(
              blob
            );

          }
        );


      doc.addImage(
        logoBase64,
        "PNG",
        145,
        12,
        40,
        28
      );


    } catch (error) {

      console.error(
        "No se pudo cargar el logo:",
        error
      );

    }



    /* ================================
       LÍNEA DEL ENCABEZADO
    ================================= */

    doc.setLineWidth(0.4);


    doc.line(
      20,
      46,     //58,
      190,
      46     //58
    );


    y = 54;     //72;



    /* ================================
       TÍTULO
    ================================= */

    doc.setFontSize(15);

    doc.setFont(
      "helvetica",
      "bold"
    );


    doc.text(
      "Ejercicios Integradores",
      20,
      y
    );


    y += 10;



    doc.setFontSize(10);


    doc.text(
      `Tarea: ${subjectNames[currentSubject]}`,
      20,
      y
    );


    y += 6;


    doc.text(
      `Fecha: ${data.date}`,
      20,
      y
    );


    y += 6;


    doc.text(
      "Nota: Pendiente de revisión",
      20,
      y
    );


    y += 10;


    doc.line(
      20,
      y,
      190,
      y
    );


    y += 10;



    /* ================================
       RECORRER ACTIVIDADES
    ================================= */

    activities.forEach(
      (activity, activityIndex) => {


        /* =================================
           PREGUNTA ABIERTA
        ================================= */

        if (
          activity.type === "text"
        ) {


          const savedAnswer =
            data.textAnswers.find(
              item =>
                item.activity ===
                activityIndex
            );


          const answer =
            savedAnswer
              ? savedAnswer.answer
              : "Sin responder";


          /* Nueva página */

          if (y > 245) {

            doc.addPage();

            y = 20;

          }


          doc.setFont(
            "helvetica",
            "bold"
          );


          doc.setFontSize(10);


          const questionLines =
            doc.splitTextToSize(

              `${activityIndex + 1}. ${activity.question}`,

              165

            );


          doc.text(
            questionLines,
            20,
            y
          );


          y +=
            questionLines.length * 6;


          y += 3;



          /* RESPUESTA */

          doc.setFont(
            "helvetica",
            "normal"
          );


          const answerLines =
            doc.splitTextToSize(

              `Respuesta: ${answer}`,

              160

            );


          doc.text(
            answerLines,
            25,
            y
          );


          y +=
            answerLines.length * 6;


          y += 10;

        }



        /* =================================
           CUADRO COMPARATIVO
        ================================= */

        if (
          activity.type ===
          "comparison"
        ) {


          if (y > 220) {

            doc.addPage();

            y = 20;

          }


          doc.setFont(
            "helvetica",
            "bold"
          );


          doc.setFontSize(10);


          const titleLines =
            doc.splitTextToSize(

              `${activityIndex + 1}. ${activity.title}`,

              165

            );


          doc.text(
            titleLines,
            20,
            y
          );


          y +=
            titleLines.length * 6 + 5;



          /* =============================
             ENCABEZADOS TABLA
          ============================= */


          const startX = 20;


          const widths = [
            50,
            60,
            60
          ];


          const headerHeight =
            12;


          let currentX =
            startX;


          doc.setFont(
            "helvetica",
            "bold"
          );


          activity.columns.forEach(
            (column, columnIndex) => {


              doc.rect(
                currentX,
                y,
                widths[columnIndex],
                headerHeight
              );


              const columnLines =
                doc.splitTextToSize(
                  column,
                  widths[columnIndex] - 4
                );


              doc.text(
                columnLines,
                currentX + 2,
                y + 5
              );


              currentX +=
                widths[columnIndex];

            }
          );


          y += headerHeight;



          /* =============================
             FILAS DE LA TABLA
          ============================= */

          activity.rows.forEach(
            (row, rowIndex) => {


              const cell1 =
                doc.splitTextToSize(
                  row,
                  widths[0] - 4
                );


              const answer1Data =
                data.comparisonAnswers.find(
                  item =>

                    item.activity ===
                      activityIndex &&

                    item.row ===
                      rowIndex &&

                    item.column === 1

                );


              const answer2Data =
                data.comparisonAnswers.find(
                  item =>

                    item.activity ===
                      activityIndex &&

                    item.row ===
                      rowIndex &&

                    item.column === 2

                );


              const cell2 =
                doc.splitTextToSize(

                  answer1Data?.answer ||
                  "Sin responder",

                  widths[1] - 4

                );


              const cell3 =
                doc.splitTextToSize(

                  answer2Data?.answer ||
                  "Sin responder",

                  widths[2] - 4

                );


              const maxLines =
                Math.max(
                  cell1.length,
                  cell2.length,
                  cell3.length
                );


              const rowHeight =
                maxLines * 5 + 6;



              /* Verificar nueva página */

              if (
                y + rowHeight >
                280
              ) {

                doc.addPage();

                y = 20;

              }



              currentX =
                startX;


              /* PRIMERA CELDA */

              doc.rect(
                currentX,
                y,
                widths[0],
                rowHeight
              );


              doc.setFont(
                "helvetica",
                "bold"
              );


              doc.text(
                cell1,
                currentX + 2,
                y + 5
              );


              currentX +=
                widths[0];



              /* SEGUNDA CELDA */

              doc.rect(
                currentX,
                y,
                widths[1],
                rowHeight
              );


              doc.setFont(
                "helvetica",
                "normal"
              );


              doc.text(
                cell2,
                currentX + 2,
                y + 5
              );


              currentX +=
                widths[1];



              /* TERCERA CELDA */

              doc.rect(
                currentX,
                y,
                widths[2],
                rowHeight
              );


              doc.text(
                cell3,
                currentX + 2,
                y + 5
              );


              y +=
                rowHeight;

            }
          );


          y += 12;

        }

      }
    );



    /* ================================
       GUARDAR PDF
    ================================= */

    const safeName =
      student.name.replace(
        /[^a-zA-Z0-9_-]/g,
        "_"
      );


    doc.save(
      `Integrador_${safeName}_${currentSubject}.pdf`
    );


  } catch (error) {

    console.error(
      "Error generando PDF integrador:",
      error
    );


    alert(
      "Ocurrió un error al generar el PDF."
    );

  }

}

/* =====================================================
   SELECCIONAR UNA TAREA
===================================================== */

document
  .querySelectorAll(".subject-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      /*
        IMPORTANTE:

        Ya no ejecutamos startQuiz() aquí.

        Primero abrimos el menú de la tarea.
      */

      openTask(
        card.dataset.subject
      );

    });

  });



/* =====================================================
   BOTÓN CONTENIDO
===================================================== */

contentBtn.addEventListener("click", () => {

  showContent(
    currentSubject
  );

});



/* =====================================================
   BOTÓN EJERCICIOS
===================================================== */

exerciseBtn.addEventListener("click", () => {

  console.log("BOTÓN EJERCICIOS");
  console.log("currentSubject:", currentSubject);

  if (!exerciseStatus[currentSubject]) {

    alert(
      "Los ejercicios de esta actividad aún no están habilitados."
    );

    return;
  }

  if (currentSubject === "tarea_3") {

    console.log("ABRIENDO EJERCICIOS PRÁCTICOS");

    showPracticalExercises("tarea_3");

    return;
  }

  console.log("ABRIENDO EJERCICIOS NORMALES");

  startQuiz(currentSubject);

});


/* =====================================================
   VOLVER DESDE EL MENÚ DE LA TAREA
===================================================== */

taskBackBtn.addEventListener("click", () => {

  showDashboard();

});



/* =====================================================
   VOLVER DESDE CONTENIDO
===================================================== */

contentBackBtn.addEventListener("click", () => {

  openTask(
    currentSubject
  );

});



/* =====================================================
   INGRESAR AL SISTEMA
===================================================== */

function enterStudent() {

  const name =
    studentNameInput.value.trim();

  const grade =
    studentGradeInput.value.trim();
  
  const code = 
    studentCodeInput.value.trim();
  
  const teacher = 
    teacherNameInput.value.trim();

  if (!name || !grade || !code || !teacher) {

    loginError.textContent =
      "Por favor complete todos los datos que se le piden.";

    return;
  }


  student = {

    name: name,

    grade: grade, 

    code: code,

    teacher: teacher

  };


  localStorage.setItem(
    "aulaStudent",
    JSON.stringify(student)
  );


  loginError.textContent = "";


  showDashboard();

}



/* =====================================================
   PANEL PRINCIPAL
===================================================== */

function showDashboard() {

  if (!student) {
    return;
  }


  loginSection.classList.add(
    "hidden"
  );


  taskMenuSection.classList.add(
    "hidden"
  );


  contentSection.classList.add(
    "hidden"
  );


  quizSection.classList.add(
    "hidden"
  );


  resultSection.classList.add(
    "hidden"
  );


  dashboardSection.classList.remove(
    "hidden"
  );


  logoutBtn.classList.remove(
    "hidden"
  );


  document
    .getElementById("welcomeText")
    .textContent =
    `¡Hola, ${student.name}, Bienvenido!`;


  document
    .getElementById("gradeText")
    .textContent =
    student.grade;


  renderHistory();

}



/* =====================================================
   ABRIR UNA TAREA
===================================================== */

function openTask(subject) {

  currentSubject = subject;


  dashboardSection.classList.add(
    "hidden"
  );


  contentSection.classList.add(
    "hidden"
  );


  quizSection.classList.add(
    "hidden"
  );


  resultSection.classList.add(
    "hidden"
  );


  taskMenuSection.classList.remove(
    "hidden"
  );


  document
    .getElementById("taskMenuTitle")
    .textContent =
    subjectNames[subject];


    // estados de ejercicios. 

    const enabled =
    exerciseStatus[subject];


  if (enabled) {

    exerciseBtn.disabled = false;

    exerciseBtn.classList.remove(
      "exercise-disabled"
    );

    exerciseBtn.innerHTML = `
      <span class="option-icon">✏️</span>

      <h3>Ejercicios</h3>

      <p>
        Responde las preguntas interactivas.
      </p>
    `;

  } else {

    exerciseBtn.disabled = true;

    exerciseBtn.classList.add(
      "exercise-disabled"
    );

    exerciseBtn.innerHTML = `
      <span class="option-icon">🔒</span>

      <h3>Ejercicios</h3>

      <p>
        Los ejercicios aún no están habilitados.
      </p>
    `;

  }



}



/* =====================================================
   MOSTRAR CONTENIDO
===================================================== */

function showContent(subject) {

  const data =
    contents[subject];


  if (!data) {

    alert(
      "No existe contenido para esta tarea."
    );

    return;

  }


  dashboardSection.classList.add(
    "hidden"
  );


  taskMenuSection.classList.add(
    "hidden"
  );


  quizSection.classList.add(
    "hidden"
  );


  resultSection.classList.add(
    "hidden"
  );


  contentSection.classList.remove(
    "hidden"
  );


  document
    .getElementById("contentTitle")
    .textContent =
    data.title;


  const container =
    document.getElementById(
      "topicsContainer"
    );


  container.innerHTML = "";


  data.topics.forEach(
    (topic, index) => {

      const topicCard =
        document.createElement("div");


      topicCard.className =
        "card topic-card";


      topicCard.innerHTML = `

        <div class="topic-title">

          <span class="topic-icon">

            ${topic.icon}

          </span>


          <div>

            <span class="topic-number">

              Tema ${index + 1}

            </span>


            <h3>

              ${topic.title}

            </h3>

          </div>

        </div>


        <div class="topic-content">

          ${topic.content}

        </div>

      `;


      container.appendChild(
        topicCard
      );

    });

}

/* =====================================================
   MOSTRAR EJERCICIOS PRÁCTICOS - TAREA 3
===================================================== */

function showPracticalExercises(subject) {

  const practicalExercises =
    exercises[subject];

  if (
    !practicalExercises ||
    practicalExercises.length === 0
  ) {

    alert(
      "No existen ejercicios prácticos para esta tarea."
    );

    return;
  }


  // Ocultar secciones

  dashboardSection.classList.add("hidden");

  taskMenuSection.classList.add("hidden");

  contentSection.classList.add("hidden");

  quizSection.classList.add("hidden");

  resultSection.classList.add("hidden");


  // Mostrar sección práctica

  const practicalSection =
    document.getElementById(
      "practicalExercisesSection"
    );

  practicalSection.classList.remove("hidden");


  // Título

  document.getElementById(
    "practicalExercisesSubject"
  ).textContent =
    subjectNames[subject];


  // Contenedor

  const container =
    document.getElementById(
      "practicalExercisesContainer"
    );

  container.innerHTML = "";


  // Crear ejercicios

  practicalExercises.forEach(
    (exercise, index) => {

      const card =
        document.createElement("div");

      card.className =
        "practical-exercise-card";


      card.innerHTML = `

        <h3>
          ${exercise.title}
        </h3>

        <div class="practical-exercise-content">

          ${exercise.content}

        </div>

      `;


      container.appendChild(card);

    }
  );

}

document
  .getElementById("practicalExercisesBackBtn")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById(
          "practicalExercisesSection"
        )
        .classList.add("hidden");

      taskMenuSection
        .classList
        .remove("hidden");

    }
  );

/* =====================================================
   INICIAR EJERCICIO
===================================================== */

function startQuiz(subject) {

  if (!exercises[subject]) {

    console.error(
      "No existen preguntas para:",
      subject
    );


    alert(
      "No se encontraron ejercicios para esta tarea."
    );


    return;

  }


  currentSubject = subject;

  currentQuestion = 0;

  score = 0;

  answered = false;
  selectedAnswers = [];


  dashboardSection.classList.add(
    "hidden"
  );


  taskMenuSection.classList.add(
    "hidden"
  );


  contentSection.classList.add(
    "hidden"
  );


  resultSection.classList.add(
    "hidden"
  );


  quizSection.classList.remove(
    "hidden"
  );


  renderQuestion();

}



/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */

function renderQuestion() {

  const questions = exercises[currentSubject];

  if (!questions) {
    console.error(
      "No existen preguntas para:",
      currentSubject
    );
    return;
  }

  if (questions.length === 0) {
    console.error(
      "La tarea no tiene preguntas."
    );
    return;
  }

  // SOLO UNA DECLARACIÓN DE item
  const item = questions[currentQuestion];

  answered = false;

  nextBtn.classList.add("hidden");

  document.getElementById("quizSubject").textContent =
    subjectNames[currentSubject];

  document.getElementById("questionText").textContent =
    item.question;

  document.getElementById("questionCounter").textContent =
    `${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("progressFill").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  const feedback =
    document.getElementById("feedback");

  feedback.textContent = "";
  feedback.className = "feedback";

  const answersContainer =
    document.getElementById("answersContainer");

  answersContainer.innerHTML = "";

  item.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.className = "answer-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      selectAnswer(index, button);
    });

    answersContainer.appendChild(button);
  });
}



/* =====================================================
   SELECCIONAR RESPUESTA
===================================================== */

function selectAnswer(index, selectedButton) {

  if (answered) {
    return;
  }

  answered = true;

  selectedAnswers[currentQuestion] = index;

  const item =
    exercises[currentSubject][currentQuestion];

  const buttons =
    document.querySelectorAll(".answer-btn");

  const feedback =
    document.getElementById("feedback");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (index === item.answer) {

    score++;

    selectedButton.classList.add("correct");

    feedback.textContent =
      "✅ ¡Correcto!";

    feedback.classList.add("correct-text");

  } else {

    selectedButton.classList.add("incorrect");

    buttons[item.answer].classList.add("correct");

    feedback.textContent =
      `❌ Respuesta correcta: ${item.options[item.answer]}`;

    feedback.classList.add("incorrect-text");
  }

  if (
    currentQuestion ===
    exercises[currentSubject].length - 1
  ) {

    nextBtn.textContent =
      "Ver resultado";

  } else {

    nextBtn.textContent =
      "Siguiente";
  }

  nextBtn.classList.remove("hidden");
}



/* =====================================================
   SIGUIENTE PREGUNTA
===================================================== */

function nextQuestion() {

  if (!answered) {
    return;
  }


  if (

    currentQuestion <
    exercises[currentSubject]
      .length - 1

  ) {

    currentQuestion++;


    renderQuestion();

  }

  else {

    finishQuiz();

  }

}



/* =====================================================
   FINALIZAR EJERCICIO
===================================================== */

function finishQuiz() {

  const total =
    exercises[currentSubject]
      .length;


  const percentage =
    Math.round(
      (score / total) * 100
    );


  quizSection.classList.add(
    "hidden"
  );


  resultSection.classList.remove(
    "hidden"
  );


  document
    .getElementById("finalScore")
    .textContent =
    `${percentage}%`;


  let message = "";

  let emoji = "";


  if (percentage >= 80) {

    message =
      `Excelente, ${student.name}. Obtuviste ${score} de ${total} respuestas correctas.`;

    emoji = "🏆";

  }

  else if (percentage >= 60) {

    message =
      `Buen trabajo, ${student.name}. Obtuviste ${score} de ${total}. Sigue practicando.`;

    emoji = "👏";

  }

  else {

    message =
      `${student.name}, obtuviste ${score} de ${total}. Puedes intentarlo otra vez para mejorar.`;

    emoji = "💪";

  }


  document
    .getElementById("resultMessage")
    .textContent =
    message;


  document
    .getElementById("resultEmoji")
    .textContent =
    emoji;


  saveResult(
    percentage
  );

}



/* =====================================================
   GUARDAR RESULTADO
===================================================== */

function saveResult(percentage) {

  const history =
    JSON.parse(
      localStorage.getItem("aulaHistory") || "[]"
    );

  const questions =
    exercises[currentSubject];


  /* Guardamos las preguntas y respuestas del intento */
  const answers = questions.map((question, index) => {

    const selectedIndex =
      selectedAnswers[index];

    return {

      question:
        question.question,

      selectedAnswer:
        selectedIndex !== undefined
          ? question.options[selectedIndex]
          : "Sin responder",

      correctAnswer:
        question.options[question.answer],

      correct:
        selectedIndex === question.answer

    };

  });


  const attempt = {

    id: Date.now(),

    name:
      student.name,

    grade:
      student.grade,

    code:
      student.code,

    teacher:
      student.teacher,

    subjectKey:
      currentSubject,

    subject:
      subjectNames[currentSubject],

    score:
      percentage,

    date:
      new Date().toLocaleString("es-GT"),

    answers:
      answers

  };


  history.unshift(attempt);


  localStorage.setItem(
    "aulaHistory",
    JSON.stringify(
      history.slice(0, 10)
    )
  );

}


/* =====================================================
   MOSTRAR HISTORIAL
===================================================== */

function renderHistory() {

  const history =
    JSON.parse(
      localStorage.getItem("aulaHistory") || "[]"
    );

  const historyList =
    document.getElementById("historyList");

  const studentHistory =
    history.filter(
      item => item.name === student.name
    );

  if (studentHistory.length === 0) {

    historyList.innerHTML =
      '<p class="muted">Aún no hay intentos.</p>';

    document.getElementById("bestScore").textContent =
      "0%";

    return;
  }


  const best =
    Math.max(
      ...studentHistory.map(item => item.score)
    );

  document.getElementById("bestScore").textContent =
    `${best}%`;


  historyList.innerHTML =
    studentHistory
      .slice(0, 5)
      .map(item => `

        <div class="history-item">

          <div class="history-info">

            <strong>
              ${item.subject}
            </strong>

            <div class="muted">
              ${item.date}
            </div>

          </div>


          <div class="history-actions">

            <strong>
              ${item.score}%
            </strong>

            ${
              item.answers
                ? `
                  <button
                    class="pdf-btn"
                    data-id="${item.id}">
                    📄 PDF
                  </button>
                `
                : ""
            }

          </div>

        </div>

      `)
      .join("");


  /* ACTIVAR LOS BOTONES PDF */

  document
    .querySelectorAll(".pdf-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        generatePDF(
          Number(button.dataset.id)
        );

      });

    });

}


  /*========================================================
  pdf
  ======================================================*/
  
   async function generatePDF(attemptId) {  
    try {
      if(!window.jspdf){
        alert("No se pudo cargar la libreria PDF.");
        console.error("jsPDF no está cargado");
        return;
      }

      
      const{jsPDF} = window.jspdf; 

      const history = 
      JSON.parse(
        localStorage.getItem("aulaHistory") || "[]"
      );

       const attempt =
      history.find(
        item => item.id === attemptId
      );

      if (!attempt) {
      alert("No se encontró este resultado.");
      return;
    }

    if (!attempt.answers) {
      alert(
        "Este resultado no contiene preguntas y respuestas."
      );
      return;
    }

    // Crear PDF
    const doc = new jsPDF();

    let y = 20;
 

  // Colegio 

  doc.setFont("helvetica", "bold");

  doc.setFontSize(18);

  doc.text(
    "Liceo Nueva Generación",
    20,
    20
  );

  // grado 
  doc.setFontSize(11);

  doc.text(
    `Curso: T.I.C. I`,
    20, 
    26    //27

  );

  // clave

  doc.setFontSize(11);
  doc.text(
    `Nombre: ${attempt.name}`,
    20, 
    30 //34

  );

  //Profesr

  doc.setFontSize(11);

  doc.text(
    `Grado: ${attempt.grade}`,
    20, 
    34 //38
  );

  doc.text(
    `Clave: ${attempt.code}`,
    20,
    38  //42
  );

   doc.text(
    `Profesor: ${attempt.teacher}`,
    20,
    42  //42
  );

  // logo

try {

  const response = await fetch("./imagenes/logolng.png"
  );

  if (!response.ok) {
    throw new Error(
      "No se encontró la imagen del logo."
    );
  }

  const blob = await response.blob();

  const logoBase64 = await new Promise(
    (resolve, reject) => {

      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(blob);
    }
  );


  doc.addImage(
    logoBase64,
    "PNG",
    145, // posición horizontal
    12,  // posición vertical
    40,  // ancho
    28   // alto
  );


} catch (error) {

  console.error(
    "Error cargando logo:",
    error
  );

}

  doc.setLineWidth(0.4);
  doc.line(
    20, 
    46,    //55, 
    190, 
    46

  );

  y = 54; //70 

  // ejercicios

  doc.setFont( 
    "helvetica",
    "bold"
  ); 

  doc.setFontSize(15); 

  doc.text(
    "Ejercicios Realizados",
    20,
    y
  );

  y += 12; //12



  /* =========================
     DATOS DEL ALUMNO
  ========================= */

  doc.setFontSize(11);




  doc.text(
    `Tarea: ${attempt.subject}`,
    20,
    y
  );

  y += 7;


  doc.text(
    `Fecha: ${attempt.date}`,
    20,
    y
  );

  y += 7;


  doc.setFontSize(13);

  doc.text(
    `Nota: ${attempt.score}%`,
    20,
    y
  );


  y += 12;


  /* Línea divisoria 

  doc.line(
    20,
    50, // y
    190,
    y
  );*/  


  y += 10;

  /* =========================
     PREGUNTAS
  ========================= */

  attempt.answers.forEach(
    (answer, index) => {


      /*
        Nueva página si ya
        estamos llegando abajo.
      */

      if (y > 250) {

        doc.addPage();

        y = 20;

      }


      doc.setFontSize(11);

      doc.setFont(
        "helvetica",
        "bold"
      );


      const questionText =
        `${index + 1}. ${answer.question}`;


      const questionLines =
        doc.splitTextToSize(
          questionText,
          165
        );


      doc.text(
        questionLines,
        20,
        y
      );


      y +=
        questionLines.length * 6;


      y += 3;


      doc.setFont(
        "helvetica",
        "normal"
      );


      /* Respuesta del alumno */

      const studentAnswer =
        doc.splitTextToSize(

          `Respuesta del alumno: ${answer.selectedAnswer}`,

          165

        );


      doc.text(
        studentAnswer,
        25,
        y
      );


      y +=
        studentAnswer.length * 6;


      /* Respuesta correcta */

      const correctAnswer =
        doc.splitTextToSize(

          `Respuesta correcta: ${answer.correctAnswer}`,

          165

        );


      doc.text(
        correctAnswer,
        25,
        y
      );


      y +=
        correctAnswer.length * 6;


      /* Resultado */

      doc.setFont(
        "helvetica",
        "bold"
      );


      doc.text(

        answer.correct
          ? "Resultado: Correcta"
          : "Resultado: Incorrecta",

        25,
        y

      );


      doc.setFont(
        "helvetica",
        "normal"
      );


      y += 12;

    }

  );


  /* =========================
     DESCARGAR
  ========================= */

  const safeName =
    attempt.name
      .replace(
        /[^a-zA-Z0-9_-]/g,
        "_"
      );


  doc.save(
    `Resultado_${safeName}_${attempt.subjectKey}.pdf`
  );

 } catch(error){

  console.error(
    "Error Generando PDF: ", 
    error
  ); 

  alert(
    "Ocurrió un error al generar el PDF."
  ); 

 }
} 



/* =====================================================
   SALIR
===================================================== */

function logout() {

  student = null;


  localStorage.removeItem(
    "aulaStudent"
  );


  dashboardSection.classList.add(
    "hidden"
  );


  taskMenuSection.classList.add(
    "hidden"
  );


  contentSection.classList.add(
    "hidden"
  );


  quizSection.classList.add(
    "hidden"
  );


  resultSection.classList.add(
    "hidden"
  );


  loginSection.classList.remove(
    "hidden"
  );


  logoutBtn.classList.add(
    "hidden"
  );


  studentNameInput.value = "";

  studentGradeInput.value = "";

  studentCodeInput.value = ""; 

  teacherNameInput.value = ""; 

}


function restoreSession() {

  const savedStudent =
    localStorage.getItem(
      "aulaStudent"
    );


  if (savedStudent) {

    student =
      JSON.parse(
        savedStudent
      );


    showDashboard();

  }

  if (createChartBtn) {

  createChartBtn.onclick = function () {

    createSpreadsheetChart("bar");

  };

}


if (pieChartBtn) {

  pieChartBtn.onclick = function () {

    createSpreadsheetChart("pie");

  };

}

}

/* =====================================================
   AGREGAR FILA
===================================================== */

addRowBtn.addEventListener(
    "click",
    () => {

        const data = [];

        document
            .querySelectorAll(".spreadsheet-cell")
            .forEach(cell => {

                data.push({
                    row: Number(cell.dataset.row),
                    col: Number(cell.dataset.col),
                    value: cell.value
                });

            });

        spreadsheetRows++;

        createSpreadsheet();

        document
            .querySelectorAll(".spreadsheet-cell")
            .forEach(cell => {

                const row =
                    Number(cell.dataset.row);

                const col =
                    Number(cell.dataset.col);

                const saved =
                    data.find(item =>
                        item.row === row &&
                        item.col === col
                    );

                if (saved) {
                    cell.value = saved.value;
                }

            });

    }
);


/* =====================================================
   AGREGAR COLUMNA
===================================================== */

addColumnBtn.addEventListener(
    "click",
    () => {

        const data = [];

        document
            .querySelectorAll(".spreadsheet-cell")
            .forEach(cell => {

                data.push({
                    row: Number(cell.dataset.row),
                    col: Number(cell.dataset.col),
                    value: cell.value
                });

            });

        spreadsheetColumns++;

        createSpreadsheet();

        document
            .querySelectorAll(".spreadsheet-cell")
            .forEach(cell => {

                const row =
                    Number(cell.dataset.row);

                const col =
                    Number(cell.dataset.col);

                const saved =
                    data.find(item =>
                        item.row === row &&
                        item.col === col
                    );

                if (saved) {
                    cell.value = saved.value;
                }

            });

    }
);

/* =====================================================
   SELECCIÓN DE CELDAS COMO EXCEL
===================================================== */

let cellSelectionStart = null;
let isSelectingCells = false;
let selectionStarted = false;
let selectedSpreadsheetCells = [];


/* =====================================================
   OBTENER CELDA BAJO EL MOUSE
===================================================== */

function getSpreadsheetCellAtPoint(x, y) {

    const element =
        document.elementFromPoint(x, y);

    if (!element) {
        return null;
    }

    return element.closest(".spreadsheet-td");
}


/* =====================================================
   LIMPIAR SELECCIÓN
===================================================== */

function clearSpreadsheetSelection() {

    document
        .querySelectorAll(".spreadsheet-td.selected")
        .forEach(td => {

            td.classList.remove("selected");

        });

    selectedSpreadsheetCells = [];
}


/* =====================================================
   SELECCIONAR RANGO
===================================================== */

function selectSpreadsheetRange(
    startCell,
    endCell
) {

    if (!startCell || !endCell) {
        return;
    }

    clearSpreadsheetSelection();


    const startRow =
        Number(startCell.dataset.row);

    const startCol =
        Number(startCell.dataset.col);


    const endRow =
        Number(endCell.dataset.row);

    const endCol =
        Number(endCell.dataset.col);


    const minRow =
        Math.min(startRow, endRow);

    const maxRow =
        Math.max(startRow, endRow);


    const minCol =
        Math.min(startCol, endCol);

    const maxCol =
        Math.max(startCol, endCol);


    document
        .querySelectorAll(".spreadsheet-td")
        .forEach(td => {

            const row =
                Number(td.dataset.row);

            const col =
                Number(td.dataset.col);


            if (
                row >= minRow &&
                row <= maxRow &&
                col >= minCol &&
                col <= maxCol
            ) {

                td.classList.add("selected");


                const input =
                    td.querySelector(
                        ".spreadsheet-cell"
                    );


                if (input) {

                    selectedSpreadsheetCells.push(
                        input
                    );

                }

            }

        });

}


/* =====================================================
   COMENZAR CON EL MOUSE
===================================================== */

document.addEventListener(
    "mousedown",
    function(event) {

        const cell =
            event.target.closest(
                ".spreadsheet-td"
            );


        if (!cell) {
            return;
        }


        cellSelectionStart =
            cell;

        isSelectingCells =
            true;

        selectionStarted =
            false;

    },
    true
);


/* =====================================================
   ARRASTRAR
===================================================== */

document.addEventListener(
    "mousemove",
    function(event) {

        if (
            !isSelectingCells ||
            !cellSelectionStart
        ) {
            return;
        }


        // El botón izquierdo debe seguir presionado
        if (event.buttons !== 1) {
            return;
        }


        const currentCell =
            getSpreadsheetCellAtPoint(
                event.clientX,
                event.clientY
            );


        if (!currentCell) {
            return;
        }


        // Ya hubo movimiento:
        // ahora sí estamos haciendo una selección
        selectionStarted =
            true;


        selectSpreadsheetRange(
            cellSelectionStart,
            currentCell
        );


        // Evita seleccionar texto
        // SOLO cuando estamos arrastrando
        event.preventDefault();

    },
    true
);


/* =====================================================
   TERMINAR
===================================================== */

document.addEventListener(
    "mouseup",
    function() {

        isSelectingCells =
            false;

        cellSelectionStart =
            null;

        selectionStarted =
            false;

    },
    true
);


/* =====================================================
   EVITAR SELECCIÓN DE TEXTO DURANTE ARRASTRE
===================================================== */

document.addEventListener(
    "selectstart",
    function(event) {

        if (isSelectingCells) {

            event.preventDefault();

        }

    },
    true
);


/* =====================================================
   MOVERSE ENTRE CELDAS CON LAS FLECHAS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const currentCell =
            event.target.closest(
                ".spreadsheet-cell"
            );

        if (!currentCell) {
            return;
        }


        let row =
            Number(currentCell.dataset.row);

        let col =
            Number(currentCell.dataset.col);


        let newRow = row;
        let newCol = col;


        switch (event.key) {

            case "ArrowUp":
                newRow--;
                break;

            case "ArrowDown":
                newRow++;
                break;

            case "ArrowLeft":
                newCol--;
                break;

            case "ArrowRight":
                newCol++;
                break;

            default:
                return;

        }


        // Evitar salir de la tabla
        if (
            newRow < 1 ||
            newRow > spreadsheetRows ||
            newCol < 0 ||
            newCol >= spreadsheetColumns
        ) {
            return;
        }


        const nextCell =
            document.querySelector(
                `.spreadsheet-cell[data-row="${newRow}"][data-col="${newCol}"]`
            );


        if (!nextCell) {
            return;
        }


        event.preventDefault();

        nextCell.focus();

        // Colocar el cursor al final del contenido
        const length =
            nextCell.value.length;

        nextCell.setSelectionRange(
            length,
            length
        );

    },
    true
);

restoreSession();


