import React from 'react'
import Feature from './Feature'

class Main extends React.Component {
    render(props) {
        console.log(props)
        return (
        <main>
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature USCurrencyFormat={this.props.USCurrencyFormat} />
                {/* {this.props.features} */}
            </form>
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.props.summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.props.USCurrencyFormat.format(this.props.total)}
                    </div>
                </div>
            </section>
        </main>
        )
    }
}

export default Main;