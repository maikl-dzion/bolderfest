<template>
    <div>
       <pre>{{siteMenu}}</pre>
    </div>
</template>

<script>
import ServicesLoader from "@/mixins/ServicesLoader";

export default {
  name: "LeftSidebar",
  mixins: [ServicesLoader],
  data() {
      return {
          siteMenu : [],
      }
  },

  created() {
      this.getSiteMenu();
  },

  methods: {

      getSiteMenu() {
            let uri = '/MainBolderfest/siteMenu';
            this.http(uri).then(resp => {
                this.siteMenu = resp;
            });       
      }

  },

};
</script>

<style scoped >
     
</style>