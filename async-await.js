const getNews = async function () {
    const API_KEY = "81e21b97f22e470ebd9eddda8d1f3d01";

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
        }
        const data = await res.json();
        //console.log(data.articles)
        renderNews(data.articles);
    } catch (error) {
        console.log(error);
    }


    //const res=await fetch("https://newsapi.org/v2/top-headlines?country=tr&apiKey=81e21b97f22e470ebd9eddda8d1f3d01")

}
const renderNews = (news) => {
    const newsList = document.getElementById("news-list");

    news.forEach((item) => {
        const {
            title,
            description,
            urlToImage,
            url
        } = item;
        newsList.innerHTML += `
        <div class="col-md-6 col-lg-4 col-xl-3">
         <div class="card">
         <img src="${urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" class="btn btn-primary">Details</a>
          </div>
         </div>
        </div>`
    })
};
window.addEventListener("load", getNews);