import React, {useState} from 'react';
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  AddShoppingCartOutlined,
  RemoveShoppingCartOutlined } from '@mui/icons-material';

export const UpdateShoppingCar = ({shoppingCar, onSetShoppingCar, element, prices}) => {
  const [loading, setLoading] = useState()
  const [loadingType, setLoadingType] = useState()

  const updateShoppingCar = (element, type, add, price) => {
    setLoading(element.head)
    setLoadingType(type)
    let newShoppingCar = {...shoppingCar}
  
    if (add) addShoppingCar(newShoppingCar, element, price)
    else newShoppingCar[element.head].amount -= 1
  
    
    onSetShoppingCar(newShoppingCar);
    setLoading('')
    setLoadingType('')
  }
  
  const addShoppingCar = (newShoppingCar, element, price) => {
    if (newShoppingCar[element.head]) newShoppingCar[element.head].amount +=  1
  
    else newShoppingCar[element.head] = {id: element.head, img: element.image, detail: element.name, price: price, amount: 1}
  }

  const CustomLoadingButtom = ({icon, head, type, click, text}) => 
    <LoadingButton
      endIcon={icon}
      loading={loading === head && loadingType === type}
      onClick={click} 
      sx={{textTransform: 'none', mb: 1, height: 30, ml: 1}}
      loadingPosition="end"
      variant="contained"
    >
      {text}
    </LoadingButton>

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      <CustomLoadingButtom
        icon={<AddShoppingCartOutlined />}
        type='add'
        head={element.head}
        click={() => updateShoppingCar(element, 'add', true, prices[element.head])}
        text={'Comprar'}
      />
      {shoppingCar && shoppingCar[element.head] && shoppingCar[element.head].amount !== 0 &&
        <CustomLoadingButtom
          icon={<RemoveShoppingCartOutlined />}
          type='remove'
          head={element.head}
          click={() => updateShoppingCar(element, 'remove')}
          text={'Quitar una unidad'}
        />
      }
    </Box>
  );
}
