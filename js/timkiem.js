var productbox = document.querySelector('.kqtk')
var searchInput = document.querySelector('.container input')
searchInput.addEventListener('input', function (e) {

    let txtSearch = e.target.value.trim()

    let listProductDOM = document.querySelectorAll('.sp-box')
    listProductDOM.forEach(item => {

        if (item.innerText.includes(txtSearch)) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })
})
searchInput.addEventListener('focusin', function (e) {
    let box = document.querySelector('.kqtk')
    box.classList.remove('hide')
})
function dong() {

    let box = document.querySelector('.kqtk')
    box.classList.add('hide')
}