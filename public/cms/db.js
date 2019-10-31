function submit(){
    var db = firebase.firestore();
    var name = document.getElementById("name");
    var GenderIndex = document.getElementById("valtOnder").selectedIndex;


    function withGender(GenderIndex){
        if(GenderIndex == 0){
            return "Heren"
        }
        if(GenderIndex == 1){
            return "Dames"
        }
        if(GenderIndex == 2){
            return "Kinderen"
        }
    }

    var GenderNumber = GenderIndex + 1;
    var namewithGender = name + withGender(GenderIndex);

    console.log(namewithGender);
    console.log(GenderNumber);


    var docData = {
        stringExample: "Hello world!",
        
    };
    db.collection("treatments").doc().set(docData).then(function() {
        console.log("Document successfully written!");
    });
}