import React from 'react'
import DrinkImage from '../category/drink-card/DrinkImage'
import './details.scss'

class DrinkDetails extends React.Component {

    goBack = () => {
        this.props.goBack();
    }
    
    doNothing = () => {
        console.log('doing nothing');
    }

    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <DrinkImage onImageClick={this.doNothing} src={this.props.src}/>
                <button className="back-button" onClick={() => this.goBack()}> Back </button>
            </div>
        )
    }
}

export default DrinkDetails;