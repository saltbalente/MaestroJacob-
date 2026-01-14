
// List of words for the word cloud
const words = [
    'los mejores brujos', 'brujos de verdad', 'brujos cerca de mi', 'brujos y hechiceros',
    'brujos gratis en linea', 'brujeria negra', 'hechizos efectivos', 'tarot brujo',
    'brujos en estados unidos', 'vudu brujeria', 'brujos consulta gratis', 'bruja',
    'hechiceria', 'hechizo de amor', 'amarres de amor', 'hechizos efectivos',
    'conjuro de amor', 'un amarre', 'amarres de amor brujeria', 'amarres efectivos para el amor',
    'amarre a una persona', 'amarre amor', 'hechizo de endulzamiento', 'endulzamiento de amor',
    'amarre de brujeria', 'espiritismo y santeria', 'espiritismo', 'centro espiritista',
    'centro espiritista cerca de mi', 'brujo amarres', 'magia negra para el amor',
    'hechizo para que regrese', 'como hacer un amarre de amor', 'un amarre de amor',
    'hechizos para recuperar a tu pareja', 'brujo para amarres', 'que tan efectivo es un amarre de amor',
    'amarres de amor near me', 'necesito un amarre de amor urgente', 'necesito un amarre de amor',
    'los amarres son verdaderos', 'amarre de amor cerca de mi', 'brujeria', 'brujos',
    'endulzamiento de pareja', 'brujeria brujeria', 'espiritista near me', 'brujos amarres',
    'amarres de amor', 'brujeria para el amor', 'como hacer un amarre', 'poderoso amarre de amor',
    'amarres gratis sin pagar nada', 'hechizo para una persona', 'conjuro amor', 'amarres fuertes',
    'conjuros efectivos', 'endulzamiento fuerte', 'los brujos', 'la brujeria',
    'endulzamiento efectivo', 'hechizo amarre amor', 'espiritualistas', 'brujeria de amor',
    'Brujeria', 'Amarres de amor', 'Hechicería', 'Magia blanca', 'Magia negra',
    'Encantamientos', 'Sortilegios', 'Conjuros', 'Hechizos', 'Espiritismo',
    'Exorcismos', 'Santeria', 'hacer un amarre', 'endulzamientos', 'brujos reales',
    'hechizos de amor', 'endulzamiento', 'brujo real', 'el brujo mayor',
    'quitar brujeria', 'brujeria real', 'brujeria es real', 'amarre sexual',
    'amarres sexuales', 'brujo mayor', 'rituales de canela', 'endulzamientos con miel y canela',
    'brujería y santería', 'hacer brujeria', 'como amarrar aun hombre', 'santeria y brujeria',
    'brujeria santeria', 'santería y brujería', 'santeria brujo', 'santeria es brujeria',
    'amarres de amor caseros', 'salmos contra la brujería', 'los amarres de amor funcionan',
    'brujo blanca', 'amarre brujeria', 'rituales de abundancia', 'brujeria cubana',
    'amarres brujeria', 'brujeria amarre', 'brujos cubanos', 'endulzamientos con miel y nombre',
    'hechizo para que me llame', 'hechizo para separar a dos personas', 'hechizo del zapato',
    'brujeria negra', 'ritual para atraer dinero', 'amarre de amor que es', 'amarre con orina',
    'amarres caseros', 'amarres de pareja', 'amarre con menstruación',
    'hechizo fuerte para que me llame de inmediato', 'salmo 29 contra brujería',
    'hechizo para alejar a una persona', 'amarres para el amor', 'endulzamiento con miel',
    'brujeria verde', 'amarre de amor con orina', 'un amarre', 'brujos y hechiceros',
    'trabajos de brujeria', 'rituales con la santa muerte', 'brujos colombianos',
    'hechizos de luna', 'amarres de amor con la orina', 'hechizos harry potter',
    'hechizos caseros para que me escriba en 5 minutos', 'rituales de luna llena',
    'ritual para alejar a una persona', 'los brujos', 'endulzamiento de amor',
    'endulzamientos de amor', 'brujeria de amor', 'rituales con canela',
    'brujeria haitiana', 'brujería haitiana', 'brujeria magia negra', 'quitar amarres',
    'amuletos contra la brujeria', 'limpia de brujeria', 'foto de brujeria',
    'amuletos contra brujeria', 'mexico brujeria', 'hechizo para que me llame en 5 minutos',
    'hechizo del vaso de agua para que te llame', 'amarres de amor efectivos',
    'hechizo de la cebolla', 'los amarres funcionan', 'ritual para separar a dos personas',
    'rituales de amor', 'brujeria blanca', 'brujo wicca', 'ritual de amor',
    'ritual para el dinero', 'rituales de santeria', 'hechizos para que me llame en 5 minutos',
    'brujos mexicanas', 'ser brujo', 'amarres con la santa muerte', 'brujeria mexicana',
    'wicca brujo', 'hechizos con cebolla', 'brujeria con la santa muerte',
    'hacer un endulzamiento', 'rituales con luna llena', 'santa muerte brujeria',
    'amarres con santa muerte', 'amarres de amor gratis', 'amarres amorosos',
    'brujos famosos', 'hechizo del zapato para dominar', 'amarre con ropa interior',
    'hechizos de proteccion', 'hechizo para dominar a un hombre', 'hechizo para separar una pareja',
    'brujos de verdad', 'brujos buenos', 'amarre con foto', 'rituales para el amor',
    'ritual para que me llame', 'hechizo para enamorar a un hombre', 'brujeria con velas',
    'hechizo para que me hable', 'hechizo para que me escriba', 'hechizo para atraer el amor',
    'ritual para atraer el amor', 'hechizo para que me llame de inmediato',
    'hechizo para que me llame ya', 'hechizo para que me llame urgente', 'hechizo para el amor',
    'hechizo para que me ame', 'hechizo para que me busque', 'hechizo para que me extrañe',
    'hechizo para que me desee', 'hechizo para que me piense', 'hechizo para que me necesite',
    'hechizo para que me quiera'
];

// Helper to get random words
function getRandomWords(count = 8) {
    const randomWords = [];
    const tempWords = [...words]; // Copy to avoid modifying original immediately if needed repeatedly
    
    for (let i = 0; i < count; i++) {
        if (tempWords.length === 0) break;
        const randomIndex = Math.floor(Math.random() * tempWords.length);
        randomWords.push(tempWords[randomIndex]);
        tempWords.splice(randomIndex, 1);
    }
    
    return randomWords;
}

// Populate Word Cloud
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("wordsContainer");
    if (container) {
        const randomWords = getRandomWords(15);
        
        randomWords.forEach((word) => {
            const boldWord = document.createElement("strong");
            boldWord.innerText = word;
            // Add click event to scroll to contact or open whatsapp
            boldWord.addEventListener('click', () => {
                 window.open("https://wa.me/+12545956299?text=Hola,%20me%20interesa%20saber%20m%C3%A1s%20sobre: " + encodeURIComponent(word), "_blank");
            });
            container.appendChild(boldWord);
            container.appendChild(document.createTextNode(" "));
        });
    }

    // WhatsApp Floating Button Logic
    const whatsappContainer = document.getElementById("whatsapp-container");
    if (whatsappContainer) {
        const whatsappLink = "https://wa.me/+12545956299?text=NECESITO%20AYUDA";
        whatsappContainer.addEventListener("click", function() {
            window.open(whatsappLink, "_blank");
        });
    }

    // Contact Form Logic (if elements exist)
    const sendMessage = document.getElementById("sendMessage");
    if (sendMessage) {
        sendMessage.addEventListener("click", function(g) {
            g.preventDefault();
            const name = document.getElementById("name")?.value || "";
            const message = document.getElementById("message")?.value || "";
            const h = "https://api.whatsapp.com/send?phone=19154004296&text=Hola " + encodeURIComponent(name) + "! " + encodeURIComponent(message);
            window.open(h);
        });
    }
});

// Performance Optimization (Preserved from original)
(function() {
  if (window.perfOptimizationLoaded) return;
  window.perfOptimizationLoaded = true;
  
  console.log('Iniciando optimización de rendimiento...');
  
  function detectDeviceCapabilities() {
    var savedPerfLevel = '';
    try {
      savedPerfLevel = sessionStorage.getItem('devicePerformance');
    } catch(e) {}
    
    if (savedPerfLevel) {
      document.body.classList.add('perf-' + savedPerfLevel);
      return;
    }
    
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isSafari || isIOS) {
      document.documentElement.classList.add('safari');
      document.body.classList.add('safari');
    }
    
    var perfLevel = 'high';
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Simple heuristic for demo purposes
    if (isMobile) {
        perfLevel = 'medium';
    }
    
    document.body.classList.add('perf-' + perfLevel);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectDeviceCapabilities);
  } else {
    setTimeout(detectDeviceCapabilities, 100);
  }
})();
