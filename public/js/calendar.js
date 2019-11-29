//DatePicker  
var datepick = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepick,{format:'yyyy/mm/dd'});

var settings={
  Color: '#000',                //(string - color) font color of whole calendar.
  LinkColor: '#0000FF',            //(string - color) font color of event titles.
  NavShow: true,                //(bool) show navigation arrows.
  NavVertical: false,           //(bool) show previous and coming months.
  NavLocation: '',              //(string - element) where to display navigation, if not in default position.
  DateTimeShow: true,           //(bool) show current date.
  DateTimeFormat: 'mmm, yyyy',  //(string - dateformat) format previously mentioned date is shown in.
  DatetimeLocation: '',         //(string - element) where to display previously mentioned date, if not in default position.
  EventClick: '',               //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
  EventTargetWholeDay: false,   //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
  DisabledDays: [0,6],             //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.

}

function UpdateCalendar(events){
  if(document.getElementById('calendar')){
    var element = document.getElementById('calendar');
    element.innerHTML="";
    
    caleandar(element, events, settings);   
  } 
}
 

