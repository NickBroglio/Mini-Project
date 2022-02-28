fetch("https://www.loc.gov/search/?q=baseball&fo=json").then(headers => headers.json())
.then(response => {
console.log(response)

})