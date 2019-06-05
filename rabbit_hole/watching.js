//TO DO: Fix overlay problem when clicked 
//Make static audio play, probably should download (kills then takes you to the beginning)

NyarlathotepCount = 0;

window.onload = function(){
    var Nyarlathoteps = [document.getElementById("AiNsLeYiShE"),
                        document.getElementById("AiNsLeYiShE-1"),
                        document.getElementById("AiNsLeYiShE-2"),
                        document.getElementById("AiNsLeYiShE-3")]
    for(let Nyarlathotep of Nyarlathoteps){
        Nyarlathotep.onclick = function(){
            NyarlathotepCount++;
            if(NyarlathotepCount < 666 - 600){
                Nyarlathoteps[0].style = "position: fixed; width: 100vw; height: 100vh; z-index: 666;-webkit-filter: invert(1); filter: invert(1); top: 0px; left: 0px; background-image: url('https://images-na.ssl-images-amazon.com/images/I/41fNXKl7olL.jpg'); background-size: 100% 100%;"
                new Audio('hEeHehE.mp3').play()
                setTimeout(function(){
                    Nyarlathotep.style = "position: absolute; width: 400px; height: 400px; background-image: url('harriott.png');"
                }, 200);
            }
            else{
                Nyarlathoteps[0].style = "position: fixed; width: 100vw; height: 100vh; -webkit-filter: invert(1); filter: invert(1); top: 0px; left: 0px; background-image: url('https://images-na.ssl-images-amazon.com/images/I/41fNXKl7olL.jpg'); background-size: 100% 100%;"
                Nyarlathoteps[1].style = "visibility: hidden"
                Nyarlathoteps[2].style = "visibility: hidden"
                Nyarlathoteps[3].style = "visibility: hidden"
                document.body.innerHTML += '<audio id="ToOlAtE"autoplay loop> <source id="abyss" src="http://www.arrl.org/files/file/RFI%20Sounds/w7ojt-worst.mp3"></audio>'
                setInterval(function(){ document.getElementById('ToOlAtE').playbackRate += .02 }, 500);
                setTimeout(function(){ eNdIt() }, 1000 * 60 * 6);
                
            }
        }
    }

    /*( "#AiNsLeYiShE" ).mgGlitch({
        destroy : false, // set 'true' to stop the plugin
                    glitch: true, // set 'false' to stop glitching
                    scale: true, // set 'false' to stop scaling
                    blend : true, // set 'false' to stop glitch blending
                    blendModeType : 'hue', // select blend mode type
                    glitch1TimeMin : 600, // set min time for glitch 1 elem
                    glitch1TimeMax : 900, // set max time for glitch 1 elem
                    glitch2TimeMin : 10, // set min time for glitch 2 elem
                    glitch2TimeMax : 115, // set max time for glitch 2 elem
                    zIndexStart : 8, // because of absolute position, set z-index base value
    });*/
}

function eNdIt(){
    cLoCk = document.getElementById('ToOlAtE')
    cLoCk.pause()
    setTimeout(function() {
        cLoCk.playbackRate = 1.5
        cLoCk.loop = false;
        cLoCk.setAttribute('src', 'https://www.shockwave-sound.com/sound-effects/scream-sounds/femalscream.wav')
        setTimeout(function(){
            window.location = '/'
        }, 1500)
    }, 1000)
}