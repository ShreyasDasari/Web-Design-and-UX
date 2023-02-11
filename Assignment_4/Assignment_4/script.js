function inputvalidation(object, type, nameType) {
	var regExName = /^[a-zA-Z]+$/;
	var regExEmail = /^[a-zA-Z0-9._%+-]+@northeastern.edu$/;
	var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExZipcode = /\d{5}$/;
    var emptyaddress = document.forms["myform"]["streetAddress1"].value;
    var emptycity = document.forms["myform"]["city"].value;
    var emptystate = document.forms["myform"]["state"].value;
    var emptyfeedback = document.forms["myform"]["feedback"].value;
    var emptycomments = document.forms["myform"]["comments"].value;

	var name = 'error' + nameType;
		switch (type) {
            case 1:
                if (!object.value.trim().match(regExName)) {
				    object.style.border = "2px solid red";
				    document.getElementById(name).style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById(name).style.display = "none";
				}
				break;
            case 2:
                if (!object.value.trim().match(regExEmail)) {
				    object.style.border = "2px solid red";
				    document.getElementById("errorEmail").style.display = "block";
				}
				else {
				    object.style.border = "";
					document.getElementById("errorEmail").style.display = "none";
				}
				break;
            case 3:
                if (!object.value.trim().match(regExPhone)) {
					object.style.border = "2px solid red";
					document.getElementById("errorPhone").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("errorPhone").style.display = "none";
				}
				break;
            case 4:
                if (!object.value.trim().match(regExZipcode)) {
					object.style.border = "2px solid red";
					document.getElementById("errorZipcode").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("errorZipcode").style.display = "none";
				}
                break;
            case 5:
                if (emptyaddress == "") {
					object.style.border = "2px solid red";
					document.getElementById("invalidaddress").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("invalidaddress").style.display = "none";
				}
                break;
            case 6:
                if (emptycity == "") {
					object.style.border = "2px solid red";
					document.getElementById("invalidcity").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("invalidcity").style.display = "none";
				}
                break;
            case 7:
                if (emptystate == "") {
					object.style.border = "2px solid red";
					document.getElementById("invalidstate").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("invalidstate").style.display = "none";
				}
                break;
            case 8:
                if (emptyfeedback == "") {
					object.style.border = "2px solid red";
					document.getElementById("invalidfeedback").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("invalidfeedback").style.display = "none";
				}
                break;
            case 9:
                if (emptycomments == "") {
					object.style.border = "2px solid red";
					document.getElementById("invalidcomments").style.display = "block";
				}
				else {
					object.style.border = "";
					document.getElementById("invalidcomments").style.display = "none";
				}
                break;
			}
}
        
function emptyFieldValidation() {
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    if (address === "" || city === "" || state === "") {
        alert("All fields must be filled out");
        return false;
    }

    return true;

}

function changeCarModel(object) {
	switch (object.value) {
			case "Honda":
				console.log("print");
				document.getElementById("honda-section").style.display = "block";
				document.getElementById("hyundai-section").style.display = "none";
				document.getElementById("ford-section").style.display = "none";
				document.getElementById("BMW-section").style.display = "none";
                document.getElementById("Audi-section").style.display = "none";
				break;
			case "Hyundai":
				document.getElementById("honda-section").style.display = "none";
				document.getElementById("hyundai-section").style.display = "block";
				document.getElementById("ford-section").style.display = "none";
				document.getElementById("BMW-section").style.display = "none";
                document.getElementById("Audi-section").style.display = "none";
				break;
			case "Ford":
				document.getElementById("honda-section").style.display = "none";
				document.getElementById("hyundai-section").style.display = "none";
				document.getElementById("ford-section").style.display = "block";
				document.getElementById("BMW-section").style.display = "none";
                document.getElementById("Audi-section").style.display = "none";
				break;
			case "BMW":
				document.getElementById("honda-section").style.display = "none";
				document.getElementById("hyundai-section").style.display = "none";
				document.getElementById("ford-section").style.display = "none";
				document.getElementById("BMW-section").style.display = "block";
                document.getElementById("Audi-section").style.display = "none";
            case "Audi":
				document.getElementById("honda-section").style.display = "none";
				document.getElementById("hyundai-section").style.display = "none";
				document.getElementById("ford-section").style.display = "none";
				document.getElementById("BMW-section").style.display = "none";
                document.getElementById("Audi-section").style.display = "block";    
			}
		}

var checking = [];
function onBoxChecked(object) {
	if (object.checked) {
			checking.push(1);
    }
    else {
			checking.pop();
		}

	if (checking.length > 0) {
		document.getElementById("note").style.display = "block";
    }
    else if (checking.length === 0) {
		document.getElementById("note").style.display = "none";
    }
}

function handleData() {
	var form_data = new FormData(document.querySelector("form"));
		if (!form_data.has("source")) {
			document.getElementById("check_option").style.display = "block";
			return false;
		}
		else {
			document.getElementById("check_option").style.display = "none";
			return true;
		}
}

function resetForm() {
	document.getElementById("check_option").style.display = "none";
	document.getElementById("honda-section").style.display = "none";
	document.getElementById("hyundai-section").style.display = "none";
	document.getElementById("ford-section").style.display = "none";
	document.getElementById("BMW-section").style.display = "none";
    document.getElementById("note").style.display = "none";
}

// Insert form data into table

let urlFinalObject = []
const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
let urlFirstName = urlParams.getAll('firstName');
let urlLastName = urlParams.getAll('lastName');
let urlEmail = urlParams.getAll("emailId");
let urlPhone = urlParams.getAll("phoneNumber");
let urlZip = urlParams.getAll('zipcode');
let urlCar = urlParams.getAll('car');
let urlFeedback = urlParams.getAll('feedback');
let urlSource = urlParams.getAll('source');
let urlModelOffered = urlParams.getAll('modeloffered');
let urlComments = urlParams.getAll("text");
let urlTitle = urlParams.getAll("title");
let urlObject = {
            firstName: urlFirstName,
            lastName: urlLastName,
            email: urlEmail,
            phone: urlPhone,
            zip: urlZip,
            car: urlCar,
            modeloffered: urlModelOffered,
            feedback: urlFeedback,
            source: urlSource,
            comments: urlComments,
            urlTitle: urlTitle
        }
        urlFinalObject.push(urlObject);
        for (let i = 0; i < urlFinalObject.length; i++) {
            let tableRow = document.createElement("tr");
            let formTable = document.getElementById("form-table");
            for (let v = 0; v < urlObject.urlTitle.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.urlTitle[v]
                tableRow.appendChild(tableFirstName);

            }
            for (let v = 0; v < urlObject.firstName.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.firstName[v]
                tableRow.appendChild(tableFirstName);

            }
            for (let v = 0; v < urlObject.lastName.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.lastName[v]
                tableRow.appendChild(tableFirstName);

            }
            for (let v = 0; v < urlObject.email.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.email[v]
                tableRow.appendChild(tableFirstName);

            }
            for (let v = 0; v < urlObject.phone.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.phone[v]
                tableRow.appendChild(tableFirstName);

            }
            for (let v = 0; v < urlObject.zip.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.zip[v]
                tableRow.appendChild(tableFirstName);

            }
            let tableSize = document.createElement("td");
            let ServiceSize = ""
            for (let v = 0; v < urlObject.modeloffered.length; v++) {
                ServiceSize = ServiceSize + " " + urlObject.modeloffered[v] + " "
                tableSize.innerHTML = ServiceSize;
            }
            tableRow.appendChild(tableSize);
            for (let v = 0; v < urlObject.feedback.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.feedback[v]
                tableRow.appendChild(tableFirstName);

            }
            let tableSource = document.createElement("td");
            let SourceMedia = ""
            for (let v = 0; v < urlObject.source.length; v++) {
                SourceMedia = SourceMedia + " " + urlObject.source[v] + " "
                tableSource.innerHTML = SourceMedia;
            }
            tableRow.appendChild(tableSource);
            for (let v = 0; v < urlObject.comments.length; v++) {
                let tableFirstName = document.createElement("td")
                tableFirstName.innerHTML = urlObject.comments[v]
                tableRow.appendChild(tableFirstName);

            }
            formTable.appendChild(tableRow);
        }