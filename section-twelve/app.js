// Storage Controller

// Item Controller
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookie', calories: 400},
            // {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }
    // Public Methods
    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
            let ID;
            // Create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            newItem = new Item(ID, name, calories);

            // Add newItem to Items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id) {
            let found = null;
            // Loop through items
            data.items.forEach(item => {
                if(item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories) {
            // Calories to number
            calories = parseInt(calories);
            let found = null;

            data.items.forEach(item => {
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id) {
            // Get ids
            const ids = data.items.map(item => {
                return item.id;
            });

            // Get index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1);
        },
        clearAllItems: function() {
            data.items = [];
        },
        setCurrentItem: function(item) {
            data.currentItem = item;
        },
        getCurrentItem: function() {
            return data.currentItem;
        },
        getTotalCalories: function() {
            let total = 0;
            // Add each items calories
            data.items.forEach(item => {
                total += item.calories;
            });
            // Set total calories in the data structure
            data.totalCalories = total;

            return data.totalCalories;

        },
        logData: function() {
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function() {
    const UISelectors = {
        listItems: '#item-list li',
        itemList: '#item-list',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        totalCalories: '.total-calories',
        clearBtn: '.clear-btn'
    }

    // Public Methods
    return  {
        buildListItem: function(item) {
            return {
                html: `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong>
                <em>${item.calories} Calories</em>
                <a href="" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            </li>`
            }
        },
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item) {
                html += UICtrl.buildListItem(item).html;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name:document.querySelector(UISelectors.itemNameInput).value,
                calories:document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item) {
            // show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // Create li element
            const li = UICtrl.buildListItem(item).html;
            document.querySelector(UISelectors.itemList).insertAdjacentHTML('beforeend', li);
        },
        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Convert listItems Node List into Array
            listItems = Array.from(listItems);

            listItems.forEach(listItem => {
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong>
                    <em>${item.calories} Calories</em>
                    <a href="" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            });
        },
        deleteListItem: function(id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        clearInputs: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Convert listItems Node List into Array
            listItems = Array.from(listItems);
            listItems.forEach(item => {
                item.remove();
            })


        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function() {
            UICtrl.clearInputs();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';

        },
        showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';

        },
        getSelectors: function() {
            return UISelectors;
        }
    }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
    // Load Event Listeners
    const loadEventListeners = function() {
        const UISelectors = UICtrl.getSelectors();

        // Add Item Event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable Submit on Enter
        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        })

        // Edit Icon Click Event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // Clear Items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItems);
    }

    // Add Item Submit
    const itemAddSubmit = function(e) {
        e.preventDefault();
        // Get Form input from UICtrl
        const input = UICtrl.getItemInput();

        // Check for name and calorie input
        if(input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // Add Item to UI list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Clear fields
            UICtrl.clearInputs();
        }
    
    }

    // Click Edit Item
    const itemEditClick = function(e) {
        e.preventDefault();
        if(e.target.classList.contains('edit-item')) {
            // Get list item id
            const listId = e.target.parentNode.parentNode.id;

            // Break into an array
            const listIdArray = listId.split('-');

            // Get actual Id
            const id = parseInt(listIdArray[1]);

            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit)

            // Add Item to Form
            UICtrl.addItemToForm();
        }
    }
    // Item Update Submit
    const itemUpdateSubmit = function (e) {
        e.preventDefault();

        // Get Item Input
        const input = UICtrl.getItemInput();

        // Update Item
        const updatedItem = ItemCtrl.updateItem(input.name,input.calories);

        // Update UI
        UICtrl.updateListItem(updatedItem);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();

    }

    const itemDeleteSubmit = function (e) {
        e.preventDefault();
        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete item from data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        UICtrl.clearEditState();
    }

    // Clear All Items Event
    const clearAllItems = function() {
        // Delete All Items from Data Structure
        ItemCtrl.clearAllItems();

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        // Remove From UI
        UICtrl.removeItems();
        
        // Hide UL
        UICtrl.hideList();
    }

    // Publc Methods
    return {
        init: function() {
            console.log(`Initializing App...`)
            
            // Clear Edit State
            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Check if items is empty
            if(items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }
            
            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);            

            // Load Event Listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

// Initialize App
App.init();