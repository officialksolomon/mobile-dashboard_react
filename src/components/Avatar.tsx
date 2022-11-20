import React from 'react';
import { FaUser } from 'react-icons/fa';
import Box from './Box';
import IconBox from './IconBox';

interface AvatarInterface {
  image: string;
}

function Avatar({ image }: AvatarInterface) {
  return (
    // <IconBox
    //   iconBoxStyle={{ border: 'none', backgroundColor: 'blueviolet'}}
    //   icon={<FaUser size={24} />}
    // />
    <Box boxStyle={{ flexBasis: '70px', padding: 0 }}>
      <img className="rounded-lg w-full" src={image} alt="dp" />
    </Box>
  );
}

export default Avatar;
