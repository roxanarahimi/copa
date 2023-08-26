<template>
  <div class="d-flex justify-content-center">
    <!--        style="box-shadow: 1px 2px lightgrey"-->
    <div class="d-none d-lg-block d-lg-flex justify-content-lg-between  category-nav-mobile m-5">
      <span data-id="all" @click="getData" class="category-nav-span d-inline-block mx-3 text-center category-nav-active">همه محصولات</span>
      <span :data-id="item.id" v-for="(item, index) in categories" :key="index" @click="getDataByCat(item.id)" class="category-nav-span d-inline-block mx-3 text-center">{{ item.title }}</span>
    </div>
    <div class="d-lg-none category-nav my-5 mx-3"  style="position:relative;">
      <div class="row p-0">
        <div data-flag="1" @click="categoryNavToggle" class="col-6 category-nav-select-btn cursor-pointer category-nav-mobile-btn d-flex justify-content-between border-end"  style="padding: 0 25px 0 5px">
          <div   @click="categoryNavToggle" class="all_li">همه</div>
          <i class="bi bi-chevron-down"></i>
        </div>
        <div class="col-6 search-area">
          <input class="border-0" placeholder="جستجوی محصول" type="text"
                 style="height: 35px; background-color: transparent">
        </div>
        <div class="category-nav-mobile-options w-50"
                             style="opacity:0;position: absolute; top:50px;  right:0; background-color: whitesmoke; width: 100%; border-radius: 5px; z-index: 200">
        <ul class="px-3 ">
          <li data-id="all" @click="getData" class="category-nav-li">همه</li>
          <li :data-id="item.id" @click="getDataByCat(item.id)" v-for="(item, index) in categories" :key="index" class="category-nav-li">{{ item.title }}</li>
        </ul>
      </div>
      </div>
    </div>
  </div>

</template>

<script>

import {onMounted} from "vue";

export default {
  name: "CategoryNav",
  props: [
    'getData', 'getDataByCat', 'categories'
  ],
  setup(_props) {
    const categoryNavToggle = () => {
      let flag = document.querySelector('.category-nav-mobile-btn').getAttribute('data-flag');
      if (flag == 0) {
        document.querySelector('.category-nav-mobile-options').style.opacity = '0';
        document.querySelector('.category-nav-mobile-btn').setAttribute('data-flag', 1);
      } else {
        document.querySelector('.category-nav-mobile-options').style.opacity = '1';
        document.querySelector('.category-nav-mobile-btn').setAttribute('data-flag', 0);

      }
    };

    const getData = () => {
      _props.getData();
      categoryNavToggle();
    }
    const getDataByCat = (id) => {
      _props.getDataByCat(id);
      categoryNavToggle();

    }
    onMounted(()=>{
      document.addEventListener('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (!(
            target.classList.contains('nav-category') ||
            target.classList.contains('nav-category-select-btn') ||
            target.classList.contains('form-control') ||
            target.classList.contains('bi-chevron-down') ||
            // target.classList.contains('all_li')||
            target.classList.contains('category-nav-li')||
            target.classList.contains('category-mobile-nav-options')
            )
            && document.querySelector('.category-nav-mobile-btn')
            && document.querySelector('.category-nav-mobile-btn').getAttribute('data-flag') == 0) {
            categoryNavToggle();
          }

      });

    })

    return {
      categoryNavToggle, getData, getDataByCat,
    }
  }
}
</script>

<style scoped>
.category-nav-span{
  cursor: pointer;
}

.category-nav-li{
  cursor: pointer;
}
.category-nav,
.category-nav-mobile {
  /*background-color: #FFE7D7;*/
  background-color: whitesmoke;
  border-radius: 14px;
  /*padding: 0px 20px;*/
  width: 700px;
  min-height: 43px;
  margin: 0 auto;
  font-size: 16px;

  line-height: 43px;
}

.category-nav span {
  text-wrap: none;
  cursor: pointer;
}

:deep(.category-nav-active) {
  border-radius: 10px;
  font-weight: 600;
  color: white;
  background-color: #3a3a3a;
  height: 33px;
  padding: 4px 12px;
  margin: 4px;
  text-wrap: none;

  line-height: 25px;
}
</style>