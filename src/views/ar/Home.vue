<template>
  <main class="container-fluid sectionsWrapper p-0 m-0">
    <main-hero/>
    <section class="section infography px-4 px-md-0" style="">
      <div style="align-self: center; text-align: center" class="">
        <p class="infography-p1  mx-auto px-5 px-md-0">
          مرحباً بك في عالم مليء بالحب واللذة يدعى كوبا
          مع كويا ندعوك إلى قصة مثيرة في هذا العالم الرائع والمثير، كل قطرة من الحلاوة ستجعلك تبتسم وتحول كل لحظة من
          حياتك إلى رحلة حلوة. هدفنا هو خلق لحظات حلوة وممتعة بالنسبة لك
        </p>
      </div>
    </section>
    <section class="section parallax2">
      <div class="row h-100">
        <div class="col-8 col-md-8 col-lg-5 mx-auto text-center d-grid h-100" style="backdrop-filter: blur(5px)">
          <div class="about1" style="align-self: center">
            <h1 class="parallax2-h1">
              أبني
              <br class="d-md-none">
              يومك
              <br class="d-md-none">
              مع كوبا
            </h1>
            <button class="parallax2-btn" @click="showAboutTxt"> المزيد من التفاصيل</button>
          </div>
          <div class="about2 d-none" style="align-self: center">
            <h2 class="parallax2-h1">حول كوبا</h2>
            <p class="px-lg-5" style="font-size: 18px; font-weight: 400; text-align: justify">كوبا هي العلامة التجارية الرئيسية لمجموعة المنتجات
              شركة شيرين جاهزة ولذيذة. مصنع لازيد 2 جاهز في ربيع 2014 لإنتاج جميع أنواع البسكويت.
              بدأت الرقائق وشوكولاتة الإفطار والعلكة والهلام وما إلى ذلك في العمل مع العلامة التجارية الرئيسية Kopa. والغرض من إنتاج هذه المنتجات هو العرض
              المنتجات ذات الجودة والمعايير العالمية متاحة للمستهلكين الإيرانيين الأعزاء.</p>
          </div>
        </div>
      </div>
    </section>
    <main-page-recipes/>
    <section class="section">
      <logo-slider/>
    </section>
    <section class="section">
      <the-footer class="xoxo"/>
    </section>

  </main>

</template>

<script>
// @ is an alias to /src
import categorySlider from '@/components/ar/CategorySlider'
import {onMounted, onUnmounted, ref} from "vue";
import app from "@/App";
import LogoSlider from "@/components/ar/LogoSlider";


import MainHero from "@/components/ar/MainHero";
import TheFooter from "@/components/ar/TheFooter";
import MainPageRecipes from "@/components/ar/MainPageRecipes";

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
        sections.forEach((element) => {
          if (element.getBoundingClientRect().top == 0) {
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
          sections.forEach((element) => {
            if (element.getBoundingClientRect().top == 0) {
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

    const showAboutTxt = () => {
      document.querySelector('.about1').classList.add('d-none');
      document.querySelector('.about2').classList.remove('d-none');
    }
    onMounted(() => {

      let footer = document.querySelectorAll('footer');
      footer.forEach((el) => {
        if (!el.classList.contains('xoxo')) {
          el.classList.add('d-none');
        }
      });

    });
    onUnmounted(() => {

      let footer = document.querySelectorAll('footer');
      footer.forEach((el) => {
        el.classList.remove('d-none');
      })
    });
    return {
      onScroll, onKeyUP, showAboutTxt
    }
  }

}
</script>
