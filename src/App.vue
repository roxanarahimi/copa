<template>

  <the-navbar/>
  <div class="container-fluid m-0 p-0">
    <router-view/>
  </div>

    <the-footer />
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  components: {TheFooter, TheNavbar},
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
