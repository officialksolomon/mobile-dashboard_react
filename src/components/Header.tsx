import React from 'react';
import Box from './Box';

interface HeaderProps {
  title?: string;
  titleColor?: string;
  titleSize?: number;
  titlePosition?: 'start' | 'center' | 'end';
  headerRight?: JSX.Element;
}

// For Simplicity:
// ClassNames for tailwind styles
// style attribute for dynamic styles
function Header({
  title,
  titleColor,
  titleSize,
  titlePosition,
  headerRight
}: HeaderProps) {
  return (
    <Box
      boxStyle={{
        // boxShadow: '0px 3px 5px #deddd9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
        backgroundColor: 'white',
        margin: 0,
        paddingTop: '1em',
        paddingBottom: '1em',
        borderRadius: 0
      }}
    >
      <h1
        className="font-bold w-full"
        style={{
          color: titleColor,
          fontSize: titleSize,
          textAlign: titlePosition
        }}
      >
        {title ? title : 'Header Title'}
      </h1>
      {headerRight && headerRight}
    </Box>
  );
}

export default Header;
