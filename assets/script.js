
(function(){
  const buttons=[...document.querySelectorAll('[data-set-lang]')];
  const nodes=[...document.querySelectorAll('[data-lang]')];
  function setLang(lang){
    localStorage.setItem('albumvault_lang',lang);
    document.documentElement.lang=lang;
    nodes.forEach(n=>n.classList.toggle('show',n.dataset.lang===lang));
    buttons.forEach(b=>b.classList.toggle('active',b.dataset.setLang===lang));
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.setLang)));
  const saved=localStorage.getItem('albumvault_lang');
  const preferred=saved || (navigator.language||'en').toLowerCase().startsWith('de')?'de':'en';
  setLang(preferred);
})();
