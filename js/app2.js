import '../css/app2'
import $ from "jquery"
let tableBar = $('#two .tableBar .title').find('li')
let content = $('#two .content li')
tableBar.on('click', (e) => {
    let index = $(e.currentTarget).index()
    console.log(index)
    tableBar.eq(index).addClass('active').siblings().removeClass('active')
    content.eq(index).addClass('show').siblings().removeClass('show')
})
tableBar.eq(0).trigger('click')