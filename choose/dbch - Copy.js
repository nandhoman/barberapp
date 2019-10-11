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
            if (doc.data().Index == "1" && pbarber == "1") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "2" && pbarber == "2") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "3" && pbarber == "3") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "4" && pbarber == "4") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "5" && pbarber == "5") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "6" && pbarber == "6") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "7" && pbarber == "7") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "8" && pbarber == "8") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "9" && pbarber == "9") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "10" && pbarber == "10") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "11" && pbarber == "11") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "12" && pbarber == "12") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "13" && pbarber == "13") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "14" && pbarber == "14") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "15" && pbarber == "15") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "16" && pbarber == "16") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "17" && pbarber == "17") {
                document.getElementById("Kapper").innerHTML = "Kapper: " + Naam;
            }
            if (doc.data().Index == "18" && pbarber == "18") {
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
            if (doc.data().Index == "1" && doc.data().Sort=="Men" && amenu == "1") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "2" && doc.data().Sort=="Men" && amenu == "2") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "3" && doc.data().Sort=="Men" && amenu == "3") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "4" && doc.data().Sort=="Men" && amenu == "4") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "5" && doc.data().Sort=="Men" && amenu == "5") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "6" && doc.data().Sort=="Men" && amenu == "6") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "7" && doc.data().Sort=="Men" && amenu == "7") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "8" && doc.data().Sort=="Men" && amenu == "8") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "9" && doc.data().Sort=="Men" && amenu == "9") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "10" && doc.data().Sort=="Men" && amenu == "10") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "11" && doc.data().Sort=="Men" && amenu == "11") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "12" && doc.data().Sort=="Men" && amenu == "12") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "13" && doc.data().Sort=="Men" && amenu == "13") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "14" && doc.data().Sort=="Men" && amenu == "14") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "15" && doc.data().Sort=="Men" && amenu == "15") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "16" && doc.data().Sort=="Men" && amenu == "16") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "17" && doc.data().Sort=="Men" && amenu == "17") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "18" && doc.data().Sort=="Men" && amenu == "18") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "1" && doc.data().Sort=="Women" && amenu == "1") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "2" && doc.data().Sort=="Women" && amenu == "2") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "3" && doc.data().Sort=="Women" && amenu == "3") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "4" && doc.data().Sort=="Women" && amenu == "4") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "5" && doc.data().Sort=="Women" && amenu == "5") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "6" && doc.data().Sort=="Women" && amenu == "6") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "7" && doc.data().Sort=="Women" && amenu == "7") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "8" && doc.data().Sort=="Women" && amenu == "8") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "9" && doc.data().Sort=="Women" && amenu == "9") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "10" && doc.data().Sort=="Women" && amenu == "10") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "11" && doc.data().Sort=="Women" && amenu == "11") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "12" && doc.data().Sort=="Women" && amenu == "12") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "13" && doc.data().Sort=="Women" && amenu == "13") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "14" && doc.data().Sort=="Women" && amenu == "14") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "15" && doc.data().Sort=="Women" && amenu == "15") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "16" && doc.data().Sort=="Women" && amenu == "16") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "17" && doc.data().Sort=="Women" && amenu == "17") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "18" && doc.data().Sort=="Women" && amenu == "18") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "1" && doc.data().Sort=="Childs" && amenu == "1") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "2" && doc.data().Sort=="Childs" && amenu == "2") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "3" && doc.data().Sort=="Childs" && amenu == "3") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "4" && doc.data().Sort=="Childs" && amenu == "4") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "5" && doc.data().Sort=="Childs" && amenu == "5") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "6" && doc.data().Sort=="Childs" && amenu == "6") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "7" && doc.data().Sort=="Childs" && amenu == "7") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "8" && doc.data().Sort=="Childs" && amenu == "8") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "9" && doc.data().Sort=="Childs" && amenu == "9") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "10" && doc.data().Sort=="Childs" && amenu == "10") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "11" && doc.data().Sort=="Childs" && amenu == "11") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "12" && doc.data().Sort=="Childs" && amenu == "12") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "13" && doc.data().Sort=="Childs" && amenu == "13") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "14" && doc.data().Sort=="Childs" && amenu == "14") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "15" && doc.data().Sort=="Childs" && amenu == "15") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "16" && doc.data().Sort=="Childs" && amenu == "16") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "17" && doc.data().Sort=="Childs" && amenu == "17") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
            }
            if (doc.data().Index == "18" && doc.data().Sort=="Childs" && amenu == "18") {
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