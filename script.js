

// ============================================================================
// DATOS: CATÁLOGO DE LUGARES TURÍSTICOS Y GASTRONÓMICOS
// ============================================================================

/**
 * Objeto que contiene todos los lugares turísticos y gastronómicos de Tacna
 * 
 * Estructura de cada lugar:
 * - nombre: Nombre del lugar
 * - imagen: Ruta de la imagen
 * - descripcion: Descripción detallada
 * - horario: Horarios de atención
 * - ubicacion: Dirección o ubicación descriptiva
 * - precio: Costo de entrada o precio
 * - destacado: Característica destacada
 * - busqueda: Término principal para búsqueda en Nominatim
 * - busquedaAlternativa: Término secundario si falla la búsqueda principal
 */
const lugares = {
    // ------------------------------------------------------------------------
    // LUGARES TURÍSTICOS HISTÓRICOS
    // ------------------------------------------------------------------------

    arco: {
        nombre: "Arco Parabólico",
        imagen: "imagenes/arco.jpg",
        descripcion: "El Arco Parabólico es el monumento más emblemático de Tacna, construido en honor a los héroes de la Guerra del Pacífico. Fue diseñado por el escultor alemán Walter Weberhofer e inaugurado en 1954. Realizado en piedra de cantería de color rosáceo, representa el patriotismo y el espíritu combativo del pueblo tacneño. Es especialmente impresionante durante la noche cuando está iluminado.",
        horario: "Abierto las 24 horas",
        ubicacion: "Plaza de la Mujer Tacneña",
        precio: "Gratis",
        destacado: "Vista iluminada por la noche",
        busqueda: "Arco Parabólico, Tacna, Peru",
        busquedaAlternativa: "Plaza de la Mujer Tacneña, Tacna, Peru"
    },

    catedral: {
        nombre: "Catedral de Tacna",
        imagen: "imagenes/catedral.jpg",
        descripcion: "La Catedral de Tacna es una impresionante obra de estilo neorrenacentista diseñada por la firma de Gustave Eiffel. Su construcción inició en 1875 pero se vio interrumpida por la Guerra del Pacífico, finalizando recién en 1954. Ubicada en la Plaza de Armas, su fachada está elaborada en piedra de cantería y presenta esculturas de los cuatro evangelistas. En su interior alberga valiosas obras de arte religioso.",
        horario: "Lunes a Domingo: 7:00 am - 7:00 pm",
        ubicacion: "Plaza de Armas de Tacna",
        precio: "Gratis",
        destacado: "Diseño de la firma Eiffel",
        busqueda: "Catedral, Tacna, Peru",
        busquedaAlternativa: "Plaza de Armas, Tacna, Peru"
    },

    zela: {
        nombre: "Casa Zela",
        imagen: "imagenes/zela.jpg",
        descripcion: "La Casa de Zela es un museo histórico ubicado en la antigua residencia de Francisco Antonio de Zela, precursor de la independencia del Perú quien dio el primer grito de libertad en Tacna en 1811. La casona de estilo virreinal alberga una colección de objetos personales, documentos históricos y mobiliario de la época. Declarada Monumento Histórico Nacional, ofrece una visión fascinante de la vida durante el proceso de independencia.",
        horario: "Martes a Domingo: 9:00 am - 5:00 pm",
        ubicacion: "Calle Zela 542",
        precio: "S/ 3.00 general",
        destacado: "Primer grito de libertad en Tacna (1811)",
        busqueda: "Casa Zela, Tacna, Peru",
        busquedaAlternativa: "Calle Zela, Tacna, Peru"
    },

    museo_ferroviario: {
        nombre: "Museo Ferroviario Nacional",
        imagen: "imagenes/tren.jpg",
        descripcion: "El Museo Ferroviario de Tacna conserva la historia del ferrocarril Tacna-Arica, que funcionó desde 1856 hasta 2012. Exhibe locomotoras a vapor, vagones históricos y herramientas de la época. Es un testimonio vivo de la importancia del ferrocarril en la conexión entre Perú y Chile durante el siglo XIX y XX.",
        horario: "Martes a Domingo: 9:00 am - 5:00 pm",
        ubicacion: "Av. Coronel Albarracín 402",
        precio: "S/ 2.00 general",
        destacado: "Locomotoras a vapor originales",
        busqueda: "Museo Ferroviario Nacional, Tacna, Peru",
        busquedaAlternativa: "Estación Ferrocarril, Tacna, Peru"
    },

    alto_alianza: {
        nombre: "Alto de la Alianza",
        imagen: "imagenes/museoAL.jpg",
        descripcion: "Sitio histórico y museo que conmemora la Batalla del Alto de la Alianza librada el 26 de mayo de 1880 durante la Guerra del Pacífico. Ubicado en la meseta del cerro Intiorko (Alto del Sol), donde se enfrentaron los ejércitos de la Alianza Perú-Bolivia contra Chile. El museo conserva armas, uniformes y objetos de la época, además del monumento conmemorativo en el mismo campo de batalla.",
        horario: "Martes a Domingo: 9:00 am - 4:00 pm",
        ubicacion: "Cerro Intiorko, a 8 km al noreste de Tacna",
        precio: "S/ 5.00 adultos, S/ 2.00 niños",
        destacado: "Campo de batalla histórico de 1880",
        busqueda: "Complejo Monumental Alto de la Alianza, Tacna, Peru",
        busquedaAlternativa: "Alto de la Alianza, Tacna, Peru"
    },

    paseo_civico: {
        nombre: "Paseo Cívico",
        imagen: "imagenes/paseo.jpg",
        descripcion: "Hermoso corredor peatonal que conecta la Plaza de Armas con el Parque de la Locomotora. Está flanqueado por árboles, jardines y bancas para descansar. En sus alrededores se encuentran importantes edificios gubernamentales y culturales de la ciudad.",
        horario: "Abierto las 24 horas",
        ubicacion: "Entre Plaza de Armas y Parque de la Locomotora",
        precio: "Gratis",
        destacado: "Paseo arbolado ideal para caminatas",
        busqueda: "Paseo Cívico, Tacna, Peru",
        busquedaAlternativa: "Paseo Civico de Tacna, Peru"
    },

    parque_locomotora: {
        nombre: "Parque de la Locomotora",
        imagen: "imagenes/locomotora.jpg",
        descripcion: "Parque histórico que alberga la locomotora N°3 que participó en la construcción del ferrocarril Tacna-Arica inaugurado en 1856. Este espacio verde es un punto de encuentro popular para los tacneños y turistas. La locomotora es un símbolo del desarrollo ferroviario de la región y representa la importancia histórica del ferrocarril en la conexión entre Perú y Chile. El parque cuenta con áreas recreativas, jardines y es un lugar ideal para paseos familiares.",
        horario: "Abierto las 24 horas",
        ubicacion: "Av. Grau con Av. 2 de Mayo",
        precio: "Gratis",
        destacado: "Locomotora histórica del siglo XIX",
        busqueda: "Parque de la Locomotora, Tacna, Peru",
        busquedaAlternativa: "Parque Locomotora, Tacna, Peru"
    },

    // ------------------------------------------------------------------------
    // SITIOS ARQUEOLÓGICOS Y NATURALES
    // ------------------------------------------------------------------------

    miculla: {
        nombre: "Complejo Arqueológico de Miculla",
        imagen: "imagenes/micullas.jpg",
        descripcion: "Los Petroglifos de Miculla constituyen uno de los conjuntos de arte rupestre más importantes del Perú, con más de 1,500 figuras distribuidas en un área de 20 km². Fueron creados por culturas preincas entre los años 500-1100 d.C. Representan escenas de caza, danzas rituales, constelaciones y animales como pumas, serpientes y auquénidos. El sitio cuenta con un centro de interpretación y guías especializados.",
        horario: "Martes a Domingo: 9:00 am - 5:00 pm",
        ubicacion: "A 22 km al noreste de Tacna",
        precio: "S/ 5.00 adultos, S/ 2.00 niños",
        destacado: "Zona arqueológica con guías especializados",
        busqueda: "Complejo Arqueológico de Miculla, Tacna, Peru",
        busquedaAlternativa: "Petroglifos Miculla, Pachía, Tacna, Peru"
    },

    baños_termales: {
        nombre: "Baños Termales de Calientes",
        imagen: "imagenes/termales.jpg",
        descripcion: "Aguas termales medicinales ubicadas a 35 km de la ciudad de Tacna. Sus aguas alcanzan temperaturas de 36°C y son ricas en minerales con propiedades terapéuticas. El complejo cuenta con piscinas, pozas individuales y servicios básicos para visitantes.",
        horario: "Lunes a Domingo: 8:00 am - 5:00 pm",
        ubicacion: "Distrito de Palca, a 35 km de Tacna",
        precio: "S/ 10.00 adultos, S/ 5.00 niños",
        destacado: "Aguas termales con propiedades medicinales",
        busqueda: "Palca, Tacna, Peru",
        busquedaAlternativa: "Distrito de Palca, Tacna, Peru"
    },

    pocollay: {
        nombre: "Pocollay",
        imagen: "imagenes/pocollay.jpg",
        descripcion: "Importante sitio arqueológico preincaico ubicado en el distrito de Pocollay, que data de aproximadamente 1200-1400 d.C. Presenta restos de construcciones de piedra, terrazas agrícolas ancestrales y un sistema de andenes que evidencia el desarrollo de técnicas agrícolas avanzadas. El complejo incluye estructuras habitacionales, ceremoniales y un sofisticado sistema de irrigación que demuestra la habilidad de las culturas precolombinas.",
        horario: "Martes a Domingo: 9:00 am - 4:00 pm",
        ubicacion: "Distrito de Pocollay, a 8 km del centro",
        precio: "S/ 8.00 adultos, S/ 4.00 estudiantes",
        destacado: "Terrazas agrícolas preincaicas",
        busqueda: "Museo de Sitio Las Peañas, Pocollay, Tacna, Peru",
        busquedaAlternativa: "Pocollay, Tacna, Peru"
    },

    // ------------------------------------------------------------------------
    // GASTRONOMÍA TÍPICA - PLATOS PRINCIPALES
    // ------------------------------------------------------------------------

    picante: {
        nombre: "Picante a la Tacneña",
        imagen: "imagenes/picante.png",
        descripcion: "El Picante a la Tacneña es el plato bandera de la región, preparado con mondongo (estómago de res) cortado en trozos pequeños y cocido lentamente con ají panca, hierbas aromáticas y especias. Se sirve con papa amarilla, chuño y arroz. Su sabor es intenso y ligeramente picante, con una textura única que lo hace irresistible. Es tradicionalmente disfrutado en festividades y reuniones familiares.",
        horario: "Todo el día",
        ubicacion: "Mercado Central y restaurantes locales",
        precio: "S/ 15.00 - S/ 25.00",
        destacado: "Plato bandera de Tacna",
        busqueda: "Mercado Central, Tacna, Peru",
        busquedaAlternativa: "Restaurante, Tacna, Peru"
    },

    adobo_tacneno: {
        nombre: "Adobo Tacneño",
        imagen: "imagenes/adobo.jpg",
        descripcion: "Guiso tradicional tacneño preparado con carne de cerdo cortada en trozos grandes, marinada en chicha de jora, ají panca molido, comino, ajos y otras especias aromáticas. La carne se cocina lentamente en su propia marinada hasta que queda tierna y jugosa, con un color rojizo característico y un sabor profundo y complejo. Se sirve acompañado de frijoles, yuca o papa sancochada. Es un plato festivo que se prepara especialmente los fines de semana.",
        horario: "Fines de semana y feriados",
        ubicacion: "Picanterías del Mercado Central",
        precio: "S/ 22.00 - S/ 28.00",
        destacado: "Marinado tradicional con chicha de jora",
        busqueda: "Mercado Central, Tacna, Peru",
        busquedaAlternativa: "Restaurante, Tacna, Peru"
    },

    pastel_de_choclo: {
        nombre: "Pastel de Choclo",
        imagen: "imagenes/pastel_choclo.jpg",
        descripcion: "Delicioso pastel salado preparado con maíz molido, carne de res, pollo, pasas y aceitunas. Es un plato de influencia chilena-peruana muy popular en Tacna. Se caracteriza por su textura cremosa y su sabor dulce-salado que combina perfectamente con los ingredientes.",
        horario: "Mediodía y noche",
        ubicacion: "Restaurantes en el centro de Tacna",
        precio: "S/ 18.00 - S/ 25.00",
        destacado: "Combinación dulce-salada única",
        busqueda: "Restaurante, Tacna, Peru",
        busquedaAlternativa: "Mercado Central, Tacna, Peru"
    },

    patasca_tacnena: {
        nombre: "Patasca Tacneña",
        imagen: "imagenes/patasca.jpg",
        descripcion: "Sopa contundente y nutritiva preparada con mote de maíz blanco, carne de res, mondongo y patas de res cocidas lentamente durante horas. Se condimenta con ají panca, comino, ajo y hierbas aromáticas. Se sirve bien caliente acompañada de perejil picado, ají molido y limón. Es un plato reconfortante ideal para los días fríos y es especialmente consumido los fines de semana y en festividades.",
        horario: "Fines de semana y festividades",
        ubicacion: "Picanterías y restaurantes tradicionales",
        precio: "S/ 15.00 - S/ 20.00",
        destacado: "Sopa contundente de fin de semana",
        busqueda: "Mercado Central, Tacna, Peru",
        busquedaAlternativa: "Restaurante, Tacna, Peru"
    },

    chicharron_chancho: {
        nombre: "Chicharrón de Chancho",
        imagen: "imagenes/chicharron_tacneno.jpg",
        descripcion: "Plato emblemático de la cocina tacneña consistente en trozos de carne de cerdo (principalmente costilla y panceta) fritos lentamente en su propia grasa hasta lograr una textura dorada y crujiente por fuera, pero jugosa por dentro. Se acompaña tradicionalmente con camote sancochado, cancha serrana tostada y salsa criolla de cebolla. Es un plato abundante y sabroso, perfecto para compartir en familia.",
        horario: "Principalmente domingos y feriados",
        ubicacion: "Chicherías del Mercado Central",
        precio: "S/ 20.00 - S/ 30.00",
        destacado: "Tradición culinaria de domingos",
        busqueda: "Mercado Central, Tacna, Peru",
        busquedaAlternativa: "Restaurante, Tacna, Peru"
    },

    // ------------------------------------------------------------------------
    // GASTRONOMÍA TÍPICA - PANES Y POSTRES
    // ------------------------------------------------------------------------

    marraqueta: {
        nombre: "Pan Marraqueta",
        imagen: "imagenes/marraqueta.jpg",
        descripcion: "La Marraqueta es un pan crujiente por fuera y suave por dentro, caracterizado por su forma de cuatro protuberancias unidas. De origen chileno-peruano, se ha convertido en un ícono de la gastronomía tacneña. Se hornea en hornos de barro tradicionales y es ideal para acompañar con mantequilla, palta o para elaborar sandwiches. Su frescura y crujiente textura lo hace irresistible, especialmente recién horneado por las mañanas.",
        horario: "Principalmente por las mañanas",
        ubicacion: "Panaderías y Mercado Central",
        precio: "S/ 0.50 - S/ 1.00 por unidad",
        destacado: "Pan tradicional de Tacna",
        busqueda: "Panaderia, Tacna, Peru",
        busquedaAlternativa: "Mercado Central, Tacna, Peru"
    },

    humitas: {
        nombre: "Humitas",
        imagen: "imagenes/humitas.png",
        descripcion: "Deliciosas humitas preparadas con choclo tierno molido, mezclado con manteca, queso fresco, ají amarillo y especias. La masa se envuelve en hojas de choclo (pancas) formando pequeños paquetes que se cocinan al vapor. Pueden ser dulces o saladas. Las humitas tacneñas se caracterizan por su textura suave y cremosa, con un sabor auténtico a maíz fresco. Son perfectas para el desayuno o la merienda.",
        horario: "Mañanas y tardes",
        ubicacion: "Mercado Central y vendedores ambulantes",
        precio: "S/ 2.00 - S/ 3.00 por unidad",
        destacado: "Tradicional envuelto en hojas de choclo",
        busqueda: "Mercado Central, Tacna, Peru",
        busquedaAlternativa: "Mercado, Tacna, Peru"
    },

    choclo_con_queso: {
        nombre: "Choclo con Queso",
        imagen: "imagenes/choclo-con-queso.jpg",
        descripcion: "Plato sencillo pero delicioso que consiste en choclo tierno cocido acompañado de queso fresco de la región. El choclo se cuece con sal hasta quedar suave y se sirve caliente junto a generosas tajadas de queso fresco. Este plato es muy popular como entrada o acompañamiento, y destaca por la combinación perfecta entre la dulzura natural del choclo y la textura suave del queso. Es un clásico de la gastronomía andina que se disfruta en todas las estaciones.",
        horario: "Todo el día",
        ubicacion: "Restaurantes y picanterías",
        precio: "S/ 8.00 - S/ 12.00",
        destacado: "Combinación tradicional andina",
        busqueda: "Restaurante, Tacna, Peru",
        busquedaAlternativa: "Mercado Central, Tacna, Peru"
    },

    cuy_frito: {
        nombre: "Cuy Frito Tacneño",
        imagen: "imagenes/cuy.jpg",
        descripcion: "Plato tradicional de la sierra tacneña que consiste en cuy (conejillo de indias) adobado con ají panca, comino, ajo y otras especias, luego frito en aceite caliente hasta lograr una piel dorada y crujiente. Se sirve acompañado de papas doradas, ensalada fresca y ají de mesa. El cuy es una fuente importante de proteínas y su preparación es considerada un arte culinario. Es un plato festivo que se prepara en ocasiones especiales y es muy apreciado por su sabor único.",
        horario: "Fines de semana y feriados",
        ubicacion: "Restaurantes campestres y picanterías de Pocollay",
        precio: "S/ 35.00 - S/ 50.00",
        destacado: "Plato festivo de la sierra tacneña",
        busqueda: "Pocollay, Tacna, Peru",
        busquedaAlternativa: "Restaurante, Tacna, Peru"
    }
};

// ============================================================================
// VARIABLES GLOBALES
// ============================================================================

/**
 * Instancia del mapa de Leaflet
 * @type {L.Map|null}
 */
let mapa = null;

/**
 * Marcador actual en el mapa
 * @type {L.Marker|null}
 */
let marcadorActual = null;

/**
 * Datos del lugar actualmente mostrado en el modal
 * @type {Object|null}
 */
let lugarActual = null;

// ============================================================================
// CONFIGURACIÓN DE MAPAS
// ============================================================================

/**
 * Obtiene la configuración del proveedor de tiles para el mapa
 * Usa CartoDB (Carto) que permite uso en aplicaciones móviles
 * 
 * @returns {Object} Objeto con URL y atribución del proveedor de tiles
 */
function obtenerProveedorTiles() {
    // CartoDB Voyager - Permite uso en apps móviles
    return {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    };

    /* Alternativa 1 - OpenStreetMap (solo para web, bloqueado en apps)
    return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    };
    */

    /* Alternativa 2 - Esri (gratuito, permite apps)
    return {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri'
    };
    */
}

// ============================================================================
// GEOCODIFICACIÓN Y BÚSQUEDA DE UBICACIONES
// ============================================================================

/**
 * Busca las coordenadas de un lugar usando la API de Nominatim
 * 
 * Proceso:
 * 1. Intenta buscar con el término principal
 * 2. Valida que las coordenadas estén en el rango de Tacna
 * 3. Si falla, intenta con el término alternativo
 * 4. Retorna null si no encuentra ubicación válida
 * 
 * @param {string} busqueda - Término principal de búsqueda
 * @param {string} busquedaAlternativa - Término alternativo si falla la búsqueda principal
 * @returns {Promise<Array<number>|null>} Array [latitud, longitud] o null si no se encuentra
 */
async function buscarUbicacionPorNombre(busqueda, busquedaAlternativa) {
    console.log(` Buscando ubicación para: ${busqueda}`);

    // Configuración del área de búsqueda (región de Tacna)
    const TACNA_VIEWBOX = '-70.5,-17.5,-69.9,-18.5'; // [oeste, norte, este, sur]
    const TACNA_LAT_MIN = -18.5;
    const TACNA_LAT_MAX = -17.5;
    const TACNA_LON_MIN = -70.5;
    const TACNA_LON_MAX = -69.9;

    try {
        // Headers apropiados para Nominatim (cumple política de uso)
        const headers = {
            'User-Agent': 'TacnaTuristicaApp/1.0 (https://tacnaturistica.com; info@tacnaturistica.com)'
        };

        // Intentar búsqueda principal
        let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(busqueda)}&limit=1&countrycodes=pe&viewbox=${TACNA_VIEWBOX}`;
        let response = await fetch(url, { headers });
        let data = await response.json();

        if (data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);

            // Validar que las coordenadas estén dentro del rango de Tacna
            if (lat >= TACNA_LAT_MIN && lat <= TACNA_LAT_MAX &&
                lon >= TACNA_LON_MIN && lon <= TACNA_LON_MAX) {
                console.log(` Ubicación encontrada: ${lat}, ${lon}`);
                return [lat, lon];
            } else {
                console.log(` Coordenadas fuera del rango de Tacna: ${lat}, ${lon}`);
            }
        }

        // Delay de 1 segundo entre peticiones (política de Nominatim)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Intentar búsqueda alternativa si existe
        if (busquedaAlternativa) {
            console.log(` Intentando búsqueda alternativa: ${busquedaAlternativa}`);
            url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(busquedaAlternativa)}&limit=1&countrycodes=pe&viewbox=${TACNA_VIEWBOX}`;
            response = await fetch(url, { headers });
            data = await response.json();

            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                if (lat >= TACNA_LAT_MIN && lat <= TACNA_LAT_MAX &&
                    lon >= TACNA_LON_MIN && lon <= TACNA_LON_MAX) {
                    console.log(`✅ Ubicación encontrada con búsqueda alternativa: ${lat}, ${lon}`);
                    return [lat, lon];
                }
            }
        }

        console.log('❌ No se encontró ubicación válida en Tacna');
        return null;

    } catch (error) {
        console.error('❌ Error al buscar ubicación:', error);
        return null;
    }
}

// ============================================================================
// GESTIÓN DEL MODAL
// ============================================================================

/**
 * Muestra el modal con información detallada de un lugar
 * 
 * Proceso:
 * 1. Carga la información del lugar en los elementos del modal
 * 2. Busca las coordenadas del lugar mediante Nominatim
 * 3. Crea un mapa interactivo con Leaflet
 * 4. Añade un marcador en la ubicación encontrada
 * 5. Muestra el modal al usuario
 * 
 * @param {string} idLugar - ID del lugar en el objeto 'lugares'
 */
async function mostrarModal(idLugar) {
    const lugar = lugares[idLugar];
    if (!lugar) {
        console.error(` Lugar no encontrado: ${idLugar}`);
        return;
    }

    lugarActual = lugar;

    // Idioma actual y traducciones del lugar
    const lang = localStorage.getItem('lang') || 'es';
    const tLugar = (function () {
        try {
            return (typeof LUGARES_I18N !== 'undefined') ? ((LUGARES_I18N[lang] && LUGARES_I18N[lang][idLugar]) || {}) : {};
        } catch { return {}; }
    })();

    // Actualizar información en el modal
    document.getElementById('modalTitulo').textContent = tLugar.nombre || lugar.nombre;
    document.getElementById('modalImagen').src = lugar.imagen;
    document.getElementById('modalImagen').alt = tLugar.nombre || lugar.nombre;
    document.getElementById('modalHorario').textContent = tLugar.horario || lugar.horario;
    document.getElementById('modalUbicacion').textContent = tLugar.ubicacion || lugar.ubicacion;
    document.getElementById('modalPrecio').textContent = tLugar.precio || lugar.precio;
    document.getElementById('modalDestacado').textContent = tLugar.destacado || lugar.destacado;
    document.getElementById('modalDescripcion').textContent = tLugar.descripcion || lugar.descripcion;

    // Preparar el contenedor del mapa
    const contenedorMapa = document.getElementById('modalMapa');
    contenedorMapa.innerHTML = '';

    let coordenadasParaMapa = null;

    // Buscar ubicación por nombre
    if (lugar.busqueda || lugar.busquedaAlternativa) {
        try {
            // Mostrar indicador de carga
            contenedorMapa.innerHTML = `
                <div class="loading-map">
                    <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #1976D2;"></i>
                    <p>Buscando ubicación exacta...</p>
                </div>
            `;

            coordenadasParaMapa = await buscarUbicacionPorNombre(lugar.busqueda, lugar.busquedaAlternativa);
        } catch (error) {
            console.error(" Error al buscar ubicación:", error);
        }
    }

    // Crear el mapa si se encontraron coordenadas
    if (coordenadasParaMapa) {
        try {
            contenedorMapa.innerHTML = '';

            // Crear instancia del mapa con Leaflet
            mapa = L.map(contenedorMapa).setView(coordenadasParaMapa, 15);

            // Añadir capa de tiles
            const proveedor = obtenerProveedorTiles();
            L.tileLayer(proveedor.url, {
                attribution: proveedor.attribution,
                maxZoom: 19
            }).addTo(mapa);

            // Añadir marcador
            marcadorActual = L.marker(coordenadasParaMapa)
                .addTo(mapa)
                .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.ubicacion}`)
                .openPopup();

            // Fix para distorsión del mapa (esperar a que el modal se renderice)
            setTimeout(() => {
                if (mapa) {
                    mapa.invalidateSize();
                }
            }, 100);

            // Mostrar botón "Cómo llegar"
            document.getElementById('modalBotonComoLlegar').style.display = 'flex';

        } catch (error) {
            console.error(" Error al cargar el mapa:", error);
            mostrarErrorMapa(contenedorMapa, idLugar);
        }
    } else {
        mostrarMapaNoDisponible(contenedorMapa);
    }

    // Mostrar el modal
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/**
 * Muestra un mensaje de error en el contenedor del mapa
 * @param {HTMLElement} contenedor - Elemento contenedor del mapa
 * @param {string} idLugar - ID del lugar para reintentar
 */
function mostrarErrorMapa(contenedor, idLugar) {
    contenedor.innerHTML = `
        <div class="no-map">
            <i class="fas fa-map-marked-alt" style="font-size: 3rem; color: #D32F2F; margin-bottom: 1rem;"></i>
            <p>No se pudo cargar el mapa</p>
            <button class="boton" onclick="mostrarModal('${idLugar}')" style="margin-top: 1rem;">
                <i class="fas fa-sync-alt"></i> Reintentar
            </button>
        </div>
    `;
    document.getElementById('modalBotonComoLlegar').style.display = 'none';
}

/**
 * Muestra un mensaje cuando no hay mapa disponible
 * @param {HTMLElement} contenedor - Elemento contenedor del mapa
 */
function mostrarMapaNoDisponible(contenedor) {
    contenedor.innerHTML = `
        <div class="no-map">
            <i class="fas fa-map-marker-slash" style="font-size: 3rem; color: #777;"></i>
            <p>No hay mapa disponible para este lugar</p>
        </div>
    `;
    document.getElementById('modalBotonComoLlegar').style.display = 'none';
}

/**
 * Cierra el modal y limpia los recursos
 */
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';

    // Destruir el mapa para liberar recursos
    if (mapa) {
        mapa.remove();
        mapa = null;
    }

    marcadorActual = null;
    lugarActual = null;
}

// ============================================================================
// FUNCIONES DE NAVEGACIÓN
// ============================================================================

/**
 * Abre Google Maps con indicaciones de cómo llegar al lugar actual
 */
/**
 * Abre Google Maps con ruta desde la ubicación actual del usuario hasta el destino
 * Si no se puede obtener la geolocalización, abre el lugar directamente en Google Maps
 */
function abrirComoLlegar() {
    if (!lugarActual) return;

    const nombreBusqueda = lugarActual.busqueda || lugarActual.nombre;

    // Intentar obtener la ubicación actual del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            // Éxito: se obtuvo la ubicación del usuario
            function (position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                // Abrir Google Maps con ruta desde la ubicación actual hasta el destino
                const urlRuta = `https://www.google.com/maps/dir/${lat},${lng}/${encodeURIComponent(nombreBusqueda)}`;
                window.open(urlRuta, '_blank');
            },
            // Error o permiso denegado: abrir solo el destino
            function (error) {
                console.log('No se pudo obtener la ubicación:', error.message);
                // Abrir solo el destino en Google Maps
                window.open(`https://www.google.com/maps/search/${encodeURIComponent(nombreBusqueda)}`, '_blank');
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    } else {
        // El navegador no soporta geolocalización
        console.log('Geolocalización no soportada por el navegador');
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(nombreBusqueda)}`, '_blank');
    }
}

/**
 * Alterna la visibilidad del menú en dispositivos móviles
 * Cambia el icono entre hamburguesa y X y muestra/oculta el overlay
 */
function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menuIcon');
    const overlay = document.getElementById('menuOverlay');
    const icon = menuIcon.querySelector('i');

    menu.classList.toggle('mostrar');
    overlay.classList.toggle('mostrar');

    // Cambiar icono entre hamburguesa y X
    if (menu.classList.contains('mostrar')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// ============================================================================
// FUNCIONES DE INTERACCIÓN
// ============================================================================

/**
 * Agrega un lugar a favoritos (funcionalidad placeholder)
 */
function agregarFavorito() {
    const titulo = document.getElementById('modalTitulo').textContent;
    alert(`"${titulo}" añadido a tus favoritos`);

    const boton = document.getElementById('modalBotonFavorito');
    boton.innerHTML = '<i class="fas fa-check"></i> En favoritos';
    boton.style.backgroundColor = '#4CAF50';
    boton.onclick = null;
}

// ============================================================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ============================================================================

/**
 * Inicializa la aplicación cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicializando sitio web de turismo de Tacna...');

    // Event listeners del modal
    document.getElementById('modalCerrar').addEventListener('click', cerrarModal);
    document.getElementById('modalCerrarBoton').addEventListener('click', cerrarModal);
    document.getElementById('modalBotonFavorito').addEventListener('click', agregarFavorito);
    document.getElementById('modalBotonComoLlegar').addEventListener('click', abrirComoLlegar);

    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('modal').addEventListener('click', function (e) {
        if (e.target === this) cerrarModal();
    });

    // Menú móvil
    document.getElementById('menuIcon').addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en el overlay
    document.getElementById('menuOverlay').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        const menuIcon = document.getElementById('menuIcon');
        const overlay = document.getElementById('menuOverlay');
        const icon = menuIcon.querySelector('i');

        menu.classList.remove('mostrar');
        overlay.classList.remove('mostrar');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });

    // Cerrar menú al hacer clic en un enlace y restaurar icono
    document.querySelectorAll('nav a').forEach(enlace => {
        enlace.addEventListener('click', function () {
            const menu = document.getElementById('menu');
            const menuIcon = document.getElementById('menuIcon');
            const overlay = document.getElementById('menuOverlay');
            const icon = menuIcon.querySelector('i');

            menu.classList.remove('mostrar');
            overlay.classList.remove('mostrar');
            // Restaurar icono a hamburguesa
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log(' Sitio web inicializado correctamente');

    // ======================
    // Internacionalización
    // ======================
    const I18N = {
        es: {
            't-title': 'Tacna Turística',
            't-subtitle': 'Descubre la riqueza cultural e histórica de la Ciudad Heroica',
            't-nav-home': 'Inicio',
            't-nav-places': 'Lugares',
            't-nav-food': 'Gastronomía',
            't-nav-testimonials': 'Testimonios',
            't-nav-contact': 'Contacto',
            't-sec-places': 'Principales Atractivos',
            't-sec-food': 'Sabores de Tacna',
            't-sec-testimonials': 'Lo que dicen nuestros visitantes',
            't-cta-discover': 'Descubrir Lugares',
            't-card-details': 'Ver Detalles',
            't-foot-about': 'Sobre Tacna',
            't-foot-quick': 'Enlaces Rápidos',
            't-foot-contact': 'Contacto',
            't-foot-home': 'Inicio',
            't-foot-places': 'Lugares Turísticos',
            't-foot-food': 'Gastronomía',
            't-foot-testimonials': 'Testimonios',
            't-modal-fav': 'Añadir a favoritos',
            't-modal-directions': 'Cómo llegar',
            't-modal-close': 'Cerrar'
        },
        en: {
            't-title': 'Tacna Tourism',
            't-subtitle': 'Discover the cultural and historical richness of the Heroic City',
            't-nav-home': 'Home',
            't-nav-places': 'Places',
            't-nav-food': 'Food',
            't-nav-testimonials': 'Testimonials',
            't-nav-contact': 'Contact',
            't-sec-places': 'Top Attractions',
            't-sec-food': 'Flavors of Tacna',
            't-sec-testimonials': 'What visitors say',
            't-cta-discover': 'Discover Places',
            't-card-details': 'View details',
            't-foot-about': 'About Tacna',
            't-foot-quick': 'Quick Links',
            't-foot-contact': 'Contact',
            't-foot-home': 'Home',
            't-foot-places': 'Tourist Places',
            't-foot-food': 'Gastronomy',
            't-foot-testimonials': 'Testimonials',
            't-modal-fav': 'Add to favorites',
            't-modal-directions': 'Directions',
            't-modal-close': 'Close'
        },
        pt: {
            't-title': 'Turismo de Tacna',
            't-subtitle': 'Descubra a riqueza cultural e histórica da Cidade Heróica',
            't-nav-home': 'Início',
            't-nav-places': 'Lugares',
            't-nav-food': 'Gastronomia',
            't-nav-testimonials': 'Depoimentos',
            't-nav-contact': 'Contato',
            't-sec-places': 'Principais Atrações',
            't-sec-food': 'Sabores de Tacna',
            't-sec-testimonials': 'O que dizem nossos visitantes',
            't-cta-discover': 'Descobrir Lugares',
            't-card-details': 'Ver detalhes',
            't-foot-about': 'Sobre Tacna',
            't-foot-quick': 'Links Rápidos',
            't-foot-contact': 'Contato',
            't-foot-home': 'Início',
            't-foot-places': 'Lugares Turísticos',
            't-foot-food': 'Gastronomia',
            't-foot-testimonials': 'Depoimentos',
            't-modal-fav': 'Adicionar aos favoritos',
            't-modal-directions': 'Como chegar',
            't-modal-close': 'Fechar'
        }
    };

    // Traducciones completas de contenidos por lugar (nombre, descripción, horario, ubicación, precio, destacado)
    const LUGARES_I18N = {
        en: {
            arco: {
                nombre: 'Parabolic Arch',
                descripcion: 'The Parabolic Arch is Tacna\'s most emblematic monument, built in honor of the heroes of the War of the Pacific. Designed by German sculptor Walter Weberhofer and inaugurated in 1954. Made of pinkish quarry stone, it represents the patriotism and fighting spirit of the people of Tacna. It is especially impressive at night when illuminated.',
                horario: 'Open 24 hours',
                ubicacion: 'Plaza de la Mujer Tacneña',
                precio: 'Free',
                destacado: 'Illuminated view at night'
            },
            catedral: {
                nombre: 'Tacna Cathedral',
                descripcion: 'Tacna Cathedral is an impressive neo-Renaissance work designed by Gustave Eiffel\'s firm. Construction began in 1875 but was interrupted by the War of the Pacific, finally completed in 1954. Located in the Plaza de Armas, its facade is made of quarry stone and features sculptures of the four evangelists. Inside it houses valuable works of religious art.',
                horario: 'Monday to Sunday: 7:00 am - 7:00 pm',
                ubicacion: 'Plaza de Armas de Tacna',
                precio: 'Free',
                destacado: 'Design by Eiffel\'s firm'
            },
            zela: {
                nombre: 'Zela House',
                descripcion: 'The Zela House is a historical museum located in the former residence of Francisco Antonio de Zela, precursor of Peru\'s independence who gave the first cry of freedom in Tacna in 1811. The colonial-style mansion houses a collection of personal objects, historical documents and period furniture. Declared a National Historical Monument, it offers a fascinating view of life during the independence process.',
                horario: 'Tuesday to Sunday: 9:00 am - 5:00 pm',
                ubicacion: 'Calle Zela 542',
                precio: 'S/ 3.00 general admission',
                destacado: 'First cry of freedom in Tacna (1811)'
            },
            museo_ferroviario: {
                nombre: 'National Railway Museum',
                descripcion: 'The Tacna Railway Museum preserves the history of the Tacna-Arica railway, which operated from 1856 to 2012. It displays steam locomotives, historic wagons and tools from the era. It is a living testimony to the importance of the railway in the connection between Peru and Chile during the 19th and 20th centuries.',
                horario: 'Tuesday to Sunday: 9:00 am - 5:00 pm',
                ubicacion: 'Av. Coronel Albarracín 402',
                precio: 'S/ 2.00 general admission',
                destacado: 'Original steam locomotives'
            },
            alto_alianza: {
                nombre: 'Alto de la Alianza Memorial',
                descripcion: 'Historic site and museum commemorating the Battle of Alto de la Alianza fought on May 26, 1880 during the War of the Pacific. Located on the plateau of Intiorko hill (Sun\'s Peak), where the armies of the Peru-Bolivia Alliance faced Chile. The museum preserves weapons, uniforms and objects from the era, plus the commemorative monument on the battlefield itself.',
                horario: 'Tuesday to Sunday: 9:00 am - 4:00 pm',
                ubicacion: 'Cerro Intiorko, 8 km northeast of Tacna',
                precio: 'S/ 5.00 adults, S/ 2.00 children',
                destacado: 'Historic battlefield from 1880'
            },
            paseo_civico: {
                nombre: 'Civic Promenade',
                descripcion: 'Beautiful pedestrian corridor connecting Plaza de Armas with Locomotive Park. It is flanked by trees, gardens and benches to rest. In its surroundings are important government and cultural buildings of the city.',
                horario: 'Open 24 hours',
                ubicacion: 'Between Plaza de Armas and Locomotive Park',
                precio: 'Free',
                destacado: 'Tree-lined promenade ideal for walks'
            },
            baños_termales: {
                nombre: 'Calientes Hot Springs',
                descripcion: 'Medicinal hot springs located 35 km from Tacna. Its waters reach temperatures of 36°C and are rich in minerals with therapeutic properties. The complex has pools, individual tubs and basic services for visitors.',
                horario: 'Monday to Sunday: 8:00 am - 5:00 pm',
                ubicacion: 'District of Palca, 35 km from Tacna',
                precio: 'S/ 10.00 adults, S/ 5.00 children',
                destacado: 'Hot springs with medicinal properties'
            },
            parque_locomotora: {
                nombre: 'Locomotive Park',
                descripcion: 'Historic park that houses locomotive No. 3 that participated in the construction of the Tacna-Arica railway inaugurated in 1856. This green space is a popular meeting point for Tacna residents and tourists. The locomotive is a symbol of the railway development of the region and represents the historical importance of the railway in the connection between Peru and Chile. The park has recreational areas, gardens and is an ideal place for family walks.',
                horario: 'Open 24 hours',
                ubicacion: 'Av. Grau with Av. 2 de Mayo',
                precio: 'Free',
                destacado: 'Historic 19th century locomotive'
            },
            miculla: {
                nombre: 'Miculla Archaeological Complex',
                descripcion: 'The Miculla Petroglyphs constitute one of the most important sets of rock art in Peru, with more than 1,500 figures distributed over an area of 20 km². They were created by pre-Inca cultures between 500-1100 AD. They represent hunting scenes, ritual dances, constellations and animals such as pumas, snakes and camelids. The site has an interpretation center and specialized guides.',
                horario: 'Tuesday to Sunday: 9:00 am - 5:00 pm',
                ubicacion: '22 km northeast of Tacna',
                precio: 'S/ 5.00 adults, S/ 2.00 children',
                destacado: 'Archaeological zone with specialized guides'
            },
            pocollay: {
                nombre: 'Pocollay',
                descripcion: 'Important pre-Inca archaeological site located in the district of Pocollay, dating from approximately 1200-1400 AD. It presents remains of stone constructions, ancestral agricultural terraces and a system of platforms that shows the development of advanced agricultural techniques. The complex includes residential and ceremonial structures and a sophisticated irrigation system that demonstrates the skill of pre-Columbian cultures.',
                horario: 'Tuesday to Sunday: 9:00 am - 4:00 pm',
                ubicacion: 'District of Pocollay, 8 km from downtown',
                precio: 'S/ 8.00 adults, S/ 4.00 students',
                destacado: 'Pre-Inca agricultural terraces'
            },
            picante: {
                nombre: 'Picante a la Tacneña',
                descripcion: 'Picante a la Tacneña is the flagship dish of the region, prepared with tripe (beef stomach) cut into small pieces and slowly cooked with panca chili, aromatic herbs and spices. It is served with yellow potato, chuño and rice. Its flavor is intense and slightly spicy, with a unique texture that makes it irresistible. It is traditionally enjoyed at festivities and family gatherings.',
                horario: 'All day',
                ubicacion: 'Central Market and local restaurants',
                precio: 'S/ 15.00 - S/ 25.00',
                destacado: 'Flagship dish of Tacna'
            },
            marraqueta: {
                nombre: 'Marraqueta Bread',
                descripcion: 'Marraqueta is a bread that is crunchy on the outside and soft on the inside, characterized by its shape of four joined protuberances. Of Chilean-Peruvian origin, it has become an icon of Tacna gastronomy. It is baked in traditional clay ovens and is ideal to accompany with butter, avocado or to make sandwiches. Its freshness and crunchy texture make it irresistible, especially freshly baked in the mornings.',
                horario: 'Mainly in the mornings',
                ubicacion: 'Bakeries and Central Market',
                precio: 'S/ 0.50 - S/ 1.00 per unit',
                destacado: 'Traditional bread of Tacna'
            },
            pastel_de_choclo: {
                nombre: 'Corn Pie',
                descripcion: 'Delicious savory pie prepared with ground corn, beef, chicken, raisins and olives. It is a dish of Chilean-Peruvian influence very popular in Tacna. It is characterized by its creamy texture and its sweet-salty flavor that combines perfectly with the ingredients.',
                horario: 'Noon and evening',
                ubicacion: 'Restaurants in downtown Tacna',
                precio: 'S/ 18.00 - S/ 25.00',
                destacado: 'Unique sweet-savory combination'
            },
            adobo_tacneno: {
                nombre: 'Tacna Adobo',
                descripcion: 'Traditional Tacna stew prepared with pork cut into large pieces, marinated in corn beer, ground panca chili, cumin, garlic and other aromatic spices. The meat is cooked slowly in its own marinade until tender and juicy, with a characteristic reddish color and a deep and complex flavor. It is served accompanied by beans, yucca or boiled potato. It is a festive dish that is prepared especially on weekends.',
                horario: 'Weekends and holidays',
                ubicacion: 'Central Market picanterías',
                precio: 'S/ 22.00 - S/ 28.00',
                destacado: 'Traditional marinade with corn beer'
            },
            patasca_tacnena: {
                nombre: 'Tacna Patasca',
                descripcion: 'Hearty and nutritious soup prepared with white corn hominy, beef, tripe and beef feet slowly cooked for hours. It is seasoned with panca chili, cumin, garlic and aromatic herbs. It is served very hot accompanied by chopped parsley, ground chili and lemon. It is a comforting dish ideal for cold days and is especially consumed on weekends and festivities.',
                horario: 'Weekends and festivities',
                ubicacion: 'Picanterías and traditional restaurants',
                precio: 'S/ 15.00 - S/ 20.00',
                destacado: 'Hearty weekend soup'
            },
            chicharron_chancho: {
                nombre: 'Pork Chicharrón',
                descripcion: 'Emblematic dish of Tacna cuisine consisting of pieces of pork (mainly ribs and belly) fried slowly in their own fat until achieving a golden and crispy texture on the outside, but juicy on the inside. It is traditionally accompanied by boiled sweet potato, toasted Andean corn and onion salsa. It is an abundant and tasty dish, perfect to share with family.',
                horario: 'Mainly Sundays and holidays',
                ubicacion: 'Central Market chicherías',
                precio: 'S/ 20.00 - S/ 30.00',
                destacado: 'Sunday culinary tradition'
            },
            humitas: {
                nombre: 'Humitas',
                descripcion: 'Delicious humitas prepared with ground tender corn, mixed with lard, fresh cheese, yellow chili and spices. The dough is wrapped in corn leaves (pancas) forming small packages that are cooked by steam. They can be sweet or savory. Tacna humitas are characterized by their soft and creamy texture, with an authentic fresh corn flavor. They are perfect for breakfast or snack.',
                horario: 'Mornings and afternoons',
                ubicacion: 'Central Market and street vendors',
                precio: 'S/ 2.00 - S/ 3.00 per unit',
                destacado: 'Traditional wrapped in corn leaves'
            },
            choclo_con_queso: {
                nombre: 'Corn with Cheese',
                descripcion: 'Simple but delicious dish consisting of tender boiled corn accompanied by fresh cheese from the region. The corn is cooked with salt until soft and served hot next to generous slices of fresh cheese. This dish is very popular as a starter or side dish, and stands out for the perfect combination between the natural sweetness of the corn and the soft texture of the cheese. It is a classic of Andean gastronomy that is enjoyed in all seasons.',
                horario: 'All day',
                ubicacion: 'Restaurants and picanterías',
                precio: 'S/ 8.00 - S/ 12.00',
                destacado: 'Traditional Andean combination'
            },
            cuy_frito: {
                nombre: 'Fried Guinea Pig',
                descripcion: 'Traditional dish of the Tacna highlands consisting of guinea pig (guinea pig) marinated with panca chili, cumin, garlic and other spices, then fried in hot oil until achieving a golden and crispy skin. It is served accompanied by golden potatoes, fresh salad and table chili. Guinea pig is an important source of protein and its preparation is considered a culinary art. It is a festive dish that is prepared on special occasions and is highly appreciated for its unique flavor.',
                horario: 'Weekends and holidays',
                ubicacion: 'Country restaurants and picanterías in Pocollay',
                precio: 'S/ 35.00 - S/ 50.00',
                destacado: 'Festive dish of the Tacna highlands'
            }
        },
        pt: {
            arco: {
                nombre: 'Arco Parabólico',
                descripcion: 'O Arco Parabólico é o monumento mais emblemático de Tacna, construído em homenagem aos heróis da Guerra do Pacífico. Foi desenhado pelo escultor alemão Walter Weberhofer e inaugurado em 1954. Feito de pedra de cantaria de cor rosada, representa o patriotismo e o espírito combativo do povo de Tacna. É especialmente impressionante à noite quando está iluminado.',
                horario: 'Aberto 24 horas',
                ubicacion: 'Plaza de la Mujer Tacneña',
                precio: 'Grátis',
                destacado: 'Vista iluminada à noite'
            },
            catedral: {
                nombre: 'Catedral de Tacna',
                descripcion: 'A Catedral de Tacna é uma impressionante obra de estilo neorrenascentista desenhada pela empresa de Gustave Eiffel. Sua construção começou em 1875, mas foi interrompida pela Guerra do Pacífico, sendo finalmente concluída em 1954. Localizada na Plaza de Armas, sua fachada é feita de pedra de cantaria e apresenta esculturas dos quatro evangelistas. Em seu interior abriga valiosas obras de arte religiosa.',
                horario: 'Segunda a Domingo: 7:00 - 19:00',
                ubicacion: 'Plaza de Armas de Tacna',
                precio: 'Grátis',
                destacado: 'Design da empresa Eiffel'
            },
            zela: {
                nombre: 'Casa Zela',
                descripcion: 'A Casa Zela é um museu histórico localizado na antiga residência de Francisco Antonio de Zela, precursor da independência do Peru que deu o primeiro grito de liberdade em Tacna em 1811. A casa de estilo colonial abriga uma coleção de objetos pessoais, documentos históricos e mobiliário da época. Declarada Monumento Histórico Nacional, oferece uma visão fascinante da vida durante o processo de independência.',
                horario: 'Terça a Domingo: 9:00 - 17:00',
                ubicacion: 'Calle Zela 542',
                precio: 'S/ 3.00 entrada geral',
                destacado: 'Primeiro grito de liberdade em Tacna (1811)'
            },
            museo_ferroviario: {
                nombre: 'Museu Ferroviário Nacional',
                descripcion: 'O Museu Ferroviário de Tacna preserva a história da ferrovia Tacna-Arica, que funcionou de 1856 a 2012. Exibe locomotivas a vapor, vagões históricos e ferramentas da época. É um testemunho vivo da importância da ferrovia na conexão entre Peru e Chile durante os séculos XIX e XX.',
                horario: 'Terça a Domingo: 9:00 - 17:00',
                ubicacion: 'Av. Coronel Albarracín 402',
                precio: 'S/ 2.00 entrada geral',
                destacado: 'Locomotivas a vapor originais'
            },
            alto_alianza: {
                nombre: 'Alto da Aliança',
                descripcion: 'Sítio histórico e museu que comemora a Batalha do Alto da Aliança travada em 26 de maio de 1880 durante a Guerra do Pacífico. Localizado no planalto do cerro Intiorko (Alto do Sol), onde os exércitos da Aliança Peru-Bolívia enfrentaram o Chile. O museu preserva armas, uniformes e objetos da época, além do monumento comemorativo no próprio campo de batalha.',
                horario: 'Terça a Domingo: 9:00 - 16:00',
                ubicacion: 'Cerro Intiorko, 8 km ao nordeste de Tacna',
                precio: 'S/ 5.00 adultos, S/ 2.00 crianças',
                destacado: 'Campo de batalha histórico de 1880'
            },
            paseo_civico: {
                nombre: 'Passeio Cívico',
                descripcion: 'Belo corredor para pedestres que conecta a Plaza de Armas com o Parque da Locomotiva. É ladeado por árvores, jardins e bancos para descansar. Em seus arredores encontram-se importantes edifícios governamentais e culturais da cidade.',
                horario: 'Aberto 24 horas',
                ubicacion: 'Entre Plaza de Armas e Parque da Locomotiva',
                precio: 'Grátis',
                destacado: 'Passeio arborizado ideal para caminhadas'
            },
            baños_termales: {
                nombre: 'Banhos Termais de Calientes',
                descripcion: 'Águas termais medicinais localizadas a 35 km de Tacna. Suas águas atingem temperaturas de 36°C e são ricas em minerais com propriedades terapêuticas. O complexo possui piscinas, banheiras individuais e serviços básicos para visitantes.',
                horario: 'Segunda a Domingo: 8:00 - 17:00',
                ubicacion: 'Distrito de Palca, a 35 km de Tacna',
                precio: 'S/ 10.00 adultos, S/ 5.00 crianças',
                destacado: 'Águas termais com propriedades medicinais'
            },
            parque_locomotora: {
                nombre: 'Parque da Locomotiva',
                descripcion: 'Parque histórico que abriga a locomotiva nº 3 que participou da construção da ferrovia Tacna-Arica inaugurada em 1856. Este espaço verde é um ponto de encontro popular para os tacneños e turistas. A locomotiva é um símbolo do desenvolvimento ferroviário da região e representa a importância histórica da ferrovia na conexão entre Peru e Chile. O parque possui áreas recreativas, jardins e é um lugar ideal para passeios em família.',
                horario: 'Aberto 24 horas',
                ubicacion: 'Av. Grau com Av. 2 de Mayo',
                precio: 'Grátis',
                destacado: 'Locomotiva histórica do século XIX'
            },
            miculla: {
                nombre: 'Complexo Arqueológico de Miculla',
                descripcion: 'Os Petróglifos de Miculla constituem um dos conjuntos de arte rupestre mais importantes do Peru, com mais de 1.500 figuras distribuídas em uma área de 20 km². Foram criados por culturas pré-incas entre 500-1100 d.C. Representam cenas de caça, danças rituais, constelações e animais como pumas, serpentes e camelídeos. O local conta com um centro de interpretação e guias especializados.',
                horario: 'Terça a Domingo: 9:00 - 17:00',
                ubicacion: '22 km ao nordeste de Tacna',
                precio: 'S/ 5.00 adultos, S/ 2.00 crianças',
                destacado: 'Zona arqueológica com guias especializados'
            },
            pocollay: {
                nombre: 'Pocollay',
                descripcion: 'Importante sítio arqueológico pré-incaico localizado no distrito de Pocollay, que data de aproximadamente 1200-1400 d.C. Apresenta restos de construções de pedra, terraços agrícolas ancestrais e um sistema de plataformas que evidencia o desenvolvimento de técnicas agrícolas avançadas. O complexo inclui estruturas habitacionais e cerimoniais e um sofisticado sistema de irrigação que demonstra a habilidade das culturas pré-colombianas.',
                horario: 'Terça a Domingo: 9:00 - 16:00',
                ubicacion: 'Distrito de Pocollay, a 8 km do centro',
                precio: 'S/ 8.00 adultos, S/ 4.00 estudantes',
                destacado: 'Terraços agrícolas pré-incaicos'
            },
            picante: {
                nombre: 'Picante à Tacneña',
                descripcion: 'O Picante à Tacneña é o prato-bandeira da região, preparado com tripa (estômago de boi) cortada em pedaços pequenos e cozida lentamente com pimenta panca, ervas aromáticas e especiarias. É servido com batata amarela, chuño e arroz. Seu sabor é intenso e levemente picante, com uma textura única que o torna irresistível. É tradicionalmente apreciado em festividades e reuniões familiares.',
                horario: 'O dia todo',
                ubicacion: 'Mercado Central e restaurantes locais',
                precio: 'S/ 15.00 - S/ 25.00',
                destacado: 'Prato-bandeira de Tacna'
            },
            marraqueta: {
                nombre: 'Pão Marraqueta',
                descripcion: 'A Marraqueta é um pão crocante por fora e macio por dentro, caracterizado por sua forma de quatro protuberâncias unidas. De origem chileno-peruana, tornou-se um ícone da gastronomia de Tacna. É assada em fornos de barro tradicionais e é ideal para acompanhar com manteiga, abacate ou para fazer sanduíches. Sua frescura e textura crocante a tornam irresistível, especialmente recém-assada pela manhã.',
                horario: 'Principalmente pela manhã',
                ubicacion: 'Padarias e Mercado Central',
                precio: 'S/ 0.50 - S/ 1.00 por unidade',
                destacado: 'Pão tradicional de Tacna'
            },
            pastel_de_choclo: {
                nombre: 'Torta de Milho',
                descripcion: 'Deliciosa torta salgada preparada com milho moído, carne bovina, frango, passas e azeitonas. É um prato de influência chileno-peruana muito popular em Tacna. Caracteriza-se por sua textura cremosa e seu sabor doce-salgado que combina perfeitamente com os ingredientes.',
                horario: 'Meio-dia e noite',
                ubicacion: 'Restaurantes no centro de Tacna',
                precio: 'S/ 18.00 - S/ 25.00',
                destacado: 'Combinação única doce-salgada'
            },
            adobo_tacneno: {
                nombre: 'Adobo Tacneño',
                descripcion: 'Guisado tradicional de Tacna preparado com carne de porco cortada em pedaços grandes, marinada em chicha de milho, pimenta panca moída, cominho, alho e outras especiarias aromáticas. A carne é cozida lentamente em seu próprio marinado até ficar macia e suculenta, com uma cor avermelhada característica e um sabor profundo e complexo. É servida acompanhada de feijão, mandioca ou batata cozida. É um prato festivo que é preparado especialmente nos fins de semana.',
                horario: 'Fins de semana e feriados',
                ubicacion: 'Picanterías do Mercado Central',
                precio: 'S/ 22.00 - S/ 28.00',
                destacado: 'Marinado tradicional com chicha de milho'
            },
            patasca_tacnena: {
                nombre: 'Patasca Tacneña',
                descripcion: 'Sopa substancial e nutritiva preparada com mote de milho branco, carne bovina, tripa e patas de boi cozidas lentamente por horas. É temperada com pimenta panca, cominho, alho e ervas aromáticas. É servida bem quente acompanhada de salsinha picada, pimenta moída e limão. É um prato reconfortante ideal para os dias frios e é especialmente consumido nos fins de semana e em festividades.',
                horario: 'Fins de semana e festividades',
                ubicacion: 'Picanterías e restaurantes tradicionais',
                precio: 'S/ 15.00 - S/ 20.00',
                destacado: 'Sopa substancial de fim de semana'
            },
            chicharron_chancho: {
                nombre: 'Chicharrón de Porco',
                descripcion: 'Prato emblemático da cozinha de Tacna consistindo em pedaços de carne de porco (principalmente costela e barriga) fritos lentamente em sua própria gordura até obter uma textura dourada e crocante por fora, mas suculenta por dentro. É tradicionalmente acompanhado de batata-doce cozida, milho andino torrado e salsa de cebola. É um prato abundante e saboroso, perfeito para compartilhar em família.',
                horario: 'Principalmente domingos e feriados',
                ubicacion: 'Chicherías do Mercado Central',
                precio: 'S/ 20.00 - S/ 30.00',
                destacado: 'Tradição culinária de domingo'
            },
            humitas: {
                nombre: 'Humitas',
                descripcion: 'Deliciosas humitas preparadas com milho tenro moído, misturado com banha, queijo fresco, pimenta amarela e especiarias. A massa é embrulhada em folhas de milho (pancas) formando pequenos pacotes que são cozidos no vapor. Podem ser doces ou salgadas. As humitas de Tacna caracterizam-se por sua textura macia e cremosa, com um sabor autêntico de milho fresco. São perfeitas para o café da manhã ou lanche.',
                horario: 'Manhãs e tardes',
                ubicacion: 'Mercado Central e vendedores ambulantes',
                precio: 'S/ 2.00 - S/ 3.00 por unidade',
                destacado: 'Tradicional embrulhado em folhas de milho'
            },
            choclo_con_queso: {
                nombre: 'Milho com Queijo',
                descripcion: 'Prato simples mas delicioso que consiste em milho tenro cozido acompanhado de queijo fresco da região. O milho é cozido com sal até ficar macio e é servido quente ao lado de generosas fatias de queijo fresco. Este prato é muito popular como entrada ou acompanhamento, e destaca-se pela combinação perfeita entre a doçura natural do milho e a textura macia do queijo. É um clássico da gastronomia andina que é apreciado em todas as estações.',
                horario: 'O dia todo',
                ubicacion: 'Restaurantes e picanterías',
                precio: 'S/ 8.00 - S/ 12.00',
                destacado: 'Combinação tradicional andina'
            },
            cuy_frito: {
                nombre: 'Cuy Frito',
                descripcion: 'Prato tradicional da serra de Tacna que consiste em cuy (porquinho-da-índia) marinado com pimenta panca, cominho, alho e outras especiarias, depois frito em óleo quente até obter uma pele dourada e crocante. É servido acompanhado de batatas douradas, salada fresca e pimenta de mesa. O cuy é uma importante fonte de proteínas e sua preparação é considerada uma arte culinária. É um prato festivo que é preparado em ocasiões especiais e é muito apreciado por seu sabor único.',
                horario: 'Fins de semana e feriados',
                ubicacion: 'Restaurantes campestres e picanterías em Pocollay',
                precio: 'S/ 35.00 - S/ 50.00',
                destacado: 'Prato festivo da serra de Tacna'
            }
        }
    };

    function getLugarTraduccion(id, lang) {
        return (LUGARES_I18N[lang] && LUGARES_I18N[lang][id]) || {};
    }

    function applyTranslations(lang) {
        const dict = I18N[lang] || I18N.es;
        document.documentElement.lang = lang;
        Object.keys(dict).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = dict[id];
        });
        localStorage.setItem('lang', lang);

        // Actualizar títulos de tarjetas y texto de botones "Ver Detalles"
        traducirTarjetas(lang, dict);
    }

    function traducirTarjetas(lang, dict) {
        const buttons = document.querySelectorAll('.tarjeta-acciones .boton');
        buttons.forEach(btn => {
            // Mantener el icono existente (si lo hay)
            const hasInfoIcon = btn.querySelector('.fa-info-circle');
            if (hasInfoIcon) {
                btn.innerHTML = '<i class="fas fa-info-circle"></i> ' + (dict['t-card-details'] || 'Ver Detalles');
            }
        });

        // Cambiar títulos y descripciones según el id del lugar a partir del onclick del botón
        document.querySelectorAll('.tarjeta-lugar').forEach(card => {
            // Buscar el botón con onclick (puede estar en .tarjeta-acciones o directamente en .tarjeta-contenido)
            const actionBtn = card.querySelector('button[onclick^="mostrarModal("]');
            const titleEl = card.querySelector('.tarjeta-contenido h3');
            const descEl = card.querySelector('.tarjeta-contenido p');
            if (!actionBtn || !titleEl) return;
            const match = actionBtn.getAttribute('onclick').match(/mostrarModal\('([^']+)'\)/);
            if (!match) return;
            const idLugar = match[1];
            const t = getLugarTraduccion(idLugar, lang);
            const lugarOriginal = lugares[idLugar];

            // Actualizar título
            if (t.nombre) {
                titleEl.textContent = t.nombre;
            } else if (lugarOriginal && lang === 'es') {
                titleEl.textContent = lugarOriginal.nombre;
            }

            // Actualizar descripción (usar las primeras 100 caracteres + "...")
            if (descEl) {
                let descripcion = '';
                if (t.descripcion) {
                    descripcion = t.descripcion;
                } else if (lugarOriginal && lugarOriginal.descripcion) {
                    descripcion = lugarOriginal.descripcion;
                }

                // Truncar descripción para la tarjeta (máximo 150 caracteres)
                if (descripcion.length > 150) {
                    descripcion = descripcion.substring(0, 150) + '...';
                }
                descEl.textContent = descripcion;
            }
        });
    }

    const select = document.getElementById('langSelect');
    if (select) {
        const stored = localStorage.getItem('lang') || 'es';
        select.value = stored;
        applyTranslations(stored);
        select.addEventListener('change', () => applyTranslations(select.value));
    }
});
