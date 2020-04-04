import React from 'react'
import Tab from './tab/Tab'
import './tabs-group.scss'

class TabGroup extends React.Component {
    render() {
        const tabNames = this.props.tabNames.map((name, index) => <Tab name={name} key={index}/>);

        return(
            <div className="tabs">
                {tabNames}
            </div>
        )
    }
}

export default TabGroup;