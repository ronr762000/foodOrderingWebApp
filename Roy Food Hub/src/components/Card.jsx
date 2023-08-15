function Card() {
  return (
<div>
<div className="card mt-2" style={{"width": "18rem", "maxHeight":"360px"}}>
     <img className="card-img-top" src="https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">Panner Tikka</h5>
    <p className="card-text">Delicious panner tikka kebab at Karims</p>
    <div className="container w-100">
        <select className='m-2 h-100  bg-success rounded'>
            {Array.from(Array(6), (e,i) => {
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
        </select>
        <select className='m-2 h-100 bg-success rounded'>
            <option key="half" value="half">Half</option>
            <option key="full" value="full">full</option>
        </select>

        <div className="d-inline h-100 fs-5">
            Total Price
        </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Card