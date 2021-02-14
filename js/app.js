'use strict';
// this array to store hours
let arrOfHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:',
    '5pm:', '6pm:', '7pm:'];

function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function custPerHr(maxCust, minCust) {
    return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
};

function cookiesPerHr(cookiesPerSale, maxCust, minCust) {
    return Math.round(cookiesPerSale * custPerHr(maxCust, minCust));
};

let seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    numCustomer: 0, 
    numCookies:
        function () {
            var cookiesSold = 0;
            var totalCookiesSold = 0;
            var cookiesSoldPerHr = []
            for (var i = 0; i < arrOfHours.length; i++) {
                cookiesSold = cookiesPerHr(seattle.avgCookieSale, seattle.maxCust, seattle.minCust);
                cookiesSoldPerHr.push(cookiesSold);
                totalCookiesSold += cookiesSold;
                console.log(arrOfHours[i]  + totalCookiesSold +  ' Cookie ');
            }
            console.log('Total is :'+totalCookiesSold);
        }
        ,
        render: function(){
            const container=document.getElementById('salmon');
            console.log(container);
            let articleElement=document.createElement('article');
            container.appendChild(articleElement);
            let h2Elemant=document.createElement('h2');
            articleElement.appendChild(h2Elemant);
            let imageElemant=document.createElement('img');
            articleElement.appendChild(imageElemant);
            imageElemant.setAttribute('src','../images/salmon.png');
            let ulElement=document.createElement('ul');
            articleElement.appendChild(ulElement);

            for(let j = 0 ; j<arrOfHours.length;j++)
            {
                let listItem = document.createElement('li');
                ulElement.appendChild(listItem);
                listItem.textContent = arrOfHours[j] ;
                

              }
        }

 }
 
seattle.numCookies();
seattle.render();

 