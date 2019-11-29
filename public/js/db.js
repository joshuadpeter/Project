const db = firebase.firestore();

//Enable Persistence for the Database 
db.enablePersistence();

//check for capacity changes
db.collection('Capacity').onSnapshot((snapshot) => {
    
    snapshot.docChanges().forEach(change => {
        if((change.type == 'added' || change.type == 'modified') && change.doc.id =='--currentValue--'){
            updateCapacity(change.doc.data());
        }
    });
})

//add/remove Person
const personForm = document.querySelector(".addRemovePersonForm");
if (personForm != null){
    personForm.addEventListener('submit', evt => {
        evt.preventDefault();
        const StudentID = personForm.StudentID.value;

        if(StudentID !=='' ){ 
            db.collection('ValidUsers').get().then((snapshot) =>{
                snapshot.docs.forEach(doc =>{
                    if (doc.id == StudentID ){
                        if (doc.data().timeIn != ""){
                            capacityRemove(doc.id);
                        }
                        else{
                            capacityAdd(doc.id);
                        }
                    }   
                })
            })
            personForm.reset();
        }
        else
            console.log('no data entered')
            
    })
}

function capacityAdd(id) {
    const increment = firebase.firestore.FieldValue.increment(1)
    const capacityAddDb = db.collection('Capacity').doc('--currentValue--');
    capacityAddDb.update({count: increment});
    capacityAddDb.update({time: (new Date()).toLocaleString('en-US')});
    
    const userTime = db.collection('ValidUsers').doc(id)
    userTime.update({timeIn: (new Date()).toLocaleString('en-US')});
    
}

//remove Person
function capacityRemove(id) {
    const decrement = firebase.firestore.FieldValue.increment(-1)
    const capacityRemoveDb = db.collection('Capacity').doc('--currentValue--');
    capacityRemoveDb.update({count: decrement});
    capacityRemoveDb.update({time: (new Date()).toLocaleString('en-US')});

    const userTime = db.collection('ValidUsers').doc(id)
    userTime.update({timeIn:""});

}



//check for announcement changes
db.collection('Announcements').orderBy('time', 'desc' ).onSnapshot((snapshot) => {

    snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
            updateAnnouncements(change.doc.data(), change.doc.id);
        }
        if(change.type == 'removed'){
            removeAnnouncement(change.doc.id);
        }
    });
}) 


// Add an Announcement
const Announcementform = document.querySelector(".addAnnouncementForm");
if (Announcementform != null){
    Announcementform.addEventListener('submit', evt => {
        evt.preventDefault();

        if(Announcementform.title.value !=='' && Announcementform.description.value !== ''){
            const data= {
                title: Announcementform.title.value,
                description: Announcementform.description.value,
                time: (new Date()).toLocaleString('en-US')
            }   
            db.collection('Announcements').add(data).catch(err => console.log(err))
            Announcementform.reset();
        }
        else
            console.log('no data entered')
    })
}

// remove an Announcement
const announcementDiv = document.querySelector(".announcements");
if (announcementDiv != null){
    announcementDiv.addEventListener('click', evt => {
        if (evt.target.tagName == 'I') {
            db.collection('Announcements').doc(evt.target.getAttribute('data-id')).delete();
            removeAnnouncement(evt.target.getAttribute('data-id'));
        }
    })
}

//check for Calendar Event changes
let events=[];
db.collection('Calendar').orderBy('date', 'desc' ).onSnapshot((snapshot) => {
  
    snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
            events.push({'Date': new Date(change.doc.data().date.substring(0,4),(change.doc.data().date.substring(5,7)-1),change.doc.data().date.substring(8,10)), 
            'Title': change.doc.data().event,'Link': '/pages/calendar.html'})        
        }
        else if(change.type == 'removed'){
            events = events.filter(function(event){
                return (event.Title !== change.doc.data().event &&  
                event.Date !== new Date(change.doc.data().date.substring(0,4),(change.doc.data().date.substring(5,7)-1),change.doc.data().date.substring(8,10))) });
        }
    });
    UpdateCalendar(events);
}) 


// Add an Calendar Event
const calendarform = document.querySelector(".calendarEventForm");
if (calendarform != null){
    calendarform.addEventListener('submit', evt => {
        evt.preventDefault();   
        if(calendarform.Event.value !=='' && calendarform.Date.value !== ''){
            const Calendardata= {
                event: calendarform.Event.value,
                date: calendarform.Date.value
            }   
            db.collection('Calendar').add(Calendardata).catch(err => console.log(err))
            calendarform.reset();
        }
        else
            console.log('no data entered')
    })
}

// // remove an Calendar Event
// const calendarDiv = document.querySelector(".calendarEventForm");
// if (calendarDiv != null){
//     calendarDiv.addEventListener('click', evt => {
//         if (evt.target.tagName == 'I') {
//             db.collection('Calendar').doc(evt.target.getAttribute('data-id')).delete();
//             removeCalendarEvent(evt.target.getAttribute('data-id'));
//         }
//     })
// }

//check for Analytics changes
let Analytics=[['Time', 'Capacity']];
let temp = [];
db.collection('Analytics').orderBy('position', 'asc' ).onSnapshot((snapshot) => {
    
    snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
            temp= [change.doc.data().time, parseInt(change.doc.data().Value)];
            Analytics.push(temp);
        }
        else if(change.type == 'modified'){
            Analytics.forEach((item, index) => {
                if(item[0]==change.doc.data().time){
                    item[1]= parseInt(change.doc.data().Value);
                }
            });;
        }
    });
    drawChart(Analytics);
})

//future Work Modify Analytics Based on capacity for the Day with time trigger to clear database at 11Pm daily

// AnalyticsData.forEach((item) => {
//     console.log(item);      
//         db.collection('Analytics').add(item).catch(err => console.log(err))    
// });;
// db.collection('Analytics').add(AnalyticsData).catch(err => console.log(err))
// console.log(AnalyticsData)
    


