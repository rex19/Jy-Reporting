import React from 'react';
import ReactEcharts from 'echarts-for-react';

const gauge_value = 666;


export default class DialChart extends React.Component {
  // constructor(){
  //     super();
  //     // this.state={
  //     //     option:op,
  //     // }
  // }

  render() {
    const option = {
      backgroundColor: '#24273e',
      
      tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
      },
      series: [
      {
          name: 'OEE',
          type: 'gauge',
          splitNumber:10,     //刻度数量
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
                  color:'#7887ae',
                  width: 1
              },
              length: 8,
              splitNumber:5
          },
          splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                  color:'#7887ae',
              }
          },
          axisLabel: {
              distance: 2,
              textStyle: {
                  color: "#7887ae",
                  fontSize: "14",
              },
              formatter: function(e) {
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
              show:false
          },
          data: [{
              name: "",
              value: 45
          }]
      },
      {
          name: 'cycletime',
          type: 'gauge',
          splitNumber:'#ffce00',     //刻度数量
          min:  30,
          max: 90,
          startAngle: 144,
          endAngle: -18,
          radius: '92%',      //图表尺寸
          axisLine: {
              show: true,
              lineStyle: {
                  width: 2,
                  shadowBlur: 0,
                  color: [1, '#ffce00']
              }
          },
          axisTick: {
              show: true,
              lineStyle: {
                  color:'auto',
                  width: 1
              },
              length: 8,
              splitNumber: 5
          },
          splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                  color:'auto',
              }
          },
          axisLabel: {
              show:false
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
              formatter: '{value}%'
          },
          data: [{
              name: "",
              value: 48
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









import React from 'react';
import ReactEcharts from 'echarts-for-react';

const gauge_value = 666;


export default class DialChart extends React.Component {
  // constructor(){
  //     super();
  //     // this.state={
  //     //     option:op,
  //     // }
  // }

  render() {
    const option = {
      title: {
        //show:false,
        x: "center",
        top: 10,
        text: this.props.title,
        // subtext: '信用等级'
      },
      tooltip: {
        show: true,
        // formatter: "{a} <br/>{b} {c}",
        backgroundColor: '#F7F9FB',
        borderColor: '#92DAFF',
        borderWidth: '1px',
        textStyle: {
          color: 'black'
        },
        formatter: function (param) {
          return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
        }

      },
      series: [{
        name: '信用分',
        type: 'gauge',
        // startAngle: 180,
        // endAngle: 0,
        min: 350,
        max: 950,
        axisLine: {
          show: true,
          lineStyle: {
            width: 40,
            shadowBlur: 200,
            shadowColor: '#777',
            color: [
              [0.2, '#E43F3D'],
              [0.4, '#E98E2C'],
              [0.6, '#DDBD4D'],
              [0.8, '#7CBB55'],
              [1, '#9CD6CE']
            ]
          }
        },
        axisTick: {
          show: true,
          splitNumber: 1
        },
        splitLine: {
          show: true,
          length: 40,
          lineStyle: {
            //color:'black'
          },
        },
        axisLabel: {
          formatter: function (e) {
            switch (e + "") {
              case "410":
                return "较差";
              //return "";
              case "470":
                return "550";

              case "530":
                return "中等";
              //return "";
              case "590":
                return "600";

              case "650":
                return "良好";
              //return "";
              case "710":
                return "650";

              case "770":
                return "优秀";
              //return "";
              case "830":
                return "700";

              case "890":
                return "极好";
              //return "";
              default:
                return e;
            }
          },
          textStyle: {
            fontSize: 12,
            fontWeight: ""
          }
        },
        pointer: {
          show: true,
        },
        detail: {
          //show:false,
          formatter: function (param) {
            var level = '';
            if (param < 470) {
              level = '较差'
            } else if (param < 590) {
              level = '中等'
            } else if (param < 710) {
              level = '良好'
            } else if (param < 830) {
              level = '优秀'
            } else if (param <= 950) {
              level = '极好'
            } else {
              level = '暂无';
            }
            return level;
          },
          offsetCenter: [0, 140],
          textStyle: {
            fontSize: 40
          }
        },
        data: [{
          name: "",
          // value: Math.floor(gauge_value)
          value: this.props.data
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


