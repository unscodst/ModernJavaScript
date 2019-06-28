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
        itemList: '#item-list',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        totalCalories: '.total-calories',

    }
    console.log('item controller')

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
        clearInputs: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
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

        // Edit Icon Click Event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)
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
            console.log(itemToEdit)
        }
        
        
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

            console.log(items)
        }
    }
})(ItemCtrl, UICtrl);

// Initialize App
App.init();