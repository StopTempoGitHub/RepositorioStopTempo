const formularioContacto = document.querySelector('.formularioContacto');

formularioContacto.addEventListener('click', () => {
    swal({
        title: "¡Contacto No Funcional!",
        text: "Lo siento, por el momento el formulario de contacto no es funcional, pero no te preocupes, podes contactarte conmigo por: \n Correo: fernando.gette@eaf.edu.ar \n Whatsapp: 11-6270-2307 \n Instagram: @stoptempo \n ¡Pronto estaré agregando funcionalidad al formulario!",
        button: "OK",
      });
});
