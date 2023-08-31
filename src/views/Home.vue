<template>
  <main class="container-fluid sectionsWrapper p-0 m-0" >
    <main-hero />
    <section class="section infography" style="">
      <div style="align-self: center; text-align: center">
        <p class="infography-p1  mx-auto">
          به دنیایی پر از عشق و خوشمزگی به نام کوپا خوش آمدید
          با کوپا ما به یک داستان هیجان‌انگیز شما رو دعوت می‌کنیم
          در این دنیای جذاب و هیجان‌انگیز هر قطره شیرینی به شما لبخند می‌زند و هرلحظه از زندگیتان را به یک سفر شیرین تبدیل می‌کند
          هدف ما ایجاد لحظات شیرین ولذت بخش برای شما می‌باشد
        </p>
      </div>
    </section>
    <section class="section parallax2">
      <div class="row h-100">
        <div class="col-8 col-md-8 col-lg-5 mx-auto text-center d-grid h-100" style="backdrop-filter: blur(5px)">
          <div class="" style="align-self: center">
            <h1 class="parallax2-h1">
              با کوپا
              <br class="d-md-none">
              روزتو
              <br class="d-md-none">
              بساز
            </h1>
            <button class="parallax2-btn "> توضیحات بیشتر</button>
          </div>
        </div>
      </div>
    </section>
    <main-page-recipes />
    <section class="section">
      <logo-slider/>
    </section>
    <section class="section">
      <the-footer class="xoxo" />
    </section>

  </main>

</template>

<script>
// @ is an alias to /src
import categorySlider from '@/components/CategorySlider'
import {onMounted, onUnmounted, ref} from "vue";
import app from "@/App";
import LogoSlider from "@/components/LogoSlider";


import MainHero from "@/components/MainHero";
import TheFooter from "@/components/TheFooter";
import MainPageRecipes from "@/components/MainPageRecipes";

export default {
  name: 'Home',
  components: {
    MainPageRecipes,
    TheFooter,
    MainHero,
    LogoSlider,
    categorySlider, app
  },
  setup() {
    const onScroll = (e) => {
      // e.preventDefault();
      document.removeEventListener('scroll', onScroll)
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

        document.removeEventListener('scroll', onScroll)
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

      let footer =   document.querySelectorAll('footer');
      footer.forEach((el)=>{
        if(!el.classList.contains('xoxo')) {
          el.classList.add('d-none');
        }
      })
    });
    onUnmounted(()=>{

      let footer =   document.querySelectorAll('footer');
      footer.forEach((el)=>{
        el.classList.remove('d-none');
      })
    });
    return {
       onScroll, onKeyUP
    }
  }

}
</script>
