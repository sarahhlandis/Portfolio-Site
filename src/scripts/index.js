function nightMode() {
     var element = document.body;
     element.classList.toggle("dark-mode");
     if(element.classList.contains("dark-mode")){
        localStorage.setItem("toggle","yes");
     }else{
        localStorage.setItem("toggle","no");
     }
    }
