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

function hantei2()
{
    if(document.getElementById('deme2').value<=70)
    {
        window.location.href = 'soup11.html'; 
    }

    else{
        window.location.href = 'soup23.html';
    }
}

function hantei3()
{
    if(document.getElementById('deme3').value<=70)
    {
        window.location.href = 'soup13.html'; 
    }

    else{
        window.location.href = 'soup24.html';
    }
}

function hantei4()
{
    if(document.getElementById('deme4').value<=45)
    {
        window.location.href = 'soup15.html'; 
    }

    else{
        window.location.href = 'soup25.html';
    }
}