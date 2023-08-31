<template>
  <router-link :to="'/recipe/'+recipe.id">
  <div class="recipe-card mb-3">
    <img class="img-fluid w-100 recipe-card-img w-100 h-100" :src="url+recipe.thumb" alt="">
    <div class="recipe-card-title"><h5>{{ recipe.title }}</h5><p>{{ recipe.product?.title }}</p></div>
    <div class="recipe-card-play">
      <i class="bi bi-play-fill"></i>
    </div>
  </div>
  </router-link>
</template>

<script>
import app from "@/App";
export default {
  props: [ 'recipe' ],
  components: { app },
  setup(){
    const url = app.setup().apiUrl;

    return{
      url
    }
  }

}
</script>

<style scoped>
@media (max-width: 700px) {
  :deep(.recipe-card-title)
  {
    padding: 10px;
    height: 60px;
    font-size: 12px;
  }
  :deep(.recipe-card-title h5){
    font-size: 15px;
    font-weight: bold;
  }

  :deep(.recipe-card-play){
    bottom: 35px;
    left: 15px;
    width: 40px;
    height: 40px;
    font-size: 30px !important;
    border-radius: 15px;
  }
}
</style>