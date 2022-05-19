let KeyboardInput = document.getElementById('keyboard-input')

word='';
document.addEventListener('keypress', (event) => {
    word += event.key;
    console.log(word)

    var modal = document.getElementById('popupMessage')

    if(word.includes("1337")){
    modal.style.visibility="visible";
    word="";
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.overflow="visible"
    modal.style.visibility="hidden"
}

});
{
    const xml = new XMLHttpRequest();
    xml.open('GET', '/Jsonfiles/Utbildning.json', true);

    xml.onload = function(){
        if(this.status===200){
            const utbildningar = JSON.parse(this.responseText);
            let output = '';
            utbildningar.Utbildningarna.forEach(function(utbildning){
                output +=`
                <ul class="jsonload">  
                    <li> Utbildningensnamn: ${utbildning.Utbildningensnamn}</li>
                    <li> Name: ${utbildning.Datum}</li>
                    <li> Beskrivning: ${utbildning.Beskrivning}</li>
                    <li> Start datum: ${utbildning.Datum}</li>
                    <li> Ort: ${utbildning.Ort}</li>
                    <li> Bedriven av: ${utbildning.BedrivenAv}</li>
                    <li> Examensdatum: ${utbildning.Examensdatum}</li>
                </ul>
                `;
            });
            document.getElementById('utbildning').innerHTML = output;
        };
    }
    xml.send();
}
{
const xml = new XMLHttpRequest();
xml.open('GET', '/Jsonfiles/Utbildning.json', true);

xml.onload = function(){
    if(this.status===200){
        const Workexperiences = JSON.parse(this.responseText);
        let output = '';
        Workexperiences.Workexperience.forEach(function(work){
            output +=`
            <ul class="jsonload">  
                <li> Utbildningensnamn: ${work.Befattning}</li>
                <li> Name: ${work.Startdatum}</li>
                <li> Beskrivning: ${work.Beskrivning}</li>
                <li> Start datum: ${work.Startdatum}</li>
                <li> Ort : ${work.Ort}</li>
                <li> Arbetsgivare : ${work.Arbetsgivare}</li>
                <li> Slutdatum : ${work.Slutdatum} </li>
            </ul>
            `;
        });
        document.getElementById('work').innerHTML = output;
    };
}
xml.send();
}
function backgrounChange(){
    document.body.style.backgroundColor=`#000000`;
}




/*https://openjavascript.info/2022/03/04/adding-keyboard-input-event-in-javascript/*/