import React, {useState} from 'react'
import Task from './Task'

const toDoItems = [
    {
        id: 0,
        text: 'Learn React',
    },
    {
        id: 1,
        text: 'Walk with dog',
    },
    {
        id: 2,
        text: 'Play the guitar',
    },
    {
        id: 3,
        text: 'Sleep',
    },
];

const CheckList = ({title}) => {

    const [trues, setTrues] = useState (0)

    const onPress = (checked) => {
        if (checked) {
            setTrues(trues => trues + 1)
        }
        else {
            setTrues(trues => trues - 1)
        }
    }

    const progressWidth = parseInt(trues / toDoItems.length * 100, 10)

    return (
        <div className="checkbox">

            <h1>{title}</h1>

            <div className="loadbar">
                <div className="progress" style={{width: `${progressWidth}%`}}></div>
            </div>

            {toDoItems.map((item) => {
                return (
                <Task 
                    key={item.id}
                    text={item.text}
                    onPress={onPress}/>
                )
            })}

        </div>
    )
}

export default CheckList;
