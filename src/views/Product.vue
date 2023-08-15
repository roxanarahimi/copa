<template>
  <main class="container-fluid p-0 m-0">
    <div class="parallax3 row p-0 m-0">
      <div class="col-5 p-0">
        <div class="parallax3-section">
          <div class="parallax3-cover">
            <h1 class="parallax3-hover-title">سریال صبحانه</h1>
            <img class="parallax3-hover-img img-fluid" src="/img/pro2.png" alt="">
          </div>
          <img class="img-fluid h-100 w-100" src="/img/image11.png" alt="">

        </div>
      </div>
      <div class="col-3 p-0">
        <div class="parallax3-section">
          <div class="parallax3-cover">
            <h1 class="parallax3-hover-title">ویفر سکلت</h1>
            <img class="parallax3-hover-img img-fluid" src="/img/a.png" alt="">
          </div>
          <img class="img-fluid h-100 w-100" src="/img/image13.png" alt="">

        </div>

      </div>
      <div class="col-4 p-0">
        <div class="parallax3-section">
          <div class="parallax3-cover">
            <h1 class="parallax3-hover-title">بیسکوییت های چند غله</h1>
            <img class="parallax3-hover-img img-fluid" src="/img/pro1.png" alt="">
          </div>
          <img class="img-fluid h-100 w-100" src="/img/image14.png" alt="">

        </div>
      </div>

    </div>

    <div class="p-5">
      <div class="p-4">
        <div class=" container-fluid m-0 p-0 row justify-content-center">
          <div class="col-12">
            <p style="text-align: justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
              متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه
              و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
              فرهنگ
              پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای
              موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

          </div>

          <div class=" col-md-6 col-lg-4">
            <h4 class="title my-5 pe-5">یک فنجان غلات صبحانه ٣٠ گرم</h4>
            <div class="pe-lg-5">
              <div class="d-flex justify-content-between border feature px-2 my-2" v-for="(index, item) in 5"
                   :key="index"
                   :class="{'bg-1' : index === 1, 'bg-odd': index % 2 === 0, 'bg-even': index % 2 === 1, }">
                <p style="font-size: 14px; line-height: 22px">انرژی</p>
                <p style="font-size: 14px; line-height: 22px">112 کالری</p>
              </div>
            </div>
          </div>
          <dic class="col-1 d-none d-lg-block"></dic>
          <div class=" col-md-6 col-lg-4">
            <h4 class="title my-5 pe-5 ">ترکیبات</h4>

            <p style="text-align: justify;">
              آرد گندم، آرد برنج، برنج نیم دانه، شکر، عصاره مالت، آرد جوانه گندم، سبوس گندم، شکر، نمک طعام ١%، پودر
              دارچین
            </p>
            <div class="my-5">
              <button class="btn btn-outline-danger">خرید محصول در دیجی کالا</button>


            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="p-5">
      <h3 class="title my-5 pe-5 ms-5">محصولات پیشنهادی</h3>
      <div class="container-fluid p-0 m-0 row">
        <product-slider/>
      </div>
    </div>

  </main>
</template>

<script>

import productSlider from "@/components/ProductSlider";

export default {
  components: {
    productSlider
  },
  setup() {

    return{

    }
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
}
</style>