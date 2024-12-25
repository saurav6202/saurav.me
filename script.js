for (let i = 0; i < projects.length; i++) {
  const projectBox = document.createElement("div");
  projectBox.className = "projectBox";

  const img = document.createElement("img");
  img.src = projects[i].img;
  projectBox.appendChild(img);

  const titleBox = document.createElement("div");
  titleBox.className = "titleBox";

  const title = document.createElement("h2");
  title.textContent = projects[i].title;
  titleBox.appendChild(title);

  const date = document.createElement("p");
  date.textContent = projects[i].date;
  titleBox.appendChild(date);

  projectBox.appendChild(titleBox);

  const infoBox = document.createElement("div");
  infoBox.className = "infoBox";
  infoBox.textContent = projects[i].description;
  projectBox.appendChild(infoBox);

  const lngBox = document.createElement("div");
  lngBox.className = "lngBox";

["HTML", "CSS", "JavaScript"].forEach((lang) => {
    const langItem = document.createElement("p");
    langItem.textContent = lang;
    lngBox.appendChild(langItem);
  });

  projectBox.appendChild(lngBox);

  const btnBox = document.createElement("div");
  btnBox.className = "btnBox";

  const codeButton = document.createElement("button");
  const codeLink = document.createElement("a");
  codeLink.href = projects[i].codeURL;
  codeButton.innerHTML = '<i class="fa-brands fa-github"></i> Code';
  codeLink.appendChild(codeButton);
  btnBox.appendChild(codeLink);

  const demoButton = document.createElement("button");
  const demoLink = document.createElement("a");
  // demoLink.setAttribute("href",projects[i].demoURL)
  demoLink.href = projects[i].demoURL;
  demoButton.innerHTML =
    'Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>';
  demoLink.appendChild(demoButton);
  btnBox.appendChild(demoLink);

  projectBox.appendChild(btnBox);

  // Append the projectBox to a container in the DOM
  document.querySelector(".projectCon").appendChild(projectBox);
  console.log(projects[i].demoURL)
}

let listItem = document.querySelector("nav ul");
document.querySelector(".fa-bars").addEventListener("click", () => {
  event.stopPropagation();

  console.log("click", "height = ", listItem.style.height)
  if (listItem.style.height == "" || listItem.style.height == "0rem") {
    listItem.style.height = "15rem";
  } else {
    listItem.style.height = "0rem";
  }
})
document.querySelector(".body").addEventListener("click", () => {
  if (listItem.style.height == "15rem"){
    listItem.style.height = "0rem";
  }
})