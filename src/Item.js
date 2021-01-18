import React from 'react'


function Item(props) {
    console.log(props)
    return (
        <div className="feature__item" >
            <input
                id={props.item.name}
                type="radio"
                name={props.feature}
                className={props.featureClass}
                checked={props.featureClass.includes('feature__selected') ? true : false}
                onChange={e => props.updateFeature(props.feature, props.item)}
            />

            <label htmlFor={props.item.name} className="feature__label"  >
                {props.item.name}
                ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.item.cost)})

            </label>
        </div>
    )
}

export default Item;