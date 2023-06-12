import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import axios from 'axios'

export const getProduct = createAsyncThunk("products/getProducts", async()=> {
    const respon = await axios.get('http://localhost:5000/products')
    return respon.data
})
export const saveProduct = createAsyncThunk("products/saveProducts", async({title, price})=> {
    const respon = await axios.post('http://localhost:5000/products', {
        title,
        price
    })
    return respon.data
})
export const deleteProduct = createAsyncThunk("products/deleteProduct", async(id)=> {
 await axios.delete(`http://localhost:5000/products/${id}`)
    return id
})
export const editProduct = createAsyncThunk("products/editProduct", async({id,title, price})=> {
    const respon =   await axios.patch(`http://localhost:5000/products/${id}`, {
        title,
        price
    })
       return respon.data
   })
const productEntity = createEntityAdapter({
    selectId : (product) => product.id
})
const productSlice = createSlice({

    name: "product",
    initialState: productEntity.getInitialState(),
    extraReducers: {
        [getProduct.fulfilled] : (state, action) => {
            productEntity.setAll(state, action.payload)
        },
        [saveProduct.fulfilled] : (state, action) => {
            productEntity.addOne(state, action.payload)
        },
        [deleteProduct.fulfilled] : (state, action) => {
            productEntity.removeOne(state, action.payload)
        },
        [editProduct.fulfilled] : (state, action) => {
            productEntity.updateOne(state, {id:action.payload, updates: action.payload})
        },

    }
})

export const productSelectors = productEntity.getSelectors(state => state.product)
export default productSlice.reducer