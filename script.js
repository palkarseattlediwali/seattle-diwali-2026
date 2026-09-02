const header = document.getElementById("siteHeader");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main .section")];

menuToggle?.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  const id = visible.target.id;
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: [0, .15, .4] });

sections.forEach(section => observer.observe(section));

// Gentle reveal animation for major content blocks.
const revealItems = document.querySelectorAll(".content-section .section-inner, .ticket-inner, footer");
revealItems.forEach(item => item.style.opacity = "0");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.animate(
      [{opacity:0, transform:"translateY(22px)"}, {opacity:1, transform:"translateY(0)"}],
      {duration:650, easing:"cubic-bezier(.2,.7,.2,1)", fill:"forwards"}
    );
    revealObserver.unobserve(entry.target);
  });
}, {threshold:.12});

revealItems.forEach(item => revealObserver.observe(item));
