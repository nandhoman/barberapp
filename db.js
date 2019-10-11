// Reference messages collection
var db = firebase.firestore();

function getValue(docRef) {
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
        document.cookie = "DocRef = "+DocumentName+" ; expires="+expire+"; path=/";
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
            if (doc.data().Index == "1" && doc.data().Sort == "Men") {
                document.getElementById("e101").innerHTML = Naam;
                document.getElementById("e101").style.display = "block";
            }
            if (doc.data().Index == "2" && doc.data().Sort == "Men") {
                document.getElementById("e102").innerHTML = Naam;
                document.getElementById("e102").style.display = "block";  
            }
            if (doc.data().Index == "3" && doc.data().Sort == "Men") {
                document.getElementById("e103").innerHTML = Naam;
                document.getElementById("e103").style.display = "block";
            }
            if (doc.data().Index == "4" && doc.data().Sort == "Men") {
                document.getElementById("e104").innerHTML = Naam;
                document.getElementById("e104").style.display = "block";
            }
            if (doc.data().Index == "5" && doc.data().Sort == "Men") {
                document.getElementById("e105").innerHTML = Naam;
                document.getElementById("e105").style.display = "block";  
            }
            if (doc.data().Index == "6" && doc.data().Sort == "Men") {
                document.getElementById("e106").innerHTML = Naam;
                document.getElementById("e106").style.display = "block";
            }
            if (doc.data().Index == "7" && doc.data().Sort == "Men") {
                document.getElementById("e107").innerHTML = Naam;
                document.getElementById("e107").style.display = "block";
            }
            if (doc.data().Index == "8" && doc.data().Sort == "Men") {
                document.getElementById("e108").innerHTML = Naam;
                document.getElementById("e108").style.display = "block";  
            }
            if (doc.data().Index == "9" && doc.data().Sort == "Men") {
                document.getElementById("e109").innerHTML = Naam;
                document.getElementById("e109").style.display = "block";
            }
            if (doc.data().Index == "10" && doc.data().Sort == "Men") {
                document.getElementById("e110").innerHTML = Naam;
                document.getElementById("e110").style.display = "block";
            }
            if (doc.data().Index == "11" && doc.data().Sort == "Men") {
                document.getElementById("e111").innerHTML = Naam;
                document.getElementById("e111").style.display = "block";  
            }
            if (doc.data().Index == "12" && doc.data().Sort == "Men") {
                document.getElementById("e112").innerHTML = Naam;
                document.getElementById("e112").style.display = "block";
            }
            if (doc.data().Index == "13" && doc.data().Sort == "Men") {
                document.getElementById("e113").innerHTML = Naam;
                document.getElementById("e113").style.display = "block";
            }
            if (doc.data().Index == "14" && doc.data().Sort == "Men") {
                document.getElementById("e114").innerHTML = Naam;
                document.getElementById("e114").style.display = "block";  
            }
            if (doc.data().Index == "15" && doc.data().Sort == "Men") {
                document.getElementById("e115").innerHTML = Naam;
                document.getElementById("e115").style.display = "block";
            }
            if (doc.data().Index == "16" && doc.data().Sort == "Men") {
                document.getElementById("e116").innerHTML = Naam;
                document.getElementById("e116").style.display = "block";
            }
            if (doc.data().Index == "17" && doc.data().Sort == "Men") {
                document.getElementById("e117").innerHTML = Naam;
                document.getElementById("e117").style.display = "block";  
            }
            if (doc.data().Index == "18" && doc.data().Sort == "Men") {
                document.getElementById("e118").innerHTML = Naam;
                document.getElementById("e118").style.display = "block";
            }
            if (doc.data().Index == "19" && doc.data().Sort == "Men") {
                document.getElementById("e119").innerHTML = Naam;
                document.getElementById("e119").style.display = "block";  
            }
            if (doc.data().Index == "20" && doc.data().Sort == "Men") {
                document.getElementById("e120").innerHTML = Naam;
                document.getElementById("e120").style.display = "block";
            }
            if (doc.data().Index == "1" && doc.data().Sort == "Women") {
                document.getElementById("e201").innerHTML = Naam;
                document.getElementById("e201").style.display = "block";
            }
            if (doc.data().Index == "2" && doc.data().Sort == "Women") {
                document.getElementById("e202").innerHTML = Naam;
                document.getElementById("e202").style.display = "block";  
            }
            if (doc.data().Index == "3" && doc.data().Sort == "Women") {
                document.getElementById("e203").innerHTML = Naam;
                document.getElementById("e203").style.display = "block";
            }
            if (doc.data().Index == "4" && doc.data().Sort == "Women") {
                document.getElementById("e204").innerHTML = Naam;
                document.getElementById("e204").style.display = "block";
            }
            if (doc.data().Index == "5" && doc.data().Sort == "Women") {
                document.getElementById("e205").innerHTML = Naam;
                document.getElementById("e205").style.display = "block";  
            }
            if (doc.data().Index == "6" && doc.data().Sort == "Women") {
                document.getElementById("e206").innerHTML = Naam;
                document.getElementById("e206").style.display = "block";
            }
            if (doc.data().Index == "7" && doc.data().Sort == "Women") {
                document.getElementById("e207").innerHTML = Naam;
                document.getElementById("e207").style.display = "block";
            }
            if (doc.data().Index == "8" && doc.data().Sort == "Women") {
                document.getElementById("e208").innerHTML = Naam;
                document.getElementById("e208").style.display = "block";  
            }
            if (doc.data().Index == "9" && doc.data().Sort == "Women") {
                document.getElementById("e209").innerHTML = Naam;
                document.getElementById("e209").style.display = "block";
            }
            if (doc.data().Index == "10" && doc.data().Sort == "Women") {
                document.getElementById("e210").innerHTML = Naam;
                document.getElementById("e210").style.display = "block";
            }
            if (doc.data().Index == "11" && doc.data().Sort == "Women") {
                document.getElementById("e211").innerHTML = Naam;
                document.getElementById("e211").style.display = "block";  
            }
            if (doc.data().Index == "12" && doc.data().Sort == "Women") {
                document.getElementById("e212").innerHTML = Naam;
                document.getElementById("e212").style.display = "block";
            }
            if (doc.data().Index == "13" && doc.data().Sort == "Women") {
                document.getElementById("e213").innerHTML = Naam;
                document.getElementById("e213").style.display = "block";
            }
            if (doc.data().Index == "14" && doc.data().Sort == "Women") {
                document.getElementById("e214").innerHTML = Naam;
                document.getElementById("e214").style.display = "block";  
            }
            if (doc.data().Index == "15" && doc.data().Sort == "Women") {
                document.getElementById("e215").innerHTML = Naam;
                document.getElementById("e215").style.display = "block";
            }
            if (doc.data().Index == "16" && doc.data().Sort == "Women") {
                document.getElementById("e216").innerHTML = Naam;
                document.getElementById("e216").style.display = "block";
            }
            if (doc.data().Index == "17" && doc.data().Sort == "Women") {
                document.getElementById("e217").innerHTML = Naam;
                document.getElementById("e217").style.display = "block";  
            }
            if (doc.data().Index == "18" && doc.data().Sort == "Women") {
                document.getElementById("e218").innerHTML = Naam;
                document.getElementById("e218").style.display = "block";
            }
            if (doc.data().Index == "19" && doc.data().Sort == "Women") {
                document.getElementById("e219").innerHTML = Naam;
                document.getElementById("e219").style.display = "block";  
            }
            if (doc.data().Index == "20" && doc.data().Sort == "Women") {
                document.getElementById("e220").innerHTML = Naam;
                document.getElementById("e220").style.display = "block";
            }
            if (doc.data().Index == "1" && doc.data().Sort == "Childs") {
                document.getElementById("e301").innerHTML = Naam;
                document.getElementById("e301").style.display = "block";
            }
            if (doc.data().Index == "2" && doc.data().Sort == "Childs") {
                document.getElementById("e302").innerHTML = Naam;
                document.getElementById("e302").style.display = "block";  
            }
            if (doc.data().Index == "3" && doc.data().Sort == "Childs") {
                document.getElementById("e303").innerHTML = Naam;
                document.getElementById("e303").style.display = "block";
            }
            if (doc.data().Index == "4" && doc.data().Sort == "Childs") {
                document.getElementById("e304").innerHTML = Naam;
                document.getElementById("e304").style.display = "block";
            }
            if (doc.data().Index == "5" && doc.data().Sort == "Childs") {
                document.getElementById("e305").innerHTML = Naam;
                document.getElementById("e305").style.display = "block";  
            }
            if (doc.data().Index == "6" && doc.data().Sort == "Childs") {
                document.getElementById("e306").innerHTML = Naam;
                document.getElementById("e306").style.display = "block";
            }
            if (doc.data().Index == "7" && doc.data().Sort == "Childs") {
                document.getElementById("e307").innerHTML = Naam;
                document.getElementById("e307").style.display = "block";
            }
            if (doc.data().Index == "8" && doc.data().Sort == "Childs") {
                document.getElementById("e308").innerHTML = Naam;
                document.getElementById("e308").style.display = "block";  
            }
            if (doc.data().Index == "9" && doc.data().Sort == "Childs") {
                document.getElementById("e309").innerHTML = Naam;
                document.getElementById("e309").style.display = "block";
            }
            if (doc.data().Index == "10" && doc.data().Sort == "Childs") {
                document.getElementById("e310").innerHTML = Naam;
                document.getElementById("e310").style.display = "block";
            }
            if (doc.data().Index == "11" && doc.data().Sort == "Childs") {
                document.getElementById("e311").innerHTML = Naam;
                document.getElementById("e311").style.display = "block";  
            }
            if (doc.data().Index == "12" && doc.data().Sort == "Childs") {
                document.getElementById("e312").innerHTML = Naam;
                document.getElementById("e312").style.display = "block";
            }
            if (doc.data().Index == "13" && doc.data().Sort == "Childs") {
                document.getElementById("e313").innerHTML = Naam;
                document.getElementById("e313").style.display = "block";
            }
            if (doc.data().Index == "14" && doc.data().Sort == "Childs") {
                document.getElementById("e314").innerHTML = Naam;
                document.getElementById("e314").style.display = "block";  
            }
            if (doc.data().Index == "15" && doc.data().Sort == "Childs") {
                document.getElementById("e315").innerHTML = Naam;
                document.getElementById("e315").style.display = "block";
            }
            if (doc.data().Index == "16" && doc.data().Sort == "Childs") {
                document.getElementById("e316").innerHTML = Naam;
                document.getElementById("e316").style.display = "block";
            }
            if (doc.data().Index == "17" && doc.data().Sort == "Childs") {
                document.getElementById("e317").innerHTML = Naam;
                document.getElementById("e317").style.display = "block";  
            }
            if (doc.data().Index == "18" && doc.data().Sort == "Childs") {
                document.getElementById("e318").innerHTML = Naam;
                document.getElementById("e318").style.display = "block";
            }
            if (doc.data().Index == "19" && doc.data().Sort == "Childs") {
                document.getElementById("e319").innerHTML = Naam;
                document.getElementById("e319").style.display = "block";  
            }
            if (doc.data().Index == "20" && doc.data().Sort == "Childs") {
                document.getElementById("e320").innerHTML = Naam;
                document.getElementById("e320").style.display = "block";
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