"use strict";!function(){var e=document.querySelector(".header"),t=e.offsetTop;window.onscroll=function(){window.pageYOffset>=t?e.classList.add("header__sticky"):e.classList.remove("header__sticky")}}(),$(document).ready((function(){$(".intro__burger").click((function(e){$(".intro__burger, .intro__nav").toggleClass("active"),$("body").toggleClass("lock")}))})),$(document).ready((function(){$(".intro__link").click((function(e){$(".intro__burger, .intro__nav").toggleClass("active"),$("body").toggleClass("lock")}))})),$(".menu__link").on("click",(function(){$(".menu__link").removeClass("active"),$(this).addClass("active")})),document.querySelectorAll(".js-scroll").forEach((function(e){e.addEventListener("click",(function(){var e,t,n,o,i,c,r=this.getAttribute("href");e=r,t=1e3,n=document.querySelector(".header").clientHeight,o=document.querySelector(e).getBoundingClientRect().top-n,i=window.pageYOffset,c=null,requestAnimationFrame((function e(n){null===c&&(c=n);var r,l,s,a=n-c,u=(r=a,l=i,s=o,(r/=t/2)<1?s/2*r*r+l:-s/2*(--r*(r-2)-1)+l);window.scrollTo(0,u),a<t&&requestAnimationFrame(e)}))}))}));