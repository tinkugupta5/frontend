import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}


export const LoginUser = createAsyncThunk("user/loginUser",async(user,thunkAPI) => {
    const data = {
        email:user.email,
        password:user.password
    }
    try {
        const response = await axios.post('http://localhost:5000/login',data)
        return response.data;
    } catch (error) {
        if(error.response)
        {
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message)
        }
    }
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state) => initialState
    },

    // to handle createAsyncThunk we use extra reduer

    extraReducers:(builder) => {
        builder.addCase(LoginUser.pending,(state) => {
            state.isLoading = true;
            
        })
    }



})