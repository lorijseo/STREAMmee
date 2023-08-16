function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}



const settingBtn = document.querySelector("#save-profile-btn");
settingBtn.addEventListener('click', function(e){
    e.preventDefault();
    // get values
    const userName = document.querySelector("#username").value;
    
    const location =  document.querySelector('#region')
    const locationName = document.querySelector('#region').value;
    const locationCode = location.options[location.selectedIndex].id
    const userLocation = [locationName, locationCode]


    // const isLocationActive = document.querySelector("#use-location").checked;
    const isSubscriptionActive = document.querySelector("#use-subscription").checked;
    formUpdateProfile(userName, userLocation, isSubscriptionActive );
    document.querySelector('#setting').style.display="none";
    // clearForm();
    
})

const editProfileBtn = document.querySelector("#edit-profile-btn");
editProfileBtn.addEventListener("click", function(e){
    e.preventDefault();

    userProfile = localStorage.getItem("user");

    //first time user editing location
    if (userProfile == null){
        const userLocationData = localStorage.getItem("selectedLocation");
        const userLocation = JSON.parse(userLocationData);
        const countryCode = userLocation.country_code;
        const countryName = userLocation.country;
        // document.querySelector("#location").value = countryName;
        const location = document.querySelector(`#${countryCode}`)
        location.setAttribute("selected", 'selected');
        console.log(location.value)
        
    }
    else{
        userData = JSON.parse(userProfile);

        //place user info into form
        document.querySelector("#username").value =userData["username"];
        // document.querySelector("#location").value =userData["location"];

        const location = document.querySelector(`#${userData["location"].country_code}`)
        location.setAttribute("selected", 'selected');


        // if (userData["locationActive"]== true){
        //     document.querySelector("#use-location").checked = true;
        // }
        // else{
        //     document.querySelector("#use-location").checked = false;
        // }
        if (userData["subscriptionActive"] == true){    
            document.querySelector("#use-subscription").checked = true;
        }
        else{
            document.querySelector("#use-subscription").checked = false;
        }

    }
    document.querySelector('#setting').style.display="flex";


})



function clearForm(){
    document.querySelector("#username").value='';
    document.querySelector("#location").value='';
    // document.querySelector("#use-location").checked = false;
    document.querySelector("#use-subscription").checked = false;
}

function formUpdateProfile(name, location, locationActive, subscriptionActive){
    //show on profile
    document.querySelector(".profile-username").innerHTML= name;
    document.querySelector(".profile-location").innerHTML= location[0];
    // if (locationActive){
    //     document.querySelector(".location-is-active").style.display = "block";
    // }
    // else{
    //     document.querySelector(".location-is-active").style.display = "none";
    // }
    if (subscriptionActive){    
        document.querySelector(".subscription-is-active").style.display = "block";
    }
    else{
        document.querySelector(".subscription-is-active").style.display = "none";
    }

    let locationObject = {};
    locationObject['country'] = location[0];
    locationObject['country_code'] = location[1];

    // update local storage
    let profile ={}
    profile["username"] = name;
    profile["location"] = locationObject;
    // profile["locationActive"] = locationActive;
    profile["subscriptionActive"] = subscriptionActive;
    
    localStorage.setItem("user", JSON.stringify(profile))

}

function loadProfile(userData){
    document.querySelector(".profile-username").innerHTML=userData["username"];
    console.log(userData['location'])
    document.querySelector(".profile-location").innerHTML=userData["location"].country;
    // if (userData["locationActive"]== true){
    //     document.querySelector(".location-is-active").style.display = "block";
    // }
    // else{
    //     document.querySelector(".location-is-active").style.display = "none";
    // }
    if (userData["subscriptionActive"] == true){    
        document.querySelector(".subscription-is-active").style.display = "block";
    }
    else{
        document.querySelector(".subscription-is-active").style.display = "none";
    }
}


async function getRegions(){
    const response = await fetch(`http://localhost:4000/get_regions`);
    const data = await response.json();
    return data
}




async function getRegionNames(){
    const regionData = await getRegions();
    const regionDataArr = regionData.results;
    let regionNames = []
    for (let i=0; i<regionDataArr.length; i++){
        regionNames.push([regionDataArr[i].native_name, regionDataArr[i].iso_3166_1])
    }
    // console.log(regionNames)
    return regionNames
}




async function createRegionDropdown(){
    const countryNameList = await getRegionNames();

    const dropdownContainer = document.querySelector('#region');
    for (let i=0; i<countryNameList.length; i++){
        const name = countryNameList[i][0];
        const code = countryNameList[i][1];
        const newOption = document.createElement('option');
        newOption.textContent = name;
        newOption.value = name;
        newOption.id = code;
        dropdownContainer.appendChild(newOption);
    }
}