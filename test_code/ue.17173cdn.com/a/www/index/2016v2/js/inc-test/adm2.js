(function(){

  var admLoaded = false,ADM_S = [];
  function InitSchedule() {
      for (ADM_S.sort(ADM_sort),
      iAI = 0; iAI < ADM_S.length; iAI++)
          ADM_S[iAI].i = iAI
      admLoaded = true;
  }
  function ADM_sort(n, t) {
      return n.p > t.p ? 1 : n.p == t.p ? 0 : -1
  }
  function ADM_Start(o) {
    	var fn = window[o.t+'_main'];
    	adv.util.isFunction(fn) && fn(o);
  }
  function DoSchedule() {
      var n = -1;
      for (dAI = 0; dAI < ADM_S.length; dAI++)
          switch (ADM_S[dAI].s) {
          case 0:
              if (n == -1 && (n = ADM_S[dAI].p),
              n == ADM_S[dAI].p) {
                  ADM_S[dAI].s = 1,
                  ADM_Start(ADM_S[dAI]);
                  break
              }
          case 1:
              setTimeout(DoSchedule, 300);
              return
          }
  }
  function AddSchedule(n) {
      if(n != null && n instanceof ADM){
        if(!admLoaded){
        	ADM_S[ADM_S.length] = n
        }
        else{
          setTimeout(function(){
            window[n.t+'_main'] && window[n.t+'_main'](n);
          },0);
        }
      }
  }
  function ADM(n, t) {
      this.t = n,
      this.p = t,
      this.s = 0,
      this.i = 0,
      this.style = "position:absolute;"
  }


  window.ADM = ADM;
  window.InitSchedule = InitSchedule;
  window.AddSchedule = AddSchedule;
  window.DoSchedule = DoSchedule;
})();