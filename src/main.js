import { getGroceryList } from './gemini.js';

async function main() {
    const generateButton = document.getElementById('generate-button');
    const groceryInput = document.getElementById('grocery-input');
    const listContainer = document.getElementById('list-container');
    const saveButton = document.getElementById('save-button');
    const savedListsContainer = document.getElementById('saved-lists-container');

    let currentItems = [];

    generateButton.addEventListener('click', async () => {
        const userInput = groceryInput.value;
        const groceryList = await getGroceryList(userInput);
        currentItems = groceryList.items;
        renderGroceryList(currentItems);
    });

    saveButton.addEventListener('click', () => {
        const listName = prompt('Enter a name for your list:');
        if (listName) {
            const savedLists = JSON.parse(localStorage.getItem('groceryLists')) || [];
            savedLists.push({ name: listName, items: currentItems });
            localStorage.setItem('groceryLists', JSON.stringify(savedLists));
            renderSavedLists();
        }
    });

    function renderGroceryList(items) {
        listContainer.innerHTML = '';
        if (items.length === 0) {
            return;
        }

        const ul = document.createElement('ul');

        for (const item of items) {
            const li = document.createElement('li');
            li.textContent = `${item.name} (Quantity: ${item.quantity})`;
            ul.appendChild(li);
        }
        listContainer.appendChild(ul);
    }

    function renderSavedLists() {
        savedListsContainer.innerHTML = '';
        const savedLists = JSON.parse(localStorage.getItem('groceryLists')) || [];

        for (const list of savedLists) {
            const button = document.createElement('button');
            button.textContent = list.name;
            button.addEventListener('click', () => {
                currentItems = list.items;
                renderGroceryList(currentItems);
            });
            savedListsContainer.appendChild(button);
        }
    }

    renderSavedLists();
}

main();
