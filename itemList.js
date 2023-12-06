//65130500083 Sarawit Kraukham
function itemList(userItems) {
  const items = userItems

  function initialPage() {
    //binding event listener
    const inputElement = document.querySelector('input')
    inputElement.addEventListener('input', filterItemsHandler)
    showItems(items)
  }

  function filterItemsHandler(e) {
    const inputValue = e.target.value
    const filterItems = items.filter((item)=> (item.keywords.toLowerCase().includes(inputValue.toLowerCase())))
    showItems(filterItems)
  }

  function showItems(items) {
    const ulParent = document.querySelector('#items')
    const arrayItems = items
    //* reset ul element for filter value only
    ulParent.textContent = ''
    for(let i = 0; i<arrayItems.length; i++){
      const listElement = document.createElement('li')
      listElement.textContent = `ID:${arrayItems[i].id}, NAME:${arrayItems[i].name}, KEYWORDS:${arrayItems[i].keywords}`
      ulParent.appendChild(listElement)
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  }
}
module.exports = itemList
