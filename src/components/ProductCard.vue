<template>

   <router-link to="/product/1">
     <div class="product-card border mb-3">
       <div id="frame" class="product-card-img-bg mx-auto py-md-4" style="overflow:hidden; position:relative; background: url('/img/back.png'); ">
         <img id="p1" src="/img/mmm.png" style=" filter:blur(35px);width: 150%; height:150%; position: absolute; top: -17%; left: -17%" >
         <img class="product-card-img mx-auto img-fluid" src="/img/a.png" alt="">
       </div>
       <div class="product-card-footer">
         <p class="fw-bold text-black">بیسکوییت کرمدار کوپا</p>
         <hr class="product-card-hr">
         <p class=" text-black">بیسکوییت سبوسدار کرمدار کاکائویی</p>
       </div>
     </div>

   </router-link>

</template>

<style scoped>
#p1{
  transition: all 3s !important;
}
#frame:hover #p1{
  transform: rotate(90deg);
}
/*@media (max-width: 600px) {*/
/*  .product-card-footer{*/
/*    font-size: 12px !important;*/
/*  }*/
/*}*/

@media(max-width: 700px){
  :deep(.text-black){
    font-size: 12px;
  }
  .product-card-footer {
    padding: 5px 10px;
  }
}
</style>