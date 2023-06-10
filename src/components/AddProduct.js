import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {update} from "../features/ProductSlice"
const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispacth = useDispatch()

        const updateProduct = (e) => {
        e.preventDefault()
        dispacth(update({title, price}))
    }
  return (
    <div>
        <form onSubmit={updateProduct} className='box mt-5'>
            <div className="field">
                <label  className="label">Title</label>
                <div className="control">
                    <input type="text" 
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <label  className="label">Price</label>
                <div className="control">
                    <input type="text"
                     className="input" 
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     />
                </div>
            </div>
            <div className="field">
                <button className="button is-success">Simpan</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct