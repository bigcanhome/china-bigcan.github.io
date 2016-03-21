/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(t) {
  if(this != t.target && t.target.tagName.toLocaleLowerCase()!="label"){
    if(t.target.value==pageState.nowGraTime){
        return false;
    }
    pageState.nowGraTime = t.target.value;
    renderChart()
  }
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(t) {
  if(t.target.value==pageState.nowSelectCity){
    return false;
  }
  pageState.nowSelectCity = t.target.value;
  renderChart()
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  document.getElementById("formGraTime").onclick = graTimeChange;
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  var n = 0;
  var html ="<option value='-1'>--请选择城市--</option>";
  for(var key in aqiSourceData){
    html += "<option value="+n+">"+key+"</option>"
    n++;
  }
  document.getElementById("citySelect").innerHTML = html;
  document.getElementById("citySelect").onchange = citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  for(var key in aqiSourceData){
    var total=0;
    var n=0;
    var m=0;
    var weekn=1;
    chartData[key].day = aqiSourceData[key];
    for(var k in aqiSourceData[key]){
        n++;
        total +=aqiSourceData[key][k];
        
        if(n%7==0){
          chartData[key].week.["第"+weekn+"周"] = parseInt(total/7);
          weekn++;
          total=0;
        }else {
          var p = parseInt(total/(n%7));
          chartData[key].week.["第"+weekn+"周"] = p;
          total=0;
        }
    }
    for(var k in aqiSourceData[key]){
        total +=aqiSourceData[key][k];
          m++;
          chartData[key].week.["第"+k.split("-")[1]+"月"] = parseInt(total/m);
      
    }

  }

  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();