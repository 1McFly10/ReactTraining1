import React,{Component}  from 'react'



function Testteamplate({car, onMark, visible}){
    if(!visible) {
        return null;
    }
    const classes = ['card'];
    if(car.marked !== true){
        classes.push('marked');
    }
  return(
      <div className={classes.join(' ')} style={{marginRight: '1rem',marginLeft: '1rem', marginTop:'2rem', boxShadow: '0 0 10px rgba(0,0,0,0.5)',  border:'1px solid transparent', borderRadius:'10px', padding:'1rem'}} onClick={onMark}>
          <h1 style={{fontSize: '17px'}}>{car.name}</h1>
          <img style={{width: '270px',border:'0.2px solid white', boxShadow: '0 0 10px rgba(0,0,0,0.5)',borderRadius:'10px'}} src={car.img} />
          <p style={{fontSize: '17px'}}>${car.price}</p>
      </div>
  )

}
export default Testteamplate