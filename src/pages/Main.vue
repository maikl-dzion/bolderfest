<template>
  <div class="page-container main-page" >
        
    <!-- <div style='grid-area: top /  left / height / width ; border:2px green solid'>1111</div> -->
     <div class="header-container" >
          <img src="../assets/img/logo.png" />
     </div>

    <!-- 
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>   -->

    <div class="left-sidebar"  >
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
    </div>

  </div>
</template>

<script>

import Services from "@/services";
import LeftSidebar    from "@/components/LeftSidebar";

export default {
  name: "MainPage",
  mixins: [Services],
  data() {
    return {

    }
  },

  created() {
     // this.userFormOpen();
  },

  methods : {

  },

  components: { 
     LeftSidebar 
  },

};
</script>

<style>

</style>
