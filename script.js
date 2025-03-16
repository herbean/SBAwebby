const menuopenbutton = document.quaryselector("#menu-open-button");

menuopenbutton.addeventlistener("click", ()=> {
    // toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu");
});