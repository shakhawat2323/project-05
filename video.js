// crate  a localCategories
const createlocaldata = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayData(data.categories))
    .catch((error) => console.log(error))

}
// removie da new class
const removeactiveclass = () =>{
    const buttone =document.getElementsByClassName('category_id')
    for(let btn of buttone){
        btn.classList.remove('new')
    }
}


const localcategorisvideoid = (id) =>{
    // alert(id)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        removeactiveclass()
        const activebtn = document.getElementById(`btn${id}`);
        activebtn.classList.add("new");

        localVideo(data.category)
    })
    .catch((error) => console.log(error))
}

const videoIdq = async (videoid) =>{
    // console.log(videoId)
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoid}`
    // console.log(url)
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    // 
    displaydeteles(data.video)
}

const displaydeteles = (video) =>{
    

    const detelesecontiner = document.getElementById('modal-containt');
    // console.log(detelesecontiner)

    detelesecontiner.innerHTML= `
    <img src= ${video.thumbnail} />
    <p>${video.description}</p>
    `

    // document.getElementById('showmodalData').click();
    document.getElementById('coustommodul').showModal();


}


// create a displayData
const displayData = (datalive) =>{
    datalive.forEach((item) =>{
        console.log(item)
        const buttonContiner = document.getElementById('categories');
        // create a button
        const buttondiv = document.createElement("div");
        buttondiv.innerHTML=`
        <button class="btn category_id" id="btn${item.category_id}" onclick="localcategorisvideoid(${item.category_id})">
        ${item.category}
        </button 
        `
        // button.classList='btn';
        // button.onclick = () =>{} 
        // button.innerText=item.category;
        // add button to categories Conteinar
        buttonContiner.append(buttondiv)

    })
}

document.getElementById('searchinput').addEventListener("keyup" ,(e)=>{
    console.log(e.target.value)
})

createlocaldata()
