import {useState, useEffect} from "react"
import Axios from "axios"

export default function(){
    const [products, setProducts] = useState([])
    const [category, setCategory] =useState([])


    const getCategory = async()=>{
        const {data}= await Axios.get(
            "https://x4bjd.sse.codesandbox.io/categories"
        )
        if(data){
            setCategory(data)
        }
    }
    


    useEffect(() => {
        getCategory()
    }, [])
    
    const getProducts = async()=>{
        const {data}= await Axios.get(
            "https://x4bjd.sse.codesandbox.io/products"
        )
        if(data){
            setProducts(data)
        }
    }
    


    useEffect(() => {
        getProducts()
    }, [])

    

    return {
        products: products,
        category: category
    }
}