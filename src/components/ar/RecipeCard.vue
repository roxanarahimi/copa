<template>
  <router-link :to="'/recipe/'+recipe.id">
  <div class="recipe-card mb-3">
    <img class="img-fluid w-100 recipe-card-img w-100 h-100" :src="url+recipe.thumb" alt="">
    <div class="recipe-card-title"><h5>{{ recipe.title_ar }}</h5><p>{{ recipe.product?.title_ar }}</p></div>
    <div class="recipe-card-play">
      <i class="bi bi-play-fill"></i>
    </div>
  </div>
  </router-link>
</template>

<script>
import {useStore} from "vuex";

export default {
  props: [ 'recipe' ],
  setup(){
    const store = useStore()
    const url = store.state.panelUrl;
    return{
      url,store
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