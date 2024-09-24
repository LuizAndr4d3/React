import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 4;
  const redTitle = true;
  return (
    <div className='App'>
      {/*css global*/}
      <h1>React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      <p>este paragrafo é do app.js</p>
      {/* css inline */}
      <p style={{color: "blue", padding:"25px", borderTop:"2px solid red"}}>elemento estilzado inline</p>
      {/* CSS inline Dinamico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}> CSS DINAMICO </h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título tem classe dinamica</h2>
      {/* CSS MODULES */}
      <Title/>
    </div>
  )
}

export default App
