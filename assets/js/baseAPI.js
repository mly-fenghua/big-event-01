// 开发环境地址
var baesUrl = "http://ajax.frontend.itheima.net"
    // 测试环境地址
    // var baesUrl = "http://ajax.frontend.itheima.net"
    // 生产环境地址
    // var baesUrl = "http://ajax.frontend.itheima.net"



// $.ajaxPrefilter()绑定在ajax之前,并在ajax请求之后触发，最后ajax才真正发送。
$.ajaxPrefilter(function(options) {
    // console.log(options.url);
    options.url = baesUrl + options.url


})