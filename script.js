const menu = document.getElementById("menu");
const slidebar = document.getElementById("slide");

menu.addEventListener("click",()=>{
    if (menu.src.includes("menu.png")) {
        menu.src = "close.png"
        slidebar.style.display = "flex";
    }
    else{
        menu.src = "menu.png"
        slidebar.style.display = "none"
    }
    
})
// contact , emailjs
emailjs.init("ojDVnOOa-KEi24bad");

//getting all the inputs
const F_name = document.getElementById("fname");
const L_name = document.getElementById("lname");
const ph = document.getElementById("phone");
const email = document.getElementById("email");
const q = document.getElementById("query");

const button = document.getElementById("btn");

button.addEventListener("click",()=>{
    const name = F_name.value.trim();
    const lname = L_name.value.trim();
    const phone = ph.value.trim();
    const Email = email.value.trim();
    const query = q.value.trim();

    if(name === "" && lname==="" && Email === ""){
        alert("Please, Fill all the particulars");
    }
    else{


        //making the object
    var templateParams = {
        Fname : name,
        Lname : lname,
        ph : phone,
        email : Email,
        message:query,

    };

    emailjs.send('service_4hh5wqb','template_1apfez4',templateParams).then((result) => {
        alert("Thank you, your Message has been sent!");
    }).catch((err) => {
        console.log(err);
        alert("Failed to send ur email!");
        alert("Please try later");
    });
    F_name.value="";
    L_name.value="";
    ph.value="";
    email.value="";
    q.value="";





    }
    

})