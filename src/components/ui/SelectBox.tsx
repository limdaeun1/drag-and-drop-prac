import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


interface CustomInputProps {
  onChange: any
  userData: UserDate
}

interface UserDate {
  content:[]
}

const SelectBox = ({onChange , userData} : CustomInputProps) => {

   
console.log(userData)



  return (
    <Select onChange={onChange} defaultValue=''>
      {userData?.content.map((user :{id:number; name:string;}, index) => (
        <MenuItem value={user.id} key={index}>{user.name}</MenuItem>
      ))}  
    </Select>
  )
}

export default SelectBox