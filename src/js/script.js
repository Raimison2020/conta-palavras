const textarea = document.getElementById('area')
const wordCount = document.getElementById('word')
const charCount = document.getElementById('char')

textarea.addEventListener('input', () => {
    const text = textarea.value.trim()
    const words = text.split(/\s+/).filter(Boolean)
    const charLength = text.length

    wordCount.textContent = words.length
    charCount.textContent = charLength

})