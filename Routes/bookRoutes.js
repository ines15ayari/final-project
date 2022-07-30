const express = require ('express')
const router = express.Router()
const {
  getAllBooks,
  addBook, 
  updateBook, 
  deleteBook
} = require ('../Controllers/bookController')

router.get("/Get",getAllBooks)
router.post("/Add",addBook)
router.put("/Update/:id",updateBook)
router.delete("/Delete/:id",deleteBook)

module.exports = router;