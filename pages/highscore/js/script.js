function getVal(selector){
    let form = document.forms[0]
    console.log("form:", form)
    // let input = form.querySelector(`input=name["${selector}"]`)
    var input = document.getElementById('first-initial').value;
    console.log("input:", input)
    return input
}

// let firstInput = getVal('input[name="first-initial"]')
// console.log("firstInput:", firstInput)

// let input = document.querySelector('input[name="#first-initial"]')

// console.log("input:", input)
