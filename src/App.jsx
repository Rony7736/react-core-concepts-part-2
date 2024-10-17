
import './App.css'
import Counter from './Counter'
import Team from './team'
import Users from './user'
import Friends from './friends'

function App() {

  // normal function
  function handleClicked (){
    alert('button clicked')
  }

  // arrow function
  const handleClicked2 = () =>{
    alert('button 2 clicked')
  }

  // parameter arrow function
  const handleClicked4 = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClicked}>Click</button>
      <button onClick={handleClicked2}>Click2</button>
      <button onClick={() => {alert('button 3 clicked')}}>Click3</button>

      {/* advance */}
      <button onClick={() => handleClicked4(3)}>Click4</button>

    </>
  )
}

export default App
