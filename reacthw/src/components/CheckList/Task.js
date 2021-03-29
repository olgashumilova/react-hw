import React, {useState, useCallback} from 'react'

const Task = ({text, onPress}) => {

    const [done, setDone] = useState(false)

    const onChange = useCallback((event) => {
        setDone(event.target.checked);
        onPress(event.target.checked)
    }, [setDone, onPress])

    return (
        <div>

            <input 
                type = "checkbox"
                checked = {done}
                onChange = {onChange}
            />

            <span>{text}</span>
        </div>
    )
}

export default Task;