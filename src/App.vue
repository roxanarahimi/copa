<template>

  <the-navbar/>
  <div class="container-fluid m-0 p-0" style="overflow-x: hidden; min-height: 100vh">
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
    const apiUrl = 'http://localhost:8000';

    return{
      apiUrl,
    }
  }
}
</script>
<style>

</style>
