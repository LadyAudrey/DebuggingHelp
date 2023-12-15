const areaBtn = document.getElementById("area");

areaBtn.onclick = function () {
  areaBtn.innerHTML = questionsArr[index];
  index++;
};
