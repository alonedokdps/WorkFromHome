let backbtn = document.getElementById("backBtn");

let nextbtn = document.getElementById("nextBtn");
let slider = document.getElementById("slider");
let desc = document.getElementById("desc");

let arrImg = new Array(
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg"
);
let contentArr = new Array(
  "Product details Can be used anywhere in your home, even in damp areas like the bathroom and under covered balconies. The plastic feet protect the surface against scratching",
  "Een kledingrek in de slaapkamer is een leuke manier om je mooiste kledingstuk...",
  "Après la tendance forte de l'eucalyptus, l'herbe de la pampa s'impose peu à peu comme le nouveau must have végétal dans un intérieur déco",
  "PINTEREST"
);
let i = 0;

nextbtn.onclick = function () {
  if (i < 3) {
    slider.src = arrImg[i + 1];
    desc.innerHTML = contentArr[i + 1];
    i++;
    console.log(i);
  } else {
    return;
  }
};
backbtn.onclick = function () {
  slider.src = arrImg[i - 1];
  desc.innerHTML = contentArr[i - 1];
  if (i == 1) {
    return;
  }
  i--;
};
