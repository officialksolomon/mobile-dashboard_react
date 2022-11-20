import React from 'react';
import Box from './Box';

function Progress(): JSX.Element {
  return (
    <Box boxStyle={{ background: 'none', border: 0, paddingLeft: 0 }}>
      <div id="progress" className="w-full bg-none border rounded-2xl h-1 ">
        <div className="bg-white h-1 w-1/2"></div>
      </div>
    </Box>
  );
}

export default Progress;
