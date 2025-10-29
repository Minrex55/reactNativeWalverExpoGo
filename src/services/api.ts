import axios from "axios";

const api = axios.create({
    baseURL:'https://f312b35c-1933-46c9-b09d-35199ec57280-00-24g27ex03d2ib.spock.replit.dev/api/',//Aqui escribir la API REST FULL
    headers:{"Content-Type":"application/json"},
    timeout: 15000,
});

export default api;