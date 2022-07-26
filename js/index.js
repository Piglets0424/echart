// 因为有多个图表防止变量冲突污染 采用立即执行函数
// 监控区域模块
(function () {
  $('.tabs').on('click', 'a', function () {
    // 高亮切换
    $(this).addClass('active').siblings().removeClass();
    // 根据a索引号判断显示模块
    $('.monitor .content')
      .eq($(this).index())
      .show()
      .siblings('.content')
      .hide();
  });
  // 无缝滚动
  $('.content .marquee-view .marquee').each(function () {
    var rows = $(this).children().clone();
    $(this).append(rows);
  });
})();
// 点位统计
(function () {
  var myChart = echarts.init($('.pie')[0]);
  var option = (option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: '点位统计',
        type: 'pie',
        // 内径和外径
        radius: ['10%', '70%'],
        // 位置
        center: ['50%', '50%'],
        roseType: 'radius',
        // itemStyle: {
        //     // 圆角
        //   borderRadius: 8,
        // },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' },
        ],
        // 文字调整
        label:{
            // 字体大小
            fontsize:10,
        },
           // 引导线
           labelLine:{
            // 连接图线线长
            length:6,
            // 连接文字线线长
            length2:8,
        }
      },
    ],
    color:['#006cff','#60cda0','#ed8884','#ff9f7f', '#0096ff', '#9fe6b8','#32c5e9','#1d9dff']
  });
  myChart.setOption(option);
})();
