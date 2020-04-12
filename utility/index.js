const romantonum = (val)=>{
    var sum = 0;
    val = val.toUpperCase();
    for(let i=0;i<val.length;i++){
        switch(val.charAt(i)){
            case "M":
                if(i>0){
                    if(val.charAt(i-1) === 'C'){
                        sum-= 200;
                    }
                }
                sum+= 1000;
                break;
            case "D":
                if(i>0){
                    if(val.charAt(i-1) === 'C'){
                        sum-= 200;
                    }
                }
                sum+= 500;
                break;
            case "C":
                if(i>0){
                    if(val.charAt(i-1) === 'X'){
                        sum-= 20;
                    }
                }
                sum+= 100;
                break;
            case "L":
                if(i>0){
                    if(val.charAt(i-1) === 'X'){
                        sum-= 20;
                    }
                }
                sum+= 50;
                break;
            case "X":
                if(i>0){
                    if(val.charAt(i-1) === 'I'){
                        sum-= 2;
                    }
                }
                sum+= 10;
                break;
            case "V":
                if(i>0){
                    if(val.charAt(i-1) === "I"){
                        sum-= 2;
                    }
                }
                sum+= 5;
                break;
            case "I":
                sum+= 1;
                break;
            case "S":
                sum+= 0.5;
                break;
        }
    }
    document.getElementById("answer").innerText=sum;
}
const numtoroman = (newval)=>{
    var ans = "";
    while(newval >0){
        if(newval >= 1000){
            newval -= 1000;
            ans+='M';
        }
        else if(newval >= 500){
            if(newval%1000 >= 900){
                newval -= 900;
                ans+='CM';
            }
            else{
                newval -= 500;
                ans+='D';
            }
        }
        else if(newval >= 100){
            if(newval%500 >= 400){
                newval -= 400;
                ans+='CD';
            }
            else{
                newval -= 100;
                ans+='C';
            }
        }
        else if(newval >= 50){
            if(newval%100 >= 90){
                newval -= 90;
                ans+='XC';
            }
            else{
                newval -= 50;
                ans+='L';
            }
        }
        else if(newval >=10){
            if(newval%50 >= 40){
                newval -= 40;
                ans+='XL';
            }
            else{
                newval -= 10;
                ans+='X';
            }
        }
        else if(newval >=5){
            if(newval%10 >= 9){
                newval -= 9;
                ans+='IX';
            }
            else{
                newval -= 5;
                ans+='V';
            }
        }
        else if(newval >=1){
            if(newval%5 >= 4){
                newval -= 4;
                ans+='IV';
            }
            else{
                newval -= 1;
                ans+='I';
            }
        }
        else if(newval === 0.5){
            ans+= 'S';
            newval = 0;
        }
    }
    document.getElementById("answer").innerText = ans;
}
const check = (val)=>{
    if(parseInt(val)==val){
        numtoroman(val);
    }
    else if(typeof(val)==='string'){
        romantonum(val);
    }
}
const convert = (val)=>{
    document.getElementById("grain").innerText = val*0.065 +"g";
    document.getElementById("fl").innerText = val*29.57 +"ml";
}
const countsig = (val)=>{
    var found = false;
    var count = 0;
    val = val.toString();
    var point = 0;
    for(let i=0;i<val.length;i++){
        if(val.charAt(i)==='.'){
            found = true;
        }
        else if(parseInt(val.charAt(i))!=0){
            count+=1;
            if(found){
                point+=1;
            }
        }
        else if(parseInt(val.charAt(i))===0){
            if(count>0){
                count+=1;
                if(found){
                    point+=1;
                }
            }
        }
    }
    return {count,point};
}
const countsig2 = (val)=>{
    var found = false;
    var count = 0;
    val = val.toString();
    var point = 0;
    for(let i=0;i<val.length;i++){
        if(val.charAt(i)==='.'){
            found = true;
        }
        else if(parseInt(val.charAt(i))!=0){
            count+=1;
            if(found){
                point+=1;
            }
        }
        else if(parseInt(val.charAt(i))===0){
            if(count>0){
                count+=1;
                if(found){
                    point+=1;
                }
            }
        }
    }
    document.getElementById("count").innerText = count;
    return {count,point};
}
const add = ()=>{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value; 
    var ans = parseFloat(num1) + parseFloat(num2);
    var cn1 = countsig(num1);
    var cn2 = countsig(num2);
    var point = 0;
    if(cn1.point <= cn2.point){
        point = cn1.point;
    }
    else{
        point = cn2.point;
    }
    var newans =(ans).toFixed(point);
    document.getElementById('sig').innerText = newans;

}
const sub = ()=>{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value; 
    var ans = Math.abs(parseFloat(num1) - parseFloat(num2));
    var cn1 = countsig(num1);
    var cn2 = countsig(num2);
    var point = 0;
    if(cn1.point <= cn2.point){
        point = cn1.point;
    }
    else{
        point = cn2.point;
    }
    var newans =(ans).toFixed(point);
    document.getElementById('sig').innerText = newans;

}
const mul = ()=>{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value; 
    var ans = parseFloat(num1)* parseFloat(num2);
    var cn1 = countsig(num1);
    var cn2 = countsig(num2);
    var count = 0;
    if(cn1.count <= cn2.count){
        count = cn1.count;
    }
    else{
        count = cn2.count;
    }
    if(cn1.point===0 && cn2.point !== 0 ){
        count = cn2.count;
    }
    else if(cn1.point !==0 && cn2.point === 0){
        count = cn1.count;
    }
    ans = ans.toString();
    var found = false;
    var newans = "";
    for(let i=0;i<ans.length;i++){
        if(ans.charAt(i)==='.'){
            found = true;
        }
        else if(parseInt(ans.charAt(i))!=0){
            count-=1;
        }
        else if(parseInt(ans.charAt(i))===0){
            if(found){
                count-=1;
            }
            else if(count>0){
                count-=1;
            }
        }
        if(count===0){
            newans = ans.substring(0,i);
            if(i+1 < ans.length){
                if(ans.charAt(i+1)==='.'){
                    if(parseInt(ans.charAt(i+2))>=5){
                        newans += (parseInt(ans.charAt(i)) +1);
                    }
                    else{
                        newans += parseInt(ans.charAt(i)) ;
                    }
                }
                else if(parseInt(ans.charAt(i+1))>=5){
                    newans += (parseInt(ans.charAt(i)) +1);
                }
                else{
                    newans += ans.charAt(i);
                }
            }
            break;
        }
    }
    var expo = Math.floor(Math.log10(parseFloat(ans)))-Math.floor(Math.log10(parseFloat(newans)));
    document.getElementById('sig').innerText = newans;
    if(expo > 1 ){
        document.getElementById('sig').innerText += " x 10^"+expo;
    }
    else if(expo === 1){
        document.getElementById('sig').innerText += " x 10";
    }

}
const div = ()=>{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value; 
    var ans = parseFloat(num1)/ parseFloat(num2);
    var cn1 = countsig(num1);
    var cn2 = countsig(num2);
    var count = 0;
    if(cn1.count <= cn2.count){
        count = cn1.count;
    }
    else{
        count = cn2.count;
    }
    ans = ans.toString();
    var found = false;
    var newans = "";
    for(let i=0;i<ans.length;i++){
        if(ans.charAt(i)==='.'){
            found = true;
        }
        else if(parseInt(ans.charAt(i))!=0){
            count-=1;
        }
        else if(parseInt(ans.charAt(i))===0){
            if(found){
                count-=1;
            }
            else if(count>0){
                count-=1;
            }
        }
        if(count===0){
            newans = ans.substring(0,i);
            if(i+1 < ans.length){
                if(ans.charAt(i+1)==='.'){
                    if(parseInt(ans.charAt(i+2))>=5){
                        newans += (parseInt(ans.charAt(i)) +1) ;
                    }
                    else{
                        newans += parseInt(ans.charAt(i)) ;
                    }
                }
                else if(parseInt(ans.charAt(i+1))>=5){
                    newans += (parseInt(ans.charAt(i)) +1) ;
                }
                else{
                    newans += ans.charAt(i);
                }
            }
            break;
        }
    }
    var expo = Math.floor(Math.log10(parseFloat(ans)))-Math.floor(Math.log10(parseFloat(newans)));
    document.getElementById('sig').innerText = newans;
    if(expo > 1 ){
        document.getElementById('sig').innerText += " x 10^"+expo;
    }
    else if(expo === 1){
        document.getElementById('sig').innerText += " x 10";
    }
}