const logoContainer = document.getElementById('connect-logo-container');

const projectImg = document.getElementsByClassName('project-img');
const gallery = document.getElementsByClassName('gallery');

function showFollowLogos() {
    logoContainer.style.display = "flex";
}



document.addEventListener('click', handleClicks);

function handleClicks(event) {
    let target = event.target;
    let fetchId = target.id;
    let fetchClass = target.classList.value;

    console.log("Target:", target);
    console.log("Id:", fetchId);
    console.log("Class:", fetchClass);

    if (fetchId == 'follow-me') {
        showFollowLogos();
    } 
}

// const

for( let eachImg of gallery){
    eachImg.addEventListener('mouseover', (event)=>{
        console.log("hovered",event.target.id);
        let fetchid = event.target.id;
        // if()
    });
}


