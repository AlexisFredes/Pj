import React, { useCallback, useEffect, useState } from 'react'
import { Box, CircularProgress} from '@mui/material';
import { useParams } from "react-router-dom";
import { DialogContainer } from '../containers/DialogContainer';
import { BasicCard } from './shared/BasicCard';
import { BasicTabs } from './shared/BasicTabs';
import { LittleCar } from './shared/LittleCar';
import { AVAILABLE_CHARACTERS, LITTLE_CAR } from '../utils/constants/general';

export const Home = ({gameSeries, shoppingCar, prices, onGetGameSeriesByName, onSetShoppingCar, onSetPrices}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { head } = useParams();

  const generateMultipleOfTen = useCallback(() => {
    const number = Math.round(Math.random() * (100000 - 1000) + 1000);

    if (number % 10 === 0) return number
    else return generateMultipleOfTen()
  }, [])

  const generatePrices = useCallback((data) => {
    let prices = {}

    data.map(elem => 
      prices[elem.head] = generateMultipleOfTen()
    )

    return prices
  }, [generateMultipleOfTen])

  useEffect(() => {
    if (gameSeries) {
      !prices && onSetPrices(generatePrices(gameSeries))

      setData(gameSeries)

      setLoading(false)
    } 
  }, [gameSeries, prices, onSetPrices, generatePrices])

  useEffect(() => !gameSeries && onGetGameSeriesByName('pokemon'), [onGetGameSeriesByName, gameSeries]);

  const tabsGames= [
    {
      title: AVAILABLE_CHARACTERS,
      content: <BasicCard data={data} onSetShoppingCar={onSetShoppingCar} shoppingCar={shoppingCar} prices={prices}/>
    },
    {
      title: LITTLE_CAR,
      content: <LittleCar shoppingCar={shoppingCar} little={true}/>
    }
  ]

  return (
    <>
      {
        loading 
        ? <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}><CircularProgress /></Box>
        : <BasicTabs tabs={tabsGames} sizeTabs={24}/>
      }
      {head && <DialogContainer head={head} />}
    </>
  )
}
