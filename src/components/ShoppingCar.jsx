import React, { useState, useEffect } from 'react'
import { FINALIZE_PURCHASE, PURCHASE_DATAIL } from '../utils/constants/general';
import { BasicTable } from './shared/BasicTable';
import { BasicTabs } from './shared/BasicTabs';
import { LittleCar } from './shared/LittleCar';

export const ShoppingCar = ({shoppingCar, onSetShoppingCar}) => {
  const [dataTable, setDataTable] = useState([])

  const generateTable = (data) => {
    const newTable = Object.keys(data).map(key => ({
      id: data[key].id,
      Product: <img src={data[key].img} alt={data[key].id} style={{width: 50, height: 50}}/>,
      Detail: data[key].detail,
      Price: `$ ${data[key].price}`,
      Amount: data[key].amount,
      SubTotal: `$ ${data[key].price * data[key].amount}`
    }))

    setDataTable(newTable)
  }

  useEffect(() => shoppingCar && shoppingCar.length !== 0 && generateTable(shoppingCar), [shoppingCar]);

  const tab = [
    {
      title: PURCHASE_DATAIL,
      content: shoppingCar.length !== 0 && <BasicTable data={dataTable} key={'game3DS'}/>
    },
    {
      title: FINALIZE_PURCHASE,
      content: <LittleCar shoppingCar={shoppingCar} onSetShoppingCar={onSetShoppingCar}/>
    }
  ]

  return (
    <>
      {shoppingCar && <BasicTabs tabs={tab} sizeTabs={18} />}
    </>
  )
}
