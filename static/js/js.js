var myChart; // 全局变量，用于存储图表实例
var itemStyle = {
    normal: {
        borderColor: '#0165b4',
        borderWidth: 1,
        areaColor: '#2a91e2'
    },
    emphasis: {
        areaColor: '#306de8'
    }
};

// function echarts_1() {
//     // 基于准备好的dom，初始化echarts实例
//     myChart = echarts.init(document.getElementById('echart1'));
//
//     option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: "{a} <br/>{b} : {c} ({d}%)"
//         },
//         series: [{
//             name: '占比情况',
//             type: 'pie',
//             radius: '50%',
//             center: ['50%', '50%'],
//             clockwise: false,
//             data: [{
//                 value: 25,
//                 name: '广东'
//             }, {
//                 value: 15,
//                 name: '北京'
//             }, {
//                 value: 8,
//                 name: '浙江'
//             }],
//             label: {
//                 normal: {
//                     textStyle: {
//                         color: 'rgba(255,255,255,.6)',
//                         fontSize: 14,
//                     }
//                 }
//             },
//             labelLine: {
//                 normal: {
//                     show: false
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     //borderWidth: 1,
//                     //borderColor: '#ffffff',
//                 },
//                 emphasis: {
//                     borderWidth: 0,
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//         }],
//         color: ['#62c98d', '#2f89cf', '#4cb9cf'],
//         //backgroundColor: '#fff'
//     };
//
//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });
//
//     function fetchData() {
//         $.ajax({
//             type: 'GET',
//             url: '/get_pie_data',
//             dataType: 'json',
//             success: function (data) {
//                 // 更新图表数据
//                 myChart.setOption({
//                     series: [{
//                         data: data.data  // 提取实际的图表数据
//                     }]
//                 });
//             },
//             complete: function () {
//                 // 每隔一段时间重新获取数据
//                 setTimeout(fetchData, 5000);  // 每5秒更新一次数据
//             }
//         });
//     }
//
//     // 第一次获取数据
//     fetchData();
// }

function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            name: '占比情况',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            clockwise: false,
            data: [],  // 初始为空数组
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    //borderWidth: 1,
                    //borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }],
        color: ['#62c98d', '#2f89cf', '#4cb9cf'],
        //backgroundColor: '#fff'
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    function fetchData() {
        $.ajax({
            type: 'GET',
            url: '/get_expenditures_data',
            dataType: 'json',
            success: function (data) {
                // 解析返回的 JSON 数据
                var jsonData = data.data;

                // 将返回的 JSON 数据转换为图表需要的格式
                var seriesData = jsonData.map(function (item) {
                    return {
                        value: parseInt(item.amount),
                        name: item.name
                    };
                });

                // 更新图表数据
                myChart.setOption({
                    series: [{
                        data: seriesData
                    }]
                });
            },
            complete: function () {
                // 每隔一段时间重新获取数据
                setTimeout(fetchData, 5000);  // 每5秒更新一次数据
            }
        });
    }

    // 第一次获取数据
    fetchData();
}



function echarts_2() {
    var myChart = echarts.init(document.getElementById('echart2'));
    var xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var ydata = ['用户购买量', '用户浏览量'];

    var option = {
        color: ["#62c98d", "#2f89cf"],
        legend: {
            data: ydata,
            type: 'scroll',
            textStyle: { color: "#fff" },
            top: '0'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '14%',
            left: '15',
            right: '35',
            bottom: '12%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xdata,
            axisLabel: { textStyle: { color: "rgba(255,255,255,.6)" } },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
        },
        yAxis: {
            type: 'value',
            axisTick: { show: false },
            splitLine: {
                show: true,
                lineStyle: { color: "#2f2a7a" }
            },
            axisLabel: { textStyle: { color: 'rgba(255,255,255,.6)' } },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
        },
        dataZoom: [{
            show: true,
            height: 12,
            xAxisIndex: [0],
            bottom: 5,
            start: 10,
            end: 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: "#d3dee5"
            },
            textStyle: {
                color: "#fff"
            },
            borderColor: "rgba(255,255,255,.3)"
        }],
        series: []
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    function fetchData() {
        $.ajax({
            type: 'GET',
            url: '/get_sales_data',
            dataType: 'json',
            success: function (data) {
                var dbData = data.data;

                var series = ydata.map(function (item, index) {
                    return {
                        name: item,
                        type: 'bar',
                        barWidth: '30',
                        data: dbData.map(function (row) {
                            return row[item];
                        })
                    };
                });

                myChart.setOption({
                    series: series
                });
            },
            complete: function () {
                setTimeout(fetchData, 5000);
            }
        });
    }

    fetchData();
}

function echarts_3() {
    myChart = echarts.init(document.getElementById('echart3'));

    // 首次加载图表
    updateMapData();

    // 每10秒更新一次图表数据
    setInterval(updateMapData, 4000);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function updateMapData() {
    // 获取数据的 Ajax 请求
    $.ajax({
        url: '/get_expenditures_data',
        type: 'GET',
        dataType: 'json',
        success: function (jsonData) {
            // 解析返回的 JSON 数据
            var data = jsonData.data;

            // Parse the amount and find the max
            var maxAmount = Math.max(...data.map(item => parseFloat(item.amount)));

            // 生成地图的 series 数据
            var seriesData = [{
                name: '消费水平',
                type: 'map',
                map: 'china',
                roam: true,
                itemStyle: itemStyle,
                data: data.map(function (item) {
                    var name = item.name;
                    var amount = parseFloat(item.amount);
                    var color = getRankColor(amount, maxAmount);

                    return {
                        name: name,
                        value: amount,
                        itemStyle: {
                            normal: {
                                areaColor: color
                            }
                        }
                    };
                })
            }];

            var option = {
                backgroundColor: '#0048b7', // 设置地图背景颜色
                title: {
                    text: '用户消费地图',
                    left: 'center',
                    top: '13%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: seriesData
            };

            // 使用刚指定的配置项和数据更新图表
            myChart.setOption(option);
        },
        error: function (xhr, status, error) {
            console.error('Ajax 请求失败:', error);
        }
    });
}

function getRankColor(value, maxValue) {
    var startColor = '#FFD700'; // 深橙色
    var endColor = '#FF4500'; // 浅橙色

    var ratio = value / maxValue;

    var r = parseInt(startColor.slice(1, 3), 16);
    var g = parseInt(startColor.slice(3, 5), 16);
    var b = parseInt(startColor.slice(5, 7), 16);

    var endR = parseInt(endColor.slice(1, 3), 16);
    var endG = parseInt(endColor.slice(3, 5), 16);
    var endB = parseInt(endColor.slice(5, 7), 16);

    var resultR = Math.floor(r + (endR - r) * ratio).toString(16);
    var resultG = Math.floor(g + (endG - g) * ratio).toString(16);
    var resultB = Math.floor(b + (endB - b) * ratio).toString(16);

    // Pad with leading zeros if necessary
    if (resultR.length < 2) resultR = "0" + resultR;
    if (resultG.length < 2) resultG = "0" + resultG;
    if (resultB.length < 2) resultB = "0" + resultB;

    return '#' + resultR + resultG + resultB;
}

function echarts_4() {
    var myChart = echarts.init(document.getElementById('echart4'));

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            formatter: '{b}:<br/> 消费率{c}%'
        },
        grid: {
            left: '0',
            right: '20',
            top: '10',
            bottom: '20',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255,255,255,.6)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            data: []
        }],
        yAxis: [{
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255,255,255,.6)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [{
            name: '消费率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(98, 201, 141, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(98, 201, 141, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#4cb9cf',
                    borderColor: 'rgba(98, 201, 141,0.27)',
                    borderWidth: 12
                }
            },
            data: []
        }]
    };

    var fetchData = function () {
        $.ajax({
            type: 'GET',
            url: '/get_chart_data',
            dataType: 'json',
            success: function (data) {
                var xAxisData = data.data.map(function (item) {
                    return item.month;
                });

                var seriesData = data.data.map(function (item) {
                    return item.completion_rate;
                });

                option.xAxis[0].data = xAxisData;
                option.series[0].data = seriesData;

                myChart.setOption(option);
            },
            complete: function () {
                setTimeout(fetchData, 5000);
            }
        });
    };

    fetchData();

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function fetchAndDisplayCompaniesData() {
    function fetchCompaniesData(url, tableId) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                var companies = data.data;

                // 按照金额排序，从大到小
                companies.sort(function (a, b) {
                    var amountA = parseFloat(a.amount);
                    var amountB = parseFloat(b.amount);
                    return amountB - amountA;
                });

                var tableBody = document.getElementById(tableId);
                tableBody.innerHTML = '';

                for (var i = 0; i < companies.length; i++) {
                    var company = companies[i];
                    var row = document.createElement('tr');

                    var rankingCell = document.createElement('td');
                    rankingCell.innerHTML = '<span>' + (i + 1) + '</span>';
                    row.appendChild(rankingCell);

                    var nameCell = document.createElement('td');
                    nameCell.textContent = company.name;
                    row.appendChild(nameCell);

                    var amountCell = document.createElement('td');
                    amountCell.textContent = company.amount;
                    row.appendChild(amountCell);

                    tableBody.appendChild(row);
                }
            },
            complete: function () {
                setTimeout(function () {
                    fetchCompaniesData(url, tableId);
                }, 5000);
            }
        });
    }

    window.addEventListener('DOMContentLoaded', function () {
        // fetchCompaniesData('/get_companies_data', 'companies-table-body');
        fetchCompaniesData('/get_expenditures_data', 'expenditures-table-body');
    });
}

function updateSalesStatistics() {
    $.ajax({
        url: "/get_sales_statistics", // 后端接口URL
        type: "GET", // 请求类型，GET 或 POST
        dataType: "json", // 期望的响应数据类型
        success: function(response) {
            // 取得数据列表中的第一项
            var data = response.data[0];

            // 更新当天的数据
            $("#1").text(data.daily_sales);
            $("#2").text(data.daily_profit);

            // 更新当月的数据
            $("#3").text(data.monthly_sales);
            $("#4").text(data.monthly_profit);

            // 更新当年的数据
            $("#5").text(data.yearly_sales);
            $("#6").text(data.yearly_profit);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 如果请求失败，可以在这里处理错误
            console.error("Failed to get sales statistics: " + textStatus);
        }
    });
}

// 定期更新数据，例如每10秒更新一次
setInterval(updateSalesStatistics, 10000);


$(window).on('load', function () {
    $(".loading").fadeOut();
});

$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    fetchAndDisplayCompaniesData();
    updateSalesStatistics();
});
