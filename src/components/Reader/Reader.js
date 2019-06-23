import React, { Component } from 'react';

class Reader extends Component {
  state={
    people: [
      {name: "tanzeel", fruits:["apple", "banana", "grapes"], colors: ["red","salmon","mauve"], car: ["cardilac"], image: "1.png"}
      //INTETIONALLY COMMENTED OUT FOR FOR SOMETIME FOR SIMPLICITY
      // {name: "maximillain", fruits:["pumpkin", "kiwi", "pineapple"], colors: ["pink","cyan","magenta"], car: ["mustang"], image: "2.png"},
      // {name: "daniel", fruits:["custard", "peanuts", "avacado"], colors: ["blue","black","grape vine"], car: ["camaro"], image: "3.png"}
    ],
    content: null //object initially null
  };

  contentLoad=()=> {
    let obj;
    this.state.people.forEach(function(value) {
      obj={name: value.name, fruits: value.fruits, car: value.car} //object with value
    });
    console.log(obj); //this is good
    this.setState({content: obj}) //being copied here
    console.log(this.state.content); //this is printing null for the first click only
  }

  render() {
    return(
      <div>
        <button onClick = {()=>this.contentLoad()}>Click</button>
      </div>
    );
  }
}

export default Reader;
