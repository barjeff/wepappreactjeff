

const productos = [
    { marca: "samsung galaxy s22", precio: "120000", img: "../img/galaxys22.jpg", id: "01", cantidad: "1",  categoria:"celular",descripcion:"Nueva apariencia digna de un Note Conocé el Galaxy S22 Ultra, con el poder de Note. El marco pulido, delgado y audaz, rodea la forma extruida para lograr una simetría elegante. Y la cámara lineal, acentuada por anillos de lentes espejados, parece flotar en su lugar."},
    { marca: "samsung Galaxy A71",precio: "80000", img: "../img/galaxyZflip.jpg", id: "02", cantidad: "1", categoria:"celular",descripcion:"El Samsung Galaxy A71 llega para suceder al Galaxy A70 con una pantalla Super AMOLED de 6.7 pulgadas a resolución FHD+. Utilizando un procesador Snapdragon 730 de ocho núcleos, el Galaxy A71 cuenta con variantes de 6GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible microSD" },
    { marca: "samsung galaxy z flipp", precio: "160000", img: "../img/samsunga71.jpg", id: "03", cantidad: "1", categoria:"celular",descripcion: "Descubrí la pantalla plegable Al plegarse, adopta un tamaño pequeño y compacto que te resultará muy cómodo para transportar. Cuando quieras disfrutar de tus contenidos favoritos se transforma desplegando su pantalla de 6.7"},
    { marca: "motorola Moto G71", precio: "90000", img: "../img/motoG71.jpg", id: "04", cantidad: "1",categoria:"celular",descripcion:"Batería de duración superior ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas." },
    { marca: "motorola Moto G60", precio: "70000", img: "../img/motorolaG60.jpg", id: "05", cantidad: "1",categoria:"celular",descripcion:    "Fotografía profesional en tu bolsillo Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados." },
    { marca: "motorola Moto Edge", precio: "120000", img: "../img/motoEdge20.jpg", id: "06", cantidad: "1",categoria:"celular",descripcion: "Capacidad y eficiencia Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras."},
    { marca: "Iphone 13 ", precio: "130000", img: "../img/iphone13.jpg", id: "08", cantidad: "1",categoria:"celular",descripcion: "iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante." },
    { marca: "Iphone 12 ", precio: "150000", img: "../img/iphone12.jpg ", id: "07", cantidad: "1",categoria:"celular",descripcion: "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas, Un frente de Ceramic Shield, cuatro veces más resistente a las caídas, Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic." },
    { marca: "Iphone xr ", precio: "110000", img: "../img/iphonexr.jpg", id: "09", cantidad: "1",categoria:"celular",descripcion:"El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas  y está disponible en seis colores increíbles. El avanzado sistema Face ID te permite desbloquearlo de forma segura e iniciar sesión en tus apps con sólo una mirada."},
    { marca: "Xiaomi Redmi note 11 ", precio: "90000", img: "../img/redmi11.jpg", id: "10", cantidad: "1",categoria:"celular",descripcion:"Experiencia visual increíble Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.43. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos"},
    { marca: "Xiaomi Redmi 10 Pro", precio: "80000", img: "../img/redmi10.jpg", id: "11", cantidad: "1",categoria:"celular",descripcion:"Mayor rendimiento Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar" },
    { marca: "Xiaomi Redmi  9T Dual ", precio: "75000", img: "../img/redmi9.jpg", id: "12", cantidad: "1",categoria:"celular",descripcion:"Mayor rendimiento Su memoria RAM de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar"},
    { marca: "Notebook HP Pavilon ", precio: "110000", img: "../img/notebook.jpg", id: "13", cantidad: "1",categoria:"Notebook",descripcion: "La notebook HP Pavilion 13-bb0003la es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina."},
    { marca: "Tablet ", precio: "60000", img: "../img/tablet.jpg", id: "14", cantidad: "1",categoria:"tablets",descripcion: "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad." },]


    
export const pedirRecursos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(productos)
          
        },1000)
    })
}
export const pedirRecursosPorCategoria = (categoriaid) => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(productos.filter(articulo => articulo.categoria === categoriaid))
        },500)
    })
}
export const pedirRecursosPornombre = (marcaid) => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(productos.filter(articulo => articulo.marca.toLowerCase().includes(marcaid)))
        },500)
    })
}

export const pedirRecursosPorId = (id) => {
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(productos.find(articulo => articulo.id === id))
        },500)
    })
}