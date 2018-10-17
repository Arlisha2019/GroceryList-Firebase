let groceryInfo = document.getElementById("groceryInfo");
let submit = document.getElementById("submit");
let groceryList = document.getElementById("groceryList");
let groceryStore = document.getElementById("groceryStore");
let nameTextBox = document.getElementById("nameTextBox");
let database = firebase.database();
const groceryRef = database.ref("lists")

let lists = []

function displayInfo(lists) {
  let displayAll = ''
  for (var item in lists){
    let newDisplay = `<li> ${lists.user_Name} - ${lists.grocery_Store} - ${lists.groceryList} </li>`
    displayAll += newDisplay
  }
  groceryInfo.innerHTML = displayAll
}


submit.addEventListener('click', function() {

  let name = nameTextBox.value
  let store = groceryStore.value
  let list = groceryList.value

  let info = { user_Name: name, grocery_Store: store, grocery_list: list }
  //console.log(name, store, list)
  storeOrders(info)

})

function storeOrders(data) {
  displayInfo(data)
  let groceryReference = groceryRef.push()
  groceryReference.set(data)
}

// displayInfo(lists)
