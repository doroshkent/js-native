import React from 'react';

type ButtonPropsType = {
  title: string
  callBack: () => void
 }

export const Button: React.FC<ButtonPropsType> = ({title, callBack}) => {

  return (
    <button onClick={callBack}>{title}</button>
  );
};
