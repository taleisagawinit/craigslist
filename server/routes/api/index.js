const router = require('express').Router()
const conn = require('../../db')



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
    console.log(cats)
    res.json(cats)
  })
})

// let param = props.match.params.subcategory 

// router.get(`/${param}`, (req, res, next) => {
//   const sql = `
//   SELECT * 
//     FROM subcategories
//     WHERE slug LIKE '%${param}%'
//   `
//   conn.query(sql, (error, results, fields) => {
//     return results
//   })
//   res.json(results)
// })





module.exports = router

