// // TODO: complete this object/class

// // The constructor takes in an array of items and a integer indicating how many
// // items fit within a single page

function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// // returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    //console.log(this.collection);
    //console.log(this.collection.length);
  return this.collection.length;
}

// // returns the number of pages
 PaginationHelper.prototype.pageCount = function() {
//    console.log(Math.ceil(this.itemCount()/this.itemsPerPage));
    return Math.ceil(this.itemCount()/this.itemsPerPage);
}

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    const lastPage = this.pageCount();
    if (isNaN(pageIndex)) {
        return -1;
    }
    if (pageIndex < 0 || pageIndex > lastPage-1) {
        console.log("Error value");
        return -1;
    }
    if (lastPage === 0) {
        console.log("No item in list");
        return -1;
    }
    if (lastPage === 1) {
        console.log("Only one page");
        return this.itemCount();
    }
    if (pageIndex === lastPage-1) {
        console.log("It's Last page");
        return this.itemCount()-(lastPage - 1)*this.itemsPerPage;
    }
    return this.itemsPerPage;
}

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    const count = this.itemCount()
    if (isNaN(itemIndex)) {
        return -1;
    }
    if (itemIndex < 0 || itemIndex > count){
        return -1;
    }
    if (count === 0) {
        return -1;
    }
    return Math.floor(itemIndex/this.itemsPerPage);
}
const  helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log("page count: ", helper.pageCount()); //should == 2
console.log("Item count: ", helper.itemCount()) //should == 6
console.log("Item on page 0: ", helper.pageItemCount(0)); //should == 4
console.log("Item on page 1: ",helper.pageItemCount(1)); // last page - should == 2
console.log("Item on page 2: ",helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log("Item on page -1: ",helper.pageItemCount(-1)); // should == -1 since the page is invalid
// pageIndex takes an item index and returns the page that it belongs on
console.log("item 5 is on page: ", helper.pageIndex(5)); //should == 1 (zero based index)
console.log("item 2 is on page: ", helper.pageIndex(2)); //should == 0
console.log("item 20 is on page: ", helper.pageIndex(20)); //should == -1
console.log("item -10 is on page: ", helper.pageIndex(-10)); //should == -1
console.log("item 0 is on page: ", helper.pageIndex(0)); //should == -1
console.log("item 4 is on page: ", helper.pageIndex(4)); //should == -1
const  helper1 = new PaginationHelper([], 4);
console.log("item 5 is on page: ", helper1.pageIndex(0)); //should == 1 (zero based index)
console.log("pages count: ", helper1.pageCount());