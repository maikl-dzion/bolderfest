
const ServicesLoader = {

    data: function () {
        return {
            siteMenu : [],
        }
    },  

    methods: { 

        // -- Получить меню сайтов
        getSiteMenu() {
            let uri = '/MainBolderfest/siteMenu';
            this.http(uri).then(resp => {
                this.siteMenu = resp;
            });       
        },

    },

};

export default ServicesLoader;
