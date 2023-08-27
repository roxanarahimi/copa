<template>
  <main class="container-fluid p-0 m-0">
    <!--    -->
    <router-link to="/recipes" class="parallax5 row p-0 m-0" style="background: url('/img/cornflex.jpg') center center no-repeat; background-size: cover;height: 100vh">

    </router-link>

    <div style="height: auto">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8 justify-content-start row">
          <div class="col-lg-6">
            <img class="img-fluid" style="margin-top: -50px" :src="url+data.image" alt="">
            <div style="margin-top: -100px" class="productTitleWrapper">
              <h2>{{ data.title }}</h2>
              <h4>{{ data.subTitle }}</h4>
            </div>
          </div>
          <div class="col-lg-6 d-grid pt-5 pt-lg-0">
            <p style="text-align: justify; align-self: end ">{{ data.text }}</p>
          </div>
        </div>
      </div>

    </div>
    <div class="p-5">
      <div class="p-4">
        <div class=" container-fluid m-0 p-0 row justify-content-center">


          <div class=" col-md-6 col-lg-4">
            <h4 class="title my-5 pe-5">جدول ارزش غذایی در 100 گرم</h4>
            <div class="pe-lg-5" v-if="features.length">
              <div class="d-flex justify-content-between border feature px-2 my-2" v-for="(item, index) in features"
                   :key="index"
                   :class="{'bg-1' : index === 0, 'bg-odd': index % 2 === 1, 'bg-even': index % 2 === 0, }">
                <p style="font-size: 14px; line-height: 22px">{{ item.label }}</p>
                <p style="font-size: 14px; line-height: 22px">{{ item.value + item.unit }}</p>
              </div>
            </div>
          </div>
          <div class="col-1 d-none d-lg-block"></div>
          <div class=" col-md-6 col-lg-4">
            <h4 class="title my-5 pe-5 ">ترکیبات</h4>

            <p style="text-align: justify;">{{ data.ingredients }}</p>
            <div class="my-5">
              <a target="_blank" :href="data.link" class="btn btn-outline-danger">خرید محصول در دیجی کالا</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="p-5">
      <h3 class="title my-5 pe-5 ms-5">محصولات پیشنهادی</h3>
      <div class="container-fluid p-0 m-0 row">
        <product-slider :products="data.related_products"/>
      </div>
    </div>

  </main>
</template>
<script>

import productSlider from "@/components/ProductSlider";
import {useRoute} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";
import app from "@/App";

export default {
  components: {
    productSlider
  },
  setup() {

    const router = useRoute();
    const data = ref({});
    const features = ref([]);
    const url = app.setup().apiUrl;
    const getData = () => {
      axios.get(url + '/api/product/' + router.params.id)
          .then((response) => {
            data.value = response.data.product;

          })
          .then(() => {
            if (data.value.features) {
              features.value = [];
              for (let i = 0; i < JSON.parse(data.value.features).length; i++) {
                features.value.push(JSON.parse(data.value.features)[i]);
              }
            }

          })
          .catch((error) => console.error(error))
    }
    onMounted(() => {
      getData();
    })
    return {
      data, getData, url, router, features
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
@media(max-width: 700px){
  .productTitleWrapper{
    text-align: center;
  }
}
</style>