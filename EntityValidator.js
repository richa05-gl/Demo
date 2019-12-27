
var entityNames = [
    {name : "RESORT_HOTEL"},
    {name : "NOT_LODGING"}
    ];
  
  
/*
var entity = {
	RESORT_HOTEL: {
		traveller: "anyTraveller",
		amenities:"largeSpace",
		food:"onSiteFood",
		roomType:"villa",
		plumbing:"plumbingY"
		},
	NOT_LODGING: {
		uniStudent: "student"
		publicLoding:"publicodgN"
		},
	HOTEL:{
		 rooms: "gt20",
		 traveller: "anyTraveller",
		 amenities:"prvKitchen",
		 food:"offSiteFood",
		 bookingDuration:"minOneNight",
		 sharing:"sharingN",
		 roomType:"anyRoomType"
	    },
	INN:{
		rooms: "lt20",
		restaurant:"restaurantY",
		traveller: "anyTraveller",
		food:"onSiteFood",
		sharing:"sharingN"
	    },
	GUEST_HOUSE:{
		rooms: "lt20",
		traveller: "anyTraveller",
		amenities:"anyAmenity",
		sharing:"sharingN",
	    }	
}


*/
    
var entity = {
    
    NOT_LODGING: {
		publicLoding:"publicodgN",
		},
	RESORT_HOTEL: {
		amenities:"largeSpace",
		food:"onSiteFood",
		},
	HOTEL:{
		 rooms: "gt20",		    
		 bookingDuration:"minOneNight",
	    },
	    	INN:{
		rooms: "lt20",
		restaurant:"restaurantY",
	    },
	CAMPING_CABINS:{
		plumbing: "plumbingY",
		roomType:"cabins"
	    }	
}

var entityOpt = {
    	NOT_LODGING: {
		uniStudent: "student",
		multipurpose:"multipurposeY",
		},
	RESORT_HOTEL: {
		area:"gt500",
		},

	HOTEL:{
		amenities:"frontDesk",
		amenities:"roomService",
	    },

	CAMPING_CABINS:{
		roomType:"cabins",
	    }	,
	    CAMPING_CABINS:{
		roomType:"bunglow",
	    }	,
	    CAMPING_CABINS:{
		roomType:"mobileHome",
	    }	
}
function validateEntity() {
    var result = "";
    var selected = [];
    var tableEntity = document.getElementById("tableEntity");
    var chks = tableEntity.getElementsByTagName("input");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }
    console.log(selected);
    
    //helper function
    function traverse(obj) {	
	output.innerHTML= "";
    for (var prop in obj) {
        if (typeof obj[prop] == "object") {
	    if((Object.values(obj[prop])).every(element => selected.includes(element))){
	     result = prop;
	     output.innerHTML= result;	
	     return true;
	    }
       }   
    }
}
 traverse(entity);
 if (!traverse(entity)){
     traverse(entityOpt);
     }
 document.getElementById('entityResult').scrollIntoView();
 }
 
 function displayEntity(){
     var entities = [];
     var option;
     
     // created drop down
     for (var prop in entity) {
	    if (typeof entity[prop] == "object") {
		entities.push(prop)
		}
	 }
	 console.log(entities)
	  var select = document.getElementById('dd1');  
	  for (i = 0; i < entities.length; i++) {
	         option = document.createElement('option');
	      option.text = entities[i];
	      select.add(option);   
  }
  
  // on selecting the value from dropdown
  select.onchange = function() {
       for (var prop in entity) {
        if (typeof entity[prop] == "object") {
		if(select.value === prop){
		var filteredInputs = [];
		filteredInputs = Object.values(entity[prop])
      console.log(filteredInputs);
	
	var input = document.getElementsByTagName('input');
	console.log(input.length);
	for(var i = 0 ; i<filteredInputs.length;i++){
	    for(var j= 0 ;j < input.length; j++){
	    if(filteredInputs[i] === input[j].value){
		// document.getElementById(input[j].value+"_label").style.color="blue"
		document.getElementById(input[j].value+"_label").classList.add("radio")
		    break;
		}
	    
	    }
	}
	
	}
	
       }   
    }
    
}

}
// 

