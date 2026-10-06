const metroStation = [
    "Rithal",
    "Rohini west",
    "Netaji subhash Palace",
    "Shashtri Nagar",
    "Kasheme Gate",
    "New delhi",
    "Rajiv Chowk",
    "patel chowk",
    "cantral secratarist",
    "lok kalyan marg",
    "AIMS",
    "green park",
    "malviya nagar",
    "saket",
    "qutub minar",
    "chatrapur",
    "sultanpur",
    "ghitroni",
    "arjan garh",
    "guru dronacharya",
    "sikanderpur",
    "mg road",
    "iffco chowk",
];


document.addEventListener("DOMContentLoaded", function () {

    const SourceSelect = document.getElementById("source");
    const DestinationSelect = document.getElementById("destination");

    metroStation.forEach(stations => {

        SourceSelect.innerHTML +=
        `<option value="${stations}">
            ${stations}
        </option>`;

        DestinationSelect.innerHTML +=
        `<option value="${stations}">
            ${stations}
        </option>`;

    });

});





function swapStations(){

    const source = document.getElementById("source");
    const destination = document.getElementById("destination");


    let temp = source.value;

    source.value = destination.value;

    destination.value = temp;

}






function findRoute(){

    const SourceSelect = document.getElementById("source");
    const DestinationSelect = document.getElementById("destination");


    let Source = SourceSelect.value;

    let Destination = DestinationSelect.value;



    if(Source === "" || Destination === ""){

        alert("Please select both stations");

        return;

    }



    if(Source === Destination){

        alert("Source and destination cannot be same");

        return;

    }



    let sourceindex = metroStation.indexOf(Source);

    let destinationindex = metroStation.indexOf(Destination);



    let route = [];



    if(sourceindex < destinationindex){

        for(let i = sourceindex; i <= destinationindex; i++){

            route.push(metroStation[i]);

        }

    }

    else{

        for(let i = sourceindex; i >= destinationindex; i--){

            route.push(metroStation[i]);

        }

    }




    let totalstations = route.length - 1;


    let fare;


    if(totalstations <= 5){

        fare = 20;

    }

    else if(totalstations <= 10){

        fare = 30;

    }

    else if(totalstations <= 15){

        fare = 40;

    }

    else{

        fare = 50;

    }




    let traveltime = totalstations * 2;



    displayResult(route,totalstations,fare,traveltime);

}







function displayResult(route,totalstations,fare,traveltime){


let html = `


<div class="ticket">


<h2>🚇 Journey Summary</h2>



<div class="summary">


<p>💰 <b>Estimated Fare:</b> ₹${fare}</p>


<p>🚉 <b>Total Stations:</b> ${totalstations}</p>


<p>⏱️ <b>Travel Time:</b> ${traveltime} Minutes</p>


<p>🔄 <b>Interchange:</b> 0</p>


</div>



<h3>Route Path</h3>



<div class="route">

`;





route.forEach((station,index)=>{


html += `


<div class="station">

🚉 ${station}

</div>


`;



if(index !== route.length-1){

html +=

`

<div class="arrow">

⬇️

</div>

`;

}


});





html += `

</div>

</div>

`;



document.getElementById("output").innerHTML = html;



}