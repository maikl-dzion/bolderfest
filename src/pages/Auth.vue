<template>
  <div class="page-container auth-page" style="background: none">
    <!-- ################# --->
    <!------ Заголовок   ----->
    <div class="header-container" >
         <img src="../assets/img/logo.png" />
    </div>

    <!-- ################# --->
    <!------ Левый блок  ----->
    <div class="leftBlock" style></div>

    <!---  ################# --->
    <!------ Правый блок  ----->
    <div class="rightBlock">


      <div class="login-wrap">

        <div class="login-html">

          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab" style="cursor:pointer"> Вход </label>
          <!-- <span style="background:#1161ee; color:#1161ee; margin: 0px 10px 0px 10px">|</span> -->
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab" style="cursor:pointer; margin-left:1%"> Регистрация </label>

          <div class="login-form">

            <!---- АУТЕНТИФИКАЦИЯ  ---->
            <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label">Логин</label>
                  <input v-model="authUser.login" id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">Пароль</label>
                  <input v-model="authUser.password" id="pass" type="password" class="input" data-type="password" />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" checked />
                  <label for="check">
                    <span class="icon"></span> Keep me Signed in
                  </label>
                </div>
                <div class="group">
                  <button @click="login()" type="submit" class="button" 
                           style="border-radius:0px; cursor:pointer" >Войти в систему</button>
                </div>

                <div class="hr"></div>
                <div class="foot-lnk">
                  <a href="#forgot">Забыли пароль?</a>
                </div>
            </div>

            <!---- РЕГИСТРАЦИЯ  ---->
            <div class="sign-up-htm">
        
                <div class="group">
                  <label for="username" class="label">Ваше имя</label>
                  <input v-model="addUser.username" id="username" type="text" class="input" required="required" />
                </div>

                <div class="group">
                  <label for="login" class="label">Логин</label>
                  <input v-model="addUser.login" id="login" type="text" class="input" required="required" />
                </div>
                
                <div class="group">
                  <label for="passwd" class="label">Пароль</label>
                  <input v-model="addUser.password" id="passwd" type="password" class="input" data-type="password" required="required" />
                </div>
                <div class="group">
                  <label for="cpass" class="label">Повторить пароль</label>
                  <input v-model="addUser.cpassword" id="cpass" type="password" class="input" data-type="password" required="required" />
                </div>
                <div class="group">
                  <label for="email" class="label">Email</label>
                  <input v-model="addUser.email" id="email" type="text" class="input" required="required" />
                </div>

                <div class="group">
                  <!-- <input type="submit" class="button" value="Зарегистрироваться" /> -->
                  <button @click="createUser()" type="submit" class="button" 
                          style="border-radius:0px; cursor:pointer" >Зарегистрироваться</button>
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                   <label for="tab-1">Already Member?</label>
                </div>

            </div>

          </div>
        </div>
      </div>

      <!-- <div class="form">
        <div
          class="form-header"
          style="display:flex; text-align:center; margin:0px; padding:0px; cursor:pointer;"
        >
          <h5 @click="formStatus = 'auth'" style="width:50%; text-align:center">Авторизация</h5>
          <h5 @click="formStatus = 'register'" style="width:50%; text-align:center">Регистрация</h5>
        </div>

       

        <div v-if="formStatus == 'auth'" class="form-panel one" style="margin:5px; padding:10px">
          <div class="form-header">
            <h1 style="width:100%; text-align:center; font-style:italic;">Account Login</h1>
          </div>

          <div class="form-content">
            <div>
              <div class="form-group">
                <label for="username">Логин</label>
                <input
                  v-model="authUser.login"
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="password">Пароль</label>
                <input
                  v-model="authUser.password"
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                />
              </div>

              <div class="form-group">
                <button @click="login" type="button">Log In</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="form-panel one" style="margin:5px; padding:10px">
          <div class="form-header">
            <h1 style="width:100%; text-align:center; font-style:italic;">Register Account</h1>
          </div>

          <div class="form-content">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  v-model="addUser.username"
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
              </div>

              <div class="form-group">
                <label for="username">Login</label>
                <input
                  v-model="addUser.login"
                  type="text"
                  id="login"
                  name="login"
                  required="required"
                />
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  v-model="addUser.password"
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="cpassword">Confirm Password</label>
                <input
                  v-model="addUser.confirm_pwd"
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  v-model="addUser.email"
                  type="email"
                  id="email"
                  name="email"
                  required="required"
                />
              </div>
              <div class="form-group">
                <button @click="createUser" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div> -->


    </div>

    <!-- ################# --->
    <!------ Подвал  ----->
    <div class="footer-container"></div>
  </div>
</template>

<script>
import Services from "@/services";

export default {
  name: "AuthPage",
  mixins: [Services],
  data() {
    return {
      formStatus: "auth"
    };
  },

  created() {},
  methods: {},
  components: {}
};
</script>

<style scoped >
/* grid-area: top /  left / height / width  */

.leftBlock {
  grid-area: 1 / 1 / span 26 / span 17;
  border: 1px gainsboro solid;
  background: url(../assets/img/about_2.jpg) left top / 100% 100% no-repeat;
}

.rightBlock {
  grid-area: 1 / 18 / span 26 / span 30;
  border: 1px gainsboro solid;
}

.header-container,
.left-sidebar,
.main-content,
.right-sidebar,
.footer-container {
  border: 0px red solid;
  padding: 3px;
}

body {
  margin: 0;
  color: #6a6f8c;
  background: #c8c8c8;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}

.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 100%;
  min-height: 100%;
  position: relative;
  /* background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center; */
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
              0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group input[data-type="password"] {
  text-security: circle;
  -webkit-text-security: circle;
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #1161ee;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}

input {
  border-radius: 0px !important;
}


</style>
