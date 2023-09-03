<template>
  <main class="container-fluid m-0">
    <!--    -->
    <!--    <router-link to="/recipes" class="parallax5 row p-0 m-0" style="background: url('/img/cornflex.jpg') center center no-repeat; background-size: cover;height: 100vh">-->

    <!--    </router-link>-->

    <!--    <div style="height: auto">-->
    <!--      <div class="row justify-content-center">-->
    <!--        <div class="col-10 col-xl-8 justify-content-start row">-->
    <!--          <div class="col-xl-6">-->
    <!--            <img class="img-fluid" style="margin-top: -50px" :src="url+data.image" alt="">-->
    <!--            <div style="margin-top: -100px" class="productTitleWrapper">-->
    <!--              <h2>{{ data.title }}</h2>-->
    <!--              <h4>{{ data.subTitle }}</h4>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-xl-6 d-grid pt-5 pt-xl-0">-->
    <!--            <p style="text-align: justify; align-self: end ">{{ data.text }}</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="p-5">-->
    <!--      <div class="p-4">-->
    <!--        <div class=" container-fluid m-0 p-0 row justify-content-center">-->


    <!--          <div class=" col-md-6 col-xl-4">-->
    <!--            <h4 class="title my-5 pe-5">جدول ارزش غذایی در 100 گرم</h4>-->
    <!--            <div class="pe-xl-5" v-if="features.length">-->
    <!--              <div class="d-flex justify-content-between border feature px-2 my-2" v-for="(item, index) in features"-->
    <!--                   :key="index"-->
    <!--                   :class="{'bg-1' : index === 0, 'bg-odd': index % 2 === 1, 'bg-even': index % 2 === 0, }">-->
    <!--                <p style="font-size: 14px; line-height: 22px">{{ item.label }}</p>-->
    <!--                <p style="font-size: 14px; line-height: 22px">{{ item.value + item.unit }}</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-1 d-none d-xl-block"></div>-->
    <!--          <div class=" col-md-6 col-xl-4">-->
    <!--            <h4 class="title my-5 pe-5 ">ترکیبات</h4>-->

    <!--            <p style="text-align: justify;">{{ data.ingredients }}</p>-->
    <!--            <div class="my-5">-->
    <!--              <a target="_blank" :href="data.link" class="btn btn-outline-danger">خرید محصول در دیجی کالا</a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="p-5">-->
    <!--      <h3 class="title my-5 pe-5 ms-5">محصولات پیشنهادی</h3>-->
    <!--      <div class="container-fluid p-0 m-0 row">-->
    <!--        <product-slider :products="data.related_products"/>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="row xall fw-semibold p-3 p-md-5">
      <div class="col-xl-6 px-0 px-lg-3" >
        <div class="info-box d-grid ">
          <div class="mb-5" style="align-self: start">

            <div class="info-box-title mx-auto" :style="{ backgroundColor: data.color }">{{ data.title }}</div>
            <p class="info-box-text">
              ویژگی
              <br>
              {{ data.text }}</p>
          </div>

          <div class="mt-5" style="align-self: end">
            <div class="row">
              <div class="col-xl-6">
                <a v-if="data.link" :href="data.link" target="_blank" class="d-block info-box-title2"  :style="{ backgroundColor: data.color }">خرید اینترنتی</a>
<!--                <div class="d-flex justify-content-between" v-for="(item,index) in features" :key="index">-->
<!--                  <p>{{ item.label }} ({{ item.unit }})</p>-->
<!--                  <p>{{ item.value }}</p>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6  p-5 p-xl-0 pe-xl-5 py-xl-5 ">
       <div class="d-flex">
         <img src="/img/devider.png" class="img-fluid d-none d-xl-block" style="max-width: 35px" alt="">
         <div class="row px-xl-5 " style="font-family: 'Arial'">
           <div class="col-12 text-end" style="text-transform: uppercase !important">
             <h1 v-if="data.title_en" class="m-0 fw-bold" :style="{ color: data.color }">{{ data.title_en }}</h1>
             <h1 v-if="data.subTitle" class="m-0 fw-bold">{{ data.subTitle }}</h1>
             <h5 v-if="data.flavor_en" class="m-0  fw-bold">{{ data.flavor_en }}</h5>
           </div>
           <div class="col-12 text-end">
             <img class="img-fluid" :src="url+data.image" alt="">
           </div>
         </div>
       </div>
      </div>
    </div>

  </main>
</template>
<script>

import productSlider from "@/components/ProductSlider";
import {useRoute} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";
import app from "@/App";
import {useStore} from "vuex";

export default {
  components: {
    productSlider
  },
  setup() {

    const router = useRoute();
    const data = ref({});
    const store = useStore();
    const features = ref([]);
    const url = store.state.panelUrl;
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

/*p {*/
/*  font-size: 18px;*/
/*}*/
/*@media(max-width: 700px){*/
/*  .productTitleWrapper{*/
/*    text-align: center;*/
/*  }*/
/*}*/
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
  /*background-color: #ff0000;*/
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
  /*background-color: #ff0000;*/
  font-family: 'YekanBakhExtraBold';
  line-height: 50px;
  height: 50px;
  font-weight: bolder;
  text-align: center;
  color: white;
  width: 100%;

}
.info-box-title2:hover {
  background-color: green !important;
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