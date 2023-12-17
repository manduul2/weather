// API-> Aplication Programing interface (tusgailan ashiglahad hadgalsan data)
// fetch () -> huselt ywuulna
// promise - > mnii yavuulsan huseltend hariu ireh amlalt
// .then() -> promise
// response -> status : 200/approved /, 404,300,500 /error/
// json() file -> zambraagui datag nudend hylbar haragduulna
/*fetch('https://fakestoreapi.com/users').then(
    response => response.json()
//).then(
    user => {
        console.log(user)
        console.log(user[0].name.firstname);
        console.log(user[user.length-1].phone)
    }
//);
// banknii api ->*/
/*fetch('http://127.0.0.1:5500/lab13/book.html').then(
    response => response.json()
).then(
    data => {
        console.log(data.book[0].author)
    }
)*/
const input = document.getElementsByTagName('input')[0]
const searchBtn = document.querySelector('.srch');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
const img =  document.getElementsByTagName('img')[0];
searchBtn.addEventListener('click',()=>{
    let city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response => response.json()
    ).then(
    data=>{
        console.log(data)
        if(data.cod === '404'){
            name.innerText = "not found"
            img.src = "404.png"
        }
        name.innerText = data.name;
        temp.innerText = data.main.temp;
        desc.innerText = data.weather[0].description;
        wind.innerText = data.wind.speed
        switch (data.weather[0].main){
            case "Clouds":
                img.src="cloud.png";
                break;
            default :
                img.src=" ";
                break;
            
        }
        }
    )
})
