<template>

  <main class="container-fluid p-0 m-0">
    <!--    <div class="parallax6 row p-0 m-0">-->
    <!--      <img class="parallax6-img img-fluid p-0" src="/img/recipe.png" alt="">-->

    <!--      <div class="parallax6-section p-0">-->
    <!--        <h1 class="parallax6-title">دستور پخت-->
    <!--          <br>-->
    <!--          {{ data.title }}</h1>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--&lt;!&ndash;    <div style="height: auto">&ndash;&gt;-->
    <!--&lt;!&ndash;      <div class="row justify-content-center">&ndash;&gt;-->
    <!--&lt;!&ndash;        <div class="justify-content-between row p-5">&ndash;&gt;-->
    <!--&lt;!&ndash;          &ndash;&gt;-->
    <!--&lt;!&ndash;        </div>&ndash;&gt;-->
    <!--&lt;!&ndash;      </div>&ndash;&gt;-->

    <!--&lt;!&ndash;    </div>&ndash;&gt;-->

    <!--    <div class="p-5">-->
    <!--      <div class="p-4">-->
    <!--        <div class=" container-fluid m-0 p-0 row justify-content-center ">-->
    <!--          <div class="col-xl-3 pb-5">-->
    <!--            <img class="img-fluid" style="margin-top: 0" :src="url+data.image" alt="">-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class=" container-fluid m-0 p-0 row justify-content-center">-->

    <!--          <div class="col-xl-3">-->
    <!--            <h4 class="title mb-5 pe-5 ">مواد لازم</h4>-->

    <!--            <p>{{data.ingredients }}</p>-->
    <!--          </div>-->
    <!--          <div class="col-xl-5">-->
    <!--            <h4 class="title mb-5 pe-5 ">طرز تهیه</h4>-->
    <!--            <p>{{data.text}}</p>-->
    <!--          </div>-->
    <!--          <div class="col-xl-4 d-flex justify-content-center justify-content-xl-end">-->

    <!--          <product-card :product="data.product"/>-->

    <!--        </div>-->

    <!--        </div>-->

    <!--      </div>-->
    <!--    </div>-->

    <div class="row xall fw-semibold p-3 p-md-5">
      <div class="col-xl-6">
        <div class="info-box d-grid  " style="position: relative; margin-bottom: 100px">
          <div class="mb-5" style="align-self: start">
            <div class="info-box-title mx-auto">{{ data.title }}</div>
            <p class="info-box-text">
              روش تهیه
              <br>
              {{ data.text }}</p>
          </div>
          <div class="mt-lg-5" style="align-self: end">
            <div class="row">
              <div class="col-xl-6">

                <p style="white-space: pre-line;">
                  مواد لازم
                  <br>
                  {{ data.ingredients }}</p>
              </div>
            </div>
          </div>

          <div class="relatedProductImgWrapper">
            <div v-for="(item,index) in data.related_products" :key="index">
              <a :href="'/product/'+item.id" class="p-2 p-md-3"><img class="relatedProductImg" :src="url+item.image" alt=""></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 pe-xl-5 py-xl-5 ">
        <div class="d-flex h-100">
          <img src="/img/devider.png" class="img-fluid d-none d-xl-block" style="max-width: 35px; height: 100%" alt="">
          <div class="row px-xl-5 mb-5" style="font-family: 'Arial'">
            <div class="col-12 text-end " style="text-transform: uppercase !important">
              <h1 class="m-0 text-danger">{{ data.title_en }}</h1>
              <h1 class="m-0 ">{{ data.subTitle_en }}</h1>
              <p class="m-0 ">{{ data.products_en }}</p>
            </div>
            <div class="col-12 text-end h-100 pb-5">
              <div class="recipe-img-shadow  my-5">
                <img class="recipe-img mt-4 ms-4" :src="url+data.image" alt="">
              </div>
            </div>
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
.recipe-img-shadow {
  background-color: #ff0000;
  overflow: visible;
  border-radius: 15px;
  width: 400px;
  height: 400px
}

.recipe-img {
  width: 480px !important;
  border-radius: 15px
}

.relatedProductImgWrapper {
  display: flex;
  justify-content: end;
  position: absolute;
  left: 0;
  bottom: -100px
}

.relatedProductImg {
  height: 200px
}

@media (max-width: 700px) {
  .recipe-img-shadow {
    width: 250px;
    height: 250px
  }

  .recipe-img {
    width: 340px !important;
  }

  .relatedProductImgWrapper {
    bottom: -50px
  }

  .relatedProductImg {
    height: 100px
  }

}

.info-box {
  border-radius: 20px;
  background-color: #b7b7b7;
  margin: 120px 0px 0 0;
  position: relative;
  padding: 70px 40px;
  font-size: 14px;
}
.info-box-title {
  border-radius: 30px;
  background-color: #ff0000;
  font-family: 'YekanBakhExtraBlack';
  font-size: 35px;
  line-height: 80px;
  font-weight: bolder;
  text-align: center;
  color: white;
  width: 85%;
  height: 80px;
  position: absolute;
  right: 7.5%;
  top: -40px;

}

.info-box-title2 {
  border-radius: 30px;
  background-color: #ff0000;
  font-family: 'YekanBakhExtraBold';
  line-height: 50px;
  height: 50px;
  font-weight: bolder;
  text-align: center;
  color: white;
  width: 100%;

}

.xall {
  font-family: 'YekanBakh';
}

p {
  margin: 0 !important;
}

.info-box-text {
  text-align: justify;
}

@media (max-width: 1200px) {
  .info-box {
    margin: 100px 20px 20px 20px;

  }
}
@media (max-width: 700px) {
  .info-box {
    margin: 100px 0px 0px 0px;
  }
  .info-box-title {
    border-radius: 30px;
    background-color: #ff0000;
    font-family: 'YekanBakhExtraBold';
    font-size: 25px;
    line-height: 80px;
    width: 95%;
    height: 80px;
    position: absolute;
    right: 2.5%;
    top: -40px;

  }

}

</style>