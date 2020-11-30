const calculator = document.querySelector('calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
//calculator.querySelector for the sake of structure
//recall that calculator class contains keys and display

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent


    // is this a number key?
    if (key.classList.contains('number')){
        if (displayValue === '0') { // so 0 would go away after you press a key
            display.textContent = keyValue
        }  else {
            display.textContent = displayValue + keyValue
        }
    }

    // is this an operator key?
    key.dataset.keyType === 'operator'
    if (key.classList.contains('operator')){
        console.log(key)

        calculator.dateset.previousKeyType = 'operator'
    }
})