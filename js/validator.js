var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var form = document.getElementById('form');
var cmnd = document.getElementById('cmnd');
var genders = document.getElementsByName('gender');
var fullName = document.getElementById('name');
var address = document.getElementById('address');
var email = document.getElementById('email');
var bangLai = $$('input[name="banglai"]');
var  genders = document.getElementsByName('gender');
var mauXe = $$('input[name="mauxe"]');
var chonLoaiXe = $('#loaixe');
var note = $('#note');

form.addEventListener('submit', e =>  {
    e.preventDefault();
    cccd();
    fullNamee();
    diaChi();
    ValidateEmail();
    validator();
    ghiChu();
})
function cccd() {
    errorMessage(cmnd, 'Không để trống CMND/CCCD *');
    $('.fa-check').setAttribute('style', 'display: none')
    $('.fa-xmark').setAttribute('style', 'display: block')
    var NumberCMND = Number(cmnd.value);
    if(NumberCMND < 0) {
        errorMessage(cmnd, 'Bạn phải nhập số nguyên dương *');
    } else if(isNaN(NumberCMND)) {
        errorMessage(cmnd, 'Bạn phải nhập số *');
    } else if (String(cmnd.value).length > 12){
        errorMessage(cmnd, 'Số CMND/CCCD chỉ được nhập tối đa 12 ký tự');
    } else if(NumberCMND > 0) {
        $('.fa-check').setAttribute('style', 'display: block')
        $('.fa-xmark').setAttribute('style', 'display: none');
        successMessage(cmnd);
    }
}
function fullNamee() {
    $('.icon-1').setAttribute('style', 'display: block')
    $('.icon-11').setAttribute('style', 'display: none')
    if (fullName.value == '') {
        errorMessage(fullName, 'Tên không được để trống');
    } else if((fullName.value).length <= 50) {
        $('.icon-1').setAttribute('style', 'display: none')
        $('.icon-11').setAttribute('style', 'display: block');
        successMessage(fullName);
    } else{
        errorMessage(fullName, 'Họ và tên chỉ được phép nhập tối đa 50 ký tự');
    }
}

function diaChi() {
    $('.icon-2').setAttribute('style', 'display: block')
    $('.icon-22').setAttribute('style', 'display: none')
    if (address.value == '') {
        errorMessage(address, 'Địa chỉ không được để trống');
    } else if((address.value).length <= 100) {
        $('.icon-2').setAttribute('style', 'display: none')
        $('.icon-22').setAttribute('style', 'display: block');
        successMessage(address);
    } else{
        errorMessage(address, 'Đia chỉ chỉ được phép nhập tối đa 100 ký tự');
    }
}
function ghiChu() {
    $('.icon-8').setAttribute('style', 'display: block')
    $('.icon-88').setAttribute('style', 'display: none')
    if (note.value == '') {
        errorMessage(note, 'Ghi chú không được để trống');
        $('.ghichu').style.border = '1px solid red';
    } else if((note.value).length >= 200) {
        $('.icon-8').setAttribute('style', 'display: none')
        $('.icon-88').setAttribute('style', 'display: block');
        $('.ghichu').style.border = '1px solid rgb(19, 228, 0)'

        successMessage(note);
    } else{
        errorMessage(note, 'Ghi chú chỉ được phép nhập tối thiểu 100 ký tự');
    }
}
// email
function ValidateEmail() {
    $('.icon-3').setAttribute('style', 'display: block')
    $('.icon-33').setAttribute('style', 'display: none')
    if (email.value == '') {
        errorMessage(email, 'Email không được để trống *');
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        $('.icon-3').setAttribute('style', 'display: none');
        $('.icon-33').setAttribute('style', 'display: block');
        successMessage(email);
    }
}
function validator() {
    // gioi tinh
    if(!genders[0].checked && !genders[1].checked) {
        $('.gender').innerText ='Chưa chọn giới tính *';
        $('#iframe').style.border = '1px solid red';
        $('.icon-4').setAttribute('style', 'display: block')
        $('.icon-44').setAttribute('style', 'display: none')
    }else{
        $('.gender').innerText = '';
        $('.icon-4').setAttribute('style', 'display: none')
        $('.icon-44').setAttribute('style', 'display: block')
        $('#iframe').style.border = '1px solid rgb(19, 228, 0)'
    }
    // bằng lái
    if(!bangLai[0].checked && !bangLai[1].checked) {
        $('.banglai').innerText = 'Vui lòng chọn!';
        $('#iframe2').style.border = '1px solid red';
        $('.icon-5').setAttribute('style', 'display: block')
        $('.icon-55').setAttribute('style', 'display: none')
    }else{
        $('.banglai').innerText = '';
        $('.icon-5').setAttribute('style', 'display: none')
        $('.icon-55').setAttribute('style', 'display: block')
        $('#iframe2').style.border = '1px solid rgb(19, 228, 0)'
    }

    // màu xe
    var check = 0;  
    for (var i = 0; i < mauXe.length; i++) {
        if (mauXe[i].checked == true) {
        check++;
        }
    }
    if (check ==0) {
        $('.icon-7').setAttribute('style', 'display: block')
        $('.icon-77').setAttribute('style', 'display: none')
        $('.mau').innerText = 'Phải chọn màu xe *';
        $('#iframe3').style.border = '1px solid red';
    } else {
        $('.mau').innerText = ''
        $('.icon-7').setAttribute('style', 'display: none')
        $('.icon-77').setAttribute('style', 'display: block')
        $('#iframe3').style.border = '1px solid rgb(19, 228, 0)';
    }
    // Chon loai xe
    if (chonLoaiXe.value == 0) {
        $('.icon-6').setAttribute('style', 'display: block')
        $('.icon-66').setAttribute('style', 'display: none')
        $('.loaixe').innerText = 'Phái chọn loại xe *';
        $('#iframe4').style.border = '1px solid red';
    }else {
        $('.loaixe').innerText = ''
        $('.icon-6').setAttribute('style', 'display: none')
        $('.icon-66').setAttribute('style', 'display: block')
        $('#iframe4').style.border = '1px solid rgb(19, 228, 0)';
    }
}

// setloi

function errorMessage(input, message) {
    var formGroup = input.parentElement;
    var span = formGroup.querySelector('span');
    formGroup.className = 'form-group error';
    span.innerText = message;
}
// thanh cong
function successMessage(input) {
    var formGroup = input.parentElement;
    var span = formGroup.querySelector('span');
    span.innerText = '';
    formGroup.className = 'form-group success';
}