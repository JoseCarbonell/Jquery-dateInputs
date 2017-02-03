    //Blessings!!..
    // Remember to import 
            <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script> 
    //in you HTML file..
            
    var date = new Date();
    var firstDay = new Date(date.getUTCFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var month = date.getMonth()+1;
    var day = date.toString().substring(8,10);
    if(month < 9)
        month = "0"+month
    //Set date input Today
    var setDateDay = (date.getFullYear()) + '-' + month + '-' +  day;
    //Set date input First day of the Month
    var setDateFirstDay = (date.getFullYear()) + '-' + month + '-' +  firstDay.toString().substring(8,10);
     //Set date input Last day of the Month
    var setDateLastDay = (date.getFullYear()) + '-' + month + '-' +  lastDay.toString().substring(8,10);
