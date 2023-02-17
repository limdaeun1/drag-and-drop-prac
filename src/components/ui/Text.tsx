import React from 'react'
import TextField from '@mui/material/TextField';

interface CustomInputProps {
    index: string
    state: object
    setState: React.Dispatch<React.SetStateAction<any>>
}


const Text = ({index, state, setState} : CustomInputProps) => {

  const setter = (index: string, value: any) => {
        const temp = { ...state }
        ;(temp as any)[index] = value
        setState(temp)
  }

  return (
    <TextField id="standard-basic" label="Standard" variant="standard" sx={{width:420}}
            value={(state as any)[index]}
            onChange={(e) => setter(index, e.target.value)}  />
  )
}

export default Text