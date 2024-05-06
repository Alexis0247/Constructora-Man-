document.addEventListener("DOMContentLoaded", function() {
    // Agrega un event listener al formulario para detectar su envío
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío predeterminado del formulario
  
      // Verificar que los campos no estén vacíos
      var formData = new FormData(this);
      var isEmpty = false;
      for (var value of formData.values()) {
        if (value.trim() === '') {
          isEmpty = true;
          break;
        }
      }
  
      if (!isEmpty) {
        // Realizar una solicitud fetch al script de Google Apps Script
        fetch("https://script.google.com/macros/s/AKfycbwMG4mudekNmSOD8GuYNkOjtP4ILT0C8wL1AUeL3hg-M1YnMRFm-0e0Au0Igphc_hYINw/exec", {
          method: "POST",
          body: formData // Envía los datos del formulario
        })
        .then(response => {
          if (response.ok) {
            // Limpiar los campos del formulario
            this.reset();
            // Muestra un alert de éxito
            alert("¡El formulario se ha enviado correctamente!");
          } else {
            // Muestra un alert de error
            alert("Ha ocurrido un error al enviar el formulario.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          // Muestra un alert de error
          alert("Ha ocurrido un error al enviar el formulario.");
        });
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  });
  