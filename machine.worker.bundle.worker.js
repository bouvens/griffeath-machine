!function(){"use strict";function t(t,n){return t<0?t+n:t>=n?t-n:t}function n(n,r,e,a,i,o,s){var f=a[n],u=t(f+1,s);return a[r+t(e-1,o)*i]===u||a[r+t(e+1,o)*i]===u||a[t(r-1,i)+e*i]===u||a[t(r+1,i)+e*i]===u?u:f}onmessage=function(t){for(var r=t.data,e=r.field,a=r.width,i=r.height,o=r.states,s=r.from,f=r.to,u=new Uint8Array(f-s),c=s;c<f;c+=1){var d=c%a,g=c/a|0;u[c-s]=n(c,d,g,e,a,i,o)}postMessage(u)}}();