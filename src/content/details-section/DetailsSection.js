import React from 'react'
import DrinkImage from '../category/drink-card/DrinkImage';

class DetailsSection extends React.Component {
    hide = () => {
        this.props.hideDetails();
    }

    doNothing = () => {
        console.log('doing nothing');
    }    

    render() {
        return(
            <div>
                <button onClick={() => this.hide()}> Hide details </button>
                <DrinkImage onImageClick={this.doNothing} src={this.props.src}/>
                <h2>{this.props.title}</h2>
                <h2>{this.props.id}</h2>
            </div>
        )
    }
}

export default DetailsSection;