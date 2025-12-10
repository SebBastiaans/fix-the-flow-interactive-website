// 1 - Zoek element in het document. (button, input)
// 2 - Luister naar een event, en roep een callback function aan. (click, submit)
// 3 - pas een property van een element aan (classlist)

//chat openen met button
let searchAiButton = document.querySelector('.ai-button-secondary')

searchAiButton.addEventListener('click', function(){
    document.querySelector('#open-AI-chat').classList.add('article-visible')
    document.querySelector('h1').classList.add('heading-gone')
}
)
//chat dichtklappen
let chatDown = document.querySelector('#chat-handle')

chatDown.addEventListener('click', function(){
    document.querySelector('#open-AI-chat').classList.remove('article-visible')
    document.querySelector('h1').classList.remove('heading-gone')

})

//chat openen met enter knop
let form = document.querySelector('.secondary-search-bg')

form.addEventListener('submit', function(event) {
  event.preventDefault()
})