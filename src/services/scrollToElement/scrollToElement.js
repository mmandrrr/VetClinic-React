export const scrollToElementWithPrevent = (e,element) => {
    e.preventDefault()
    element.scrollIntoView(true)
}

export const scrollToElementWithoutPrevent = (element) => {
    element.scrollIntoView(true)
}