import axios from "axios";

let instance = axios.create(
     {
        withCredentials: true,
        headers: { "API-KEY": "55b25413-96d9-4c2c-8744-a301f778759f" },
        baseURL: "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=",
     }
)

export const GetValuesAPI = {
    GetValues() {
        return instance.get(`5`)
            .then(response => {
                return response.data;
            });
    }
}
