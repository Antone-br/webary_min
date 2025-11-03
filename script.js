window.Webflow||=[],window.Webflow.push(()=>{gsap.config({nullTargetWarn:!1}),$(".section_achivement").each(function(){let e=$(this),t=e.find("[data-content-wrapper]"),a=e.find("[data-image-item='']").hide(),n=e.find("[data-image-item='2']").hide(),i=e.find(".achivement_slider-button-item").hide(),o=e.find("[data-dot-item]"),r=e.find("[data-slider]"),_=e.find("[data-arrow='']"),s=e.find("[data-arrow='left-hide']"),l=e.find("[data-arrow='right-hide']"),d=e.find("[data-dot-list]"),c=e.find(".home-slider_heading"),h=e.find("[data-trigger-wrapper]"),f=e.find("[data-content-top='']"),p=a.length,m=0,u=0,g=0,v=0,b=0,y;function L(t,r){if(t===m)return;let _=a.eq(m),s=a.eq(t),l=n.eq(m),d=n.eq(t),c=i.eq(m),h=i.eq(t);gsap.to(o.find(".slider_dot_line"),{scaleX:0,duration:.3}),gsap.to(o.eq(t).find(".slider_dot_line"),{scaleX:1,duration:.3}),a.hide(),_.css("display","flex"),s.css("display","flex"),n.hide(),l.css("display","flex"),d.css("display","flex"),i.hide(),c.css("display","flex"),h.css("display","flex");let f=e.find(".achivement_slider-collection-list").eq(0);f.find(".achivement_slider-collection-item").removeClass("active");let p=f.find(".achivement_slider-collection-item").eq(t).addClass("active"),u=p.find(".achivement_slider-heading");if(u.length){let g=u.text();u.html(g.split("").map(e=>`<span class="char">${e}</span>`).join("")),gsap.fromTo(u.find(".char"),{y:60,opacity:0},{y:0,opacity:1,duration:.7,stagger:{amount:.4},ease:"power2.out"})}let v=e.find(".achivement_slider-collection-list").eq(1);v.find(".achivement_slider-para-item").removeClass("active");let b=v.find(".achivement_slider-para-item").eq(t).addClass("active"),L=b.find(".achivement_slider-para");if(L.length){let M=L.text();L.html(M.split("").map(e=>`<span class="char">${e}</span>`).join("")),gsap.fromTo(L.find(".char"),{y:60,opacity:0},{y:0,opacity:1,duration:.7,stagger:{amount:.4},ease:"power2.out",delay:.3})}$(".achivement_slider-button-item").removeClass("active"),$(".achivement_slider-button-item").eq(t).addClass("active");let C=r?{next:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",prev:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}:{next:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",prev:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},E=r?{next:"polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)",prev:"polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)"}:{next:"polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)",prev:"polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)"},w=gsap.timeline({defaults:{duration:1,ease:"power2.inOut"}});h.css("display","flex"),c.css("display","flex"),gsap.set(h,{opacity:0,x:r?"-100%":"100%",y:0,clearProps:"transform,translate,rotate,filter,scale"}),gsap.set(c,{opacity:1,x:0,y:0,clearProps:"transform,translate,rotate,filter,scale"}),w.fromTo(s,{clipPath:C.next},{clipPath:E.next}),w.fromTo(_,{clipPath:C.prev},{clipPath:E.prev},"<"),w.fromTo(d,{clipPath:C.next},{clipPath:E.next},"<"),w.fromTo(l,{clipPath:C.prev},{clipPath:E.prev},"<"),w.fromTo(h,{opacity:0,x:r?"-50%":"50%"},{opacity:1,x:0,duration:1,y:"0%"},"<"),w.to(c,{opacity:0,x:r?"50%":"-50%",y:"0%",duration:1},"<"),w.fromTo(s.find(".home-slider_title .char"),{yPercent:r?100:-100},{yPercent:0,duration:.5,stagger:{amount:.5}},r?"<50%":"<"),m=t,y.seek(`step${t}`)}n.hide().first().css("display","flex"),i.hide().first().css("display","flex"),a.first().css("display","flex"),$(".achivement_slider-collection-item").removeClass("active").first().addClass("active"),gsap.set(o.eq(0).find(".slider_dot_line"),{scaleX:1}),$(".achivement_slider-para-item").removeClass("active").first().addClass("active"),$(".achivement_slider-button-item").removeClass("active").first().addClass("active"),y=gsap.timeline({repeat:-1}),o.each((e,t)=>{y.addLabel(`step${e}`),y.to($(t).find(".home-slider_dot-line"),{scaleX:1,ease:"none",duration:8,onComplete:()=>L((e+1)%p,!0)})});let M=()=>window.innerWidth>=992,C=(e,t)=>{let a=t[0].getBoundingClientRect();return e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom};t.on("click",function(e){if($(e.target).closest(".button, .navbar_menu-wrap, [data-dot-item]").length)return;let t=this.getBoundingClientRect(),a=e.clientX-t.left<t.width/2;L((m+(a?-1:1)+p)%p,!a)}),o.on("click",function(){let e=$(this).index();L(e,e>m)});let E=!1,w=!0;r.on("mousemove",function(e){if(!M())return;let t=r[0].getBoundingClientRect();v=e.clientX-t.left,b=e.clientY-t.top;let a=C(e,d),n=c.toArray().some(t=>C(e,$(t))),i=h.toArray().some(t=>C(e,$(t))),o=C(e,f);(E=a||n||i||o)?gsap.to(_,{opacity:0,duration:.3,ease:"power2.out"}):gsap.to(_,{opacity:1,duration:.3,ease:"power2.out"})}),r.on("mouseleave",()=>{M()&&(w=!1,gsap.to(_,{opacity:0,duration:.3,ease:"power2.out"}),gsap.to(s,{opacity:1,duration:.3,ease:"power2.out"}),gsap.to(l,{opacity:1,duration:.3,ease:"power2.out"}))}),r.on("mouseenter",function(e){if(!M())return;w=!0;let t=r[0].getBoundingClientRect();u=v=e.clientX-t.left,g=b=e.clientY-t.top,gsap.to(_,{opacity:1,duration:.3,ease:"power2.out"})}),c.on("mouseenter",()=>{gsap.to(_,{opacity:0,duration:.3,ease:"power2.out"})}),c.on("mouseleave",()=>{gsap.to(_,{opacity:1,duration:.3,ease:"power2.out"})}),$(window).on("resize",()=>{}),function e(){if(!M())return;u+=(v-u)*.1,g+=(b-g)*.1;let t=r[0].getBoundingClientRect(),a=u<t.width/2;if(E||!w){requestAnimationFrame(e);return}if(a){let n=_.width();_.css({left:`${u-n}px`,top:`${g}px`,transform:"translate(0, -50%) rotate(0deg)"}),gsap.to(s,{opacity:0,duration:.3}),gsap.to(l,{opacity:1,duration:.3})}else{let i=_.width();_.css({left:`${u+i}px`,top:`${g}px`,transform:"translate(-100%, -50%) rotate(180deg)"}),gsap.to(l,{opacity:0,duration:.3}),gsap.to(s,{opacity:1,duration:.3})}requestAnimationFrame(e)}()})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){function e(){if(window.innerWidth<=991)return;let e=document.querySelectorAll('[data-trigger-wrapper=""]');e.forEach(e=>{e._animationRunning=!1,e._isHovered=!1;let t=e.querySelectorAll('[data-text-state="rel"]'),a=e.querySelectorAll('[data-text-state="abs"]'),n=e.querySelectorAll('[data-icon-state="rel"]'),i=e.querySelectorAll('[data-icon-state="abs"]');t.forEach(e=>gsap.set(e,{x:0})),n.forEach(e=>gsap.set(e,{x:0,rotation:0})),a.forEach(e=>gsap.set(e,{x:"-120%"})),i.forEach(e=>gsap.set(e,{x:"-120%",rotation:45})),e.addEventListener("mouseenter",()=>{if(e._isHovered=!0,e._animationRunning)return;e._animationRunning=!0;let o=gsap.timeline({onComplete(){if(e._animationRunning=!1,!e._isHovered){e._animationRunning=!0;let o=gsap.timeline({onComplete(){e._animationRunning=!1}});o.to([...a,...t,...n,...i],{x:(e,o)=>[...n].includes(o)?0:[...i].includes(o)?"-120%":[...t].includes(o)?0:[...a].includes(o)?"-120%":void 0,duration:1,ease:"expo.inOut",stagger:{each:.04,from:"end"}}).to(n,{rotation:0,duration:.3,ease:"power2.in"},"-=0.16").to(i,{rotation:45,duration:.3,ease:"power2.in"},"-=0.16")}}});o.to(n,{rotation:45,duration:.3,ease:"power1.out"}),o.to([...a,...t,...n,...i],{x:(e,o)=>[...n].includes(o)?"120%":[...i].includes(o)?"0%":[...t].includes(o)?"120%":[...a].includes(o)?"0%":void 0,duration:1,ease:"expo.out",stagger:{each:.04,from:"start"}})}),e.addEventListener("mouseleave",()=>{if(e._isHovered=!1,e._animationRunning)return;e._animationRunning=!0;let o=gsap.timeline({onComplete(){e._animationRunning=!1}});o.to([...a,...t,...n,...i],{x:(e,o)=>[...n].includes(o)?0:[...i].includes(o)?"-120%":[...t].includes(o)?0:[...a].includes(o)?"-120%":void 0,duration:1,ease:"expo.inOut",stagger:{each:.04,from:"end"}}).to(n,{rotation:0,duration:.3,ease:"power2.in"},"-=0.16").to(i,{rotation:45,duration:.3,ease:"power2.in"},"-=0.16")})})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>setTimeout(e,100)):setTimeout(e,100)}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){document.querySelectorAll(".faq_item-wrapper").forEach(e=>{e.addEventListener("click",function(){let e=this.querySelectorAll(".faq_radial");e.forEach(e=>{if("true"===e.dataset.animating)return;let t=+(e.dataset.animCount||0);t++,e.dataset.animCount=t,e.dataset.animating="true",e.classList.contains("is-top-left")&&(t%2==1?e.style.setProperty("--faqAnimLeft","radialLeft 2s linear forwards"):e.style.setProperty("--faqAnimLeft","radialLeftReverse 2s linear forwards"),e.addEventListener("animationend",()=>{e.dataset.animating="false"},{once:!0})),e.classList.contains("is-bottom-right")&&(t%2==1?e.style.setProperty("--faqAnimRight","radialRight 2s linear forwards"):e.style.setProperty("--faqAnimRight","radialRightReverse 2s linear forwards"),e.addEventListener("animationend",()=>{e.dataset.animating="false"},{once:!0}))})})})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".faq_item-wrapper");e.forEach(e=>{let t=e.querySelector(".faq_answer-wrapper");e.addEventListener("click",()=>{e.classList.contains("active")?(t.style.height=t.scrollHeight+"px",requestAnimationFrame(()=>{t.style.height="0px"}),e.classList.remove("active"),t.addEventListener("transitionend",function e(){t.style.removeProperty("height"),t.removeEventListener("transitionend",e)})):(t.style.height="0px",e.classList.add("active"),requestAnimationFrame(()=>{t.style.height=t.scrollHeight+"px"}),t.addEventListener("transitionend",function a(){e.classList.contains("active")&&(t.style.height="auto"),t.removeEventListener("transitionend",a)}))})})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelector(".navbar_container"),t=document.querySelector(".navbar_component"),a=document.querySelector(".navbar_container-wrapper"),n=window.scrollY,i=!1,o=0,r=!1;function _(){let _=window.scrollY,s=_<=0;if(e&&(s?e.classList.remove("scroll"):e.classList.add("scroll")),t&&(s?t.classList.remove("scroll"):t.classList.add("scroll")),a&&(s?a.classList.remove("scroll"):a.classList.add("scroll")),_>=1200&&t){let l=_-n;l>0?(o=0,r=!1,i||(t.style.top="-20%",i=!0)):l<0&&!r&&(o+=Math.abs(l))>=25&&i&&(t.style.top="0%",i=!1,o=0)}else t&&_<1200&&(t.style.top="",i=!1,o=0,r=!1);n=_}t&&(t.style.transition="top 0.6s ease-out"),document.addEventListener("click",function(e){let a=e.target.closest("[data-link-nav]");a&&t&&(t.style.top="-20%",i=!0,o=0,r=!0)}),window.addEventListener("scroll",_),_()}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){document.querySelectorAll(".navbar_link-wrapper").forEach(e=>{let t=e.querySelector(".navbar_navigation-arrow"),a=e.querySelector(".navbar_navigation-text-wrap");if(!t||!a)return;let n=!1,i=null,o=!1,r=!1,_=window.getComputedStyle(a).paddingRight;function s(){o=!0,r=!1,t.style.bottom="auto",t.style.right="0%",t.style.transform="rotate(0deg)",a.style.paddingRight="34px",setTimeout(()=>{o=!1,r&&(r=!1,l())},800)}function l(){o=!0,t.style.transform="rotate(0deg) translateX(200%)",i=setTimeout(()=>{n||(a.style.paddingRight=_,t.style.bottom="-100%",t.style.right="-35%",t.style.transform="rotate(90deg)"),setTimeout(()=>{o=!1,n&&s()},800),i=null},800)}t.style.position="absolute",t.style.bottom="-100%",t.style.right="-35%",t.style.transform="rotate(90deg)",t.style.transition="bottom 0.8s cubic-bezier(0.22, 1, 0.36, 1), right 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",a.style.transition="padding-right 0.8s cubic-bezier(0.22, 1, 0.36, 1)",e.addEventListener("mouseenter",()=>{if(n=!0,o){r=!1;return}s()}),e.addEventListener("mouseleave",()=>{if(n=!1,o){r=!0;return}l()})})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll("[data-marquee-logo]");if(e.length>0){let t=document.querySelector("#hero");if(t){let a=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?e.forEach(e=>{e.style.animationPlayState="running"}):e.forEach(e=>{e.style.animationPlayState="paused"})})},{rootMargin:"0px",threshold:.1});a.observe(t)}else console.log("❌ \xc9l\xe9ment #hero non trouv\xe9")}else console.log("❌ Aucun \xe9l\xe9ment marquee trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".price_svg-gear-wrap");if(e.length>0){let t=!1,a=document.querySelector("#price");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.style.animationPlayState="running"}),t=!0):(e.forEach(e=>{e.style.animationPlayState="paused"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #price non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun engrenage trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll("[data-marquee-reviews]");if(e.length>0){let t=!1,a=document.querySelector("#reviews");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.style.animationPlayState="running"}),t=!0):(e.forEach(e=>{e.style.animationPlayState="paused"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #reviews non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun marquee de reviews trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){setTimeout(()=>{let e=document.querySelector("#achivement"),t=document.querySelector(".section_achivement");if(e&&t){let a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?gsap.getTweensOf(t.querySelectorAll("*")).forEach(e=>{e.play()}):gsap.getTweensOf(t.querySelectorAll("*")).forEach(e=>{e.pause()})})},{rootMargin:"0px",threshold:.1});a.observe(e)}else console.log("❌ \xc9l\xe9ment #achivement ou .section_achivement non trouv\xe9")},500)}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".badge_radial.is-top-left, .badge_radial.is-bottom-right");e.length>0&&e.forEach(e=>{let t=new IntersectionObserver(t=>{t.forEach(t=>{var a,n;t.isIntersecting?((a=e).classList.remove("pause-animation"),a.offsetHeight):((n=e).style.setProperty("--animation-state","none"),n.querySelector("::before"),n.classList.add("pause-animation"))})},{rootMargin:"50px",threshold:0});t.observe(e)});let t=document.createElement("style");t.textContent=`
    .badge_radial.pause-animation.is-top-left::before {
      animation: none !important;
    }
    .badge_radial.pause-animation.is-bottom-right::before {
      animation: none !important;
    }
  `,document.head.appendChild(t);let a;window.addEventListener("resize",()=>{clearTimeout(a),e.forEach(e=>{e.classList.add("pause-animation")}),a=setTimeout(()=>{e.forEach(e=>{e.classList.remove("pause-animation"),e.offsetHeight})},100)})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".btn_border");if(e.length>0){let t=document.createElement("style");t.textContent=`
      .btn_border.pause-animation::before {
        animation: none !important;
      }
    `,document.head.appendChild(t),e.forEach(e=>{let t=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?(e.classList.remove("pause-animation"),e.offsetHeight):(e.classList.add("pause-animation"),e.offsetHeight,e.classList.remove("pause-animation"),e.offsetHeight)})},{rootMargin:"50px",threshold:0});t.observe(e)})}let a;window.addEventListener("resize",()=>{clearTimeout(a),e.forEach(e=>{e.classList.add("pause-animation")}),a=setTimeout(()=>{e.forEach(e=>{e.classList.remove("pause-animation"),e.offsetHeight})},100)})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".comet-segment-1, .comet-segment-2, .comet-segment-3, .comet-segment-4");if(e.length>0){let t=!1,a=document.querySelector("#cta");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.offsetHeight,e.style.animation=""}),t=!0):(e.forEach(e=>{e.style.animation="none"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #cta non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun segment de com\xe8te trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=!1,t=document.querySelector("footer");if(t){let a=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?function t(){let a=document.querySelectorAll(".footer_comet-1, .footer_comet-2, .footer_comet-3");a.forEach(e=>{e.offsetHeight,e.style.animation=""}),e=!0}():function t(){let a=document.querySelectorAll(".footer_comet-1, .footer_comet-2, .footer_comet-3");a.forEach(e=>{e.style.animation="none"}),e=!1}()})},{rootMargin:"0px"});a.observe(t)}let n;window.addEventListener("resize",()=>{clearTimeout(n);let e=document.querySelectorAll(".footer_comet-1, .footer_comet-2, .footer_comet-3");e.forEach(e=>{e.style.animation="none"}),n=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll('[cursor="conversion-cursor-wrapper"], [cursor="conversion-cursor-rotate"]');if(e.length>0){let t=!1,a=document.querySelector("#process");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.offsetHeight,e.style.animation=""}),t=!0):(e.forEach(e=>{e.style.animation="none"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #process non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun \xe9l\xe9ment de curseur trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll('[navigator^="bg-"], [navigator^="blue-"]'),t=document.querySelectorAll('[navigator="blue-1"] [navigator="arrow"], [navigator="blue-2"] [navigator="arrow"]'),a=[...e,...t];if(a.length>0){let n=!1,i=document.querySelector("#process");if(i){let o=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(a.forEach(e=>{e.offsetHeight,e.style.animation=""}),n=!0):(a.forEach(e=>{e.style.animation="none"}),n=!1)})},{rootMargin:"100px"});o.observe(i)}else console.log("❌ \xc9l\xe9ment #process non trouv\xe9");let r;window.addEventListener("resize",()=>{clearTimeout(r),a.forEach(e=>{e.style.animation="none"}),r=setTimeout(()=>{a.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun \xe9l\xe9ment navigator trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".process_grid-palette-item");if(e.length>0){let t=!1,a=document.querySelector("#process");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.offsetHeight,e.style.animation=""}),t=!0):(e.forEach(e=>{e.style.animation="none"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #process non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun item de palette trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll('[class*="process_skeleton"]');if(e.length>0){let t=!1,a=document.querySelector("#process");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.offsetHeight,e.style.animation=""}),t=!0):(e.forEach(e=>{e.style.animation="none"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #process non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun \xe9l\xe9ment skeleton trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".process_grid-line, .process_grid-block.is-1, .process_grid-block.is-2, .process_grid-block.is-3, .process_grid-block.is-4, .process_grid-block.is-5, .process_grid-block.is-6, .process_grid-block.is-7, .process_grid-block.is-8"),t=document.querySelectorAll(".process_grid-block.is-6 rect"),a=[...e,...t];if(a.length>0){let n=!1,i=document.querySelector("#process");if(i){let o=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(a.forEach(e=>{e.offsetHeight,e.style.animation=""}),n=!0):(a.forEach(e=>{e.style.animation="none"}),n=!1)})},{rootMargin:"100px"});o.observe(i)}else console.log("❌ \xc9l\xe9ment #process non trouv\xe9");let r;window.addEventListener("resize",()=>{clearTimeout(r),a.forEach(e=>{e.style.animation="none"}),r=setTimeout(()=>{a.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun \xe9l\xe9ment de grille process trouv\xe9")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll(".service_comet-light");if(e.length>0){let t=!1,a=document.querySelector("#service");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.offsetHeight,e.style.animation=""}),t=!0):(e.forEach(e=>{e.style.animation="none"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #service non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucune com\xe8te de service trouv\xe9e")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=document.querySelectorAll('[webflow-dash=""], [n8n-dash=""], [n8n-dash="reverse"], .process_bento-path, [compo-dash=""]');if(e.length>0){let t=!1,a=document.querySelector("#service");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{e.offsetHeight,e.style.animation=""}),t=!0):(e.forEach(e=>{e.style.animation="none"}),t=!1)})},{rootMargin:"100px"});n.observe(a)}else console.log("❌ \xc9l\xe9ment #service non trouv\xe9");let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{e.style.animation="none"}),i=setTimeout(()=>{e.forEach(e=>{e.style.animation=""})},100)})}else console.log("❌ Aucun \xe9l\xe9ment dash trouv\xe9 pour #service")}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){gsap.registerPlugin(MotionPathPlugin);let e=[".service_bento-glass-hotjar.is-devis",".service_bento-glass-hotjar.is-leads",".service_bento-glass-hotjar.is-interaction",".service_bento-glass-hotjar.is-visitor",".service_bento-glass-hotjar.is-money",".service_bento-glass-hotjar.is-devis-2",".service_bento-glass-hotjar.is-leads-2",".service_bento-glass-hotjar.is-interaction-2",".service_bento-glass-hotjar.is-visitor-2",".service_bento-glass-hotjar.is-money-2"],t=[".service_bento-glass-hotjar.is-devis.is-2",".service_bento-glass-hotjar.is-leads.is-2",".service_bento-glass-hotjar.is-interaction.is-2",".service_bento-glass-hotjar.is-visitor.is-2",".service_bento-glass-hotjar.is-money.is-2",".service_bento-glass-hotjar.is-devis-2.is-2",".service_bento-glass-hotjar.is-leads-2.is-2",".service_bento-glass-hotjar.is-interaction-2.is-2",".service_bento-glass-hotjar.is-visitor-2.is-2",".service_bento-glass-hotjar.is-money-2.is-2"],a=[],n=!1;function i(){a.forEach(e=>e.kill()),a=[];let i=window.innerWidth;i>=992?e.forEach((t,n)=>{let i=document.querySelectorAll(t);i.forEach(t=>{let i=n/e.length,o=gsap.to(t,{motionPath:{path:"#bento-path",align:"#bento-path",alignOrigin:[.5,.5],autoRotate:!1,start:i,end:i-1},rotation:0,duration:20,ease:"linear",repeat:-1,repeatDelay:0});a.push(o)})}):t.forEach((e,n)=>{let i=document.querySelectorAll(e);i.forEach(e=>{let i=n/t.length,o=gsap.to(e,{motionPath:{path:"#bento-path-2",align:"#bento-path-2",alignOrigin:[.5,.5],autoRotate:!1,start:i,end:i-1},rotation:0,duration:20,ease:"linear",repeat:-1,repeatDelay:0});a.push(o)})}),n=!0}let o=document.querySelector("#service");if(o){let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?n||(0===a.length?i():(a.forEach(e=>e.resume()),n=!0)):n&&(a.forEach(e=>e.pause()),n=!1)})},{rootMargin:"0px"});r.observe(o)}window.addEventListener("resize",()=>{n&&i()})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){gsap.registerPlugin(MotionPathPlugin);let e=["#conversion-path-1","#conversion-path-2","#conversion-path-3","#conversion-path-4"],t=0,a,n,i=!1,o=["gradient-fill-conversion","dashed-conversion-1","dashed-conversion-2","dashed-conversion-3","dashed-conversion-4","dashed-conversion-5","dashed-conversion-6","dashed-conversion-7","line-conversion-1","line-conversion-2","line-conversion-3","line-conversion-4","line-conversion-5","line-conversion-6","line-conversion-7"];function r(o){gsap.killTweensOf("#conversion-cursor");let _=e[o];a=gsap.to("#conversion-cursor",{motionPath:{path:_,align:_,alignOrigin:[.5,.5],autoRotate:!0},duration:4.625,ease:"cubic-bezier(0.6, 0.04, 0.98, 0.34)",onComplete(){i&&(n=setTimeout(()=>{r(t=(t+1)%e.length)},1500))}})}let _=document.querySelector("#service");if(_){let s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?i||(i=!0,o.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none",t.offsetHeight,t.style.animation="")}),r(t=0)):i&&(i=!1,a&&a.kill(),clearTimeout(n),o.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none")}),gsap.set("#conversion-cursor",{clearProps:"all"}),t=0)})},{rootMargin:"100px"});s.observe(_)}else console.log("❌ \xc9l\xe9ment #service non trouv\xe9 (curseur conversion)");let l;window.addEventListener("resize",()=>{clearTimeout(l),console.log("\uD83D\uDD04 Resize d\xe9tect\xe9 - Pause animations curseur"),o.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none")}),l=setTimeout(()=>{console.log("▶️ Resize - Restart animations curseur"),o.forEach(e=>{let t=document.getElementById(e);t&&(t.offsetHeight,t.style.animation="")}),a&&a.kill(),clearTimeout(n),t=0,i&&r(t)},100)})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=["gradient-fill-conversion","dashed-stroke-conversion","dashed-conversion-1","dashed-conversion-2","dashed-conversion-3","dashed-conversion-4","dashed-conversion-5","dashed-conversion-6","dashed-conversion-7","line-conversion-1","line-conversion-2","line-conversion-3","line-conversion-4","line-conversion-5","line-conversion-6","line-conversion-7"],t=!1,a=document.querySelector("#service");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{let t=document.getElementById(e);t&&(t.offsetHeight,t.style.animation="")}),t=!0):(e.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none")}),t=!1)})},{rootMargin:"0px"});n.observe(a)}let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none")}),i=setTimeout(()=>{e.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="")})},100)})}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){function e(){if(window.innerWidth<=991){let e=document.createElement("style");e.id="tablet-animations",e.textContent=`
      :root {
        --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      /* Animation du remplissage principal */
      #gradient-fill_tablet {
        animation: gradientFill_tablet 10s var(--ease) infinite;
      }

      /* Animations des traits pointill\xe9s */
      #dashed-path-1_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment1_tablet 10s var(--ease) infinite;
      }

      #dashed-corner-1_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedCorner1_tablet 10s var(--ease) infinite;
      }

      #dashed-path-2_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment2_tablet 10s var(--ease) infinite;
      }

      #dashed-corner-2_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedCorner2_tablet 10s var(--ease) infinite;
      }

      #dashed-path-3_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment3_tablet 10s var(--ease) infinite;
      }

      #dashed-corner-3_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedCorner3_tablet 10s var(--ease) infinite;
      }

      #dashed-path-4_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment4_tablet 10s var(--ease) infinite;
      }

      #dashed-corner-4_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedCorner4_tablet 10s var(--ease) infinite;
      }

      #dashed-path-5_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment5_tablet 10s var(--ease) infinite;
      }

      #dashed-corner-5_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedCorner5_tablet 10s var(--ease) infinite;
      }

      #dashed-path-6_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment6_tablet 10s var(--ease) infinite;
      }

      #dashed-corner-6_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedCorner6_tablet 10s var(--ease) infinite;
      }

      #dashed-path-7_tablet {
        animation: dashMove_tablet 2s linear infinite, dashedSegment7_tablet 10s var(--ease) infinite;
      }

      /* Animations des traits pleins */
      #line-path-1_tablet {
        animation: lineSegment1_tablet 10s var(--ease) infinite;
      }

      #line-corner-1_tablet {
        animation: lineCorner1_tablet 10s var(--ease) infinite;
      }

      #line-path-2_tablet {
        animation: lineSegment2_tablet 10s var(--ease) infinite;
      }

      #line-corner-2_tablet {
        animation: lineCorner2_tablet 10s var(--ease) infinite;
      }

      #line-path-3_tablet {
        animation: lineSegment3_tablet 10s var(--ease) infinite;
      }

      #line-corner-3_tablet {
        animation: lineCorner3_tablet 10s var(--ease) infinite;
      }

      #line-path-4_tablet {
        animation: lineSegment4_tablet 10s var(--ease) infinite;
      }

      #line-corner-4_tablet {
        animation: lineCorner4_tablet 10s var(--ease) infinite;
      }

      #line-path-5_tablet {
        animation: lineSegment5_tablet 10s var(--ease) infinite;
      }

      #line-corner-5_tablet {
        animation: lineCorner5_tablet 10s var(--ease) infinite;
      }

      #line-path-6_tablet {
        animation: lineSegment6_tablet 10s var(--ease) infinite;
      }

      #line-corner-6_tablet {
        animation: lineCorner6_tablet 10s var(--ease) infinite;
      }

      #line-path-7_tablet {
        animation: lineSegment7_tablet 10s var(--ease) infinite;
      }

      #line-corner-7_tablet {
        animation: lineCorner7_tablet 10s var(--ease) infinite;
      }

      #line-path-8_tablet {
        animation: lineSegment8_tablet 10s var(--ease) infinite;
      }

      #line-corner-8_tablet {
        animation: lineCorner8_tablet 10s var(--ease) infinite;
      }

      #line-path-9_tablet {
        animation: lineSegment9_tablet 10s var(--ease) infinite;
      }

      @keyframes dashMove_tablet {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 10; }
      }

      @keyframes gradientFill_tablet {
        0%, 12.5%, 100% {
          d: path("M119.072 271L107.814 251.5C106.274 248.833 102.425 248.833 100.885 251.5L56.7183 328C55.1787 330.666 51.3295 330.666 49.79 327.999L23.8132 282.999C22.2739 280.333 18.4253 280.332 16.8852 282.998L1 310.5C1 310.5 1 310.5 1 310.5V350H316.526V217L285.349 271C283.809 273.667 279.96 273.667 278.421 271L263.987 246C262.447 243.333 258.598 243.333 257.059 246L232.233 289C230.693 291.667 226.844 291.667 225.304 289L173.92 200C172.381 197.333 168.532 197.333 166.992 200L126 271C124.461 273.667 120.612 273.667 119.072 271Z");
        }
        25%, 37.5% {
          d: path("M121.255 258.218L105.547 316.088C104.913 318.424 102.366 319.665 100.135 318.727L56.0868 300.192C54.4163 299.489 52.482 299.997 51.3725 301.43L20.35 341.5C19.5 343 18.0 344 16.5 344L1 360.5C1 360.5 1 360.5 1 360.5V400H316.526V145.5L286.879 115.9743C284.679 113.7827 280.929 114.8258 280.176 117.8389L261.941 190.823C261.259 193.553 258.044 194.744 255.748 193.117L232.388 176.565C230.453 175.193 227.755 175.798 226.591 177.865L172.326 274.181C171.279 276.04 168.957 276.749 167.05 275.794L126.907 255.689C124.647 254.557 121.917 255.779 121.255 258.218Z");
        }
        50%, 62.5% {
          d: path("M118.868 299.562L106.488 284.587C105.251 283.091 103.119 282.699 101.431 283.657L56.2515 309.299C54.5288 310.276 52.35 309.846 51.1284 308.287L25.6381 275.75C23.5431 273.076 19.2788 274.066 18.5759 277.389L1 360.5C1 360.5 1 360.5 1 360.5V400H316.526V237L285.94 172.104C284.429 168.899 279.806 169.095 278.572 172.417L260.781 220.304C260.61 220.764 260.356 221.189 260.031 221.557L231 254.471C229.711 255.932 227.556 256.252 225.899 255.228L173.962 223.164C172.043 221.979 169.524 222.615 168.396 224.568L125.415 299.014C124.02 301.429 120.645 301.712 118.868 299.562Z");
        }
        75%, 87.5% {
          d: path("M121.126 226.442L105.35 309.719C104.851 312.351 101.956 313.759 99.5782 312.525L56.5956 290.233C54.7182 289.259 52.4072 289.915 51.3214 291.73L20.6873 342.936C20.4639 343.31 20.1811 343.644 19.8501 343.926L1 360C1 360 1 360 1 360V400H316.526V140L285.304 203.54C283.871 206.457 279.742 206.538 278.196 203.679L263.974 177.381C262.475 174.611 258.511 174.579 256.968 177.324L229.231 226.677C228.927 227.218 228.501 227.681 227.987 228.029L173.194 265.145C171.605 266.222 169.476 266.018 168.12 264.66L127.887 224.36C125.616 222.085 121.725 223.283 121.126 226.442Z");
        }
      }

      @keyframes dashedSegment1_tablet {
        0%, 12.5%, 100% { d: path("M316.253 217.5L333.242 190.738") }
        25%, 37.5% { d: path("M316.53 145.5L334.524 163.011") }
        50%, 62.5% { d: path("M316.532 237L334.809 174.058") }
        75%, 87.5% { d: path("M316.528 140.5L334.861 201.339") }
      }

      @keyframes dashedCorner1_tablet {
        0%, 12.5%, 100% { d: path("M333.242 190.738C334.8 188.283 338.373 188.258 339.965 190.69") }
        25%, 37.5% { d: path("M334.524 163.011C335.747 164.201 337.591 164.484 339.115 163.716") }
        50%, 62.5% { d: path("M334.809 174.058C335.627 171.241 339.098 170.233 341.297 172.174") }
        75%, 87.5% { d: path("M334.861 201.339C335.677 204.05 338.974 205.077 341.187 203.311") }
      }

      @keyframes dashedSegment2_tablet {
        0%, 12.5%, 100% { d: path("M339.965 190.69L368.695 234.563") }
        25%, 37.5% { d: path("M339.115 163.716L368.622 148.8332") }
        50%, 62.5% { d: path("M341.297 172.174L369.08 196.695") }
        75%, 87.5% { d: path("M341.187 203.311L370.249 180.103") }
      }

      @keyframes dashedCorner2_tablet {
        0%, 12.5%, 100% { d: path("M368.695 234.563C370.328 237.056 374.016 236.952 375.506 234.371") }
        25%, 37.5% { d: path("M368.622 148.8332C370.619 147.826 373.054 148.6521 374.026 150.667") }
        50%, 62.5% { d: path("M369.08 196.695C370.804 198.217 373.454 197.975 374.874 196.165") }
        75%, 87.5% { d: path("M370.249 180.103C371.472 179.126 373.152 178.953 374.549 179.658") }
      }

      @keyframes dashedSegment3_tablet {
        0%, 12.5%, 100% { d: path("M375.506 234.371L420.176 157") }
        25%, 37.5% { d: path("M374.026 150.667L420.029 246.014") }
        50%, 62.5% { d: path("M374.874 196.165L420.197 138.3909") }
        75%, 87.5% { d: path("M374.549 179.658L402.459 193.759") }
      }

      @keyframes dashedCorner3_tablet {
        0%, 12.5%, 100% { d: path("M420.176 157C421.716 154.333 425.565 154.333 427.104 157") }
        25%, 37.5% { d: path("M420.029 246.014C421.486 249.033 425.788 249.028 427.238 246.006") }
        50%, 62.5% { d: path("M420.197 138.3909C421.888 136.2358 425.196 136.3792 426.693 138.6727") }
        75%, 87.5% { d: path("M402.459 193.759C404.738 194.911 407.497 193.661 408.135 191.189") }
      }

      @keyframes dashedSegment4_tablet {
        0%, 12.5%, 100% { d: path("M427.104 157L440.095 179.5") }
        25%, 37.5% { d: path("M427.238 246.006L443.262 212.621") }
        50%, 62.5% { d: path("M426.693 138.6727L437.759 155.617") }
        75%, 87.5% { d: path("M408.135 191.189L426.459 120.225") }
      }

      @keyframes dashedCorner4_tablet {
        0%, 12.5%, 100% { d: path("M440.095 179.5C441.634 182.167 445.483 182.167 447.023 179.5") }
        25%, 37.5% { d: path("M443.262 212.621C443.459 212.21 443.585 211.768 443.633 211.315") }
        50%, 62.5% { d: path("M437.759 155.617C439.776 158.706 444.544 157.65 445.068 153.998") }
        75%, 87.5% { d: path("M426.459 120.225C427.41 116.544 432.476 116.1402 433.998 119.6241") }
      }

      @keyframes dashedSegment5_tablet {
        0%, 12.5%, 100% { d: path("M447.023 179.5L450.789 172.977") }
        25%, 37.5% { d: path("M443.633 211.315L452.451 128.8582") }
        50%, 62.5% { d: path("M445.068 153.998L452.415 102.8177") }
        75%, 87.5% { d: path("M433.998 119.6241L451.529 159.764") }
      }

      @keyframes dashedCorner5_tablet {
        0%, 12.5%, 100% { d: path("M450.789 172.977C452.329 170.31 456.178 170.31 457.717 172.977") }
        25%, 37.5% { d: path("M452.451 128.8582C452.9 124.6607 458.702 123.9308 460.177 127.8863") }
        50%, 62.5% { d: path("M452.415 102.8177C452.974 98.9231 458.229 98.091 459.964 101.6223") }
        75%, 87.5% { d: path("M451.529 159.764C452.751 162.56 456.528 163.014 458.377 160.587") }
      }

      @keyframes dashedSegment6_tablet {
        0%, 12.5%, 100% { d: path("M457.717 172.977L477.072 206.5") }
        25%, 37.5% { d: path("M460.177 127.8863L477.277 173.757") }
        50%, 62.5% { d: path("M459.964 101.6223L477.329 136.9692") }
        75%, 87.5% { d: path("M458.377 160.587L477.804 135.0859") }
      }

      @keyframes dashedCorner6_tablet {
        0%, 12.5%, 100% { d: path("M477.072 206.5C478.611 209.167 482.46 209.167 484 206.5") }
        25%, 37.5% { d: path("M477.277 173.757C478.506 177.052 483.082 177.272 484.622 174.11") }
        50%, 62.5% { d: path("M477.329 136.9692C478.72 139.8003 482.687 139.9829 484.332 137.2916") }
        75%, 87.5% { d: path("M477.804 135.0859C479.257 133.1785 482.05 132.9694 483.771 134.6391") }
      }

      @keyframes dashedSegment7_tablet {
        0%, 12.5%, 100% { d: path("M484 206.5L506.818 166.977") }
        25%, 37.5% { d: path("M484.622 174.11L506.82 128.5185") }
        50%, 62.5% { d: path("M484.332 137.2916L506.82 100.5") }
        75%, 87.5% { d: path("M483.771 134.6391L506.818 157") }
      }

      @keyframes lineSegment1_tablet {
        0%, 12.5%, 100% { d: path("M316.526 217L285.349 271") }
        25%, 37.5% { d: path("M316.53 145.5L286.879 115.9737") }
        50%, 62.5% { d: path("M316.53 237L285.94 172.104") }
        75%, 87.5% { d: path("M316.53 140L285.305 203.541") }
      }

      @keyframes lineCorner1_tablet {
        0%, 12.5%, 100% { d: path("M285.349 271C283.809 273.667 279.96 273.667 278.421 271") }
        25%, 37.5% { d: path("M286.879 115.9737C284.679 113.7823 280.929 114.8254 280.176 117.8385") }
        50%, 62.5% { d: path("M285.94 172.104C284.43 168.899 279.806 169.095 278.572 172.416") }
        75%, 87.5% { d: path("M285.305 203.541C283.871 206.458 279.742 206.538 278.196 203.68") }
      }

      @keyframes lineSegment2_tablet {
        0%, 12.5%, 100% { d: path("M278.421 271L263.987 246") }
        25%, 37.5% { d: path("M280.176 117.8385L261.941 190.822") }
        50%, 62.5% { d: path("M278.572 172.416L260.781 220.304") }
        75%, 87.5% { d: path("M278.196 203.68L263.974 177.381") }
      }

      @keyframes lineCorner2_tablet {
        0%, 12.5%, 100% { d: path("M263.987 246C262.447 243.333 258.598 243.333 257.059 246") }
        25%, 37.5% { d: path("M261.941 190.822C261.259 193.553 258.045 194.744 255.748 193.117") }
        50%, 62.5% { d: path("M260.781 220.304C260.611 220.764 260.356 221.189 260.032 221.557") }
        75%, 87.5% { d: path("M263.974 177.381C262.476 174.611 258.512 174.579 256.969 177.325") }
      }

      @keyframes lineSegment3_tablet {
        0%, 12.5%, 100% { d: path("M257.059 246L232.233 289") }
        25%, 37.5% { d: path("M255.748 193.117L232.39 176.565") }
        50%, 62.5% { d: path("M260.032 221.557L231.001 254.47") }
        75%, 87.5% { d: path("M256.969 177.325L229.232 226.677") }
      }

      @keyframes lineCorner3_tablet {
        0%, 12.5%, 100% { d: path("M232.233 289C230.693 291.667 226.844 291.667 225.304 289") }
        25%, 37.5% { d: path("M232.39 176.565C230.454 175.193 227.757 175.798 226.592 177.865") }
        50%, 62.5% { d: path("M231.001 254.47C229.712 255.932 227.558 256.252 225.9 255.228") }
        75%, 87.5% { d: path("M229.232 226.677C228.928 227.218 228.502 227.681 227.989 228.029") }
      }

      @keyframes lineSegment4_tablet {
        0%, 12.5%, 100% { d: path("M225.304 289L173.92 200") }
        25%, 37.5% { d: path("M226.592 177.865L172.326 274.181") }
        50%, 62.5% { d: path("M225.9 255.228L173.962 223.164") }
        75%, 87.5% { d: path("M227.989 228.029L173.194 265.146") }
      }

      @keyframes lineCorner4_tablet {
        0%, 12.5%, 100% { d: path("M173.92 200C172.381 197.333 168.532 197.333 166.992 200") }
        25%, 37.5% { d: path("M172.326 274.181C171.279 276.04 168.957 276.749 167.05 275.794") }
        50%, 62.5% { d: path("M173.962 223.164C172.043 221.979 169.524 222.614 168.396 224.568") }
        75%, 87.5% { d: path("M173.194 265.146C171.605 266.222 169.476 266.018 168.12 264.66") }
      }

      @keyframes lineSegment5_tablet {
        0%, 12.5%, 100% { d: path("M166.992 200L126 271") }
        25%, 37.5% { d: path("M167.05 275.794L126.907 255.689") }
        50%, 62.5% { d: path("M168.396 224.568L125.415 299.014") }
        75%, 87.5% { d: path("M168.12 264.66L127.887 224.36") }
      }

      @keyframes lineCorner5_tablet {
        0%, 12.5%, 100% { d: path("M126 271C124.461 273.667 120.612 273.667 119.072 271") }
        25%, 37.5% { d: path("M126.907 255.689C124.647 254.557 121.918 255.779 121.256 258.218") }
        50%, 62.5% { d: path("M125.415 299.014C124.02 301.429 120.645 301.712 118.868 299.562") }
        75%, 87.5% { d: path("M127.887 224.36C125.616 222.085 121.725 223.283 121.126 226.442") }
      }

      @keyframes lineSegment6_tablet {
        0%, 12.5%, 100% { d: path("M119.072 271L107.814 251.5") }
        25%, 37.5% { d: path("M121.256 258.218L105.547 316.088") }
        50%, 62.5% { d: path("M118.868 299.562L106.488 284.587") }
        75%, 87.5% { d: path("M121.126 226.442L105.35 309.719") }
      }

      @keyframes lineCorner6_tablet {
        0%, 12.5%, 100% { d: path("M107.814 251.5C106.274 248.833 102.425 248.833 100.886 251.5") }
        25%, 37.5% { d: path("M105.547 316.088C104.913 318.424 102.366 319.666 100.136 318.727") }
        50%, 62.5% { d: path("M106.488 284.587C105.251 283.091 103.119 282.698 101.431 283.657") }
        75%, 87.5% { d: path("M105.35 309.719C104.851 312.351 101.957 313.759 99.5784 312.525") }
      }

      @keyframes lineSegment7_tablet {
        0%, 12.5%, 100% { d: path("M100.886 251.5L56.7182 328") }
        25%, 37.5% { d: path("M100.136 318.727L56.0867 300.192") }
        50%, 62.5% { d: path("M101.431 283.657L56.2514 309.299") }
        75%, 87.5% { d: path("M99.5784 312.525L56.5955 290.233") }
      }

      @keyframes lineCorner7_tablet {
        0%, 12.5%, 100% { d: path("M56.7182 328C55.1786 330.667 51.3296 330.667 49.79 328") }
        25%, 37.5% { d: path("M56.0867 300.192C54.4163 299.489 52.4821 299.997 51.3726 301.43") }
        50%, 62.5% { d: path("M56.2514 309.299C54.5288 310.276 52.3501 309.846 51.1284 308.287") }
        75%, 87.5% { d: path("M56.5955 290.233C54.7182 289.259 52.4073 289.915 51.3214 291.73") }
      }

      @keyframes lineSegment8_tablet {
        0%, 12.5%, 100% { d: path("M49.79 328L23.8092 283") }
        25%, 37.5% { d: path("M51.3726 301.43L20.3451 341.5") }
        50%, 62.5% { d: path("M51.1284 308.287L25.6339 275.75") }
        75%, 87.5% { d: path("M51.3214 291.73L20.6822 342.937") }
      }

      @keyframes lineCorner8_tablet {
        0%, 12.5%, 100% { d: path("M23.8092 283C22.2696 280.333 18.4206 280.333 16.881 283") }
        25%, 37.5% { d: path("M20.3451 341.5C20.3451 341.5 1.00391 360.5 1.00391 360.5") }
        50%, 62.5% { d: path("M25.6339 275.75C23.5386 273.075 19.2743 274.066 18.5718 277.389") }
        75%, 87.5% { d: path("M20.6822 342.937C20.459 343.31 20.1765 343.644 19.8458 343.926") }
      }

      @keyframes lineSegment9_tablet {
        0%, 12.5%, 100% { d: path("M16.881 283L1.00391 310.5") }
        25%, 37.5% { d: path("M1.00391 360.5") }
        50%, 62.5% { d: path("M18.5718 277.389L1.00391 360.5") }
        75%, 87.5% { d: path("M19.8458 343.926L1.00391 360") }
      }
    `,document.head.appendChild(e)}else{let t=document.getElementById("tablet-animations");t&&t.remove()}}e(),window.addEventListener("resize",e)}),window.Webflow=window.Webflow||[],window.Webflow.push(function(){let e=["dashed-path-1","dashed-corner-1","dashed-path-2","dashed-corner-2","dashed-path-3","dashed-corner-3","dashed-path-4","dashed-corner-4","dashed-path-5","dashed-corner-5","dashed-path-6","dashed-corner-6","dashed-path-7","line-path-9","line-corner-8","line-path-8","line-corner-7","line-path-7","line-corner-6","line-path-6","line-corner-5","line-path-5","line-corner-4","line-path-4","line-corner-3","line-path-3","line-corner-2","line-path-2","line-corner-1","line-path-1","gradient-fill"],t=!1,a=document.querySelector("#service");if(a){let n=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(e.forEach(e=>{let t=document.getElementById(e);t&&(t.offsetHeight,t.style.animation="")}),t=!0):(e.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none")}),t=!1)})},{rootMargin:"0px"});n.observe(a)}let i;window.addEventListener("resize",()=>{clearTimeout(i),e.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="none")}),i=setTimeout(()=>{e.forEach(e=>{let t=document.getElementById(e);t&&(t.style.animation="")})},100)})});