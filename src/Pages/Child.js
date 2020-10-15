import React from 'react'
import {useParams} from "react-router-dom"
export const Child = () => {
    const {id} =useParams()
    return (
        <div>
            {id}
        </div>
    )
}
