import React, { Component } from 'react'
import Chart from "chart.js";
interface ChartProps{
    type:string,
    data:Object,
    options:Object
}

export default class ChartView extends Component<ChartProps> {
    private chartRef = React.createRef<any>();

    componentDidMount=()=> {
        if(this.chartRef.current){
            const myChartRef = this.chartRef.current.getContext("2d");
            new Chart(myChartRef, {
                type: this.props.type,
                data: this.props.data,
                options: this.props.options

            });
        }

    }
    render() {
        return (
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}