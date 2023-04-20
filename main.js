function ol (){
    var inp1 = document.getElementById('inp');
    
    window.localStorage.setItem('inp', inp1.value);
    var div1 = document.getElementById('div1');
    var div = document.createElement('div');
    var inp = document.createElement('input');
    inp.value = inp1.value;
    
    var btn = document.createElement('button');
    var btn1 = document.createElement('button');

    btn.style.width = '100px'
    btn.style.height = '40px'
    btn.style.backgroundColor = 'orang';
    btn.innerText = 'Edit';

    btn1.style.width = '100px'
    btn1.style.height = '40px'
    btn1.style.backgroundColor = 'pink';
    btn1.innerText = 'Delete';

    div.style.width="70%";
    div.style.height = "50px";
    div.style.backgroundColor ="#00334e";
    div.style.borderRadius="20px";
    div.style.marginTop = "10px";
    inp.style.width="70%";
    inp.style.height="50px";
    inp.style.marginLeft ="20px";
    inp.style.border = "none";
    inp.style.outline ="none";
    inp.style.color = "white";
    inp.style.backgroundColor="#00334e"
    inp.setAttribute("readonly", null);
    
    div.appendChild(inp);
    div.appendChild(btn);
    div.appendChild(btn1);
    div1.appendChild(div);
    
    // btn.onclick(e =>{
    //     // inp.removeAttribute("readonly");
    //     console.log("salom")   
    // })
  
    btn.addEventListener("click", e =>{
        // console.log(e);
        if(btn.innerText == "Edit")
        {
            inp.removeAttribute("readonly");
            btn.innerText = "Save";
        }
        else{
            inp.setAttribute("readonly", "null");
            btn.innerText = "Edit";
        }

    //    console.log("salom"); 
    })
    
    btn1.addEventListener("click", e=>{
        div1.removeChild(div);
    })
    
}

function tek(){
    var rad = document.getElementById('rad');
    var rad1 = document.getElementById('rad1');
    var rad2 = document.getElementById('rad2');
    var rad3 = document.getElementById('rad3');
    var h11 = document.getElementById("h11");
     if(rad2.checked == true)
     {
        h11.innerText ="Correct";
        h11.style.color = "green";
     }
     else {
        h11.innerText ="Wrong!";
        h11.style.color = "red";
     }
    console.log(rad.checked,rad1.checked,rad2.checked,rad3.checked);
}