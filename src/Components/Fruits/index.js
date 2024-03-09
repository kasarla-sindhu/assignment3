import './index.css'

const Fruits = props => {
  const {details, imgSelected} = props
  const {id, thumbnailUrl} = details

  const imgClicked = () => {
    imgSelected(id)
  }

  return (
    <li className="img-con">
      <button type="button" onClick={imgClicked}>
        <img src={thumbnailUrl} className="img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default Fruits
