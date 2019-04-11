cartForParty = {
  banana: ".50",
  apple: "1.00",
  orange: "1.00",
  grape: "3.00",
  pear: "1.25",
  watermellon: "5.00",
  strawberry: "2.25",
  blue_berry: "1.75"
};

function cashRegister(){
  var a = [];
  a[0] = cartForParty["banana"]* +document.getElementById(0).value;
  a[1] = cartForParty["apple"]* +document.getElementById(1).value;
  a[2] = cartForParty["orange"]* +document.getElementById(2).value;
  a[3] = cartForParty["grape"]* +document.getElementById(3).value;
  a[4] = cartForParty["pear"]* +document.getElementById(4).value;
  a[5] = cartForParty["watermellon"]* +document.getElementById(5).value;
  a[6] = cartForParty["strawberry"]* +document.getElementById(6).value;
  a[7] = cartForParty.blue_berry* +document.getElementById(7).value;
//finding total Quantities
var qty = 0;
for(i=0; i<8; i++)
  {
  qty = qty + +document.getElementById(i).value;
  }
  document.getElementById("quantities").innerHTML = qty;
//finding total cost
  var result = 0;
  for(i=0; i<8; i++)
  {
    result = result + a[i];
  }

  document.getElementById("output").innerHTML =  "$" + parseFloat(result).toFixed(2);
//amt per fruit
  for(i=0; i<8; i++)
    {
  document.getElementById("amt"+ i).innerHTML = "$" + parseFloat(a[i]).toFixed(2);
    }
  //dispay TOTAL
  document.getElementById("TOTAL").innerHTML = "TOTAL";
  //display Amounts
  document.getElementById("Amounts").innerHTML = "Amounts";
}
