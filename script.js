
let users = ["Vinod", "Shruti", "Rahul"];

let inDiv = document.querySelector(".inDiv");

let addIcon = document.querySelector(".addIcon");





let userIcons = () => {
    users.map((curElm) => {
        inDiv.insertAdjacentHTML("afterbegin", `
        <button class="btn"><span>${curElm}</span></button>
        `)
    })

}

addIcon.addEventListener("click", () => {
    let userName = prompt("Please Enter Your Name");
    if (userName != null && !users.includes(userName)) {
        users.push();
        console.log(users);
        inDiv.insertAdjacentHTML("afterbegin", `
        <button class="btn"><span>${userName}</span></button>
       `)
    } else {
        alert("Username already exist");
    }
})

userIcons();