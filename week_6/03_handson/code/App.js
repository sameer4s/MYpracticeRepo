import logo from './logo.svg';
import { CalculateScore } from './Componenets/CalculateScore';  
function App() {
  return (
    <div className='container'>
      <CalculateScore Name={"Samarth"}
      School={"LBS kota"}
      Total={284}
      goal={3}
      />
      
    </div>
  );
}

export default App;
