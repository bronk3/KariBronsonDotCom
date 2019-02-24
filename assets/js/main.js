['resize', 'load'].forEach(type => {
    window.addEventListener(type, ()=> {
        let vh = window.innerHeight;
    document.body.style.height = `${vh}px`;
    });  
});