// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTab, changeCategory, isActive} = props
  const {displayText, tabId} = eachTab
  const classN = isActive ? 'act-btn' : 'norm-btn'

  const onChange = () => {
    changeCategory(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onChange} className={classN}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
