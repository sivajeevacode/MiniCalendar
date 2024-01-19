//select date,day,month,year
var date=document.getElementById("date")
var day=document.getElementById("day")
var month=document.getElementById("month")
var year=document.getElementById("year")
//generate current date
var today=new Date()
//declare day array
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//declare month array
var months=['January','February','March','April','May','June','July','August','September','October','November','December']

date.innerHTML=(today.getDate()<10?"0":"") + today.getDate()
day.innerHTML=days[today.getDay()]
month.innerHTML=months[today.getMonth()]
year.innerHTML=today.getFullYear()