function timeData(time){
    const hour = parseInt(time / 3600);
    let remening = parseInt(time % 3600)
    const minit = parseInt(remening / 60);
    remening = remening %60;

    return `${hour} hour ${minit} minit ${remening} senend `
}


function local(serchtext = ""){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${serchtext}`)
    .then(res => res.json())
    .then(data => localVideo(data.videos))
    .catch(error => console.log('catch is error',error))
}



const localVideo = (item) =>{
    const videoid = document.getElementById('videosData');
    videoid.innerHTML= " ";
    if(item.length ===0){
        videoid.classList.remove('grid')
        videoid.innerHTML=`
        <div class="main-h-[300px] w-full py-32 flex flex-col justify-center items-center gap-5" >
        <img src="img/Icon.png">
        <p class="text3xl font-semibold text-center"> No Cantent Here in this Categery</p>
        </div>
        `
        return 0;
    }
    else{
        videoid.classList.add('grid')

    }
    item.forEach((vide)=>{

        // console.log(vide)
        const div = document.createElement('div');
        div.classList="card card-compact bg-base-100"
        div.innerHTML = `
                    <figure class="h-[200px] relative">
                        <img
                        class="w-full h-full object-cover"
                        src= ${vide.thumbnail}
                        alt="Shoes" />
                        ${
                            vide.others.posted_date?.length === 0 ? "" : `<span class=" right-2 bottom-2 bg-black tex-xs text-white p-1 rounded absolute" > ${timeData(vide.others.posted_date)} </span>`
                            
                        }
                    </figure>
                    <div class="px-0 py-2 flex gap-2">
                    <div>
                    <img class="w-10 h-10 rounded-full object-cover" src=${vide.authors[0].profile_picture} />
                    </div>
                    <div>
                     <p class="font-bold">${vide.title} </P>
                     <div class="flex items-center gap-2">
                    <P class="text-gray-400"> ${vide.authors[0].profile_name}</p>

                    ${
                        vide.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>' : ""
                    }
                    
                     </div>
                    </div>
                    
                    

                    </div>
                    <p> <button onclick="videoIdq('${vide.video_id}')" class="btn btn-sm btn-error">details</button> </p>
        `
        videoid.append(div)
    })
    

}
// localVideo();
local();