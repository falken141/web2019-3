function random1d100()
{
    alert(Math.floor( Math.random() * 101 ) + 1);
}

function hantei1()
{
    if(document.getElementById('deme1').value<=70)
    {
        window.location.href = 'soup4.html'; 
    }

    else{
        window.location.href = 'soup5.html';
    }
}