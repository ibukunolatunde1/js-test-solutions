class ShoppingCart{
    constructor(items = {}, total = 0){
      this.total = total;
      this.items = items;
    }
  
    addItem(itemName, quantity, unitPrice){
      this.items[itemName] = quantity;
      this.total += quantity * unitPrice;
    }
  
    removeItem(itemName, quantity, price){
      this.items[itemName] -= quantity;
      this.total -= quantity * price;
    }
  
    checkout(money){
      return (money < this.total) ? 'Cash paid not enough' : (money - this.total); 
    }
  }
  
  class Shop extends ShoppingCart{
    constructor(items, total, quantity = 100){
      super(items, total);
      this.quantity = quantity;
    }
    
    removeItem(){
      this.quantity--;
    }
  }