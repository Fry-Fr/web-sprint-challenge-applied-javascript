const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const Date = document.createElement('span')
  const h1 = document.createElement('h1')
  const Temp = document.createElement('span')

  header.classList.add('header')
  Date.classList.add('date')
  Temp.classList.add('temp')

  Date.textContent = date
  h1.textContent = title
  Temp.textContent = temp

  header.appendChild(Date)
  header.appendChild(h1)
  header.appendChild(Temp)
  
  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = Header('Title','3/19/21','49Fahrenheit')
  return document.querySelector(selector).appendChild(header)
}

export { Header, headerAppender }
