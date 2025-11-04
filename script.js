window.Webflow||=[];window.Webflow.push(()=>{gsap.config({nullTargetWarn:!1});$(".section_achivement").each(function(){const $slider=$(this);const $contentWrapper=$slider.find("[data-content-wrapper]");const $items=$slider.find("[data-image-item='']").hide();const $itemsLogo=$slider.find("[data-image-item='2']").hide();const $itemsButton=$slider.find(".achivement_slider-button-item").hide();const $dots=$slider.find("[data-dot-item]");const $homeSlider=$slider.find("[data-slider]");const $arrow=$slider.find("[data-arrow='']");const $arrowLeftHide=$slider.find("[data-arrow='left-hide']");const $arrowRightHide=$slider.find("[data-arrow='right-hide']");const $dotList=$slider.find("[data-dot-list]");const $headings=$slider.find(".home-slider_heading");const $triggerWrapper=$slider.find("[data-trigger-wrapper]");const $contentTop=$slider.find("[data-content-top='']");const totalSlides=$items.length;let activeIndex=0;let currentX=0,currentY=0,targetX=0,targetY=0;let dotTimeline;$itemsLogo.hide().first().css('display','flex');$itemsButton.hide().first().css('display','flex');$items.first().css("display","flex");$('.achivement_slider-collection-item').removeClass('active').first().addClass('active');gsap.set($dots.eq(0).find(".slider_dot_line"),{scaleX:1});$('.achivement_slider-para-item').removeClass('active').first().addClass('active');$('.achivement_slider-button-item').removeClass('active').first().addClass('active');dotTimeline=gsap.timeline({repeat:-1});$dots.each((index,dot)=>{dotTimeline.addLabel(`step${index}`);dotTimeline.to($(dot).find(".home-slider_dot-line"),{scaleX:1,ease:"none",duration:8,onComplete:()=>goToSlide((index+1)%totalSlides,!0),})});function goToSlide(nextIndex,forwards){if(nextIndex===activeIndex)return;const $prevItem=$items.eq(activeIndex);const $nextItem=$items.eq(nextIndex);const $prevLogo=$itemsLogo.eq(activeIndex);const $nextLogo=$itemsLogo.eq(nextIndex);const $prevButton=$itemsButton.eq(activeIndex);const $nextButton=$itemsButton.eq(nextIndex);gsap.to($dots.find(".slider_dot_line"),{scaleX:0,duration:0.3});gsap.to($dots.eq(nextIndex).find(".slider_dot_line"),{scaleX:1,duration:0.3});$items.hide();$prevItem.css("display","flex");$nextItem.css("display","flex");$itemsLogo.hide();$prevLogo.css("display","flex");$nextLogo.css("display","flex");$itemsButton.hide();$prevButton.css("display","flex");$nextButton.css("display","flex");const $firstList=$slider.find('.achivement_slider-collection-list').eq(0);$firstList.find('.achivement_slider-collection-item').removeClass('active');const $activeItem=$firstList.find('.achivement_slider-collection-item').eq(nextIndex).addClass('active');const $activeTitle=$activeItem.find('.achivement_slider-heading');if($activeTitle.length){const text=$activeTitle.text();$activeTitle.html(text.split('').map(char=>`<span class="char">${char}</span>`).join(''));gsap.fromTo($activeTitle.find('.char'),{y:60,opacity:0},{y:0,opacity:1,duration:0.7,stagger:{amount:0.4},ease:"power2.out"})}
const $secondList=$slider.find('.achivement_slider-collection-list').eq(1);$secondList.find('.achivement_slider-para-item').removeClass('active');const $activeParaItem=$secondList.find('.achivement_slider-para-item').eq(nextIndex).addClass('active');const $activePara=$activeParaItem.find('.achivement_slider-para');if($activePara.length){const paraText=$activePara.text();$activePara.html(paraText.split('').map(char=>`<span class="char">${char}</span>`).join(''));gsap.fromTo($activePara.find('.char'),{y:60,opacity:0},{y:0,opacity:1,duration:0.7,stagger:{amount:0.4},ease:"power2.out",delay:0.3})}
$('.achivement_slider-button-item').removeClass('active');$('.achivement_slider-button-item').eq(nextIndex).addClass('active');const clipPathFrom=forwards?{next:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",prev:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",}:{next:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",prev:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",};const clipPathTo=forwards?{next:"polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)",prev:"polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)",}:{next:"polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)",prev:"polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)",};const tl=gsap.timeline({defaults:{duration:1,ease:"power2.inOut"}});$nextButton.css("display","flex");$prevButton.css("display","flex");gsap.set($nextButton,{opacity:0,x:forwards?"-100%":"100%",y:0,clearProps:"transform,translate,rotate,filter,scale"});gsap.set($prevButton,{opacity:1,x:0,y:0,clearProps:"transform,translate,rotate,filter,scale"});tl.fromTo($nextItem,{clipPath:clipPathFrom.next},{clipPath:clipPathTo.next});tl.fromTo($prevItem,{clipPath:clipPathFrom.prev},{clipPath:clipPathTo.prev},"<");tl.fromTo($nextLogo,{clipPath:clipPathFrom.next},{clipPath:clipPathTo.next},"<");tl.fromTo($prevLogo,{clipPath:clipPathFrom.prev},{clipPath:clipPathTo.prev},"<");tl.fromTo($nextButton,{opacity:0,x:forwards?"-50%":"50%"},{opacity:1,x:0,duration:1,y:"0%"},"<");tl.to($prevButton,{opacity:0,x:forwards?"50%":"-50%",y:"0%",duration:1},"<");const titleFrom=forwards?100:-100;const titleDelay=forwards?"<50%":"<";tl.fromTo($nextItem.find(".home-slider_title .char"),{yPercent:titleFrom},{yPercent:0,duration:0.5,stagger:{amount:0.5}},titleDelay);activeIndex=nextIndex;dotTimeline.seek(`step${nextIndex}`)}
const isDesktop=()=>window.innerWidth>=992;const isCursorOver=(e,$element)=>{const rect=$element[0].getBoundingClientRect();return e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom};$contentWrapper.on("click",function(event){if($(event.target).closest(".button, .navbar_menu-wrap, [data-dot-item]").length)
return;const rect=this.getBoundingClientRect();const isLeftSide=event.clientX-rect.left<rect.width/2;goToSlide((activeIndex+(isLeftSide?-1:1)+totalSlides)%totalSlides,!isLeftSide)});$dots.on("click",function(){const dotIndex=$(this).index();goToSlide(dotIndex,dotIndex>activeIndex)});let isOverInteractiveElement=!1;let isInsideCard=!0;function updateArrowPosition(){if(!isDesktop()){return}
currentX+=(targetX-currentX)*0.1;currentY+=(targetY-currentY)*0.1;const rect=$homeSlider[0].getBoundingClientRect();const isLeftSide=currentX<rect.width/2;if(isOverInteractiveElement){requestAnimationFrame(updateArrowPosition);return}
if(!isInsideCard){requestAnimationFrame(updateArrowPosition);return}
if(isLeftSide){const arrowWidth=$arrow.width();$arrow.css({left:`${currentX - arrowWidth}px`,top:`${currentY}px`,transform:`translate(0, -50%) rotate(0deg)`,});gsap.to($arrowLeftHide,{opacity:0,duration:0.3});gsap.to($arrowRightHide,{opacity:1,duration:0.3})}else{const arrowWidth=$arrow.width();$arrow.css({left:`${currentX + arrowWidth}px`,top:`${currentY}px`,transform:`translate(-100%, -50%) rotate(180deg)`,});gsap.to($arrowRightHide,{opacity:0,duration:0.3});gsap.to($arrowLeftHide,{opacity:1,duration:0.3})}
requestAnimationFrame(updateArrowPosition)}
$homeSlider.on("mousemove",function(e){if(!isDesktop())return;const rect=$homeSlider[0].getBoundingClientRect();targetX=e.clientX-rect.left;targetY=e.clientY-rect.top;const isOverDotList=isCursorOver(e,$dotList);const isOverHeadings=$headings.toArray().some((heading)=>isCursorOver(e,$(heading)));const isOverTriggerWrapper=$triggerWrapper.toArray().some((trigger)=>isCursorOver(e,$(trigger)));const isOverContentTop=isCursorOver(e,$contentTop);isOverInteractiveElement=isOverDotList||isOverHeadings||isOverTriggerWrapper||isOverContentTop;if(isOverInteractiveElement){gsap.to($arrow,{opacity:0,duration:0.3,ease:"power2.out"})}else{gsap.to($arrow,{opacity:1,duration:0.3,ease:"power2.out"})}});$homeSlider.on("mouseleave",()=>{if(!isDesktop())return;isInsideCard=!1;gsap.to($arrow,{opacity:0,duration:0.3,ease:"power2.out"});gsap.to($arrowLeftHide,{opacity:1,duration:0.3,ease:"power2.out"});gsap.to($arrowRightHide,{opacity:1,duration:0.3,ease:"power2.out"})});$homeSlider.on("mouseenter",function(e){if(!isDesktop())return;isInsideCard=!0;const rect=$homeSlider[0].getBoundingClientRect();currentX=targetX=e.clientX-rect.left;currentY=targetY=e.clientY-rect.top;gsap.to($arrow,{opacity:1,duration:0.3,ease:"power2.out"})});$headings.on("mouseenter",()=>{gsap.to($arrow,{opacity:0,duration:0.3,ease:"power2.out"})});$headings.on("mouseleave",()=>{gsap.to($arrow,{opacity:1,duration:0.3,ease:"power2.out"})});$(window).on("resize",()=>{});updateArrowPosition()})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){function initializeGSAPAnimations(){if(window.innerWidth<=991)return;const wrappers=document.querySelectorAll('[data-trigger-wrapper=""]');wrappers.forEach((wrapper)=>{wrapper._animationRunning=!1;wrapper._isHovered=!1;const relTextElements=wrapper.querySelectorAll('[data-text-state="rel"]');const absTextElements=wrapper.querySelectorAll('[data-text-state="abs"]');const relIcons=wrapper.querySelectorAll('[data-icon-state="rel"]');const absIcons=wrapper.querySelectorAll('[data-icon-state="abs"]');relTextElements.forEach(el=>gsap.set(el,{x:0}));relIcons.forEach(el=>gsap.set(el,{x:0,rotation:0}));absTextElements.forEach(el=>gsap.set(el,{x:"-120%"}));absIcons.forEach(el=>gsap.set(el,{x:"-120%",rotation:45}));wrapper.addEventListener("mouseenter",()=>{console.log("hey00");wrapper._isHovered=!0;if(wrapper._animationRunning)return;wrapper._animationRunning=!0;const tl=gsap.timeline({onComplete:()=>{wrapper._animationRunning=!1;if(!wrapper._isHovered){wrapper._animationRunning=!0;const tlOut=gsap.timeline({onComplete:()=>{wrapper._animationRunning=!1}});tlOut.to([...absTextElements,...relTextElements,...relIcons,...absIcons],{x:(i,target)=>{if([...relIcons].includes(target))return 0;if([...absIcons].includes(target))return"-120%";if([...relTextElements].includes(target))return 0;if([...absTextElements].includes(target))return"-120%"},duration:1,ease:"expo.inOut",stagger:{each:0.04,from:"end"}}).to(relIcons,{rotation:0,duration:0.3,ease:"power2.in"},"-=0.16").to(absIcons,{rotation:45,duration:0.3,ease:"power2.in"},"-=0.16")}}});tl.to(relIcons,{rotation:45,duration:0.3,ease:"power1.out"});tl.to([...absTextElements,...relTextElements,...relIcons,...absIcons],{x:(i,target)=>{if([...relIcons].includes(target))return"120%";if([...absIcons].includes(target))return"0%";if([...relTextElements].includes(target))return"120%";if([...absTextElements].includes(target))return"0%"},duration:1,ease:"expo.out",stagger:{each:0.04,from:"start"}})});wrapper.addEventListener("mouseleave",()=>{wrapper._isHovered=!1;if(wrapper._animationRunning)return;wrapper._animationRunning=!0;const tl=gsap.timeline({onComplete:()=>{wrapper._animationRunning=!1}});tl.to([...absTextElements,...relTextElements,...relIcons,...absIcons],{x:(i,target)=>{if([...relIcons].includes(target))return 0;if([...absIcons].includes(target))return"-120%";if([...relTextElements].includes(target))return 0;if([...absTextElements].includes(target))return"-120%"},duration:1,ease:"expo.inOut",stagger:{each:0.04,from:"end"}}).to(relIcons,{rotation:0,duration:0.3,ease:"power2.in"},"-=0.16").to(absIcons,{rotation:45,duration:0.3,ease:"power2.in"},"-=0.16")})})}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",()=>setTimeout(initializeGSAPAnimations,100))}else{setTimeout(initializeGSAPAnimations,100)}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){document.querySelectorAll('.faq_item-wrapper').forEach(item=>{item.addEventListener('click',function(){const radials=this.querySelectorAll('.faq_radial');radials.forEach(radial=>{if(radial.dataset.animating==="true")return;let count=+(radial.dataset.animCount||0);count++;radial.dataset.animCount=count;radial.dataset.animating="true";if(radial.classList.contains('is-top-left')){if(count%2===1){radial.style.setProperty('--faqAnimLeft','radialLeft 2s linear forwards')}else{radial.style.setProperty('--faqAnimLeft','radialLeftReverse 2s linear forwards')}
radial.addEventListener('animationend',()=>{radial.dataset.animating="false"},{once:!0})}
if(radial.classList.contains('is-bottom-right')){if(count%2===1){radial.style.setProperty('--faqAnimRight','radialRight 2s linear forwards')}else{radial.style.setProperty('--faqAnimRight','radialRightReverse 2s linear forwards')}
radial.addEventListener('animationend',()=>{radial.dataset.animating="false"},{once:!0})}})})})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const items=document.querySelectorAll('.faq_item-wrapper');items.forEach(item=>{const answer=item.querySelector('.faq_answer-wrapper');item.addEventListener('click',()=>{if(item.classList.contains('active')){answer.style.height=answer.scrollHeight+'px';requestAnimationFrame(()=>{answer.style.height='0px'});item.classList.remove('active');answer.addEventListener('transitionend',function handler(){answer.style.removeProperty('height');answer.removeEventListener('transitionend',handler)})}else{answer.style.height='0px';item.classList.add('active');requestAnimationFrame(()=>{answer.style.height=answer.scrollHeight+'px'});answer.addEventListener('transitionend',function handler(){if(item.classList.contains('active')){answer.style.height='auto'}
answer.removeEventListener('transitionend',handler)})}})})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const navbarContainer=document.querySelector(".navbar_container");const navbarComponent=document.querySelector(".navbar_component");const navbarContainerWrapper=document.querySelector(".navbar_container-wrapper");let lastScrollY=window.scrollY;let navbarHidden=!1;let scrollAccumulator=0;let blockNavbarShow=!1;if(navbarComponent){navbarComponent.style.transition="top 0.6s ease-out"}
document.addEventListener("click",function(e){const target=e.target.closest("[data-link-nav]");if(target&&navbarComponent){navbarComponent.style.top="-20%";navbarHidden=!0;scrollAccumulator=0;blockNavbarShow=!0}});function handleScroll(){const currentScrollY=window.scrollY;const isAtTop=currentScrollY<=0;const isAt1200=currentScrollY>=1200;if(navbarContainer){if(isAtTop){navbarContainer.classList.remove("scroll")}else{navbarContainer.classList.add("scroll")}}
if(navbarComponent){if(isAtTop){navbarComponent.classList.remove("scroll")}else{navbarComponent.classList.add("scroll")}}
if(navbarContainerWrapper){if(isAtTop){navbarContainerWrapper.classList.remove("scroll")}else{navbarContainerWrapper.classList.add("scroll")}}
if(isAt1200&&navbarComponent){const scrollDifference=currentScrollY-lastScrollY;if(scrollDifference>0){scrollAccumulator=0;blockNavbarShow=!1;if(!navbarHidden){navbarComponent.style.top="-20%";navbarHidden=!0}}else if(scrollDifference<0&&!blockNavbarShow){scrollAccumulator+=Math.abs(scrollDifference);if(scrollAccumulator>=25&&navbarHidden){navbarComponent.style.top="0%";navbarHidden=!1;scrollAccumulator=0}}}else if(navbarComponent&&currentScrollY<1200){navbarComponent.style.top="";navbarHidden=!1;scrollAccumulator=0;blockNavbarShow=!1}
lastScrollY=currentScrollY}
window.addEventListener("scroll",handleScroll);handleScroll()});window.Webflow=window.Webflow||[];window.Webflow.push(function(){document.querySelectorAll('.navbar_link-wrapper').forEach(link=>{const arrow=link.querySelector('.navbar_navigation-arrow');const text=link.querySelector('.navbar_navigation-text-wrap');if(!arrow||!text)return;let isHovered=!1;let animationTimeout=null;let isAnimating=!1;let pendingLeave=!1;const initialPadding=window.getComputedStyle(text).paddingRight;arrow.style.position='absolute';arrow.style.bottom='-100%';arrow.style.right='-35%';arrow.style.transform='rotate(90deg)';arrow.style.transition='bottom 0.8s cubic-bezier(0.22, 1, 0.36, 1), right 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';text.style.transition='padding-right 0.8s cubic-bezier(0.22, 1, 0.36, 1)';function startEnterAnimation(){isAnimating=!0;pendingLeave=!1;arrow.style.bottom='auto';arrow.style.right='0%';arrow.style.transform='rotate(0deg)';text.style.paddingRight='34px';setTimeout(()=>{isAnimating=!1;if(pendingLeave){pendingLeave=!1;startLeaveAnimation()}},800)}
function startLeaveAnimation(){isAnimating=!0;arrow.style.transform='rotate(0deg) translateX(200%)';animationTimeout=setTimeout(()=>{if(!isHovered){text.style.paddingRight=initialPadding;arrow.style.bottom='-100%';arrow.style.right='-35%';arrow.style.transform='rotate(90deg)'}
setTimeout(()=>{isAnimating=!1;if(isHovered){startEnterAnimation()}},800);animationTimeout=null},800)}
link.addEventListener('mouseenter',()=>{isHovered=!0;if(isAnimating){pendingLeave=!1;return}
startEnterAnimation()});link.addEventListener('mouseleave',()=>{isHovered=!1;if(isAnimating){pendingLeave=!0;return}
startLeaveAnimation()})})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const marqueeElements=document.querySelectorAll('[data-marquee-logo]');if(marqueeElements.length>0){const heroElement=document.querySelector('#hero');if(heroElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){marqueeElements.forEach(element=>{element.style.animationPlayState='running'})}else{marqueeElements.forEach(element=>{element.style.animationPlayState='paused'})}})},{rootMargin:'0px',threshold:0.1});observer.observe(heroElement)}else{console.log('❌ Élément #hero non trouvé')}}else{console.log('❌ Aucun élément marquee trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const gears=document.querySelectorAll('.price_svg-gear-wrap');if(gears.length>0){let isAnimating=!1;function pauseAnimations(){gears.forEach(gear=>{gear.style.animationPlayState='paused'});isAnimating=!1}
function resumeAnimations(){gears.forEach(gear=>{gear.style.animationPlayState='running'});isAnimating=!0}
const priceElement=document.querySelector('#price');if(priceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){resumeAnimations()}else{pauseAnimations()}})},{rootMargin:'100px'});observer.observe(priceElement)}else{console.log('❌ Élément #price non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);gears.forEach(gear=>{gear.style.animation='none'});resizeTimeout=setTimeout(()=>{gears.forEach(gear=>{gear.style.animation=''})},100)})}else{console.log('❌ Aucun engrenage trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const marquees=document.querySelectorAll('[data-marquee-reviews]');if(marquees.length>0){let isAnimating=!1;function pauseAnimations(){marquees.forEach(marquee=>{marquee.style.animationPlayState='paused'});isAnimating=!1}
function resumeAnimations(){marquees.forEach(marquee=>{marquee.style.animationPlayState='running'});isAnimating=!0}
const reviewsElement=document.querySelector('#reviews');if(reviewsElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){resumeAnimations()}else{pauseAnimations()}})},{rootMargin:'100px'});observer.observe(reviewsElement)}else{console.log('❌ Élément #reviews non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);marquees.forEach(marquee=>{marquee.style.animation='none'});resizeTimeout=setTimeout(()=>{marquees.forEach(marquee=>{marquee.style.animation=''})},100)})}else{console.log('❌ Aucun marquee de reviews trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){setTimeout(()=>{const achievementElement=document.querySelector('#achivement');const sliderSection=document.querySelector('.section_achivement');if(achievementElement&&sliderSection){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){gsap.getTweensOf(sliderSection.querySelectorAll('*')).forEach(tween=>{tween.play()})}else{gsap.getTweensOf(sliderSection.querySelectorAll('*')).forEach(tween=>{tween.pause()})}})},{rootMargin:'0px',threshold:0.1});observer.observe(achievementElement)}else{console.log('❌ Élément #achivement ou .section_achivement non trouvé')}},500)});window.Webflow=window.Webflow||[];window.Webflow.push(function(){function resetBadgeAnimation(badge){badge.style.setProperty('--animation-state','none');const pseudoBefore=badge.querySelector('::before');badge.classList.add('pause-animation')}
function startBadgeAnimation(badge){badge.classList.remove('pause-animation');badge.offsetHeight}
const badges=document.querySelectorAll('.badge_radial.is-top-left, .badge_radial.is-bottom-right');if(badges.length>0){badges.forEach(badge=>{const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startBadgeAnimation(badge)}else{resetBadgeAnimation(badge)}})},{rootMargin:'50px',threshold:0});observer.observe(badge)})}else{}
const style=document.createElement('style');style.textContent=`
    .badge_radial.pause-animation.is-top-left::before {
      animation: none !important;
    }
    .badge_radial.pause-animation.is-bottom-right::before {
      animation: none !important;
    }
  `;document.head.appendChild(style);let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);badges.forEach(badge=>{badge.classList.add('pause-animation')});resizeTimeout=setTimeout(()=>{badges.forEach(badge=>{badge.classList.remove('pause-animation');badge.offsetHeight})},100)})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const btnBorders=document.querySelectorAll('.btn_border');if(btnBorders.length>0){const style=document.createElement('style');style.textContent=`
      .btn_border.pause-animation::before {
        animation: none !important;
      }
    `;document.head.appendChild(style);btnBorders.forEach(btn=>{const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){btn.classList.remove('pause-animation');btn.offsetHeight}else{btn.classList.add('pause-animation');btn.offsetHeight;btn.classList.remove('pause-animation');btn.offsetHeight}})},{rootMargin:'50px',threshold:0});observer.observe(btn)})}else{}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);btnBorders.forEach(btn=>{btn.classList.add('pause-animation')});resizeTimeout=setTimeout(()=>{btnBorders.forEach(btn=>{btn.classList.remove('pause-animation');btn.offsetHeight})},100)})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const cometSegments=document.querySelectorAll('.comet-segment-1, .comet-segment-2, .comet-segment-3, .comet-segment-4');if(cometSegments.length>0){let isAnimating=!1;function resetAnimations(){cometSegments.forEach(segment=>{segment.style.animation='none'});isAnimating=!1}
function startAnimations(){cometSegments.forEach(segment=>{segment.offsetHeight;segment.style.animation=''});isAnimating=!0}
const ctaElement=document.querySelector('#cta');if(ctaElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(ctaElement)}else{console.log('❌ Élément #cta non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);cometSegments.forEach(segment=>{segment.style.animation='none'});resizeTimeout=setTimeout(()=>{cometSegments.forEach(segment=>{segment.style.animation=''})},100)})}else{console.log('❌ Aucun segment de comète trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){let isAnimating=!1;function resetAnimations(){const comets=document.querySelectorAll('.footer_comet-1, .footer_comet-2, .footer_comet-3');comets.forEach(comet=>{comet.style.animation='none'});isAnimating=!1}
function startAnimations(){const comets=document.querySelectorAll('.footer_comet-1, .footer_comet-2, .footer_comet-3');comets.forEach(comet=>{comet.offsetHeight;comet.style.animation=''});isAnimating=!0}
const footerElement=document.querySelector('footer');if(footerElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'0px'});observer.observe(footerElement)}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);const comets=document.querySelectorAll('.footer_comet-1, .footer_comet-2, .footer_comet-3');comets.forEach(comet=>{comet.style.animation='none'});resizeTimeout=setTimeout(()=>{comets.forEach(comet=>{comet.style.animation=''})},100)})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const cursorElements=document.querySelectorAll('[cursor="conversion-cursor-wrapper"], [cursor="conversion-cursor-rotate"]');if(cursorElements.length>0){let isAnimating=!1;function resetAnimations(){cursorElements.forEach(element=>{element.style.animation='none'});isAnimating=!1}
function startAnimations(){cursorElements.forEach(element=>{element.offsetHeight;element.style.animation=''});isAnimating=!0}
const processElement=document.querySelector('#process');if(processElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(processElement)}else{console.log('❌ Élément #process non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);cursorElements.forEach(element=>{element.style.animation='none'});resizeTimeout=setTimeout(()=>{cursorElements.forEach(element=>{element.style.animation=''})},100)})}else{console.log('❌ Aucun élément de curseur trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const navigatorElements=document.querySelectorAll('[navigator^="bg-"], [navigator^="blue-"]');const arrowElements=document.querySelectorAll('[navigator="blue-1"] [navigator="arrow"], [navigator="blue-2"] [navigator="arrow"]');const allElements=[...navigatorElements,...arrowElements];if(allElements.length>0){let isAnimating=!1;function resetAnimations(){allElements.forEach(element=>{element.style.animation='none'});isAnimating=!1}
function startAnimations(){allElements.forEach(element=>{element.offsetHeight;element.style.animation=''});isAnimating=!0}
const processElement=document.querySelector('#process');if(processElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(processElement)}else{console.log('❌ Élément #process non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);allElements.forEach(element=>{element.style.animation='none'});resizeTimeout=setTimeout(()=>{allElements.forEach(element=>{element.style.animation=''})},100)})}else{console.log('❌ Aucun élément navigator trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const paletteItems=document.querySelectorAll('.process_grid-palette-item');if(paletteItems.length>0){let isAnimating=!1;function resetAnimations(){paletteItems.forEach(item=>{item.style.animation='none'});isAnimating=!1}
function startAnimations(){paletteItems.forEach(item=>{item.offsetHeight;item.style.animation=''});isAnimating=!0}
const processElement=document.querySelector('#process');if(processElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(processElement)}else{console.log('❌ Élément #process non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);paletteItems.forEach(item=>{item.style.animation='none'});resizeTimeout=setTimeout(()=>{paletteItems.forEach(item=>{item.style.animation=''})},100)})}else{console.log('❌ Aucun item de palette trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const skeletonElements=document.querySelectorAll('[class*="process_skeleton"]');if(skeletonElements.length>0){let isAnimating=!1;function resetAnimations(){skeletonElements.forEach(element=>{element.style.animation='none'});isAnimating=!1}
function startAnimations(){skeletonElements.forEach(element=>{element.offsetHeight;element.style.animation=''});isAnimating=!0}
const processElement=document.querySelector('#process');if(processElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(processElement)}else{console.log('❌ Élément #process non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);skeletonElements.forEach(element=>{element.style.animation='none'});resizeTimeout=setTimeout(()=>{skeletonElements.forEach(element=>{element.style.animation=''})},100)})}else{console.log('❌ Aucun élément skeleton trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const processGridElements=document.querySelectorAll('.process_grid-line, .process_grid-block.is-1, .process_grid-block.is-2, .process_grid-block.is-3, .process_grid-block.is-4, .process_grid-block.is-5, .process_grid-block.is-6, .process_grid-block.is-7, .process_grid-block.is-8');const processGridRects=document.querySelectorAll('.process_grid-block.is-6 rect');const allElements=[...processGridElements,...processGridRects];if(allElements.length>0){let isAnimating=!1;function resetAnimations(){allElements.forEach(element=>{element.style.animation='none'});isAnimating=!1}
function startAnimations(){allElements.forEach(element=>{element.offsetHeight;element.style.animation=''});isAnimating=!0}
const processElement=document.querySelector('#process');if(processElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(processElement)}else{console.log('❌ Élément #process non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);allElements.forEach(element=>{element.style.animation='none'});resizeTimeout=setTimeout(()=>{allElements.forEach(element=>{element.style.animation=''})},100)})}else{console.log('❌ Aucun élément de grille process trouvé')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const serviceComets=document.querySelectorAll('.service_comet-light');if(serviceComets.length>0){let isAnimating=!1;function resetAnimations(){serviceComets.forEach(comet=>{comet.style.animation='none'});isAnimating=!1}
function startAnimations(){serviceComets.forEach(comet=>{comet.offsetHeight;comet.style.animation=''});isAnimating=!0}
const serviceElement=document.querySelector('#service');if(serviceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(serviceElement)}else{console.log('❌ Élément #service non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);serviceComets.forEach(comet=>{comet.style.animation='none'});resizeTimeout=setTimeout(()=>{serviceComets.forEach(comet=>{comet.style.animation=''})},100)})}else{console.log('❌ Aucune comète de service trouvée')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const serviceDashElements=document.querySelectorAll('[webflow-dash=""], [n8n-dash=""], [n8n-dash="reverse"], .process_bento-path, [compo-dash=""]');if(serviceDashElements.length>0){let isAnimating=!1;function resetAnimations(){serviceDashElements.forEach(element=>{element.style.animation='none'});isAnimating=!1}
function startAnimations(){serviceDashElements.forEach(element=>{element.offsetHeight;element.style.animation=''});isAnimating=!0}
const serviceElement=document.querySelector('#service');if(serviceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'100px'});observer.observe(serviceElement)}else{console.log('❌ Élément #service non trouvé')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);serviceDashElements.forEach(element=>{element.style.animation='none'});resizeTimeout=setTimeout(()=>{serviceDashElements.forEach(element=>{element.style.animation=''})},100)})}else{console.log('❌ Aucun élément dash trouvé pour #service')}});window.Webflow=window.Webflow||[];window.Webflow.push(function(){gsap.registerPlugin(MotionPathPlugin);const selectorsGroup1=['.service_bento-glass-hotjar.is-devis','.service_bento-glass-hotjar.is-leads','.service_bento-glass-hotjar.is-interaction','.service_bento-glass-hotjar.is-visitor','.service_bento-glass-hotjar.is-money','.service_bento-glass-hotjar.is-devis-2','.service_bento-glass-hotjar.is-leads-2','.service_bento-glass-hotjar.is-interaction-2','.service_bento-glass-hotjar.is-visitor-2','.service_bento-glass-hotjar.is-money-2'];const selectorsGroup2=['.service_bento-glass-hotjar.is-devis.is-2','.service_bento-glass-hotjar.is-leads.is-2','.service_bento-glass-hotjar.is-interaction.is-2','.service_bento-glass-hotjar.is-visitor.is-2','.service_bento-glass-hotjar.is-money.is-2','.service_bento-glass-hotjar.is-devis-2.is-2','.service_bento-glass-hotjar.is-leads-2.is-2','.service_bento-glass-hotjar.is-interaction-2.is-2','.service_bento-glass-hotjar.is-visitor-2.is-2','.service_bento-glass-hotjar.is-money-2.is-2'];const animDuration=20;let cursorTweens=[];let isAnimating=!1;function createAnimations(){cursorTweens.forEach(tw=>tw.kill());cursorTweens=[];const windowWidth=window.innerWidth;if(windowWidth>=992){selectorsGroup1.forEach((sel,i)=>{const els=document.querySelectorAll(sel);els.forEach(el=>{const startPos=i/selectorsGroup1.length;const tween=gsap.to(el,{motionPath:{path:"#bento-path",align:"#bento-path",alignOrigin:[0.5,0.5],autoRotate:!1,start:startPos,end:startPos-1},rotation:0,duration:animDuration,ease:"linear",repeat:-1,repeatDelay:0});cursorTweens.push(tween)})})}else{selectorsGroup2.forEach((sel,i)=>{const els=document.querySelectorAll(sel);els.forEach(el=>{const startPos=i/selectorsGroup2.length;const tween=gsap.to(el,{motionPath:{path:"#bento-path-2",align:"#bento-path-2",alignOrigin:[0.5,0.5],autoRotate:!1,start:startPos,end:startPos-1},rotation:0,duration:animDuration,ease:"linear",repeat:-1,repeatDelay:0});cursorTweens.push(tween)})})}
isAnimating=!0}
function stopAnimations(){cursorTweens.forEach(tw=>tw.pause());isAnimating=!1}
function resumeAnimations(){cursorTweens.forEach(tw=>tw.resume());isAnimating=!0}
const serviceElement=document.querySelector('#service');if(serviceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){if(!isAnimating){if(cursorTweens.length===0){createAnimations()}else{resumeAnimations()}}}else{if(isAnimating){stopAnimations()}}})},{rootMargin:'0px'});observer.observe(serviceElement)}
window.addEventListener('resize',()=>{if(isAnimating){createAnimations()}})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){gsap.registerPlugin(MotionPathPlugin);const paths=["#conversion-path-1","#conversion-path-2","#conversion-path-3","#conversion-path-4"];const totalCssDuration=24.5;const pathDuration=totalCssDuration/4;const animDuration=4.625;const waitDuration=1.5;let currentIndex=0;let cursorTween;let waitingTimeout;let isAnimating=!1;const animatedElements=['gradient-fill-conversion','dashed-conversion-1','dashed-conversion-2','dashed-conversion-3','dashed-conversion-4','dashed-conversion-5','dashed-conversion-6','dashed-conversion-7','line-conversion-1','line-conversion-2','line-conversion-3','line-conversion-4','line-conversion-5','line-conversion-6','line-conversion-7'];function animateCursorOnPath(index){gsap.killTweensOf("#conversion-cursor");const path=paths[index];cursorTween=gsap.to("#conversion-cursor",{motionPath:{path:path,align:path,alignOrigin:[0.5,0.5],autoRotate:!0},duration:animDuration,ease:"cubic-bezier(0.6, 0.04, 0.98, 0.34)",onComplete:()=>{if(isAnimating){waitingTimeout=setTimeout(()=>{currentIndex=(currentIndex+1)%paths.length;animateCursorOnPath(currentIndex)},waitDuration*1000)}}})}
function startAnim(){if(!isAnimating){isAnimating=!0;animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none';void el.offsetHeight;el.style.animation=''}});currentIndex=0;animateCursorOnPath(currentIndex)}}
function stopAnim(){if(isAnimating){isAnimating=!1;if(cursorTween)cursorTween.kill();clearTimeout(waitingTimeout);animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none'}});gsap.set("#conversion-cursor",{clearProps:"all"});currentIndex=0}}
function restartAnim(){if(cursorTween)cursorTween.kill();clearTimeout(waitingTimeout);currentIndex=0;if(isAnimating){animateCursorOnPath(currentIndex)}}
const serviceElement=document.querySelector('#service');if(serviceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnim()}else{stopAnim()}})},{rootMargin:'100px'});observer.observe(serviceElement)}else{console.log('❌ Élément #service non trouvé (curseur conversion)')}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);console.log('🔄 Resize détecté - Pause animations curseur');animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none'}});resizeTimeout=setTimeout(()=>{console.log('▶️ Resize - Restart animations curseur');animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){void el.offsetHeight;el.style.animation=''}});restartAnim()},100)})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const animatedElements=['gradient-fill-conversion','dashed-stroke-conversion','dashed-conversion-1','dashed-conversion-2','dashed-conversion-3','dashed-conversion-4','dashed-conversion-5','dashed-conversion-6','dashed-conversion-7','line-conversion-1','line-conversion-2','line-conversion-3','line-conversion-4','line-conversion-5','line-conversion-6','line-conversion-7'];let isAnimating=!1;function pauseAnimations(){animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none'}});isAnimating=!1}
function resumeAnimations(){animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.offsetHeight;el.style.animation=''}});isAnimating=!0}
const serviceElement=document.querySelector('#service');if(serviceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){resumeAnimations()}else{pauseAnimations()}})},{rootMargin:'0px'});observer.observe(serviceElement)}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none'}});resizeTimeout=setTimeout(()=>{animatedElements.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation=''}})},100)})});window.Webflow=window.Webflow||[];window.Webflow.push(function(){function applyTabletAnimations(){if(window.innerWidth<=991){const style=document.createElement('style');style.id='tablet-animations';style.textContent=`
      :root {
        --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      /* Animation du remplissage principal */
      #gradient-fill_tablet {
        animation: gradientFill_tablet 10s var(--ease) infinite;
      }

      /* Animations des traits pointillés */
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
    `;document.head.appendChild(style)}else{const existingStyle=document.getElementById('tablet-animations');if(existingStyle){existingStyle.remove()}}}
applyTabletAnimations();window.addEventListener('resize',applyTabletAnimations)});window.Webflow=window.Webflow||[];window.Webflow.push(function(){const animatedElementsHotjar=['dashed-path-1','dashed-corner-1','dashed-path-2','dashed-corner-2','dashed-path-3','dashed-corner-3','dashed-path-4','dashed-corner-4','dashed-path-5','dashed-corner-5','dashed-path-6','dashed-corner-6','dashed-path-7','line-path-9','line-corner-8','line-path-8','line-corner-7','line-path-7','line-corner-6','line-path-6','line-corner-5','line-path-5','line-corner-4','line-path-4','line-corner-3','line-path-3','line-corner-2','line-path-2','line-corner-1','line-path-1','gradient-fill'];let isAnimating=!1;function resetAnimations(){animatedElementsHotjar.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none'}});isAnimating=!1}
function startAnimations(){animatedElementsHotjar.forEach(id=>{const el=document.getElementById(id);if(el){el.offsetHeight;el.style.animation=''}});isAnimating=!0}
const serviceElement=document.querySelector('#service');if(serviceElement){const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){startAnimations()}else{resetAnimations()}})},{rootMargin:'0px'});observer.observe(serviceElement)}
let resizeTimeout;window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);animatedElementsHotjar.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation='none'}});resizeTimeout=setTimeout(()=>{animatedElementsHotjar.forEach(id=>{const el=document.getElementById(id);if(el){el.style.animation=''}})},100)})})
