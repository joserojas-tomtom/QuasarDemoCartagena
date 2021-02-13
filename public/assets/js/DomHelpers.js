function elementFactory (type, className, content) {
  const element = document.createElement(type)
  element.setAttribute('class', className)
  if (typeof content !== 'undefined') {
    element.textContent = content
  }
  return element
}

function createResultItem () {
  return elementFactory('li', 'tt-results-list__item')
}

function createResultList () {
  return elementFactory('ul', 'tt-results-list')
}

async function fetchPhoto (apikey, id) {
  const data = await window.tt.services.poiPhotos({
    key: apikey,
    id: id,
    width: 280,
    height: 300
  })
  return data
}

function getPhotosURL (apikey, id) {
  return fetchPhoto(apikey, id)
}

function createDetailsItem (apikey, details) {
  const container = elementFactory('div')
  // container.appendChild(elementFactory('p'))
  if (details.photos && details.photos.length) {
    const cont = elementFactory('div')
    const element = elementFactory('img', 'tt-search-result__photo')
    element.id = details.photos[0].id
    fetchPhoto(apikey, element)
    cont.appendChild(element)
    container.appendChild(cont)
  }
  if (details.rating || details.priceRange) {
    const cont = elementFactory('div')
    if (details.priceRange) {
      const element = elementFactory('span', 'tt-search-result__price')
      let value = '🏷 '
      for (let i = 0; i < details.priceRange.value; i++) {
        value += '$'
      }
      element.innerText = value
      cont.appendChild(element)
    }
    if (details.rating) {
      const element = elementFactory('span', 'tt-search-result__rating')
      element.innerText = '♥ ' + details.rating.value + '(' + details.rating.totalRatings + ')'
      cont.appendChild(element)
    }
    container.appendChild(cont)
  }
  if (details.reviews) {
    details.reviews.forEach(function (review) {
      const element = elementFactory('div', 'tt-search-result__review')
      element.innerText = '"' + review.text + '"'
      container.appendChild(element)
      // container.appendChild(elementFactory('p'))
    })
  }
  return container
}

function createSearchResult (name, address, distance) {
  const resultName = elementFactory('div', 'tt-search-result__name')
  resultName.innerText = name
  const element = elementFactory('div', 'tt-search-result')
  const infoElement = elementFactory('div')
  infoElement.appendChild(resultName)
  element.appendChild(infoElement)

  if (address) {
    const resultAddress = elementFactory('div', 'tt-search-result__address')
    resultAddress.innerText = address
    infoElement.appendChild(resultAddress)
  }

  if (distance) {
    const resultDistance = elementFactory('div', 'tt-search-result__distance')
    resultDistance.innerText = distance
    element.appendChild(resultDistance)
  }

  return element
}

function checkIfElementOrItsParentsHaveClass (element, className) {
  if (element.classList.contains(className)) {
    return true
  }
  while (element.parentNode) {
    element = element.parentNode
    if (element.classList && element.classList.contains(className)) {
      return true
    }
  }
  return false
}

function getElementOrItsParentId (element) {
  if (element.id) {
    return element.id
  }
  while (element.parentNode) {
    element = element.parentNode
    if (element.id) {
      return element.id
    }
  }
  return false
}

const DomHelpers = {
  getPhotosURL: getPhotosURL,
  createDetailLines: createDetailsItem,
  createResultItem: createResultItem,
  createResultList: createResultList,
  createSearchResult: createSearchResult,
  checkIfElementOrItsParentsHaveClass: checkIfElementOrItsParentsHaveClass,
  getElementOrItsParentId: getElementOrItsParentId,
  elementFactory: elementFactory
}

window.DomHelpers = window.DomHelpers || DomHelpers
