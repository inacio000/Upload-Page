const dragArea = document.querySelector('.drag-files')

dragArea.addEventListener('dragover', () => {
    dragArea.classList.add('dragover')
})

dragArea.addEventListener('dragleave', () => {
    dragArea.classList.remove('dragover')
})