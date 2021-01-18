import React from 'react';
import './App.css';
import Feature from './Feature'


function FeatureContainer(props) {
console.log(props)
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Feature
                features={props.features}
                updateFeature={props.updateFeature}
                selected={props.selected}
            />
        </section>
    )
}

export default FeatureContainer;