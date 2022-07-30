const Book = require('../Models/Book')

//Loading the list of all books
const getAllBooks = async (req, res) => {
  const books = await Book.find();
  try{
    res.status(200).json({books})
  }catch{
    res.status(400).json({msg : "Failed to load all books"})
  }
}

//Adding a new book to the Database
const addBook = async (req, res) =>{
  const book = req.body
  const searchedBook = await Book.findOne({bookName: book.bookName})
  try {
    if(searchedBook){
      res.status(401).json({msg: "Book already exist"})
    } else {
      const newBook = new Book({
        bookName : book.bookName,
        Type: book.Type,
        bookImage: book.bookImage,
        Price: book.Price,
        Description: book.Description,
        Author: book.Author,
      })
      newBook.save()
      res.status(200).json({msg:"The book is successfully added to the Database."})
    }
  }catch {
    res.status(400).json({msg : "Saving failed !"})
  }
}

//Updating a book by its id
const updateBook = async (req,res) =>{
  const id = req.params.id;
  const book = req.body
  try{
    await Book.findByIdAndUpdate(id,book)
    const books = await Book.find()
    res.status(200).json({ msg: "The book is updated.", books })
  } catch {
    res.status(400).json({msg: "Update failed ! "})
  }
}

//Deleting a book 
const deleteBook = async(req, res) => {
  const id = req.params.id
  try {
    await Book.findByIdAndDelete(id)
    const books = await Book.find()
    res.status(200).json({ msg:"The book is deleted successfully from the Database.",books})
  } catch {
    res.status(400).json({ msg:"Delete failed ! "})
  }
}
module.exports = {getAllBooks, addBook, updateBook, deleteBook}