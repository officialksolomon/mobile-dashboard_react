import React from 'react';
import Box from './Box';
import loadingImg from '../assets/images/loading.gif';

/**
 * Renders a loading indicator spinner.
 * Usage with state `{loading && <Loading/>}`
 * @returns `JSX.Element`
 */
function Loading(): JSX.Element {
  return (
    <Box
      boxStyle={{
        background: 'none',
        border: 0,
        position: 'absolute',
        top: '50%'
      }}
    >
      <img width={100} src={loadingImg} alt="" />
    </Box>
  );
}

export default Loading;
