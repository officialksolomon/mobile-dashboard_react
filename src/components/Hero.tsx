import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import { IconBase } from 'react-icons/lib';
import Box from './Box';
import IconBox from './IconBox';
import Progress from './Progress';

function Hero() {
  return (
    <Box
      boxStyle={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'blueviolet',
        borderRadius: 20
      }}
    >
      <Box
        boxStyle={{
          alignItems: 'flex-start',
          background: 'none',
          border: 0,
          padding: 0,
          margin: 0,
          borderRadius: 20
        }}
      >
        <p className="text-xs">January</p>
        <h1 className="text-3xl font-bold">$400</h1>
        <Progress />
        <p className="text-xs">Daily spend target: $17.00</p>
      </Box>
      <Box boxStyle={{ background: 'none', border: 0, flexGrow: 0 }}>
        <IconBox
          iconBoxStyle={{ background: 'none', border: 0 }}
          icon={<FaChartBar size={30} />}
        />
      </Box>
    </Box>
  );
}

export default Hero;
