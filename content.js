
//descr: used by PAGE

// [ PRESETS ]
const tasks = {
    get_answers: 'get-answers',
    solve_test: 'solve-test'
}
const test = {
    question: document.querySelector('.qtext'),
    options:  document.querySelectorAll('.answer [data-region="answer-label"] div'),
    answers:  document.querySelectorAll('div[id ^= "question"')
} 

// [ METHODS ]
const getAnswers = () => {
    sessionStorage.clear()
    test?.answers.forEach(answer_block => {
        let question = answer_block.querySelector('.qtext').textContent
        let answer   = answer_block.querySelector('.rightanswer').textContent

        sessionStorage.setItem(question, answer)
    })
    for( let i = 0 ; i < sessionStorage.length ; i++ ) {
        let q = sessionStorage.key(i)
        let a = sessionStorage.getItem(q)
        console.log(q, a)
    }
}
const solveTest = () => {
    let question = test?.question.textContent
    let is_found = false

    test?.options.forEach(opt => {
        if ( is_found ) {
            alert('no answer found')
            return
        }
        for( let i = 0 ; i < sessionStorage.length ; i++ ) {
            let q = sessionStorage.key(i)
            let a = sessionStorage.getItem(q)

            if ( q == question && a.match(opt.textContent) ) {
                let input = opt.parentNode.parentNode.querySelector('input')
                input.checked = true
                is_found = true
                break
            }
        }
    })
    
}
const runTask = ( task, sender, sendResponse ) => {
    if ( task == tasks.get_answers ) getAnswers()
    if ( task == tasks.solve_test )  solveTest()
}

// [ MAIN ]
chrome.runtime.onMessage.addListener(runTask);

