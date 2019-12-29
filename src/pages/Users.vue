<template>
  <div class="page-container main-page" style="background:none">
    <!-- <div style='grid-area: top /  left / height / width ; border:2px green solid'>1111</div> -->
    <div class="header-container">
      <img src="../assets/img/logo.png" />
    </div>

    <div class="left-sidebar">
      <LeftSidebar />
    </div>

    <pre>{{userFormData}}</pre>

    <div class="main-content">
      <div v-if="addUserForm" style="border:1px gainsboro solid; background: white; padding:5px">

        <form action="#" style>
          <div>
            <div class="mdl-textfield mdl-js-textfield" style="width:50%">
              <input v-model="userFormData.login" class="mdl-textfield__input" type="text" />
              <label class="mdl-textfield__label" for="sample1">Логин</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield" style="width:50%">
              <input v-model="userFormData.password" class="mdl-textfield__input" type="text" />
              <label class="mdl-textfield__label" for="sample1">Пароль</label>
            </div>
          </div>

          <div>
            <div class="mdl-textfield mdl-js-textfield" style="width:50%">
              <input v-model="userFormData.username" class="mdl-textfield__input" type="text" />
              <label class="mdl-textfield__label" for="sample1">Имя пользователя</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield" style="width:50%">
              <input v-model="userFormData.email" class="mdl-textfield__input" type="text" />
              <label class="mdl-textfield__label" for="sample1">Email</label>
            </div>
          </div>

          <button @click="save()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Сохранить
          </button> 

        </form>
      </div>
    </div>

    <div class="right-sidebar">right</div>

    <div class="footer-container">footer</div>

  </div>
</template>

<script>
import Services from "@/services";
import LeftSidebar from "@/components/LeftSidebar";

export default {
  name: "MainPage",
  mixins: [Services],
  data() {
    return {
      addUserForm: false,

      className : 'UserController',

      userFormData: {
          username: "",
          login: "",
          password: "",
          email: "",
          role : 2,
      },

    }
  },

  created() {
     this.userFormOpen();
  },

  methods: {

       save() {
            let uri      = '/' +this.className + '/register';
            let postData = this.userFormData;
            this.http(uri, 'post', postData).then(resp => {
                let result = resp;
            });   
       },

  },

  components: {
    LeftSidebar
  }
};
</script>

<style>
</style>
