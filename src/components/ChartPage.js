import React,{useEffect,useState} from 'react';
import {Bar} from 'react-chartjs-2';

function ChartPage({historicalData}) {
    const [data,setData] = useState([]);
    const [date,setDate] = useState([]);
    const [weekData,setWeekData] = useState([]);
    const [weekDate,setWeekDate] = useState([]);
    const [monthData,setMonthData] = useState([]);
    const [monthDate,setMonthDate] = useState([]);
    const [month3Data,setMonth3Data] = useState([]);
    const [month3Date,setMonth3Date] = useState([]);
    const [month6Data,setMonth6Data] = useState([]);
    const [month6Date,setMonth6Date] = useState([]);
    const [yearData,setYearData] = useState([]);
    const [yearDate,setYearDate] = useState([]);
    /******************************/
    const [graphData,setGraphData] = useState([]);
    const [graphDate,setGraphDate] = useState([]);


    useEffect( () => {
        let localData = [];
        let localDate = [];
        for( let i=0 ; i< historicalData.length ; i++){
            localData.push(historicalData[i]['Close'])
            localDate.push(historicalData[i]['Date'])
        }

        setWeekData(localData.slice(historicalData.length - 7))
        setWeekDate(localDate.slice(historicalData.length - 7))
        setMonthData(localData.slice(historicalData.length - 30))
        setMonthDate(localDate.slice(historicalData.length - 30))
        setMonth3Data(localData.slice(historicalData.length - 60))
        setMonth3Date(localDate.slice(historicalData.length - 60))
        setMonth6Data(localData.slice(historicalData.length - 120))
        setMonth6Date(localDate.slice(historicalData.length - 120))
        setYearData(localData.slice(historicalData.length - 240))
        setYearDate(localDate.slice(historicalData.length - 240))
        setData(localData)
        setDate(localDate)
        setGraphData(localData)
        setGraphDate(localDate)

    },[historicalData])

    const handleClick = e => {
        if(e.target.id === "sevendays"){

            setGraphData(weekData)
            setGraphDate(weekDate)
        }
        if(e.target.id === "month"){
 
            setGraphData(monthData)
            setGraphDate(monthDate)
        }
        if(e.target.id === "month3"){

            setGraphData(month3Data)
            setGraphDate(month3Date)
        }
        if(e.target.id === "month6"){

            setGraphData(month6Data)
            setGraphDate(month6Date)
        }
        if(e.target.id === "year"){

            setGraphData(yearData)
            setGraphDate(yearDate)
        }
        if(e.target.id === "all"){

            setGraphData(data)
            setGraphDate(date)
        }
    }

    return (
        <div>
            <nav className="nav justify-content-end">
                <button type="button" id="sevendays" class="btn nav-link text-primary" onClick={handleClick}>7 Days</button>
                <button type="button" id="month" class="btn nav-link text-primary" onClick={handleClick}>1 Month</button>
                <button type="button" id="month3" class="btn nav-link text-primary" onClick={handleClick}>3 Months</button>
                <button type="button" id="month6" class="btn nav-link text-primary" onClick={handleClick}>6 Months</button>
                <button type="button" id="year" class="btn nav-link text-primary" onClick={handleClick}>1 Year</button>
                <button type="button" id="all" class="btn nav-link text-primary" onClick={handleClick}>All</button>
            </nav>
            {/* <button type="button" class="btn btn-primary">1 Month</button>
            <button type="button" class="btn btn-primary">3 Months</button>
            <button type="button" class="btn btn-primary">6 Months</button>
            <button type="button" class="btn btn-primary">1 Year</button>
            <button type="button" class="btn btn-primary">All</button> */}
            <Bar
                data={{
                    labels:graphDate,
                    datasets:[{
                        label: 'Closing Price',
                        data:graphData,
                        pointRadius: 0,
                        showLine: false,
                        backgroundColor:`#28a745`
                    }],
                    
                }}
                options={{
                    elements: {
                        point: {
                        radius: 1
                        }
                    },
                    tooltips: {
                        mode: 'index', 
                        intersect: false
                    },
                    scales: {
                        yAxes: [{
                        ticks: {
                            stepSize: 1, //sets the interval that our y axis counts by
                            beginAtZero: false, //starts our graph at 0 if true
                        },
                        gridLines: {
                            drawOnChartArea: false
                        }
                        }],
                        xAxes: [{
                        ticks: {
                            minRotation: 0,
                            maxRotation: 0,
                            autoskip: true,
                            autoSkipPadding: 10
                        },
                        gridLines: {
                            drawOnChartArea: false
                        },
                        type: 'time',
                        distribution: 'series',
                        time: {
                            unit: 'day',
                            displayFormats: {
                            day: 'DD MMM YYYY',
                
                            },
                            tooltipFormat: 'DD MMM YYYY',
                        },
                        },
                        ]
                    },
                    responsive: true, //lets us resize our chart
                    maintainAspectRatio: true,  //lets us resize our chart
                    }
                    }
            />
        </div>
    );
}

export default ChartPage;