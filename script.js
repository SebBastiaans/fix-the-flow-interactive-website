// 1 - selecteer search de button
let searchAiButton = document.querySelector('.ai-button-secondary')

// 2 - event click
searchAiButton.addEventListener('click',
// 3 - display bock worden. + h1 op display none
function(){
    document.querySelector('#open-AI-chat').classList.add('article-visible')
    document.querySelector('h1').classList.add('heading-gone')
}
)
// document.querySelector('.main-section-search article')