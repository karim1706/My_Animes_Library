window.onload = init

function init()
{  
    function debounce(callback, delay)
    {
        let timer = null;
        return function()
        {
            var context = this;
            var args = arguments;

            clearTimeout(timer);
            timer = setTimeout(function() {
                callback.apply(context, args);
            }, delay)
        }
    }


    let dropdownMenu = document.querySelector(".dropdown-menu");

    let input = document.getElementById('request');

    input.addEventListener("keyup", debounce(function(e)  { 
        let animeChoice = e.target.value;

        if(animeChoice.trim().length >= 3)
        {      
            axios
            .get('https://api.jikan.moe/v4/anime?q='+animeChoice) 
            
            .then(response => {  
               

                    let res = response.data.data; 
                    let container = document.getElementById('container'); console.log(res);
                    let row = document.querySelector('.row');
                   
                                    
                            for(let index = 0; index < 10; index++)
                            {
                                
                                const datas = res[index]; 

                                let idAnime = response.data.mal_id; 
                                
                                let link = document.createElement("a")
                                    link.classList.add("dropdown-item")
                                    link.innerHTML = datas.title

                                link.addEventListener("click", function() {
                                    
                                    // CARDS
                                   
                                    let column = document.createElement('div');
                                        column.setAttribute('class', '.col-lg-3');
                                        column.style.margin = "0 auto";

                                    let card = document.createElement('div'); 
                                        card.setAttribute('class', 'card');
                                        card.style.width = "18rem";
                                        card.style.marginLeft = "1em";
                                        card.style.marginTop = "1em";

                                    let cardBody = document.createElement('div'); 
                                        cardBody.setAttribute('class', 'card-body');

                                    let img = document.createElement('img');
                                        img.setAttribute('class', 'card-img-top');
                                        img.style.height = "286px";
                                        img.src = datas.images.webp.image_url;

                                    let title = document.createElement('h5');
                                        title.setAttribute('class', 'card-title');
                                        title.textContent = datas.title;

                                    let scoreSpan = document.createElement('span');
                                        score = datas.score;

                                    if(score >= 5)
                                    {
                                        scoreSpan.textContent = score;
                                        scoreSpan.setAttribute('class', 'btn btn-success');
                                    }else{
                                        scoreSpan.textContent = score;
                                        scoreSpan.setAttribute('class', 'btn btn-danger');
                                    } 

                                    let episodes = document.createElement('p');
                                    episodes.textContent = datas.episodes + " " + ' épisodes';

                                    let infos = document.createElement('button');
                                        infos.innerHTML = "More infos";
                                        infos.setAttribute('class', "btn btn-info");
                                        infos.setAttribute('data-toggle', 'modal');
                                        infos.setAttribute('data-target', '#exampleModal');

                                    // MODAL
                                    infos.addEventListener('click', () => {
                                        let modalHeader = document.querySelector('.modal-header');
                                        let modalTitle = document.querySelector('.modal-title');
                                        let modalSynopsis = document.querySelector('.modal-synopsis');

                                        modalHeader.style.backgroundColor = 'lightBlue';
                                        modalTitle.innerHTML = datas.title;
                                        modalTitle.style.color = "white";
                                        modalSynopsis.innerHTML = "<strong>SYNOPSIS  :</strong>" + " " + " " + datas.synopsis;
                                       
                                        axios
                                        .get(`https://api.jikan.moe/v4/${idAnime}/anime`)
                                        .then(response => { console.log(response);

                                        let res2 = response.data;
                                        let animeGenre = res2.genres.name;  console.log(animeGenre); 
                                        let duration = res2.duration;
                                        let source = res2.source;
                                        let trailer = res2.trailer.url;

                                        let modalGenre = document.querySelector('.modal-genre'); 
                                            modalGenre.innerHTML = "<strong>ANIME GENRE :</strong>" + " " ; 

                                        let modalDuration = document.querySelector('.modal-duration'); console.log(modalDuration);
                                            modalDuration.innerHTML = "<strong>DURATION :</strong>" + " " + duration;

                                        let modalSource = document.querySelector('.modal-source');
                                            modalSource.innerHTML = "<strong>SOURCE :</strong>" + " " + source;

                                        let modalTrailer = document.querySelector('.modal-trailer');
                                            modalTrailer.innerHTML = "<strong>TRAILER :</strong>" + " " + trailer;

                                       for(let i = 0; i < animeGenre.length; i++)   
                                       {
                                            let genreInfo = document.createElement('span');
                                                genreInfo.setAttribute('class', 'bg-info');
                                                genreInfo.style.color = "white";
                                                genreInfo.style.marginLeft = "1em";
                                                genreInfo.style.padding = "1px";
                                                genreInfo.style.borderRadius = "3px";

                                            
                                            genreInfo.innerHTML =  animeGenre[i].name + " "; 
                                            modalGenre.append(genreInfo);
                                       } 
                                           
                                            

                                        })

                                    })


                                    container.append(row);
                                    row.append(column);
                                    column.append(card);
                                    card.append(img, cardBody);
                                    cardBody.append(title, scoreSpan, episodes, infos);
                                    
                                })

                                dropdownMenu.appendChild(link)

                            } 
                    
            })
            .catch(error => {
                console.log(error)
             })
        }else if(animeChoice.trim().length == 0){
            dropdownMenu.innerHTML = ''; 
        }
    }, 300))
}  
    
  
                                  /* 

                                    let textCard = document.createElement('p');
                                    textCard.setAttribute('class', 'card-text');
                    /*  ANIMES CARDS  */
                
                 /*  let title = document.getElementById('title');
                    title.textContent = res.title;

                    let image = document.getElementById('image');
                    image.src = res.image_url;

                   

                    let scoreSpan = document.getElementById('score');
                    score = res.score;

                    if(score >= 5)
                    {
                        scoreSpan.textContent = score;
                        scoreSpan.setAttribute('class', 'btn btn-success');
                    }else{
                        scoreSpan.textContent = score;
                        scoreSpan.setAttribute('class', 'btn btn-danger');
                    } 

             })
         }*/
      