import React from 'react';

function AboutPage(props) {
    return (
        <div className="bg-light">
            <div className="container bg-white text-left p-3">
                <div className="jumbotron">

                    <h1 className="display-4">About</h1>
                </div>
                <div className="lead">
                    <p>
                        Welcom to StockPlus !
                    </p>
                    <p>
                        StockPlus is a Stock Market Index and Historical Data website. It focuses on providing an in-depth data of more
                        than 1500 stocks and 54 indexes of National Stock Exchange for the years 2019-2020.
                    </p>
                    <p>
                        It aims at providing users with providing data of the pandemic times to see how our stock market rumbled. The charts available
                        a great add-on to it.
                    </p>
                    <p>
                        This is an open source website and accessible via the github logo on the Navigation Bar. You can also <a  href="https://github.com/bhagyesh15/stock-plus" target="_blank" rel="noopener noreferrer"> Click Here </a>
                    </p>
                    <p>
                        This project has various further employements, like live data accomodation, virtual trading and even machine learning models could
                        be implemented to predict the future of stocks.
                    </p>
                    <p className="font-weight-normal">
                        Tech Stack : MERN
                    </p>
                    <p> I have used the dataset available <a href="https://www.kaggle.com/stoicstatic/india-stock-data-nse-1990-2020?select=NSE+Symbols.CSV" target="_blank" rel="noopener noreferrer" >here</a>! Grateful for it.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;