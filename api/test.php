
<?php
	$imgfilename = tempnam('', 'pic');
			$imgfilename = str_replace('/tmp/', '', $imgfilename);
			echo $imgfilename;
		    $image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAWgBaAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubw';
			$image = preg_replace('#^data:image/[^;]+;base64,#', '', $image);
			$data = base64_decode($image);
			echo $data;

			file_put_contents('/imgs/' . $imgfilename . '.jpg', $data);