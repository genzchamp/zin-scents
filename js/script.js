document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products.jallabiyas, 'products');
  renderProducts(products.perfumes, 'perfumes');
  renderProducts(products.abayas, 'abayas');
  renderProducts(products.scarves, 'scarves');

  const panels=[...document.querySelectorAll('.collection-panel')];
  const categories=[...document.querySelectorAll('.category-card')];

  function closeAll(){panels.forEach(p=>p.classList.remove('active'));}

  categories.forEach(card=>{
    const button=card.querySelector('[data-target]');
    button.addEventListener('click',()=>{
      const panel=document.getElementById(button.dataset.target);
      const wasOpen=panel.classList.contains('active');
      closeAll();
      if(!wasOpen){
        panel.classList.add('active');
        setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'start'}),40);
      }
    });
  });

  document.querySelectorAll('.close-collection').forEach(button=>button.addEventListener('click',()=>{
    closeAll();
    const collections=document.getElementById('collections');
    collections.scrollIntoView({behavior:'smooth',block:'start'});
  }));

  const lightbox=document.getElementById('lightbox');
  const image=document.getElementById('lightbox-image');
  document.addEventListener('click',e=>{
    const img=e.target.closest('.product-card img');
    if(img){image.src=img.src;image.alt=img.alt;lightbox.classList.add('show');}
  });
  document.querySelector('.close-lightbox').addEventListener('click',()=>lightbox.classList.remove('show'));
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('show');});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')lightbox.classList.remove('show');});

  const backTop=document.querySelector('.back-top');
  backTop.addEventListener('click',e=>{
    e.preventDefault();
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  });
});
