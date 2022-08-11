window.onload = function() {
    
    loadTxt2();
    loadTxt();
  };

 


function clickCounter()
{
    var anchor = document.querySelector('a');
    anchor.addEventListener('click',function(){
        fetch('link.php');
       
    })
}
clickCounter();

document.getElementById('btn1').addEventListener('click',loadTxt);

function loadTxt()
{
    fetch('count.txt')
    .then(function(response){
    
       
        return response.text();
    })
    .then(function(data){
        data
        document.getElementById('result').innerHTML = data ;
        
    })
}
function loadTxt2()
{
    fetch('count.txt')
    .then(function(response){
    
       
        return response.text();
    })
    .then(function(data){
        for(var step=0;step<data;step++)
        {
            let new_element=document.createElement('img');
            new_element.src = 'Group25.svg';
        
            create.appendChild(new_element);
        }
        
    })
}




var oferr=document.getElementsByClassName("nav-link")[0];
var create=document.getElementById("create")

oferr.addEventListener('click', function (e) {
    e.preventDefault();
    let new_element=document.createElement('img');
    new_element.src = 'Group25.svg';

    create.appendChild(new_element);
    window.location.reload(true);
})

