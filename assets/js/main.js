'use strict';
(function(){
  var WA_NUMBER=(window.TILIA_CONFIG&&window.TILIA_CONFIG.whatsappNumber)||'';
  var $=function(i){return document.getElementById(i)};
  document.querySelectorAll('.wa-link').forEach(function(a){
    var size=a.dataset.size;
    var text='Hi, I would like to order TILIA Honey'+(size?' ('+size+')':'')+'.';
    a.href='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(text);
    a.target='_blank';a.rel='noopener';
  });
  var lv=document.querySelector('#level i');
  function sc(){var h=document.documentElement.scrollHeight-innerHeight;lv.style.height=(h>0?Math.min(100,scrollY/h*100):0)+'%'}
  addEventListener('scroll',sc,{passive:true});sc();
  var bee=$('bee'),calm=matchMedia('(prefers-reduced-motion:reduce)').matches,touch=matchMedia('(pointer:coarse)').matches;
  if(calm||touch){bee.style.display='none'}else{
    var tx=0,ty=0,x=0,y=0;
    addEventListener('pointermove',function(e){tx=e.clientX+14;ty=e.clientY+14});
    (function loop(){x+=(tx-x)*.08;y+=(ty-y)*.08;bee.style.transform='translate('+x+'px,'+y+'px)';requestAnimationFrame(loop)})();
  }
})();
