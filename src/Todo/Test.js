import React,{Component} from 'react'
import img from '../images/bentley.jpg'
import img1 from  '../images/aston_db11.jpg'
import img2 from  '../images/bmw_m2_coupe.jpeg'
import Testteamplate from "./Testteamplate"









class Test extends React.Component{
    state = {cars:[
            {name: 'BMW M2 Coupe', price: '70.000', img: img2, marked: true},
            {name: 'Bentley Continental GT', price: '290.000', img: img, marked: true},
            {name: 'Aston Martin DB11', price: '360.000', img: img1, marked: true}
            ],
        visible: true
    };
    markedUp(name){
        const cars = this.state.cars.concat();
        const car = cars.find(el=> el.name === name);
        car.marked = !car.marked;
        this.setState({cars})
        // console.log(this.state.cars);
    }
    renderCars(){

        return this.state.cars.map((car)=>{
            return(
                <Testteamplate car={car} onMark={this.markedUp.bind(this, car.name)} visible={this.state.visible}/>
            )})
    }
    toggleHandler(){
        this.setState({visible: !this.state.visible})
    }

    render() {

        return (

            <React.Fragment>
                <button onClick={()=>this.toggleHandler()}>Toggle</button>
            <div style={{width:'100%', height: '100%', flexDirection:'row',display: 'flex',justifyContent: 'space-around', textAlign: 'center'}}>

            {this.renderCars()}

        </div>
            </React.Fragment>
        )

    }


}


export default Test

