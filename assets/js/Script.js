var Timer = new Date();
var btn = document.getElementById('btn');
var mintSection = document.getElementById('mintSection');
var hourSection = document.getElementById('hourSection');
btn.addEventListener('click', function () {
    var m = document.getElementById('miutValue');
    var h = document.getElementById('hourValue');
    Timer = new Date(Timer.getFullYear(), Timer.getMonth(), 25, Timer.getHours() + parseInt(h.value), Timer.getMinutes() + parseInt(m.value), Timer.getSeconds() );
    console.log(Timer)
    if(parseInt(m.value) > 0 || parseInt(h.value) > 0 ) {
        mintSection.style.display = "none";
        hourSection.style.display = "none";
        var x = setInterval(function () {
            var now = new Date();
            var deff = Timer - now;
            var hours = document.getElementById('hours').innerHTML = Math.floor(deff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
            var mint = document.getElementById('mint').innerHTML = Math.floor(deff % (60 * 60 * 1000) / (60 * 1000))
            var seconds = document.getElementById('seconds').innerHTML = Math.floor(deff % (60 * 1000) / 1000)
           
          
            if (hours == 0  &&  mint  == 0 && seconds == 0 ) {
                console.log('hahha')
                mintSection.style.display = "block";
                hourSection.style.display = "block";
                clearInterval(x);
                          if (hours == 0  &&  mint  == 0 && seconds == 0) {
                console.log('hahha')
                mintSection.style.display = "block";
                hourSection.style.display = "block";
                clearInterval(x);
                $('#audio').attr('src', 'assets/audio/1.wav');
               
                
            }
               
                
            }
                // console.log(`${hours} : ${mint} : ${seconds}`)
        }, 1000)

    //    var x = function foo() {
    //         // do stuff
    //         // ...
    //         var now = new Date();
    //         var deff = Timer - now;
    //         //    var month = document.getElementById('month').innerHTML = Math.floor(deff / (30 * 24 * 60 * 60 * 1000))
    //         //    var days  = document.getElementById('days').innerHTML = Math.floor(deff % (30 * 24 * 60 * 60 * 1000) / ( 24 * 60 * 60 * 1000))
    //         var hours = document.getElementById('hours').innerHTML = Math.floor(deff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
    //         var mint = document.getElementById('mint').innerHTML = Math.floor(deff % (60 * 60 * 1000) / (60 * 1000))
    //         var seconds = document.getElementById('seconds').innerHTML = Math.floor(deff % (60 * 1000) / 1000)
    //         // and schedule a repeat
    //         setTimeout(foo, 1000);
    //      }
       
    //      // start the cycle
    //      foo();
        //  clearInterval(x)
    }




})