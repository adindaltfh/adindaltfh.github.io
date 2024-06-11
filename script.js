// Transisi gambar beranda

document.addEventListener("DOMContentLoaded", function() {
    let images = [
        "fotosaya.png",
        "fotosaya2.png"
    ];

    let currentIndex = 0;
    let imageElements = document.querySelectorAll(".gambar img");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;

        // Sembunyikan semua gambar
        imageElements.forEach(image => {
            image.classList.add("hidden");
        });

        // Tampilkan gambar yang baru
        imageElements[currentIndex].classList.remove("hidden");
    }

    setInterval(changeImage, 2000);
} );

// Transisi teks beranda
document.addEventListener("DOMContentLoaded", function() {
    let spans = document.querySelectorAll(".text .nama span");
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = "translateY(0)";
        }, 100 * index);
    });
});

// Dropdown
    document.addEventListener("DOMContentLoaded", function () {
        var dropdownItems = document.querySelectorAll('.dropdown');
    
        dropdownItems.forEach(function (item) {
            item.addEventListener('click', function (event) {
                event.stopPropagation();
                item.querySelector('.dropdown-content').classList.toggle('active');
            });
        });
    
            document.addEventListener('click', function () {
            dropdownItems.forEach(function (item) {
                item.querySelector('.dropdown-content').classList.remove('active');
            });
        });
    });

document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".navbar-menu li.nav-item.dropdown");
    dropdown.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });
});

// Animasi scroll
function scrollPage() {
    var konten = document.getElementById("tentang-section");
    konten.scrollIntoView();
}

//Buat Carousel
function createCarousel(containerId, sliderId) {
    let currentIndex = 0;
    const slides = document.getElementById(sliderId);

    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 38}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);

    return {
        nextSlide,
        prevSlide,
    };
}

const carousel1 = createCarousel('slide-container1', 'imageSlider1');
const carousel2 = createCarousel('slide-container2', 'imageSlider2');
const carousel3 = createCarousel('slide-container3', 'imageSlider3');
const carousel4 = createCarousel('slide-container4', 'imageSlider4');
const carousel5 = createCarousel('slide-container5', 'imageSlider5');
const carousel6 = createCarousel('slide-container6', 'imageSlider6');

//Transisi Form
function handleFocus(labelId) {
    let label = document.getElementById(labelId);
    label.style.top = '5px';
    label.style.fontSize = '15px';
    label.style.color = '#c5164b';
}

function handleBlur(inputId, labelId) {
    let input = document.getElementById(inputId);
    let label = document.getElementById(labelId);  
    if (input.value === "") {
        label.style.top = '70%';
        label.style.fontSize = '15px';
        label.style.color = '#de7d9a';

        let pesanElement = document.getElementById('label-pesan');
        pesanElement.style.top = '20%'; 
    }
}

//Validasi form
const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");

  if (this.id === "nama") {
    document.getElementById("namaValidasiError").classList.add("hide");
  } else if (this.id === "nomor") {
    document.getElementById("nomorValidasiError").classList.add("hide");
  } else if (this.id === "email") {
    document.getElementById("emailValidasiError").classList.add("hide");
  } else if (this.id === "subjek") {
    document.getElementById("subjekValidasiError").classList.add("hide");
  }
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");

    if (this.id === "nama") {
      document.getElementById("namaValidasiError").classList.remove("hide");
    } else if (this.id === "nomor") {
      document.getElementById("nomorValidasiError").classList.remove("hide");
    } else if (this.id === "email") {
        document.getElementById("emailValidasiError").classList.remove("hide");
    } else if (this.id === "subjek") {
        document.getElementById("subjekValidasiError").classList.remove("hide");
    }
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

//Submit form

$(document).ready(function() {
    $('#myForm').on('submit', function(e) {
        e.preventDefault();
        checkForm();
    });
});

function checkForm() {
    var isValid = true;

    var namaValue = document.getElementById("nama").value;
    var nomorValue = document.getElementById("nomor").value;
    var emailValue = document.getElementById("email").value;
    var subjekValue = document.getElementById("subjek").value;

    if (namaValue === "") {
        isValid = false;
        document.getElementById("namaValidasiError").classList.remove("hide");
    } else {
        document.getElementById("namaValidasiError").classList.add("hide");
    }

    if (nomorValue === "") {
        isValid = false;
        document.getElementById("nomorValidasiError").classList.remove("hide");
    } else {
        document.getElementById("nomorValidasiError").classList.add("hide");
    }

    if (emailValue === "") {
        isValid = false;
        document.getElementById("emailValidasiError").classList.remove("hide");
    } else {
        document.getElementById("emailValidasiError").classList.add("hide");
    }

    if (subjekValue === "") {
        isValid = false;
        document.getElementById("subjekValidasiError").classList.remove("hide");
    } else {
        document.getElementById("subjekValidasiError").classList.add("hide");
    }

    if (!isValid) {
        alert("Mohon isi semua kolom yang diperlukan.");
    } else {
        contoh(); 
    }
    return isValid;
}

function contoh() {
    swal({
        title: "Pesan Terkirim!",
        text: "Terima kasih sudah menghubungi melalui form ini",
        icon: "success",
        button: true
    }).then((value) => {
        if (value) {
            window.location.href = "kontak.html";
        }
    });
}

//Overlay pengalaman
function showOverlay(element) {
    const overlay = element.querySelector('.overlay');
    const caption = overlay.querySelector('.caption');
    caption.style.maxWidth = `${element.offsetWidth * 0.8}px`;
    overlay.style.opacity = 1;
}

function hideOverlay(element) {
    const overlay = element.querySelector('.overlay');
    overlay.style.opacity = 0;
}