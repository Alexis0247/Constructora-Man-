 // JavaScript necesario para el funcionamiento de la galería y el modal
 function redirectToPage(url) {
  // Redirecciona al usuario a la página especificada por el parámetro 'url'
  window.location.href = url;
}

// Mostrar el modal al hacer clic en la imagen
function showModal(imgSrc) {
  console.log(imgSrc); // Agrega esta línea para imprimir la URL de la imagen
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}
// Evento de clic para mostrar el modal al hacer clic en un contenedor de imagen
document.querySelectorAll('.image-container').forEach(function(container) {
  container.addEventListener('click', function() {
      var imgSrc = this.querySelector('img').src;
      showModal(imgSrc);
  });
});
// Cerrar el modal al hacer clic en la "x"
// Cerrar el modal al hacer clic en la "x"
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  closeModal();
}

// Cerrar el modal al presionar la tecla "Esc"
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      closeModal();
  }
});

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};

// Navegación entre imágenes
var currentImageIndex = 0;
var images = document.querySelectorAll(".image-container img");
function changeImage(step) {
  currentImageIndex += step;
  if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
  }
  showModal(images[currentImageIndex].src);
}
