<template>
  <div class="page-container auth-page" style="background:none">

    <div class="header-container" >
        <img src="../assets/img/logo.png" />
    </div>

    <div class="leftBlock" style="" >

    </div>

    <div class="rightBlock" >

        <!-- 
            <h1>Sign In Form</h1>
            <div id="wrapper">
                <form id="signin" method action autocomplete="off">
                <input type="text" id="user" name="user" placeholder="username" />
                <input type="password" id="pass" name="pass" placeholder="password" />
                <button type="submit">&#xf0da;</button>
                </form>
            </div>
        -->

        <!-- <div class="form">

            <div class="form-header">
                <h1>Авторизация</h1>
            </div>

        </div>     -->

        <div class="form">

            <div class="form-header" style="display:flex; text-align:center; margin:0px; padding:0px; cursor:pointer;">
                <h5 @click="formStatus = 'auth'" style="width:50%; text-align:center" >Авторизация</h5>
                <h5 @click="formStatus = 'register'" style="width:50%; text-align:center" >Регистрация</h5>
            </div>  

            <!-- <div class="form-toggle"></div> -->

            <div  v-if="formStatus == 'auth'" class="form-panel one" style="margin:5px; padding:10px">

                <div class="form-header">
                    <h1 style="width:100%; text-align:center; font-style:italic;" >Account Login</h1>
                </div>

                <div class="form-content">
                    <div>

                        <div class="form-group" >
                            <label for="username">Логин</label>
                            <input v-model="auth.login" type="text" id="username" name="username" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="password">Пароль</label>
                            <input v-model="auth.password" type="password" id="password" name="password" required="required" />
                        </div>

                        <!-- <div class="form-group">
                            <label class="form-remember">
                            <input type="checkbox" />Remember Me
                            </label>
                            <a class="form-recovery" href="#">Forgot Password?</a>
                        </div> -->

                        <div class="form-group">
                            <button @click="authSend" type="button" >Log In</button>
                        </div>

                    </div>
                </div>

            </div>
            <div v-else class="form-panel one" style="margin:5px; padding:10px" >

                <div class="form-header" >
                    <h1 style="width:100%; text-align:center; font-style:italic;">Register Account</h1>
                </div>

                <div class="form-content">
                    <form>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="cpassword">Confirm Password</label>
                            <input type="password" id="cpassword" name="cpassword" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required="required" />
                        </div>
                        <div class="form-group">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    </div>

    <div class="footer-container" >
        
    </div>

  </div>
</template>

<script>
import Services from "@/services";

export default {
  name: "AuthPage",
  mixins: [Services],
  data() {
    return {
        formStatus : 'auth',
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
    grid-area: 1  /  1  / span 26  / span 14; 
    border:1px gainsboro solid;
    background: url(../assets/img/about_2.jpg) left top / 100% 100% no-repeat;
}

.rightBlock {
    grid-area: 1  /  15  / span 26  / span 30;
    border:1px gainsboro solid;
}



.header-container,
.left-sidebar,
.main-content,
.right-sidebar,
.footer-container {
    border:0px red solid;
    padding:3px;
} 

html {
  width: 100%;
  height: 100%;
}

body {
  background: -webkit-linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1.6em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

.overlay,
.form-panel.one:before {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.form {
  z-index: 15;
  position: relative;
  background: #ffffff;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 100px auto 10px;
  overflow: hidden;
}
.form-toggle {
  z-index: 10;
  position: absolute;
  top: 60px;
  right: 60px;
  background: #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translate(0, -25%) scale(0);
  transform: translate(0, -25%) scale(0);
  opacity: 0;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.form-toggle:before,
.form-toggle:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 4px;
  background: #4285f4;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.form-toggle:before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
.form-toggle:after {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}
.form-toggle.visible {
  -webkit-transform: translate(0, -25%) scale(1);
  transform: translate(0, -25%) scale(1);
  opacity: 1;
}
.form-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 0 20px;
}
.form-group:last-child {
  margin: 0;
}
.form-group label {
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
.two .form-group label {
  color: #ffffff;
}
.form-group input {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}
.form-group input:focus {
  color: rgba(0, 0, 0, 0.8);
}
.two .form-group input {
  color: #ffffff;
}
.two .form-group input:focus {
  color: #ffffff;
}
.form-group button {
  outline: none;
  background: #4285f4;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #ffffff;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
}
.two .form-group button {
  background: #ffffff;
  color: #4285f4;
}
.form-group .form-remember {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}
.form-group .form-remember input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0 10px 0 0;
}
.form-group .form-recovery {
  color: #4285f4;
  font-size: 12px;
  text-decoration: none;
}
.form-panel {
  padding: 60px calc(5% + 60px) 60px 60px;
  box-sizing: border-box;
}
.form-panel.one:before {
  content: "";
  display: block;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}
.form-panel.one.hidden:before {
  display: block;
  opacity: 1;
  visibility: visible;
}
.form-panel.two {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 95%;
  background: #4285f4;
  width: 100%;
  min-height: 100%;
  padding: 60px calc(10% + 60px) 60px 60px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  cursor: pointer;
}
.form-panel.two:before,
.form-panel.two:after {
  content: "";
  display: block;
  position: absolute;
  top: 60px;
  left: 1.5%;
  background: rgba(255, 255, 255, 0.2);
  height: 30px;
  width: 2px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}
.form-panel.two:after {
  left: 3%;
}
.form-panel.two:hover {
  left: 93%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.form-panel.two:hover:before,
.form-panel.two:hover:after {
  opacity: 0;
}
.form-panel.two.active {
  left: 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: default;
}
.form-panel.two.active:before,
.form-panel.two.active:after {
  opacity: 0;
}
.form-header {
  margin: 0 0 40px;
}
.form-header h1 {
  padding: 4px 0;
  color: #4285f4;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
.two .form-header h1 {
  position: relative;
  z-index: 40;
  color: #ffffff;
}

.pen-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 600px;
  margin: 20px auto 100px;
}
.pen-footer a {
  color: #ffffff;
  font-size: 12px;
  text-decoration: none;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
}
.pen-footer a .material-icons {
  width: 12px;
  margin: 0 5px;
  vertical-align: middle;
  font-size: 12px;
}

.cp-fab {
  background: #ffffff !important;
  color: #4285f4 !important;
}


input {
    border-radius: 0px !important;
}


/* @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');

*{
    font-family: 'Open Sans', 'sans-serif', 'FontAwesome';
}
body{
    background: rgb(52, 56, 61);
}
h1{
    color: rgb(255, 255, 255);
    margin: 20px auto 0;
    width: 200px;
    text-align: center;
}
#wrapper{
    position: absolute;
    width: 320px;
    left: 50%;
    margin-left: -160px;
    top: 50%;
    margin-top: -75px;
}

/****** 
#signin {
    height: 90px;
    width: 300px;
    border-radius: 8px;
    position: relative;
}
#signin::before {
    display: block;
    position: relative;
    height: 2px;
    background: rgb(52, 56, 61);
    content: '';
    top: 44px;
    margin-left: 20px;
    z-index: 1;
}
#signin input:first-of-type{
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}
#signin input:last-of-type{
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}
#signin  input[type="text"], #signin  input[type="password"], #signin button[type="submit"]{
    background: rgb(28, 30, 33);
    box-shadow: inset -100px -100px 0 rgb(28, 30, 33); 
    color: rgb(52, 56, 61);
}

#signin  input[type="text"], #signin  input[type="password"]{
    position: relative;
    display: block;
    width: 280px;
    height: 45px;
    border: 0;
    outline: 0;
    top: -2px;
    padding: 0 0 0 20px;
    font-weight: 700;
}
#signin  input[type="text"]:focus, #signin  input[type="password"]:focus{
    color: rgb(255, 255, 255);
}

#signin button[type="submit"]{
    display: block;
    position: absolute;
    width: 52px;
    height: 52px;
    color: rgb(52, 56, 61);
    border-radius: 50px;
    outline: 0;
    z-index: 2;
    top: 19px;
    right: -24px;
    border: 6px solid rgb(52, 56, 61);
    font-size: 25px;
    text-indent: 0px;
    padding-left: 9px;
    padding-bottom: 3px;
    text-align: center;
}
#signin button[type="submit"]:hover{
    color: rgb(0, 126, 165);
    text-shadow: 0 0 10px rgb(0, 126, 165);
    cursor: pointer;
}
#signin p {
    color: rgb(79, 85, 97);
    padding: 0 20px;
    font-weight: 700;
    font-size: 12px;
    margin: 5px 0 0 0;
}
#signin p > a{
    color: rgb(111, 119, 135);
    text-decoration: none;
}
#signin p > a:hover{
    border-bottom: 1px solid;
} 
*********/
</style>
