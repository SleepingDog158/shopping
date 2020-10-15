import React from 'react'
import {useParams} from "react-router-dom"
export const Child = () => {
    const {id} =useParams()
    console.log(id)
    return (
        <div>
            {id}
        </div>
    )
}
