import { ListGroupPlugin } from "bootstrap-vue";

const Auth = {

    data() {
        return {

            authStatus : '',

            users : [],
            user  : {},

            userModel : {
                login    : '',
                username : '',
                password : '',
                email    : '',
                role     : 2,
            },

            auth : {
                login : '',
                password : '',
            }

        }
    },  

    created() {
        this.access();
    },

    methods: { 

        authSend() { 
            let uri      = '/UserController/auth';
            let postData = this.auth;
            //debugger;
            this.http(uri, 'post', postData).then(resp => {
                let result = resp;
            });   
        },

        access() { 
            //debugger;
            let uri = '/UserController/access';
            this.http(uri).then(resp => {
                let result = resp;
                if(result['access_status']) {
                    console.log('auth-ok');
                }  else {
                    console.log('auth-not');
                }
            });   
        },

    },

};

export default Auth;