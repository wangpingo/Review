/**
 * Created by Administrator on 2017/5/24 0024.
 */
//1.创建ajax引擎对象
var xhr=null;
if (window.xmlHttpRequest){
    xhr = new xmlHttpRequest;
}else{
    xhr = new ActiveXObject("Microsoft.XMLHttp");  //兼容老是浏览器
}
//2.配置请求对象信息
xhr.open('method','url','是否异步');
//使用post一定要设置请求头
//3发送请求3.发送请求
 xhr.send(['post请求参数字符串']);
        // 发送请求分为两种情况:
        //      1.监控用户的事件(onclick,onchange等),通过ajax发送请求
        //      2.监控浏览器的事件(onload),通过ajax发送请求.
//4：监听ajax对象（是否做出重要的响应）

xmlHttpRequest.onreadystatechange = function(){
    if (xmlHttpRequest.readyState== 4 && xmlHttpRequest.status==200) {
        //xmlHttpRequest.responseText
        //xmlHttpRequest.responseText
    }
}
