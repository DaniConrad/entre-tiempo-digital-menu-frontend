import axios from 'axios'
import { config } from '../config/config'

const getProducts = async (setProducts) => {
    axios.get(`${config.API_URL}/products`)
                .then((res) => setProducts(res.data))
                .catch(err => console.log(err))
}

const postProducts = async (fd, AXIOSconfig, key) => {
    return await axios.post(`${config.API_URL}/dataloadmanagement/${key.key}`, fd, AXIOSconfig)
}

export {
    getProducts,
    postProducts
} 