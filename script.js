// Simple site scripts: login, protect, logout, fake send, particles
function login(){
  var u = document.getElementById('user').value.trim();
  var p = document.getElementById('pass').value.trim();
  if(u === 'maculado' && p === 'eldenring'){
    localStorage.setItem('logado','1');
    window.location.href = 'home.html';
  } else {
    var e = document.getElementById('erro');
    if(e) e.innerText = 'Usuário ou senha incorretos';
  }
}

function proteger(){
  if(localStorage.getItem('logado') !== '1'){
    window.location.href = 'index.html';
  }
}

function logout(){
  localStorage.removeItem('logado');
  window.location.href = 'index.html';
}

function fakeSend(e){
  e.preventDefault();
  document.getElementById('sent').style.display = 'block';
  setTimeout(function(){ document.getElementById('sent').style.display = 'none'; }, 3000);
}

// PARTICLES (gold dust)
(function(){
  var container = document.getElementById('particles');
  if(!container) return;
  var W = window.innerWidth, H = window.innerHeight;
  function make(){ 
    var el = document.createElement('div');
    el.className = 'p';
    var s = Math.random()*6 + 3;
    el.style.width = s+'px'; el.style.height = s+'px';
    el.style.position = 'fixed';
    el.style.left = Math.random()*W + 'px';
    el.style.top = H + 'px';
    el.style.background = 'rgba(212,194,122,' + (Math.random()*0.6+0.4) + ')';
    el.style.borderRadius = '50%';
    el.style.zIndex = 1;
    el.style.pointerEvents = 'none';
    container.appendChild(el);
    var dur = (Math.random()*4+3)*1000;
    el.animate([{transform:'translateY(0px)', opacity:1},{transform:'translateY(-'+(H+200)+'px)', opacity:0}], {duration:dur, easing:'linear'});
    setTimeout(function(){ el.remove(); }, dur);
  }
  setInterval(make, 140);
  window.addEventListener('resize', function(){ W=window.innerWidth; H=window.innerHeight; });
})();
