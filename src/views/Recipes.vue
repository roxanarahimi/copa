<template>
  <main class="container-fluid p-0 m-0">
    <div class="parallax4 p-0 m-0 ">
      <div class="container-fluid p-0 m-0 row justify-content-lg-end">
        <div class="col-6 col-md-4 col-lg-3 h-100 p-0" >

          <div class="parallax4-blur text-center">

            <h1 class="parallax4-title mx-auto">دسر های ساده و آسان</h1>
          </div>

        </div>
      </div>
    </div>


    <category-nav :categories="categories" :getData="getData" :getDataByCat="getDataByCat"/>

    <div class="container-fluid p-0 m-0 row p-md-5 contents-area" >

      <div class="col-6 col-md-6 col-lg-4 col-xl-3 px-3" v-for="(item, index) in data" :key="index">
        <recipe-card :recipe="item" />
      </div>
    </div>

  </main>
</template>

<script>
import recipeCard from '@/components/RecipeCard'
import CategoryNav from "@/components/CategoryNav";
import {onMounted, ref} from "vue";
import app from "@/App";

export default {
  name: "Recipes",
  components: {
    CategoryNav,
    recipeCard
  },
  setup(){
    const data = ref([]);
    const categories = ref([]);
    const getCategories = () => {
      axios.get(app.setup().apiUrl + '/api/category/article')
          .then((response) => {
            categories.value = response.data;
          })
          .then(()=>{
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
          })
          .catch((error) => { console.log(error) })
      console.log('cats',categories.value)
    };
    const getData = () => {
      data.value = [];
      axios.get(app.setup().apiUrl + '/api/article')
          .then((response) => {
            data.value = response.data;
          })
          .catch((error) => { console.log(error) })
    };
    const getDataByCat = (id) => {
      data.value = [];
      axios.get(app.setup().apiUrl + '/api/article/by/category/'+id)
          .then((response) => {
            data.value = response.data.data;
          })
          .catch((error) => { console.log(error) })
    };
    onMounted(() => {
      getCategories();
      getData();
    });
    return {
      data,categories, getData, getDataByCat, getCategories
    }
  }
}
</script>

<style scoped>

</style>