const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.innerHTML='<i class="fa-solid fa-bars"></i>'}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.getElementById('lightbox'),lbImg=document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lbImg.src=item.dataset.full;lbImg.alt=item.querySelector('img').alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lbImg.src=''}document.querySelector('.lightbox-close').addEventListener('click',closeBox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
document.getElementById('year').textContent=new Date().getFullYear();
