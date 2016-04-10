
<?php
	$imgfilename = tempnam('/imgs/', 'pic');
			echo $imgfilename;
		    $image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAWgBaAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubw';
			$image = preg_replace('#^data:image/[^;]+;base64,#', '', $image);
			$data = base64_decode($image);
			file_put_contents($imgfilename . '.jpg', $data);