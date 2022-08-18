import './index.css'

const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classE1 = isActive === true ? 'activeEl' : 'notActive'

  const ok = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button className={classE1} type="button" onClick={ok}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
