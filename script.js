function required()
{
let empt1 = document.forms["contact"]["name"].value;
let empt2 = document.forms["contact"]["email"].value;
let empt3 = document.forms["contact"]["phone"].value;
let empt4 = document.forms["contact"]["age"].value;
let empt5 = document.forms["contact"]["msg"].value;
if (empt1 == ""||empt2 == ""||empt3 == ""||empt4 == ""||empt5 == "")
{
alert("Please check if there is an empty box");
return false;
}
else 
{
alert('your form has been submited');
return true; 
}
}
function alpha(input)
      { 
    let reg= /^[A-Za-z]+$/;
    let letters =reg;
    if(input.value.match(letters))
      {
      return true;
      }
    else
      {
      alert('input alphabets only in name box');
      return false;
      
      }
      }
function num(input)
{
    if(input.value>10&&input.value<199){
        return true;
    }
    else
    {
    alert('input age between (10-199) only in age box');
    return false;
    }

}
function len(input)
{ 
let  minlen=100;
let  maxlen=300;
if(input.value.length<minlen || input.value.length> maxlen)
{ 
alert("mssage should be between " +minlen+ " and " +maxlen+ " characters");
return false;
}
else
{ 
return true;
}
}

function email(input) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value));
  {
    return (true);
  }
  alert("an invalid email address! has been entered");
  return (false);
}
function emailv(input)
{
let valid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(input.value.match(valid))
{
return true;
}
else
{
alert("an invalid email address! has been entered");
return false;
}
}
function pho(input)
{
  let num = /^\(?([7]{1})\)??([0|1|3|7]{1})\)?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  if((input.value.match(num)))
        {
      return true;
        }
      else
        {
        alert("Please enter a yemeni number");
        return false;
        }
}
