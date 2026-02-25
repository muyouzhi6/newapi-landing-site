(function(){
  // If rendered inside new-api iframe, add safe top offset
  try {
    if (window.self !== window.top) {
      document.documentElement.classList.add('in-iframe');
      document.body.classList.add('in-iframe');
    }
  } catch (_) {
    document.documentElement.classList.add('in-iframe');
    document.body.classList.add('in-iframe');
  }

  function copyText(id){
    var el=document.getElementById(id);
    if(!el) return;
    var txt=el.innerText || '';
    navigator.clipboard.writeText(txt).then(function(){
      // noop
    });
  }

  function copyRawText(txt){
    if(!txt) return;
    navigator.clipboard.writeText(String(txt)).then(function(){
      // noop
    });
  }

  document.querySelectorAll('button.copy').forEach(function(btn){
    btn.addEventListener('click', function(){
      var which=btn.getAttribute('data-copy');
      if(which==='config') copyText('code-config');
      if(which==='auth') copyText('code-auth');
      var old=btn.innerText;
      btn.innerText='已复制';
      setTimeout(function(){btn.innerText=old||'复制'}, 1200);
    });
  });

  // mini copy buttons (e.g., QQ)
  document.querySelectorAll('button.mini-copy').forEach(function(btn){
    btn.addEventListener('click', function(){
      var txt=btn.getAttribute('data-copytext') || '';
      copyRawText(txt);
      var old=btn.innerText;
      btn.innerText='已复制';
      setTimeout(function(){btn.innerText=old||'复制'}, 1200);
    });
  });
})();
