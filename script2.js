let airports = {
    agartala: "IXA", ahmedabad: "AMD", aizawl: "AJL", aurangabad: "IXU", amritsar: "ATQ", bagdogra: "IXB",
    bengaluru: "BLR", bhubaneswar: "BBI", bhopal: "BHO", chandigarh: "IXC", chennai: "MAA",
    coimbatore: "CJB", dehradun: "DED", delhi: "DEL", dibrugarh: "DIB", dimapur: "DMU", durgapur: "RDP",
    gaya: "GAY", goa: "GOI", gorakhpur: "GOP", guwahati: "GAU", hubli: "HBX", hyderabad: "HYD",
    imphal: "IMF", indore: "IDR", jabalpur: "JLR", jaipur: "JAI", jammu: "IXJ", jodhpur: "JDH", jorhat: "JRH",
    kannur: "CNN", kurnool: "KJB", kochi: "COK", kolhapur: "KLH", kolkata: "CCU", kozhikode: "CCJ", lucknow: "LKO",
    madurai: "IXM", mangaluru: "IXE", mumbai: "BOM", mysuru: "MYQ", nagpur: "NAG", patna: "PAT", prayagraj: "IXD",
    pune: "PNQ", portblair: "IXZ", paipur: "RPR",
    surat: "STV", thiruvananthapuram: "TRV", tiruchirappalli: "TRZ", tirupati: "TIR", udaipur: "UDR",
    vadodara: "BDQ", varanasi: "VNS", vijayawada: "VGA", visakhapatnam: "VTZ"

}
let airportskeys = Object.keys(airports);

// let imageobject={

// }





var a = location.search.substring(1);
var x = a.split("|");

//add value's in second input tag which is sent by first script
console.log(x[0], x[1], x[2]);
document.getElementById("firstinput").value = x[0];
document.getElementById("secondinput").value = x[1];
document.getElementById("firstdate").value = x[2];




console.log(x[0], x[1], x[2], x[3], "ajay1111111");
let starthere = x[0];
let endhere = x[1];
let thisdate = x[2];

starthere = airports[starthere];
endhere = airports[endhere];
var b = 0;



// here we are checking is round trip or not and also divide the secon dpage using grid 

if (x[3] == undefined) {
    console.log("inside condition");
    console.log(x[3], "asdfghjkasdfghjk");
    // document.getElementById("sorted").style.gridArea="2/1/8/4";
    document.getElementById("resultdiv1").style.gridArea = "1/1/7/12";
    // document.getElementById("resultdiv2").style.gridArea="2/7/8/15";
    document.getElementById("resultdiv2").style.display = "none";
    document.getElementById("pricebased").style.display = "none";

}
else {
    console.log("ajayteli300000000001");
    document.getElementById("resultdiv1").style.gridArea = "1/1/7/6";
    document.getElementById("resultdiv2").style.gridArea = "1/6/7/15";


    // let divtag = document.createElement("div");
    // let btnfirst = document.createElement("button");
    // btnfirst.className = "btn";
    // btnfirst.innerText = " 6:00 AM - 11:50 AM"
    // btnfirst.onclick = timebased(6, 12);
    // divtag.appendChild(btnfirst);
    // document.getElementById("sorted").appendChild(divtag);

}






// second page date hiding and show 

let a2 = 0;
document.getElementById("second_page_return_date").style.visibility = "hidden";
function round_trip() {

    console.log("99999999999999999999");
    document.getElementById("second_page_date_input_tag").value = x[3];
    document.getElementById("second_page_return_date").style.visibility = "visible";
}

function hide_date_of_secondpage() {
    console.log("111111111111111111111111111111111");
    document.getElementById("second_page_return_date").style.visibility = "hidden";
}









setTimeout(() => {

    console.log("ajay2");



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b88fdc70bamsh054f1d205ea6b83p16f9f0jsn4fdc5d0d49a3',
            'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
        }
    }

    //  let a=  await fetch('https://flight-fare-search.p.rapidapi.com/v2/flight/?from=BOM&to=DEL&date=2022-10-10&adult=1', options);

    let check = new Promise(async (response, rejected) => {
        try {
            // if( x[3]==undefined){
            //     console.log("inside condition");
            //     console.log(x[3],"asdfghjkasdfghjk");
            //     // document.getElementById("sorted").style.gridArea="2/1/8/4";
            //     // document.getElementById("resultdiv1").style.gridArea="2/4/7/15";
            //     // document.getElementById("resultdiv2").style.gridArea="2/7/8/15";

            //    }
            //    else{
            //     console.log("ajayteli300000000001");
            //     document.getElementById("resultdiv1").style.gridArea="2/4/7/6";
            //     document.getElementById("resultdiv2").style.gridArea="2/7/7/15";
            //     // document.getElementById("resultdiv2").innerText=" rsdfghujikorshdlsdfjdgsfjsfjsjfvdhtfeydhkesdjf Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpor"+


            //     console.log("inside condition22");
            //     console.log(x[3]);
            //     // document.getElementById("resultdiv1").style.gridArea="2/1/7/10";
            //    }
            console.log("this is ajay");
            let a = await fetch('https://flight-fare-search.p.rapidapi.com/v2/flight/?from=' + starthere + '&to=' + endhere + '&date=' + x[2] + '&adult=1', options);
            b = await a.json();
            console.log("this is ajay2");
            console.log(b);

            let c = b.results;




            console.log(c[0]);
            for (let i = 0; i < c.length; i++) {

                let obj = c[i];

                let divtag = document.createElement("div");
                divtag.className = "ajay999";

                let flightspantag = document.createElement("span");


                let imagetag1 = document.createElement("img");
                imagetag1.className = "imagetag1";
                switch (obj.flight_name) {
                    case "Vistara":
                        imagetag1.src = "vistaraicon.png";
                        break;
                    case "Air India":
                        imagetag1.src = "airindiaicon.png";
                        break;
                    case "Flexflight":
                        imagetag1.src = "flexflight.png";
                        break;
                    case "Spicejet":
                        imagetag1.src = "spicejeticon.png";
                        break;
                    case "Go First":
                        imagetag1.src = "gofirsticon.png";
                        break;
                    case "Indigo":
                        imagetag1.src = "indigoicon.png";
                        break;
                    default:
                        console.log("no flight image found");
                }
                flightspantag.appendChild(imagetag1);
                // let flightcode = document.createElement("span");
                // flightcode.className = "ajay1111";
                // flightcode.innerText = " " + obj.flight_code;
                // flightspantag.className = "ajay1000";
                // flightspantag.innerText = obj.flight_name;
                // flightspantag.appendChild(flightcode);
                // divtag.appendChild(flightspantag);

                let flightcode = document.createElement("span");
                let fligthname2 = document.createElement("span");
                fligthname2.innerText = obj.flight_name;
                flightspantag.appendChild(fligthname2);

                flightcode.className = "ajay1111";
                flightcode.innerText = " " + obj.flight_code;
                flightspantag.className = "ajay10000";
                // flightspantag.innerText = obj.flight_name;
                flightspantag.appendChild(flightcode);
                divtag.appendChild(flightspantag);


                //departure
                let departurespantag = document.createElement("span");


                let departureAirportname = document.createElement("span");
                departureAirportname.className = "ajay1111";
                departureAirportname.innerText = " " + obj.departureAirport.city;
                departurespantag.className = "ajay1000";
                let departure = obj.departureAirport.time;
                departurespantag.innerText = departure.slice(11, 16);
                departurespantag.appendChild(departureAirportname);
                divtag.appendChild(departurespantag);



                //timing
                let timespantag = document.createElement("span");
                let totaltime = document.createElement("span");
                totaltime.className = "ajay1111";
                totaltime.innerText = " " + "Duration";
                timespantag.className = "ajay1000";
                let a = obj.duration.text;
                timespantag.innerText = a;
                timespantag.appendChild(totaltime);
                divtag.appendChild(timespantag);

                //arival
                let arrivalpantag = document.createElement("span");
                let arrivalcity = document.createElement("span");
                arrivalcity.className = "ajay1111";
                arrivalcity.innerText = " " + obj.arrivalAirport.city;
                arrivalpantag.className = "arrivaltag";
                let arrivalairportname = obj.arrivalAirport.time;
                arrivalpantag.innerText = " " + arrivalairportname.slice(11, 16);
                arrivalpantag.appendChild(arrivalcity);
                divtag.appendChild(arrivalpantag);


                //pricing
                let pricespantag = document.createElement("span");
                let cost = document.createElement("span");
                cost.className = "ajay1111";
                cost.innerText = " " + "Price";
                pricespantag.className = "pricingtag";
                let pricing = (obj.totals.total) * 80;
                pricing = Math.floor(pricing);
                pricespantag.innerText = pricing;
                pricespantag.appendChild(cost);
                divtag.appendChild(pricespantag);

                //booknow button
                let btnspantag = document.createElement("button");
                btnspantag.className = "booknowbtn";
                btnspantag.innerText = "BOOK";
                divtag.appendChild(btnspantag);



                document.getElementById("resultdiv1").appendChild(divtag);
            }

        } catch (error) {
            alert("sorry we are not able to fetch the data at this moment because of our API is not responding at this time !");

        }
    })

    check.then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })



}, 1000);


if (x[3] != null || x[3] != undefined) {


    console.log("im in second1");

    setTimeout(() => {

        console.log("ajay2");



        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b88fdc70bamsh054f1d205ea6b83p16f9f0jsn4fdc5d0d49a3',
                'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
            }
        }

        //  let a=  await fetch('https://flight-fare-search.p.rapidapi.com/v2/flight/?from=BOM&to=DEL&date=2022-10-10&adult=1', options);

        let check = new Promise(async (response, rejected) => {
            try {
                let a = await fetch('https://flight-fare-search.p.rapidapi.com/v2/flight/?from=' + endhere + '&to=' + starthere + '&date=' + x[3] + '&adult=1', options);
                b = await a.json();
                console.log("im in second2");
                console.log(b);

                let c = b.results;

                console.log(c[0]);
                for (let i = 0; i < c.length; i++) {

                    let obj = c[i];
                    //  document.getElementById("resultdiv").style.gridArea=" 1/1/8/15";
                    let divtag = document.createElement("div");
                    divtag.className = "ajay999";

                    let flightspantag = document.createElement("span");
                    let imagetag1 = document.createElement("img");
                    imagetag1.className = "imagetag1";
                    switch (obj.flight_name) {
                        case "Vistara":
                            imagetag1.src = "vistaraicon.png";
                            break;
                        case "Air India":
                            imagetag1.src = "airindiaicon.png";
                            break;
                        case "Flexflight":
                            imagetag1.src = "flexflight.png";
                            break;
                        case "Spicejet":
                            imagetag1.src = "spicejeticon.png";
                            break;
                        case "Go First":
                            imagetag1.src = "gofirsticon.png";
                            break;
                        case "Indigo":
                            imagetag1.src = "indigoicon.png";
                            break;
                        default:
                            console.log("no flight image found");
                    }
                    flightspantag.appendChild(imagetag1);
                    // let flightcode = document.createElement("span");
                    // flightcode.className = "ajay1111";
                    // flightcode.innerText = " " + obj.flight_code;
                    // flightspantag.className = "ajay1000";
                    // flightspantag.innerText = obj.flight_name;
                    // flightspantag.appendChild(flightcode);
                    // divtag.appendChild(flightspantag);

                    // let flightcode = document.createElement("span");
                    let fligthname2 = document.createElement("span");
                    fligthname2.innerText = obj.flight_name;
                    flightspantag.appendChild(fligthname2);

                    let flightcode = document.createElement("span");
                    flightcode.className = "ajay1111";
                    flightcode.innerText = " " + obj.flight_code;
                    flightspantag.className = "ajay10000";
                    // flightspantag.innerText = obj.flight_name;
                    flightspantag.appendChild(flightcode);
                    divtag.appendChild(flightspantag);





                    //departure
                    let departurespantag = document.createElement("span");

                    //imgae tag
                    let departureimagetag = document.createElement("img");
                    // departureimagetag.src=""
                    let departureAirportname = document.createElement("span");
                    departureAirportname.className = "ajay1111";
                    departureAirportname.innerText = " " + obj.departureAirport.city;
                    departurespantag.className = "ajay1000";
                    let departure = obj.departureAirport.time;
                    departurespantag.innerText = departure.slice(11, 16);
                    departurespantag.appendChild(departureAirportname);
                    divtag.appendChild(departurespantag);



                    //timing
                    let timespantag = document.createElement("span");
                    let totaltime = document.createElement("span");
                    totaltime.className = "ajay1111";
                    totaltime.innerText = " " + "Duration";
                    timespantag.className = "ajay1000";
                    let a = obj.duration.text;
                    timespantag.innerText = a;
                    timespantag.appendChild(totaltime);
                    divtag.appendChild(timespantag);

                    //arival
                    let arrivalpantag = document.createElement("span");
                    let arrivalcity = document.createElement("span");
                    arrivalcity.className = "ajay1111";
                    arrivalcity.innerText = " " + obj.arrivalAirport.city;
                    arrivalpantag.className = "arrivaltag";
                    let arrivalairportname = obj.arrivalAirport.time;
                    arrivalpantag.innerText = " " + arrivalairportname.slice(11, 16);
                    arrivalpantag.appendChild(arrivalcity);
                    divtag.appendChild(arrivalpantag);


                    //pricing
                    let pricespantag = document.createElement("span");
                    let cost = document.createElement("span");
                    cost.className = "ajay1111";
                    cost.innerText = " " + "Price";
                    pricespantag.className = "pricingtag";
                    let pricing = (obj.totals.total) * 80;
                    pricing = Math.floor(pricing);
                    pricespantag.innerText = pricing;
                    pricespantag.appendChild(cost);
                    divtag.appendChild(pricespantag);

                    //booknow buttton
                    let btnspantag = document.createElement("button");
                    btnspantag.className = "booknowbtn";
                    btnspantag.innerText = "BOOK";
                    // btnspantag.setAttribute("onclick", "addtickets()");
                    divtag.appendChild(btnspantag);

                    // btnspantag.value = [obj.flight_code, obj.flight_name, obj.flight_code, obj.departureAirport.city
                    // , obj.duration.text, obj.arrivalAirport.city, obj.arrivalAirport.time, pricing];

                    document.getElementById("resultdiv2").appendChild(divtag);
                    console.log("im in second3");
                }

            } catch (error) {
                rejected(error);
            }
        })

        check.then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })



    }, 0000);
}

// function addtickets() {

//     let firsttickettag = document.createElement("span");
//     firsttickettag.className = "firsttickettag";

//     let second_page_pricetag = document.createElement("span");
//     let datas = btnspantag.value[0];

//     let codetag=

// }


function timebased(start, last, tag) {
    console.log("jjjjjjjjjjj");
    setTimeout(() => {
        let d = b.results;
        console.log(b.results);
        console.log(d);
        document.getElementById(tag).innerHTML = "";
        for (let i = 0; i < d.length; i++) {
            let obj2 = d[i];
            let obj3 = obj2.departureAirport.time;
            obj3 = obj3.slice(11, 13);
            console.log(obj3);
            if (obj3 >= start && obj3 < last) {
                let divtag = document.createElement("div");
                divtag.className = "ajay999";

                let flightspantag = document.createElement("span");
                let imagetag1 = document.createElement("img");
                imagetag1.className = "imagetag1";
                switch (obj2.flight_name) {
                    case "Vistara":
                        imagetag1.src = "vistaraicon.png";
                        break;
                    case "Air India":
                        imagetag1.src = "airindiaicon.png";
                        break;
                    case "Flexflight":
                        imagetag1.src = "flexflight.png";
                        break;
                    case "Spicejet":
                        imagetag1.src = "spicejeticon.png";
                        break;
                    case "Go First":
                        imagetag1.src = "gofirsticon.png";
                        break;
                    case "Indigo":
                        imagetag1.src = "indigoicon.png";
                        break;
                    default:
                        console.log("no flight image found");
                }
                flightspantag.appendChild(imagetag1);

                let fligthname2 = document.createElement("span");
                fligthname2.innerText = obj2.flight_name;
                flightspantag.appendChild(fligthname2);

                let flightcode = document.createElement("span");
                flightcode.className = "ajay1111";
                flightcode.innerText = " " + obj2.flight_code;
                flightspantag.className = "ajay10000";
                // flightspantag.innerText = obj.flight_name;
                flightspantag.appendChild(flightcode);
                divtag.appendChild(flightspantag);





                //departure
                let departurespantag = document.createElement("span");

                //imgae tag
                let departureimagetag = document.createElement("img");
                // departureimagetag.src=""
                let departureAirportname = document.createElement("span");
                departureAirportname.className = "ajay1111";
                departureAirportname.innerText = " " + obj2.departureAirport.city;
                departurespantag.className = "ajay1000";
                let departure = obj2.departureAirport.time;
                departurespantag.innerText = departure.slice(11, 16);
                departurespantag.appendChild(departureAirportname);
                divtag.appendChild(departurespantag);



                //timing
                let timespantag = document.createElement("span");
                let totaltime = document.createElement("span");
                totaltime.className = "ajay1111";
                totaltime.innerText = " " + "Duration";
                timespantag.className = "ajay1000";
                let a = obj2.duration.text;
                timespantag.innerText = a;
                timespantag.appendChild(totaltime);
                divtag.appendChild(timespantag);

                //arival
                let arrivalpantag = document.createElement("span");
                let arrivalcity = document.createElement("span");
                arrivalcity.className = "ajay1111";
                arrivalcity.innerText = " " + obj2.arrivalAirport.city;
                arrivalpantag.className = "arrivaltag";
                let arrivalairportname = obj2.arrivalAirport.time;
                arrivalpantag.innerText = " " + arrivalairportname.slice(11, 16);
                arrivalpantag.appendChild(arrivalcity);
                divtag.appendChild(arrivalpantag);


                //pricing
                let pricespantag = document.createElement("span");
                let cost = document.createElement("span");
                cost.className = "ajay1111";
                cost.innerText = " " + "Price";
                pricespantag.className = "pricingtag";
                let pricing = (obj2.totals.total) * 80;
                pricing = Math.floor(pricing);
                pricespantag.innerText = pricing;
                pricespantag.appendChild(cost);
                divtag.appendChild(pricespantag);

                //booknow buttton
                let btnspantag = document.createElement("button");
                btnspantag.className = "booknowbtn";
                btnspantag.innerText = "BOOK";
                // btnspantag.setAttribute("onclick", "addtickets()");
                divtag.appendChild(btnspantag);

                // btnspantag.value = [obj.flight_code, obj.flight_name, obj.flight_code, obj.departureAirport.city
                // , obj.duration.text, obj.arrivalAirport.city, obj.arrivalAirport.time, pricing];

                document.getElementById(tag).appendChild(divtag);

                console.log("im in second3");
            }

        }

    }, 1000);

}






