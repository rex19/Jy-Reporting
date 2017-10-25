import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './header/index';
import FooterComponent from './footer/index';
import axios from 'axios';
import { PublicParam } from '../utils/config.js';
import mockJson from '../mock/mock.json';
const mockData = mockJson.mockData;

const line1Url = PublicParam.line1Url

export default class Line1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            WorkOrderCode: "",
            PartTypeCode: "",
            WorkOrderPlannedQuantity: 0,
            WorkOrderFinishedQuantity: 0,
            resultTargetOEE: "0",
            resultPerQualified: "0",
            resultPlanCycleTime: "0",
            resultActCycleTime: "0",
            resultPerCycleTime: "0",
            resultPerPlanComplete: "0",
            PlannedQuantity: [
                0,
                0,
                0,
                0,
            ],
            FinishedQuantity: [
                0,
                0,
                0,
                0,
            ],
            IntervalHour: [
                '0',
                '0',
                '0',
                '0',
            ]
        }
    }

    componentDidMount() {
        console.log('mock', mockData)
        let obj = this
        axios.get(line1Url).then(function (response) {
            console.log('response', response);
            // if()
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
        }).catch(function (err) {
            console.log(err);
            obj.setState({
                WorkOrderCode: mockData.WorkOrderCode,
                PartTypeCode: mockData.PartTypeCode,
                WorkOrderPlannedQuantity: mockData.WorkOrderPlannedQuantity,
                WorkOrderFinishedQuantity: mockData.WorkOrderFinishedQuantity,
                resultTargetOEE: mockData.resultTargetOEE,
                resultPerQualified: mockData.resultPerQualified,
                resultPlanCycleTime: mockData.resultPlanCycleTime,
                resultActCycleTime: mockData.resultActCycleTime,
                resultPerCycleTime: mockData.resultPerCycleTime,
                resultPerPlanComplete: mockData.resultPerPlanComplete,
                PlannedQuantity: mockData.PlannedQuantity,
                FinishedQuantity: mockData.FinishedQuantity,
                IntervalHour: mockData.IntervalHour
            })
        });

        this.interval = setInterval(() => this.AjaxReportingData(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    AjaxReportingData() {
        let obj = this
        axios.get(line1Url)
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
                obj.setState({
                    WorkOrderCode: mockData.WorkOrderCode,
                    PartTypeCode: mockData.PartTypeCode,
                    WorkOrderPlannedQuantity: mockData.WorkOrderPlannedQuantity,
                    WorkOrderFinishedQuantity: mockData.WorkOrderFinishedQuantity,
                    resultTargetOEE: mockData.resultTargetOEE,
                    resultPerQualified: mockData.resultPerQualified,
                    resultPlanCycleTime: mockData.resultPlanCycleTime,
                    resultActCycleTime: mockData.resultActCycleTime,
                    resultPerCycleTime: mockData.resultPerCycleTime,
                    resultPerPlanComplete: mockData.resultPerPlanComplete,
                    PlannedQuantity: mockData.PlannedQuantity,
                    FinishedQuantity: mockData.FinishedQuantity,
                    IntervalHour: mockData.IntervalHour
                })
            });
    }

    render() {
        return (
            <div className='divClass'>
                <HeaderComponent
                    lineName='1线'
                    WorkOrderCode={this.state.WorkOrderCode}
                    PartTypeCode={this.state.PartTypeCode}
                    WorkOrderPlannedQuantity={this.state.WorkOrderPlannedQuantity}
                    WorkOrderFinishedQuantity={this.state.WorkOrderFinishedQuantity}
                />
                <FooterComponent
                    lineName='1线'
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

