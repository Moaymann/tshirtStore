let searchInput= document.getElementById('search-input')
let searchbtn= document.getElementById('search')
let midcontent=document.getElementById('middle-content')

let value= searchInput.value

searchInput.addEventListener('input',function(){
    let value= searchInput.value
    if((value.toUpperCase())=='POPULAR TSHIRTS'){
        window.location=`http://127.0.0.1:5500/popular%20t-shirts.html` 
    }
    else if((value.toUpperCase())=='MEN'){
        window.location=`http://127.0.0.1:5500/men.html`
    }
    else if((value.toUpperCase())=='WOMEN'){
        window.location=`http://127.0.0.1:5500/women.html`
    }
    else if((value.toUpperCase())=='NEWCOLLECTION'){
        window.location=`http://127.0.0.1:5500/newcollection.html`
    }
    else if((value.toUpperCase())=='ON SALE'){
        window.location=`http://127.0.0.1:5500/onsale.html`
    }

})


midcontent.addEventListener('click', function(){
    window.location=`http://127.0.0.1:5500/index.html`
})