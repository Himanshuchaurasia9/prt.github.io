const section = document.querySelectorAll("section");
const links = document.querySelectorAll("a");

window.onscroll = ()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            links.forEach(link =>{
                link.classList.remove("active");
                document.querySelector("header nav ul li a[href*="+ id +"]").classList.add("active");
            })
        }
    })
}

