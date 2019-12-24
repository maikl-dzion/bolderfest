import Core from "@/mixins/Core";
import Http from "@/services/Http";
import ServicesLoader from "@/services/ServicesLoader";
import EventService from "@/services/EventService";

const MixinsLoader = {
    
    mixins: [
        Http, 
        Core, 
        ServicesLoader, 
        EventService
    ],

    data: function () {
        return {

        }
    },  

    methods: { },

};

export default MixinsLoader;