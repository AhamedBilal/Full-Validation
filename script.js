var r1=/^C\d{3}$/;
var r2=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var r3=/^[1-9]\d*$/;
var r4=/^\d{3}-\d{7}$/;
var r5=/^[1-9]\d*$/;

var cid=$("#inputCID");
var inpname=$("#inputName");
var salary=$("#inputSalary");
var tel=$("#inputTel");
var age=$("#inputAge");
var myform=$("#myForm");



cid.on('keyup',function (e) {
    var txt=cid.val();
    var l=txt.length;
    var res=r1.test(txt);
    if (l<5) {
        if (l == 4) {
            if (res) {
                if (e.which == 13)
                inpname.focus();
            }else {
                alert("Invalid CID format ex: C001 (required)");
                cid.val("");
            }
        }
    }else {
        alert("only 4 chars allowed");
        cid.val("");
    }
});
inpname.on('keypress',function (e) {
    var txt=inpname.val();
    var res=r2.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            salary.focus();
        }else {
            alert("invalid name only a-z,A-Z min-2 max -15 chars allowed(required)")
            inpname.val("");
        }
    }
});
salary.on('keypress',function (e) {
    var txt=salary.val();
    var res=r3.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            tel.focus();
        }else {
            alert("invalid number format (required)")
            salary.val("");
        }
    }
});
tel.on('keypress',function (e) {
    var txt=tel.val();
    var res=r4.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            age.focus();
        }else {
            alert("invalid telephone number format ex: 123-1234567 (required)")
            tel.val("");
        }
    }
});
age.on('keypress',function (e) {
    var txt=age.val();
    var res=r5.test(txt);
    if (e.keyCode == 13 && txt!=null) {
        if (res) {
            $("#submmit").click();
        }else {
            alert("invalid age format (required)")
            age.val("");
        }
    }
});
$(myform).keypress(function (e) {
    if (e.which == 13)
        return false;
});

function fullValidation() {
    var rslt1=r1.test(cid.val()),
        rslt2=r2.test(inpname.val()),
        rslt3=r3.test(salary.val()),
        rslt4=r4.test(tel.val()),
        rslt5=r5.test(age.val());
    var xArray=[
        cid.val(),
        inpname.val(),
        salary.val(),
        tel.val(),
        age.val()
    ];
    var bool=true;
    for (var i = 0; i < xArray.length; i++) {
        if (xArray[i] == "") {
            bool = false;
            alert("all feilds are required");
            return false;
        }
    }
    if (rslt1 && rslt2 && rslt3 && rslt4 && rslt5 && bool){
        return true;
    }else {
        alert("invalid Inputs");
        cid.val("");
        inpname.val("");
        salary.val("");
        tel.val("");
        age.val("");
        return false;
    }
}