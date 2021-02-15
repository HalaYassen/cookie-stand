'use strict';

const hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

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