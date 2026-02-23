// ===== Mobile menu =====
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Toast helper =====
function showToast(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.style.display = "block";
  clearTimeout(el.__t);
  el.__t = setTimeout(() => (el.style.display = "none"), 3500);
}

// ===== Demo forms =====
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(leadForm);
    const name = fd.get("name");
    const grade = fd.get("grade");
    const need = fd.get("need");
    showToast("toast", `Дякую, ${name}! ✅ Заявка отримана (клас: ${grade}, запит: ${need}).`);
    leadForm.reset();
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const name = fd.get("name");
    showToast("toast2", `Дякую, ${name}! ✅ Я напишу тобі в Telegram.`);
    contactForm.reset();
  });
}

// ===== AOS (scroll animations) =====
window.addEventListener("load", () => {
  if (window.AOS) {
    AOS.init({
      duration: 650,
      once: true,
      offset: 60
    });
  }

  // ===== Swiper (reviews slider) =====
  if (window.Swiper) {
    const swiper = new Swiper("#reviewsSwiper", {
      loop: true,
      spaceBetween: 14,
      slidesPerView: 1,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: "#nextBtn", prevEl: "#prevBtn" },
      breakpoints: {
        820: { slidesPerView: 2 }
      }
    });
  }
});
