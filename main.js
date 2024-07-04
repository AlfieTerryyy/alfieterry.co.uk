
/*doc display*/
function openModal(image) {
            var modal = document.getElementById("myModal");
            var modalImg = document.getElementById("img01");
            modal.style.display = "block";
            modalImg.src = image.src;
        }

        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
/*End Doc display*/

/*Nav*/
function openMulti() {
  if (document.querySelector(".selectWrapper").style.pointerEvents == "all") {
    document.querySelector(".selectWrapper").style.opacity = 0;
    document.querySelector(".selectWrapper").style.pointerEvents = "none";
    resetAllMenus();
  } else {
    document.querySelector(".selectWrapper").style.opacity = 1;
    document.querySelector(".selectWrapper").style.pointerEvents = "all";
  }
}
function nextMenu(e) {
  menuIndex = eval(event.target.parentNode.id.slice(-1));
  document.querySelectorAll(".multiSelect")[menuIndex].style.transform =
    "translateX(-100%)";
  // document.querySelectorAll(".multiSelect")[menuIndex].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  document.querySelectorAll(".multiSelect")[menuIndex].style.clipPath =
    "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  document.querySelectorAll(".multiSelect")[menuIndex + 1].style.transform =
    "translateX(0)";
  document.querySelectorAll(".multiSelect")[menuIndex + 1].style.clipPath =
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
}
function prevMenu(e) {
  menuIndex = eval(event.target.parentNode.id.slice(-1));
  document.querySelectorAll(".multiSelect")[menuIndex].style.transform =
    "translateX(100%)";
  document.querySelectorAll(".multiSelect")[menuIndex].style.clipPath =
    "polygon(0 0, 0 0, 0 100%, 0% 100%)";
  document.querySelectorAll(".multiSelect")[menuIndex - 1].style.transform =
    "translateX(0)";
  document.querySelectorAll(".multiSelect")[menuIndex - 1].style.clipPath =
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
}
function resetAllMenus() {
  setTimeout(function () {
    var x = document.getElementsByClassName("multiSelect");
    var i;
    for (i = 1; i < x.length; i++) {
      x[i].style.transform = "translateX(100%)";
      x[i].style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
    }
    document.querySelectorAll(".multiSelect")[0].style.transform =
      "translateX(0)";
    document.querySelectorAll(".multiSelect")[0].style.clipPath =
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  }, 300);
}

/*End Nav*/

/*Nav2*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/*End Nav2*/

/* somthings copilot said i should add*/

$(window).on('scroll', function () {
  if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
  }
});

//copilot said i should add end 

