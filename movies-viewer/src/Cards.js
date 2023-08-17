export function Cards(props) {
  return (
    <div className="cards">
        <div key={props.id} className='card'>
            <img src={props.imagesUrl} alt='...'/>
            <div className="info">
                <h1>{props.name}</h1>
                <p>{props.description} </p><br/>
            </div>
        </div>
    </div>  
  )
}
