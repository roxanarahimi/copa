<template>
  <section class="section parallax1 row p-0 m-0">
    <!--      <video class="d-none d-md-block parallax1-video p-0" autoplay muted loop preload="auto" >-->
    <!--        <source src="/vdo/hero.mp4" type="video/mp4">-->
    <!--      </video>-->
    <!--      <video class=" d-md-none parallax1-video-mobile p-0" autoplay muted loop preload="auto">-->
    <!--        <source src="/vdo/hero-mobile.mp4" type="video/mp4">-->
    <!--      </video>-->

    <AdvancedVideo class="d-none d-lg-block p-0 vdoDesktop" :cldVid="myVdo" autoplay muted loop />
    <AdvancedVideo class="d-none d-md-block d-lg-none p-0 " :cldVid="myVdoTablet" autoplay muted loop/>
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
        cloudName: "dpg1tz64p",
      },
    });
    // const myVdo = cld.video("pp1vuwaeiufxnn1ozets");
    // const myVdoMobile = cld.video("mobile_400.800_peehvh");

    const myVdo = cld.video("copa/dd");
    const myVdoTablet = cld.video("copa/tt");
    const myVdoMobile = cld.video("copa/mm");
    return{
      cld, myVdo, myVdoTablet, myVdoMobile,
    }
  }
}
</script>

<style scoped>

</style>