<template>

  <main class="container-fluid p-0 m-0" style="font-family: YekanBakh;">
    <div class="row container-fluid p-0 m-0 justify-content-center">
    <div class="col-9 col-lg-8 ">

      <h3 class="title3 position-relative" style="margin-top: 100px; font-family: YekanBakhExtraBold">
        تیزر های کوپا

        <div style="position:absolute; top: 0; right:-60px;color:white; background-color: gray; width: 50px; height: 50px; align-self: center; border-radius: 5px">
          <i style="font-size: 50px; line-height: 50px;  " class="bi bi-play-fill"></i>
        </div>

      </h3>
      <p class="fw-bold" style="text-align: justify">
<!--        قالب دلخواه را کمی چرب کنید.این کیک نیازی به فر ندارد و کافی است آن را داخل یخچال قرار دهید.شیر را گرم کنید و دو قاشق ژلاتین را داخل آن حل کنید.شیر گرم به همراه ژلاتین را به همراه شکلات داخل ظرف دیگری کاملا مخلوط کنید.بیسکوییت‌‌، گردو و موز‌ها را کمی خرد کنید و داخل مخلوط شکلات بریزید.مواد را داخل قالب بریزید و به مدت 3 ساعت داخل فریزر قرار دهید.بعد از 3 ساعت از فریزر خارج کنید و در یخچال نگه‌داری کنید.-->
      </p>



      <teaser-card color="#ff315b" vdo="pp1vuwaeiufxnn1ozets" />
      <teaser-card color="#e35fe8" vdo="pp1vuwaeiufxnn1ozets" />
      <teaser-card color="#ffde27" vdo="pp1vuwaeiufxnn1ozets" />
    </div>


    </div>



  </main>
</template>

<script>
import TeaserSlider from "@/components/TeaserSlider";
import TeaserCard from "@/components/VdoCard";
import {AdvancedVideo} from '@cloudinary/vue';
import {Cloudinary} from "@cloudinary/url-gen";


export default {
  name: "Teasers",
  components: {TeaserCard, TeaserSlider}
}
</script>

<style scoped>

</style>