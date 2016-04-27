<?php
 
if (isset($_POST["upload_url"])) {
 
    if (is_uploaded_file($_FILES['photo']['tmp_name'])) {
        $file_name = "files/" . basename($_FILES['photo']['name']);
 
        if (move_uploaded_file($_FILES['photo']['tmp_name'], $file_name)) {
            $upload_url = $_POST["upload_url"];
 
            $post_params['photo'] = "@$file_name";
 
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $upload_url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post_params);
 
            $result = curl_exec($ch);
            echo $result;
            curl_close($ch);
            ?>