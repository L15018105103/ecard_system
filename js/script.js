(function () {
  var btn = document.querySelector('.btn');
  var flag = true;//判断是否已经生成了二维码了
  var oQrcode = document.getElementById('qrcode');
  btn.onclick = function () {
    if(flag){//第一次的话需要清除二维码生成的区域里面的文字内容
      flag = false;
      oQrcode.innerHTML = '';
    }
    else{//之后要清除原来已经生成过的二维码
      var oCan = oQrcode.children[0];
      var oImg = oQrcode.children[1];
      oQrcode.removeChild(oCan);
      oQrcode.removeChild(oImg);
    }
    var name = "FN:" + document.getElementById("name").value + "\n",
      company = "ORG:" + document.getElementById("company").value + "\n",
      job = "TITLE:" + document.getElementById("job").value + "\n",
      address = "ADR:" + document.getElementById("address").value + "\n",
      mobile = "TEL:" + document.getElementById("mobile").value + "\n",
      email = "EMAIL:" + document.getElementById("email").value + "\n",
      web = "URL:" +document.getElementById("web").value + "\n",
      remark = "NOTE:" +document.getElementById("remark").value + "\n";
    var info = "BEGIN:VCARD\n" + name + company + job + address
      + mobile + email + web + remark + "END:VCARD";
    var qrcode = new QRCode("qrcode");//创建生成二维码对象
    qrcode.makeCode(info);
  }
})();