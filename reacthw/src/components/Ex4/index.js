import React from "react";
import data from './data.json'
import './styles.css'

class Ex4 extends React.Component {

  render () {
      return (
      <div>
        {data.map (element => 

          <div key = {element._id} className='container'>
            <h3>{element.name.first}</h3>
            <h4>{element.name.last}</h4>
          </div>

        )}
      </div>
    )
  }
}

export default Ex4;