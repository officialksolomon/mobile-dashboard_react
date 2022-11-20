import React from 'react';
import { FaBeer } from 'react-icons/fa';
import Box from './Box';
interface IconBox {
  icon: JSX.Element;
  text?: string;
  iconBoxStyle?: React.CSSProperties;
}

function IconBox({ icon, text, iconBoxStyle }: IconBox) {
  return (
    <Box boxStyle={{ ...iconBoxStyle, minWidth: text && '30%' }}>
      {icon}
      {text && <p className="text-xs">{text}</p>}
    </Box>
  );
}

export default IconBox;
