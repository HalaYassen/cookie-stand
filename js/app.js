'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookieShop = [];

let parent=document.getElementById('salmon');
console.log(parent);
let imageElement =document.createElement('img');
parent.appendChild(imageElement);
imageElement.setAttribute('src','../images/salmon.png');

function CookieShop(location, minCust, maxCust, avrageCookiesSale) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrageCookiesSale = avrageCookiesSale;
  this.cookiesSoldPerHr = [];
  cookieShop.push(this);
}

CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.avrageCookiesSale * this.custPerHr());
};

CookieShop.prototype.render = function () 
{
  
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  let cookiesSold = 0;
  let totalCookiesSold = 0;

  for (let i = 0; i < hours.length; i++) {

    cookiesSold = this.cookiesPerHr();

    let tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);

    this.cookiesSoldPerHr.push(cookiesSold);

    totalCookiesSold += cookiesSold;
  }
  let table = document.getElementById('salmon');
  let tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  trElement.appendChild(tdElement);
  table.appendChild(trElement);
};

// Header Row Function
  function makeHeaderRow() { 
  let theadElement = document.createElement('thead');
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  for (let i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  let table = document.getElementById('salmon');
  thElement = document.createElement('th');
  thElement.textContent = 'Totals/daily ';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);

  table.appendChild(theadElement);
}

// Totals in the bottom
  function totalCookiesPerHour() { 
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = 'Totals in a hour';
  trElement.appendChild(thElement);

  let totalCookie = 0;

  for (let i = 0; i < hours.length; i++) {
    let totalCookies = 0;
    for (let j = 0; j < cookieShop.length; j++) {
      totalCookies += cookieShop[j].cookiesSoldPerHr[i];
      totalCookie += cookieShop[j].cookiesSoldPerHr[i];
    }
    let tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);

  }
  let table = document.getElementById('salmon');
  let tdElement = document.createElement('td');
  tdElement.textContent = totalCookie;
  trElement.appendChild(tdElement);
  table.appendChild(trElement);
}


new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

// to get all location in table
function allShopes() {
  for (let i in cookieShop) {
    cookieShop[i].render();
  }
}

allShopes();
makeHeaderRow();
totalCookiesPerHour();









/*
function random(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

const seattle = {
  locationName:'Seattle',
  minCustomers : 23,
  maxCustomers:65,
  avgCookies:6.3,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  //claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
            this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    let parent= document.getElementById('salmon');
    console.log(parent);
    let article= document.createElement('article')
    parent.appendChild(article);
    let imageEl =document.createElement('img');
    article.appendChild(imageEl);
    imageEl.setAttribute('src','../images/salmon.png');

    let shopName = document.createElement('h2');
    article.appendChild(shopName);
    shopName.textContent = this.locationName;
    let unorderedList=document.createElement('ul');
    article.appendChild(unorderedList);
     
    for(let i =0;i<hours.length;i++){
      // create li
      let listItem=document.createElement('li');
      unorderedList.appendChild(listItem);
      listItem.textContent = `${hours[i]} ${this.cookiesEachHour[i]} cookies`
    }

    // create total elemnt:
    let totalItem = document.createElement('li');

    unorderedList.appendChild(totalItem);

    totalItem.textContent=`total: ${this.total} cookies`;
    
  }

}


seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.render();
console.log(seattle);


//Tokyo location


const tokyo = {
  locationName:'Tokyo',
  minCustomers : 3,
  maxCustomers:24,
  avgCookies:1.2,
  customersEachHour:[],
  cookiesEachHour:[],
  total: 0,

  // claculate a random number of customers every hour
  calcCustomersEachHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calcCookiesEachHour:function(){
    for(let i=0;i<hours.length;i++){
      // console.log(this.customersEachHour[i]);
      this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));

      this.total+=this.cookiesEachHour[i]
    }
  },
  render:function(){
    let parent= document.getElementById('salmon');
    console.log(parent);
    let article= document.createElement('article')
    parent.appendChild(article);

    let shopName = document.createElement('h2');
    article.appendChild(shopName);
    shopName.textContent = this.locationName;
    let unorderedList=document.createElement('ul');
    article.appendChild(unorderedList);
     
    for(let i =0;i<hours.length;i++){
      // create li
      let listItem=document.createElement('li');
      unorderedList.appendChild(listItem);
      listItem.textContent = `${hours[i]} ${this.cookiesEachHour[i]} cookies`
    }

    // create total elemnt:
    let totalItem = document.createElement('li');

    unorderedList.appendChild(totalItem);

    totalItem.textContent=`total: ${this.total} cookies`;
    
  }

}


tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.render();
console.log(tokyo);



//Dubai
const dubai = {
    locationName:'dubai',
    minCustomers : 3,
    maxCustomers:24,
    avgCookies:1.2,
    customersEachHour:[],
    cookiesEachHour:[],
    total: 0,
  
    // claculate a random number of customers every hour
    calcCustomersEachHour:function(){
      for(let i=0;i<hours.length;i++){
        this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
      }
    },
  
    calcCookiesEachHour:function(){
      for(let i=0;i<hours.length;i++){
        // console.log(this.customersEachHour[i]);
        this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
  
        this.total+=this.cookiesEachHour[i]
      }
    },
    render:function(){
      let parent= document.getElementById('salmon');
      console.log(parent);
      let article= document.createElement('article')
      parent.appendChild(article);
  
      let shopName = document.createElement('h2');
      article.appendChild(shopName);
      shopName.textContent = this.locationName;
      let unorderedList=document.createElement('ul');
      article.appendChild(unorderedList);
       
      for(let i =0;i<hours.length;i++){
        // create li
        let listItem=document.createElement('li');
        unorderedList.appendChild(listItem);
        listItem.textContent = `${hours[i]} ${this.cookiesEachHour[i]} cookies`
      }
  
      // create total elemnt:
      let totalItem = document.createElement('li');
  
      unorderedList.appendChild(totalItem);
  
      totalItem.textContent=`total: ${this.total} cookies`;
      
    }
  
  }
  
  
  dubai.calcCustomersEachHour();
  dubai.calcCookiesEachHour();
  dubai.render();
  console.log(dubai);


  //Paris
const paris = {
    locationName:'Paris',
    minCustomers : 3,
    maxCustomers:24,
    avgCookies:1.2,
    customersEachHour:[],
    cookiesEachHour:[],
    total: 0,
  
    // claculate a random number of customers every hour
    calcCustomersEachHour:function(){
      for(let i=0;i<hours.length;i++){
        this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
      }
    },
  
    calcCookiesEachHour:function(){
      for(let i=0;i<hours.length;i++){
        // console.log(this.customersEachHour[i]);
        this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
  
        this.total+=this.cookiesEachHour[i]
      }
    },
    render:function(){
      let parent= document.getElementById('salmon');
      console.log(parent);
      let article= document.createElement('article')
      parent.appendChild(article);
  
      let shopName = document.createElement('h2');
      article.appendChild(shopName);
      shopName.textContent = this.locationName;
      let unorderedList=document.createElement('ul');
      article.appendChild(unorderedList);
       
      for(let i =0;i<hours.length;i++){
        // create li
        let listItem=document.createElement('li');
        unorderedList.appendChild(listItem);
        listItem.textContent = `${hours[i]} ${this.cookiesEachHour[i]} cookies`
      }
  
      // create total elemnt:
      let totalItem = document.createElement('li');
  
      unorderedList.appendChild(totalItem);
  
      totalItem.textContent=`total: ${this.total} cookies`;
      
    }
  
  }
  
  
  paris.calcCustomersEachHour();
  paris.calcCookiesEachHour();
  paris.render();
  console.log(paris);
  

  //lima location
  
const lima = {
    locationName:'Lima',
    minCustomers : 3,
    maxCustomers:24,
    avgCookies:1.2,
    customersEachHour:[],
    cookiesEachHour:[],
    total: 0,
  
    // claculate a random number of customers every hour
    calcCustomersEachHour:function(){
      for(let i=0;i<hours.length;i++){
        this.customersEachHour.push(random(this.minCustomers,this.maxCustomers));
      }
    },
  
    calcCookiesEachHour:function(){
      for(let i=0;i<hours.length;i++){
        // console.log(this.customersEachHour[i]);
        this.cookiesEachHour.push(Math.floor( this.customersEachHour[i]*this.avgCookies));
  
        this.total+=this.cookiesEachHour[i]
      }
    },
    render:function(){
      let parent= document.getElementById('salmon');
      console.log(parent);
      let article= document.createElement('article')
      parent.appendChild(article);
  
      let shopName = document.createElement('h2');
      article.appendChild(shopName);
      shopName.textContent = this.locationName;
      let unorderedList=document.createElement('ul');
      article.appendChild(unorderedList);
       
      for(let i =0;i<hours.length;i++){
        // create li
        let listItem=document.createElement('li');
        unorderedList.appendChild(listItem);
        listItem.textContent = `${hours[i]} ${this.cookiesEachHour[i]} cookies`
      }
  
      // create total elemnt:
      let totalItem = document.createElement('li');
  
      unorderedList.appendChild(totalItem);
  
      totalItem.textContent=`total: ${this.total} cookies`;
      
    }
  
  }
  
  
  lima.calcCustomersEachHour();
  lima.calcCookiesEachHour();
  lima.render();
  console.log(lima);
  */

