
import React from 'react';
import {Line} from 'react-chartjs-2';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

class ChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockData:this.props.stockData
        };
    }
    componentDidMount() {
        this.setState({ stockData : this.props.stockData });
    }
    render(){
        return (
            <div>
                <Line 
                    data={{
                        datasets:[
                            {
                                data:this.state.stockData
                                
                            }
                        ]
                    }}
                />
            </div>
        );
    }

}

export default ChartPage;