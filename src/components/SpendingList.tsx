import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import itemsBoxColor from '../helpers/spendingItemsColor';
import Box from './Box';
import IconBox from './IconBox';
import SpendingItem from './SpendingItem';

function SpendingList() {
  return (
    <Box
      boxStyle={{
        alignItems: 'flex-start',
        boxShadow: '0px 5px 5px #deddd9',
        marginBottom: 10
      }}
    >
      <p className="text-slate-500 font-semibold text-xs w-full mb-3">
        Daily Spending
      </p>
      {itemsBoxColor.map((color, index) => (
        <SpendingItem key={color + index} boxColor={color} />
      ))}
    </Box>
  );
}

export default SpendingList;
