<template>
  <router-link class="" :to="'/ar/recipe/'+recipe.id">
    <div class="recipe-card2 mb-3 text-center">
      <div class="w-100 px-1 recipe-card2-img-wrapper">
        <img class="w-100 h-100 mx-auto recipe-card2-img" :src="url+recipe.thumb" alt="">
      </div>
      <div class="pt-0">
        <div class="recipe-card2-title">
          <p class="m-3" > {{ recipe.title_ar }} </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import {useStore} from "vuex";

export default {
  props: ['recipe'],
  setup() {
    const store = useStore()
    const url = store.state.panelUrl;
    return {
      url,store
    }
  }

}
</script>

<style scoped>
:deep(.recipe-card2) {
  border-radius: 20px !important;
  background-color: #00a388;
  padding: 45px 35px 1px 35px;
}

:deep(.recipe-card2-img-wrapper) {
  margin-bottom: 40px !important;
  min-height: 50px !important;
}
:deep(.recipe-card2-img) {
  border-radius: 50%
}

:deep(.recipe-card2-title) {
  margin-bottom: 20px !important;
  background-color: rgb(0, 102, 81);
  border-radius: 10px;
  color: white;
  white-space: nowrap;

}

:deep(.recipe-card2-title p) {
  line-height: 64px !important;
  font-size: 20px !important;
}

@media(max-width: 700px){
  :deep(.recipe-card2) {
    padding: 10px;
  }

  :deep(.recipe-card2-img-wrapper) {
    margin-bottom: 20px !important;
  }
  :deep(.recipe-card2-img) {
    border-radius: 50%
  }

  :deep(.recipe-card2-title) {
    margin-bottom: 0px !important;
  }

  :deep(.recipe-card2-title p) {
    line-height: 50px !important;
    font-size: 15px !important;
  }

}

</style>