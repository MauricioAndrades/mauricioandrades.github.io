var menu=document.querySelector(".nav_list"),burger=document.querySelector(".burger"),doc=$(document),l=$(".scrolly"),panel=$(".panel"),vh=$(window).height(),openMenu=function(){burger.classList.toggle("burger--active"),menu.classList.toggle("nav_list--active")},scrollFx=function(){for(var e=doc.scrollTop(),n=vh/4,t=0;t<panel.length;t++)panel.eq(t).offset().top<e+n?panel.eq(t).find(".panel_content").addClass("panel_content--active"):panel.eq(t).find(".panel_content").removeClass("panel_content--active")},scrolly=function(e){e.preventDefault();var n=this.hash,t=$(n);$("html, body").stop().animate({scrollTop:t.offset().top},300,"swing",function(){window.location.hash=n})},init=function(){burger.addEventListener("click",openMenu,!1),window.addEventListener("scroll",scrollFx,!1),window.addEventListener("load",scrollFx,!1),$('a[href^="#"]').on("click",scrolly)};doc.on("ready",init);var importScript=function(e){function n(e){throw new URIError("The script "+e.target.src+" is not accessible.")}return function(t,o){var r=document.createElement("script");r.type="text/javascript",r.onerror=n,o&&(r.onload=o),e.appendChild(r),r.src=t}}(document.head||document.getElementsByTagName("head")[0]);
//# sourceMappingURL=./main-min.js.map