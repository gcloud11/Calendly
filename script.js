//re-load//

$(document).ready(function () {


    var dayCurrent = $("#currentDay");

    var timeBlock = $(".row")

    var saveButton = $(".saveBtn");

    var hourNow = moment().hours();



    //Setting current day inside if <p> with class of current-day//

    setInterval( () => {  

        var now = moment();

        var humanReadable = now.format("dddd, MMMM Do YYYY, hh:mm:ss A");

        // console.log(humanReadable);

        var dayCurrent = $("#currentDay");

        dayCurrent.text(humanReadable);


    }, 1000);



   //Pulling the time-block class and id = militaryTime to coordinate past, present & future colors//

    function eachHour () {

        var timeBlock = $(".row"); //This is the <div> row//

        timeBlock.each(function (index) {

            var blocksAboveOrBelow = $(this).attr("id");  //here the hour in military time is pulled by it's id in time-block div.//

            if (hourNow > blocksAboveOrBelow) {

                $(this).addClass("past");

            } else if (hourNow == blocksAboveOrBelow) {

                $(this).addClass("present");

            } else if (hourNow < blocksAboveOrBelow)

                $(this).addClass("future");


        } );
    }

    eachHour();

   
    //Save Button//

    $(".saveBtn").on("click", function (event) {

        var content = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        var setStore = localStorage.setItem(time, content);

    });



    function getEvents() {

        $("#hour-09 .description").val(localStorage.getItem("hour-09"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
        
    };

    getEvents()

    
///other option to saeve & then presist events in local storage///

    //     var button = JSON.parse(localStorage.getItem ("saveText") ) || []; 

    //     button.push({

    //         contentSaved: content,

    //         numberSaved: number
    //     })
    //       console.log(button);  

    //     localStorage.setItem("saveText", JSON.stringify(button));

    //     timeBlock.each( function (index) {

    //         // console.log(button); 

    //         // console.log(number);

    //     });

    // });  
    



    // $(savedText).each( function (index, value) {

    //     var sContent = JSON.parse(localStorage.getItem ("saveText") ); 

    //     // console.log(sContent);

    //     var attr = $(this).parent().attr("id");

    //     console.log(index, value, attr);

    //     for (var i = 0; i < sContent.length;  i++) {

    //         console.log(sContent[i].time);

    //         if (attr == sContent[i].time) {

    //             $(this).text(sContent[i].value);

    //         }

    //     }
    // } )
}); 
