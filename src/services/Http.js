import Axios from 'axios';

const Http = {
    data: function () { 
        let apiUrl = this.$parent.apiUrl;
        return { 
            apiUrl,
        }
    }, 

    methods: {
        
        http(url, method = 'get', data = null) {
            url = this.apiUrl + url;
            return new Promise((resolve, reject) => {
                Axios[method](url, data)
                    .then(response => {
                        
                            if (response.data.error) {
                                let message = 'Http : "response.data.error" (Ошибка данных на сервере) ';
                                this.httpError( response.data.error, message);
                                reject(response.data.error);
                                return false;
                            } 

                            if (response.data.result instanceof Object) {
                                console.log('apiUrl:', url);
                                resolve(response.data.result); 
                            } else {
                                let message = 'Http : "с сервера вернулась строка (должен json)" ';
                                this.httpError(response, message);
                            }

                    })
                    .catch(error => {

                            let message = 'Http : "catch error" (код ответа не 200)';
                            this.httpError(error, message);
                            throw error;

                    });
            })
        },

        httpError(data, title = '') {
            var result = {};
           if(title) result = { title , data};
           else      result = data;   
           lg(result);
        },

    },      
}

export default Http;


