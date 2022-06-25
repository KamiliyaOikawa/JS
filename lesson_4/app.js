console.log(document)

const block = document.getElementsByClassName('block')
console.log(block)

const block3 = document.getElementById('block3')
console.log(block3)

// block3.classList.add('der')
// block3.classList.remove('block')
// block3.className = 'ChangeClass'
console.log(block3.classList)
block3.onclick = () => {
    block3.classList.toggle('active')
}


const blocki = document.querySelector('.block')
console.log(blocki)

const block2 = document.querySelectorAll('.block')
console.log(block2)
const button = document.getElementById('but');
const input = document.getElementById('input');
button.onclick = () => {
    const tag = document.createElement('div');
    const deleteButton = document.createElement('button')
    deleteButton.onclick = () => {
        tag.remove()
    }
    tag.setAttribute('class', 'block')
    tag.innerText = input.value;
    document.body.append(tag);
    tag.append(deleteButton)
    // input.innerText = removeEventListener()
    input.value = "";
}
