import React from 'react';
import ReactEcharts from 'echarts-for-react';



const BarChart = (props) => (
    <ReactEcharts
        option={{
            // backgroundColor: '#24273e',
            title: {
                text: props.lineName+'计划量和完成量',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#e6e6e6'
                }
            },

            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                // data: ['计划量', '完成量']
                data: [{
                    name: '计划量',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: 'white'
                    }
                }, {
                    name: '完成量',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: 'white'
                    }
                }]
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    // data: [
                    //     '5天',
                    //     '4天',
                    //     '3天',
                    //     '2天',
                    //     '1天',
                    // ]
                    data: props.IntervalHour || [0, 0, 0, 0, 0, 0]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '数量',
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    // min: 0,
                    // max: 180000,
                    axisLabel: {
                        formatter: '{value}件'
                    }
                }
            ],
            series: [
                {
                    name: '计划量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(51,102,153,.8)'
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            color:'white',
                            position: 'inside'
                        }
                    },
                    // data: [3555.802, 4136.257, 11559.393, 5657.429, 3434.733]
                    data: props.PlannedQuantity || [0, 0, 0, 0, 0, 0]
                },
                {
                    name: '完成量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,204,51,.8)'
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            color:'blue',
                            position: 'inside'
                        }
                    },
                    // data: [3555.802, 4136.257, 11559.393, 5657.429, 3434.733]
                    data: props.FinishedQuantity || [0, 0, 0, 0, 0, 0]
                }
            ]
        }}
        style={{ height: '400px', width: '100%' }}
        className={'react_for_echarts'}
    />
);

export default BarChart;

