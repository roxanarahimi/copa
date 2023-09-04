<template>
  <!--  <i class="bi bi-search " style="font-size: 35px"></i>-->
  <header class="p-0" style="z-index: 100000; position: fixed">
    <nav id="nav" class="navbar d-none d-lg-block navbar-expand navbar-dark px-xxl-5" style="background: transparent; color: white">
      <div class="container-fluid">
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="row collapse navbar-collapse " id="navbarText">
          <ul class="col-lg-5 px-lg-0 navbar-nav p-0 mb-2 mb-lg-0 " style="margin-top: 12px !important">
            <li class="nav-item">
              <router-link to="/" class="nav-link nav-link-white" aria-current="page">خانه</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link nav-link-white">محصولات</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recipes" class="nav-link nav-link-white">دستور پخت</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link nav-link-white">درباره ما</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/teasers" class="nav-link nav-link-white">تیزر ها</router-link>
            </li>
          </ul>
          <div class="nav-logo d-none col-lg-2 text-center" style="position: relative">
            <img src="/img/logo.png" style="width:120px; position: absolute; top:-10px; right: 50px" alt="">
          </div>
          <div class="col-lg-5 nav-logo d-none  px-lg-0 d-flex justify-content-end ">
            <div class="d-flex">
              <input type="text" class="form-control my-2 rounded-0" id="search" style="height: 40px">
              <span class="mx-2 mt-2 cursor-pointer"><i class="bi bi-search text-black"
                                                        style="font-size: 35px"></i></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="nav-mobile" style="position: fixed; top:0; z-index: 1 !important;" class="mobile-shadow-bg d-lg-none row p-0 m-0 w-100">
      <div class="col-4">
        <button class="btn border-0 nav-mobile-btn" @click="sideMenuToggle" data-flag="0"
                style="font-size: 30px !important" type="button">
          <i class="bi bi-list i-list text-light"></i>
        </button>
      </div>
      <div class="col-4 text-center py-2">
        <img src="/img/logo.png" style="width: 70px" alt="">
      </div>
      <div @click="searchAreaToggle" data-flag="0" class="search_btn col-4 d-flex justify-content-end">
        <i class="bi bi-search mt-2 nav-link nav-link-white " style="font-size: 30px !important"></i>
      </div>


    </div>

    <div class="d-lg-none vh-100 side-menu side-menu-start" style="position: fixed; top:0; right: -300px; height: 100vh">
      <div class="py-0 px-3">
        <button class="btn border-0 " @click="sideMenuToggle" style="font-size: 30px !important">
          <i class="bi bi-list i-list text-light"></i>
        </button>
      </div>
      <div class="side-menu-body d-grid" style="height: calc(100vh - 150px)">
        <ul class="side-menu-ul">
          <li @click="sideMenuToggle">
            <router-link class=" side-menu-navlink" to="/"><img src="/img/house.png" class="m-2" alt="">خانه
            </router-link>
          </li>
          <li @click="sideMenuToggle">
            <router-link class=" side-menu-navlink" to="/products"><img src="/img/cookie.png" class="m-2" alt="">محصولات
            </router-link>
          </li>
          <li @click="sideMenuToggle">
            <router-link class=" side-menu-navlink" to="/recipes"><img src="/img/cake.png" class="m-2" alt="">دستور پخت
            </router-link>
          </li>
          <li @click="sideMenuToggle">
            <router-link class=" side-menu-navlink" to="/about"><img src="/img/people.png" class="m-2" alt="">درباره ما
            </router-link>
          </li>
          <li @click="sideMenuToggle">
            <router-link class=" side-menu-navlink" to="/teasers"><img src="/img/YouTube.png" class="m-2" alt="">تیزر ها
            </router-link>
          </li>
        </ul>

        <div class="side-menu-footer">
          <hr class="side-menu-hr">
          <div class="d-flex justify-content-between px-4">
            <img src="/img/instagram.png" width="34px" alt="">
            <img src="/img/telegram.png" width="34px" alt="">
            <img src="/img/facebookF.png" width="34px" alt="">

          </div>
          <hr class=" side-menu-hr">
        </div>


      </div>
    </div>

    <div class="side-menu-back d-none"
         style="z-index: 100; position: absolute; top: 0; right: 0; height: 100vh; width: 100vw !important; background-color: rgba(0,0,0,0.49)"></div>
  </header>
  <div class="p-2 w-100 search-area"
       style="position: fixed; left:0; top:55px;transition:all 1s ease; z-index:2000; opacity: 0">
    <input type="text" class="form-control ">
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  mounted() {


    window.addEventListener('scroll', () => {

      if (window.scrollY > 100) {
        this.showMenu2();
      } else {
        this.showMenu1();
      }

    });
    setTimeout(() => {
      document.querySelector('.sectionsWrapper')?.addEventListener('scroll', () => {
        if (document.querySelector('.sectionsWrapper').scrollTop > 100) {
          this.showMenu2();
        } else {
          this.showMenu1();
        }
      });
    }, 1000)

    document.querySelector('.side-menu-back').addEventListener('click', function (e) {

      if (document.querySelector('.nav-mobile-btn').getAttribute('data-flag') == 1) {
        document.querySelector('.side-menu-back').classList.add('d-none');
        document.querySelector('.side-menu').style.right = '-300px';
        document.querySelector('.nav-mobile-btn').setAttribute('data-flag', 0);
      }

    });


  },
  methods: {

    showMenu1() {
      document.querySelector('#nav').classList.add('navbar-dark');
      document.querySelector('#nav').classList.remove('navbar-light');
      document.querySelector('#nav').classList.remove('bg-light');
      document.querySelectorAll('.nav-logo').forEach((element) => {
        element.classList.add('d-none');
      })
      document.querySelectorAll('.nav-link').forEach((element) => {
        element.classList.add('nav-link-white')
      })
      document.querySelector('#nav-mobile').classList.add('mobile-shadow-bg');
      document.querySelector('#nav-mobile').classList.remove('bg-light');
      document.querySelector('.i-list').classList.add('text-light');
      document.querySelectorAll('.li-cover').forEach((element) => {
        element.classList.remove('d-none');
      })

    },
    showMenu2() {
      document.querySelector('#nav').classList.remove('navbar-dark');
      document.querySelector('#nav').classList.add('navbar-light');
      document.querySelector('#nav').classList.add('bg-light');
      document.querySelectorAll('.nav-logo').forEach((element) => {
        element.classList.remove('d-none');
      });
      document.querySelectorAll('.nav-link').forEach((element) => {
        element.classList.remove('nav-link-white')
      })

      document.querySelector('#nav-mobile').classList.remove('mobile-shadow-bg');
      document.querySelector('#nav-mobile').classList.add('bg-light');
      document.querySelector('.i-list').classList.remove('text-light');

      document.querySelectorAll('.li-cover').forEach((element) => {
        element.classList.add('d-none');
      })

    },
    sideMenuToggle() {
      let flag = document.querySelector('.nav-mobile-btn').getAttribute('data-flag');
      if (flag == 0) {
        document.querySelector('.side-menu-back').classList.remove('d-none');
        document.querySelector('.side-menu').style.right = '0';
        document.querySelector('.nav-mobile-btn').setAttribute('data-flag', 1);
      } else {
        document.querySelector('.side-menu-back').classList.add('d-none');
        document.querySelector('.side-menu').style.right = '-300px';
        document.querySelector('.nav-mobile-btn').setAttribute('data-flag', 0);

      }
    },
    searchAreaToggle() {
      let flag = document.querySelector('.search_btn').getAttribute('data-flag');
      if (flag == 0) {
        document.querySelector('.search-area').style.opacity = '0';
        document.querySelector('.search_btn').setAttribute('data-flag', 1);
      } else {
        document.querySelector('.search-area').style.opacity = '1';
        document.querySelector('.search_btn').setAttribute('data-flag', 0);

      }
    },
  }
}
</script>

<style scoped>

.mobile-shadow-bg{
  background: linear-gradient(rgba(0,0,0,0.47), transparent)
}
.nav-item {
  position: relative;
  margin: 2px;

}

.nav-link-white {
  color: white !important;
  z-index: 2000;
}
.nav-link-white:not(.bi-search) {
  background-color: rgba(0, 0, 0, 0.2);
}

.side-menu-navlink {
  font-size: 21px !important;
}

.side-menu-navlink img {
  width: 30px !important;
  margin-right: 35px !important;
}

</style>