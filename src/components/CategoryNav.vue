<template>
  <div class="d-flex justify-content-center">
    <div style="box-shadow: 1px 2px lightgrey"
         class="d-none d-lg-block d-lg-flex justify-content-lg-between  category-nav-mobile m-5">
      <span data-id="all" @click="getData" class="category-nav-span d-inline-block mx-3 text-center category-nav-active">همه محصولات</span>
      <span :data-id="item.id" v-for="(item, index) in categories" :key="index" @click="getDataByCat(item.id)" class="category-nav-span d-inline-block mx-3 text-center">{{ item.title }}</span>

    </div>
    <div style="box-shadow: 1px 2px lightgrey" class="d-lg-none category-nav m-5">
      <div class="row">
        <div data-flag="1" @click="categoryNavToggle" style="position:relative;"
             class="cursor-pointer category-nav-mobile-btn col-4 d-flex justify-content-between border-end">
          <span class="all_li">همه</span>
          <i class="bi bi-chevron-down"></i>
          <div class="category-nav-mobile-options"
               style="opacity:0;position: absolute; top:50px;  right:0; background-color: #FFE7D7; width: 100%; border-radius: 5px; z-index: 200">
            <ul class="px-3 ">
              <li data-id="all" @click="getData" class="category-nav-li">همه</li>
              <li :data-id="item.id" @click="getDataByCat(item.id)" v-for="(item, index) in categories" :key="index" class="category-nav-li">{{ item.title }}</li>
            </ul>
          </div>
        </div>
        <div class="col-8">
          <input class="border-0" placeholder="جستجوی محصول" type="text"
                 style="height: 35px; background-color: transparent">
        </div>
      </div>
    </div>
  </div>

</template>

<script>

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
    }
    const getDataByCat = (id) => {
      _props.getDataByCat(id);
    }

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
</style>