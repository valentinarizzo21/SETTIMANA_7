//ES 1

function saveName(){
    const inputName = document.getElementById('inputName').value;
    if (inputName){
        localStorage.setItem('userName', inputName);
        alert('nome correttamente salvato!');
        document.getElementById('form').reset();
    }else{
        alert('inserisci un nome!');
    }
}

document.getElementById('submitBtn').addEventListener('click', saveName);

function removeName(){
    localStorage.removeItem('userName');
    alert('nome rimosso correttamente!');
}

document.getElementById('deleteBtn').addEventListener('click', removeName);




