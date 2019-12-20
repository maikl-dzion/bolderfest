const BaseMixin = {

    data: function () {
        return {  }
    },  // Data

    ///////////////////
    methods: {

        
        //-- Функции для работы с глобальной шиной событий
        getGlobalBus() {
            return this.$root.EventGlobalBus;
        },

        // устанавливаем данные на глобальную шину
        sendEventBusOn(eventName, ...params) {
            var eventGlobalBus = this.getGlobalBus();
            eventGlobalBus.$emit(eventName, ...params);
        },

        // получаем данные с глобальной шины
        getEventBusOn(eventName, callBack) {
            var eventGlobalBus = this.getGlobalBus();
            eventGlobalBus.$on(eventName, (...response) => {
                callBack(...response);
            });
        },

        getHtmlElements(selector) {
            return document.querySelectorAll(selector);
        },

        getHtmlElem(selector) {
            return document.querySelector(selector);
        },

        isNumber(n) { 
            return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
        }, 

        elementsUpdated(selector, attr, newValue, type = 'style') {
           var oldValue = ''; 
           var elements = this.getHtmlElements(selector);
           for(var i in elements) {
              if(this.isNumber(i)) {
                   let elem =  elements[i]; 
                   if(elem[type][attr]) {
                       oldValue = elem[type][attr] = newValue; 
                       elem[type][attr] = newValue;
                   }      
              }   
           }
           return oldValue; 
        },

        elemUpdated(event, attr, newValue, type = 'style') {
            let target = event.currentTarget;
            var selector = '#' + target.id;
            var el = this.getHtmlElem(selector);
            let oldValue = el[type][attr];
            el[type][attr] = newValue;
            return oldValue;
         },

    }
    //////  Methods ///

};

export default BaseMixin;