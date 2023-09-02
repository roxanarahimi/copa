<template>

  <main class="container-fluid p-0 m-0">
<!--    <div class="parallax3" style="height: 100vh; background-color: #11a142">-->
    <div class="parallax3" style="height: auto">

      <img src="/img/probgg.png" class="d-none d-sm-block img-fluid w-100" alt="">
      <img src="/img/probgg2.png" class="d-sm-none img-fluid w-100" alt="">

    </div>
    <category-nav :categories="categories" :getData="getData" :getDataByCat="getDataByCat"/>
    <div class="contents-area">
      <div v-if="data.length" class="container-fluid p-0 m-0 row p-md-5">
        <div class="col-6 col-md-6 col-lg-4 col-xl-3 " v-for="(item, index) in data" :key="index">
          <product-card :product="item"/>
        </div>
      </div>
      <div v-else class="text-center mb-5">
        <p>محصولی موجود نمیباشد</p>
      </div>
    </div>


  </main>
</template>

<script>
import productCard from "@/components/ProductCard";
import productHeroSlider from "@/components/ProductHeroSlider";
import CategoryNav from "@/components/CategoryNav";
import {onMounted, ref} from "vue";
import app from "@/App";

export default {
  components: {
    CategoryNav,
    productCard,
    productHeroSlider,
  },
  setup() {
    const data = ref([]);
    const categories = ref([]);

    const getCategories = () => {
      axios.get(app.setup().apiUrl + '/api/category/product')
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
      console.log(categories.value)
    };
    const getData = () => {
      data.value = [];
      axios.get(app.setup().apiUrl + '/api/product')
          .then((response) => {
            data.value = response.data;
          })
          .catch((error) => { console.log(error) })
    };
    const getDataByCat = (id) => {
      data.value = [];
      axios.get(app.setup().apiUrl + '/api/product/by/category/'+id)
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
      data, categories, getData, getDataByCat, getCategories,
    }
  },

}
</script>

<style scoped>

</style>