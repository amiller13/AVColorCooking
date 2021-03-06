function print( text, ID ) {
    document.getElementById( ID ).innerHTML = text;
}

function KitchenSim() {
    this.sim_appliances = [new Appliance("fridge"), new Appliance("light"), new Appliance("oven"), new Appliance("rangehood"), new Appliance("toaster")],
    this.get_appliances = function() { return this.sim_appliances; },
    this.switchState = function(appliance) {
	this.sim_appliances[this.sim_appliances.indexOf(appliance)].switchState();
    }
}

kitchen = new KitchenSim();
sim_appliances = kitchen.get_appliances();

function insertImg( imgSrc, divID, width, height ){

    var mapShape1 = '<area alt="" title="" href="javascript:changePic( 0 )" shape="poly" coords="48,310,45,293,44,280,42,265,40,247,40,231,40,212,40,198,41,178,44,159,46,140,50,127,57,122,68,121,84,118,98,117,116,119,130,120,141,121,154,124,164,126,169,133,167,145,166,157,165,169,163,183,162,197,160,214,159,229,157,242,156,255,155,266,153,282,152,294,151,302,150,308" />';
    var mapShape2 = '<area alt="" title="" href="javascript:changePic( 1 )" shape="poly" coords="200,1,200,37,193,38,197,44,171,59,178,64,185,64,195,65,214,65,230,63,233,58,205,42,209,37,203,37" />';
    var mapShape3 = '<area alt="" title="" href="javascript:changePic( 2 )" shape="poly" coords="420,137,413,146,414,159,533,163,533,158,528,156,521,144,501,137" />';
    var mapShape4 = '<area alt="" title="" href="javascript:changePic( 3 )" shape="poly" coords="420,210,415,212,412,218,412,230,423,230,420,305,535,305,532,229,522,228,521,216,515,210" />';
    var mapShape5 = '<area alt="" title="" href="javascript:changePic( 4 )" shape="poly" coords="539,199,543,226,540,229,586,229,585,225,589,207,586,201,580,199,547,196" />';


    /*
    var mapShape1 = '<area alt="" title="" href="javascript:changePic( 0 )" shape="poly" coords="97,620,91,586,88,561,84,530,81,494,81,462,80,424,80,396,82,357,88,319,93,280,101,255,114,245,136,242,168,237,197,235,233,238,260,240,282,242,309,248,329,253,338,267,335,291,332,315,330,338,326,367,324,395,320,429,319,459,315,485,312,510,310,533,307,565,305,589,303,604,300,617" />';
    var mapShape2 = '<area alt="" title="" href="javascript:changePic( 1 )" shape="poly" coords="400,2,401,74,387,76,394,88,342,118,356,128,370,129,391,131,428,131,461,126,467,116,410,85,418,74,407,74" />';
    var mapShape3 = '<area alt="" title="" href="javascript:changePic( 2 )" shape="poly" coords="841,275,827,292,828,318,1066,326,1066,317,1056,313,1043,288,1002,275" />';
    var mapShape4 = '<area alt="" title="" href="javascript:changePic( 3 )" shape="poly" coords="841,420,830,425,825,436,825,460,847,461,840,611,1070,611,1065,459,1044,457,1042,432,1031,421" />';
    var mapShape5 = '<area alt="" title="" href="javascript:changePic( 4 )" shape="poly" coords="1079,398,1087,453,1081,459,1172,458,1170,450,1179,414,1173,403,1161,398,1095,392" />';
    */


  document.write('<img id="x" src="' + imgSrc + '" style="margin:0px auto; display:block;" usemap="#workmap" width="' + width + '" height="' + height + '"> <map name="workmap"> ' + mapShape1 + mapShape2 + mapShape3 + mapShape4 + mapShape5 + '</map>');
  document.getElementById( divID );
}

function foodIsReady(){
  document.getElementById("cooking").src = COOKING_PATH + "breakfast.png";
  document.getElementById("instructions").innerHTML = "Breakfast is ready! Leave this page open while you finish the survey.";
  document.getElementById("wrong").innerHTML = "Code Word: monkey"
  meal = false;
}
function lookingInTheFridge(){
  document.getElementById("cooking").src = COOKING_PATH + "1egg.png";
  document.getElementById("instructions").innerHTML = "Now turn on the oven to cook your eggs"
}

function waitingOnEggs(){
  document.getElementById("cooking").src = COOKING_PATH + "cookingegg.png";
  document.getElementById("instructions").innerHTML = "While your eggs cook, click the toaster to make some toast";
}

function stoveOn(){
  document.getElementById("instructions").innerHTML = "Now turn on the rangehood to help your eggs cook!";
;
}


var frdOn = false;
var tstOn = false;
var ovnOn = false;
var hdOn = false;
var ltOn = false;
var meal = true;

function wrongAction(n){
  wrongPic(n);
}
/*function wrongAction(n){
  if(meal){
    if(sim_appliances[n].running){
  document.getElementById("wrong").innerHTML = "Click that appliance again to turn it off. You don't need it yet.";
}
else{
  document.getElementById("wrong").innerHTML = "Oops! You need that appliance. Refresh the page and try again.";
}
  if (n == 0){
    if(frdOn){
      clearWrong();
      frdOn = false;}
    else{
    frdOn = true;}
  }
  else if (n == 1){
    if(ltOn){
      clearWrong();
      ltOn = false;}
    else{
      ltOn = true;}
    }
  else if (n == 2){
    if(hdOn){
      clearWrong();
      hdOn = false;}
    else{
      hdOn = true;}
    }
  else if (n == 3){
    if(ovnOn){
      clearWrong();
      ovnOn = false;}
    else{
      ovnOn = true;}
    }
  else {
    if(tstOn){
      clearWrong();
      tstOn = false;}
    else{
      tstOn = true;}
    }
}
}*/
function clearWrong(){
  document.getElementById("wrong").innerHTML = "";
}
function changePic( num ){
    var filePath1 = KITCHEN_IMAGES_PATH;
    var srcImg = document.getElementById( "x" ).src;
    var filePath2 = KITCHEN_IMAGES_PATH;

    // Fridge pressed
    if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
kitchen.switchState(sim_appliances[0]);
wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
	kitchen.switchState(sim_appliances[0]);
wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
        document.getElementById("instructions").innerHTML = "Looking in the fridge for eggs..."
        setTimeout(lookingInTheFridge, 5000);
	kitchen.switchState(sim_appliances[0]);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
  kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
  wrongAction(num);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[0]);
wrongAction(num);
	// LIGHT PRESSED

    }else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
        document.getElementById("instructions").innerHTML = "Now Click the Fridge to get the eggs!";
	kitchen.switchState(sim_appliances[1]);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
  kitchen.switchState(sim_appliances[1]);
wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
  kitchen.switchState(sim_appliances[1]);
wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);
    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
  wrongAction(num);

	// HOOD PRESSED

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[2]);
        wrongAction(num);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);
      wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
        document.getElementById("instructions").innerHTML = "Now turn on the stove so your eggs cook."

	kitchen.switchState(sim_appliances[2]);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
        document.getElementById("instructions").innerHTML = "Waiting for the eggs..."
        setTimeout(waitingOnEggs,4000);
	kitchen.switchState(sim_appliances[2]);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[2]);
  wrongAction(num);
	// OVEN PRESSED

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
        wrongAction(num);
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
        document.getElementById("instructions").innerHTML = "Waiting for the eggs..."
        setTimeout(waitingOnEggs, 4000);
	kitchen.switchState(sim_appliances[3]);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
        document.getElementById("instructions").innerHTML = "Cracking eggs into the pan..."
        setTimeout(stoveOn, 5000);
	kitchen.switchState(sim_appliances[3]);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
   kitchen.switchState(sim_appliances[3]);
   wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[3]);
  wrongAction(num);
	// TOASTER PRESSED

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
        document.getElementById("instructions").innerHTML = "Toasting..."
        kitchen.switchState(sim_appliances[4]);
        setTimeout(foodIsReady,6000);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
  kitchen.switchState(sim_appliances[4]);
  wrongAction(num);
    } else {
	console.log( "Error" + srcImg + "   " + filePath1);
    }
}
function wrongPic( num ){
    /*file path variables to compare what image was displayed before and load new image*/
    var filePath1 = KITCHEN_IMAGES_PATH;
    var srcImg = document.getElementById( "x" ).src;
    var filePath2 = KITCHEN_IMAGES_PATH;

    // Fridge pressed
    if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
	     document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	       kitchen.switchState(sim_appliances[0]);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
	      kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	       kitchen.switchState(sim_appliances[0]);
         (num);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);
	          (num);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	       kitchen.switchState(sim_appliances[0]);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	       console.log(filePath2 + "kitchen_2_fridge_light_on.jpg");
         document.getElementById("instructions").innerHTML = "Looking in the fridge for eggs..."
         setTimeout(lookingInTheFridge, 7000);
	        kitchen.switchState(sim_appliances[0]);
    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	/*console.log(filePath2 + "kitchen_2_fridge_light_on.jpg");
	document.getElementById("instructions").innerHTML = "Looking in the fridge for eggs..."
        setTimeout(lookingInTheFridge, 3500);*/
	       kitchen.switchState(sim_appliances[0]);
          (num);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

    } else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[0]);

	// LIGHT PRESSED

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
        document.getElementById("instructions").innerHTML = "Now Click the Fridge to get the eggs!";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	       kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);


    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);
        wrongAction

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[1]);
        wrongAction

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);


    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);


    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);

    } else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[1]);


	// HOOD PRESSED

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
	//document.getElementById("instructions").innerHTML = "Now turn on the stove so your eggs cook."
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	document.getElementById("instructions").innerHTML = "Waiting for the eggs..."
        setTimeout(waitingOnEggs,4000);
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);


    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);

    } else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[2]);


	// OVEN PRESSED

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	document.getElementById("instructions").innerHTML = "Waiting for the eggs..."
        setTimeout(waitingOnEggs, 4000);
	kitchen.switchState(sim_appliances[3]);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	document.getElementById("instructions").innerHTML = "Cracking your eggs into the pan..."
	setTimeout(stoveOn, 5000);
	kitchen.switchState(sim_appliances[3]);
    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[3]);


    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);

    } else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[3]);


	// TOASTER PRESSED

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_hood_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_on.jpg";
	document.getElementById("instructions").innerHTML = "Toasting..."
        setTimeout(foodIsReady,6000);
	kitchen.switchState(sim_appliances[4]);
    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_light_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_fridge_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_hood_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);


    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_hood_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_hood_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_light_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_light_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_toaster_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_oven_on.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_toaster_on.jpg" ) ) {
        document.getElementById("x").src = filePath2 + "kitchen_2_all_off.jpg";
	kitchen.switchState(sim_appliances[4]);

    } else {
	console.log(filePath1 + "kitchen_2_fridge_on.jpg");
	console.log( "Error " + srcImg );
    }
  }
