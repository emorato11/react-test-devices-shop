import { useState } from 'react'
import './Actions.scss'

const Actions = ({colors}) => {

    const [selectedColor, setSelectedColor]= useState(null)

    return (
        <>
            { 
            colors.map( color => 
                <label 
                    key={color} 
                    className={
                    color === selectedColor ? 
                        'radioPad__wrapper radioPad__wrapper--selected' :
                        'radioPad__wrapper'
                    }
                >
                    <input
                        className="radioPad__radio"
                        type="radio" 
                        name="coffeeTypes" 
                        id={color} 
                        value={color}
                        onChange={() => setSelectedColor(color)}
                    />
                    {color}
                </label>
            )}
        </>
    )
}

export default Actions