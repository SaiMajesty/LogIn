let bEl = document.getElementById("btn");
let addUserFormEl = document.getElementById("addUserForm");
let uEl = document.getElementById("name");
let mEl = document.getElementById("mobile");
let backEl = document.getElementById("back");

backEl.onclick = function() {
    window.location.href = ("https://loginpageone.ccbp.tech/");
}
bEl.onclick = function() {
    let uVal = uEl.value;
    let mVal = mEl.value;
    if (uVal !== "" && mVal !== "") {

        alert("Successfully Submitted your details");
       

    } else {

        alert("Missing one of the detail ");

    }

}
addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

});