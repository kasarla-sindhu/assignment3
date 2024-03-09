import './index.css'

const Buttons = props => {
  const {details, tabSelected, isActive} = props
  const {tabId, displayText} = details
  const tabChoosed = () => {
    tabSelected(tabId)
  }
  const value = isActive ? 'selected-butn' : 'butn'
  return (
    <li className="button">
      <button type="button" className={value} onClick={tabChoosed}>
        {displayText}
      </button>
    </li>
  )
}

export default Buttons
