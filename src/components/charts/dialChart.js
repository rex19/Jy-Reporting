import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class DialChart extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                splitNumber: 0,     //刻度数量
                min: 0,
                max: 30,
                startAngle: 225,
                endAngle: 144,
                color: [
                    [1, '#FF0000']
                ]
            }
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
        if (this.props.data <= 30) {
            this.setState({
                style: {
                    splitNumber: 3,     //刻度数量
                    min: 0,
                    max: 30,
                    startAngle: 225,
                    endAngle: 144,
                    color: [
                        [1, '#FF0000']
                    ]
                }
            })

        } else if (this.props.data >= 90) {
            this.setState({
                style: {
                    splitNumber: 1,     //刻度数量
                    min: 90,
                    max: 100,
                    startAngle: -18,
                    endAngle: -45,
                    color: [
                        [1, '#60b044']
                    ]
                }
            })
        } else {
            this.setState({
                style: {
                    splitNumber: 6,     //刻度数量
                    min: 30,
                    max: 90,
                    startAngle: 144,
                    endAngle: -18,
                    color: [
                        [1, '#ffce00']
                    ]
                }
            })
        }
    }

    componentWillReceiveProps(prevProps, prevState) {
        console.log('componentWillReceiveProps',prevProps, prevState)
        if (prevProps.data <= 30) {
            this.setState({
                style: {
                    splitNumber: 3,     //刻度数量
                    min: 0,
                    max: 30,
                    startAngle: 225,
                    endAngle: 144,
                    color: [
                        [1, '#FF0000']
                    ]
                }
            })

        } else if (prevProps.data >= 90) {
            this.setState({
                style: {
                    splitNumber: 1,     //刻度数量
                    min: 90,
                    max: 100,
                    startAngle: -18,
                    endAngle: -45,
                    color: [
                        [1, '#60b044']
                    ]
                }
            })
        } else if (prevProps.data >= 100) {
            this.setState({
                style: {
                    splitNumber: 1,     //刻度数量
                    min: 90,
                    max: 100,
                    startAngle: -18,
                    endAngle: -45,
                    color: [
                        [1, '#60b044']
                    ]
                }
            })
        } else {
            this.setState({
                style: {
                    splitNumber: 6,     //刻度数量
                    min: 30,
                    max: 90,
                    startAngle: 144,
                    endAngle: -18,
                    color: [
                        [1, '#ffce00']
                    ]
                }
            })
        }
    }


    render() {
        console.log('render', this.state.style)

        const option = {
            // backgroundColor: 'rgba(36,39,62,.2)',
            title: {
                x: "center",
                bottom: 30,
                text: this.props.title,
                textStyle: {
                    color: 'white',
                    fontSize: 27
                },
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: this.props.title,
                    type: 'gauge',
                    splitNumber: 10,     //刻度数量
                    min: 0,
                    max: 100,
                    radius: '92%',      //图表尺寸
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#24273e']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#7887ae',
                            width: 1
                        },
                        length: 8,
                        splitNumber: 5
                    },
                    splitLine: {
                        show: true,
                        length: 12,
                        lineStyle: {
                            color: '#7887ae',
                        }
                    },
                    axisLabel: {
                        distance: 2,
                        textStyle: {
                            color: "#7887ae",
                            fontSize: "14",
                        },
                        formatter: function (e) {
                            switch (e + "") {
                                case "0":
                                    return "0%";
                                default:
                                    return e;
                            }
                        }

                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },

                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: this.props.data,
                    }]
                },
                {
                    name: this.props.title,
                    type: 'gauge',
                    splitNumber: this.state.style.splitNumber,     //刻度数量
                    min: this.state.style.min,
                    max: this.state.style.max,
                    startAngle: this.state.style.startAngle,
                    endAngle: this.state.style.endAngle,
                    radius: '92%',      //图表尺寸
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: this.state.style.color
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: 'auto',
                            width: 1
                        },
                        length: 8,
                        splitNumber: 5
                    },
                    splitLine: {
                        show: true,
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: { //仪表盘指针
                        show: 1,
                        length: '70%',
                        width: 2
                    },
                    detail: {
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,

                        offsetCenter: [0, '30%'], // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff',
                            fontSize: 35,
                        },
                        formatter: '{value}' + this.props.punctuation
                    },
                    data: [{
                        name: "",
                        value: this.props.data,
                    }]
                }]
        };
        return (
            <ReactEcharts
                option={option}
                style={{ height: '350px', width: '490px' }}
                className={'react_for_echarts'}
            />
        )
    }
}