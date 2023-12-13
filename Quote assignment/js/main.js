
// function showQuotes (){


// var quotes = ['“Be yourself; everyone else is already taken.”' ,
// '“So many books, so little time.”',
// '“Be the change that you wish to see in the world.”',
// '“We accept the love we think we deserve.”'
// ];

// var authors = ['― Oscar Wilde','― Frank Zappa' ,'― Mahatma Gandhi' , '― Stephen Chbosky'];

// var  num = Math.floor(Math.random() * quotes.length );




//     document.getElementById('quote').innerHTML = quotes[num];
//     document.getElementById('author').innerHTML = authors[num];
  


// }


var quotes = [  
    {
        text:'“Be yourself; everyone else is already taken.”',
        author :' ― Oscar Wilde' },


    {
        text:'“So many books, so little time.”' ,
        author:'― Frank Zappa' },

    {
        text:'“Be the change that you wish to see in the world.”',
        author :' ― Mahatma Gandhi' },

    {
        text:'“We accept the love we think we deserve.”',
        author: ' ―  Stephen Chbosky' },
];


var current = 0;


function getRandom(){
   
    return   Math.floor(Math.random() * quotes.length );;
}

function getQuote(){
    var now = getRandom()
    console.log('now',now)
    console.log('current', current)
    if(current == now){
        getQuote()
        
    }
    else{
    current = now
    }


    document.getElementById('quote').innerHTML = quotes[current].text;
document.getElementById('author').innerHTML = quotes[current].author;



}



  









 








