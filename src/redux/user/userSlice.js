import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '~/utils/constants'
import authorizedAxiosInstance from '~/utils/authorizeAxios'

const initialState = {
  currentUser: null
}

export const loginUserApi = createAsyncThunk(
  'user/loginUserApi',
  async (data) => {
    const reponse = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, data)
    return reponse.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loginUserApi.fulfilled, (state, action) => {
      const user = action.payload

      state.currentUser = user
    })
  }
})

export const selectCurrentUser = (state) => {
  return state.user.currentUser
}

export const userReducer = userSlice.reducer