document.addEventListener('load', members());

function members() {
    for (let i = 0; i < founders.length; i++) {

        var instagram = true;
        var github = true;
        var mail = true;
    
        if(founders[i].social.instagram != ""){
            instagram = true
        } else{ instagram = false}
    
        if(founders[i].social.github != ""){
            github = true
        } else{ github = false}
    
        if(founders[i].social.mail != ""){
            mail = true
        } else{ mail = false}
    
        var list = document.querySelector('.co-founders ul');
        var item = `<li class="founder">
                         <div class="img">
                             <img src="${founders[i].img}" alt="">
                        </div>
    
                     <div class="info">
                             <div class="inter">
                                 <h3>${founders[i].name}</h3>
                                 <strong>${founders[i].role}</strong>
                              </div>
    
                            <link rel="stylesheet"
                                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    
                         <div class="link">
                            <ul>
                                ${mail?  `<li><a href="mailto:${founders[i].social.mail}"><i class="fa-regular fa-envelope"></i></a></li>`: `<li style="display: none;><a href="#"><i class="fa-regular fa-envelope"></i></a></li>`}
                                ${ instagram ?  `<li><a href="${founders[i].social.instagram}"><i class="fa-brands fa-instagram"></i></a></li>`: `<li  style="display: none;"><a href="#"><i class="fa-brands fa-instagram"></i></a></li> `}
                                ${ github ?  `<li><a href="${founders[i].social.github}"><i class="fa-brands fa-github"></i></a></li>`: `<li  style="display: none;"><a href="#"><i class="fa-brands fa-github"></i></a></li> `}
    
                            </ul>
                    </div>
                </div>
            </li>`
    
    
        list.insertAdjacentHTML("beforeend", item);
    }
}