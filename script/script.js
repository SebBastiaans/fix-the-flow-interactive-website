// 1 - selecteer search de button
let searchAiButton = document.querySelector('.ai-button-secondary')
let inputAiEnter = document.querySelector('.secondary-search-input')
let chatDown = document.querySelector('#chat-handle')
// 2 - event click
searchAiButton.addEventListener('click',

    // 3 - display bock worden. + h1 op display none
function(){
    document.querySelector('#open-AI-chat').classList.add('article-visible')
    document.querySelector('h1').classList.add('heading-gone')
}
)

chatDown.addEventListener('click', function(){
    document.querySelector('#open-AI-chat').classList.remove('article-visible')
    document.querySelector('h1').classList.remove('heading-gone')

})
// document.querySelector('.main-section-search article')

inputAiEnter.addEventListener('keydown', function(event){
    console.log('jooooo')
    if (event.key === 'Enter'){
        document.querySelector('#open-AI-chat').classList.add('article-visible')
        document.querySelector('h1').classList.add('heading-gone')
    }
})