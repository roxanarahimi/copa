<template>
  <main class="container-fluid p-0 m-0">
    <div class="parallax4 p-0 m-0 ">
      <div class="container-fluid p-0 m-0 row justify-content-lg-end">
        <div class="col-6 col-md-4 col-lg-3 h-100 p-0">

          <div class="parallax4-blur text-center">

            <h1 class="parallax4-title mx-auto">دسر های ساده و آسان</h1>
          </div>

        </div>
      </div>
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
          <p>دستور پختی موجود نمیباشد</p>
        </div>
      </div>

    </div>


  </main>
</template>

<script>
import recipeCard from '@/components/RecipeCard'
import CategoryNav from "@/components/CategoryNav";
import {computed, onMounted, ref} from "vue";
import app from "@/App";
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
      let myPromise = new Promise(function(resolve, reject) {
        store.commit('getRecipeCats');
        resolve();
        reject();
      });
      myPromise.then(
          function(value) { handleCategoryNav() },
          function(error) { console.log(error) }
      );
    };
    const getData = (id) => {
      store.commit('getRecipes', id);
    };
    onMounted(() => {
      getCategories();
      getData('');
    });
    const handleCategoryNav = ()=>{
      document.querySelectorAll('.category-nav-span').forEach((element) => {
        element.addEventListener('click', () => {
          document.querySelector('.category-nav-active').classList.remove('category-nav-active');
          element.classList.add('category-nav-active');
          document.querySelector('.all_li').innerHTML=element.innerHTML;
        })
      });
      document.querySelectorAll('.category-nav-li').forEach((element) => {
        element.addEventListener('click', () => {
          document.querySelector('.all_li').innerHTML=element.innerHTML;
          document.querySelector('.category-nav-active').classList.remove('category-nav-active');
          document.querySelectorAll('.category-nav-span').forEach((el) => {
            if (el.getAttribute('data-id') == element.getAttribute('data-id')){
              el.classList.add('category-nav-active');
            }
          });

        })
      });
    }
    return {
      data: computed(()=>store.state.recipes),
      categories: computed(()=>store.state.recipeCats),
      getData, getCategories,store, handleCategoryNav
    }
  }
}
</script>

<style scoped>

</style>