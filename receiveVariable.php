<?php

// $testVariable = (isset($_REQUEST['testVariable']) ? $_REQUEST['testVariable'] : null);

// receives the data
$data = htmlspecialchars($_POST["testVariable"]);

// opens test text file, writes data, then closes
$testfile = fopen("test.txt", "w") or die("Unable to open file!");
fwrite($testfile, $data);
fclose($testfile);

// echoes the data back to the client
echo $data;
?>
