
// -----Code By YSS-----------

const Container = document.getElementById('container');

const count = 15;

// -----Fetch Data-------YSS
async function ScrollData(){
    try{
        const apikey = "Db6VtdBXm7Vh2KkaGIUMKmilsIk5jgw5MFMrke3c3Ew";

        const data = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`)
        const JsonData = await data.json();

        console.log(JsonData)
        Makecards(JsonData);
    }
    catch(error){
        console.log("Error")
    }
}

// --------Make Cards------YSS
function Makecards(data){

    data.forEach(element => {
        const Cards = document.createElement('div');
        Cards.classList = `cards`

        const Images = document.createElement('img');
        Images.src = element.urls.small

        const Button = document.createElement('a');
        Button.id = `Download`;
        Button.innerHTML = `Download Image`

        Button.addEventListener('click', function(){
            const link = document.createElement('a');
            link.href = element.urls.small;
            link.download = 'downloaded_image.jpg';
            link.target = "_blank"; 
            link.click();
        });

        Cards.appendChild(Images)
        Cards.appendChild(Button)
        Container.appendChild(Cards)
    });
}

ScrollData()

// -------Scroll---------YSS
window.addEventListener("scroll", () =>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
        ScrollData();
    }
});


