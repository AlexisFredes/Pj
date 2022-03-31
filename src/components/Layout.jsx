import React, {useState, useEffect} from 'react';
import {
  Avatar,
  Badge, 
  Box,
  Drawer, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography } from '@mui/material';
import photo from '../assets/alefredes.jpg'
import {
  CottageOutlined,
  ShoppingCartOutlined } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';
import { HOME, SHOPPING_CAR } from '../utils/constants/urls';

export const Layout = ({children, shoppingCar}) => {
  const [selected, setSelected] = useState('/home')
  const [shoppingCarAmount, setShoppingCarAmount] = useState(0)
  const navigate = useNavigate();

  const onSelect = (selected) => {
    if (selected) {
      navigate(selected);
      setSelected(selected);
    }
  };

  useEffect(() => {
    if (shoppingCar) {
      const keys = Object.keys(shoppingCar)
      let amount = 0;
      
      keys.forEach(elem => 
        amount = amount + shoppingCar[elem].amount
      )

      setShoppingCarAmount(amount)
    }
  }, [shoppingCar])

  const MenuList = () => (
    <Box>
      <List>
        <ListItem >
          <ListItemText 
            primary={
              <Typography
                sx={{ display: 'inline', fontSize: 30, color: '#083F45' }}
              >
                Papa John's
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar alt="photo" src={photo} sx={{mr: 2}} />
          </ListItemIcon>
          <ListItemText primary={"Alexis Fredes"} />
        </ListItem>
        <ListItem button onClick={() => onSelect(HOME)} sx={{bgcolor: selected === HOME && '#E7EBF0'}}>
          <ListItemIcon>
            <CottageOutlined />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={() => onSelect(SHOPPING_CAR)} sx={{bgcolor: selected === SHOPPING_CAR && '#E7EBF0'}}>
          <ListItemIcon>
            <Badge badgeContent={shoppingCarAmount} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Carrito"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: 210 }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: {sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 210 },
          }}
          open
        >
          <MenuList />
        </Drawer>
      </Box>
      <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: 210 }}
        >
          <Box sx={{display: 'flex', justifyContent: 'center', borderBottom: 3, borderColor: '#e0e0e0'}}>
            <Typography variant="h3">
              Bienvenidos! Disfruten de nuestra web
            </Typography>
          </Box>
          {children}
        </Box>
    </Box>
  );
}
