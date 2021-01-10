// using input fields, form inputs to change to any color:
const changeColor = () => {

    // change bg color based on input text value

    const colorInputText = document.querySelector('#colorInputText').value
    document.body.style.backgroundColor = colorInputText

    // change bg color based on HTML color picker value

    const colorPicker = document.querySelector('#colorPicker').value
    document.body.style.backgroundColor = colorPicker

    // display color picker value in the input field as hex code

    document.querySelector('#colorInputText').value = colorPicker

    // can't use following code as it displays a TypeError
    // colorInputText = colorPicker
    // TypeError "Assignment to constant variable at changeColor, at HTMLButtonElement.onclick"

}

// using buttons to change to specific colors:

// select the button elements

const btnBlue = document.querySelector('#blue')
const btnPink = document.querySelector('#pink')
const btnGrey = document.querySelector('#grey')

// add click event listener to individual button elements

btnBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = '#80bfff'
})

btnPink.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ff99bb'
})

btnGrey.addEventListener('click', () => {
    document.body.style.backgroundColor = '#bfbfbf'
})