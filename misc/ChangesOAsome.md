# Changes done on OAsome.blog

## Fixed on OAsome.blog code

All changes marked with `{/* FIXED ... */}`

* favicon.png: used own favicon image (jpg not supported !)
* card.jsx: fixed when no cover pages set
* footer.jsx: fixed to have correct GitHub link
* map.jsx: fixed view of map to be hidden instead of visible, will override header
* posts.jsx: fixed use posts.length, not only one row
* about.jsx, archive.jsx, index.jsx, photos.jsx: used `src/md/about/me.jpg` instead of `src/md/about/up.png`
* index.jsx: fixed when there are no latest articles
* blogTemplate.jsx: fixed to include TripDetails when at least one property is set
* list.jsx: fixed to use center only when coords are set
* 404.jsx: Added 404 page

## Changed content

* updated yarn modules
* changed all occurrencies of `OAsome` with `JochenOnTour` and `Jochen On Tour`
* adapted `src/config/index.js` to my settings

* Changed content in
  * src/config/index.js
  * src/pages/index.jsx
  * src/md/*
