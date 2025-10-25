// ===================
//  NAVBAR EFECTO SCROLL
// ===================
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.luxury-nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===================
//  CARRUSEL GALERÍA
// ===================
document.querySelectorAll('.carousel').forEach(carousel => {
  const items = carousel.querySelectorAll('.carousel-item');
  if (items.length <= 1) {
    carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next')
      .forEach(ctrl => ctrl.style.display = 'none');
  }
});

// ===================
//  SCROLL SUAVE EN ENLACES INTERNOS
// ===================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ===================
//  FADE-IN AL HACER SCROLL
// ===================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  // ===== Efecto en cascada para los párrafos =====
  const paragraphs = document.querySelectorAll(".historia-box p");
  const pObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pList = Array.from(entry.target.parentNode.querySelectorAll("p"));
        pList.forEach((p, index) => {
          setTimeout(() => {
            p.classList.add("show");
          }, index * 300);
        });
        pObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (paragraphs.length > 0) {
    pObserver.observe(paragraphs[0]);
  }
});

// ===================
//  MENÚ HAMBURGUESA Y SCROLL NAV
// ===================
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".navbar-nav a");

  function cerrarMenu() {
    if (navbarCollapse.classList.contains("show")) {
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      collapseInstance.hide();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", cerrarMenu);
  });

  navbarToggler.addEventListener("click", () => {
    const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
    if (navbarCollapse.classList.contains("show")) {
      collapseInstance.hide();
    } else {
      collapseInstance.show();
    }
  });

  document.addEventListener("click", (event) => {
    const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
    if (!isClickInsideNavbar) cerrarMenu();
  });
});

// ===================
//  VIDEO SLIDER
// ===================
const slides = document.querySelectorAll(".video-slide");
const nextBtn = document.querySelector(".video-nav.next");
const prevBtn = document.querySelector(".video-nav.prev");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

if (nextBtn && prevBtn && slides.length) {
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  slides.forEach((slide, i) => {
    slide.querySelectorAll("video").forEach((v) => {
      v.addEventListener("play", () => {
        slides.forEach((s, j) => {
          if (i !== j) {
            s.querySelectorAll("video").forEach((vid) => vid.pause());
          }
        });
      });
    });
  });
}

// ===================
//  LOGO RECARGA CON EFECTO SUAVE
// ===================
document.addEventListener("DOMContentLoaded", function () {
  const logoNav = document.querySelector(".navbar-brand");

  if (logoNav) {
    logoNav.addEventListener("click", function (event) {
      event.preventDefault();
      // Desactiva el scroll restore del navegador
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      // Recarga y vuelve al inicio suavemente
      location.reload();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    });
  }
});

// ===================
//  EVITA SALTO AL RECARGAR (CORRECCIÓN PRINCIPAL)
// ===================
window.addEventListener("load", () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 50);
});
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const edad = document.getElementById('edad').value.trim();
  const instrumento = document.getElementById('instrumento').value.trim();
  const tieneInstrumento = document.getElementById('tieneInstrumento').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  const whatsappNumber = '50683893687'; 
  const text = `Hola, quiero unirme a la Banda Melorítmica San Joaquín de Flores%0A%0ANombre: ${encodeURIComponent(nombre)}%0AEdad: ${encodeURIComponent(edad)}%0AInstrumento: ${encodeURIComponent(instrumento)}%0ATiene instrumento propio: ${encodeURIComponent(tieneInstrumento)}%0AMensaje: ${encodeURIComponent(mensaje)}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(whatsappURL, '_blank');
});
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});
