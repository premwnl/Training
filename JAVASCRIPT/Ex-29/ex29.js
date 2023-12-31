/*            *
                                            Name of the challenge      : Dynamic Dropdown                    *
                                            Challenge No               : 29                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 12/10/2023     Ticket No:               *
**/



//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
const click = document.getElementById('click')
const container = document.getElementById('dropDown_container')

//Constant declaration
const ITEMS = [
    { id: 1, name: 'Vhitech', data: [{ id: 1, name: 'vhitech1' }, { id: 2, name: 'vhitech2' }, { id: 3, name: 'vhitech3' }] },
    { id: 2, name: 'Google', data: [{ id: 1, name: 'google1' }] },
    { id: 3, name: 'Yahoo', },
    { id: 4, name: 'Duck&Go', data: [{ id: 1, name: 'Duck&Go1', data: [{ id: 1, name: 'Duck&Go_sub', }] }, { id: 2, name: 'Duck&Go2' }, { id: 3, name: 'Duck&Go3', data: [{ id: 1, name: 'Duck&Go_sub1', }] }] },
    { id: 5, name: 'Bing', data: [{ id: 1, name: 'vhitech1' }, { id: 2, name: 'vhitech2' }, { id: 3, name: 'vhitech3' }] }
];

//Error declaration

//Main functions
click.addEventListener('click', () => {
    container.innerHTML = ''
    showDropDown(ITEMS, 0)
})

function showDropDown(item, index, element) {
    if (element) while (element.nextElementSibling) element.nextElementSibling?.remove(); //Remove if it has next element sibling 

    const selectElement = document.createElement('select')

    if (index) item = item[index - 1].data ? item[index - 1].data : null;// filtering item by id
    if (item) {
        for (const index of item) {//creating option and appending to container
            const optionElement = document.createElement('option')
            optionElement.value = index.id
            optionElement.textContent = index.name
            selectElement.append(optionElement)
        }
        container.append(selectElement)
    }
    selectElement.addEventListener('click', () => {//event listerner and recursion for creating elements
        showDropDown(item, selectElement.selectedIndex + 1, selectElement)
    })
}

