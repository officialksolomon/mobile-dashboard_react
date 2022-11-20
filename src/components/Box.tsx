import React from 'react';

interface BoxInterface {
  children: React.ReactNode;
  boxStyle?: React.CSSProperties;
}

/**
 * A responsive box than can be use to wrap any element.
 * Box Component is a flex container by default with a flexDirection set to column.
 * You can use the `boxStyle` to override default stylings.
 * @returns `JSX.Element`
 */
function Box({ boxStyle, children }: BoxInterface) {
  return (
    <div
      className="box w-full  flex flex-col flex-nowrap flex-1 justify-center items-center border bg-slate-50 text-white p-3  m-1  rounded-md hover:opacity-90"
      style={boxStyle}
    >
      {children}
    </div>
  );
}

export default Box;
