import React from 'react'
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Fields({name, email, index}) {
  return (
   
       <div className='data-val'>
               <h4>{name}</h4>
               <h4>{email}</h4>
             <Button variant="contained" color="error">
                <DeleteOutlineIcon/>
                </Button>
         </div>
   
  )
}

export default Fields