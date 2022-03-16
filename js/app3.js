import "../css/app3"
//对数据进行处理
import $ from "jquery"
$('#square').on("click", function() {
    console.log(222)
    $('#square').toggleClass('active')
})