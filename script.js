const header=document.getElementById("floatingHeader");
const menu=document.getElementById("menuButton");
const links=[...document.querySelectorAll(".nav-item")];
const sections=[...document.querySelectorAll(".page-section")];

menu.addEventListener("click",()=>{
  const open=header.classList.toggle("open");
  menu.setAttribute("aria-expanded",open);
  menu.textContent=open?"×":"☰";
});
links.forEach(l=>l.addEventListener("click",()=>{
  header.classList.remove("open");
  menu.setAttribute("aria-expanded","false");
  menu.textContent="☰";
}));
const observer=new IntersectionObserver(entries=>{
  const current=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!current)return;
  links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+current.target.id));
},{rootMargin:"-35% 0px -55% 0px",threshold:[.05,.2,.5]});
sections.forEach(s=>observer.observe(s));

document.querySelectorAll(".tier-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const expanded=btn.closest(".tier").classList.toggle("expanded");
    btn.setAttribute("aria-expanded",expanded);
    btn.textContent=expanded?"Show less ▴":"Show all benefits ▾";
  });
});
