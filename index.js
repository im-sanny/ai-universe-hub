const loadAPI = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");

  const data = await res.json();
  const ai = data.data.tools;
  // console.log(ai)
  displayAi(ai);
};

const displayAi = (ai) => {
  // console.log(ai)
  const aiContainer = document.getElementById("ai-container");
  ai.forEach((a) => {
    console.log(a);
    // create a div
    const aiCard = document.createElement("div");
    aiCard.classList = `card  bg-slate-100 shadow-xl`;
    aiCard.innerHTML = `
        <figure><img src="${a.image}"alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${"Features"}</h2>
                <ul>
                    <li>${a.features[0]}</li>
                    <li>${a.features[1]}</li>
                    <li>${a.features[2]}</li>
                </ul>
            <div>
            <div class="divider"></div>
                <p>${a.name}</p>
                <p class="my-2">${a.published_in}</p>
            </div>
        </div>
        `;
    aiContainer.appendChild(aiCard);
  });
};

loadAPI();
