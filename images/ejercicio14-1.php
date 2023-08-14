<form action="#" method="post">
    <h1>Análisis de suelo</h1>
    <h3>Ingrese PH (Acidez del suelo)</h3>
        <input slep="any" type="number" name="acidez">
    <h3>Ingrese la Materia orgánica</h3>
        <input slep="any" type="number" name="materia">
    <h3>Ingrese el Fosforo</h3>
        <input slep="any" type="number" name="fosforo">
    <h3>Ingrese el Calcio</h3>
        <input slep="any" type="number" name="calcio"><br>
    <h3>Ingrese el Magnesio</h3>
        <input slep="any" type="number" name="magnesio"><br>
    <h3>Ingrese el Potasio</h3>
        <input slep="any" type="number" name="potasio"><br>
    <h3>Ingrese el Aluminio</h3>
        <input slep="any" type="number" name="aluminio"><br><br>
    <button type="submit">Enviar</button>
<form>
<?php

$acidez = floatval($_POST['acidez']);
$materia = is_float($_POST['materia']);
$fosforo = floatval($_POST['fosforo']);
$calcio = floatval($_POST['calcio']);
$magnesio = floatval($_POST['magnesio']);
$potasio = floatval($_POST["potasio"]);
$aluminio = floatval($_POST['aluminio']);

if ($acidez >= 5 && 
    $acidez <= 5.5 &&
    $materia > 8 &&
    $fosforo > 30 &&
    $calcio > 3  &&
    $magnesio > 0.9 &&
    $potasio > 0.4 &&
    $aluminio < 1) {
        echo "<br>";
        echo "<br>";
        echo "SUELO APROBADO";
    } else{
        echo "<br>";
        echo "<br>";
        echo "SUELO NO APROBADO";
    }
    
?>