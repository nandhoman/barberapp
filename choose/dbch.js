var db = firebase.firestore();
var KapperNaam;
var DurationFromDatabase; 
var typeSort;

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

        function typemenu(dmenu, hmenu, kmenu){
            if (dmenu > 0){
                return "Men";
            }
            if (hmenu > 0){
                return "Women";
            }
            if (kmenu > 0){
                return "Childs";
            }
        }

        this.amenu = allmenu(dmenu, hmenu, kmenu);
        this.typeSort = typemenu(dmenu, hmenu, kmenu);
        
        document.getElementById('Behandeling').innerHTML = "Behandeling: ";
        document.getElementById('Duur').innerHTML = "Duur: "
        document.getElementById('Datum').innerHTML = "Datum: " + date;

    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

function submit(){
    window.location.href = '/bevestigen';
}



db.collection("Kappers")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().Index == pbarber) {
                this.KapperNaam = doc.data().Name;
                document.getElementById("Kapper").innerHTML = "Kapper: " + KapperNaam;
                tijdzoeken(KapperNaam);
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
            var Naam = doc.data().Name;
            function tijdinminuten(x){
                return x * 10;
            }
            if (doc.data().Index == amenu && doc.data().Sort == this.typeSort && this.typeSort == "Men") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Heren - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
                this.DurationFromDatabase = doc.data().Duration;
            }    
            if (doc.data().Index == amenu && this.typeSort == doc.data().Sort && this.typeSort == "Women") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Dames - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
                this.DurationFromDatabase = doc.data().Duration;
            }                                                                                                                               
            if (doc.data().Index == amenu && this.typeSort == doc.data().Sort && this.typeSort == "Childs") {
                document.getElementById("Behandeling").innerHTML = "Behandeling Kinderen - " + Naam;
                document.getElementById("Duur").innerHTML = "Duur: " + tijdinminuten(doc.data().Duration) + " minuten";
                this.DurationFromDatabase = doc.data().Duration;
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    function zeroPad(num, places) {
        return String(num).padStart(places, '0')
    }

    function blokZoeken(duration, doc){
        var vrijblok = true;
        var vrijeblokken = [];
        var timeStampName2 = "";
        var timeStampName = "";
        var c = 0;
        for (var x in doc.data()){
            timeStampName = "b"+c;
            var timeStampValuex = doc.data()[timeStampName];
            if(timeStampValuex ==  "Free"){
                vrijblok = true;
                for(d = c + 1; d < (c + duration); d++){
                    timeStampName2 = "b" + d;
                    timeStampValue2 = doc.data()[timeStampName2];
                    console.log(c,timeStampName2,timeStampValue2);
                    if(timeStampValue2 != "Free"){
                        c = d;
                        vrijblok = false;
                        d = c + duration;
                    }
                }
            }
            else{
                vrijblok = false;
            }
            if(vrijblok == true){
                vrijeblokken.push(timeStampName);
            }
            c = c + 1;
        }
        return vrijeblokken;
    }

    var DurationFromDatabaseNumber =  new Number(DurationFromDatabase);

    function tijdzoeken(KapperNaam){
        db.collection(KapperNaam)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var datumentity = doc.data().Date.seconds;
                var datum = new Date(datumentity * 1000);
                var DateYear = datum.getFullYear();
                var DateMonth = zeroPad((datum.getMonth() + 1), 2);
                var Dateday = zeroPad(datum.getDate(), 2);
                var volledigeDatumUitRooster = DateYear + "-" + DateMonth + "-" + Dateday;
                if(date == volledigeDatumUitRooster){
                    var array = blokZoeken(this.DurationFromDatabase, doc);
                    console.log(this.DurationFromDatabase);
                    console.log(array);
                } 
            });
        });
    }
