var db = firebase.firestore();

function submit(){
    window.location.href = '/bevestiging';
}

var Duration;
var choosetime;
var date;
var dmenu;
var hmenu;
var kmenu;
var pbarber;
var startblock;

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
 
var Documentsign = getCookie("DocRef");
console.log(Documentsign);

function checkmail(mail){
    var at = mail.search("@");
    console.log(at);
    if(at >= 1){
        var afterTheAt = mail.split("@");
        var LengthOfAterTheAt = afterTheAt.length;
        if(LengthOfAterTheAt == 2){
            var Puntencounter = mail.split(".");
            var LengthOfPuntencounter = Puntencounter.length;
            if (LengthOfPuntencounter >= 2){
                return(true);
            }
            else{
                return(false);
            }
                        
        }
        else{
            return(false);
        }
    }
    else{
        return(false);
    }
}

db.collection("buf2").where("oldDocRef", "==", this.Documentsign)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            this.Duration = doc.data().Duration;
            this.choosetime = doc.data().choosetime;
            this.date = doc.data().date;
            this.dmenu = doc.data().dmenu;
            this.hmenu = doc.data().hmenu;
            this.kmenu = doc.data().kmenu;
            this.pbarber = doc.data().pbarber;
            this.startblock = doc.data().startblock;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
});

    var name;
    var mail;

function submit(){
    this.name = document.getElementById("Naam").value;
    this.mail = document.getElementById("Mail").value;

    var checkedmailonsubmit = checkmail(this.mail);
    if (checkedmailonsubmit == true){    
        db.collection("Appointments").add({
            name: this.name,
            mail: this.mail,
            Duration: this.Duration,
            date: this.date,
            pbarber: this.pbarber,
            hmenu: this.hmenu,
            dmenu: this.dmenu,
            kmenu: this.kmenu,
            startblock: this.startblock,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        window.location.href = '/bevestigd';
    }
    else{
        alert("Ha, jij dacht ons ff te naaien door een niet bestaand mailadres in te vullen. Nou het is mooi mislukt want wij zijn losers zoals jij gewoon voor. Ga je maar schamen, of een mailadres aanmaken. Is gewoon gratis, had je kunnen weten...")
    }
}

document.getElementById("naamdisplay").addEventListener('click',()=>{
    const input = document.getElementById("Naam");
    input.click();
    input.select();
})

document.getElementById("maildisplay").addEventListener('click',()=>{
    const input = document.getElementById("Mail");
    input.click();
    input.select();
})
