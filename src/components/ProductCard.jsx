import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const ProductCard=({imgUrl, name, price})=>{

    const navigate=useNavigate()


  return (
    <Card sx={{ maxWidth: 345 , margin: '5px auto'}}>
      <CardMedia
        sx={{ height: 400}}
        image={imgUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate('/products')}>Go back to all products</Button>
      </CardActions>
    </Card>
  );
}
