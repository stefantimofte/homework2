import React from 'react'
import DrinkCard from '../category/drink-card/DrinkCard'

class CategoryList extends React.Component {
    
    titleClicked = (strDrink, strDrinkThumb, idDrink) => {
        this.props.titleClicked(strDrink, strDrinkThumb, idDrink);
    }

    imageClicked = (strDrink, strDrinkThumb, idDrink) => {
        this.props.onImageClick(strDrink, strDrinkThumb, idDrink);
    }    

    render() {
        const alcoholicDrinks = this.props.alcoholic.map((drink, index) => 
            <DrinkCard titleClicked={this.titleClicked} onImageClick={this.imageClicked} {...drink} key={index}/>
        )
        const nonAlcoholicDrinks = this.props.alcoholic.map((drink, index) => 
            <DrinkCard titleClicked={this.titleClicked} onImageClick={this.imageClicked} {...drink} key={index} />
        )
        const ordinaryDrinks = this.props.alcoholic.map((drink, index) => 
            <DrinkCard titleClicked={this.titleClicked} onImageClick={this.imageClicked} {...drink} key={index} />
        )
        const champagneFlutes = this.props.alcoholic.map((drink, index) => 
            <DrinkCard titleClicked={this.titleClicked} onImageClick={this.imageClicked} {...drink} key={index} />
        )
        const cocktailGlasses = this.props.alcoholic.map((drink, index) => 
            <DrinkCard titleClicked={this.titleClicked} {...drink} key={index} onImageClick={this.imageClicked}/>
        )

        return(
            <div>
                <h2> Alcoholic Drinks</h2>
                    <div>{alcoholicDrinks}</div>
                <h2> Non Alcoholic Drinks</h2>
                    <div>{nonAlcoholicDrinks}</div>
                <h2> Ordinary Drinks</h2>
                    <div>{ordinaryDrinks}</div>
                <h2> Champagne Flute</h2>
                    <div>{champagneFlutes}</div>
                <h2> Cocktail Glass</h2>
                    <div>{cocktailGlasses}</div>
            </div>
        ) 
    }
}

export default CategoryList;