import React from 'react';

function Ex1 (props){
  const a = props.decoration ? 'underline' : 'none';

  return <p style = {{fontSize:props.size + 'px', color:props.color, textDecoration:a}}> {props.text} </p>
}

export default Ex1;