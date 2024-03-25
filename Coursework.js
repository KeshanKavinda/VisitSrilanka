
let showpopup = document.getElementById("thankyou");
        function show(data){
            if(data.name.value==" "||data.email==" " ||data.comments==" ")
           alert("please fill this form!")
           else
            showpopup.classList.add("show-popup");
            
        }
        function close(){
            showpopup.classList.add("thankyou");
        }