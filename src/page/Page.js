import React from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import './page.scss'

function Page() {
    return (
        <div className="page-container">
            <Header className="header"/>
            <Content className="content"/>
            <Footer className="footer"/>
        </div>
    )
}

export default Page;