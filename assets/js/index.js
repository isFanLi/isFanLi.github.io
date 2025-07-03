$(function(){
    /*标准*/
    // var radar = echarts.init(document.getElementById('radar'));
    // option = {
    //     title: {
    //         text: ''
    //     },
    //     tooltip: {},
    //     legend: {
    //         data: ['第一标准', '第二标准','第三标准'],
    //         x:"center",
    //         y:'bottom',
    //         textStyle:{
    //             color:"#fff"
    //         }
    //     },
    //     color: ['#4c95d9', '#f6731b', '#8cd43f'],
    //     radar: {
    //         name:{
    //             textStyle: {
    //                 //设置颜色
    //                 color:'#fff'
    //             }
    //         },
    //         indicator: [
    //             { name: 'test1', max: 6500},
    //             { name: 'test2', max: 16000},
    //             { name: 'test3', max: 30000},
    //             { name: 'test4', max: 38000},
    //             { name: 'test5', max: 52000},
    //             { name: 'test6', max: 25000}
    //         ],
    //         center: ['50%','50%'],
    //         radius: "58%"
    //     },
    //     series: [{
    //         name: '',
    //         type: 'radar',
    //         itemStyle : {
    //             normal : {
    //                 splitLine: {
    //                     lineStyle: {

    //                 },
    //                 label: {
    //                     show: false,
    //                     textStyle:{
    //                     },
    //                     formatter:function(params) {
    //                         return params.value;}
    //                 },
    //             }
    //         },
    //         data : [
    //             {
    //                 value : [2400, 10000, 28000, 35000, 50000, 19000],
    //                 name : '第一标准'
    //             },
    //             {
    //                 value : [5000, 14000, 28000, 31000, 42000, 21000],
    //                 name : '第二标准'
    //             },
    //             {
    //                 value : [6000, 14000, 18000, 21000, 32000, 11000],
    //                 name : '第三标准'
    //             }
    //         ]
    //     }]
    // };
    // radar.setOption(option);
  
    /* 飞鸟尽*/
    var graduateyear = echarts.init(document.getElementById('graduateyear'));
    option = {
        title : {
            text:"",
            x:'center',
            y:'top',
            textStyle:
            {
                color:'#fff',
                fontSize:13
            }
        },
        tooltip : {
            trigger: 'axis',
            formatter: function(params) {
                var result = params[0].axisValue + '<br/>';
                params.forEach(function(param) {
                    if (param.seriesName === '摊铺温度') {
                        result += param.marker + param.seriesName + ': ' + param.value + '°C<br/>';
                    } else if (param.seriesName === '摊铺均匀性') {
                        result += param.marker + param.seriesName + ': ' + param.value + '%<br/>';
                    }
                });
                return result;
            }
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '5%',
            top:"13%",
            containLabel: true
        },
        color:["#35a9e0",'#72b332'],
        legend: {
            data:['摊铺温度', '摊铺均匀性'],
            show:true,
            right:'15%',
            y:"0",
            textStyle:{
                color:"#999",
                fontSize:'13'
            },
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['08:05','08:10','08:20','08:30','08:35','08:40','08:45','08:50'],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#2d3b53'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0,
                    rotate:'15'
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: '温度(°C)',
                nameTextStyle: {
                    color: '#fff'
                },
                min: 50,
                max: 200,
                interval: 30,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#2d3b53'
                    }
                },
                axisLabel:{
            textStyle:{
                        color:"#999"
                    }
                },
            },
            {
                type : 'value',
                name: '(%)',
                nameTextStyle: {
                    color: '#fff'
                },
                min: 0,
                max: 100,
                interval: 20,
                splitLine:{
                    show:false
                },
                axisLabel:{
                    textStyle:{
                        color:"#999"
                    }
                },
            }
        ],
        series : [
            {
                name:'摊铺温度',
                type:'line',
                smooth:true,
                symbol:'roundRect',
                data:[143,144,145,146,147,148,147,146]
            },
            {
                name:'摊铺均匀性',
                type:'line',
                yAxisIndex: 1,
                smooth:true,
                symbol:'circle',
                data:[95,96,94,97,93,96,98,95]
            }
        ]
    };
    graduateyear.setOption(option);

   
    var courserate = echarts.init(document.getElementById('courserate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },

            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['优秀','良好','合格','不合格']
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '45%',
                color:['#27c2c1','#9ccb63','#fcd85a','#D2042D'],
                center: ['38%', '50%'],
                data:[
                    {value:425, name:'优秀'},
                    {value:110, name:'良好'},
                    {value:50, name:'合格'},
                    {value:15, name:'不合格'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '{b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    courserate.setOption(option);

    /* =======*/
    var professionrate = echarts.init(document.getElementById('professionrate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#9ccb63', '#27c2c1', '#D2042D'],  // 正常运行(青绿色)、维护中(黄色)、故障(红色)
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },
            data: ['正常运行','维护中','故障'],
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            }
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '60%',
                center: ['35%', '50%'],
                data:[
                    {value:600, name:'正常运行'},
                    {value:25, name:'维护中'},
                    {value:3, name:'故障'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '  {b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    professionrate.setOption(option);
 
    /* 比例变化*/
    // var changedetail = echarts.init(document.getElementById('changedetail'));
    // option = {
    //     tooltip: {
    //         trigger: 'axis',
    //         formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
    //     },
    //     toolbox: {
    //         show:false,
    //         feature: {
    //             dataView: {show: true, readOnly: false},
    //             magicType: {show: true, type: ['line', 'bar']},
    //             restore: {show: true},
    //             saveAsImage: {show: true}
    //         }
    //     },
    //     legend: {
    //         data:['',''],
    //         show:false
    //     },
    //     grid:{
    //         top:'18%',
    //         right:'5%',
    //         bottom:'8%',
    //         left:'5%',
    //         containLabel: true
    //     },
    //     xAxis: [
    //         {
    //             type: 'category',
    //             data: ['08:00','09:00','10:00','11:00','12:00'],
    //             splitLine:{
    //                 show:false,
    //                 lineStyle:{
    //                     color: '#3c4452'
    //                 }
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel:{
    //                 textStyle:{
    //                     color:"#fff"
    //                 },
    //                 lineStyle:{
    //                     color: '#519cff'
    //                 },
    //                 alignWithLabel: true,
    //                 interval:0
    //             }
    //         }
    //     ],
    //     yAxis: [
    //         {
    //             type: 'value',
    //             name: '温度(°C)',
    //             nameTextStyle:{
    //                 color:'#fff'
    //             },
    //             interval: 5,
    //             max:50,
    //             min: 0,
    //             splitLine:{
    //                 show:true,
    //                 lineStyle:{
    //                     color: '#23303f'
    //                 }
    //             },
    //             axisLine: {
    //                 show:false,
    //                 lineStyle: {
    //                     color: '#115372'
    //                 }
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel:{
    //                 textStyle:{
    //                     color:"#fff"
    //                 },
    //                 alignWithLabel: true,
    //                 interval:0

    //             }
    //         },
    //         {
    //             min: 0,
    //             max: 2.5,
    //             interval: 0.5,
    //             type: 'value',
    //             name: '(%)',
    //             nameTextStyle:{
    //                 color:'#fff'
    //             },
    //             splitLine:{
    //                 show:true,
    //                 lineStyle:{
    //                     color: '#23303f'
    //                 }
    //             },
    //             axisLine: {
    //                 show:false,
    //                 lineStyle: {
    //                     color: '#115372'
    //                 }
    //             },
    //             axisTick: {
    //                 show: false
    //             },
    //             axisLabel:{
    //                 textStyle:{
    //                     color:"#fff"
    //                 },
    //                 alignWithLabel: true,
    //                 interval:0

    //             }
    //         }
    //     ],
    //     color:"yellow",
    //     series: [
    //         {
    //             name:'路面温度',
    //             type:'bar',
    //             data:[125, 132, 118, 139],
    //             boundaryGap: '45%',
    //             barWidth:'40%',

    //             itemStyle: {
    //                 normal: {
    //                     color: '#76da91'
    //                 },
    //                 label: {
    //                     show: true,
    //                     position: 'top',
    //                     formatter: '{c}°C'
    //                 }
    //             }
    //         },
    //         {
    //             name:'行进速度',
    //             type:'bar',
    //             data:[18, 15, 22, 12],
    //             itemStyle: {
    //                 normal: {
    //                     color: '#f8cb7f'
    //                 },
    //                 label: {
    //                     show: true,
    //                     position: 'top',
    //                     formatter: '{c}km/h'
    //                 }
    //             }
    //         },
    //         {
    //             name:'厚度',
    //             type:'bar',
    //             data:[8.5, 8.3, 8.7, 8.2],
    //             itemStyle: {
    //                 normal: {
    //                     color: '#f89588'
    //                 },
    //                 label: {
    //                     show: true,
    //                     position: 'top',
    //                     formatter: '{c}mm'
    //                 }
    //             }
    //         },
    //         {
    //             name:'摊铺均匀性',
    //             type:'line',
    //             yAxisIndex: 1,
    //             lineStyle: {
    //                 normal: {
    //                     color:'#7cd6cf'
    //                 }
    //             },
    //             data:[96.2, 94.8, 97.5, 93.9]
    //         }
    //     ]
    // };
    // changedetail.setOption(option);

    /* ===*/
    var juniorservice = echarts.init(document.getElementById('juniorservice'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#22ac38','#eaff00'],
        legend: {
            right:'0',
            data: ['已完成', '进行中'],
            textStyle:{
                color:'#00ffff'
            }
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            top:'10%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            splitLine:{
                show:true,
                lineStyle:{
                    color: '#1e2b43'
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                textStyle:{
                    color:"#fff"
                },
                alignWithLabel: true,
                interval:0

            }
        },
        dataZoom: [{
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            x:'0',
            end: 60,
            handleStyle:{
                color:"#519cff",
                backgroundColor:'#519cff'
            },
            textStyle:{
                color:"#fff"},
            borderColor:"#519cff"
        }],
        yAxis: {
            type: 'category',
            data: ['路段A','路段B','路段C','路段D','路段E','路段F','路段G','路段H','路段I','路段J','路段K','路段L','路段M','路段N'],
            splitLine:{
                show:false,
                lineStyle:{
                    color: '#1e2b43'
                }
            },

            axisTick: {
                show: false
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisLabel:{
                textStyle:{
                    color:"#419aff"
                },
                lineStyle:{
                    color: '#519cff'
                },
                alignWithLabel: true,
                interval:0
            }
        },
        series: [
            {
                name: '已完成',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        textStyle:{
                            color:'#333'
                        }
                    }

                },
                data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330,123]
            },
            {
                name: '进行中',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            color:'#00f0ff'
                        }

                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230,243]
            }
        ]
    };
    juniorservice.setOption(option);

    /* ===*/
    var edubalance = echarts.init(document.getElementById('edubalance'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['路面温度','行进速度','摊铺均匀性'],
            right:"15%",
            textStyle:{
                color:'#fff'
            }
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['08:00','09:00','10:00','11:00'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                nameTextStyle:{
                    color:'#fff'
                },
                interval: 20,
                max:140,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0
                }
            },
            {
                min: 0,
                max: 100,
                interval: 20,
                type: 'value',
                name: '(%)',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'路面温度',
                type:'bar',
                data:[125, 132, 118, 139],
                itemStyle: {
                    normal: {
                        color: '#76da91'
                    },
                    label: {
                            show: true,
                            position: 'top',
                        formatter: '{c}°C'
                        }
                    }
            },
            {
                name:'行进速度',
                type:'bar',
                data:[18, 15, 22, 12],
                itemStyle: {
                    normal: {
                        color: '#f8cb7f'
                    },
                    label: {
                            show: true,
                            position: 'top',
                        formatter: '{c}km/h'
                    }
                }
            },
            // {
            //     name:'厚度',
            //     type:'bar',
            //     data:[8.5, 8.3, 8.7, 8.2],
            //     itemStyle: {
            //         normal: {
            //             color: '#f89588'
            //         },
            //         label: {
            //             show: true,
            //             position: 'top',
            //             formatter: '{c}mm'
            //         }
            //     }
            // },
            {
                name:'摊铺均匀性',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#7cd6cf'
                    }
                },
                data:[96.2, 94.8, 97.5, 93.9]
            }
        ]
    };
    edubalance.setOption(option);

    /* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
    var maps = echarts.init(document.getElementById('mapadd'));
    option = {
        title: {
            text: '施工区域分布',
            left: 'top',
            top: '0%',
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '山东',
            type: 'map',
            mapType: '山东',
            roam: false,
            top:'8%',
            left: 'center',
            zoom:1.1,
            center: [118, 36.5],
            selectedMode : 'single',//multiple多选
            label: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                align: 'center',
                verticalAlign: 'middle',
                rotate: 0,
                formatter: '{b}',
                        textStyle: {
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                rich: {
                    b: {
                        align: 'center',
                        verticalAlign: 'middle'
                    }
                }
            },
            itemStyle:{
                normal:{
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'济南市',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',  // 蓝色
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'德州市',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',  // 绿色
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'聊城市',
                    itemStyle: {
                        normal: {
                            areaColor: '#ffd811',  // 黄色
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'泰安市',
                    itemStyle: {
                        normal: {
                            areaColor: '#f89588',  // 粉红色
                            borderColor: '#88ddf5'
                        }
                    }
                },
                {name:'菏泽市',
                    itemStyle: {
                        normal: {
                            areaColor: '#fcd85a',  // 橙色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'枣庄市',
                    itemStyle: {
                        normal: {
                            areaColor: '#60c1de',  // 浅蓝色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'济宁市',
                    itemStyle: {
                        normal: {
                            areaColor: '#9ccb63',  // 浅绿色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'临沂市',
                    itemStyle: {
                        normal: {
                            areaColor: '#d8514b',  // 红色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'青岛市',
                    itemStyle: {
                        normal: {
                            areaColor: '#27c2c1',  // 青绿色
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'烟台市',
                    itemStyle: {
                        normal: {
                            areaColor: '#f8cb7f',  // 浅橙色
                            borderColor: '#88ddf5'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        offset: [0, 0],
                        align: 'center',
                        verticalAlign: 'middle',
                        rotate: 0,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    }
                },
                {name:'威海市',
                    itemStyle: {
                        normal: {
                            areaColor: '#76da91',  // 浅绿色
                            borderColor: '#45b5ef'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        offset: [0, 0],
                        align: 'center',
                        verticalAlign: 'middle',
                        rotate: 0,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    }
                },
                {name:'潍坊市',
                    itemStyle: {
                        normal: {
                            areaColor: '#0084c8',  // 深蓝色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'淄博市',
                    itemStyle: {
                        normal: {
                            areaColor: '#ffa312',  // 深橙色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'滨州市',
                    itemStyle: {
                        normal: {
                            areaColor: '#c39705',  // 金黄色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'东营市',
                    itemStyle: {
                        normal: {
                            areaColor: '#A0522D',  // 改为更柔和的棕色
                            borderColor: '#45b5ef'
                        }
                    }
                },
                {name:'日照市',
                    itemStyle: {
                        normal: {
                            areaColor: '#22ac38',  // 深绿色
                            borderColor: '#45b5ef'
                        }
                    }
                },
            ]
        }]
    };
    maps.setOption(option);

    // 实时数据监测表格行进速度随机化
    $(".table-kingdargen tbody tr").each(function(){
        var $tds = $(this).find("td");
        if($tds.length >= 4){
            // 第3列是行进速度
            var randomSpeed = (Math.random() * (3.2 - 2.8) + 2.8).toFixed(1);
            $tds.eq(2).text(randomSpeed);
        }
    });

    // 质量评估分析 行进速度数据随机化
    var edubalanceSpeedData = [];
    for(var i=0;i<4;i++){
        edubalanceSpeedData.push((Math.random() * (3.2 - 2.8) + 2.8).toFixed(1));
    }
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['路面温度','行进速度','摊铺均匀性'],
            right:"15%",
            textStyle:{
                color:'#fff'
            }
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['08:00','09:00','10:00','11:00'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                nameTextStyle:{
                    color:'#fff'
                },
                interval: 20,
                max:140,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0
                }
            },
            {
                min: 0,
                max: 100,
                interval: 20,
                type: 'value',
                name: '(%)',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'路面温度',
                type:'bar',
                data:[125, 132, 118, 139],
                itemStyle: {
                    normal: {
                        color: '#76da91'
                    },
                    label: {
                            show: true,
                            position: 'top',
                        formatter: '{c}°C'
                        }
                    }
            },
            {
                name:'行进速度',
                type:'bar',
                data: edubalanceSpeedData,
                itemStyle: {
                    normal: {
                        color: '#f8cb7f'
                    },
                    label: {
                            show: true,
                            position: 'top',
                        formatter: '{c}km/h'
                    }
                }
            },
            // {
            //     name:'厚度',
            //     type:'bar',
            //     data:[8.5, 8.3, 8.7, 8.2],
            //     itemStyle: {
            //         normal: {
            //             color: '#f89588'
            //         },
            //         label: {
            //             show: true,
            //             position: 'top',
            //             formatter: '{c}mm'
            //         }
            //     }
            // },
            {
                name:'摊铺均匀性',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#7cd6cf'
                    }
                },
                data:[96.2, 94.8, 97.5, 93.9]
            }
        ]
    };
    edubalance.setOption(option);

});