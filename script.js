const data = [
    "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy - Ray Kroc",
    "When we have respect for ourselves and others, we gravitate towards connections that encourage that - Simeon Lindstrom",
    "Anger is the ultimate destroyer of your own peace of mind - Dalai Lama",
    "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful - L. R. Ellert",
    "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot - Wayne Gretzky",
    "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered - Michelle Obama",
    "Children really brighten up a household. They never turn the lights off - Ralph Bus",
    "No one would have crossed the ocean if he could have gotten off the ship in the storm - Charles Kettering",
    "Congratulations! today is your day. You're off to Great Places! You're off and away - Dr. Seuss",
    "Make the decision, make another. Remake one past, you cannot- Yoda",
];

const contentDiv = document.querySelector('.content')
const textareaEl = document.querySelector('textarea')

function generateQuotes(){
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber]
}

function renderQuotes(){
    contentDiv.innerText = null
    generateQuotes().split('').forEach(function(char){
    
    const spanEl = document.createElement('span')
    spanEl.innerText = char
    //add spanEl into contentDiv
    contentDiv.appendChild(spanEl)

    })
    textareaEl.value = ''
}
textareaEl.addEventListener('keyup', function(e){
    const inputArr = e.target.value.split('')
    const allSpans = document.querySelectorAll('span')
    let correct = true
    allSpans.forEach(function(sp, index){
        if(inputArr[index] == null){
           //doesn't do anything
           sp.classList.remove('incorrect')
           sp.classList.remove('correct')
           correct = false
           return 
        }else if (inputArr[index] == sp.innerText){
            //console.log('correct')
            // sp.style.color = 'green'
            sp.classList.add('correct')
            sp.classList.remove('incorrect')
        }else{
            //console.log('correct')
            // sp.style.color = 'red'
           sp.classList.add('incorrect')
            sp.classList.remove('correct')
            correct = false
        }
    })
    if(correct)renderQuotes()
})

renderQuotes()



//event listener]
// const btn = document.querySelector('button')
// const txtArea = document.querySelector('textarea')

// btn.addEventListener('click', function(){
//     console.log("I have been clicked")
// })

// //keyup can be used
// txtArea.addEventListener('keydown', function(){
//     console.log("This user is typing...")
// })


//class of content
// const contentDiv = document.querySelector('.content')
// contentDiv.innerText = "Frodo Baggins"
// contentDiv.style.color = 'green'

// const mercyContainer = document.createElement('div')
// mercyContainer.classList.add('mercy-container)
// mercyContainer.innerText = "Mercy loves Jesus"
//contentDiv.appendChild(mercyContainer)
// console.log(contentDiv.innerText)