function checkBloodGroup() {
  var antigenA = document.getElementById("antigenA").value;
  var antigenB = document.getElementById("antigenB").value;
  var antigenD = document.getElementById("antigenD").value;
  var bloodGroup = "";

  if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "AB(+ve)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "B(+ve)";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "A(+ve)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "O(+ve)";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "AB(-Neg)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "B(-Neg)";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "A(-Neg)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "O(-Neg)";
  }

  document.getElementById("result").innerHTML = "<button class='blood-group-button'>" + bloodGroup + "</button>";
}
