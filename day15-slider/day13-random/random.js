const quotes = [{
     
    quote: `"Only a life lived for others is a life lived worthwhile."`,
    writer: `Albert Einstein`
},{
    quote: `"There is more to life than increasing its speed."`,
    writer: `Mahatma Gandhi`
}, {
    quote: `"Because I have loved life, I shall have no sorrow to die"`,
    writer: `Amelia Burr`
}, {
    quote: `"The good life is inspired by love and guided by knowledge."`,
    writer: `Bertrand Russell`
}, {
    quote: `"Breathe. It’s just a bad day, not a bad life."`,
    writer: `Johnny Depp`
}, {
    quote:`"Dream as if you’ll live forever, live as if you’ll die today."`,
    writer: `"James Dean"`
}
, {
    quote:`"I don’t need it to be easy, I need it to be worth it."`,
    writer: `"Lil Wayne"`
},]


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})