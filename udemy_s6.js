// structuring our code with modules
// important aspect of any robust application articitecture
// keep unites of code for a project cleanly separated and organized
// encapsulate some data into privacy and expose other data publicly

// separate out into ui and data modules

///////////////////////////////

// LESSONS LEARNED

// how to use the module pattern
// private and public data, encapsulation, and separation of concerns
// separation of concerns - each part of the project should only be interested in doing one thing
// how to set up event listeners for keypress events
// how to use the event object
// read input data from different HTML input types
// how and why and how to create an initialization function 
// how to choose function constructors that meet application needs
// how to set up a proper data structure for budget controller
// how to avoid conflicts in data structures
// how and why to pass data from one module to another

///////////////////////////////

// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9 
            // may happen because it is possible to remove items (and thus, IDS) from the budget app
            // ID = last ID + 1

            // Create New ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };


})();



// UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input, newItem;

        // 1. get field input data
        input = UICtrl.getInput();

        // 2. add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. add new item to UI

        // 4. calculate the budget

        // 5. display the budget on the UI

    };

    return {
        init: function() {  // public initiation function
            console.log('Application has started.')
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();