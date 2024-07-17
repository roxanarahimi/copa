<template>
  <main class="container-fluid p-0 m-0">
    <div class="parallax4 p-0 m-0 ">
<!--      <div class="container-fluid p-0 m-0 row justify-content-lg-end">-->
<!--        <div class="col-6 col-md-4 col-lg-3 h-100 p-0">-->

<!--          <div class="parallax4-blur text-center">-->

<!--            <h1 class="parallax4-title mx-auto">دسر های ساده و آسان</h1>-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->

      <img src="/img/recipes.png" class="d-none d-sm-block img-fluid w-100" alt="">
      <img src="/img/recipes2.png" class="d-sm-none img-fluid w-100" alt="">
    </div>


    <category-nav :categories="categories" :getData="getData"/>
    <div class="contents-area">

      <div v-if="data">
        <div v-if="data.length" class="container-fluid p-0 m-0 row p-md-5 ">
          <div class="col-6 col-md-6 col-lg-4 col-xl-3 px-3" v-for="(item, index) in data" :key="index">
            <recipe-card :recipe="item"/>
          </div>
        </div>
        <div v-else class="text-center mb-5">
          <p>لا توجد وصفة متاحة</p>
        </div>
      </div>

    </div>


  </main>
</template>

<script>
import recipeCard from '@/components/ar/RecipeCard'
import CategoryNav from "@/components/ar/CategoryNav";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

export default {
  name: "Recipes",
  components: {
    CategoryNav,
    recipeCard
  },
  setup() {
    const store = useStore();
    const getCategories = () => {
        store.commit('getRecipeCats');
    };
    const getData = (id) => {
      store.commit('getRecipes', id);
    };
    onMounted(() => {
      // alert(window.innerHeight + ',' + window.innerWidth)
      getCategories();
      getData('');
    });
    return {
      data: computed(()=>store.state.recipes),
      categories: computed(()=>store.state.recipeCats),
      getData, getCategories,store
    }
  }
}
</script>

<style scoped>

</style>