(function(){var e={6205:function(e,t,n){"use strict";var s=n(9242),i=n(3396);function r(e,t,n,s,r,a){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var a={name:"app",components:{},data(){return{}}},o=n(89);const c=(0,o.Z)(a,[["render",r]]);var l=c,u=n(2483);const d={class:"home"},p={class:"slide__info"},v=["src"],g=(0,i._)("h1",{class:"carousel__title"},[(0,i.Uk)(" Lorem ipsum dolor sit amet, "),(0,i._)("span",null,"consectetur adipiscing elit")],-1);function f(e,t,r,a,o,c){const l=(0,i.up)("Header"),u=(0,i.up)("Slide"),f=(0,i.up)("Carousel"),_=(0,i.up)("Services"),m=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",d,[(0,i.Wm)(l),(0,i.Wm)(f,{navigation:!1,pagination:!0,startAutoPlay:!0,timeout:4e3,class:"carousel"},{default:(0,i.w5)((({currentSlide:e})=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.carouselSlides,((t,r)=>((0,i.wg)(),(0,i.j4)(u,{key:r},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",p,[(0,i._)("img",{src:n(260)(`./${t}.png`),alt:""},null,8,v),g],512),[[s.F8,e===r+1]])])),_:2},1024)))),128))])),_:1})]),(0,i.Wm)(_),(0,i.Wm)(m)],64)}var _=n.p+"img/logo.0b0709e6.svg";const m={class:"header"},h={class:"header__container"},A=(0,i._)("div",{class:"header__logo"},[(0,i._)("a",{href:"#"},[(0,i._)("img",{src:_,alt:"logo of the site",class:"header__logo-image"})])],-1),b={class:"header__button"};function k(e,t,n,s,r,a){const o=(0,i.up)("Navigation"),c=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("header",m,[(0,i._)("div",h,[A,(0,i.Wm)(o),(0,i._)("div",b,[(0,i.Wm)(c,{onClick:a.clickBtn,disabled:!1},null,8,["onClick"])])])])}var w=n(7139);const x={class:"button"};function S(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("span",null,(0,w.zw)(n.title),1)])}var y={name:"button",props:{title:{type:String,default:"Заказать звонок"},disabled:{type:Boolean,default:!1}},data(){return{}},computed:{},methods:{click(){this.$emit("click")}}};const C=(0,o.Z)(y,[["render",S]]);var D=C;const E={class:"header__links"};function M(e,t,n,s,r,a){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",E,[(0,i.Wm)(o,{class:"header__links-item",to:"/cases"},{default:(0,i.w5)((()=>[(0,i.Uk)("Кейсы")])),_:1}),(0,i.Wm)(o,{class:"header__links-item",to:"/business"},{default:(0,i.w5)((()=>[(0,i.Uk)("Бизнесу")])),_:1}),(0,i.Wm)(o,{class:"header__links-item",to:"/services"},{default:(0,i.w5)((()=>[(0,i.Uk)("Услуги")])),_:1}),(0,i.Wm)(o,{class:"header__links-item",to:"/contacts"},{default:(0,i.w5)((()=>[(0,i.Uk)("Контакты")])),_:1})])}var Z={};const W=(0,o.Z)(Z,[["render",M]]);var U=W,O={components:{Button:D,Navigation:U},data(){return{}},methods:{clickBtn(){alert("Заказать звонок :)")}}};const T=(0,o.Z)(O,[["render",k]]);var j=T;const H={class:"carousel"},B={key:0,class:"navigate"},G={class:"toggle-page left"},P={class:"toggle-page right"},F={key:1,class:"pagination"},V=["onClick"];function I(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i.WI)(e.$slots,"default",{currentSlide:s.currentSlide}),s.navEnabled?((0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("div",G,[(0,i._)("i",{onClick:t[0]||(t[0]=(...e)=>s.prevSlide&&s.prevSlide(...e)),class:"fas fa-chevron-left"})]),(0,i._)("div",P,[(0,i._)("i",{onClick:t[1]||(t[1]=(...e)=>s.nextSlide&&s.nextSlide(...e)),class:"fas fa-chevron-right"})])])):(0,i.kq)("",!0),s.paginationEnabled?((0,i.wg)(),(0,i.iD)("div",F,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.getSlideCount,((e,t)=>((0,i.wg)(),(0,i.iD)("span",{onClick:e=>s.goToSlide(t),key:t,class:(0,w.C_)({active:t+1===s.currentSlide})},null,10,V)))),128))])):(0,i.kq)("",!0)])}var N=n(4870),q={props:["startAutoPlay","timeout","navigation","pagination"],setup(e){const t=(0,N.iH)(1),n=(0,N.iH)(null),s=(0,N.iH)(void 0===e.startAutoPlay||e.startAutoPlay),r=(0,N.iH)(void 0===e.timeout?4e3:e.timeout),a=(0,N.iH)(void 0===e.pagination||e.pagination),o=(0,N.iH)(void 0===e.navigation||e.navigation),c=()=>{t.value!==n.value?t.value+=1:t.value=1},l=()=>{1!==t.value?t.value-=1:t.value=1},u=e=>{t.value=e+1},d=()=>{setInterval((()=>{c()}),r.value)};return s.value&&d(),(0,i.bv)((()=>{n.value=document.querySelectorAll(".slide").length})),{currentSlide:t,nextSlide:c,prevSlide:l,getSlideCount:n,goToSlide:u,navEnabled:o,paginationEnabled:a}}};const J=(0,o.Z)(q,[["render",I]]);var Y=J;const Q={class:"slide"};function R(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",Q,[(0,i.Wm)(s.uT,{name:"slide"},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})])}var z={};const K=(0,o.Z)(z,[["render",R]]);var L=K;const $={class:"services"},X=(0,i._)("div",{class:"services__title"},[(0,i._)("h2",null,"Наши услуги")],-1),ee={class:"services__container"};function te(e,t,n,s,r,a){const o=(0,i.up)("ServiceCard"),c=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("section",$,[X,(0,i._)("div",ee,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.visibleServices,(e=>((0,i.wg)(),(0,i.j4)(o,{key:e.src,service:e},null,8,["service"])))),128))]),r.servicesVisible<r.services.length?((0,i.wg)(),(0,i.j4)(c,{key:0,onClick:t[0]||(t[0]=e=>r.servicesVisible+=r.step),title:"Все услуги",class:"button button__services"})):(0,i.kq)("",!0)])}const ne={class:"card"},se={class:"card__wrapper"},ie={class:"card__image"},re=["src"],ae={class:"card__text"},oe={class:"card__title"};function ce(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",ne,[(0,i._)("div",se,[(0,i._)("div",ie,[(0,i._)("img",{src:n.service.src,alt:"",class:"card__image-img"},null,8,re)]),(0,i._)("div",ae,[(0,i._)("h3",oe,(0,w.zw)(n.service.title),1)])])])}var le={name:"service",props:["service"]};const ue=(0,o.Z)(le,[["render",ce]]);var de=ue,pe={name:"Services",components:{ServiceCard:de,Button:D},data(){return{services:[{src:n(1285),title:"Кадастровые работы в отношении земельных участков"},{src:n(870),title:"Кадастровые работы в отношении земельных участков"},{src:n(8206),title:"Кадастровые работы в отношении земельных участков"},{src:n(3285),title:"Кадастровые работы в отношении земельных участков"},{src:n(1918),title:"Кадастровые работы в отношении земельных участков"},{src:n(7103),title:"Кадастровые работы в отношении земельных участков"},{src:n(1285),title:"Кадастровые работы в отношении земельных участков"},{src:n(870),title:"Кадастровые работы в отношении земельных участков"},{src:n(8206),title:"Кадастровые работы в отношении земельных участков"},{src:n(3285),title:"Кадастровые работы в отношении земельных участков"},{src:n(1918),title:"Кадастровые работы в отношении земельных участков"},{src:n(7103),title:"Кадастровые работы в отношении земельных участков"}],servicesVisible:6,step:6}},methods:{loadMore(){alert("hello")}},computed:{visibleServices(){return this.services.slice(0,this.servicesVisible)}}};const ve=(0,o.Z)(pe,[["render",te]]);var ge=ve,fe=n(8959),_e=n.p+"img/icon4.5076665d.svg",me=n.p+"img/icon6.a583a3c3.svg",he=n.p+"img/icon5.3fd21d43.svg",Ae=n.p+"img/icon7.7ae71198.svg";const be={class:"footer"},ke={class:"footer__container"},we=(0,i._)("img",{class:"footer__logo",src:fe,alt:"footer logo"},null,-1),xe={class:"footer__menu"},Se=(0,i.uE)('<div class="footer__tel"><p class="footer__title">Для связи</p><div class="footer__links tel__links"><a href="#"><span><img src="'+_e+'" alt=""></span>7 (926) 126-64-57</a><a href="#"><span><img src="'+me+'" alt=""></span>7 (926) 126-64-57</a><a href="#"><span><img src="'+he+'" alt=""></span>7 (926) 126-64-57</a></div></div>',1),ye={class:"footer__company"},Ce=(0,i._)("p",{class:"footer__title"},"Компания",-1),De={class:"footer__links"},Ee={class:"footer__documents"},Me=(0,i._)("p",{class:"footer__title"},"Документы",-1),Ze={class:"footer__links"},We={class:"footer__form"},Ue=(0,i.uE)('<p class="footer__title">Будьте в курсе</p><div class="text-field"><label class="text-field__label" for="email"></label><div class="text-field__icon"><input class="text-field__input" type="text" name="Email" placeholder="E-mail"><span class="text-field__aicon"><img src="'+Ae+'" alt=""></span></div></div>',2),Oe={class:"footer__social-media"},Te=(0,i._)("div",{class:"footer__rights"},[(0,i._)("p",{class:"footer__rights-text"},"Copyright © 2022 SCID")],-1);function je(e,t,n,s,r,a){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("footer",be,[(0,i._)("div",ke,[we,(0,i._)("div",xe,[Se,(0,i._)("div",ye,[Ce,(0,i._)("div",De,[(0,i.Wm)(o,{to:"/services"},{default:(0,i.w5)((()=>[(0,i.Uk)("Услуги")])),_:1}),(0,i.Wm)(o,{to:"/cases"},{default:(0,i.w5)((()=>[(0,i.Uk)("Кейсы")])),_:1}),(0,i.Wm)(o,{to:"/contacts"},{default:(0,i.w5)((()=>[(0,i.Uk)("Контакты")])),_:1}),(0,i.Wm)(o,{to:"/business"},{default:(0,i.w5)((()=>[(0,i.Uk)("Сотрудничество")])),_:1})])]),(0,i._)("div",Ee,[Me,(0,i._)("div",Ze,[(0,i.Wm)(o,{to:"/politics"},{default:(0,i.w5)((()=>[(0,i.Uk)("Политика конфеденциальности")])),_:1}),(0,i.Wm)(o,{to:"/agree"},{default:(0,i.w5)((()=>[(0,i.Uk)("Пользовательское соглашение")])),_:1})])]),(0,i._)("div",We,[Ue,(0,i._)("div",Oe,[(0,i.Wm)(o,{class:"social-media__link",to:"/instagram"}),(0,i.Wm)(o,{class:"social-media__link",to:"/vk"}),(0,i.Wm)(o,{class:"social-media__link",to:"/facebook"})])])])]),Te])}var He={data(){}};const Be=(0,o.Z)(He,[["render",je]]);var Ge=Be,Pe={name:"Home",components:{Header:j,Carousel:Y,Slide:L,Services:ge,Footer:Ge},setup(){const e=["bg-1","bg-2","bg-3","bg-4"];return{carouselSlides:e}},computed:{}};const Fe=(0,o.Z)(Pe,[["render",f]]);var Ve=Fe;const Ie={class:"cases"},Ne=(0,i._)("h1",null,"Это страница для кейсов",-1),qe=[Ne];function Je(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",Ie,qe)}var Ye={};const Qe=(0,o.Z)(Ye,[["render",Je]]);var Re=Qe;const ze={class:"business"},Ke=(0,i._)("h1",null,"Это страница для бизнеса",-1),Le=[Ke];function $e(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",ze,Le)}var Xe={};const et=(0,o.Z)(Xe,[["render",$e]]);var tt=et;const nt={class:"services"},st=(0,i._)("h1",null,"Это страница для услуг",-1),it=[st];function rt(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",nt,it)}var at={};const ot=(0,o.Z)(at,[["render",rt]]);var ct=ot;const lt={class:"contacts"},ut=(0,i._)("h1",null,"Это страница для контактов",-1),dt=[ut];function pt(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",lt,dt)}var vt={};const gt=(0,o.Z)(vt,[["render",pt]]);var ft=gt;const _t={class:"politics"},mt=(0,i._)("h1",null,"Политика конфиденциальности",-1),ht=[mt];function At(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",_t,ht)}var bt={};const kt=(0,o.Z)(bt,[["render",At]]);var wt=kt;const xt={class:"agree"},St=(0,i._)("h1",null,"Пользовательское соглашение",-1),yt=[St];function Ct(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",xt,yt)}var Dt={};const Et=(0,o.Z)(Dt,[["render",Ct]]);var Mt=Et;const Zt=[{path:"/",name:"Home",component:Ve},{path:"/cases",name:"Cases",component:Re},{path:"/business",name:"Business",component:tt},{path:"/services",name:"Services",component:ct},{path:"/contacts",name:"Contacts",component:ft},{path:"/politics",name:"Politics",component:wt},{path:"/agree",name:"Agree",component:Mt},{path:"/instagram",beforeEnter(){location.href="http://instagram.com"}},{path:"/vk",beforeEnter(){location.href="http://vk.ru"}},{path:"/facebook",beforeEnter(){location.href="http://facebook.com"}}],Wt=(0,u.p7)({history:(0,u.PO)("/"),routes:Zt});var Ut=Wt;(0,s.ri)(l).use(Ut).mount("#app")},260:function(e,t,n){var s={"./bg-1.png":7391,"./bg-2.png":9036,"./bg-3.png":6059,"./bg-4.png":7332,"./card-image1.png":8206,"./card-image2.png":1285,"./card-image3.png":3285,"./card-image4.png":1918,"./card-image5.png":870,"./card-image6.png":7103,"./footer-logo.png":8959};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=260},7391:function(e,t,n){"use strict";e.exports=n.p+"img/bg-1.9f8cb7a2.png"},9036:function(e,t,n){"use strict";e.exports=n.p+"img/bg-2.4ad69d49.png"},6059:function(e,t,n){"use strict";e.exports=n.p+"img/bg-3.72662f27.png"},7332:function(e,t,n){"use strict";e.exports=n.p+"img/bg-4.549d5f5d.png"},8206:function(e,t,n){"use strict";e.exports=n.p+"img/card-image1.8e71da12.png"},1285:function(e,t,n){"use strict";e.exports=n.p+"img/card-image2.8061fc99.png"},3285:function(e,t,n){"use strict";e.exports=n.p+"img/card-image3.2433c528.png"},1918:function(e,t,n){"use strict";e.exports=n.p+"img/card-image4.dbf096c2.png"},870:function(e,t,n){"use strict";e.exports=n.p+"img/card-image5.6fd6d0e8.png"},7103:function(e,t,n){"use strict";e.exports=n.p+"img/card-image6.0a75ceaa.png"},8959:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAACaBAMAAAC+g7D6AAAAJFBMVEUAAAAAmmMAm2AAn2AAm2MAnGMAnGMAnGMAmmIAmmUAmmAAm2N4FGfTAAAAC3RSTlMA3yAQ76CQz2AwMGPcEpwAAADKSURBVGje7dotDsJAFMTxoQlcoAowNeBJCCFBItcQDAJDqESjkEgUR+AIhOUjeZcj2bTVfVM7f//LEytnkVrugrUqnq9omgZr37ZWC3NVIpWNfexZJPYwZ8P6GHGuZ+5yACc/+wCZERXoM+yAFcPWuDHshz3D3rgw7IvAsAijEhMTExMTExMTExMTExMTExMTExMTExMTExOjGTltkUMaOduxI+GcYS8MGLYh51Z23MXMz3J+uMbdy0ZdRnnvG5SomjhQPCbCfW/4A7SZZp9JUX8yAAAAAElFTkSuQmCC"}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,r){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],r=e[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(o=!1,r<a&&(a=r));if(o){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,r,a=s[0],o=s[1],c=s[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(t&&t(s);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},s=self["webpackChunktest_shop_app"]=self["webpackChunktest_shop_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6205)}));s=n.O(s)})();
//# sourceMappingURL=app.f912f1a9.js.map