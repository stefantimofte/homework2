import React from 'react'
import axios from 'axios'

class DrinkImage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            src: null
        }
    }

    componentDidMount(){
        axios.get(this.props.src)
        .then(res => {
            this.setState({src: res})
        })
    }

    imageClicked() {
        this.props.onImageClick();
    }

    render() {
        return(
            <img alt="drink" src={this.props.src} style={{width: "330px" }} onClick={() => this.imageClicked()}></img>
        )
    }
}

export default DrinkImage;