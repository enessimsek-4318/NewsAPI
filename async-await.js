const getNews=async function(){
    const API_KEY="81e21b97f22e470ebd9eddda8d1f3d01";
    const url=`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.articles)
    
    //const res=await fetch("https://newsapi.org/v2/top-headlines?country=tr&apiKey=81e21b97f22e470ebd9eddda8d1f3d01")
    
}

getNews();