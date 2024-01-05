import './App.css';
import { MapFunc } from './hw/MapFunc'
import { FilterFunc } from "./hw/FilterFunc";


function App() {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  return <>
    <MapFunc cars={ topCars }/>
    <FilterFunc />
  </>
}

export default App;
