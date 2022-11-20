import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import Box from './Box';
import IconBox from './IconBox';

interface SpendingItemInterface {
  boxColor?: string;
}

function SpendingItem({ boxColor }: SpendingItemInterface) {
  return (
    <>
      <Box
        boxStyle={{
          flexDirection: 'row',
          justifyContent: 'stretch',
          paddingRight: 7,
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        <IconBox
          iconBoxStyle={{
            backgroundColor: boxColor ? boxColor : 'blueviolet',
            flexGrow: 0,
            border: 'none',
            paddingTop: '0.8em',
            paddingBottom: '0.8em'
          }}
          icon={<FaMoneyBill size={20} />}
        />
        <Box
          boxStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            border: 'none'
          }}
        >
          <p className="text-sm text-slate-400 font-semibold">Net Banking</p>
          <p className="text-sm text-black font-semibold ">$509.89</p>
        </Box>
      </Box>
    </>
  );
}

export default SpendingItem;
