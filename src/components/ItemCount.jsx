import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(parseInt(initial))

    const add = () => {
        setCounter(counter + 1)
    }

    const subtract = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        setCounter(parseInt(initial))
    }, [initial])

    return (
        <div>
            <div className="">
                <button className="btn btn-dark" disabled={counter <= 1} onClick={subtract}>-</button>
                <p>{counter}</p>
                <button className="btn btn-dark" disabled={counter >= stock } onClick={add}>+</button>
            </div>
            <button className="btn btn-primary" disabled={stock <= 0 } onClick={() => onAdd(counter)}>Add to cart</button>
        </div>
    )
}
export default ItemCount;