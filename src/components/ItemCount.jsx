import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const add = () => {
        if( counter < stock ){
            const aux = counter+1
            setCounter(aux)
        }else {
            console.log("No more stock")
        }
    }

    const subtract = () => {
        if( counter > initial ){
            const aux = counter-1
            setCounter(aux)
        }
    }

    return (
        <div>
            <div className="">
                <button className="btn btn-dark"onClick={subtract}>-</button>
                <p>{counter}</p>
                <button className="btn btn-dark" onClick={add}>+</button>
            </div>
            <button className="btn btn-primary" onClick={onAdd}>Add to cart</button>
        </div>
    )
}
export default ItemCount;