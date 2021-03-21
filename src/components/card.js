import axios from 'axios'
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const spanName = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  img.setAttribute('src', article.authorPhoto)

  headline.textContent = article.headline 
  spanName.textContent = 'By ' + article.authorName 

  imgContainer.appendChild(img)
  author.appendChild(imgContainer)
  author.appendChild(spanName)
  card.appendChild(headline)
  card.appendChild(author)

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let data
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res =>{
      data = res
    })
    .catch(rej => console.log(rej))
  
  setTimeout(()=>{
    data = data.data.articles
    data.bootstrap.forEach((element,index) => {
      return document.querySelector(selector).appendChild(Card(element))
    });
    data.javascript.forEach((element,index) => {
      return document.querySelector(selector).appendChild(Card(element))
    });
    data.jquery.forEach((element,index) => {
      return document.querySelector(selector).appendChild(Card(element))
    });
    data.node.forEach((element,index) => {
      return document.querySelector(selector).appendChild(Card(element))
    });
    data.technology.forEach((element,index) => {
      return document.querySelector(selector).appendChild(Card(element))
    });
  },200)
}

export { Card, cardAppender }
