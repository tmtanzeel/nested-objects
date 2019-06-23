import React, { Component } from 'react';
import Person from '../person/Person';

class Reader extends Component {
  state={
    people: [
      {name: "tanzeel", fruits:["apple", "banana", "grapes"], colors: ["red","salmon","mauve"], car: ["cardilac"], image: "1.png"}
      // {name: "maximillain", fruits:["pumpkin", "kiwi", "pineapple"], colors: ["pink","cyan","magenta"], car: ["mustang"], image: "2.png"},
      // {name: "daniel", fruits:["custard", "peanuts", "avacado"], colors: ["blue","black","grape vine"], car: ["camaro"], image: "3.png"}
    ],
    content: null
  };

  contentLoad=()=> {
    let obj;
    this.state.people.forEach(function(value) {
      obj={name: value.name, fruits: value.fruits, car: value.car}
    });
    console.log(obj);
    this.setState({content: obj})
    console.log(this.state.content);
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
