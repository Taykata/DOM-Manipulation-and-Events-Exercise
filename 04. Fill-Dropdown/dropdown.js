function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const selectMenu = document.getElementById('menu');

    const option = document.createElement('option');
    option.value = value.value;
    option.text = text.value;

    selectMenu.appendChild(option);

    value.value = '';
    text.value = '';
}