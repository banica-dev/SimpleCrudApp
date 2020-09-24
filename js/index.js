///un rand nou 4 elemente 
//fiecare td din cele 4 elem contine fie valoare fie buton
function save() {
    var inp1, inp2, inp3;
    inp1 = document.getElementById("first");
    inp2 = document.getElementById("last");
    inp3 = document.getElementById("date");
    var flag = false; //flag 

    //request first input

    if (inp1.value == "") {
        document.getElementById("first").style.borderColor = "red";
        var id1 = document.getElementById("content")
        var div1 = document.createElement("div");
        div1.innerText = "Request input";
        div1.className = "hfive";
        id1.innerHTML = "";
        id1.appendChild(div1);
        flag = true;
    } else {
        document.getElementById("first").style.borderColor = "initial";
        var id1 = document.getElementById("content")

        id1.innerHTML = "";

    }

    // second request 

    if (inp2.value == "") {
        document.getElementById("last").style.borderColor = "red";
        var id2 = document.getElementById("content1")
        var div2 = document.createElement("div");
        div2.innerText = "Request input";
        div2.className = "hfive";
        id2.innerHTML = "";
        id2.appendChild(div2);
        flag = true;
    } else {
        document.getElementById("last").style.borderColor = "initial";
        var id2 = document.getElementById("content1")
        id2.innerHTML = "";
    }

    //third request
    if (inp3.value == "") {
        document.getElementById("date").style.borderColor = "red";
        var id3 = document.getElementById("content2")
        var div3 = document.createElement("div");
        div3.innerText = "Request input";
        div3.className = "hfive";
        id3.innerHTML = "";
        id3.appendChild(div3);
        flag = true;
    } else {
        document.getElementById("date").style.borderColor = "initial";
        var id3 = document.getElementById("content2")
        id3.innerHTML = "";
    }

    if (flag != false) {
        return;
    }


    //preluare id body-tabel
    var tbody = document.getElementById("parinte");
    //creare rand nou
    var tr = document.createElement("tr");
    tr.setAttribute("style", "width=1350px");

    //creare coloane
    var td1, td2, td3, td4;
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");

    //creare butoane 
    var btn1, btn2;
    btn1 = document.createElement("button");
    btn2 = document.createElement("button");

    // btn1.innerText = "Edit";
    btn1.className = "fas fa-edit";
    btn1.setAttribute("onclick", "editRand(this)")
    btn1.id = "btn1";

    // btn2.innerText = "Delete";
    btn2.className = "fas fa-trash-alt";
    btn2.setAttribute("onclick", "stergeRand(this)");
    btn2.id = "btn2";


    //creare iduri de la inputuri si atribuire coloanelor din tabel
    var inp1, inp2, inp3;
    inp1 = document.getElementById("first");
    inp2 = document.getElementById("last");
    inp3 = document.getElementById("date");
    td1.innerText = inp1.value;
    td2.innerText = inp2.value;
    td3.innerText = inp3.value;


    td4.appendChild(btn1);
    td4.appendChild(btn2);

    //incarcare date de pe randuri din tabel 
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tbody.appendChild(tr);
    //golire inputuri
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";


}
//creare functie stergeRand
function stergeRand(btn) {

    var tr = btn.parentNode.parentNode;
    var tbody = document.getElementById("parinte");

    tbody.removeChild(tr);
}


//creare functie editeRand
function editRand(btn) {
    var tr = btn.parentNode.parentNode;
    var tdArray = tr.childNodes;

    var nume, prenume, data;
    nume = tdArray[0].innerText;
    prenume = tdArray[1].innerText;
    data = tdArray[2].innerText;

    tdArray[0].innerText = "";
    tdArray[1].innerText = "";
    tdArray[2].innerText = "";

    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");

    input1.value = nume;
    input1.placeholder = nume;
    input1.id = "input";

    input2.value = prenume;
    input2.placeholder = prenume;
    input2.id = "input";

    input3.value = data;
    input3.placeholder = data;
    input3.type = "date"
    input3.id = "input";

    tdArray[0].appendChild(input1);
    tdArray[1].appendChild(input2);
    tdArray[2].appendChild(input3);

    var butoane = tdArray[3].childNodes;

    butoane[0].setAttribute("onclick", "confirm(this)");
    butoane[0].className = "fas fa-check";

    butoane[1].className = "fas fa-times"
    butoane[1].setAttribute("onclick", "cancel(this)");


}

//creare functie confirm
function confirm(btn1) {
    var tr = btn1.parentNode.parentNode;
    var tdArray = tr.childNodes;


    var input1 = tdArray[0].firstChild;
    var input2 = tdArray[1].firstChild;
    var input3 = tdArray[2].firstChild;

    var nume = input1.value;
    var prenume = input2.value;
    var data = input3.value;
    if (nume == "" || prenume == "" || data == "") {
        alert("Camp gol");
        return;
    }

    tdArray[0].innerHTML = "";
    tdArray[1].innerHTML = "";
    tdArray[2].innerHTML = "";



    tdArray[0].innerText = nume;
    tdArray[1].innerText = prenume;
    tdArray[2].innerText = data;


    var butoane = tdArray[3].childNodes;

    butoane[0].className = "fas fa-edit";
    butoane[0].setAttribute("onclick", "editRand(this)");
    butoane[1].className = "fas fa-trash-alt";
    butoane[1].setAttribute("onclick", "stergeRand(this)");

}


//creare functie cancel

function cancel(btn2) {

    var tr = btn2.parentNode.parentNode;
    var tdArray = tr.childNodes;

    var input1 = tdArray[0].firstChild;
    var input2 = tdArray[1].firstChild;
    var input3 = tdArray[2].firstChild;

    var nume = input1.placeholder;
    var prenume = input2.placeholder;
    var data = input3.placeholder;

    tdArray[0].innerHTML = "";
    tdArray[1].innerHTML = "";
    tdArray[2].innerHTML = "";

    tdArray[0].innerText = nume;
    tdArray[1].innerText = prenume;
    tdArray[2].innerText = data;

    var butoane = tdArray[3].childNodes;
    // butoane[0].innerText = "Edit";
    butoane[0].className = "fas fa-edit";
    butoane[0].setAttribute("onclick", "editRand(this)");

    butoane[1].className = "fas fa-trash-alt"
    butoane[1].setAttribute("onclick", "stergeRand(this)");

}
///creaza functia filtreaza

function filter(btn3) {

    var tableBody = document.getElementsByTagName("tbody")[0];
    var string = tableBody.getElementsByTagName("tr");
    var i;

    for (i = 0; i < string.length; i++) {
        var tr = string[i];
        console.log(tr);
        var tdArray = tr.getElementsByTagName("td");
        console.log(tdArray);
        var getIDfiltru = document.getElementById("IDfiltru").value;
        let valCrt = tdArray[0].innerText;

        if (valCrt.includes(getIDfiltru)) {
            // alert("Yes");
            if (getIDfiltru.value == null)
                tr.classList.remove("hidden");
        } else {
            tr.classList.add("hidden");
        }
    }


}

function filtreaza(btn3) {

    var tableBody = document.getElementsByTagName("tbody")[1];
    var string = tableBody.getElementsByTagName("tr");
    var i;

    for (i = 0; i < string.length; i++) {
        var tr = string[i];
        console.log(tr);
        var tdArray = tr.getElementsByTagName("td");
        console.log(tdArray);
        var getIDfiltru = document.getElementById("idFiltru").value;
        let valCrt = tdArray[1].innerText;

        if (valCrt.includes(getIDfiltru)) {
            // alert("Yes");
            if (getIDfiltru.value == null)
                tr.classList.remove("hidden");
        } else {
            tr.classList.add("hidden");
        }
    }


}



///show/hide ADD
function myFunction() {

    var x = document.getElementById("myDIV");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//show/hide FILTRE
function showHide() {

    var x = document.getElementById("otherDiv");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}