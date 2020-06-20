// 防止命名冲突：
//  沙箱，但是方法暴露，还是会暴露出去，只能保护沙箱内部代码安全
//  命名空间，在实际中由项目组分配，写法：以对象的形式写

// 请求方式 type
// 请求地址 url
// 传递数据 data
// 处理返回数据方式 callback
var itcast = {
        ajax: function(obj) {
            var type = obj.type || 'get'; // 默认get方式
            var url = obj.url || location.href; // 默认请求当前页面
            var callback = obj.callback; // 回掉函数
            var data = this.processData(obj.data); // 前端给后台传的数据name=zs&age=18

            // 1.新建一个XMLHttpRequest对象
            var xhr = new XMLHttpRequest();
            // 2.设置请求报文
            if (type == 'get') {
                url = url + '?' + data;
                data = null;
            }
            // 2-1.请求行
            xhr.open(type, url);
            // 2-2.请求头
            if (type == 'post') {
                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            }
            // 2-2.请求主体
            xhr.send(data);
            // 3.监听服务器响应
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var r = xhr.responseText;
                    callback && callback(r);
                }
            }
        },
        // 处理数据，将对象转成name=zs&age=18
        processData: function(data) {
            var str = '';
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    str += key + '=' + data[key] + '&';
                }
            }
            // substr(起始索引, 截几个)
            str = str.substr(0, str.length - 1);
            console.log(str);
            return str;
        }
    }
    // itcast.ajax({
    //     url: '',
    //     data: {
    //         name: 'zs',
    //         age: 18
    //     }
    // });