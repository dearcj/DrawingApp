<?php
require_once("Rest.inc.php");

class mMomaAPI extends Rest {
	private $_dbhost;
	private $_dbname;
	private $_dbuser;
	private $_dbpass;
	private $_db;
	
	function __construct() {
		parent::__construct();
		
		$this->_dbhost = "localhost";
		$this->_dbname = "mmoma";
		$this->_dbuser = "root";
		$this->_dbpass = "jizn1945";
		
		$this->_databaseConnect();
	}
	
	public function processApi() {
		if (isset($_REQUEST["api_method"])) {
			$function = $_REQUEST["api_method"];//strtolower(trim($_REQUEST["request"], "/"));
			$function = "_".$function."Action";
			
			if (method_exists($this, $function)) {
				$this->$function();
			} else {
				$this->response("", 404);
			}
		} else {
			echo "Bad request";
			die();
		}
	}
	
	private function _databaseConnect() {
		try {
			$this->_db = new PDO("mysql:host=".$this->_dbhost.";dbname=".$this->_dbname, $this->_dbuser, $this->_dbpass);
			$this->_db->query("SET NAMES 'utf8' COLLATE utf8_general_ci");
		} catch (PDOException $e) {
			echo "Error: ".$e->getMessage();
		}
	}
	
	private function _applyimagetogalleryAction() {
		if($this->getRequestMethod() != "POST") {
			$this->response("", 406);
		}
		
		if (((isset($this->request["user_id"]) && !empty($this->request["user_id"])) ||
		(isset($this->request["new_user"]) && $this->request["new_user"] == "true"))
		 && isset($this->request["image"]) && !empty($this->request["image"])

		  ) {
			
			$user_id = intval($this->request["user_id"]);

			$imgfilename = round(microtime(true) * 1000) . rand(1, 9999);
		    $image = $this->request["image"];
			$image = preg_replace('#^data:image/[^;]+;base64,#', '', $image);
			$bin =  base64_decode($image);
			$link = 'imgs/i' .  $imgfilename .'--'. $user_id . '.jpg';
			file_put_contents($link, $bin);


			$db = $this->_db->prepare("INSERT INTO tb_gallery (user_id, image, name, description, tags, file) VALUES (:user_id, :image, :name, :description, :tags, :file)");
			$db->bindParam(":tags", $this->request["tags"]);
            $db->bindParam(":image", $this->request["image"]);
			$db->bindParam(":name", $this->request["name"]);
			$db->bindParam(":user_id", $this->request["user_id"]);
			$db->bindParam(":description", $this->request["description"]);
			$db->bindParam(":file", $link);
			$db->execute();
			$insertId = $this->_db->lastInsertId();
			$db = null;

			$res = array("status" => "Success",
			"message" => "Image was successfully added",
			'imageId' => $insertId);
			$this->response($this->json($res), 200);
		}
		
		$error = array("status" => "Error", "message" => "Provided data is incorrect");
		$this->response($this->json($error), 400);
	}


	private function _uploadpicAction() {
		if($this->getRequestMethod() != "POST") {
    			$this->response("", 406);
    		}

    		$link = $this->request["upload_url"];
    		$file = $this->request["file"];


        /*    $cfile = curl_file_create(realpath('api/imgs/picWYOZea--1.jpg'),'image/jpg','testpic');
            $ch = curl_init($url);
                        curl_setopt($ch, CURLOPT_URL, $url);
                        curl_setopt($ch, CURLOPT_POST, 1);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                   curl_setopt($ch, CURLOPT_POSTFIELDS,array('photo' => $cfile));
                        $result = curl_exec($ch);
                        curl_close($ch);*/

            $cfile = curl_file_create(realpath($file),'image/jpeg','img.jpg');
$post_params['photo'] = $cfile;
            $ch = curl_init($link);
                        curl_setopt($ch, CURLOPT_URL, $link);
                        curl_setopt($ch, CURLOPT_POST, 1);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post_params);
                        $result = curl_exec($ch);

                        curl_close($ch);









    /*		$ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $link);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS,  array('photo' =>'@'.'./wp-content/themes/mmoma/api/imgs/picWYOZea--1.jpg'));
            $result = curl_exec($ch);
            echo $result;
            curl_close($ch);
*/




/*	$data = array('photo' => $image);

	$options = array(
    	'http' => array(
        	'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        	'method'  => 'POST',
        	'content' => http_build_query($data)
    	)
	);

		$context  = stream_context_create($options);
		$result = file_get_contents($link, false, $context);*/
		$this->response($result, 200);
	}

	private function _getimagefromgalleryAction() {
		if($this->getRequestMethod() != "GET") {
			$this->response("", 406);
		}
		
		if (isset($this->request["image_id"]) && !empty($this->request["image_id"])) {
			$image_id = intval($this->request["image_id"]);



			$db = $this->_db->prepare(
				"SELECT * FROM tb_gallery t WHERE t.image_id = ? ORDER BY t.image_id DESC LIMIT 1"
				);
			$db->bindParam(1, $image_id);
			$db->execute();
			$result = $db->fetch(PDO::FETCH_ASSOC);
			
			if ($result != false) {


				$this->response($this->json($result), 200);
			} else {
				$error = array("status" => "Error", "message" => "User with provided ID does not exist");
				$this->response($this->json($error), 400);
			}
		}
		
		$error = array("status" => "Error", "message" => "Provided data is incorrect");
		$this->response($this->json($error), 400);
	}
}

$mmomaapi = new mMomaApi;
$mmomaapi->processApi();
?>