import "../css/app4"
import $ from "jquery"
let $cicle = $('#four .circle')
$cicle.mouseenter((e) => {
    $(e.currentTarget).addClass('active')
}).mouseout((e) => {
    $(e.currentTarget).removeClass('active')
})