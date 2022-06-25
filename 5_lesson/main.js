const list = [];

const addButton = document.getElementById('Button');
const input = document.getElementById('input');



function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');

    for (let i = 0; i < list.length; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'action');

        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = 'change'
        changeButton.onclick = () => {
            change(list[i].id)
        }

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = 'delete'
        deleteButton.onclick = () => {
            deleteBut(list[i].id).remove()
            document.querySelector('.todoBlock').remove()
        }
        buttons.append(changeButton, deleteButton);

        div.append(buttons);

        mainDiv.append(div);
    }
    console.log(mainDiv);
    const form = document.querySelector('.form');
    // list.length = 0
    // list.splice(input)
    // list.pop()
    document.querySelector('.list').remove()
    form.append(mainDiv);
}
function change(id) {
    const item = list.findIndex(t => t.id === id);
    const text = prompt('Текст для изменения');
    list[item].text = text;
    render()
}

function deleteBut (id) {
    const del  = list.findIndex(p => p.id ===id );
    list.splice(del, 1)
    render(list)
}

addButton.onclick = () => {
    const obj = {
        id: list.length + 1,
        text: input.value
    }
    list.push(obj);
    console.log(list);
    render();
};
