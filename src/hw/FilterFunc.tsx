import React, { useState } from 'react';
import { Button } from "./../components/Button";

type MoneyType = {
  banknots: 'Dollars' | 'RUBLS'
  value: number
  number: string
}

type FilterValueType = "all" | "Dollars" | "Rubles"

export const FilterFunc: React.FC = () => {
  const [money, setMoney] = useState<MoneyType[]>([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [filter, setFilter] = useState<FilterValueType>("all")

  let filteredMoney = money;

  if (filter === "Dollars") {
    filteredMoney = money.filter(m => m.banknots === "Dollars")
  }
  if (filter === "Rubles") {
    filteredMoney = money.filter(m => m.banknots === "RUBLS")
  }

  return (
    <div>
      <ul>
        {filteredMoney.map( m => {
          return <li key={m.number}>{m.banknots}: {m.value} {m.number}</li>
        })}
      </ul>
      <Button title={"All"} callBack={() => setFilter("all")} />
      <Button title={"Dollars"} callBack={() => setFilter("Dollars")} />
      <Button title={"Rubles"} callBack={() => setFilter("Rubles")} />
    </div>
  );
};
