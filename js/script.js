

function formSubmit(){

const loading = document.querySelector("#loading");
const success = document.querySelector("#success");
const error = document.querySelector("#error");

loading.classList.remove("d-none")
success.classList.add("d-none")
error.classList.add("d-none")

const nome = document.querySelector("#nome").value;
const cognome = document.querySelector("#cognome").value;
const cellulare = document.querySelector("#cellulare").value;
const quanti = document.querySelector("#quanti").value;
const giorni= document.querySelector("#giorni").value;
const turno= document.querySelector("#turno").value;
const textarea= document.querySelector("#textarea").value;
// const termini= document.querySelector("#termini").value;

 setTimeout(function(){
    $.ajax({
        url:"https://cieffe-web-backend.vercel.app/api/ombra/reservations" ,
        type: "POST",
        data:{
            name:nome,
            surname:cognome,
            mobile:cellulare,
            people:quanti,
            date:giorni,
            turn:turno,
            message:textarea
        },
        success: function(){
            loading.classList.add("d-none")
            success.classList.remove("d-none")
            error.classList.add("d-none")

            setTimeout(function() {
                success.classList.add("d-none")
            }, 1000)
        },
        error: function(){
            loading.classList.add("d-none")
            success.classList.add("d-none")
            error.classList.remove("d-none")
        },
    })
},500);





}
