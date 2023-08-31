<template>
  <section class="section  px-md-5 pb-5 justify-content-between vh-100" style="background-color: #006651; padding-top: 70px !important">
    <div class="px-lg-5 container-fluid p-0 m-0 row">
      <div class="m-0 p-0 py-3 mb-5" style="background-color: #006651; min-height: 70px; ">
        <h3 class="title2 mt-5 pe-5 ms-5 d-inline">رسپی های کوپا </h3>
      </div>
      <div v-for="(item, index) in slides" :key="index" class="col-6 col-sm-6 col-md-4 col-lg-3 mb-3" :class="{'d-md-none d-lg-block': index === 3}">
        <recipe-card :recipe="item.article" />
      </div>
      <div class="text-center px-5">
        <router-link to="/recipes" class="btn btn-outline-light px-lg-5  ">
          رسپی های بیشتر
        </router-link>
      </div>
    </div>

  </section>
</template>

<script>
import {onMounted, ref} from "vue";
import app from "@/App";
import recipeCard from '@/components/RecipeCard2'

export default {
  name: "MainPageRecipes",
  components: {app, recipeCard},
  setup(){
    const url = app.setup().apiUrl;
    const slides = ref();
    const getData = () => {
      axios.get(url + '/api/food/slides')
          .then((response) => {
            slides.value = response.data;
          })
          .catch((error) => console.error(error));
    }
    onMounted(()=>{
      getData();
    })
    return{
      slides, getData, url
    }
  }
}
</script>

<style scoped>

</style>