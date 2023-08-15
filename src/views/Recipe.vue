<template>

  <main class="container-fluid p-0 m-0">
    <div class="parallax6 row p-0 m-0">
      <img class="parallax6-img img-fluid p-0"  src="/img/recipe.png" alt="">

      <div class="parallax6-section p-0">
            <h1 class="parallax6-title">دستور پخت
              <br>
              شکلات گلاسه</h1>
      </div>
    </div>

    <div class="p-5">
      <div class="p-4">
        <div class=" container-fluid m-0 p-0 row justify-content-center">
          <div class="col-xl-3">
            <h4 class="title mb-5 pe-5 ">مواد لازم</h4>

           <p>
             شکلات صبحانه کوپا 3/4 پیمانه
             <br>
             شیر پرچرب 1/2 پیمانه
             <br>
             بستنی وانیلی متناسب با حجم
             <br>
             لیوان خامه 1 پیمانه
             <br>
             انواع میوه به میزان دلخواه

           </p>
<!--            <ul>-->
<!--              <li>شکلات صبحانه کوپا 3/4 پیمانه</li>-->
<!--              <li>شیر پرچرب 1/2 پیمانه</li>-->
<!--              <li>بستنی وانیلی متناسب با حجم</li>-->
<!--              <li>لیوان خامه 1 پیمانه</li>-->
<!--              <li>انواع میوه به میزان دلخواه</li>-->
<!--            </ul>-->
          </div>
          <dic class="col-xl-5">
            <h4 class="title mb-5 pe-5 ">طرز تهیه</h4>
<p>
  کمی شکلات کوپا را روی حرارت قرار دهید، با اضافه کردن کمی شیر، شکلات را رقیق کنید.
  <br>
  دیواره‌های لیوان را با سس شکلات تزیین کنید. (سس شکلات را داخل لیوان بریزید و لیوان را بچرخانید تا دیواره‌ داخلی لیوان به شکلات آغشته شود.)
  چند اسکوپ بستنی وانیلی داخل لیوان بریزید و باقی سس شکلات را روی بستنی بریزید.
  درصورت تمایل می‌توانید با کمی خامه و میوه‌های دلخواه شکلات گلاسه را تزیین کنید. (همچنین از بیسکوییت و اسمارتیز برای تزیین بیشتر شکلات گلاسه می توان استفاده کرد.)

</p>
          </dic>
          <div class="col-xl-4 d-flex justify-content-center justify-content-lg-end">

            <product-card />

          </div>
        </div>

      </div>
    </div>


  </main>
</template>

<script>
import productSlider from "@/components/ProductSlider";
import productCard from "@/components/ProductCard";

export default {
  components: {
   productSlider, productCard
  },
  mounted() {

  }
}
</script>

<style scoped>
.feature {
  border-radius: 10px;
  height: 23px;
}

.bg-1 {
  background-color: white !important;
}

.bg-odd {
  background-color: #F8C4A1;

}

.bg-even {
  background-color: #9BFF99;

}

p {
  font-size: 18px;
  text-align: justify;
}
</style>