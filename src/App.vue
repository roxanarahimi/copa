<template>
  <the-navbar-ar v-if="this.$route.fullPath.match('/ar/*')"/>
  <the-navbar v-else />
  <div class="container-fluid m-0 p-0" style="overflow-x: hidden; min-height: 100vh">
    <router-view/>
  </div>

  <the-footer-ar v-if="this.$route.fullPath.match('/ar/*')"/>
  <the-footer v-else />
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
import TheNavbarAr from "@/components/ar/TheNavbar";
import TheFooter from "@/components/TheFooter";
import TheFooterAr from "@/components/ar/TheFooter";

export default {
  components: {TheFooter, TheNavbar,TheFooterAr, TheNavbarAr,},
  setup(){
    const apiUrl = 'https://panel.copa.webagent.ir'
    return{
      apiUrl,
    }
  }
}
</script>
<style>

</style>
