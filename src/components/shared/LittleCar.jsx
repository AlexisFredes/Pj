import React, { useState, useEffect } from 'react'
import { 
  Alert,
  Box, 
  Button,
  Card,
  CardActions,
  CardContent,
  Snackbar,
  Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HOME, SHOPPING_CAR } from '../../utils/constants/urls'
import { 
  CONGRATULATIONS,
  CONTINUE_TO_THE_CAR,
  EXIT,
  FINISH_BUYING,
  THANKS } from '../../utils/constants/littleCar';

export const LittleCar = ({shoppingCar, little, onSetShoppingCar}) => {
  const [totalMoney, setTotalMoney] = useState(0)
  const [open, setOpen] = useState(false);
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();

  const getTotalMoney = (data) => {
    const keys = Object.keys(data)
    let totalMoney = 0;

    keys.forEach(key => 
      totalMoney = totalMoney + data[key].price * data[key].amount
    )

    setTotalMoney(totalMoney)
  }

  const finishBuying = () => {
    setExit(true)
    openSnackBar()
    onSetShoppingCar([])
  }

  useEffect(() => shoppingCar && getTotalMoney(shoppingCar), [shoppingCar]);

  const openSnackBar = () => setOpen(true)

  const closeSnackBar = (event, reason) => {
    if (reason === 'clickaway') return

    setOpen(false);
  };

  return (
    <>
      <Card sx={{ width: 200, height: 200, mb: 1}}>
        <CardContent>
          <Box sx={{borderBottom: 1, borderTop: 1,  borderColor: '#e0e0e0', mt: 1, display: 'flex', justifyContent: 'center'}}>
            <Typography sx={{color: '#5F6E82', fontSize: 25}}>
              Total: ${totalMoney}
            </Typography>
          </Box>
          <Typography variant="subtitle2" ml={4} mt={3} mb={2}>
            {THANKS}
          </Typography>
        </CardContent>
        <CardActions>
          {exit 
            ? <Button variant="contained" onClick={() => navigate(HOME)} sx={{textTransform: 'none', ml: 2.5}}>
                {EXIT}
              </Button>
            : little 
              ? <Button variant="contained" onClick={() => navigate(SHOPPING_CAR)} sx={{textTransform: 'none', ml: 2.5}}>
                  {CONTINUE_TO_THE_CAR}
                </Button>
              : <Button variant="contained" onClick={() => finishBuying()} sx={{textTransform: 'none', ml: 2.5}}>
                  {FINISH_BUYING}
                </Button>
          }
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="success" sx={{width: '100%'}}>
          {CONGRATULATIONS}
        </Alert>
      </Snackbar>
    </>
  )
}
