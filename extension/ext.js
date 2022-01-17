
//descr: used by EXTENSION

// [ PRESETS ]
const c = {
    get_answers: document.querySelector('.get-answers'),
    solve_test:  document.querySelector('.solve-test'),
}

// [ METHODS ]
const dispatchTask = ( task ) => {

    // specify > tab params
    let params = {
        active: true,
        currentWindow: true
    };

    // get > current tab
    chrome.tabs.query(params, function(tabs) {
        let t = task
        chrome.tabs.sendMessage(tabs[0].id, task)
    })

}

// [ MAIN ]
c.get_answers.addEventListener('click', () => { dispatchTask('get-answers') })
c.solve_test.addEventListener('click', () => { dispatchTask('solve-test') })
