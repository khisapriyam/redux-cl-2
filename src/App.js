import { useSelector } from 'react-redux';
import './App.css'
import Colors from './components/colors/Colors';
import Counter from './components/counter/Counter';
import Foods from './components/foods/Foods';
import SingleFood from './components/foods/SingleFood';

function App() {

  const color = useSelector( state => state.color )
  return (
    <>

      <div style={{ backgroundColor: color }} className="main-container">
        <Counter></Counter>
        <Colors></Colors>
        <SingleFood></SingleFood>
        <Foods></Foods>

      </div>
    </>
  );
}

export default App;
