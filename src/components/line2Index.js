import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './header/index';
import FooterComponent from './footer/index';
import axios from 'axios';
import { PublicParam } from '../utils/config.js';

const line2Url = PublicParam.line2Url

export default class Line2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            WorkOrderCode: "20170922",
            PartTypeCode: "1-6档",
            WorkOrderPlannedQuantity: 30,
            WorkOrderFinishedQuantity: 19,
            resultTargetOEE: "150",
            resultPerQualified: "1",
            resultPlanCycleTime: "120",
            resultActCycleTime: "110",
            resultPerCycleTime: "95",
            resultPerPlanComplete: "115",
            PlannedQuantity: [
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25,
                12.25
            ],
            FinishedQuantity: [
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2
            ],
            IntervalHour: [
                "2017/09/21 04:00:00",
                "2017/09/21 05:00:00",
                "2017/09/21 06:00:00",
                "2017/09/21 07:00:00",
                "2017/09/21 08:00:00",
                "2017/09/21 09:00:00",
                "2017/09/21 10:00:00",
                "2017/09/21 11:00:00",
                "2017/09/21 12:00:00",
                "2017/09/21 13:00:00",
                "2017/09/21 14:00:00",
                "2017/09/21 15:00:00",
                "2017/09/21 16:00:00",
                "2017/09/21 17:00:00",
                "2017/09/21 18:00:00"
            ]
        }
    }

    componentDidMount() {
        let obj = this
        axios.get(line2Url)
            .then(function (response) {
                console.log('response', response);
                obj.setState({
                    WorkOrderCode: response.data.WorkOrderCode,
                    PartTypeCode: response.data.PartTypeCode,
                    WorkOrderPlannedQuantity: response.data.WorkOrderPlannedQuantity,
                    WorkOrderFinishedQuantity: response.data.WorkOrderFinishedQuantity,
                    resultTargetOEE: response.data.resultTargetOEE,
                    resultPerQualified: response.data.resultPerQualified,
                    resultPlanCycleTime: response.data.resultPlanCycleTime,
                    resultActCycleTime: response.data.resultActCycleTime,
                    resultPerCycleTime: response.data.resultPerCycleTime,
                    resultPerPlanComplete: response.data.resultPerPlanComplete,
                    PlannedQuantity: response.data.PlannedQuantity,
                    FinishedQuantity: response.data.FinishedQuantity,
                    IntervalHour: response.data.IntervalHour
                })
            })
            .catch(function (err) {
                console.log(err);
            });

        this.interval = setInterval(() => this.AjaxReportingData(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    AjaxReportingData() {
        let obj = this
        axios.get(line2Url)
            .then(function (response) {
                console.log('response', response);
                obj.setState({
                    WorkOrderCode: response.data.WorkOrderCode,
                    PartTypeCode: response.data.PartTypeCode,
                    WorkOrderPlannedQuantity: response.data.WorkOrderPlannedQuantity,
                    WorkOrderFinishedQuantity: response.data.WorkOrderFinishedQuantity,
                    resultTargetOEE: response.data.resultTargetOEE,
                    resultPerQualified: response.data.resultPerQualified,
                    resultPlanCycleTime: response.data.resultPlanCycleTime,
                    resultActCycleTime: response.data.resultActCycleTime,
                    resultPerCycleTime: response.data.resultPerCycleTime,
                    resultPerPlanComplete: response.data.resultPerPlanComplete,
                    PlannedQuantity: response.data.PlannedQuantity,
                    FinishedQuantity: response.data.FinishedQuantity,
                    IntervalHour: response.data.IntervalHour
                })
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='divClass'>
                <HeaderComponent
                    lineName='2线'
                    WorkOrderCode={this.state.WorkOrderCode}
                    PartTypeCode={this.state.PartTypeCode}
                    WorkOrderPlannedQuantity={this.state.WorkOrderPlannedQuantity}
                    WorkOrderFinishedQuantity={this.state.WorkOrderFinishedQuantity}
                />
                <FooterComponent
                    lineName='2线'
                    resultTargetOEE={this.state.resultTargetOEE}
                    resultPerQualified={this.state.resultPerQualified}
                    resultPlanCycleTime={this.state.resultPlanCycleTime}
                    resultActCycleTime={this.state.resultActCycleTime}
                    resultPerCycleTime={this.state.resultPerCycleTime}
                    resultPerPlanComplete={this.state.resultPerPlanComplete}
                    PlannedQuantity={this.state.PlannedQuantity}
                    FinishedQuantity={this.state.FinishedQuantity}
                    IntervalHour={this.state.IntervalHour}
                />
            </div>
        );
    }
}

