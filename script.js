const header=document.getElementById("floatingHeader");
const menu=document.getElementById("menuButton");
const links=[...document.querySelectorAll(".nav-item")];
const sections=[...document.querySelectorAll(".page-section")];

menu.addEventListener("click",(e)=>{
  e.stopPropagation();
  const open=header.classList.toggle("open");
  menu.setAttribute("aria-expanded",open);
});
links.forEach(l=>l.addEventListener("click",()=>{
  header.classList.remove("open");
  menu.setAttribute("aria-expanded","false");
}));
document.addEventListener("click",(e)=>{
  if(header.classList.contains("open") && !header.contains(e.target)){
    header.classList.remove("open");
    menu.setAttribute("aria-expanded","false");
  }
});
const observer=new IntersectionObserver(entries=>{
  const current=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!current)return;
  links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+current.target.id));
},{rootMargin:"-35% 0px -55% 0px",threshold:[.05,.2,.5]});
sections.forEach(s=>observer.observe(s));

const SPONSOR_FORM_URL="https://forms.gle/dH9rbXBTeb3sxjmq6";
document.querySelectorAll(".tier-slot").forEach(slot=>{
  const tier=slot.dataset.tier;
  const sponsors=(typeof SPONSORS!=="undefined"&&SPONSORS[tier])||[];
  if(sponsors.length){
    slot.classList.add("has-sponsors");
    slot.innerHTML=sponsors.map(s=>{
      const img=`<img src="${s.logo}" alt="${s.name}" loading="lazy">`;
      return s.url
        ? `<a class="sponsor-logo" href="${s.url}" target="_blank" rel="noopener" title="${s.name}">${img}</a>`
        : `<span class="sponsor-logo" title="${s.name}">${img}</span>`;
    }).join("");
  }else{
    const label=tier.charAt(0).toUpperCase()+tier.slice(1);
    slot.innerHTML=`<a href="${SPONSOR_FORM_URL}" target="_blank" rel="noopener">Become our first ${label} sponsor →</a>`;
  }
});

document.querySelectorAll(".tier-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const expanded=btn.closest(".tier").classList.toggle("expanded");
    btn.setAttribute("aria-expanded",expanded);
    btn.textContent=expanded?"Show less ▴":"Show all benefits ▾";
  });
});

const orgPhotos=[...document.querySelectorAll(".organizer-photo")];
if(orgPhotos.length){
  const orgObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        orgObserver.unobserve(entry.target);
      }
    });
  },{threshold:.3});
  orgPhotos.forEach(p=>orgObserver.observe(p));
}
