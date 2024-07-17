<template>
  <div class="d-flex justify-content-center">
    <!--        style="box-shadow: 1px 2px lightgrey"-->
    <div class="d-none d-lg-block d-lg-flex justify-content-lg-between  category-nav-mobile m-5">
      <span data-id="all" @click="getData('')" class="category-nav-span d-inline-block mx-3 text-center category-nav-active">جميع المنتجات</span>
      <span :data-id="item.id" v-for="(item, index) in categories" :key="index" @click="getData(item.id)"
            class="category-nav-span d-inline-block mx-3 text-center">{{ item.title_ar }}</span>

    </div>
    <div class="d-lg-none category-nav my-5 mx-3" style="position:relative;">
      <div class="row p-0">
        <div @click="categoryNavToggle" data-flag="1"
             class="col-6 category-nav-select-btn  justify-content-between cursor-pointer category-nav-mobile-btn d-flex justify-content-between border-end"
             style="padding: 0 25px">
          <div class="all_li d-block pe-5" style="width: calc(100% - 20px)">کل</div>
          <i class="bi bi-chevron-down d-block" style="width: 20px"></i>
        </div>
        <div class="col-6 search-area">
          <input class="border-0" placeholder="بحث منتوج" type="text"
                 style="height: 35px; background-color: transparent">
        </div>
        <div class="category-nav-mobile-options d-none w-50">
          <ul class="px-3 ">
            <li data-id="all" @click="getData('')" class="category-nav-li">کل</li>
            <li :data-id="item.id" @click="getData(item.id)" v-for="(item, index) in categories" :key="index"
                class="category-nav-li">{{ item.title_ar }}
            </li>
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
    'getData', 'categories'
  ],
  setup(_props) {
    const categoryNavToggle = () => {
      if (document.querySelector('.category-nav').getBoundingClientRect().top > window.innerHeight * 60 / 100) {

        document.querySelector('.category-nav-mobile-options').removeAttribute('style');
        document.querySelector('.category-nav-mobile-options').setAttribute('style','bottom:50px');
      } else {
        document.querySelector('.category-nav-mobile-options').removeAttribute('style');
        document.querySelector('.category-nav-mobile-options').setAttribute('style','top:50px');

      }
      let flag = document.querySelector('.category-nav-mobile-btn').getAttribute('data-flag');
      if (flag == 0) {
        document.querySelector('.category-nav-mobile-options').classList.add('d-none');
        document.querySelector('.category-nav-mobile-btn').setAttribute('data-flag', 1);
      } else {
        document.querySelector('.category-nav-mobile-options').classList.remove('d-none');
        document.querySelector('.category-nav-mobile-btn').setAttribute('data-flag', 0);
      }
    };

    const getData = (id) => {
      let myPromise = new Promise(function(resolve, reject) {
        _props.getData(id);
        resolve();
        reject();
      });
      myPromise.then(
          function(value) {
              handleCategoryNav();
          },
          function(error) { console.log(error) }
      );
      categoryNavToggle();
    }

    const handleCategoryNav = ()=>{
      document.querySelectorAll('.category-nav-span').forEach((element) => {
        element.addEventListener('click', () => {
          document.querySelector('.category-nav-active').classList.remove('category-nav-active');
          element.classList.add('category-nav-active');
          document.querySelector('.all_li').innerHTML=element.innerHTML;
        })
      });
      document.querySelectorAll('.category-nav-li').forEach((element) => {
        element.addEventListener('click', () => {
          document.querySelector('.all_li').innerHTML=element.innerHTML;
          document.querySelector('.category-nav-active').classList.remove('category-nav-active');
          document.querySelectorAll('.category-nav-span').forEach((el) => {
            if (el.getAttribute('data-id') == element.getAttribute('data-id')){
              el.classList.add('category-nav-active');
            }
          });

        })
      });
    }

    const handleMobileNav = ()=>{
      document.addEventListener('click', function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (!(
                target.classList.contains('nav-category') ||
                target.classList.contains('nav-category-select-btn') ||
                target.classList.contains('form-control') ||
                target.classList.contains('bi-chevron-down') ||
                target.classList.contains('all_li') ||
                target.classList.contains('category-nav-li') ||
                target.classList.contains('category-mobile-nav-options')
            )
            && document.querySelector('.category-nav-mobile-btn')
            && document.querySelector('.category-nav-mobile-btn').getAttribute('data-flag') == 0) {
          categoryNavToggle();
        }

      });
    }
    onMounted(() => {
      handleMobileNav()
    })

    return {
      categoryNavToggle, getData, handleCategoryNav, handleMobileNav

    }
  }
}
</script>

<style scoped>
.category-nav-mobile-options {
  position: absolute;
  right: 0;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 5px;
  z-index: 200;
}

.category-nav-span {
  cursor: pointer;
}

.category-nav-li {
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