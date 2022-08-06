const plateNumber = document.getElementById('plateNo');
const button = document.getElementById('button');

button.addEventListener('click', send, false);

function send(){
    const plateNo = numberInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({plateNo : plateNo})
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });
}