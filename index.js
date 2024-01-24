let APIKEY = "9ecce4700c874ac7affd6abb7ee9edf1";
// console.log("News API Project Practice");

// Access the new container
let newsAccording = document.getElementById("newsAccording");

// creating xhr object
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=${APIKEY}`, true);
xhr.getResponseHeader('Content-type', 'application/json');
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newHtml = "";
        articles.forEach(function (element, index) {

            let news = `
                <div class="card my-3">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-controls="collapse${index}" >
                               <b>News ${index + 1} : </b>${element["title"]}
                            </button>
                        </h2>
                    </div>
                    <div class="collapse" id="collapse${index}" aria-labelledby="headingOne"
                        data-parent="#newsAccording">
                        <div class="card-body">
                            ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
                `;
            newHtml += news;
        });
        newsAccording.innerHTML = newHtml;
    } else {
        console.log("Some Error Occured");
        let newHtml = "";
        let news = `
                <div class="card my-3">
                    <div class="card-header" id="heading">
                        <h2 class="mb-0">
                            <button class="btn" type="button" data-bs-toggle="collapse">
                               <h3 class="text-center">Server Down! Please try agin later.</h3>
                            </button>
                        </h2>
                    </div>
                </div>
                `;
        newHtml = news;
        newsAccording.innerHTML = newHtml;

    }
}

xhr.send();


