import Core from "@/mixins/Core";
import Http from "@/services/Http";

const ServicesLoader = {

    mixins: [Http, Core],
    
    data: function () {
        return {

        }
    },  

    methods: {},

};

export default ServicesLoader;