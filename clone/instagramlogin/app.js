const btn= document.querySelector('btn');
btn.addEventListener("1click", (e)=>{

    if(btn.checked == true){
        document.body.setAttribute("data-theme", "dark");
    } else{
        document.body.setAttribute("data-theme", "");
    }
}


);