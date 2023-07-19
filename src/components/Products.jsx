import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';



const productsUrl='https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Products = () => {
    const {data, status, isLoading, isError } =useQuery(['products', productsUrl], getData)
    const navigate=useNavigate()
    if (isLoading) 
      {<div>Loading...</div>
      return }
      
    if (isError) 
      {<div>there has been an error</div>
      return }
      
    status=='success' && console.log('products:', data)
  return (
    <div>
      <Box sx={{maxWidth: 400, backGroundColor: '#bbdefb', margin:'5px auto'}}>
        <List>
        {status=='success' && data.products.map(obj=> 
          <ListItem key={obj.id} disablePadding>
            <ListItemButton onClick={()=>navigate('/products/'+obj.id)}>
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>)}
      </List>
    </Box>
    </div>
  )
}
