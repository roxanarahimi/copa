<template>
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
</template>

<script>

import {AdvancedVideo} from '@cloudinary/vue';
import {Cloudinary} from "@cloudinary/url-gen";

export default {
  name: "MainHero",
  components: {Cloudinary, AdvancedVideo},
  setup(){
    const cld = new Cloudinary({
      cloud: {
        cloudName: "dw4cidvdw",
      },
    });
    const myVdo = cld.video("pp1vuwaeiufxnn1ozets");
    const myVdoMobile = cld.video("mobile_400.800_peehvh");
    return{
      cld, myVdo, myVdoMobile,
    }
  }
}
</script>

<style scoped>

</style>