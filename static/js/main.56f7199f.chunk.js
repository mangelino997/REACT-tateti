(this.webpackJsonptateti=this.webpackJsonptateti||[]).push([[0],[,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAwgAAAMIBT4kc1wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHaSURBVEiJpdVPS1ZBFAbw373aH1GMsEUgGLoq24TZJvoAkRgUtAhCaBVW1MYWfYHCreUXkJYatCgQ3Bkto10pmLh150Ja5bTwXhrHee/rqwfO4j5zzvPMmTtzThFC0GRFUVzGLYxguII38RtfQwi/GglCCIccJe5hBaGNr1SxZZYrQz6A5SMQp76MgUYBjGPrGOS1b2E8K4BBbJ+AvPZtDB4QQDdWo6AveIyP+NtAtodPmMLnCF9FdywwkyROR5VdwwtM4ErlExV2PYqbTjhm6hvalTn3J7kb0eR4lvkfXSUmMeSg9erc+pPvoYrbQqK8iZ5jVNBb5cZcC6X9FxrbUgjhT6fbDyHsYimBR3ICPzslb8gdLh0+u/MnEEhzz5XYSMC0ok4szd0osZaAE0VRnOqUuSiK07iTwGsl1hNwCE87FcBLXEqwdRiz/+SD/21hD2/Qd4Tr2Ye38m1krA5arMDX9odL3fR28AEPM8QPqrWdDHnAYtyLRqPdP8cN7EbBUxmB2y2I65MYTdv1bLTri7iKV3iErozAhQaB2VYDZ64K+Iab6EF/i7M/24J8rt3InM8k5SrICcy3nclV8l38iBLPtBH4jskjDf2IoKhuynsULdbf4X5uvfZ/k1Fz8ISVz5MAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGYSURBVEiJtdZPSxVRGAbw3x1dtCloUeFVMVu1EDftRPdFqasWbd2WC1etgr6BuAmSQojCaFdpEPQJ/AIqZIRKbkLwoovwSi7mDB3GuXeuY/eBlznnPQ/P+54/c95T0x6DmMZ93Ax92MFPrOAjdkt0zqAfL3GMvyV2gg8Y6lR8Co0OhPPWwGSZ+GzI6Lzi8WxmW4nfQ/MC4nGQqbx4f25ZvmMcd7BWcbnqcYBXOcLTaOxRxZksZgKDBUvzDZfQi7cVAxxjAJ60IBxg/4L78Ri+FAx8xcNg7yNy5tvCDEZxN+LkbRU2CwZeRHvwLPiGI98tZ/GuQGcjQV8BuQxNPMdE5Jsv4NV7K4jDMsYwh+v4g3Vp1rWYmGCvQoCR8L2CG6F9hMMc71ci3bDzIs6ypw1vKxF2uktYSaT3+UkXxJv4nEiLxVIXArzGbraWdWzgcug38Du0rwbbDlmRVrcktIv8DdyWO0D/87puWXi6WnAyTKpWMg/woEw8wzUs6Lzov9HiyqkVOSMM+PdsGQ590pP3Q/oPfdLm2XIKEzYNVvgtIjEAAAAASUVORK5CYII="},function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(11),n(12),n(1)),i=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value))},u=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],u=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=Object(a.useState)({squares:Array(9).fill(null),xIsNext:!0,count:0}),A=Object(o.a)(s,2),m=A[0],f=A[1],d=function(e){return r.a.createElement(i,{value:m.squares[e],onClick:function(){return g(e)}})},g=function(e){var t=m.squares.slice();x(t)||t[e]||(t[e]=m.xIsNext?"X":"O",f({squares:t,xIsNext:!m.xIsNext,count:m.count+1}))},v=function(){var e=m.squares.slice();if(0!==m.count&&!x(e))if(1===m.count)b(e);else switch(function(e){for(var t=u,n=0,a=0;a<t.length;a++){var r=Object(o.a)(t[a],3),c=r[0],l=r[1],i=r[2];2!==t[a].filter((function(t){return"X"===e[t]})).length||e[c]&&e[l]&&e[i]||n++}return n}(e)){case 0:(function(e){for(var t=u,n=null,a=0;a<t.length;a++){var r=t[a].filter((function(t){return"X"===e[t]})),c=t[a].filter((function(t){return"O"===e[t]}));if(0===r.length&&c.length>0)return n=t[a].filter((function(t){return null===e[t]})),E(e,n[0]),!0}return!1})(e)||b(e);break;case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:w(e)||h(e)}},h=function(e){for(var t=u,n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(2===t[n].filter((function(t){return"X"===e[t]})).length&&(!e[r]||!e[c]||!e[l])){if("X"===e[r]&&e[r]===e[c]&&null===e[l])return void E(e,l);if("X"===e[r]&&null===e[c]&&e[l]===e[r])return void E(e,c);if(null===e[r]&&"X"===e[c]&&e[l]===e[c])return void E(e,r)}}},E=function(e,t){setTimeout((function(){e[t]="O",f({squares:e,xIsNext:!m.xIsNext,count:m.count+1})}),500)},b=function e(t){setTimeout((function(){var n=Math.round(8*Math.random()+parseInt(0));t[n]?e(t):(t[n]="O",f({squares:t,xIsNext:!m.xIsNext,count:m.count+1}))}),500)},w=function(e){for(var t=u,n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(2===t[n].filter((function(t){return"O"===e[t]})).length){if("O"===e[r]&&e[r]===e[c]&&null===e[l])return E(e,l),!0;if("O"===e[r]&&null===e[c]&&e[l]===e[r])return E(e,c),!0;if(null===e[r]&&"O"===e[c]&&e[l]===e[c])return E(e,r),!0}}return!1},x=function(e){for(var t=u,n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null};return Object(a.useEffect)((function(){var e=x(m.squares);e&&l("Winner: "+e),m.xIsNext||v()}),[m.squares]),r.a.createElement(a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Tic Tac Toe"),r.a.createElement("h5",null,"User = X , IA = O"),r.a.createElement("div",{className:"row justify-content-center py-3"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-md-5 board"},r.a.createElement("div",{className:"board-row"},d(0),d(1),d(2)),r.a.createElement("div",{className:"board-row"},d(3),d(4),d(5)),r.a.createElement("div",{className:"board-row"},d(6),d(7),d(8)),r.a.createElement("div",{className:"btn-reset"},r.a.createElement("button",{type:"button",class:"btn btn-warning btn-sm",onClick:function(){l(""),f({squares:Array(9).fill(null),xIsNext:!0,count:0})}},"Reset"))),r.a.createElement("div",{className:"col"})),r.a.createElement("h3",{className:"text-winner"},c)))},s=n(4),A=n.n(s),m=n(5),f=n.n(m),d=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("span",null,"Marcio Angelino"),r.a.createElement("a",{href:"https://github.com/mangelino997",target:"_blank"},r.a.createElement("img",{src:A.a})),r.a.createElement("a",{href:"https://www.linkedin.com/in/marcio-angelino-069592186/",target:"_blank"},r.a.createElement("img",{src:f.a})))))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.56f7199f.chunk.js.map