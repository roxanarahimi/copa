<template>
  <main class="container-fluid sectionsWrapper p-0 m-0">
    <main-hero />
    <section class="section infography" style="">
      <div style="align-self: center">
        <p class="infography-p1">
          به دنیــایی پر از عشــــق و خوشـــمزگی به نام کوپا خــوش آمدیـد
          <br>
          با کوپا ما به یک داســتان هیـجان انگیـز شــما رو دعــوت می کنیم
          <br>
          در این دنیای جذاب و هیجان‌انگیـز هر قطره شیرینی به شما لبخند
          <br>
          می‌زند و هرلحظه از زندگیتان را به یک سفر شیرین تبدیل می‌کند
          <br>
          هــدف ما ایجــاد لحظـات شیــرین و لذت بخــش برای شما می باشد
        </p>

      </div>
    </section>
    <section class="section parallax2">
      <div class="row h-100">
        <div class="col-lg-12 text-center d-grid">

          <div class="" style="align-self: center">
            <h1 class="parallax2-h1">
              با کوپا
              <br class="d-lg-none">
              روزت را
              <br class="d-lg-none">
              بساز

            </h1>
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


import MainHero from "@/components/MainHero";

export default {
  name: 'Home',
  components: {
    MainHero,
    LogoSlider,
    categorySlider, recipeCard, app
  },
  setup() {

    const foodSlides = ref()
    const getFoodSlides = () => {
      axios.get(app.setup().apiUrl + '/api/food/slides')
          .then((response) => {
            foodSlides.value = response.data;
          })
          .catch();
    }

    const onScroll = () => {
      window.removeEventListener('scroll', onScroll)
      let sections = document.querySelectorAll('.section');
      let section = null;

      sections.forEach((element) => {
        let top = element.getBoundingClientRect().top;
        let height = window.innerHeight * -1;
        if (top < 0 && top > height) {
          section = element;
          return false // "break"
        }
      });
      if (section !== null && section.nextSibling !== null && section.nextSibling.nodeName !== '#text') {
        // document.removeEventListener('scroll', onScroll)
        // console.log('removeEventListener!');
        section.nextSibling.scrollIntoView();
      }

      setInterval(function () {
        sections.forEach((element)=>{
          if(element.getBoundingClientRect().top == 0){
            document.addEventListener('scroll', onScroll);
            return false // "break"
          }
        })
      }, 500);
    }
    const onKeyUP = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        let sections = document.querySelectorAll('.section');

        window.removeEventListener('scroll', onScroll)
        setInterval(function () {
          sections.forEach((element)=>{
            if(element.getBoundingClientRect().top == 0){
              document.addEventListener('scroll', onScroll);
              return false // "break"
            }
          })
        }, 200);

        let section = null;
        sections.forEach((element) => {
          let top = element.getBoundingClientRect().top;
          let height = window.innerHeight * -1;
          if (top < 0 && top > height) {
            section = element;
            return false // "break"
          }
        });
        if (section !== null && section.nextSibling !== null && section.nextSibling.nodeName !== '#text') {
          section.nextSibling.scrollIntoView();
        }
      }
    }

    onMounted(() => {
      getFoodSlides();
      window.addEventListener('scroll', onScroll)
      window.addEventListener('keyup', (e) => {
        onKeyUP(e)
      })

    })
    return {
      foodSlides, onScroll, onKeyUP
    }
  }

}
</script>
