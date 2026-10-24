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

const showcase=document.getElementById("sponsorShowcase");
const showcaseGrid=document.getElementById("sponsorShowcaseGrid");
if(showcase&&showcaseGrid&&typeof SPONSORS!=="undefined"){
  const combined=["platinum","gold","bronze"].flatMap(tier=>
    (SPONSORS[tier]||[]).map(s=>({...s,tier}))
  );
  if(combined.length){
    const linkify=text=>text.replace(/(https?:\/\/\S+)/g,url=>`<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
    const linkName=(text,s)=>s.url?text.split(s.name).join(`<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`):text;
    showcaseGrid.innerHTML=combined.map(s=>{
      const label=s.tier.charAt(0).toUpperCase()+s.tier.slice(1);
      const logo=`<img src="${s.logo}" alt="${s.name}" loading="lazy">`;
      const blurb=s.blurb?`<p class="sponsor-blurb">${linkName(linkify(s.blurb),s)}</p>`:"";
      const video=s.video?`<a class="sponsor-video-link" href="${s.video}" target="_blank" rel="noopener">▶ Watch video</a>`:"";
      return `<div class="sponsor-thumb tier-${s.tier}" title="${s.name}">`
        +`<span class="sponsor-tier-tag">${label}</span>`
        +(s.url?`<a href="${s.url}" target="_blank" rel="noopener">${logo}</a>`:logo)
        +blurb+video
        +`</div>`;
    }).join("");
    showcase.hidden=false;
  }
}

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
