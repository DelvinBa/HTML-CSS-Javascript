let check = document.getElementsByClassName("check");
let lev = document.getElementsByClassName('lev');
let rocket = document.getElementById('rocket');
let launch = document.getElementById('launch');
if( document.getElementById("pw").value !== 'TrustNo1' ) {
    for(let x = 0; x<check.length; x++)
        check[x].disabled=true;
    for( let i = 0; i<lev.length; i++)
        lev[i].disabled=true;
}

 document.getElementById('ok').addEventListener('click', function (){
    if (document.getElementById("pw").value === 'TrustNo1'){
        for(let x = 0; x<check.length; x++)
            check[x].disabled=false;
        for( let i = 0; i<lev.length; i++)
            lev[i].disabled=false;
        document.getElementById('pw').disabled = true;
        document.getElementById('ok').disabled = true;
    }
 });
launch.addEventListener('click', function () {
    rocket.animate([
        { // current position of your rocket
            left: '20vh',
            top: '75vh'
        },
        { //  final position of your rocket
            left: '550px',
            top: '-100px'
        }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    })
});

