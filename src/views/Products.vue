<template>

  <main class="container-fluid p-0 m-0">
<!--    <div class="parallax3" style="height: 100vh; background-color: #11a142">-->
    <div class="parallax3" style="height: auto">

      <img src="/img/probgg.png" class="d-none d-sm-block img-fluid w-100" alt="">
      <img src="/img/probgg2.png" class="d-sm-none img-fluid w-100" alt="">

    </div>
    <category-nav :categories="categories" :getData="getData"/>
    <div class="contents-area">
     <div v-if="data">
       <div v-if="data.length" class="container-fluid p-0 m-0 row p-md-5">
         <div class="col-6 col-md-6 col-lg-4 col-xl-3 " v-for="(item, index) in data" :key="index">
           <product-card :product="item"/>
         </div>
       </div>
       <div v-else class="text-center mb-5">
         <p>محصولی موجود نمیباشد</p>
       </div>
     </div>
    </div>


  </main>
</template>

<script>
import productCard from "@/components/ProductCard";
import productHeroSlider from "@/components/ProductHeroSlider";
import CategoryNav from "@/components/CategoryNav";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

export default {
  components: {
    CategoryNav,
    productCard,
    productHeroSlider,
  },
  setup() {
    const store = useStore();
    const getCategories = () => {
        store.commit('getProductCats');
    };
    const getData = (id) => {
      store.commit('getProducts', id);
    };
    onMounted(() => {
      getCategories();
      getData('');
    });
    return {
      data: computed(()=>store.state.products),
      categories: computed(()=>store.state.productsCats),
      getData, getCategories,store
    }
  },

}
</script>

<style scoped>

</style>