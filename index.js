function updateClock(){
    var now = new Date();
    var day = now.getDay();
    var mo = now.getMonth();
    var num = now.getDate();
    var yr = now.getFullYear();
    var hr = now.getHour();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";

    var months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "Spetember", "October", "November", "December", ]
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var ids = ["Day", "Month", "Num", "Year", "Hours", "Min", "Sec", "PE", ] 
    var values = [day, mo, num, yr, hr, min, sec, pe]

    for (var i = 0; i < ids.length; i++)
        document(getElementById(ids[1]).firstChild.nodeValue = values[i]);
    


}

function initClock(){
    updateClock();
    window.setInterval("updateClock(), 1");
}

