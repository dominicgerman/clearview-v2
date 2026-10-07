'use strict'

// Where form submissions get sent (a Formspree, Netlify, Google Apps Script
// or church-management-system URL). Leave it empty while testing: the form
// will skip sending and go straight to the thank-you message.
const FORM_ENDPOINT = 'https://formspree.io/f/xbgdljje'

const modal = document.querySelector('#connect-modal')
const openButton = document.querySelector('#connect-open')
const form = document.querySelector('#connect-form')
const submitButton = document.querySelector('#connect-submit')
const errorMessage = document.querySelector('#connect-error')
const thanks = document.querySelector('#connect-thanks')
const closeButton = document.querySelector('#connect-close')
const detailCheckboxes = form.querySelectorAll('[data-details]')

// Put the modal back to an empty form
function resetModal() {
  form.reset()
  detailCheckboxes.forEach((checkbox) => {
    document.getElementById(checkbox.dataset.details).classList.add('hidden')
  })
  form.classList.remove('hidden')
  thanks.classList.add('hidden')
  errorMessage.classList.add('hidden')
  submitButton.disabled = false
  submitButton.textContent = 'Submit'
}

openButton.addEventListener('click', () => {
  resetModal()
  modal.showModal()
})

// Close when the dark area outside the box is tapped
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close()
})

closeButton.addEventListener('click', () => modal.close())

// Show a "Provide more details..." box under a checkbox when it's checked
detailCheckboxes.forEach((checkbox) => {
  const details = document.getElementById(checkbox.dataset.details)
  checkbox.addEventListener('change', () => {
    details.classList.toggle('hidden', !checkbox.checked)
    if (checkbox.checked) {
      details.focus()
    } else {
      details.value = ''
    }
  })
})

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  submitButton.disabled = true
  submitButton.textContent = 'Sending...'
  errorMessage.classList.add('hidden')

  try {
    if (FORM_ENDPOINT) {
        const data = new FormData(form)
        data.set('next_steps', data.getAll('next_steps').join(', '))
  
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) throw new Error('Form submission failed')
      }
    form.classList.add('hidden')
    thanks.classList.remove('hidden')
  } catch (error) {
    errorMessage.classList.remove('hidden')
    submitButton.disabled = false
    submitButton.textContent = 'Submit'
  }
})