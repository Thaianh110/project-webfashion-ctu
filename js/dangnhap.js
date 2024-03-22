const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const adminloginLink = document.querySelector('.adminlogin-link');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active2');
});
adminloginLink.addEventListener('click', () => {
    wrapper.classList.add('active2');
});

function frmValidateRegister() {
    var frm = document.forms['dangky'];
    var username = frm.username;

    //email
    var email = frm.email;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //pass
    var pass = frm.pass;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    //pass2
    var pass2 = frm.pass2;

    //tên đăng nhập k rỗng
    if (username.value.length == 0) {
        alert("Hãy điền tên đăng nhập!");
        username.focus();
        return false;
    }

    if (username.value.length < 8) {
        alert("Tên đăng nhập nhiều hơn 8 ký tự!");
        username.focus();
        return false;
    }

    //định dạng mail
    if (!filter.test(email.value)) {
        alert("Hãy nhập đúng định dạng Mail!");
        email.focus();
        return false;
    }

    //kiem tra mật khẩu
    if (strongRegex.test(pass.value) == false) {
        alert("Mật khẩu ít nhất 8 ký tự, có ký tự in HOA, thường, ký tự đặc biệt và số!");
        pass.focus();
        return false;
    }

    //nhập lại mật khẩu
    if (pass.value != pass2.value) {
        alert("Nhập lại mật khẩu không trùng khớp");
        pass2.focus();
        return false;
    }

    let user = localStorage.getItem('listuser') ? JSON.parse(localStorage.getItem('listuser')) : []
    user.push({
        username: username.value,
        pass: pass.value,
    })

    localStorage.setItem('listuser', JSON.stringify(user))

    alert("Đăng ký thành công!");
    return true;
}
function frmValidateLogin() {
    var frm = document.forms['dangnhap'];
    var username = frm.username;
    var pass = frm.pass;
    let user = localStorage.getItem('listuser') ? JSON.parse(localStorage.getItem('listuser')) : []
    //tên đăng nhập k rỗng
    if (username.value.length == 0) {
        alert("Hãy điền tên đăng nhập!");
        username.focus();
        return false;
    }

    //tên đăng nhập k rỗng
    if (pass.value.length == 0) {
        alert("Hãy điền mật khẩu!");
        pass.focus();
        return false;
    }
    let kq;
    user.forEach(user => {
        if (user.username == username.value) {

            if (user.pass == pass.value) {
                return kq = 1;

            }
        }

    });

    if (kq == 1) {
        alert("Đăng nhập thành công!");
        return true;
    }
    else {
        alert('Sai tài khoản hoặc mật khẩu')
        return false;
    }
}

// đăng nhập sang trang admin 

const  accountadmin = {
    username: "admin1234" ,
    pass: "admin1234"
}

let islogin = false;


function checkLogin(){
    if (islogin){
        window.location.href = "admin.html" ;
    }
}
 
function login(){

    var user = document.getElementById("user2").value;
    var pass = document.getElementById("pass2").value;
    var check =  false;
    if(accountadmin.username === user && accountadmin.pass === pass){
        check = true;
    }
    if (check){
        islogin = true;
        checkLogin();
    }
    else {
        alert("Sai tài khoản or mật khẩu");
    }

}