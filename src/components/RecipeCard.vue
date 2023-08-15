<template>
  <router-link to="/recipe/1">
  <div class="recipe-card mb-3">
    <img class="img-fluid w-100 recipe-card-img w-100 h-100" src="/img/image7.png" alt="">
    <div class="recipe-card-title-back"></div>
    <div class="recipe-card-title"><h5>اسم دسر</h5><p>محصول مورد نظر</p></div>
    <div class="recipe-card-play">
      <i class="bi bi-play-fill"></i>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 700px) {
  :deep(.recipe-card-title)
  {
    padding: 10px;
    height: 80px;
    font-size: 12px;
  }
  :deep(.recipe-card-title h5){
    font-size: 15px;
    font-weight: bold;
  }

  :deep(.recipe-card-play){
    bottom: 60px;
    left: 15px;
    width: 40px;
    height: 40px;
    font-size: 30px !important;
    border-radius: 15px;
  }
}
</style>