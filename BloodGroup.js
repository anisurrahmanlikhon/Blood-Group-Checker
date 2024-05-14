function checkBloodGroup() {
  var antigenA = document.getElementById("antigenA").value;
  var antigenB = document.getElementById("antigenB").value;
  var antigenD = document.getElementById("antigenD").value;
  var bloodGroup = "";

  if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "AB+";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "B+";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "A+";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "O+";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "AB-";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "B-";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "A-";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "O-";
  }

  document.getElementById("result").innerHTML = "<button class='blood-group-button'>" + bloodGroup + "</button>";
}


function checkBloodGroup() {
  var antigenA = document.getElementById("antigenA").value;
  var antigenB = document.getElementById("antigenB").value;
  var antigenD = document.getElementById("antigenD").value;
  var bloodGroup = "";

  if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "AB+";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "B+";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "A+";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "O+";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "AB-";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "B-";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "A-";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "O-";
  }

  document.getElementById("result").innerHTML = "<button class='blood-group-button'>" + bloodGroup + "</button>";
}
