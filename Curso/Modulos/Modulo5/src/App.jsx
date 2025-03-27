import './App.css'
import Myform from './Components/Myform'

function App() {
  return (
    <>
      <div>
        <h2>Forms</h2>
        <Myform user={{name: 'Josias', email: 'josias@gmail.com', bio: 'Advogado', role: 'admin'}}/>
      </div>
    </>
  )
}

export default App
