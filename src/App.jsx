import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('')
  const [player, setPlayer] = useState('')
  const [cpu, setCpu] = useState('')
  const [score, setScore] = useState({
    won: 0,
    lost: 0,
    ties: 0
  })


  const opt = ['rock', 'paper', 'scissors']

  const pcSelect = (arr) => setCpu(arr[Math.floor(Math.random() * arr.length)])

  const check = (pVal, cpuVal) => {
    console.log(pVal, cpuVal);
    if (pVal === cpuVal) {
      setScore({
        ...score,
        ties: score.ties + 1
      });
      return alert(`CPU selected ${cpuVal}, means it's a tie!`)
    }
    if (pVal === 'rock' && cpu === 'paper') {
      setScore({
        ...score,
        lost: score.lost + 1
      });
      return alert(`CPU selected ${cpuVal}, means you lost!`)
    }
    else if (pVal === 'paper' && cpu === 'scissors') {
      setScore({
        ...score,
        lost: score.lost + 1
      });
      return alert(`CPU selected ${cpuVal}, means you lost!`)
    }
    else if (pVal === 'scissors' && cpu === 'rock') {
      setScore({
        ...score,
        lost: score.lost + 1
      });
      return alert(`CPU selected ${cpuVal}, means you lost!`)
    }
    else {
      setScore({
        ...score,
        won: score.won + 1
      });
      return alert(`Congrats, you Win!`)
    }
  }


  const handleSelect = (val) => {
    setPlayer(prev => prev = val)
    pcSelect(opt)
    player && cpu && check(val, cpu)
  }



  return (
    <div className="App bg-dark ">
      <h1>
        {player}
      </h1>
      <header className="App-header bg-dark">
        <h1>Welcome to Rock Paper Scissors</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
        {username ? <p>You are: {username}</p> : ''}
      </header>

      <main className=''>
        <section className="container ">
          <div className='card my-3 p-3'>
            <h3 className='my-3'>Score board:</h3>
            <div className='d-flex justify-content-around my-3'>
              <h3 className='border border-success bg-success p-3'>Won: {score.won}</h3>
              <h3 className='border border-danger bg-danger p-3'>Lost: {score.lost}</h3>
              <h3 className='border border-warning bg-warning p-3'>Ties: {score.ties}</h3>
            </div>
          </div>
        </section>
        <section className='p-3'>

          <h2>Select your weapon</h2>
          <div className="container d-flex justify-content-around">
            <div className="card p-3 ">
              <button className='btn' onClick={() => handleSelect('rock')}>ROCK</button>
            </div>
            <div className="card p-3">
              <button className='btn' onClick={() => handleSelect('paper')}>PAPER</button>
            </div>
            <div className="card p-3">
              <button className='btn' onClick={() => handleSelect('scissors')}>SCISSORS</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
