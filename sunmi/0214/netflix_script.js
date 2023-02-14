

const idForm = document.querySelector('.id1');
const pwForm = document.querySelector('.pw1');
const loginButton = document.querySelector('.login-btn1');
let errStack = 0;

idForm.addEventListener('keyup', activeEvent);
pwForm.addEventListener('keyup', activeEvent);

function activeEvent() {
  switch(!(idForm.value && pwForm.value)){
    case true : loginButton.disabled = true; break;
    case false : loginButton.disabled = false; break;
  }
}



loginButton.addEventListener('click', () => {
    if (idForm.value == 'psm2360440') {
        if (pwForm.value == '1013') {
            alert('로그인 되었습니다!')
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
            if (errStack <= 4)
            {alert(`비밀번호가 ${errStack}회 오입력되었습니다.`)}
            else { alert('로그인이 비활성화되었습니다. 비밀번호를 재설정 해주세요!')}
        
            pwForm.value="";
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
        idForm.value="";
        pwForm.value="";
    }

})

function GetShow(){
    let con = document.getElementById("dviCon");
    let don = document.getElementById("readmore");

    if(con.style.display == "none"){
            con.style.display = "block"
    }

    else{
            con.style.display = "none";
 
    }
}