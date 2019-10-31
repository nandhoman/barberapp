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
// console.log(Documentsign)

db.collection("buf2").where("oldDocRef", "==", Documentsign)
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

    
    db.collection("Appointments").add({
        name: name,
        mail: mail,
        Duration: Duration,
        date: date,
        pbarber: pbarber,
        hmenu: hmenu,
        dmenu: dmenu,
        kmenu: kmenu,
        startblock: startblock,
    })
    .then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    window.location.href = '/bevestigd';
}