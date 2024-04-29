import Recension from './Recension.jsx'


function Book({title,author,genre,pages,recensions}) {

  return (
    <>
    <h2>Book</h2>
    <div>
      {title}
    </div>
    <div>
    {author}
    </div>
    <div>
      {genre}
    </div>
    <div>
      {pages} pages
    </div>
    {recensions.map((recension)=> (<Recension title={recension.title} body={recension.body}></Recension>))}
    </>
  )
}

export default Book
