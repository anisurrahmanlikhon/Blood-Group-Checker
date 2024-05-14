function checkBloodGroup() {
  var antigenA = document.getElementById("antigenA").value;
  var antigenB = document.getElementById("antigenB").value;
  var antigenD = document.getElementById("antigenD").value;
  var bloodGroup = "";

  if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "AB+ (পজিটিভ)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "B+ (পজিটিভ)";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "A+ (পজিটিভ)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত অধঃক্ষেপিত") {
    bloodGroup = "O+ (পজিটিভ)";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "AB- (নেগেটিভ)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত অধঃক্ষেপিত" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "B- (নেগেটিভ)";
  } else if (antigenA === "রক্ত অধঃক্ষেপিত" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "A- (নেগেটিভ)";
  } else if (antigenA === "রক্ত স্বাভাবিক" && antigenB === "রক্ত স্বাভাবিক" && antigenD === "রক্ত স্বাভাবিক") {
    bloodGroup = "O- (নেগেটিভ)";
  }

  document.getElementById("result").innerHTML = "<button class='blood-group-button'>" + bloodGroup + "</button>";
}
