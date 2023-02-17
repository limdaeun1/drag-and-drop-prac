import { createSlice } from '@reduxjs/toolkit'


interface UserState {
  sequence: number,
  load: boolean,
  user: any
  }
  
const initialState = { 
  sequence: 0,
  load: false,
  user: 1,
} as UserState
  
  const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
      loadingOn(state){
        state.load = true;
        console.log('on')
      },
      loadingOff(state){
        state.load = false;
        console.log('off')
      },
      sequencing(state){
        state.sequence ++;
        console.log("sequencing")
      },
      signIn(state,payload){
        state.user = payload
      },
      signOut(state){
        state.user = null
      }
    }

  })
  

  export const { loadingOn , loadingOff , sequencing , signIn , signOut } = moduleSlice.actions
  export default moduleSlice.reducer;
 