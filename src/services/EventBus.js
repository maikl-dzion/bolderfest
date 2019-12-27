import Vue from 'vue'

const EventBusService = new Vue();

const EventService = {

    data: function () {
        return {
            EventBusService,
        }
    },  

    methods: { 

        userRegisterOpen(type = 2) {
            this.EventBusService.$emit('user_register_open', { type });   
        },

        userFormOpen() {
            this.EventBusService.$on('user_register_open', resp => {
                this.addUserForm = true;
                for(let i in this.userForm) 
                    this.userForm[i] = '';
                this.userForm.type = resp.type;
            });
        },

    },

};

export default EventService;


