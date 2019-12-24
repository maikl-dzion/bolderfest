<template>
    <div>
       <!-- <pre>{{siteMenu}}</pre> -->

       <div style="display:block; padding:2px;" >
           <img @click="siteMenuShow=!siteMenuShow" src="../assets/img/lm_prog.gif" 
               style="margin:2px; border:0px white solid; cursor:pointer" >

           <img @click="userRegisterOpen(2)" src="../assets/img/icon_reg.gif" 
               style="margin:2px 2px 2px 10px; border:0px white solid; cursor:pointer;" >

           <!-- <img src="../assets/img/icon_2.png"  style="margin:2px; border:1px white solid;" > -->
       </div>

       <transition name="siteMenu" >
            <ul v-if="siteMenuShow" class="demo-list-icon mdl-list" style="background:white; margin:0px; padding:0px;" >
                <template v-for="(menu, url) in siteMenu" >

                    <li :key="url" class="mdl-list__item"  style="margin:0px; padding:0px; min-height:0px">
                        <a :href="'http://' + url" class="mdl-list__item-primary-content" target="_target" style="margin:0px; padding:0px; min-height:0px" >
                        <i class="material-icons mdl-list__item-icon" style="margin:0px; padding:0px;" >bookmark_border</i>
                        {{menu.title}}
                        </a>
                    </li>

                    <li v-if="menu.submenu" :key="url + '-456'" style="margin:0px; padding:0px;" >
                        <ul style="margin:0px 0px 0px 40px; padding:0px;" >
                                <li v-for="(title, link) in menu.submenu" :key="link" class="mdl-list__item" style="margin:0px; padding:0px; min-height:0px">
                                    <a :href="link" class="mdl-list__item-primary-content" target="_target" style="margin:0px; padding:0px;" >
                                    <i class="material-icons mdl-list__item-icon" style="margin:0px; padding:0px;" >bookmark_border</i>
                                    {{title}}
                                    </a>
                                </li>
                        </ul>  
                    </li>   

                </template>
            </ul>
       </transition>

    </div>
</template>

<script>
import MixinsLoader from "@/mixins/MixinsLoader";
// import StoreServices  from "@/mixins/StoreServices";

export default {
  name: "LeftSidebar",
  mixins: [MixinsLoader],
  data() {
      return {
          // siteMenu : [],
          siteMenuShow : false,
      }
  },

  created() {
      this.getSiteMenu();
  },

  methods: {

    //   getSiteMenu() {
    //         let uri = '/MainBolderfest/siteMenu';
    //         this.http(uri).then(resp => {
    //             this.siteMenu = resp;
    //         });       
    //   }

  },

};
</script>

<style scoped >
     
</style>