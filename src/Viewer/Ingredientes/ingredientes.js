
function addIngrediente() {
    
    var name = document.getElementById('nome');
    var qtd = document.getElementById('qtd');
    
    if (!name.value || !qtd.value) {
        !qtd.value ? qtd.style.border = '2px solid red' : null; 
        !name.value ? name.style.border = '2px solid red' : null;
        return null;
    }  

    let obj = { 
        name: name.value,
        quantidade: qtd.value,
    }

    var ajax = new XMLHttpRequest();

    // Pega o tipo de requisição: Post e a URL da API
    ajax.open("POST", "http://127.0.0.1:5000/receitas/add", true);
    ajax.setRequestHeader("Content-type", "application/json");


    ajax.onload = (e) => {
        var data = JSON.parse(ajax.responseText);
        
                if (ajax.readyState == 4 && ajax.status == 200) {   // State 4 = operação concluida, status 200 = OK
                    localStorage.setItem('user_id', data.id);
                    window.location.href = '/dash/';
                } 
                else {
                     alert(`Tente novamente: ${data.Erro}`)
                }
        
    }
    
    ajax.onerror = (e) => {
        console.error(ajax.statusText);
    }

    ajax.send(JSON.stringify(obj));

}


function sendReceita() {


}