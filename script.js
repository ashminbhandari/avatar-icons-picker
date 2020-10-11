function avatarSelector () { 
  avatarOne = document.getElementById("avatar-icon-1");
  avatarTwo = document.getElementById("avatar-icon-2");
  avatarThree = document.getElementById("avatar-icon-3");
  if (avatarOne.style.visibility == "hidden") {
     avatarOne.style.visibility = "visible";
     avatarTwo.style.visibility = "visible";
     avatarThree.style.visibility = "visible";
  } else {
    avatarOne.style.visibility = "hidden";
    avatarTwo.style.visibility = "hidden";
    avatarThree.style.visibility = "hidden";
  }
}

function selectOne() {
  document.getElementById("selected-avatar").className="fa fa-user-circle";
}

function selectTwo() {
  document.getElementById("selected-avatar").className="fa fa-github";
}

function selectThree() {
  document.getElementById("selected-avatar").className="fa fa-twitter";
}
