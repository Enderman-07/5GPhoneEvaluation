function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'output.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// 在页面上显示JSON数据
function displayData(data) {
    var jsonData = JSON.parse(data);
    var container = document.getElementById('data-container');
    container.innerHTML = '内存:'+jsonData[0]['内存']+'<br>CPU型号:'+jsonData[0]['CPU型号'];
}

loadJSON(displayData);