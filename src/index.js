import './styles.css'

const cardNumberInput = document.getElementById('cardNumberInput')
const validateButton = document.getElementById('validateButton')
const cardImages = document.querySelector('.card-images')
const validationResult = document.getElementById('validationResult')

const cardTypes = [
	{ name: 'visa', pattern: /^4/ },
	{ name: 'maestro', pattern: /^5[1-5]/ },
	{ name: 'american', pattern: /^3[47]/ },
	{ name: 'discover', pattern: /^6(?:011|5)/ },
	{ name: 'diners', pattern: /^3(?:0[0-5]|[68])/ },
	{ name: 'webmoney', pattern: /^(?:2131|1800|35)/ },
	{ name: 'mir', pattern: /^220[0-4]/ },
].slice(0, 7)

// Создаем элементы карт и добавляем их в DOM
cardTypes.forEach(card => {
	const img = document.createElement('img')
	img.src = `./images/${card.name.toLowerCase()}.png`
	img.alt = card.name
	cardImages.appendChild(img)
})

validateButton.addEventListener('click', () => {
	const cardNumber = cardNumberInput.value.replace(/\s/g, '')

	if (validateCardNumber(cardNumber)) {
		showValidationResult('Карта валидна', 'green')
		highlightCardType(cardNumber)
	} else {
		showValidationResult('Неверный номер карты', 'red')
		resetCardHighlights()
	}
})

function validateCardNumber(cardNumber) {
	const regex = /^[0-9]{13,19}$/
	if (!regex.test(cardNumber)) return false

	const cardType = getCardType(cardNumber)
	return !!cardType
}

function getCardType(cardNumber) {
	return cardTypes.find(card => card.pattern.test(cardNumber))
}

function showValidationResult(message, color) {
	validationResult.textContent = message
	validationResult.style.color = color
}

function highlightCardType(cardNumber) {
	const cardType = getCardType(cardNumber)
	if (cardType) {
		resetCardHighlights()
		const img = cardImages.querySelector(`img[alt="${cardType.name}"]`)
		img.classList.add('active')
	}
}

function resetCardHighlights() {
	const activeImg = cardImages.querySelector('.active')
	if (activeImg) {
		activeImg.classList.remove('active')
	}
}
