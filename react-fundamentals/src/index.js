import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Books from './Book'
/* 
Above import is called named import we can exactly give right name what we given what we mention 
exactly we have to give same with curly braces to extract his correct datas
*/

// import Bananna from './books'
/*
 This above import is export default this we can give any name and we can get same values 
but onething is only one export default happened for one file not more than that.
*/

//1. Normal function to create the documents:
// function Greeting() {
//   return <h1>MyFirst Components</h1>
// }

// 2. Create the function and return the element using javscript react methods:
// function Greeting() {
//   return React.createElement('h1', {}, 'Hello World')
// }

// 3.Adding jsx methods uisng react javascript

// function Greeting() {
//   return (
//     <React.Fragment>
//       <Person />
//       <Message />
//     </React.Fragment>
//   )
// }

// // 4.Nested components Examples
// // One Component:
// const Person = () => <h1>Hello John Doe</h1>
// //Second component:
// const Message = () => {
//   return <h1>Hello! How are you ?</h1>
// }

// 5. Creating one Book store using React from this we will add the images and headings:

//6. Sending props setups in react

const titles = 'Ikigai Hardcover'
const image = '../images/book1.jpg'
const author = 'Francesc Miralles'

// 7.Setup props in dynamic ways and send the props in objects

// const firstbook = {
//   titles: 'Ikigai Hardcover',
//   img: '../images/book1.jpg',
//   author: 'Francesc Miralles',
// }

// const secondBbook = {
//   titles: 'Wings Of Fire',
//   img: 'https://www.itstyle.co.in/cdn/shop/files/wingoffire500.jpg?v=1684556822&width=1426',
//   author: 'A P J Abdul Kalam',
// }

// 8. Multiple approches when we are using props methods

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <Books
//         author={firstbook.author}
//         img={firstbook.img}
//         titles={firstbook.titles}
//       >
//         <button>Click Me</button>
//       </Books>
//       <Books
//         author={secondBbook.author}
//         img={secondBbook.img}
//         titles={secondBbook.titles}
//       />
//       {/* <Books />
//       <Books /> */}
//     </section>
//   )
// }

// 1.This is one method to destrcuture the props
// const Books = (props) => {
//   console.log(props)
//   const { author, img, titles } = props

//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// 2. This is second method to destructure the props
// const Books = ({ author, img, titles }) => {
//   console.log(author, img, titles)
//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <h4>{author} </h4>
//     </article>
//   )

// 8.Children props
/*
   Children props is the special props you cant change anythiing like Camelcase, childrens 
   it should be children it is special prop only render the children content to the 
   components. 

   In the examples we need to show the children elements for example we are going to show the 
   children elements
  */

// const Books = ({ author, img, titles, children }) => {
//   console.log(author, img, titles)
//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <h4>{author} </h4>
//       {children}
//     </article>
//   )
// }

// 9. Simple list uisng Array:

// const Books = ({ author, img, titles, children }) => {
//   const names = ['Narendhar', 'Kumar', 'Elakkiya']
//   const namesList = names.map((name, index) => {
//     console.log(name)
//     return <h1 key={index}>{name}</h1>
//   })
//   return <article className="book">{namesList}</article>
// }

/* When we are using map method to loop the array and display all as a 
list in render method inside any element we can show the list to user */

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <Books
//         author={firstbook.author}
//         img={firstbook.img}
//         titles={firstbook.titles}
//       >
//         <button>Click Me</button>
//       </Books>
//       <Books
//         author={secondBbook.author}
//         img={secondBbook.img}
//         titles={secondBbook.titles}
//       />
//       {/* <Books />
//       <Books /> */}
//     </section>
//   )
// }

// const Books = ({ author, img, titles, children }) => {
//   console.log(author, img, titles)
//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <h4>{author} </h4>
//       {children}
//     </article>
//   )
// }

// 10.Proper List

/* For this I need to create list of object which holds in array and then we map it and show it 
as a proper list 
*/

// const books = [
//   {
//     titles: 'Ikigai Hardcover',
//     img: '../images/book1.jpg',
//     author: 'Francesc Miralles',
//   },
//   {
//     titles: 'Wings Of Fire',
//     img: 'https://www.itstyle.co.in/cdn/shop/files/wingoffire500.jpg?v=1684556822&width=1426',
//     author: 'A P J Abdul Kalam',
//   },
// ]

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {books.map((book, index) => {
//         const { img, titles, author } = book
//         console.log(book)
//         return <Books key={index} img={img} titles={titles} author={author} />
//       })}
//     </section>
//   )
// }

// const Books = ({ author, img, titles, children }) => {
//   console.log(author, img, titles)
//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <h4>{author} </h4>
//       {children}
//     </article>
//   )
// }

// 11. Object as a Prop:
/* Send an whole Object as a prop fro the component */

// const books = [
//   {
//     titles: 'Ikigai Hardcover',
//     img: '../images/book1.jpg',
//     author: 'Francesc Miralles',
//   },
//   {
//     titles: 'Wings Of Fire',
//     img: 'https://www.itstyle.co.in/cdn/shop/files/wingoffire500.jpg?v=1684556822&width=1426',
//     author: 'A P J Abdul Kalam',
//   },
// ]

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {books.map((book, index) => {
//         // const { img, titles, author } = book
//         console.log(book)
//         // One method for sending props as Objects
//         // return <Books key={index} book={book} /> //Entire object to send as a prop

//         // Second method is spreading the object using spread operator
//         return <Books key={index} {...book} />
//       })}
//     </section>
//   )
// }

// const Books = (props) => {
//   console.log(props)

//   // const { author, img, titles } = props.book  //First method to acces the data by props
//   const { author, img, titles } = props //This is the second method to access the data
//   // console.log(author, img, titles)
//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <h4>{author} </h4>
//       {/* {children} */}
//     </article>
//   )
// }

// 12.Event Basics:
// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <EventExample />
//     </section>
//   )
// }

// const EventExample = () => {
//   const handleChange = (e) => {
//     console.log(e)
//   }
//   const handleSubmit = (e) => {
//     alert('Handle button click')
//   }
//   return (
//     <section>
//       <form>
//         <h2>Typical Forms</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: '1rem 0' }}
//           onChange={handleChange}
//         />
//       </form>
//       <button onClick={() => handleSubmit}>Click Me!</button>
//     </section>
//   )
// }

// 13.Form Submission

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <EventExample />
//     </section>
//   )
// }

// const EventExample = () => {
//   const handleChange = (e) => {
//     // This for handling entered data from the user
//     console.log(e)
//     // This console below exactly what we typed
//     console.log(e.target.value)
//     // This console name attribute the input value
//     console.log(e.target.name)
//   }
//   const handleClick = () => {
//     alert('Handle button click')
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form Submitted')
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <h2>Typical Forms</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: '1rem 0' }}
//           onChange={handleChange}
//         />
//         {/* <button type="submit" onClick={handleSubmit}>Submit</button>
//            This approach also we can take and Onsubmit approch also we can take
//         */}
//         <div>
//           <button onClick={handleClick} type="submit">
//             Click Me!
//           </button>
//         </div>
//       </form>
//     </section>
//   )
// }

// 14. Anonymous Function

// 1. Less line of code when we are using Anonymous function
// 2.one liner code

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <EventExample />
//     </section>
//   )
// }

// const EventExample = () => {
//   return (
//     <section>
//       <form>
//         <h2>Typical Forms</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: '1rem 0' }}
//           onChange={(e) => {
//             console.log(e.target.value)
//             // In the above line I still have access to event object and it is very simpler too
//           }}
//         />
//         <button type="submit"> Submit </button>
//         <div>
//           <button type="button" onClick={() => console.log('Click me')}>
//             {/* In the above line also we add anonymous function to onclick
//                 In javascript we write like this
//             */}
//             Click Me!
//           </button>
//         </div>
//       </form>
//     </section>
//   )
// }

// 15.Component features

// 1.Components are indepenednt by default

// const books = [
//   {
//     titles: 'Ikigai Hardcover',
//     img: '../images/book1.jpg',
//     author: 'Francesc Miralles',
//   },
//   {
//     titles: 'Wings Of Fire',
//     img: 'https://www.itstyle.co.in/cdn/shop/files/wingoffire500.jpg?v=1684556822&width=1426',
//     author: 'A P J Abdul Kalam',
//   },
// ]

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       {books.map((book, index) => {
//         console.log(book)
//         return <Books key={index} {...book} />
//       })}
//     </section>
//   )
// }

// In the book components I am going to setup the some function in book components

// const Books = (props) => {
//   console.log(props)
//   const { author, img, titles } = props
//   const displayTitle = () => {
//     console.log(titles)
//   }
//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <button onClick={displayTitle}>Click Me</button>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// 16. Prop Drilling

// 1.React data flows can only pass props down.
// 2.Alternatives Context Api ,redux ,Other state libraries.
// 3.Sending props from parent to children.
// 4.Alternative approches are Context Api , Redux , other state Libraries.

// const books = [
//   {
//     titles: 'Ikigai Hardcover',
//     img: '../images/book1.jpg',
//     author: 'Francesc Miralles',
//   },
//   {
//     titles: 'Wings Of Fire',
//     img: 'https://www.itstyle.co.in/cdn/shop/files/wingoffire500.jpg?v=1684556822&width=1426',
//     author: 'A P J Abdul Kalam',
//   },
// ]

// const Booklist = () => {
//   const someValue = 'cakesNBakes'
//   const displayValue = () => {
//     console.log(someValue)
//   }
//   return (
//     <section className="booklist">
//       {books.map((book, index) => {
//         console.log(book)
//         return <Books key={index} {...book} displayValue={displayValue} />
//       })}
//     </section>
//   )
// }

// const Books = (props) => {
//   console.log(props)
//   const { author, img, titles, displayValue } = props

//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       <button onClick={displayValue}>Click Me</button>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// 17. Complex Examples
// step 1: Initial Setup.
// step 2: Create getbook function in booklist.
// step 3:Accepts id as an argument and finds book.
// step 4:Pass the function down to book component and invoke on the button click.
// step 5:Invoke the function when user clicks the button, pass the id
// step 6: The goal : you should see the same book in the console

// const books = [
//   {
//     titles: 'Ikigai Hardcover',
//     img: '../images/book1.jpg',
//     author: 'Francesc Miralles',
//     id: 1,
//   },
//   {
//     titles: 'Wings Of Fire',
//     img: 'https://www.itstyle.co.in/cdn/shop/files/wingoffire500.jpg?v=1684556822&width=1426',
//     author: 'A P J Abdul Kalam',
//     id: 2,
//   },
// ]

// const Booklist = () => {
//   const getBook = (id) => {
//     const result = books.filter((book) => book.id === id)
//     console.log(result)
//   }
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         console.log(book)
//         return <Books key={book.id} {...book} getBook={getBook} />
//       })}
//     </section>
//   )
// }

// const Books = (props) => {
//   console.log(props)
//   const { author, img, titles, getBook, id } = props
//   // This is the first approch below the code Created function and pass the function as props
//   // const getBookId = () => {
//   //   getBook(id)
//   // }

//   return (
//     <article className="book">
//       <img src={img} alt={titles} />
//       <h2>{titles}</h2>
//       {/* This is the second method that I can get the response data using anonymous function */}
//       <button onClick={() => getBook(id)}>Click Me</button>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// 18.Es6 modules

const Booklist = () => {
  const getBook = (id) => {
    const result = books.filter((book) => book.id === id)
    console.log(result)
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Amazon Book Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          console.log(book)
          return (
            <Books key={book.id} {...book} getBook={getBook} number={index} />
          )
          // Now above book method we created as another components and import in the above Booklist
          // Code so now we learned how to separate component and bring the data to the components
        })}
      </section>
    </>
  )
}

// 19.Local Images

// Create the img folder and then add the

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
