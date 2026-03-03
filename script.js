document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
menu.style.display = menu.style.display === "flex" ? "none" : "flex";
menu.style.flexDirection = "column";
});

// Анімація появи
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

elements.forEach(el => observer.observe(el));

