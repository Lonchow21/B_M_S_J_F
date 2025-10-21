// Navbar con efecto al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.luxury-nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Galería: evita flechas molestas si no hay más slides
document.querySelectorAll('.carousel').forEach(carousel => {
  const items = carousel.querySelectorAll('.carousel-item');
  if (items.length <= 1) {
    carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next')
      .forEach(ctrl => ctrl.style.display = 'none');
  }
});

// Animación suave al hacer clic en enlaces internos
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
// ===== Fade in al hacer scroll =====
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
          }, index * 300); // delay en cascada
        });
        pObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (paragraphs.length > 0) {
    pObserver.observe(paragraphs[0]);
  }
});

// Cierra el menú hamburguesa al hacer clic en un enlace
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".navbar-nav a");

  // Función para cerrar el menú si está abierto
  function cerrarMenu() {
    if (navbarCollapse.classList.contains("show")) {
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      collapseInstance.hide();
    }
  }

  // ✅ Cierra el menú al hacer clic en un enlace del navbar
  navLinks.forEach(link => {
    link.addEventListener("click", cerrarMenu);
  });

  // ✅ Alterna abrir/cerrar al tocar el botón hamburguesa
  navbarToggler.addEventListener("click", () => {
    const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
    if (navbarCollapse.classList.contains("show")) {
      collapseInstance.hide();
    } else {
      collapseInstance.show();
    }
  });

  // ✅ Cierra el menú si se hace clic fuera del navbar
  document.addEventListener("click", (event) => {
    const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
    if (!isClickInsideNavbar) {
      cerrarMenu();
    }
  });

  // ✅ Efecto al hacer scroll: navbar cambia de color
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".luxury-nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ✅ Scroll suave al hacer clic en enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
});
