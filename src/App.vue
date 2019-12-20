<template>
  <div id="app-container" class="app-container" >

    
     <!-- <div style='grid-area: top /  left / height / width ; border:2px green solid'>1111</div> -->
     <div class="header-container" >
          <img src="./assets/img/logo.png" />
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
import ServicesLoader from "@/mixins/ServicesLoader";
import LeftSidebar    from "@/components/LeftSidebar";

export default {
  name: "App",
  mixins: [ServicesLoader],
  data() {
      return {
         
      };
  },

  methods: {
     
  },

  components: { 
    LeftSidebar 
  },

};
</script>

<style lang="scss" >

    // @import "assets/css/btn.css";

</style>
