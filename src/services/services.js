import axios from 'axios'
import config from '../config/config'

const getProducts = async (SetProducts) => {
    axios.get(`${config.API_URL}/products`)
                .then((res) => SetProducts(res.data))
                .catch(err => console.log(err))
}

export {
    getProducts
}