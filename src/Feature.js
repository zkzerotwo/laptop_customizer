import React from 'react'
import Item from './Item'


function Feature(props) {
    console.log(props)
    const features = Object.keys(props.features)
        .map(key => {
            const options = props.features[key].map((item, index) => {

                const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return (

                    <Item
                        item={item}
                        key={item.name}
                        feature={key}
                        updateFeature={props.updateFeature}
                        featureClass={featureClass}
                    />

                )
            });

            return (
                <div className="feature" key={key}>
                    <legend className="feature__name">
                        <h3>{key}</h3>
                    </legend>
                    {/*<ul className="feature__list">*/}
                    {options}
                    {/*</ul>*/}
                </div>
            )
        });

    return features
}


export default Feature;