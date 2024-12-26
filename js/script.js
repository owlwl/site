// 스와이퍼

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });




//tab
// function openBoard(evt, boardName) {
// 	  var i, x, tablinks;
// 	  x = document.getElementsByClassName("board");
// 	  for (i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	  }
// 	  tablinks = document.getElementsByClassName("tablink");
// 	  for (i = 0; i < x.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" opacity", "");
// 	  }
// 	  document.getElementById(boardName).style.display = "block";
// 	  evt.currentTarget.className += " opacity";

// }


// 탭관련 새로 짠것 
function openTab(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

document.querySelector('.tablinks').click();






// 탭부분 이미지 호버시 장바구니 하트 
document.addEventListener("DOMContentLoaded", function() {
	const imageItems = document.querySelectorAll('.image-item');
  
	imageItems.forEach(item => {
	  item.addEventListener('click', function(e) {
		e.preventDefault();
		item.classList.toggle('clicked');
	  });
	});
  });