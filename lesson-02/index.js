import * as mdc from 'material-components-web'

const textFieldElements = document.querySelectorAll('.mdc-text-field')
for (let textFieldElement of textFieldElements) {
  const textField = new mdc.textField.MDCTextField(textFieldElement)
}

const submitButtonElement = document.getElementById('submit-button')
submitButtonElement.addEventListener('click', onClickSubmit)

function onClickSubmit() {
  const { elements } = submitButtonElement.form
  const data = new Map()

  for (let element of elements) {
    if (element.tagName !== 'INPUT') {
      continue
    }

    if (element.type === 'radio') {
      if (element.checked) {
        data.set(element.name, element.id)
        continue
      }
      continue
    }

    if (element.type === 'checkbox') {
      data.set(element.id, element.checked)
      continue
    }

    if (element.type === 'text') {
      if (element.value === '') {
        const section = element.closest('.Container_Section')
        showError(section)
        removeErrorOnTextInput(section, element)
        return
      }
      data.set(element.id, element.value)
      continue
    }

    throw new Error(`Unrecognized element type: ${element.type}`)
  }

  if (!data.get('diet-restrictions')) {
    const element = document.querySelector('[name="diet-restrictions"]')
    const section = element.closest('.Container_Section')
    showError(section)
    removeErrorOnRadioChange(section, element)
    return
  }

  console.log('Data: %o', data)
  displayData(data)
}

function displayData(data) {
  const formOutputElement = document.getElementById('form-output')
  if (!formOutputElement) {
    return
  }
  const dataAsObject = Object.fromEntries(data.entries())
  formOutputElement.innerHTML = `
    <p>Output data:</p>
    <pre>${JSON.stringify(dataAsObject, null, '  ')}</pre>
  `
}

function showError(section) {
  section.classList.add('Container_Section__Error')
  setTimeout(() => alert('Please fill in a value for the field'), 100)
}

function removeErrorOnTextInput(section, element) {
  element.addEventListener('input', () => removeError(section))
}

function removeErrorOnRadioChange(section, element) {
  const radioElements = section.querySelectorAll('input[type=radio]')
  for (let radioElement of radioElements) {
    radioElement.addEventListener('change', () => removeError(section))
  }
}

function removeError(section) {
  section.classList.remove('Container_Section__Error')
}

const screenSizeButton = document.getElementById('screen-size-button')
screenSizeButton.addEventListener('click', getAvailedScreenSize)

function getAvailedScreenSize() {
  event.preventDefault()
  const availedScreenSize = document.getElementById('availed-screen-size')
  if (!availedScreenSize) {
    return
  }
  availedScreenSize.innerHTML = window.innerWidth + ' X ' + window.innerHeight
}

console.dir(document.body)
