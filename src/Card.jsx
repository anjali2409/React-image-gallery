const Card= (props) => {
  return (
    <div>
        <div>
        <img src={props.elem.download_url} alt='/'/>
        </div>
        <h3>{props.elem.author}</h3>
    </div>
  )
}

export default Card