gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
// Verificar scroll y cambio de color de fondo
const navbar = document.getElementById('nav');
window.addEventListener('scroll', () => {
  console.log(navbar.style.backgroundColor);
  var h4all = document.querySelectorAll("#nav a");
  // Si el color del nav es negro, le añadimos una clase -white-text a los elementos 'a' dentro de nav>.nav-links
  h4all.forEach(function (elem) {
    if (navbar.style.backgroundColor == "rgb(0, 0, 0)") {
      elem.classList.add('white-text');
    } else {
      elem.classList.remove('white-text');
    }
  });

  // Tambien alteramos el z-index del cursor de 99 a 

});





var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    //crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "pink";
    crsr.style.fillOpacity = "0"; // Relleno transparente
    crsr.style.stroke = "#ac36fa"; // Color del borde inicial
    crsr.style.strokeWidth = "4px"; // Grosor del trazo
    crsr.style.strokeDasharray = "4500"; // Define el patrón de trazo
    crsr.style.strokeLinecap = "round"; // Suaviza las esquinas del borde
    crsr.style.opacity = "0.6"; // Ajusta la opacidad
    crsr.style.filter = "drop-shadow(0 0 5px white)"; // Aplica un resplandor suave

  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #fffefee8";
    crsr.style.backgroundColor = "#fffefee8";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

document.querySelectorAll(".box01").forEach((box) => {
  box.addEventListener('mousemove', (e) => {
      let x = e.pageX - box.offsetLeft;
      let y = e.pageY - box.offsetTop;

      document.querySelectorAll("span").forEach((span) => {
          span.style.left = x + 'px';
          span.style.top = y + 'px';
      })
  })
})


gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

