  // Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters   : ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts   : ["Tiramisu", "Cheesecake"]
};
  // Function to display menu items by category
function displayMenuItems(menu) {
      // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

      // Loop through each category and its items in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)){

          // Create an element to represent the category
            const categoryElem = document.createElement('div');
            categoryElem.classList.add('category');
          // Check for the categories then to be made bold
        if (category === 'Starters' || category === 'MainCourses' || category === 'Desserts') {
            categoryElem.style.fontWeight = 'bold';  // Applies bold style
            }
          // Set the text content of the category element to the category name
            categoryElem.textContent = category;
          // Append the category element to the menu container
          menuContainer.appendChild(categoryElem);

          // Create an element to represent a list of items
            const itemList = document.createElement('p');
           
          // Append a list of items element to the menu container
            itemList.classList.add('items-list');
            menuContainer.appendChild(itemList);

          // Loop through the items in the category and create list items
            menu[category].forEach(item => {
                const listItem = document.createElement('p');
                listItem.classList.add('item');
                listItem.textContent = item;
          // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener('click', () => addToOrder(item));
         // Append the list item to the list of items
                itemList.appendChild(listItem);
            })
        }
        }
}
  // Callback function for adding an item to the order
function addToOrder(itemName) {
      // Get the order items list and the order total element from the HTML
     const orderItemList  = document.getElementById('order-items');
     const orderTotalElem = document.getElementById('order-total');

      // Create a list item for the orders
    const listItem = document.createElement('li');
      // Set the text content of the list item to the item name
          listItem.textContent = itemName;
     // Append the list item to the order items list
    orderItemList.appendChild(listItem);

      // Update the text content of the order total element with the new total
    let totalPrice = parseFloat(orderTotalElem.textContent.replace('R ' , ''));
        totalPrice += 60;
        orderTotalElem.textContent  = `${totalPrice.toFixed(2)}`;
}
  // Function to initialize the menu system
function initMenuSystem(menu) {
      // Call the function to display menu items
    displayMenuItems(menu);
}
  // Start the menu system by calling the init function
initMenuSystem(menu);
