<template>
  <router-link class="" :to="'/recipe/1'">
    <div class="p-lg-3">
      <div class="recipe-card mb-3 text-center" style="background-color: #00a388">


        <div class="w-100 p-3 p-lg-5 mb-3 mb-lg-5">
          <img class="w-100 h-100 mx-auto" style="border-radius: 50%" :src="'/img/image8.png'" alt="">
        </div>

        <div class="p-3">
          <div class="d-inline-block" style="background-color: #006651; color: white; border-radius: 10px;  ">
            <h5 class="m-3"> کوکی ساده </h5>
          </div>
        </div>
        <!--    <div class="recipe-card-play">-->
        <!--      <i class="bi bi-play-fill"></i>-->
        <!--    </div>-->
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