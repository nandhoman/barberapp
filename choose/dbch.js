var db = firebase.firestore();

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

console.log(getCookie("DocRef"));

var Documentsign = getCookie("DocRef");

var docRef = db.collection("buf1").doc(Documentsign);

var pbarber;
var amenu;
var date;

docRef.get().then(function(doc) {
    if (doc.exists) {
        var map = doc.data();
        this.date = map.date;
        var dmenu = map.dmenu;
        var hmenu = map.hmenu;
        var kmenu = map.kmenu;
        this.pbarber = map.pbarber;

        function allmenu(dmenu, hmenu, kmenu){
            if (dmenu > 0){
                return dmenu;
            }
            if (hmenu > 0){
                return hmenu;
            }
            if (kmenu > 0){
                return kmenu
            }
        }

        this.amenu = allmenu(dmenu, hmenu, kmenu);
        
        document.getElementById('Behandeling').innerHTML = "Behandeling: ";
        // document.getElementById('Kapper').innerHTML = "Kapper: " + voorkeurskapperName;
        document.getElementById('Duur').innerHTML = "Duur: "
        document.getElementById('Datum').innerHTML = "Datum: " + date;

        console.log(doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

function submit(){
    window.location.href = '/bevestigen';
}

var Naam;

db.collection("Kappers")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            this.Naam = doc.data().Name;
            if (doc.data().Index == pbarber) {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    db.collection("Treatment")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var Naam = doc.data().Name;
            function tijdinminuten(x){
                return x * 10;
            }
            if (doc.data().Index == amenu && doc.data().Sort=="Men") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }    
            if (doc.data().Index == amenu && doc.data().Sort=="Women") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }                                                                                                                               
            if (doc.data().Index == amenu && doc.data().Sort=="Childs") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    // db.collection(Naam)
    // .where(Index, "==", date)
    // .get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });