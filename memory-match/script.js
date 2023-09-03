const section_wrapper = document.getElementById("section-wrapper");

let url = "./src/img/pic-";
let arr1 = [
  [`${url}1.png`, 0],
  [`${url}2.png`, 0],
  [`${url}3.png`, 0],
  [`${url}4.png`, 0],
  [`${url}5.png`, 0],
  [`${url}6.png`, 0],
  [`${url}7.png`, 0],
  [`${url}8.png`, 0],
];

let arr2 = [];
for (let i = 0; i < arr1.length * 2; i++) {
  let randomNumber = Math.floor(Math.random() * arr1.length);
  arr1[randomNumber][1] = arr1[randomNumber][1] + 1;
  arr1[randomNumber][1] <= 2 ? arr2.push(arr1[randomNumber][0]) : i--;
}

for (let i = 0; i < arr2.length; i++) {
  section_wrapper.innerHTML += `
  <div class="card" id="card">
  <h1>?</h1>
    <img id="img-${i}" src=${arr2[i]} alt="img" />
  </div>
`;
}
let arr3 = [];
let arr4 = [];
document.querySelectorAll(".card").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("change");
    arr3.push(item.childNodes[3].src);
    if (arr3.length > 1 && arr3[0] != arr3[1]) {
      document.querySelectorAll(".card").forEach((item) => {
        setTimeout(() => {
          arr3 = [];
          item.classList.remove("change");
        }, 500);
      });
    } else if (
      arr3.length > 1 &&
      arr3[0] == arr3[1] &&
      item.getAttribute("class") == "card change"
    ) {
      document.querySelectorAll(".change").forEach((item) => {
        item.classList.add("ever");
        arr3 = [];
      });
    } else if (
      arr3.length > 1 &&
      arr3[0] == arr3[1] &&
      item.getAttribute("class") != "card change"
    ) {
      arr3 = [];
    }
    arr4 = [];
    let count = 0;
    document.querySelectorAll(".card").forEach((item) => {
      arr4.push(item.getAttribute("class"));
    });
    for (let i = 0; i < arr4.length; i++) {
      if (arr4[i] == "card") {
        count++;
      }
    }
    if (count == 0) {
      document.querySelector(".section-wrapper").classList.add("winner");
      console.log(1111);
    }
  });
});
