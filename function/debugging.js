window.onload = () => {
  let i = 0;
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    i += 1;
    console.log(i);
  });
  console.log("Square: ", i*i*i)
};
