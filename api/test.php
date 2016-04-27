
<?php

$upload_url = "http://cs630231.vk.com/upload.php?act=do_add&mid=282617259&aid=-14&gid=0&hash=22807a2db53205f6cd147a585938d279&rhash=0728db868748c9991e8c1ebb8b6a2596&swfupload=1&api=1&wallphoto=1";
$orig_fname = "http://188.227.16.35/wp-content/themes/mmoma/api/imgs/picWYOZea--1.jpg";

	  if (is_uploaded_file($orig_fname)) {
             $file_name = "imgs/" . basename($file_name);


	    $post_params['photo'] = "@$file_name";

if (move_uploaded_file($orig_fname, $file_name)) {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $upload_url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $post_params);
                $result = curl_exec($ch);
                curl_close($ch);

                echo $result;
                }
                }