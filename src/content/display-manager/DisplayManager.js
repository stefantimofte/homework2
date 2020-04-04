import React from 'react'
import axios from 'axios'
import CategoryList from '../categories-list/CategoryList'
import DrinkDetails from '../details-section/DrinkDetails'
import DetailsSection from '../details-section/DetailsSection'

class DisplayManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showList: true,
            imageClicked: false,
            titleClicked: false,
            alcoholic: [],
            nonAlcoholic: [],
            ordinaryDrink: [],
            cocktailGlass: [],
            champagneFlute: [],
            drinkClicked: {
                strDrink: null,
                strDrinkThumb: null,
                idDrink: null
            }
        }
    }

    componentDidMount(){
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => {
            this.setState({alcoholic: res.data.drinks})
        })

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then(res => {
            this.setState({nonAlcoholic: res.data.drinks})
        })

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
        .then(res => {
            this.setState({ordinaryDrink: res.data.drinks})
        })

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_Glass')
        .then(res => {
            this.setState({cocktailGlass: res.data.drinks})
        })

        
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
        .then(res => {
            this.setState({champagneFlute: res.data.drinks})
        })
        
    }

    imageClicked = (strDrink, strDrinkThumb, idDrink) => {
        this.setState({showList: false, imageClicked: true, titleClicked: false, drinkClicked: {strDrink: strDrink, strDrinkThumb: strDrinkThumb, idDrink: idDrink}})
    }

    titleClicked = (strDrink, strDrinkThumb, idDrink) => {
        this.setState({showList: false, imageClicked: false, titleClicked: true, drinkClicked: {strDrink: strDrink, strDrinkThumb: strDrinkThumb, idDrink: idDrink}})
    }

    hideDetails = () => {
        this.setState({showList: true, imageClicked: false, titleClicked: false,})
    }

    goBack = () => {
        this.setState({showList: true, imageClicked: false, titleClicked: false,})
    }
    
    render() {
        
        return (
            <div>
                {this.state.showList ? 
                    <CategoryList 
                        alcoholic={this.state.alcoholic} 
                        nonAlcoholic={this.state.nonAlcoholic} 
                        ordinaryDrink={this.state.ordinaryDrink} 
                        cocktailGlass={this.state.cocktailGlass} 
                        champagneFlute={this.state.champagneFlute}
                        titleClicked={this.titleClicked}
                        onImageClick={this.imageClicked}
                        /> : 
                this.state.imageClicked ? <DrinkDetails goBack={this.goBack} src={this.state.drinkClicked.strDrinkThumb} title={this.state.drinkClicked.strDrink}/> :
                this.state.titleClicked ? <DetailsSection hideDetails={this.hideDetails} src={this.state.drinkClicked.strDrinkThumb} title={this.state.drinkClicked.strDrink} id={this.state.drinkClicked.idDrink}/> : null
                }
                
            </div>

        )
    }
}

export default DisplayManager;