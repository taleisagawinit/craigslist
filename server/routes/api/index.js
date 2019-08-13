const router = require('express').Router()
const conn = require('../../db')


// this is to get all the categories and subcategories
router.get('/lasvegas', (req, res, next) => {
  const sql = `
  SELECT c.name, c.slug, c.id, p.name as parentName, p.id as parentId, p.slug as parentSlug 
  FROM categories c 
  LEFT JOIN categories p ON c.parent_id = p.id
  `
  conn.query(sql, (error, results, fields) => {
    const cats = results.filter(category => category.parentId === null).map(parent => {
      return {
        id: parent.id,
        slug: parent.slug,
        name: parent.name,
        child_categories: results.filter(child => {
          return child.parentId === parent.id
        })
          .map(child => {
            return {
              id: child.id,
              slug: child.slug,
              name: child.name
            }
          })
      }
    })
    res.json(cats)
  })
})
// this is to get all the posts under any category
router.get('/posts/:subcategory', (req, res, next) => {
  const subcategory = req.params.subcategory
  const sql = `
  SELECT p.* 
    FROM posts p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE c.slug = ?
  `
  conn.query(sql, [subcategory], (error, results, fields) => {
    res.json(results)
  })
 
})

// this is to get the parent category name while displaying posts from a subcategory
router.get('/category/:subcategory', (req, res, next) => {
  const subcategory = req.params.subcategory

  const sql = `
    SELECT name FROM categories WHERE slug = ?
  `
  conn.query(sql, [subcategory], (error, results, fields) => {
    console.log(results[0].name)
    res.json({
      name: results[0].name
    })
  })
})



module.exports = router

