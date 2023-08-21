const Books = (props) => {
  console.log(props)
  const { author, img, titles, getBook, id, number } = props
  console.log(number)
  // This is the first approch below the code Created function and pass the function as props
  // const getBookId = () => {
  //   getBook(id)
  // }

  return (
    <article className="book">
      <img src={img} alt={titles} />
      <h2>{titles}</h2>
      <h4>{author} </h4>
      <span className="number">{`#${number + 1}`}</span>

      {/* This is the second method that I can get the response data using anonymous function */}
      {/* <button onClick={() => getBook(id)}>Click Me</button> */}
    </article>
  )
}

export default Books
