"use strict";(self["webpackChunkcopa"]=self["webpackChunkcopa"]||[]).push([[893],{6070:function(t,e,a){a.d(e,{Z:function(){return h}});var o=a(3396),c=a(7139);const n=t=>((0,o.dD)("data-v-4c67e614"),t=t(),(0,o.Cn)(),t),l={class:"d-flex justify-content-center"},i={class:"d-none d-lg-block d-lg-flex justify-content-lg-between category-nav-mobile m-5"},r=["data-id","onClick"],s={class:"d-lg-none category-nav my-5 mx-3",style:{position:"relative"}},d={class:"row p-0"},g=n((()=>(0,o._)("div",{class:"all_li d-block pe-5",style:{width:"calc(100% - 20px)"}},"همه",-1))),u=n((()=>(0,o._)("i",{class:"bi bi-chevron-down d-block",style:{width:"20px"}},null,-1))),v=[g,u],m=n((()=>(0,o._)("div",{class:"col-6 search-area"},[(0,o._)("input",{class:"border-0",placeholder:"جستجوی محصول",type:"text",style:{height:"35px","background-color":"transparent"}})],-1))),y={class:"category-nav-mobile-options d-none w-50"},p={class:"px-3"},b=["data-id","onClick"];function w(t,e,a,n,g,u){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",i,[(0,o._)("span",{"data-id":"all",onClick:e[0]||(e[0]=t=>n.getData("")),class:"category-nav-span d-inline-block mx-3 text-center category-nav-active"},"همه محصولات"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categories,((t,e)=>((0,o.wg)(),(0,o.iD)("span",{"data-id":t.id,key:e,onClick:e=>n.getData(t.id),class:"category-nav-span d-inline-block mx-3 text-center"},(0,c.zw)(t.title),9,r)))),128))]),(0,o._)("div",s,[(0,o._)("div",d,[(0,o._)("div",{onClick:e[1]||(e[1]=(...t)=>n.categoryNavToggle&&n.categoryNavToggle(...t)),"data-flag":"1",class:"col-6 category-nav-select-btn justify-content-between cursor-pointer category-nav-mobile-btn d-flex justify-content-between border-end",style:{padding:"0 25px"}},v),m,(0,o._)("div",y,[(0,o._)("ul",p,[(0,o._)("li",{"data-id":"all",onClick:e[2]||(e[2]=t=>n.getData("")),class:"category-nav-li"},"همه"),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categories,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{"data-id":t.id,onClick:e=>n.getData(t.id),key:e,class:"category-nav-li"},(0,c.zw)(t.title),9,b)))),128))])])])])])}var f={name:"CategoryNav",props:["getData","categories"],setup(t){const e=()=>{document.querySelector(".category-nav").getBoundingClientRect().top>60*window.innerHeight/100?(document.querySelector(".category-nav-mobile-options").removeAttribute("style"),document.querySelector(".category-nav-mobile-options").setAttribute("style","bottom:50px")):(document.querySelector(".category-nav-mobile-options").removeAttribute("style"),document.querySelector(".category-nav-mobile-options").setAttribute("style","top:50px"));let t=document.querySelector(".category-nav-mobile-btn").getAttribute("data-flag");0==t?(document.querySelector(".category-nav-mobile-options").classList.add("d-none"),document.querySelector(".category-nav-mobile-btn").setAttribute("data-flag",1)):(document.querySelector(".category-nav-mobile-options").classList.remove("d-none"),document.querySelector(".category-nav-mobile-btn").setAttribute("data-flag",0))},a=a=>{let o=new Promise((function(e,o){t.getData(a),e(),o()}));o.then((function(t){c()}),(function(t){console.log(t)})),e()},c=()=>{document.querySelectorAll(".category-nav-span").forEach((t=>{t.addEventListener("click",(()=>{document.querySelector(".category-nav-active").classList.remove("category-nav-active"),t.classList.add("category-nav-active"),document.querySelector(".all_li").innerHTML=t.innerHTML}))})),document.querySelectorAll(".category-nav-li").forEach((t=>{t.addEventListener("click",(()=>{document.querySelector(".all_li").innerHTML=t.innerHTML,document.querySelector(".category-nav-active").classList.remove("category-nav-active"),document.querySelectorAll(".category-nav-span").forEach((e=>{e.getAttribute("data-id")==t.getAttribute("data-id")&&e.classList.add("category-nav-active")}))}))}))},n=()=>{document.addEventListener("click",(function(t){t=t||window.event;var a=t.target||t.srcElement;a.classList.contains("nav-category")||a.classList.contains("nav-category-select-btn")||a.classList.contains("form-control")||a.classList.contains("bi-chevron-down")||a.classList.contains("all_li")||a.classList.contains("category-nav-li")||a.classList.contains("category-mobile-nav-options")||!document.querySelector(".category-nav-mobile-btn")||0!=document.querySelector(".category-nav-mobile-btn").getAttribute("data-flag")||e()}))};return(0,o.bv)((()=>{n()})),{categoryNavToggle:e,getData:a,handleCategoryNav:c,handleMobileNav:n}}},_=a(89);const k=(0,_.Z)(f,[["render",w],["__scopeId","data-v-4c67e614"]]);var h=k},4370:function(t,e,a){a.r(e),a.d(e,{default:function(){return q}});var o=a(3396);const c={class:"container-fluid p-0 m-0"},n=(0,o._)("div",{class:"parallax3",style:{height:"auto"}},[(0,o._)("img",{src:"/img/probgg.png",class:"d-none d-sm-block img-fluid w-100",alt:""}),(0,o._)("img",{src:"/img/probgg2.png",class:"d-sm-none img-fluid w-100",alt:""})],-1),l={class:"contents-area"},i={key:0},r={key:0,class:"container-fluid p-0 m-0 row p-md-5"},s={key:1,class:"text-center mb-5"},d=(0,o._)("p",null,"محصولی موجود نمیباشد",-1),g=[d];function u(t,e,a,d,u,v){const m=(0,o.up)("category-nav"),y=(0,o.up)("product-card");return(0,o.wg)(),(0,o.iD)("main",c,[n,(0,o.Wm)(m,{categories:d.categories,getData:d.getData},null,8,["categories","getData"]),(0,o._)("div",l,[d.data?((0,o.wg)(),(0,o.iD)("div",i,[d.data.length?((0,o.wg)(),(0,o.iD)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.data,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-6 col-md-6 col-lg-4 col-xl-3",key:e},[(0,o.Wm)(y,{product:t},null,8,["product"])])))),128))])):((0,o.wg)(),(0,o.iD)("div",s,g))])):(0,o.kq)("",!0)])])}var v=a(4347);const m=t=>((0,o.dD)("data-v-44c03dc8"),t=t(),(0,o.Cn)(),t),y={class:"px-lg-5 p-0 m-0",style:{"margin-bottom":"50px"}},p=m((()=>(0,o._)("div",{class:"carousel__item p-0"},[(0,o._)("div",{class:"parallax3-section"},[(0,o._)("div",{class:"parallax3-cover"},[(0,o._)("h1",{class:"parallax3-hover-title"},"سریال صبحانه"),(0,o._)("img",{class:"parallax3-hover-img img-fluid",src:"/img/pro2.png",alt:""})]),(0,o._)("img",{class:"img-fluid h-100 w-100",src:"/img/cornflex.jpg",alt:""})])],-1)));function b(t,e,a,c,n,l){const i=(0,o.up)("Slide"),r=(0,o.up)("Navigation"),s=(0,o.up)("Pagination"),d=(0,o.up)("Carousel");return(0,o.wg)(),(0,o.iD)("div",y,[(0,o.Wm)(d,{class:"",itemsToShow:1,autoplay:500,transition:2e3,loop:!0,itemsToScroll:1,wrapAround:!0,snapAlign:"start"},{addons:(0,o.w5)((()=>[(0,o.Wm)(r),(0,o.Wm)(s)])),default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(3,(t=>(0,o.Wm)(i,{key:t},{default:(0,o.w5)((()=>[p])),_:2},1024))),64))])),_:1})])}var w={components:{productCard:v.Z},mounted(){document.querySelectorAll(".carousel__icon").forEach((t=>{t.setAttribute("viewBox","0 0 17 17")}))}},f=a(89);const _=(0,f.Z)(w,[["render",b],["__scopeId","data-v-44c03dc8"]]);var k=_,h=a(6070),x=a(65),D={components:{CategoryNav:h.Z,productCard:v.Z,productHeroSlider:k},setup(){const t=(0,x.oR)(),e=()=>{t.commit("getProductCats")},a=e=>{t.commit("getProducts",e)};return(0,o.bv)((()=>{e(),a("")})),{data:(0,o.Fl)((()=>t.state.products)),categories:(0,o.Fl)((()=>t.state.productsCats)),getData:a,getCategories:e,store:t}}};const S=(0,f.Z)(D,[["render",u]]);var q=S}}]);
//# sourceMappingURL=products.a96b2f24.js.map