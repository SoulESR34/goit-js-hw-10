!function(){var e,n,t=document.querySelector(".breed-select"),c=document.querySelector(".cat-info"),o=document.querySelector(".error"),i=document.querySelector(".loader"),a={};e=t,n=a,fetch("https://api.thecatapi.com/v1/breeds").then((function(e){return e.json()})).then((function(t){var c=t.map((function(e){return n[e.name]=e.id,"<option>".concat(e.name,"</option>")}));c=["<option disabled selected>Seleccione una raza</option>","<option>---- Activar Error ----</option>"]+c,e.innerHTML=c})).catch((function(e){return console.log("ERROR",e)})),t.addEventListener("change",(function(e){var n,r,s,d;o.classList.contains("hidden")||o.classList.add("hidden"),i.classList.remove("hidden"),n=a[t.value],r=c,s=o,d=i,console.log(n),fetch("https://api.thecatapi.com/v1/images/search?&breed_ids=".concat(n),{headers:{"x-api-key":"live_p96Tzi83Ngw4yzga2N6xeGJHmAPzAS0cWGbUjpEnJU4Grb15UTKM9QNyZlncrvMj"}}).then((function(e){return e.json()})).then((function(e){console.log(e[0].url),r.innerHTML='\n            <section class="cat">            \n                <img src='.concat(e[0].url,' width="350px"/>\n                <div class="info">                \n                    <div>            \n                        <h2>').concat(e[0].breeds[0].name,"</h2>\n                        <p>").concat(e[0].breeds[0].description,'</p>\n                    </div>\n                    <div class="temperament">\n                        <p><span class="subtitle">temperament:</span> ').concat(e[0].breeds[0].temperament,"</p>\n                    </div>\n                </div>\n            </section>\n            ")})).catch((function(){var e=document.querySelector(".cat");s.classList.remove("hidden"),e.remove()})).finally(d.classList.add("hidden"))}))}();
//# sourceMappingURL=index.033f09d2.js.map
