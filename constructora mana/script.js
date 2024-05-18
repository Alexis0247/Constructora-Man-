window.onload = function() {
    var contentDiv = document.getElementById('content');
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Si es un dispositivo móvil, carga el HTML específico para móviles
        fetch('Servicios-copy.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    } else {
        // Si es una PC, carga el HTML específico para PC
        fetch('Servicios.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    }
}
    