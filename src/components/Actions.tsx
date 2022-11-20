import React from 'react';
import { FaBeer, FaPhone, FaSpotify } from 'react-icons/fa';
import Box from './Box';
import IconBox from './IconBox';

function Actions() {
  return (
    <Box
      boxStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflowX: 'visible'
      }}
    >
      <p className="text-slate-500 font-semibold text-xs w-full mb-3">
        Actions
      </p>

      <Box
        boxStyle={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          overflowX: 'auto',
          border: 0
        }}
      >
        <IconBox
          icon={<FaPhone size={25} />}
          text={'Phone'}
          iconBoxStyle={{
            backgroundColor: 'blueviolet',
            marginRight: 5,
            marginLeft: 5
          }}
        />
        <IconBox
          icon={<FaBeer size={25} />}
          text={'Beer'}
          iconBoxStyle={{
            backgroundColor: 'orange',
            marginRight: 5,
            marginLeft: 5
          }}
        />

        <IconBox
          icon={<FaSpotify size={25} />}
          text={'Music'}
          iconBoxStyle={{
            backgroundColor: 'skyblue',
            marginRight: 5,
            marginLeft: 5
          }}
        />

        <IconBox
          icon={<FaSpotify size={25} />}
          text={'Music'}
          iconBoxStyle={{
            backgroundColor: 'lightgreen',
            marginRight: 5,
            marginLeft: 5
          }}
        />
      </Box>
    </Box>
  );
}

export default Actions;
