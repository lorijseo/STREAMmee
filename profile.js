const settingBtn = document.querySelector("#save-profile-btn");
settingBtn.addEventListener('click', function(e){
    e.preventDefault();
    // get values
    const userName = document.querySelector("#username").value;
    const userLocation = document.querySelector("#location").value;

    const isLocationActive = document.querySelector("#use-location").checked;
    const isSubscriptionActive = document.querySelector("#use-subscription").checked;
    formUpdateProfile(userName, userLocation, isLocationActive, isSubscriptionActive );
    clearForm();
    
})

const editProfileBtn = document.querySelector("#edit-profile-btn");
editProfileBtn.addEventListener("click", function(e){
    e.preventDefault();

    userProfile = localStorage.getItem("user");
    userData = JSON.parse(userProfile);

    //place user info into form
    document.querySelector("#username").value =userData["username"];
    document.querySelector("#location").value =userData["location"];
    if (userData["locationActive"]== true){
        document.querySelector("#use-location").checked = true;
    }
    else{
        document.querySelector("#use-location").checked = false;
    }
    if (userData["subscriptionActive"] == true){    
        document.querySelector("#use-subscription").checked = true;
    }
    else{
        document.querySelector("#use-subscription").checked = false;
    }

})



function clearForm(){
    document.querySelector("#username").value='';
    document.querySelector("#location").value='';
    document.querySelector("#use-location").checked = false;
    document.querySelector("#use-subscription").checked = false;
}

function formUpdateProfile(name, location, locationActive, subscriptionActive){
    //show on profile
    document.querySelector("#profile-username").innerHTML= name;
    document.querySelector("#profile-location").innerHTML= location;
    if (locationActive){
        document.querySelector("#location-is-active").style.display = "block";
    }
    else{
        document.querySelector("#location-is-active").style.display = "none";
    }
    if (subscriptionActive){    
        document.querySelector("#subscription-is-active").style.display = "block";
    }
    else{
        document.querySelector("#subscription-is-active").style.display = "none";
    }
    //update local storage
    let profile ={}
    profile["username"] = name;
    profile["location"] = location;
    profile["locationActive"] = locationActive;
    profile["subscriptionActive"] = subscriptionActive;
    
    localStorage.setItem("user", JSON.stringify(profile))

}

function loadProfile(userData){
    document.querySelector("#profile-username").innerHTML=userData["username"];
    document.querySelector("#profile-location").innerHTML=userData["location"];
    if (userData["locationActive"]== true){
        document.querySelector("#location-is-active").style.display = "block";
    }
    else{
        document.querySelector("#location-is-active").style.display = "none";
    }
    if (userData["subscriptionActive"] == true){    
        document.querySelector("#subscription-is-active").style.display = "block";
    }
    else{
        document.querySelector("#subscription-is-active").style.display = "none";
    }
}
