$(document).ready(function () {
    // button type which for me: mine is 'reset'
    var submit = $("button[type='button']"); 
    submit.click(function () {
       // serialize = to convert form data into a JavaScript object 
       var data = $('form#myContact-Form_viet').serialize();
       // check if the form is empty, it will the function checkform (codes at the bottom)
       if (data == "surname=&name=&email=&phone=&org=&computers=") {
          var check = formCheck("myContact-Form")
          if (check === false){
             return false
          }
          var data = $('form#myContact-Form').serialize();
       }
       else {
          var check = formCheck("myContact-Form_viet")
          if (check === false){
             return false
          }
       }
 
       $.ajax({
          type: 'GET',
          // google app scripts webapp link
          url: 'https://script.google.com/macros/s/AKfycbyENptYxfqW0cvYzv9MEnAvVbLmSMr2iOIfFhtYk8cBb_t4jdoEcULfgw/exec', 
          dataType: 'json',
          crossDomain: true,
          data: data,
          success: function (data) {
             if (data == 'false') {
                alert('Adding of your information has failed, please try again');
             } else {
                // window.location.replace('thankyou.html');
                window.location.href = "thankyou.html";
                // return false;
                // alert('Thank you!')
             }
          }
       });
    });
 
    function formCheck(formnumber){
 
       var Surname = document.forms[formnumber]["surname"].value;
       var Name = document.forms[formnumber]["name"].value;
       var Phone = document.forms[formnumber]["phone"].value;
       var Organisation = document.forms[formnumber]["org"].value;
       var Email = document.forms[formnumber]["email"].value;
       var Computers = document.forms[formnumber]["computers"].value;
 
       // check email format using regex
       var emailFormat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); 
 
       // if any inputs are empty, this will run
       if (Surname === "") {
            alert('Surname cannot be empty, Họ không được để trống')
            return false
       }
       else if (Name === "") {
            alert('Name cannot be empty, Tên không được để trống')
            return false
       }
       else if (Email === "") {
            alert('Email cannot be empty, Email không được để trống')
            return false
       }
       else if (Phone === "") {
            alert('Phone number cannot be empty, Số điện thoại không được để trống')
            return false
       }
       else if (Organisation === "") {
            alert('Organisation Name cannot be empty, Tên tổ chức không được để trống')
            return false
       }
       else if (Computers > '50') {
            alert('Computers cannot be more than 50, Máy tính không được nhiều hơn 50')
            return false
        }
 
       if (Email.match(emailFormat)) {
            return true;
       }
       else {
            alert('Please check your email format, Vui lòng kiểm tra định dạng email của bạn');
            return false;
       }
    }
 });