import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Badge,
  Box,
  Button,
  Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { UpdateShoppingCar } from './UpdateShoppingCar';
import { HOME } from '../../utils/constants/urls';

export const BasicCard = ({data, shoppingCar, onSetShoppingCar, prices}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      {data && data.map(element => 
        <Badge badgeContent={shoppingCar[element.head] && shoppingCar[element.head].amount} color='primary' sx={{mr: 2}} key={element.head}>
          <Card sx={{ width: 200, height: 410, mb: 2}}>
            <img src={element.image} alt={element.name} style={{height: 200, width: 200}}/>
            <CardContent>
              <Typography variant="h6" component="div">
                {element.name}
              </Typography>
              <Typography variant="subtitle2" component="div">
                Precio: ${prices[element.head]}
              </Typography>
            </CardContent>
            <CardActions sx={{flexWrap: 'wrap'}}>
              <Button variant="contained" onClick={() => navigate(`${HOME}/${element.head}`)} sx={{textTransform: 'none', ml: 1, mb: 1, height: 30}}>
                Ver Detalles
              </Button>
              <UpdateShoppingCar shoppingCar={shoppingCar} onSetShoppingCar={onSetShoppingCar} element={element} prices={prices}/>
            </CardActions>
          </Card>
        </Badge>
      )}
    </Box>
  );
}
