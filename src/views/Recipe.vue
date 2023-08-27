<template>

  <main class="container-fluid p-0 m-0">
    <div class="parallax6 row p-0 m-0">
      <img class="parallax6-img img-fluid p-0" src="/img/recipe.png" alt="">

      <div class="parallax6-section p-0">
        <h1 class="parallax6-title">دستور پخت
          <br>
          {{ data.title }}</h1>
      </div>
    </div>

<!--    <div style="height: auto">-->
<!--      <div class="row justify-content-center">-->
<!--        <div class="justify-content-between row p-5">-->
<!--          -->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->

    <div class="p-5">
      <div class="p-4">
        <div class=" container-fluid m-0 p-0 row justify-content-center ">
          <div class="col-lg-3 pb-5">
            <img class="img-fluid" style="margin-top: 0px" :src="url+data.image" alt="">
          </div>
        </div>

        <div class=" container-fluid m-0 p-0 row justify-content-center">

          <div class="col-xl-3">
            <h4 class="title mb-5 pe-5 ">مواد لازم</h4>

            <p>{{data.ingredients }}</p>
          </div>
          <div class="col-xl-5">
            <h4 class="title mb-5 pe-5 ">طرز تهیه</h4>
            <p>{{data.text}}</p>
          </div>
          <div class="col-xl-4 d-flex justify-content-center justify-content-lg-end">

          <product-card :product="data.product"/>

        </div>

        </div>

      </div>
    </div>


  </main>
</template>

<script>
import productSlider from "@/components/ProductSlider";
import productCard from "@/components/ProductCard";
import {onMounted, ref} from "vue";
import app from "@/App";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  components: {
    productSlider, productCard, app
  },
  setup() {

    const router = useRoute();
    const data = ref({});
    const url = app.setup().apiUrl;
    const getData = () => {
      axios.get(url + '/api/article/' + router.params.id)
          .then((response) => {
            data.value = response.data
          })
          .catch((error) => console.error(error))
    }
    onMounted(() => {
      getData();
    })
    return {
      data, getData, url, router,
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
  text-align: justify;
}
</style>