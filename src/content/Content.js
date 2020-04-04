import React from 'react'
import TabGroup from './tabs-group/TabsGroup';
import SearchInput from './search-component/SearchInput'
import DisplayManager from './display-manager/DisplayManager';

class Content extends React.Component {


    render() {
        return(
            <div>
                <TabGroup tabNames={['Alcoholic', 'Non Alcoholic', 'Ordinary Drink', 'Cocktail glass', 'Champagne flute']}/>
                <SearchInput/>
                <DisplayManager/>
            </div>
        )
    }

}

export default Content;