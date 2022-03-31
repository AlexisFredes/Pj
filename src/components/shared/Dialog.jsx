import React, { useState, forwardRef, useEffect } from 'react'
import {
  Avatar, 
  Badge,
  Box, 
  Dialog, 
  DialogContent, 
  DialogTitle,
  IconButton,
  Skeleton, 
  Slide,
  Typography } from '@mui/material';
import { HOME } from '../../utils/constants/urls';
import { useNavigate } from "react-router-dom";
import { Close } from '@material-ui/icons';
import { Api } from '../../api/Api';
import { BasicTabs } from './BasicTabs';
import { BasicTable } from './BasicTable'
import { UpdateShoppingCar } from './UpdateShoppingCar';
import { LittleCar } from './LittleCar';
import { GAMES_3DS, GAMES_SWITCH, GAMES_WIIU, LITTLE_CAR } from '../../utils/constants/general';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const MaxWidthDialog = ({head, prices, shoppingCar, onSetShoppingCar}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [games3DS, setGame3DS] = useState([]);
  const [gamesSwitch, setGameSwitch] = useState([]);
  const [gamesWiiU, setGamesWiiU] = useState([]);

  const navigate = useNavigate();

  const generateTableGames = (res) => {
    const newTable = res.map(element => ({
      id: element.gameID[0],
      usage: element.amiiboUsage[0].Usage,
      gameName: element.gameName
    }))

    return newTable;
  }

  useEffect(() => {
    if (head) {
      setOpenDialog(true)

      Api.showUsage.byHead(head).then(res => {
        const games3DS = res.amiibo[0].games3DS
        const gamesSwitch = res.amiibo[0].gamesSwitch;
        const gamesWiiU = res.amiibo[0].gamesWiiU;
        
        games3DS.length && setGame3DS(generateTableGames(games3DS))
        gamesSwitch.length && setGameSwitch(generateTableGames(gamesSwitch))
        gamesWiiU.length && setGamesWiiU(generateTableGames(gamesWiiU))

        setData(res.amiibo[0])
        setLoading(false)
      }).catch(err => undefined)
    }
  }, [head])

  const closeDialog = () => {
    setOpenDialog(false);
    navigate(HOME)
  }

  const tabsGames= [
    {
      title: GAMES_3DS,
      content: <BasicTable data={games3DS} key={GAMES_3DS}/>
    },
    {
      title: GAMES_SWITCH,
      content: <BasicTable data={gamesSwitch} key={GAMES_SWITCH}/>
    },
    {
      title: GAMES_WIIU,
      content: <BasicTable data={gamesWiiU} key={GAMES_WIIU}/>
    },
    {
      title: LITTLE_CAR,
      content: <LittleCar shoppingCar={shoppingCar} little={true}/>
    }
  ]

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xl"
        TransitionComponent={Transition}
        open={openDialog}
        onClose={closeDialog}
      >
        <DialogTitle sx={{pl: 8, pt: 4, pr: 8}}>
          {loading ? <Skeleton height={50} width="100%"/> 
          : <Box sx={{display: 'flex'}}>
              <Badge badgeContent={shoppingCar[head] && shoppingCar[head].amount} color='primary'>
                <Avatar alt={data.name} src={data.image} sx={{ width: 70, height: 70, border: 1, borderColor: '#e0e0e0' }}/>
              </Badge>
              <Typography variant='subtitle2' sx={{ml: 2, mt: 1.5, fontSize: 30}}>Nombre: {data.name}</Typography>
              <Typography sx={{color: '#5F6E82', ml: 2, mt: 1.5, fontSize: 30}}>Valor: ${prices[head]}</Typography>
              <IconButton onClick={closeDialog} sx={{position: 'absolute', right: 50, top: 27}}>
                <Close />
              </IconButton>
            </Box> 
          }
        </DialogTitle>
        <DialogContent sx={{pl: 8, pr: 8, pb: 4}}>
          <Box>
            {loading 
              ? <Skeleton variant="rectangular" width='100%' height={100}/>
              : <Box sx={{ borderBottom: 1,  borderColor: '#e0e0e0', display: 'flex'}} >
                  <BasicTabs tabs={tabsGames} sizeTabs={18}/>
                </Box>
            }
            
          </Box>
          <Box mt={3} ml={-1}>
            {loading 
              ? <Skeleton variant="rectangular" width='100%' height={40}/>
              : <UpdateShoppingCar shoppingCar={shoppingCar} onSetShoppingCar={onSetShoppingCar} element={data} prices={prices}/>
            }
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
