import Core from "@/mixins/Core";
import Http from "@/services/Http";
import DataLoader from "@/services/DataLoader";
import EventBus from "@/services/EventBus";
import Auth from "@/services/Auth";

const ServicesLoader = {

    mixins: [
        Http, 
        Core, 
        DataLoader, 
        EventBus,
        Auth,
    ],

    data() {
        return { }
    },  

    methods: { },

};

export default ServicesLoader;