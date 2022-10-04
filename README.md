# Echarts

#### 使用步骤

下载并引入echarts.js                                  文件图表依赖这个js库
准备一个具备大小的DOM容器                   生成的图表会放入这个容器内
初始化echarts实例对象                         	  实例化echarts对象 
指定配置项和数据(option)                  		根据具体需求修改配置选项 
将配置项设置给echarts实例对象               让echarts对象根据修改好的配置生效

#### 基本配置

title:标题组件
tooltip:提示框组件 
legend:图例组件 
toolbox:工具栏
grid:直角坐标系内绘图网格
xAxis:直角坐标系grid中的x轴 
yAxis:直角坐标系grid中的y轴
series:系列列表、每个系列通过type决定自己的图表类型(什么类型的图标) 
color:调色盘颜色列表

#### series: 系列列表

type: 类型(什么类型的图表)比如line是折线bar柱形等
name:系列名称，用于tooltip的显示，legend的图例筛选变化
stack:数据堆叠。 如果设置相同值，则会数据堆叠。

数据堆叠: 第二个数据值=第一个数据值+第二个数据值
        		 第三个数据值=第二个数据值+第三个数据值....依次叠加
       		  如果给stack指定不同值或者去掉这个属性则不会发生数据堆叠
