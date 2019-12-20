import Axios from 'axios';

const Http = {
    data: function () { 
        return { 
            apiUrl : '',
        }
    }, 

    methods: {
        
        http: function (url, method = 'get', data = null) {
            url = this.apiUrl + url;
            return new Promise((resolve, reject) => {
                Axios[method](url, data)
                    .then(response => {
                        if (response.data.result instanceof Object) {
                            if (response.data.error) {
                                reject(response.data.error);
                            } else {
                                resolve(response.data.result);
                            }
                        } 
                    })
                    .catch(error => {
                         throw error;
                    });
            })
        },

    },      
}

export default Http;


