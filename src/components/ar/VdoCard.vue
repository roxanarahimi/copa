<template>
<div class=" row px-3 mb-3" style="height: auto;">
  <div class="col-2  rounded-start  " style="position: relative; height: inherit !important" :style="{backgroundColor: color}">
    <div style="position:absolute; top: calc(50% - 25px); left:-25px;color:white; background-color: gray; width: 50px; height: 50px; align-self: center; border-radius: 5px">
      <i style="font-size: 50px; line-height: 50px;  " class="bi bi-play-fill"></i>
    </div>
  </div>
  <div class="col-10 p-0 m-0 rounded-end" style="background-color: #a4a4a4; overflow: hidden">
    <AdvancedVideo class="p-0 w-100" style="margin-bottom: -10px" :cldVid="myVdo" autoplay muted loop/>
  </div>
</div>
</template>

<script>
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedVideo} from "@cloudinary/vue";

export default {
  name: "VdoCard",
  props: [ 'color', 'vdo'],
  components: { Cloudinary, AdvancedVideo},
  setup(_props){
    const cld = new Cloudinary({
      cloud: {
        cloudName: "dpg1tz64p",
      },
    });
    const myVdo = cld.video(_props.vdo);
    return{
      cld, myVdo,
    }
  }

}
</script>

<style scoped>

</style>