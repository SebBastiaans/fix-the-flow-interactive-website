// 1 - selecteer search de button
let searchAiButton = document.querySelector('.ai-button-secondary')
console.log(searchAiButton)

// 2 - event click
searchAiButton.addEventListener('click',
// 3 - display bock worden. + h1 op display none
function(){
    document.querySelector('main-section-search, article').classList.add('article-visible')
    document.querySelector('main-section-search, h1').classList.add('heading-gone')
}
)
// document.querySelector('.main-section-search article')