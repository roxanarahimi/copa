<template>
  <main class="container-fluid p-0 m-0">
    <section class="section parallax1 row p-0 m-0">
      <!--      <video class="d-none d-md-block parallax1-video p-0" autoplay muted loop preload="auto" >-->
      <!--        <source src="/vdo/hero.mp4" type="video/mp4">-->
      <!--      </video>-->
      <!--      <video class=" d-md-none parallax1-video-mobile p-0" autoplay muted loop preload="auto">-->
      <!--        <source src="/vdo/hero-mobile.mp4" type="video/mp4">-->
      <!--      </video>-->

      <AdvancedVideo class="d-none d-md-block p-0" :cldVid="myVdo" autoplay muted loop/>
      <AdvancedVideo class="d-md-none p-0" :cldVid="myVdoMobile" autoplay muted loop/>
    </section>
    <section class="section infography" style="">
      <div style="align-self: center">
        <p class="infography-p1">فقـط خــواسـتیم بدونیـــد متعهـدیم</p>
        <h1 class="infography-h1">از بهترین مواد اولیه</h1>
        <p class="infography-p2">تو مــحصولات مــورد علاقــه شــما برای</p>
        <p class="infography-p3">هـــرســلیقه اســتفــاده می کـــنـــیم</p>
      </div>
    </section>
    <section class="section parallax2">
      <div class="row h-100">
        <div class="col-lg-12 text-center d-grid">

          <div class="" style="align-self: center">
            <h1 class="parallax2-h1">با کوپا روزت را بساز</h1>
            <button class="parallax2-btn "> توضیحات بیشتر</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section container-fluid p-0 m-0 row px-md-5 pb-5 justify-content-between"
             style="background-color: #006651">
      <div class="m-0 p-0 py-3 mb-5" style="background-color: #006651; min-height: 60px">
        <h3 class="title2 mt-5 pe-5 ms-5 d-inline">رسپی های کوپا </h3>

      </div>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-2 mb-3" :class="{'d-md-none d-lg-block': index === 3}"
           v-for="(item, index) in 4" :key="index">
        <recipe-card/>
      </div>


      <div class="text-center p-5">
        <router-link to="/recipes" class="btn btn-outline-light px-lg-5  ">
          رسپی های بیشتر
        </router-link>
      </div>

    </section>
    <section class="section">
      <logo-slider/>
    </section>
  </main>

</template>

<script>
// @ is an alias to /src
import categorySlider from '@/components/CategorySlider'
import recipeCard from '@/components/RecipeCard2'
import {onMounted, ref} from "vue";
import app from "@/App";
import LogoSlider from "@/components/LogoSlider";


import {AdvancedVideo} from '@cloudinary/vue';
import {Cloudinary} from "@cloudinary/url-gen";

export default {
  name: 'Home',
  components: {
    Cloudinary, AdvancedVideo,
    LogoSlider,
    categorySlider, recipeCard, app
  },
  setup() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: "dw4cidvdw",
      },
    });
    const myVdo = cld.video("pp1vuwaeiufxnn1ozets");
    const myVdoMobile = cld.video("mobile_400.800_peehvh");

    const foodSlides = ref()
    const getFoodSlides = () => {
      axios.get(app.setup().apiUrl + '/api/food/slides')
          .then((response) => {
            foodSlides.value = response.data;
          })
          .catch();
    }
    const scrollDown= (e)=>{
      if(e.key === 'ArrowDown'){
        let section = null;

        sections.forEach((element) => {
          let top = element.getBoundingClientRect().top;
          let height =  window.innerHeight * -1;
          if (top < 0 && top > height) {
            section = element;
            return false // "break"
          }
        });
        if (section !== null && section.nextSibling !== null && section.nextSibling.nodeName !== '#text'){
          section.nextSibling.scrollIntoView();
        }
      }
    }
    onMounted(() => {
      getFoodSlides();


      let sections = document.querySelectorAll('.section');


      document.addEventListener('keyup', (e)=>{ scrollDown(e);})

    })
    return {
      foodSlides, cld, myVdo, myVdoMobile,scrollDown
    }
  }

}
</script>
