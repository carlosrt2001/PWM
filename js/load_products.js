function cargarDetallesProductos() {
    // Carga los datos del archivo JSON
    fetch('database.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var detallesProductos = document.getElementById('favoritos_seccion');
        // Recorre los productos y crea el HTML para cada uno
        data.productos.forEach(function(producto) {
          var productoHTML = '<a href="producto.html">' +
            '<div class="producto_favorito">' +
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
            '<a class="uil uil-heart-alt"></a>' +
            '</div>' +
            '</a>';
          detallesProductos.innerHTML += productoHTML;
        });
      });
  }
  
  cargarDetallesProductos();
  