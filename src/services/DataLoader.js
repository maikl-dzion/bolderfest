
const ServicesLoader = {

    data: function () {
        return {
            siteMenu : [],
        }
    },  

    methods: { 

        // -- Получить меню сайтов
        getSiteMenu() {
            // debugger;
            let uri = '/MainBolderfest/siteMenu';
            this.http(uri).then(resp => {
                this.siteMenu = resp;
            });       
        },

    },

};

export default ServicesLoader;
