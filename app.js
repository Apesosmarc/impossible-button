const btn = document.querySelector("button");

btn.addEventListener("mouseover", () => {
  console.log("MOUSEOVER'D");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.top = `${height}px`;
  btn.style.left = `${width}px`;
});

btn.addEventListener("click", () => {
  btn.innerText = "YOU GOT ME";
  document.body.style.backgroundColor = "green";
});
