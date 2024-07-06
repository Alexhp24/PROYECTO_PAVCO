    document.getElementById("registro").addEventListener("click", function() {
        document.querySelector(".login").classList.add("hide");
        document.querySelector(".register").classList.remove("hide");
    });

    document.getElementById("loguear").addEventListener("click", function() {
        document.querySelector(".register").classList.add("hide");
        document.querySelector(".login").classList.remove("hide");
    });

