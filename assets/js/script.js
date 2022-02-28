
let searchInput = document.querySelector("#search-input")
let formatInput = document.querySelector("#format-input")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function(event){
    event.preventDefault()
    console.log(searchInput.value)
    console.log(formatInput.value)
    fetch("https://www.loc.gov/search/?q="+searchInput.value+"&fo=json").then(headers => headers.json())
    .then(response => {
    console.log(response)
    
    })
    
})