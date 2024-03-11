import data from './data.json' assert { type: 'json' };

const spanAverage = document.getElementsByClassName('average')[0];
const spanEval = document.getElementsByClassName('eval')[0];
const resultsDiv = document.getElementById('results');

const displayResults = data => {
    const results = [...data];

    const summaryTitle = document.createElement("h2");
    summaryTitle.className = "summary";
    summaryTitle.innerText = "Summary";

    resultsDiv.appendChild(summaryTitle);

    results.forEach(result => {
        const category = result.category;
        const score = result.score;
        const icon = result.icon;

        const pEl = document.createElement("p");
        pEl.className = `p-${category.toLowerCase()}`;

        const image = document.createElement("img");
        image.className = "icon";
        image.src = icon;
        image.alt = `Icon for ${category}`;

        const spanCat = document.createElement("span");
        spanCat.className = `${category.toLowerCase()}`;
        spanCat.innerText = `${category}`;

        const spanRight = document.createElement("span");
        spanRight.className = "right";
        spanRight.innerHTML = `<span class="bold">${score}</span> / 100`;

        pEl.appendChild(image);
        pEl.appendChild(spanCat);
        pEl.appendChild(spanRight);

        resultsDiv.appendChild(pEl);
    });

    const continueBtn = document.createElement("button");
    continueBtn.className= "continue-btn";
    continueBtn.innerText = "Continue";

    resultsDiv.appendChild(continueBtn);

    const resSum = results.reduce((acc, cv) => {
        return acc + cv.score}, 0);

    const average = Math.floor(resSum / results.length);
    spanAverage.textContent = average;
    
    evaluation(average);
}

const evaluation = average => {
    // Evaluation based on average
    switch (true) {
        case (average <= 24):
            spanEval.textContent = "Bad";
            break;
        case (average >= 25 && average <= 49):
            spanEval.textContent = "Average";
            break;
        case (average >= 50 && average <= 69):
            spanEval.textContent = "Above Average";
            break;
        case (average >= 70 && average <= 89):
            spanEval.textContent = "Great";
            break;
         case (average >= 90 && average <= 100):
            spanEval.textContent = "Excellent";
            break;
          default:
            spanEval.textContent = "Error";
    }
}

// call functions
displayResults(data);