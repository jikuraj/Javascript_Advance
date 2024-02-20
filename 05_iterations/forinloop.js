//for in loop

const obj={
    js:"javascript",
    cpp:"c++",
    rb:"rubby",
    py:"python"
}
for (const key in obj) {
    // console.log(key);
    /**result
js
cpp
rb
py
     */
}
for (const key in obj) {
    // console.log(`${key} is shotcut for ${obj[key]}`);
    /**result
js is shotcut for javascript
cpp is shotcut for c++
rb is shotcut for rubby        
py is shotcut for python
     */
}

//can we apply for in loop on map
//answer is no because map is not itritable by for in loop we can use for of loop for this

const map=new Map();
map.set('BR','Bihar')
map.set('DL','Delhi')
map.set('TN','Tamil nadu')
map.set('BR','Bihar')

// for (const [key,val] in map) {
//     console.log(key);
// }