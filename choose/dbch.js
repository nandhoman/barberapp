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


docRef.get().then(function(doc) {
    if (doc.exists) {
        var map = doc.data();
        var date = map.date;
        var dmenu = map.dmenu;
        var hmenu = map.hmenu;
        var kmenu = map.kmenu;
        var pbarber = map.pbarber;

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
        var amenu = allmenu(dmenu, hmenu, kmenu);
            function voorkeurskapperNamevar(pbarber){
                if (pbarber == 0){
                    return "Geen kapper geselecteerd" 
                }
                if (pbarber == 1){
                    return "Sarah Hooi" 
                }
                if (pbarber == 2){
                    return "Maura Hamers" 
                }
                if (pbarber == 3){
                    return "Anthon Post" 
                }
                if (pbarber == 4){
                    return "Daan Van Vliet" 
                }
                if (pbarber == 5){
                    return "Quincy De Jong" 
                }
                if (pbarber == 6){
                    return "Bor Den Breejen" 
                }
                if (pbarber == 7){
                    return "Faris Abu Watfa" 
                }
                if (pbarber == 8){
                    return "Obe Jansen" 
                }
                if (pbarber == 9){
                    return "" 
                }
                if (pbarber == 10){
                    return "" 
                }
                if (pbarber == 0){
                    return "" 
                }

            }
            var voorkeurskapperName = voorkeurskapperNamevar(pbarber);
        document.getElementById('Behandeling').innerHTML = "Behandeling: ";
        document.getElementById('Kapper').innerHTML = "Kapper: " + voorkeurskapperName;
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

