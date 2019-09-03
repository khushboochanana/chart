import React, { Component } from 'react'
import './App.css';

import ChartView from './Chart'

export default class App extends Component {
    state = {
        map1: {
            data: {
                fill: 'origin',
                labels: ['1', '2', '3', '4', '5', '6'],
                datasets: [{
                    label: "Exceptions",
                    data: [1, 0.2, 0.5, 1, 1.8],
                    borderColor: "#4c905d",
                    borderWidth:1,
                    backgroundColor: "#93cea2bf",
                }]
            }, options: {
                responsive: true,
                layout: {
                    padding: {
                        left: 13,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    labels: {
                        fontColor: 'rgb(255, 99, 132)',
                        boxWidth: 0,
                        rotation: 90
                    },
                    display: false,
                    position: 'left'
                },
                scales: {
                    yAxes: [{
                        barPercentage: 1,
                        categoryPercentage: 1,
                        ticks: {
                            beginAtZero: true,
                            dispaly: true,
                            max: 2,
                            min: 0,
                            stepSize: 2,
                        },
                        gridLines: {
                            drawOnChartArea: false,
                            lineWidth: 1,
                            tickMarkLength: 10,
                            color: 'black',
                        }
                    }],
                    xAxes: [{
                        barPercentage: 1,
                        categoryPercentage: 1,
                        display: false,
                    }]
                },
                elements: {
                    line: {
                        tension: 0 // disables bezier curves
                    }
                }
            }
        },
        map2: {
            data: {
                labels: ['1', '2', '3', '4', '5', '6'],
                datasets: [{
                    fill: 'origin',
                    label: 'Trades',
                    borderColor: "#4c905d",
                    borderWidth:1,
                    backgroundColor: "#93cea2bf",
                    data: [100, 80, 84, 52, 90]
                }]
            }, options: {
                responsive: true,
                legend: {
                    labels: {
                        fontColor: 'rgb(255, 99, 132)',
                        boxWidth: 0,
                        rotation: 90
                    },
                    display: false,
                    position: 'left'
                },
                scales: {
                    yAxes: [{
                        barPercentage: 1,
                        categoryPercentage: 1,
                        ticks: {
                            dispaly: true,
                            beginAtZero: true,
                            max: 120,
                            min: 40,
                            stepSize: 20,
                            callback: (label:any, index:number)=> {
                                console.log(label)
                                if(label===120){
                                    return ''
                                }
                                else{
                                    return label
                                }
                            }
                        },
                        gridLines: {
                            drawOnChartArea: false,
                            lineWidth: 1,
                            tickMarkLength: 10,
                            color: 'black',
                        }

                    }],
                    xAxes: [{
                        barPercentage: 1,
                        categoryPercentage: 1,
                        gridLines: {
                            drawOnChartArea: false,
                            lineWidth: 1,
                            tickMarkLength: 10,
                            color: 'black',
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0 // disables bezier curves
                    }
                }, plugins: {
                    datalabels: {
                        align: 'right',
                        min: 10,
                        max: 40
                    }
                }

            }
        }
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <div style={{margin:'15px'}}>Area Chart Demo
                    </div>
                    <div>
                        <div>
                            <div className="dash"></div>
                            <ChartView type="line" data={this.state.map1.data} options={this.state.map1.options}/>
                        </div>

                        <div>
                            <div className="dash"></div>
                            <ChartView type="line" data={this.state.map2.data} options={this.state.map2.options}/>
                        </div>

                    </div>
                    <div style={{margin:'20px'}}>
                        <div className="dash"></div>
                        <ChartView type="bar" data={this.state.map1.data} options={this.state.map1.options}/>
                        <div className="dash"></div>
                        <ChartView type="bar" data={this.state.map2.data} options={this.state.map2.options}/>
                    </div>
                </header>
            </div>
        );
    }
}

