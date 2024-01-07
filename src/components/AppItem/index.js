// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="appItem">
      <img className="appImg" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
