function convert_from_sm (ed , value)
{
    switch (ed)
  {
      case "Дециметры":
         return value / 10;
     case "Сантиметры":
         return value;
     case "Метры":
         return value / 100;
     case "Миллиметры":
         return value * 10;
     case "Километры":
         return value / 100000;
  }
}
function convert(ed1 , ed2 ,value )
{
    switch (ed1)
  {
      case "Дециметры":
         return convert_from_sm(ed2, value * 10);
     case "Сантиметры":
        return convert_from_sm(ed2, value);
     case "Метры":
         return convert_from_sm(ed2, value * 100);
     case "Миллиметры":
         return convert_from_sm(ed2, value / 10);
     case "Километры":
         return convert_from_sm(ed2, value * 100000);
  }
}
let ar1=[];
function solve()
{
    
  var unit1=document.getElementById('ed1').value;
  var unit2=document.getElementById('ed2').value;
  var value1 =document.getElementById('val1').value;
  var w = Number.isNaN(Number(value1));
  
  if (!w)
  {
     if (unit1 == unit2)
         alert("А зачем?");
     else 
     {
     var res = convert(unit1 , unit2 , value1);
     if ( ar1.indexOf(unit1+''+''+value1+''+unit2+''+res)==-1)
     {
     document.getElementById('val2').value = res;
     ar1.push(unit1+''+''+value1+''+unit2+''+res);
     create_table(value1 , unit1 , res , unit2);
     }else
         alert ("А зачем?");
     
 }
  }
  else
     alert("Error!");
}
counter = 1;
function create_table(val1 ,ed1 , val2 , ed2)
{

    document.getElementById("table").innerHTML +=  '<td>'+(counter++)+'</td>'+'<td>'
            +val1+' ('+ed1+')'+'</td>'+'<td>'+val2+' ('+ed2+')'+'</td>';
}