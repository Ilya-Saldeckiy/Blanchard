var name = $('input[name=fio]').val();
var tel = $('input[name=tel]').val();
var otpravka = true;
if(name==""){
  otpravka = false;
}
if(tel ==""){
  otpravka = false;
}

if(otpravka)
{
  dannie = {'polz_name':name, 'polz_tel':tel};
  $.post('send.php', dannie, function(otvet){
    rezultat = '<div>'+otvet.text+'</div>';
    $("#form_result").hide().html(rezultat).slideDown();
  }, 'json');
}
