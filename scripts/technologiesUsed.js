let technologies = [
    {
        "description": "Java Script",
        "source": "./images/javascript-logo-png-transparent.png", 
        "alt": "JavaScript logo"
    },
    {
        "description": "jQuery",
        "source": "./images/jquery-logo-png-png.png", 
        "alt": "jQuery logo"
    },
    {
        "description": "Logi Studio",
        "source": "./images/logi-analytics-logo.png", 
        "alt": "Logi Analytics logo"
    },
    {
        "description": "PhpStorm",
        "source": "./images/PhpStorm_Icon.png", 
        "alt": "Php Storm logo"
    },
    {
        "description": "pgAdmin",
        "source": "./images/PostgreSQL-Logo.wine.png", 
        "alt": "pgAdmin logo"
    },
    {
        "description": "Visual Studio Code",
        "source": "./images/vscode.png", 
        "alt": "Visual Studio Code logo"
    },
    {
        "description": "Vue.js",
        "source": "./images/vuejs.png", 
        "alt": "Vue.js logo"
    },
    {        
        "description": "HTML 5",
        "source": "./images/html5-logo-png-transparent.png", 
        "alt": "HTML logo"
    },
    {
        "description": "CSS 3",
        "source": "./images/css3-logo-png-transparent.png", 
        "alt": "CSS logo"
    },
    {        
        "description": "Bootstrap",
        "source": "./images/bootstrap-img.png", 
        "alt": "bootstrap logo"
    },
    {
        "description": "GitHub",
        "source": "./images/GitHub-Mark-120px-plus.png", 
        "alt": "GitHub logo"
    },
    {
        "description": "Figma",
        "source": "./images/figma-1-logo-png-transparent.png", 
        "alt": "Figma logo"
    }
];
// (function(){

    let skillsAndTechnologies = document.getElementsByClassName("skills-and-technologies");
    let skillSetToBeAppended = [];
    // let skillsCard;
    // console.log(skillsAndTechnologies[0]);
    console.log(technologies.length);
    for (let i = 0; i < technologies.length; i++){
        
        let div = document.createElement("div");
        let card = document.createElement("div");
        let cardHeader = document.createElement("div");
        let cardImage = document.createElement("img");

        // card.className = "card";
        div.classList.add("mb-3", "col-lg-2", "col-6", "d-flex", "align-items-center", "justify-content-center")
        card.className = "card";
        cardHeader.classList.add("card-header", "text-center", "align-middle");
        cardImage.classList.add("img-fluid", "p-2");

        div.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardImage);

        cardHeader.innerHTML = `${technologies[i].description}`;
        cardImage.setAttribute("src",`${technologies[i].source}`);
        cardImage.setAttribute("alt",`${technologies[i].alt}`);
        




        // cardHeader.innerHTML = `${technologies[i].description}`;
        // document.body.appendChild(cardHeader)
        // var div = document.createElement("div");
        // div.className = "finalBlock";
        // div.innerHTML = technologies[i].description;
                // let skillsCard =   `<div class="card mb-3 col-lg-4 col-6 d-flex align-items-center justify-content-center">
                //             <div class="card-header">${technologies[i].description}</div>
                //             <img src="${technologies[i].source}" class="img-fluid" alt="${technologies[i].alt}">
                //         </div>`;
        // document.body.appendChild(div);
        // skillsAndTechnologies[0].innerHTML = skillsCard;
        // skillsAndTechnologies[0].appendChild(skillsCard);
        skillsAndTechnologies[0].appendChild(div);
    }
//     var text = ["text1", "tex2", "text3", "text4"];
// for(var i = 0; i < text.length; i += 1) {
//     var div = document.createElement("div");
//     div.className = "finalBlock";
//     div.innerHTML = text[i];
//     document.body.appendChild(div);
// }
        // console.log(technologies[i].description)
        // let skillsCard =   `<div class="card" style="width: 18rem;">
        //                     <div class="card-header">${technologies[i].description}</div>
        //                     <img src="${technologies[i].source}" class="card-img-top" alt="${technologies[i].alt}">
        //                 </div>`;
        // skillsAndTechnologies.appendChild(skillsCard);
        // console.log(skillsAndTechnologies);
        // skillSetToBeAppended.push(skillsCard)                    
// })();
// skillSetToBeAppended.join(",");
// skillsAndTechnologies.innerHTML = skillSetToBeAppended.join(",");
// console.log(skillSetToBeAppended)