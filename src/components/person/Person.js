import React from 'react';

const Person=(props)=> {
  return(
    <div>
      <h2>Firstname: {props.firstname}</h2>
      <h2>Lastname: {props.lastname}</h2>
      <h2>Likes: {props.likes}</h2>
      <hr/>
    </div>
  );
}

export default Person;
