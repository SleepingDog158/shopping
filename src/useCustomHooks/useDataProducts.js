import {useState, useEffect} from "react"
import Axios from "axios"

const initCategories=[
    {id: "grocery", name: "Grocery"},
    {id: "cars", name: "Cars"},
    {id: "drugs", name: "Drugs"},
]

export default function(){
    const [products, setProducts] = useState([])
    const [category, setCategory] =useState([])

    useEffect(() => {
        setCategory(initCategories)
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