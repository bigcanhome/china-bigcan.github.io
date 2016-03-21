var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function trim(str){ //删除左右两端的空格
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
function isAdd(name, value){
	var regName=/^[A-Za-z\u4e00-\u9fa5]{0,}$/;
    var regValue=/^[0-9]{0,}$/;
    if (name==""||!regName.test(name)) {
    	document.getElementById("tip").innerHTML = "城市名必须为中英文字符";
    	return false;
    }else if (value==""||!regValue.test(value)) {
    	document.getElementById("tip").innerHTML = "空气质量指数必须为整数";
    	return false;
    }else {
    	document.getElementById("tip").innerHTML = "";
    	document.getElementById("aqiCityInput").value = "";
    	document.getElementById("aqiValueInput").value = "";
    	return true;
    }
}
function addAqiData() {
	var name = trim(document.getElementById("aqiCityInput").value);
	var value = trim(document.getElementById("aqiValueInput").value);
	if(isAdd(name,value)){
		if (Object.keys(aqiData).length === 0) {
			document.getElementById("aqiTable").innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
		}
		aqiData[name] = value;
		renderAqiList(name,value)
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList(name,value) {
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.innerHTML = name;
	var td2 = document.createElement("td");
	td2.innerHTML = value;
	var td3 = document.createElement("td");
	var btn = document.createElement("button");
	btn.onclick = function(){
		delBtnHandle(tr);
	}
	btn.innerHTML = "删除";
	td3.appendChild(btn);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	document.getElementById("aqiTable").appendChild(tr);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(tr) {
	document.getElementById("aqiTable").removeChild(tr);
	delete aqiData[name];
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("addBtn").onclick = addBtnHandle;

}

init();