const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
const menuIcon=menu.querySelector('span');
if(menuIcon)menuIcon.setAttribute('aria-hidden','true');
function setMenuOpen(open){
 if(open)document.documentElement.style.setProperty('--mobile-header-height',menu.closest('header').getBoundingClientRect().height+'px');
 document.body.classList.toggle('mobile-menu-open',open&&window.matchMedia('(max-width:760px)').matches);
 menu.setAttribute('aria-expanded',String(open));
 menu.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
 nav.classList.toggle('open',open);
 if(menuIcon)menuIcon.textContent=open?'×':'☰';
}
setMenuOpen(false);
menu.addEventListener('click',()=>setMenuOpen(menu.getAttribute('aria-expanded')!=='true'));
nav.addEventListener('click',event=>{if(event.target.closest('a')&&window.matchMedia('(max-width:760px)').matches)setMenuOpen(false)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenuOpen(false);menu.focus()}});
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)setMenuOpen(false)});
const form=document.querySelector('#quote-form');if(form){const type=new URLSearchParams(location.search).get('type');if(['soft-enamel','hard-enamel','die-struck','printed'].includes(type))document.querySelector('#pin-type').value=type;form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const text='The Lapel Pin Guy\nEnquiry brief, not submitted\n\n'+Array.from(data.entries()).map(([k,v])=>k+': '+v).join('\n\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='the-lapel-pin-guy-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#form-status').textContent='Your brief download has been prepared. No enquiry has been sent. Keep the file until the enquiry service is connected.'})}
