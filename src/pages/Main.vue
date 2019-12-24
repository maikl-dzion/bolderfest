<template>
  <div class="main-page" >
        
    <div v-if="addUserForm" 
        style="border:1px gainsboro solid; background: white; padding:5px">

        <form action="#" style="" >

            <div>
                <div class="mdl-textfield mdl-js-textfield" style="width:50%" >
                   <input v-model="userForm.login" class="mdl-textfield__input" type="text" >
                   <label class="mdl-textfield__label" for="sample1">Логин</label>
                </div>

                <div class="mdl-textfield mdl-js-textfield" style="width:50%" >
                  <input v-model="userForm.password" class="mdl-textfield__input" type="text" >
                  <label class="mdl-textfield__label" for="sample1">Пароль</label>
                </div>
            </div>

            <div>
                <div class="mdl-textfield mdl-js-textfield" style="width:50%">
                  <input v-model="userForm.name" class="mdl-textfield__input" type="text" >
                  <label class="mdl-textfield__label" for="sample1">Имя пользователя</label>
                </div>

                <div class="mdl-textfield mdl-js-textfield" style="width:50%" >
                  <input v-model="userForm.email" class="mdl-textfield__input" type="text" >
                  <label class="mdl-textfield__label" for="sample1">Email</label>
                </div>
            </div>

        </form>

    </div>

  </div>
</template>

<script>
import MixinsLoader from "@/mixins/MixinsLoader";
//import CategoryList from "@/components/CategoryList";

export default {
  name: "MainPage",
  mixins: [MixinsLoader],
  data() {
    return {

      addUserForm : false,
      userForm : {
        name : '',
        login : '',
        password : '',
        email : '',
        type  : 2,
      },

    }
  },

  created() {

     this.userFormOpen();

  },
  
  methods : {

  },

  // components: { ServicesLoader },

};
</script>

<style>

</style>
