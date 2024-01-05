import React from 'react';

type MapFuncPropsType = {
  cars: CarType[]
}

type CarType = {
  manufacturer: string
  model: string
}

export const MapFunc: React.FC<MapFuncPropsType> = ({ cars }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Manufacturer</th>
          <th>Model</th>
        </tr>
      </thead>
      <tbody>
        { cars.map((car, index) => {
          const number = index + 1;
          return <tr key={ index }>
            <td>{ number }</td>
            <td>{ car.manufacturer }</td>
            <td>{ car.model }</td>
          </tr>
        }) }
      </tbody>
    </table>
  );
};
