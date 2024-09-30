import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2 className='result'>A sua pontuação foi: <span>{score}</span></h2>
      <button className='buttonover' onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default GameOver