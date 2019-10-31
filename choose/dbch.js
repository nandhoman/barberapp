var db = firebase.firestore();
var KapperNaam;
var DurationFromDatabase; 
var typeSort;
var page = new Number(0);
var array;


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
var dmenu;
var hmenu;
var kmenu;
var choosetime;

docRef.get().then(function(doc) {
    if (doc.exists) {
        var map = doc.data();
        this.date = map.date;
        this.dmenu = map.dmenu;
        this.hmenu = map.hmenu;
        this.kmenu = map.kmenu;
        this.pbarber = map.pbarber;

        function allmenu(dmenu, hmenu, kmenu){
            if (this.dmenu > 0){
                return dmenu;
            }
            if (this.hmenu > 0){
                return hmenu;
            }
            if (this.kmenu > 0){
                return kmenu
            }
        }

        function typemenu(dmenu, hmenu, kmenu){
            if (dmenu > 0){
                return "Women";
            }
            if (hmenu > 0){
                return "Men";
            }
            if (kmenu > 0){
                return "Childs";
            }
        }

        this.amenu = allmenu(this.dmenu, this.hmenu, this.kmenu);
        this.typeSort = typemenu(this.dmenu, this.hmenu, this.kmenu);
        console.log(typeSort);
        
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
            // console.log(doc.data().Duration, doc.data().Name, doc.data().Sort, this.typeSort);
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

    function toTime(block){
        var txt = block;
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        numb = parseInt(numb, 10);
        var hour = (numb / 6);
        hour = Math.floor(hour);
        var minutes = ((numb - (hour * 6))* 10);
        minutes = zeroPad(minutes,  2);
        hour = zeroPad(hour, 2);
        return String(hour + ":" + minutes);
    }
    

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
                    this.array = blokZoeken(this.DurationFromDatabase, doc);
                    document.getElementById("100").innerHTML = toTime(array[((page * 9) + 0)]);
                    document.getElementById("101").innerHTML = toTime(array[((page * 9) + 1)]);
                    document.getElementById("102").innerHTML = toTime(array[((page * 9) + 2)]);
                    document.getElementById("103").innerHTML = toTime(array[((page * 9) + 3)]);
                    document.getElementById("104").innerHTML = toTime(array[((page * 9) + 4)]);
                    document.getElementById("105").innerHTML = toTime(array[((page * 9) + 5)]);
                    document.getElementById("106").innerHTML = toTime(array[((page * 9) + 6)]);
                    document.getElementById("107").innerHTML = toTime(array[((page * 9) + 7)]);
                    document.getElementById("108").innerHTML = toTime(array[((page * 9) + 8)]);
                } 
            });
        });
}

setTimeout(function(){
    window.choosebttn = function(element){
        var choose = document.getElementById(element).innerHTML;
        document.cookie = "last=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "last="+choose+"; path=/;";
        console.log(choose);
        colorRed();
    }; 
    
    function colorRed(){  
        for(z = 100; z < 109; z++){
            var element = getCookie("last");
            var elementInnerHTML = document.getElementById(z).innerHTML;
            if(element == elementInnerHTML){
                console.log(true, element);
                document.getElementById(z).style.color = "#F97070";
            }
            else{
                document.getElementById(z).style.color = "#FFFFFF";
            }
        }
    } 
},500); 

function getTimeFromCoockie(){
    this.choosetime = getCookie("last");
}


function getBlockFromTime(time){
    var elements = time.split(":");
    var hour = elements[0];
    var minutess = elements[1];
    console.log(hour, minutess);
    var hourblocks = (hour * 6);
    var minutessblocks = (minutess / 10);
    var blocks = hourblocks + minutessblocks;
    return blocks;
}

function ContinueButton(){
    getTimeFromCoockie();
    var blockss = getBlockFromTime(choosetime);
    db.collection("buf2").add({
        date: date,
        dmenu: dmenu,
        hmenu: hmenu,
        kmenu: kmenu,
        pbarber: pbarber,
        choosetime: choosetime,
        startblock: blockss,
        Duration: DurationFromDatabase,
        oldDocRef: Documentsign,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        setTimeout(function() {
            location.href = "/bevestigen";
        }, 1000);        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }); 

}

