import React, { Component } from 'react';
import App from './App';

class Coursesales extends Component {
  grandTotal(price){
    this.setState({total: this.state.total + price})

  }
  constructor(props){
    super(props);

    this.state = {
      total: 0
    };
    this.grandTotal = this.grandTotal.bind(this);
  }

  render() {
    console.log(this.props.items)
    App.courses = this.props.items.map((item, i) => {
      return <Course name={item.name} price={item.price}
        key={i} grandTotal={this.grandTotal} active={item.active}/>
    });
    return (
      <div>
          <h1>You can buy courses: </h1>
          <div id='courses'>
            <p id="total"> Total: <b>{this.state.total}</b></p>
          </div>
      </div>
    )
  }
}

class Course extends Component {

  clicker() {
    var active =!this.state.active;
    this.setState({active: active});
    this.props.grandTotal(active ? this.props.price : -this.props.price);
  };

  constructor(props){
    super(props);

    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }
  render(){
    return(
    <div>
      <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} {this.props.price}</p>
    </div>
    );
  }
}

export default Coursesales;
