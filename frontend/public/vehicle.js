const plateNumber = document.getElementById('PlateNo');
const button = document.getElementById('button');

button.addEventListener('click', send, false);

function send(){
    const PlateNumber = plateNumber;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({PlateNumber : PlateNumber})
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });
}