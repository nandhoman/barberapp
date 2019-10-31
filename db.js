var db = firebase.firestore();

function getValue(docRef) {
    document.cookie = "last=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    document.cookie = "DocRef=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    var htreatment = document.getElementById("dbheren").selectedIndex;

    var dtreatment = document.getElementById("dbdames").selectedIndex;

    var ktreatment = document.getElementById("dbkinderen").selectedIndex;

    var pbarber = document.getElementById("voorkeurskapper1").selectedIndex;

    var date = document.getElementById("datepicker").value;

    
    db.collection("buf1").add({
        hmenu: htreatment,
        dmenu: dtreatment,
        kmenu: ktreatment,
        pbarber: pbarber,
        date: date
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        var DocumentName = docRef.id;
        console.log(DocumentName)
        var time = Date.now();
        var expire = time -600000;
        document.cookie = "DocRef = "+DocumentName+" ; expires=Wed, 1 Jan 2070 13:47:11 UTC; path=/";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    window.location.href = '/choose';
}


db.collection("Kappers")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data().Index, doc.id, " => ", doc.data());
            var Naam = doc.data().Name;
            var element = "ekapper" + doc.data().Index;
            var i = 1;
            while(i < 21){
                stringi = i.toString();
                var element = "ekapper" + stringi;
                if (doc.data().Index == stringi){
                    document.getElementById(element).innerHTML = Naam;
                    document.getElementById(element).style.display = "block";    
                }
                i++;
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
            console.log(doc.data().Index, doc.id, " => ", doc.data());
            var Naam = doc.data().Name;
            var i = 1;
            while(i < 100){
                stringi = i.toString();
                var dex2 = Math.floor((i / 10));
                var elemente1 = "e1" + dex2 + stringi;
                var elemente2 = "e2" + dex2 + stringi;
                var elemente3 = "e3" + dex2 + stringi;
                
                if (doc.data().Index == stringi && doc.data().Sort == "Men"){
                    document.getElementById(elemente1).innerHTML = Naam;
                    document.getElementById(elemente1).style.display = "block";    
                }
                if (doc.data().Index == stringi && doc.data().Sort == "Women"){
                    document.getElementById(elemente2).innerHTML = Naam;
                    document.getElementById(elemente2).style.display = "block";    
                }
                if (doc.data().Index == stringi && doc.data().Sort == "Childs"){
                    document.getElementById(elemente3).innerHTML = Naam;
                    document.getElementById(elemente3).style.display = "block";    
                }
                i++;
            }          
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

document.getElementById("datepicker").setAttribute("min", today);

