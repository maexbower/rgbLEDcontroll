<?php
//exec("sudo /usr/bin/pigpiod");
$config = array(
    "red" => 17,
    "green" => 18,
    "blue" => 27);
$PIGS_PATH = "/usr/bin/pigs";
if(isset($_REQUEST['led']))
{
    $led = $_REQUEST['led'];
    if(isset($_POST['val']))
    {
        $val = $_POST['val'] % 256;
    }elseif (isset($_GET['val'])) {
        exec("${PIGS_PATH} prg ${config[$led]}", $val);
        die(join($val));
    }else{
        die("no val was set");
    }

    switch($led)
    {
        case "red":
        case "green":
        case "blue":
            exec("${PIGS_PATH} p ${config[$led]} ${val}");
            die("${config[$led]} ${val}");
            break;
        default:
            die("wrong param");
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>LED Controll</title>

    <!-- Bootstrap-->
    <link href="assets/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/slider/slider/css/slider.css" rel="stylesheet">
    <link href="assets/led.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="input-group col-sm-12">
            <a class="btn btn-default" href="#" id="switch_off" onclick="turnOff();" role="button">Aus</a>
            <a class="btn btn-danger down" href="#" id="switch_red" onclick="toggleRed();" role="button">Rot</a>
            <a class="btn btn-primary down" href="#" id="switch_blue" onclick="toggleBlue();" role="button">Blau</a>
            <a class="btn btn-success down" href="#" id="switch_green" onclick="toggleGreen();" role="button">Grün</a>
        </div>
        <div class="well col-sm-12">


            <p>
                <b>R</b> <input type="text" class="" value="" data-slider-min="0" data-slider-max="255" data-slider-step="15" data-slider-value="0" data-slider-id="RC" id="red" data-slider-tooltip="always" data-slider-handle="round" />
            </p>
            <p>
                <b>G</b> <input type="text" class="" value="" data-slider-min="0" data-slider-max="255" data-slider-step="15" data-slider-value="0" data-slider-id="GC" id="green" data-slider-tooltip="always" data-slider-handle="round" />
            </p>
            <p>
                <b>B</b> <input type="text" class="" value="" data-slider-min="0" data-slider-max="255" data-slider-step="15" data-slider-value="0" data-slider-id="BC" id="blue" data-slider-tooltip="always" data-slider-handle="round" />
            </p>
            <div id="RGB"></div>
        </div>
    </div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="assets/bootstrap-3.3.7-dist/js/jquery_1.12.4.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed-->
<script src="assets/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="assets/slider/slider/js/bootstrap-slider.js"></script>
<script src="assets/led.js"></script>
</body>
</html>
