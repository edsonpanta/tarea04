function mensajeInicial(){

    /*Swal.fire({
        position: 'top-center',
         icon: 'success',
        title: 'Espere un momento, se está calculando..!!',
        showConfirmButton: false,
        timer: 3000
    });*/

    let timerInterval
    Swal.fire({
        title: 'Calculando...!!!',
        html: 'Espere un momento <b></b>  se está calculando..!!',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        })

}



function calcularPares(numero, textarea){
    textarea.value = "";

    for (let index = 0; index <= numero; index++) {
        if (index % 2 == 0){
            if (!index == 0) {
                textarea.value += index+"; ";
                console.log(index);
            }
        }
    }

}

function main(){

    var numero = document.getElementById("txtNumero").value;
    const textarea = document.getElementById('txtResultado');

     if (!numero == "") {
        if(numero<=0){
            alert("!!!..Ingrese un valor númerico mayor a 0..!!!.");
            return;
        }
         
        if(isNaN(numero)){
            alert("!!!..Ingrese un valor númerico válido..!!!.");
            return;
        }

        mensajeInicial();
        setTimeout(() => { 
           calcularPares(numero, textarea);
        }, 3000);
        
    }

}


