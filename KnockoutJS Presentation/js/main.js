/*
JavaScript: 'main.js'
Author: 	Jason Kastrup
Class:		WIA 03-2014
Assignment:	Knockout Example
*/

var GroceryList = function(){
	// Observable variables 
	this.itemToAdd = ko.observable("");
	this.allItems = ko.observableArray([]);
	this.selectedItems = ko.observableArray([]);
	
	this.addItem = function () {
		if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0 )) {	// IndexOf < 0 stops duplicates and blank entries
			this.allItems.push(this.itemToAdd());
			this.itemToAdd("");	// Clear input field
			this.sizeList();
		}
	}; // end addItem()
	
	this.deleteSelected = function() {
		this.allItems.removeAll(this.selectedItems());
		this.selectedItems([]);	// clear selected items
		this.sizeList();
	
	};	// end removeSelected()
	
	this.sortItems = function() {
		this.allItems.sort();
	};
	
	this.sizeList = function () {
		document.getElementById("list").size = document.getElementById('list').options.length;
	}; // end sizeList()
	
} // end GroceryList()


ko.applyBindings(new GroceryList());