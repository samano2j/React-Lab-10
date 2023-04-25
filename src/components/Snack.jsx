import React from 'react'
import { useFlasher } from '../hooks/useFlasher'

const Snack = ({ snack, handleQuantity }) => {
    return (
        <div className="card w-30 bg-slate-900 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-3xl">{snack.name}</h2>
                <p className='text-2xl'>Quantity: {snack.quantity}</p>
                <div className="card-actions justify-end">
                    <button
                        className='btn btn-primary'
                        onClick={() => handleQuantity("+", snack.id)}>
                        +
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => handleQuantity("-", snack.id)}>
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Snack