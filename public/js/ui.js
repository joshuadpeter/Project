document.addEventListener('DOMContentLoaded', function() {
    // nav menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});

    // add announcement form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
    
  });

  // Add announcement changes to UI 
function updateAnnouncements (data, id){
  
  const newAnnouncement =` 
  <div class="card-panel announcement white row" data-id=${id}>
    <div class="announcement-details">
      <div class="announcement-title">${data.title}</div>
      <div class="announcement-date">${data.time}</div>
      <div class="announcement-description">${data.description}</div>
    </div>
    <div class="announcement-delete">
      <i class="material-icons" data-id=${id}>delete_outline</i>
    </div>
  </div>
  `
  if (document.querySelector('.announcements')){
    document.querySelector('.announcements').insertAdjacentHTML("afterbegin", newAnnouncement);
  }
}

// remove announcement changes to UI
function removeAnnouncement (id){
  if (document.querySelector('.announcements')){  
    document.querySelector(`.announcement[data-id=${id}]`).remove();
  }
}

// update UI gym capacity 
function updateCapacity ( countValue ){
  if(document.querySelector('.capacity-number')){
    document.querySelector('.capacity-number').innerHTML= countValue.count;
    document.querySelector('.capacity-lastChecked').innerHTML= 'Updated:' + countValue.time;
    if(countValue.count == 50){
      pushMessage("Gym is at capacity");
    }
  }
}

// Update UI based on User
function updateUI(type){
  
  if(type=="signedIn"){
    const loggedInView = document.querySelectorAll('.loggedIn');
    loggedInView.forEach(element => {
      element.style.display = 'Block'
    });
    const loggedOutView = document.querySelectorAll('.loggedOut');
    loggedOutView.forEach(element => {
      element.style.display = 'none'
    });
  }
  else if(type=="signedOut"){
    const loggedInView = document.querySelectorAll('.loggedIn');
    loggedInView.forEach(element => {
      element.style.display = 'none'
    });
    const loggedOutView = document.querySelectorAll('.loggedOut');
    loggedOutView.forEach(element => {
      element.style.display = 'Block'
    });
  }
  
}

