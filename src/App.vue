<template>
  <div id="app-wrapper" class="app-wrapper" >

     <!-- <div style='grid-area: top /  left / height / width ; border:2px green solid'>1111</div> -->
     <div class="header-container" >

          <img src="./assets/img/logo.png" style="margin:0px 10px 0px 0px"/>
          <router-link to="/"      style="margin:0px 10px 0px 20px" >Главная</router-link> 
          <router-link to="/users" style="margin:0px 10px 0px 10px" >Пользователи</router-link> 
          <router-link to="/auth"  style="margin:0px 10px 0px 10px" >Авторизация</router-link>

     </div>

    <!-- 
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>   -->

    <!-- <div class="left-sidebar"  >
         <LeftSidebar/>
    </div>

    <div class="main-content" >
         <router-view/>
    </div>

    <div class="right-sidebar"  >
         right
    </div>

    <div class="footer-container"  >
         footer
    </div> -->

     <router-view/>

  </div>
</template>

<script>
// import MixinsLoader from "@/mixins/MixinsLoader";
// import LeftSidebar    from "@/components/LeftSidebar";

export default {
  name: "App",
  // mixins: [MixinsLoader],
  data() {
      return {
         
      };
  },

  methods: {
     
  },

  components: { 
     // LeftSidebar 
  },

};
</script>

<style lang="scss" >

    // @import "assets/css/btn.css";

</style>
