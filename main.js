const answerElement = document.querySelector('#answer')

const answerButton = document.querySelector('#answerButton')

const doubtInput = document.querySelector('#doubtInput')

const answers = [
  'Certainty!',
  'I`m not so sure',
  'It is decidedly like this.',
  'Don`t count on it.',
  'No doubt!',
  'Ask again later...',
  'Yes, definitely!',
  'My answer is no.',
  'You can count on it.',
  'Better not tell you now.',
  'In my view, yes.',
  'My sources say no.',
  'Likely.',
  'Can`t predict now.',
  'Good perspective.',
  'The prospects are not so good.',
  'Yes.',
  'Focus and ask again.',
  'Signs indicate yes.'
]

function makeDoubt() {
  if (answerElement.style.opacity == 0) {
    answerElement.style.opacity = 1
  }
  if (doubtInput.value == '') {
    answerElement.innerHTML = 'TEXT YOUR DOUBT!'
    return
  }

  answerButton.setAttribute('disabled', true)

  const doubt = '<div>' + doubtInput.value + '</div>'

  const totalAnswers = answers.length
  const pickAnswer = Math.floor(Math.random() * totalAnswers)

  answerElement.innerHTML = doubt + answers[pickAnswer]

  setTimeout(function () {
    answerElement.style.opacity = 0
    answerButton.removeAttribute('disabled')
  }, 3000)
}
