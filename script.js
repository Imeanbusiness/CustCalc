var deg = true;
var var1 = "0";
var absvar1 = 0;
var dispvar1 = "0";
var var1Bool = false;
var var2 = "+";
var dispvar2 = "0";
var var2Bool = false;
var var3 = "0";
var dispvar3 = "0";
var var3Bool = false;
var absvar3 = 0;
var sin = false;
var cos = false;
var tan = false;
var asin = false;
var acos = false;
var atan = false;
var neg = false;
var sqrt = false;
var fact = false;

const factorialSeq = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000, 25852016738884976640000, 620448401733239439360000, 15511210043330985984000000, 403291461126605635584000000, 10888869450418352160768000000, 304888344611713860501504000000, 8841761993739701954543616000000, 265252859812191058636308480000000, 8222838654177922817725562880000000, 263130836933693530167218012160000000, 8683317618811886495518194401280000000, 295232799039604140847618609643520000000, 10333147966386144929666651337523200000000, 371993326789901217467999448150835200000000];
const degrees = Math.PI/180;
const degree2 = 180/Math.PI;
//clear
try {
    saved = localStorage.getItem("saved")
} catch (error) {
    saved = "nope!";
}
//update
//debug
if (saved == "nope!") {
    localStorage.setItem("bgfile","WebBack.png")
    localStorage.setItem("color1","#ffffff")
    localStorage.setItem("color2","#000000")
    localStorage.setItem("saved","yeah!")
}
file = localStorage.getItem("bgfile");
document.getElementById("mainbg").style.backgroundImage = "url(\""+file+"\")";
color = localStorage.getItem("color1");
document.getElementById("button").style.backgroundColor = color;
document.getElementById("button1").style.backgroundColor = color;
document.getElementById("button2").style.backgroundColor = color;
document.getElementById("button3").style.backgroundColor = color;
document.getElementById("button4").style.backgroundColor = color;
document.getElementById("button5").style.backgroundColor = color;
document.getElementById("button6").style.backgroundColor = color;
document.getElementById("button7").style.backgroundColor = color;
document.getElementById("button8").style.backgroundColor = color;
document.getElementById("button9").style.backgroundColor = color;
document.getElementById("button10").style.backgroundColor = color;
document.getElementById("button11").style.backgroundColor = color;
document.getElementById("button12").style.backgroundColor = color;
document.getElementById("button13").style.backgroundColor = color;
document.getElementById("button14").style.backgroundColor = color;
document.getElementById("button15").style.backgroundColor = color;
document.getElementById("button16").style.backgroundColor = color;
document.getElementById("button17").style.backgroundColor = color;
document.getElementById("button18").style.backgroundColor = color;
document.getElementById("button19").style.backgroundColor = color;
document.getElementById("button20").style.backgroundColor = color;
document.getElementById("button21").style.backgroundColor = color;
document.getElementById("button22").style.backgroundColor = color;
document.getElementById("button23").style.backgroundColor = color;
document.getElementById("button24").style.backgroundColor = color;
color = localStorage.getItem("color2");
document.getElementById("button").style.color = color;
document.getElementById("button1").style.color = color;
document.getElementById("button2").style.color = color;
document.getElementById("button3").style.color = color;
document.getElementById("button4").style.color = color;
document.getElementById("button5").style.color = color;
document.getElementById("button6").style.color = color;
document.getElementById("button7").style.color = color;
document.getElementById("button8").style.color = color;
document.getElementById("button9").style.color = color;
document.getElementById("button10").style.color = color;
document.getElementById("button11").style.color = color;
document.getElementById("button12").style.color = color;
document.getElementById("button13").style.color = color;
document.getElementById("button14").style.color = color;
document.getElementById("button15").style.color = color;
document.getElementById("button16").style.color = color;
document.getElementById("button17").style.color = color;
document.getElementById("button18").style.color = color;
document.getElementById("button19").style.color = color;
document.getElementById("button20").style.color = color;
document.getElementById("button21").style.color = color;
document.getElementById("button22").style.color = color;
document.getElementById("button23").style.color = color;
document.getElementById("button24").style.color = color;

//debug

//update
//equals

function Reset() {
    if (confirm("Are you sure you want to reset your customizations?")) {
        localStorage.setItem("bgfile","WebBack.png")
        localStorage.setItem("color1","#ffffff")
        localStorage.setItem("color2","#000000")
        localStorage.setItem("saved","yeah!")
        file = localStorage.getItem("bgfile");
        document.getElementById("mainbg").style.backgroundImage = "url(\""+file+"\")";
        color = localStorage.getItem("color1");
        document.getElementById("button").style.backgroundColor = color;
        document.getElementById("button1").style.backgroundColor = color;
        document.getElementById("button2").style.backgroundColor = color;
        document.getElementById("button3").style.backgroundColor = color;
        document.getElementById("button4").style.backgroundColor = color;
        document.getElementById("button5").style.backgroundColor = color;
        document.getElementById("button6").style.backgroundColor = color;
        document.getElementById("button7").style.backgroundColor = color;
        document.getElementById("button8").style.backgroundColor = color;
        document.getElementById("button9").style.backgroundColor = color;
        document.getElementById("button10").style.backgroundColor = color;
        document.getElementById("button11").style.backgroundColor = color;
        document.getElementById("button12").style.backgroundColor = color;
        document.getElementById("button13").style.backgroundColor = color;
        document.getElementById("button14").style.backgroundColor = color;
        document.getElementById("button15").style.backgroundColor = color;
        document.getElementById("button16").style.backgroundColor = color;
        document.getElementById("button17").style.backgroundColor = color;
        document.getElementById("button18").style.backgroundColor = color;
        document.getElementById("button19").style.backgroundColor = color;
        document.getElementById("button20").style.backgroundColor = color;
        document.getElementById("button21").style.backgroundColor = color;
        document.getElementById("button22").style.backgroundColor = color;
        document.getElementById("button23").style.backgroundColor = color;
        document.getElementById("button24").style.backgroundColor = color;
        color = localStorage.getItem("color2");
        document.getElementById("button").style.color = color;
        document.getElementById("button1").style.color = color;
        document.getElementById("button2").style.color = color;
        document.getElementById("button3").style.color = color;
        document.getElementById("button4").style.color = color;
        document.getElementById("button5").style.color = color;
        document.getElementById("button6").style.color = color;
        document.getElementById("button7").style.color = color;
        document.getElementById("button8").style.color = color;
        document.getElementById("button9").style.color = color;
        document.getElementById("button10").style.color = color;
        document.getElementById("button11").style.color = color;
        document.getElementById("button12").style.color = color;
        document.getElementById("button13").style.color = color;
        document.getElementById("button14").style.color = color;
        document.getElementById("button15").style.color = color;
        document.getElementById("button16").style.color = color;
        document.getElementById("button17").style.color = color;
        document.getElementById("button18").style.color = color;
        document.getElementById("button19").style.color = color;
        document.getElementById("button20").style.color = color;
        document.getElementById("button21").style.color = color;
        document.getElementById("button22").style.color = color;
        document.getElementById("button23").style.color = color;
        document.getElementById("button24").style.color = color;
        clears()
    }
}

function del() {
    if (var1Bool == false && var1.length >= 2) {
        var1 = var1.substring(0,var1.length-1)
    } else if (var3Bool == false && var3.length >= 2) {
        var3 = var3.substring(0,var3.length-1)
    }
    update()
}

function execute() {

    try {
        absvar1 = Number(var1);
        if (deg == true) {
            if (sin == true) {
                
                absvar1 = Math.sin(absvar1 * degrees);
            }
            if (cos == true) {
                
                absvar1 = Math.cos(absvar1 * degrees);
            }
            if (tan == true) {
                
                absvar1 = Math.tan(absvar1 * degrees);
            }
            if (asin == true) {
                
                absvar1 = Math.asin(absvar1) * degree2;
            }
            if (acos == true) {
                
                absvar1 = Math.acos(absvar1) * degree2;
            }
            if (atan == true) {
                
                absvar1 = Math.atan(absvar1) * degree2;
            }
        } else {
            if (sin == true) {
                absvar1 = Math.sin(absvar1);
            }
            if (cos == true) {
                absvar1 = Math.cos(absvar1);
            }
            if (tan == true) {
                absvar1 = Math.tan(absvar1);
            }
            if (asin == true) {
                absvar1 = Math.asin(absvar1);
            }
            if (acos == true) {
                absvar1 = Math.acos(absvar1);
            }
            if (atan == true) {
                absvar1 = Math.atan(absvar1);
            }
        }

        if (sqrt == true) {
            absvar1 = Math.sqrt(absvar1)

        }

        if (fact == true) {
            FactVar = absvar1-1
            try {
                absvar1 = factorialSeq[Factvar];
            } catch (error) {
                alert("ERROR Please retry")
                clears()
            }
        }
    } catch (error) {
        alert("ERROR. Please retry")
        clears()
    }
    update()
    var1Bool = true;
    sin = false;
    cos = false;
    tan = false;
    asin = false;
    acos = false;
    atan = false;
    neg = false;
    sqrt = false;
    fact = false;
    document.getElementById("sine").style.backgroundColor = "#ff0000";
    document.getElementById("cosine").style.backgroundColor = "#ff0000";
    document.getElementById("tangent").style.backgroundColor = "#ff0000";
    document.getElementById("neg").style.backgroundColor = "#ff0000";
    document.getElementById("sqrt").style.backgroundColor = "#ff0000";
    document.getElementById("fact").style.backgroundColor = "#ff0000";
}
//asine
function equals() {
    if (var1Bool == false) {
        execute();
    }
    try {
        absvar3 = Number(var3);
        if (deg == true) {
            if (sin == true) {
                absvar3 = Math.sin(absvar3 * degrees);
            }
            if (cos == true) {
                absvar3 = Math.cos(absvar3 * degrees);
            }
            if (tan == true) {
                absvar3 = Math.tan(absvar3 * degrees);
            }
            if (asin == true) {
                
                absvar3 = Math.asin(absvar3) * degree2;
            }
            if (acos == true) {
                
                absvar3 = Math.acos(absvar3) * degree2;
            }
            if (atan == true) {
                
                absvar3 = Math.atan(absvar3) * degree2;
            }
        } else {
            if (sin == true) {
                absvar3 = Math.sin(absvar3);
            }
            if (cos == true) {
                absvar3 = Math.cos(absvar3);
            }
            if (tan == true) {
                absvar3 = Math.tan(absvar3);
            }
            if (asin == true) {
                
                absvar3 = Math.asin(absvar1);
            }
            if (acos == true) {
                
                absvar3 = Math.acos(absvar1);
            }
            if (atan == true) {
                
                absvar3 = Math.atan(absvar1);
            }
        }

        if (sqrt == true) {
            absvar3 = Math.sqrt(absvar3)

        }

        if (fact == true) {
            FactVar = absvar3-1
            try {
                absvar3 = factorialSeq[Factvar];
            } catch (error) {
                alert("ERROR Please retry")
                clears()
            }
        }
        if (var2 == "+") {
            var1 = absvar1+absvar3
        } else if (var2 == "-") {
            var1 = absvar1-absvar3
        } else if (var2 == "x") {
            var1 = absvar1*absvar3
        } else if (var2 == "÷") {
            var1 = absvar1/absvar3
        } else if (var2 == "^") {
            var1 = absvar1**absvar3
        } else {
            var1 = absvar1
        } 
    } catch (error) {
        alert("ERROR. Please retry")
        clears()
    }
    var1 = var1.toString();
    var1Bool = false;
    var2Bool = false;
    var3 = "0";
    document.getElementById("sine").style.backgroundColor = "#ff0000";
    document.getElementById("cosine").style.backgroundColor = "#ff0000";
    document.getElementById("tangent").style.backgroundColor = "#ff0000";
    document.getElementById("neg").style.backgroundColor = "#ff0000";
    document.getElementById("sqrt").style.backgroundColor = "#ff0000";
    document.getElementById("fact").style.backgroundColor = "#ff0000";
    update()
    
}
//asine
function update() {
    if (var1Bool == false) {
        dispvar1 = var1
    } else {

        dispvar3 = var3

    }

    if (sqrt == true) {
        if (var1Bool == false) {
            dispvar1 = "√"+dispvar1;
        } else {
            dispvar3 = "√"+dispvar3;
        }
    }

    if (sin == true) {
        if (var1Bool == false) {
            dispvar1 = "sin "+dispvar1;
        } else {
            dispvar3 = "sin "+dispvar3;
        }
    }
    if (cos == true) {
        if (var1Bool == false) {
            dispvar1 = "cos "+dispvar1;
        } else {
            dispvar3 = "cos "+dispvar3;
        }
    }
    
    if (atan == true) {
        if (var1Bool == false) {
            dispvar1 = "atan "+dispvar1;
        } else {
            dispvar3 = "atan "+dispvar3;
        }
    }
    if (asin == true) {
        if (var1Bool == false) {
            dispvar1 = "asin "+dispvar1;
        } else {
            dispvar3 = "asin "+dispvar3;
        }
    }
    if (acos == true) {
        if (var1Bool == false) {
            dispvar1 = "acos "+dispvar1;
        } else {
            dispvar3 = "acos "+dispvar3;
        }
    }
    
    if (tan == true) {
        if (var1Bool == false) {
            dispvar1 = "tan "+dispvar1;
        } else {
            dispvar3 = "tan "+dispvar3;
        }
    }
    
    if (fact == true) {
        if (var1Bool == false) {
            dispvar1 = dispvar1+"!";
        } else {
            dispvar3 = dispvar3+"!";
        }
    }




    if (var1Bool == false) {
        document.getElementById("maincalc").innerHTML = dispvar1;
    } else if (var2Bool == false) {
        document.getElementById("maincalc").innerHTML = var2;
    } else {

        document.getElementById("maincalc").innerHTML = dispvar3;

    }

    
}

function atangent() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (atan == false) {
            
            document.getElementById("atan").style.backgroundColor = "#00ff00";
            document.getElementById("sine").style.backgroundColor = "#ff0000";
            document.getElementById("cosine").style.backgroundColor = "#ff0000";
            document.getElementById("tangent").style.backgroundColor = "#ff0000";
            document.getElementById("asin").style.backgroundColor = "#ff0000";
            document.getElementById("acos").style.backgroundColor = "#ff0000";
            tan  = false;
            cos = false;
            sin = false;
            acos = false;
            asin = false;
            atan = true;
        } else {

            atan = false;
            document.getElementById("atan").style.backgroundColor = "#ff0000";
        }
    }
    update();

}

function acosine() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (cos == false) {
            
            document.getElementById("tangent").style.backgroundColor = "#ff0000";
            document.getElementById("sine").style.backgroundColor = "#ff0000";
            document.getElementById("acos").style.backgroundColor = "#00ff00";
            document.getElementById("atan").style.backgroundColor = "#ff0000";
            document.getElementById("asin").style.backgroundColor = "#ff0000";
            document.getElementById("cosine").style.backgroundColor = "#ff0000";
            acos = true;
            tan = false;
            sin = false;
            cos = false;
            asin = false;
            atan = false;
        } else {

            acos = false;
            document.getElementById("acos").style.backgroundColor = "#ff0000";
        }
    }
    update();

}
//debug
asin = false
function asine() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (asin == false) {
            
            document.getElementById("tangent").style.backgroundColor = "#ff0000";
            document.getElementById("asin").style.backgroundColor = "#00ff00";
            document.getElementById("cosine").style.backgroundColor = "#ff0000";
            document.getElementById("atan").style.backgroundColor = "#ff0000";
            document.getElementById("sine").style.backgroundColor = "#ff0000";
            document.getElementById("acos").style.backgroundColor = "#ff0000";
            sin = false;
            cos = false;
            tan = false;
            acos = false;
            asin = true;
            atan = false;
        } else {

            asin = false;
            document.getElementById("asin").style.backgroundColor = "#ff0000";
        }
    }
    update();

}

function tangent() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (tan == false) {
            
            document.getElementById("tangent").style.backgroundColor = "#00ff00";
            document.getElementById("sine").style.backgroundColor = "#ff0000";
            document.getElementById("cosine").style.backgroundColor = "#ff0000";
            document.getElementById("atan").style.backgroundColor = "#ff0000";
            document.getElementById("asin").style.backgroundColor = "#ff0000";
            document.getElementById("acos").style.backgroundColor = "#ff0000";
            tan = true;
            cos = false;
            sin = false;
            acos = false;
            asin = false;
            atan = false;
        } else {

            tan = false;
            document.getElementById("tangent").style.backgroundColor = "#ff0000";
        }
    }
    update();

}
//tangent
function sine() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (sin == false) {
            
            document.getElementById("tangent").style.backgroundColor = "#ff0000";
            document.getElementById("sine").style.backgroundColor = "#00ff00";
            document.getElementById("cosine").style.backgroundColor = "#ff0000";
            document.getElementById("atan").style.backgroundColor = "#ff0000";
            document.getElementById("asin").style.backgroundColor = "#ff0000";
            document.getElementById("acos").style.backgroundColor = "#ff0000";
            sin = true;
            cos = false;
            tan = false;
            acos = false;
            asin = false;
            atan = false;
        } else {

            sin = false;
            document.getElementById("sine").style.backgroundColor = "#ff0000";
        }
    }
    update();

}

function cosine() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (cos == false) {
            
            document.getElementById("tangent").style.backgroundColor = "#ff0000";
            document.getElementById("sine").style.backgroundColor = "#ff0000";
            document.getElementById("cosine").style.backgroundColor = "#00ff00";
            document.getElementById("atan").style.backgroundColor = "#ff0000";
            document.getElementById("asin").style.backgroundColor = "#ff0000";
            document.getElementById("acos").style.backgroundColor = "#ff0000";
            cos = true;
            tan = false;
            sin = false;
            acos = false;
            asin = false;
            atan = false;
        } else {

            cos = false;
            document.getElementById("cosine").style.backgroundColor = "#ff0000";
        }
    }
    update();

}


function sqrtx() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (sqrt == false) {
            
            document.getElementById("sqrt").style.backgroundColor = "#00ff00";
            sqrt = true;
        } else {

            sqrt = false;
            document.getElementById("sqrt").style.backgroundColor = "#ff0000";
        }
    }
    update();
}

function factorial() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (fact == false) {
            
            document.getElementById("fact").style.backgroundColor = "#00ff00";
            fact = true;
        } else {

            fact = false;
            document.getElementById("fact").style.backgroundColor = "#ff0000";
        }
    }
    update();
}

function degb() {
    deg = true;
    update();
    document.getElementById("degb").style.backgroundColor = "#00ff00";
    document.getElementById("radb").style.backgroundColor = "#ff0000";
}




function rad() {
    deg = false;
    update();
    document.getElementById("radb").style.backgroundColor = "#00ff00";
    document.getElementById("degb").style.backgroundColor = "#ff0000";
}

function zero() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }


    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "0";
        }
    } else if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "0";
        }
    }

    
    update();
}

function pidown() {
    pier = Math.PI
    if (var1Bool == false) {
        
        var1 = pier.toString();
    } else {
        var3 = pier.toString();
    }
    update()
}

function clears() {
    var1 = "0";
    absvar1 = 0;
    dispvar1 = "0";
    var1Bool = false;
    var2 = "0";
    dispvar2 = "0";
    var2Bool = false;
    var3 = "0";
    dispvar3 = "0";
    var3Bool = false;
    absvar3 = 0;
    sin = false;
    cos = false;
    tan = false;
    asin = false;
    acos = false;
    atan = false;
    neg = false;
    sqrt = false;
    fact = false;
    document.getElementById("sine").style.backgroundColor = "#ff0000";
    document.getElementById("cosine").style.backgroundColor = "#ff0000";
    document.getElementById("tangent").style.backgroundColor = "#ff0000";
    document.getElementById("neg").style.backgroundColor = "#ff0000";
    document.getElementById("sqrt").style.backgroundColor = "#ff0000";
    document.getElementById("fact").style.backgroundColor = "#ff0000";
    document.getElementById("atan").style.backgroundColor = "#ff0000";
    document.getElementById("asin").style.backgroundColor = "#ff0000";
    document.getElementById("acos").style.backgroundColor = "#ff0000";
    update();
}

function decimal() {
    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += ".";
        }
    } else {
        if (var3.length <= 40) {
            var3 += ".";
        }
    }

    
    update();
}

function negat() {
    if (var1Bool == true && var2Bool == false) {
        return;
    } else {
        if (neg == false) {
            if (var1Bool == false) {
                var1 = "-"+var1;
            } else {
                var3 = "-"+var3;
            }
            document.getElementById("neg").style.backgroundColor = "#00ff00";
            neg = true;
        } else {
            if (var1Bool == false) {
                var1 = var1.replace("-","");
            } else {
                var3 = var3.replace("-","");
            }
            neg = false;
            document.getElementById("neg").style.backgroundColor = "#ff0000";
        }
    }
    update();
    
}



function one() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;

    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "1";
        }
    } else if (var2Bool == true)  {
        if (var3.length <= 40) {
            var3 += "1";
        }
    }

    
    update();
}

function two() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "2";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "2";
        }
    }
    update();
}

function three() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "3";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "3";
        }
    }
    update();
}

function four() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "4";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "4";
        }
    }
    update();
}

function five() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "5";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "5";
        }
    }
    update();
}

function six() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "6";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "6";
        }
    }
    update();
}

function seven() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "7";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "7";
        }
    }
    update();
}

function eight() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "8";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "8";
        }
    }
    update();
}

function nine() {
    if (var1Bool == true && var2Bool == false) {
        var2Bool = true;
    }

    if (var1Bool == false) {
        if (var1.length <= 40) {
            var1 += "9";
        }
    } else  if (var2Bool == true) {
        if (var3.length <= 40) {
            var3 += "9";
        }
    }
    update();
}

function plus() {
    var2 = "+";
    execute()
    update()
}

function minus() {
    var2 = "-";
    execute()
    update()
}

function times() {
    var2 = "x";
    execute()
    update()
}

function divide() {
    var2 = "÷";
    execute()
    update()
}

function expon() {
    var2 = "^";
    execute()
    update()
}
var bgid = "WebBack.png";
function bgchange() {
    file = prompt("Enter file name:");
    localStorage.setItem("bgfile",file)
    document.getElementById("mainbg").style.backgroundImage = "url(\""+file+"\")";
}

function col1() {
    color = prompt("Enter hex code:");
    localStorage.setItem("color1",color)
    document.getElementById("button").style.backgroundColor = color;
    document.getElementById("button1").style.backgroundColor = color;
    document.getElementById("button2").style.backgroundColor = color;
    document.getElementById("button3").style.backgroundColor = color;
    document.getElementById("button4").style.backgroundColor = color;
    document.getElementById("button5").style.backgroundColor = color;
    document.getElementById("button6").style.backgroundColor = color;
    document.getElementById("button7").style.backgroundColor = color;
    document.getElementById("button8").style.backgroundColor = color;
    document.getElementById("button9").style.backgroundColor = color;
    document.getElementById("button10").style.backgroundColor = color;
    document.getElementById("button11").style.backgroundColor = color;
    document.getElementById("button12").style.backgroundColor = color;
    document.getElementById("button13").style.backgroundColor = color;
    document.getElementById("button14").style.backgroundColor = color;
    document.getElementById("button15").style.backgroundColor = color;
    document.getElementById("button16").style.backgroundColor = color;
    document.getElementById("button17").style.backgroundColor = color;
    document.getElementById("button18").style.backgroundColor = color;
    document.getElementById("button19").style.backgroundColor = color;
    document.getElementById("button20").style.backgroundColor = color;
    document.getElementById("button21").style.backgroundColor = color;
    document.getElementById("button22").style.backgroundColor = color;
    document.getElementById("button23").style.backgroundColor = color;
    document.getElementById("button24").style.backgroundColor = color;
}
function help() {
    prompt("This is the help");
}
function col2() {
    color = prompt("Enter hex code:");
    localStorage.setItem("color2",color)
    document.getElementById("button").style.color = color;
    document.getElementById("button1").style.color = color;
    document.getElementById("button2").style.color = color;
    document.getElementById("button3").style.color = color;
    document.getElementById("button4").style.color = color;
    document.getElementById("button5").style.color = color;
    document.getElementById("button6").style.color = color;
    document.getElementById("button7").style.color = color;
    document.getElementById("button8").style.color = color;
    document.getElementById("button9").style.color = color;
    document.getElementById("button10").style.color = color;
    document.getElementById("button11").style.color = color;
    document.getElementById("button12").style.color = color;
    document.getElementById("button13").style.color = color;
    document.getElementById("button14").style.color = color;
    document.getElementById("button15").style.color = color;
    document.getElementById("button16").style.color = color;
    document.getElementById("button17").style.color = color;
    document.getElementById("button18").style.color = color;
    document.getElementById("button19").style.color = color;
    document.getElementById("button20").style.color = color;
    document.getElementById("button21").style.color = color;
    document.getElementById("button22").style.color = color;
    document.getElementById("button23").style.color = color;
    document.getElementById("button24").style.color = color;
    
}