$(document).ready(function () {
   var submit = $("button[type='reset']");
   submit.click(function () {
      var data = $('form#myForm_viet').serialize();
      if (data == "surname=&name=&email=&phone=&org=&computers=") {
         var check = checkform("myForm")
         if (check === false){
            return false
         }
         var data = $('form#myForm').serialize();
      }
      else {
         var check = checkform("myForm_viet")
         if (check === false){
            return false
         }
      }

      $.ajax({
         type: 'GET',
         url: 'https://script.google.com/macros/s/AKfycbyENptYxfqW0cvYzv9MEnAvVbLmSMr2iOIfFhtYk8cBb_t4jdoEcULfgw/exec',
         dataType: 'json',
         crossDomain: true,
         data: data,
         success: function (data) {
            if (data == 'false') {
               alert('Adding of your information has failed, please try again');
            } else {
               window.location.href = "thankyou.html"
               // alert('Thank you!')
            }
         }
      });
   });

   function checkform(formnumber){

      var Surname = document.forms[formnumber]["surname"].value;
      var Name = document.forms[formnumber]["name"].value;
      var Phone = document.forms[formnumber]["phone"].value;
      var Organisation = document.forms[formnumber]["org"].value;
      var Email = document.forms[formnumber]["email"].value;

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (Surname === "" || Name ===""){
         alert('Surname or Name cannot be empty, Họ hoặc Tên không được để trống')
         return false
      }
      else if(Email === ""){
         alert('Email cannot be empty, Email không được để trống')
         return false
      }
      else if(Phone === ""){
         alert('Phone number cannot be empty, Số điện thoại không được để trống')
         return false
      }
      else if(Organisation === ""){
         alert('Organisation Name cannot be empty, Tên tổ chức không được để trống')
         return false
      }

      if(Email.match(mailformat)){
         return true;
      }
      else{
         alert("Please check your email format, Vui lòng kiểm tra định dạng email của bạn");
         return false;
      }
   }
});