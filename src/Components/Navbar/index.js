import './index.css'

const Navbar = props => {
  const {count, timeInSec} = props
  return (
    <ul className="nav-con">
      <li className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="img"
        />
      </li>
      <li className="scores">
        <p className="score">
          Score: <span className="time">{count}</span>
        </p>
        <div className="timer-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time">{timeInSec} Sec</p>
        </div>
      </li>
    </ul>
  )
}
export default Navbar
