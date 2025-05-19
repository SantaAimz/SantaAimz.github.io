$(document).ready(function() {
    let images = $(".slider-inner img");
    let index = 0;


    function changeImage() {
        let currentImg = images.eq(index);
        let nextIndex = (index + 1) % images.length;
        let nextImg = images.eq(nextIndex);


        images.css("opacity", "0");


        nextImg.css("opacity", "1");


        index = nextIndex;
    }


    images.css("opacity", "0");
    images.eq(0).css("opacity", "1");


    setInterval(changeImage, 4000);
});


function showTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-buttons button').forEach(btn => {
      btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');
  }

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
    }