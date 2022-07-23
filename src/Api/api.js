import axios from "axios";

let instance = axios.create(
     {
        baseURL: "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
     }
)


export const GetValuesAPI = {
    GetValues() {
        return instance.get()
            .then(response => {
                let values = { USD: Math.round(response.data[0].sale * 1000) / 1000 , EUR: Math.round(response.data[1].sale * 1000) / 1000, UAH: 1};
                return values;
            });
    },
 
}