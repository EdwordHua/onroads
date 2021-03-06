$(function () {

    var one_myChart = echarts.init(document.getElementById('oneChart'));
    var two_myChart = echarts.init(document.getElementById('twoChart'));
    var three_myChart = echarts.init(document.getElementById('threeChart'));

    var one_option = {
        // title: {
        //     text: '外贸出口先导指数'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['外贸出口先导指数','出口经理人指数','新增出口订单指数','出口企业综合成本指数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2014.07', '2014.08', '2014.09', '2014.10', '2014.11', '2014.12', '2015.01', '2015.02', '2015.03', '2015.04', '2015.05', '2015.06', '2015.07', '2015.08', '2015.09', '2015.10', '2015.11', '2015.12', '2016.01', '2016.02', '2016.03', '2016.04', '2016.05', '2016.06', '2016.07', '2016.08', '2016.09', '2016.10', '2016.11', '2016.12', '2017.01', '2017.02', '2017.03', '2017.04', '2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04']
        },
        yAxis: {
            type: 'value',
            // name: '指数',
            min: 0,
            max: 50,
            interval: 10
        },

        series: [
            {
                name:'外贸出口先导指数',
                type:'line',
                data:[ 42.6, 41.9, 43.3, 41.7, 40.8, 40.1, 38.6, 39.6, 38.2, 35.9, 35.0, 34.8, 34.1, 34.0, 34.0, 32.8, 31.8, 31.2, 31.7, 31.3, 31.6, 33.8, 33.1, 32.7, 33.8, 34.7, 35.8, 35.6, 36.9, 37.4, 39.0, 40.2, 40.2, 40.7, 41.1, 41.5, 41.9, 41.9, 41.8, 41.6, 41.8, 41.4, 41.6, 41.4, 41.0, 41.0]
            },
            {
                name:'出口经理人指数',
                type:'line',
                data:[43.0, 42.3, 44.8, 42.9, 42.1, 40.8, 41.2, 41.1, 40.0, 39.5, 38.1, 36.5, 36.6, 34.0, 33.7, 32.5, 32.8, 32.7, 33.4, 32.7, 36.1, 37.5, 36.3, 35.9, 36.9, 38.7, 39.9, 39.2, 40.0, 39.4, 41.5, 41.6, 43.8, 44.8, 45.2, 44.7, 44.9, 44.7, 43.9, 43.4, 44.8, 44.2, 43.4, 43.8, 44.3, 44.0]
            },
            {
                name:'新增出口订单指数',
                type:'line',
                data:[46.7, 45.5, 48.0, 45.1, 44.0, 43.1, 44.0, 42.5, 40.4, 39.6, 37.7, 36.2, 35.8, 33.3, 32.7, 30.8, 31.6, 31.6, 33.3, 31.9, 35.7, 37.3, 35.5, 35.4, 36.3, 38.4, 40.3, 39.5, 41.3, 41.9, 43.9, 44.1, 46.4, 48.2, 48.8, 48.5, 48.4, 47.8, 47.1, 46.4, 48.7, 48.3, 48.8, 46.6, 47.8, 47.9]
            },
            {
                name:'出口企业综合成本指数',
                type:'line',
                data:[22.0, 22.4, 23.2, 24.4, 23.9, 25.3, 26.0, 26.2, 26.7, 26.2, 26.8, 26.4, 27.7, 28.4, 28.5, 28.9, 29.3, 29.7, 29.9, 29.8, 29.1, 28.3, 29.1, 29.0, 28.0, 27.9, 27.6, 27.4, 25.5, 23.9, 22.8, 21.6, 22.0, 23.2, 22.9, 23.0, 23.2, 22.6, 19.9, 21.1, 20.1, 20.5, 19.9, 21.1, 20.9, 20.5]
            }

        ]
    };

    var two_option = {
        // title: {
        //     text: '外贸出口先导指数'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['进出口贸易指数','出口贸易指数','进口贸易指数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:  ['2014.01', '2014.02', '2014.03', '2014.04', '2014.05', '2014.06', '2014.07', '2014.08', '2014.09', '2014.10', '2014.11', '2014.12', '2015.01', '2015.02', '2015.03', '2015.04', '2015.05', '2015.06', '2015.07', '2015.08', '2015.09', '2015.10', '2015.11', '2015.12', '2016.01', '2016.02', '2016.03', '2016.04', '2016.05', '2016.06', '2016.07', '2016.08', '2016.09', '2016.10', '2016.11', '2016.12', '2017.01', '2017.02', '2017.03', '2017.04', '2017.05', '2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07', '2018.08', '2018.09', '2018.10', '2018.11', '2018.12', '2019.01']
        },
        yAxis: {
            type: 'value',
            // name: '指数',
            min: 0,
            max: 180,
            interval: 30
        },

        series: [
            {
                name:'进出口贸易指数',
                type:'line',
                data:[ 140.33, 81.66, 115.98, 128.97, 126.93, 120.56, 130.95, 127.65, 136.84, 128.79, 126.38, 140.83, 129.25, 103.18, 100.0, 112.04, 115.14, 121.4, 120.03, 115.42, 121.0, 107.63, 116.76, 128.77, 102.99, 75.07, 100.31, 103.68, 111.14, 109.69, 107.83, 114.32, 112.69, 109.05, 122.14, 135.11, 118.4, 88.27, 124.68, 121.0, 127.3, 121.4, 117.95, 127.05, 127.94, 123.15, 147.38, 148.93, 144.5, 117.13, 130.92, 140.57, 150.57, 142.25, 145.28, 149.1, 152.48, 151.16, 153.65, 147.33, 151.62]
            },
            {
                name:'出口贸易指数',
                type:'line',
                data:[139.95, 65.25, 113.61, 130.22, 136.23, 124.4, 140.41, 136.17, 130.68, 133.77, 139.96, 155.41, 151.55, 124.43, 100.0, 120.69, 136.38, 133.31, 130.68, 130.81, 139.33, 125.08, 134.92, 148.75, 123.65, 83.62, 113.0, 119.79, 131.01, 126.34, 124.95, 128.67, 121.41, 121.45, 131.67, 145.65, 131.94, 79.84, 133.21, 134.79, 142.77, 133.33, 131.78, 135.04, 130.8, 129.61, 155.12, 158.91, 145.93, 123.34, 127.04, 149.68, 159.82, 149.4, 147.14, 149.49, 149.7, 148.36, 156.94, 157.74, 162.3]
            },
            {
                name:'进口贸易指数',
                type:'line',
                data:[140.77, 100.98, 118.77, 127.48, 115.98, 116.03, 119.81, 117.61, 144.1, 122.92, 110.4, 123.67, 102.98, 78.15, 100.0, 101.84, 90.14, 107.37, 107.49, 97.3, 99.43, 87.09, 95.37, 105.25, 78.66, 65.0, 85.36, 84.7, 87.74, 90.08, 87.67, 97.43, 102.43, 94.46, 110.93, 122.7, 102.45, 98.19, 114.64, 104.75, 109.08, 107.35, 101.67, 117.64, 124.56, 115.53, 138.28, 137.18, 142.82, 109.81, 135.48, 129.85, 139.68, 133.82, 143.08, 148.65, 155.75, 154.45, 149.78, 135.06, 139.04]
            }


        ]
    };

    var three_option = {
        // title: {
        //     text: '外贸出口先导指数'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['一带一路贸易额指数','一带一路货运量指数','海上丝绸之路运价指数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:  ['2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07', '2018.08', '2018.09', '2018.10', '2018.11', '2018.12']
        },
        yAxis: {
            type: 'value',
            // name: '指数',
            min: 0,
            max: 150,
            interval: 30
        },

        series: [
            {
                name:'一带一路贸易额指数',
                type:'line',
                data:[  112.11, 108.63, 113.1, 118.16, 108.08, 131.01, 127.79, 125.59, 112.39, 109.14, 121.29, 126.86, 124.61, 124.88, 126.63, 133.29, 127.01, 134.91]
            },
            {
                name:'一带一路货运量指数',
                type:'line',
                data:[ 126.99, 133.34, 123.06, 123.09, 101.28, 122.56, 116.41, 122.5, 112.78, 104.89, 123.44, 126.45, 125.94, 131.63, 130.42, 131.76, 131.07, 125.03]
            },
            {
                name:'海上丝绸之路运价指数',
                type:'line',
                data:[ 91.03, 94.86, 98.52, 101.68, 99.81, 101.76, 90.71, 93.56, 91.94, 89.32, 94.82, 97.6, 101.23, 105.14, 99.99, 104.19, 98.52, 101.3]
            }


        ]
    };

    one_myChart.setOption(one_option);
    two_myChart.setOption(two_option);
    three_myChart.setOption(three_option);



})