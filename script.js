function addthis(param) {

  if (param == "ng") {
    document.getElementById("from").value = "Delhi";
    document.getElementById("to").value = "Goa"
  }
  else if (param == "bn") {
    document.getElementById("from").value = "Bangaluru";
    document.getElementById("to").value = "Delhi"
  }
  else if (param == "mg") {
    document.getElementById("from").value = "Mumbai";
    document.getElementById("to").value = "Goa"
  }
  else if (param == "nb") {
    document.getElementById("from").value = "Delhi";
    document.getElementById("to").value = "Bangaluru"
  }
  else if (param == "mb") {
    document.getElementById("from").value = "Mumbai";
    document.getElementById("to").value = "Bangaluru"
  }
  else if (param == "pn") {
    document.getElementById("from").value = "Pune";
    document.getElementById("to").value = "Delhi"
  }
  else if (param == "bm") {
    document.getElementById("from").value = "Bangaluru";
    document.getElementById("to").value = "Mumbai"
  }
  else if (param == "nk") {
    document.getElementById("from").value = "Delhi";
    document.getElementById("to").value = "Kolkata"
  }
  else if (param == "ml") {
    document.getElementById("from").value = "Mumbai";
    document.getElementById("to").value = "Indore"
  }
  else if (param == "ms") {
    document.getElementById("from").value = "Mumbai";
    document.getElementById("to").value = "Singapore"
  }

}



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
// initial date while load the page
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();
newdate = year + "-" + month + "-" + day;
console.log(newdate);
document.getElementById("date").value = newdate;






let airportskeys = Object.keys(airports);
function checkthis(tag) {
  document.getElementById("selection").innerHTML = "";
  let inputs = document.getElementById(tag).value;
  //   document.getElementById("inner").innerText=inputs;
  let elements = airportskeys.filter((element) => {
    if (element.indexOf(inputs) == 0) {
      //   console.log(element);
      return element;
    }
  })
  //   document.getElementById("inner").innerText=elements.length;
  for (let i = 0; i < elements.length; i++) {

    //  if( document.getElementById("round").checked){

    //   let inputtag=document.createElement("input");
    //   inputtag.setAttribute("type","date");
    //   inputtag.setAttribute("id","secondinput");
    //   inputtag.value=newdate;
    //   document.getElementById("depart").appendChild(inputtag);

    //  }



    console.log(document.getElementById("date").value);

    let optiontag = document.createElement("option");

    optiontag.innerText = elements[i].charAt(0).toUpperCase() + elements[i].slice(1, elements[i].length);
    optiontag.setAttribute("class", "optiontag1")

    // stylepart i don't know why but style part is not working on option tag

    optiontag.style.width = "300px";
    optiontag.style.backgroundColor = "red";
    document.getElementById("selection").appendChild(optiontag);
  }

}
let b = false;
function roundway() {
  if (document.getElementById("round").checked && b == false) {
    b = true;
    let spantag = document.createElement("span");
    spantag.innerText = "Return ";
    let inputtag = document.createElement("input");
    inputtag.setAttribute("type", "date");
    inputtag.setAttribute("id", "secondinput");
    inputtag.value = newdate;
    document.getElementById("depart").appendChild(spantag);
    document.getElementById("depart").appendChild(inputtag);
  }
  // document.getElementById("secondinput").style.backgroundColor="red";
  // document.getElementById("secondinput").style.color="red";

}
function oneway() {
  b = false;
  document.getElementById("secondinput").innerText = "";
}

function search2() {




  var x = document.getElementById("text").href;
  var y = x;
  //   x=x+"mumbai|goa";
  let fromhere1 = document.getElementById("from").value;
  fromhere1 = fromhere1.toLowerCase();

  let tohere = document.getElementById("to").value;
  tohere = tohere.toLowerCase();

  let thisdate = document.getElementById("date").value;
  x = x + fromhere1 + "|" + tohere + "|" + thisdate;
  if (document.getElementById("round").checked) {
    x += "|" + document.getElementById("secondinput").value;
    console.log(document.getElementById("secondinput").value);
  }

  document.getElementById("text").href = x;
  console.log(x);


  //update the input value for next searching
  setInterval(() => {
    document.getElementById("text").href = y;
  }, 2000);
}