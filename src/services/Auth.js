
const Auth = {
    data() {
        return {
            className  : 'UserClass',
            authStatus : '',
            editUser: {},
            addUser : {},

            userModel : {
                login: '',
                username: '',
                password: '',
                cpassword : '',
                email: '',
                role: 2,
            },

            authUser: {
                login: '',
                password: '',
            },

            session : {},
        }
    },

    created() {
        this.addUser = Object.assign({}, this.userModel);
        this.accessUser(); 
    },

    methods: {

        login() {

            let postData = this.authUser;
            let funcName = 'login';
            let uri = '/' +this.className + '/' + funcName;

            this.http(uri, 'post', postData).then(resp => {
                this.session = resp; 
                localStorage.setItem(this.tokenName, this.session['jwt']);
                alert('Успешная авторизация');
            });
        },

        logout() {

            // let postData = this.authUser;
            // let funcName = 'auth';
            // let uri = '/' +this.className + '/' + funcName;

            // this.http(uri, 'post', postData).then(resp => {
            //     this.session = resp;
            //     this.jwt = this.session['jwt'];
            //     alert('Успешная авторизация');
            // });
        },

        accessUser() {
            let funcName = 'access';
            let uri = '/' +this.className + '/' + funcName;
            this.http(uri).then(resp => {
                let result = resp;
                if (result['access_status']) {
                    console.log('----- auth-ok -----');
                } else {
                    console.log('----- auth-not ----');
                }
            });
        },

        createUser() {
            let funcName = 'createUser';
            let uri      = '/' +this.className + '/' + funcName;
            let postData = this.addUser;
            this.http(uri, 'post', postData).then(resp => {
                // let result = resp;
                alert('Успешная регистрация');
            });   
        },

        updateUser() {

        },

    },

};

export default Auth;