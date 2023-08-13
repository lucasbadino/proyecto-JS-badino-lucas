
let clave3 = "user_actual"




if(localStorage.getItem(clave3)){
    let user_actual = localStorage.getItem(clave3)
    usuarios.forEach(e => {
        if(e.usuario == user_actual){
            let avatar = document.querySelector("#avatar-user")
            let new_avatar = document.createElement("div")
            new_avatar.innerHTML = `
                                    
            <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="${e.img}" class="rounded-circle" height="25"
                alt="Black and White Portrait of a Man" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                  <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="../index.html">Logout</a>
                                </li>
                              </ul>
            
                                    `
                                    avatar.appendChild(new_avatar)
        }
        
    });
}