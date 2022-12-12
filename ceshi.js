localStorage.pass1 = "vEyQNRNFjshsfUQCrghhuDfBfa8dx35B";
function jisuan() {
	// body...
	sernum = parseInt(document.getElementById("shebeihao").value);
	serid = parseInt(31);
	serdata = (document.getElementById("qixian").value);
	
	ss = serdata.toString().split("-");
	sss = ss[0] + ss[1] + ss[2];
	key = (sernum * serid - 1) * 470;
	key2 = sernum % 100;
	data = parseInt(sss + key2);
	a1 = ((key ^ data) % 100).toString();
	a2 = Math.trunc((key ^ data) / 100 % 100).toString();
	a3 = Math.trunc((key ^ data) / 10000 % 100).toString();
	a4 = Math.trunc((key ^ data) / 1000000 % 100).toString();
	a5 = Math.trunc((key ^ data) / 100000000).toString();
	//alert(a5 + "-" + a4 + "-" + a3 + "-" + a2 + "-" + a1);
	//alert(a2);
	var temp3 = document.getElementById("jieguo");
	temp3.innerHTML = a5 + "-" + a4 + "-" + a3 + "-" + a2 + "-" + a1;
}
function baocun() {
	// body...
	usermima = document.getElementById("mima").value; 
	if (localStorage.pass1 == usermima) {
		//window.location.href="ceshi.html";
		var temp1 = document.getElementById("yemian1");
		temp1.style.cssText = "display:none";
		var temp2 = document.getElementById("yemian2");
		temp2.style.cssText = "display:yes";
	}
	else{
		alert("密码错误");
	}
}
function SaveTxt() {
        var FileName = '1.txt'; // 文件名称 - 文件名称后添加“.txt”或“.doc”可以保存为对应格式
        var Content = "gdadahdahsd"; // 文本内容

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(Content));
        element.setAttribute('download', FileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
