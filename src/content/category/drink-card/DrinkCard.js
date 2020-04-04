import React from 'react'
import DrinkImage from './DrinkImage'
import './drink-card.scss'

class DrinkCard extends React.Component{

    handleClickOnImage = () => {
        this.props.onImageClick(this.props.strDrink, this.props.strDrinkThumb, this.props.idDrink)
        
    }

    handleClickOnTitle = () => {
        this.props.titleClicked(this.props.strDrink, this.props.strDrinkThumb, this.props.idDrink)
    }

    render() {
        return (
            <div className="drink-card">
                <DrinkImage onImageClick={this.handleClickOnImage} src={this.props.strDrinkThumb}/>
                <h3 onClick={this.handleClickOnTitle.bind(this)}>{this.props.strDrink} </h3>
            </div>
        )
    }

}
export default DrinkCard;