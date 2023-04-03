import './App.css';
import Cell from './components/Сell/Сell'
import Line from './components/Line/Line';

function App() {
  let arrLine = []
  const alfStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let alfArr = alfStr.split('')

  console.log(alfArr[0])

  for (let i = alfArr[0]; i < alfArr[alfArr.length]; i++ ) {
    console.log(i)
  }

  for (let i = 1; i < 9; i++) {
    arrLine.push(i)
  }

  // console.log(arrLine)

  return (
    <div className="App">
      {arrLine.map((el) => (
        <Line
          number={el}
        />
      ))}
    </div>
  );
}

export default App;
