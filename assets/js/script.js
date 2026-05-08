$(document).ready(function() {

    let guardado = localStorage.getItem('totalCarrito');
    if (guardado) {
        $('#contador-carrito').text(guardado);
    }

    const productos = [
        
        { id: 1, nombre: "Pechera Plástica Desechable", precio: 5500, img: "assets/img/pechera-plastica.png", cat: 1 },
        { id: 2, nombre: "Guantes de Nitrilo Caja 100un", precio: 8990, img: "assets/img/guantes-de-nitrilo.png", cat: 1 },
        { id: 3, nombre: "Escudo Facial Protector", precio: 1500, img: "assets/img/escudo-facial.jpg", cat: 1 },
        
        
        { id: 4, nombre: "Pinza Anatómica 14cm", precio: 4200, img: "assets/img/pinza-anatomica.jpeg", cat: 2 },
        { id: 5, nombre: "Tijera Quirúrgica Recta", precio: 5800, img: "assets/img/tijera-quirurgica-recta.jpg", cat: 2 },
        { id: 6, nombre: "Mango de Bisturí N°4", precio: 3500, img: "assets/img/mango-bisturi.jpg", cat: 2 },
        
        
        { id: 7, nombre: "Aerocámara Adulto", precio: 12990, img: "assets/img/aerocamara-adulto.jpg", cat: 3 },
        { id: 8, nombre: "Nebulizador Portátil", precio: 25000, img: "assets/img/nebulizador-portatil.jpg", cat: 3 },
        { id: 9, nombre: "Cánula Nasal Oxígeno", precio: 1800, img: "assets/img/canula-nasal.jpg", cat: 3 },
        
       
        { id: 10, nombre: "Alcohol Desnaturalizado 70% 1Lt", precio: 3500, img: "assets/img/alcohol-70.jpg", cat: 4 },
        { id: 11, nombre: "Jabón de Glicerina Neutro", precio: 2500, img: "assets/img/jabon-glicerina.jpg", cat: 4 },
        { id: 12, nombre: "Toallas Desinfectantes Cloro", precio: 1200, img: "assets/img/toallas-desinfectantes.jpg", cat: 4 },
        
        
        { id: 13, nombre: "Apósito Absorbente", precio: 2500, img: "assets/img/aposito-absorbente.jpg", cat: 5 },
        { id: 14, nombre: "Gasa Estéril (5un)", precio: 3700, img: "assets/img/gasa-esteril.jpg", cat: 5 },
        { id: 15, nombre: "Cinta Adhesiva Micropore", precio: 2200, img: "assets/img/micropore.jpg", cat: 5 }
    ];

    function cargarProductos(lista) {
    
        $('#contenedor-productos').empty();

        lista.forEach(prod => {
        $('#contenedor-productos').append(`
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div class="card h-100 shadow-sm border-0 product-card">
        <div class="card-img-container d-flex align-items-center justify-content-center p-3" style="height: 200px; overflow: hidden;">
        <img src="${prod.img}" class="card-img-top img-fluid" style="max-height: 100%; object-fit: contain;" alt="${prod.nombre}">
        </div>
        <div class="card-body d-flex flex-column text-center">
        <h6 class="card-title text-dark fs-6 fw-bold" style="min-height: 40px;">${prod.nombre}</h6>
        <p class="card-text fw-bold text-primary fs-5 mt-auto">$${prod.precio.toLocaleString('es-CL')}</p>
        <a href="detalle.html?id=${prod.id}" class="btn btn-sm btn-outline-primary w-100 stretched-link">Ver más</a>
        </div>
        </div>
        </div>
          `);
    });
    }

    if ($('#contenedor-productos').length > 0) { 
        cargarProductos(productos);
    }
     
    
if (window.location.pathname.includes('detalle.html')) {
    
    const urlParams = new URLSearchParams(window.location.search);
    const prodId = parseInt(urlParams.get('id'));

    
    
    const encontrado = productos.find(p => p.id === prodId);

    if (encontrado) {
        
        $('#detalle-img').attr('src', encontrado.img);
        $('#detalle-nombre').text(encontrado.nombre);
        $('#detalle-precio').text('$' + encontrado.precio.toLocaleString('es-CL'));
        
        
        const descripciones = {
            1: "Pechera resistente ideal para protección clínica desechable 10 UNIDADES.",
            2: "Guantes de nitrilo libres de látex.",
            3: "Escudo facial transparente con ajuste cómodo para uso prolongado.",
            4: "Pinza anatómica sirve para aproximar, coger, sujetar, atraer o comprimir. De uso clínico, hospitalario y estudiantes de la salud.",
            5: "Estas tijeras son ideales para cortar suturas, vendajes y tejidos blandos en procedimientos médicos, así como en procedimientos de belleza como la manicura y pedicura.También se utilizan en el hogar y en trabajos manuales que requieren cortes precisos y detallados.",
            6: "Instrumento quirúrgico de acero inoxidable, diseñado para incisiones precisas y profundas. Ideal para procedimientos de cirugia general, veterinaria y odontología.",
            7: "Aerocámara Universal (Niños y adultos), ajuste anatómico, no irrita la piel.",
            8: "Nebulizador portátil dispositivo compacto, silencioso y recargable, ideal para tratar asma, alergias y afecciones respiratorias en niños y adultos.",
            9: "La cánula nasal de oxígeno (o naricera/bigotera) es un dispositivo médico ligero y cómodo diseñado para administrar oxígeno suplementario.",
            10: "El alcohol desnaturalizado al 70% es un potente antiséptico y desinfectante de amplio espectro (bactericida, fungicida, virucida) utilizado para limpiar la piel y desinfectar superficies o instrumentos.",
            11: "El jabón de glicerina neutro es un producto de limpieza suave e hipoalergénico, ideal para pieles sensibles, secas o con afecciones como dermatitis. Con un pH cercano a 7, limpia sin alterar la barrera natural de la piel, proporcionando hidratación y suavidad.",
            12: "Toallitas desinfectantes diseñadas para una limpieza rápida y efectiva de diversas superficies. Eliminan el 99,9% de virus y bacterias, incluyendo aquellos que causan enfermedades, en solo un minuto. Su fórmula sin cloro es segura para múltiples tipos de superficies y ofrece hasta 48 horas de protección contra el crecimiento bacteriano.",
            13: "Insumo médico diseñado para cubrir, proteger y gestionar el exudado (líquido) en heridas, quemaduras o zonas postquirúrgicas, manteniendo un ambiente húmedo que favorece la cicatrización.",
            14: "Utilizadas para la limpieza de heridas. La Gasa Estéril es respirable, lo cual otorga una comodidad excepcional. Mantiene la suciedad y los gérmenes alejados de la herida. Fabricado con material libre de látex.",
            15: "Cinta fabricada con adhesivo hipoalergénico. Permite la transpiración de la piel. Está hecha con un respaldo no tejido de fibras de rayón y es libre de látex. Se recomienda cambiar cada 24 horas.",
            
        };
        
        $('#detalle-descripcion').text(descripciones[prodId] || "Insumo médico, garantizado para uso profesional.");
    }
}


    $('.btn-filtro').click(function() {
        const categoria = $(this).data('categoria');

        $('.btn-filtro').removeClass('btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('btn-primary');

        if (categoria === "todos") {
            cargarProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.cat == categoria);
            cargarProductos(filtrados);
        }
    });

  $(document).on('click', '#btn-agregar', function() {
    alert("¡Producto agregado con éxito!");
    
    let badge = $('#contador-carrito');
    let actual = parseInt(badge.text());
    let nuevoTotal = actual + 1;
    
    
    localStorage.setItem('totalCarrito', nuevoTotal);
    
    badge.text(nuevoTotal);
});
});
