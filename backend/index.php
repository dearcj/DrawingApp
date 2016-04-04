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
		$this->_dbpass = "dedgame222";
		
		$this->_databaseConnect();
	}
	
	public function processApi() {
		if (isset($_REQUEST["request"])) {
			$function = strtolower(trim($_REQUEST["request"], "/"));
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
		
		if (isset($this->request["user_id"]) && !empty($this->request["user_id"])
		 && isset($this->request["image_id"]) && !empty($this->request["image_id"])
		 && isset($this->request["image"]) && !empty($this->request["image"])
		 && isset($this->request["name"]) && !empty($this->request["name"])
		 && isset($this->request["description"]) && !empty($this->request["description"])) {
			
			$user_id = intval($this->request["user_id"]);
			$image_id = intval($this->request["image_id"]);
			
			$db = $this->_db->prepare("SELECT id FROM tb_user_gallery WHERE image_id = ?");
			$db->bindParam(1, $image_id);
			$db->execute();
			$result = $db->fetch(PDO::FETCH_ASSOC);
			
			if ($result == false) {
				$db = $this->_db->prepare("INSERT INTO tb_gallery (image_id, image, name, description) VALUES (:image_id, :image, :name, :description)");
				$db->bindParam(":image_id", $image_id);
				$db->bindParam(":image", $this->request["image"]);
				$db->bindParam(":name", $this->request["name"]);
				$db->bindParam(":description", $this->request["description"]);
				$db->execute();
				$db = null;
				
				$db = $this->_db->prepare("INSERT INTO tb_user_gallery (user_id, image_id) VALUES (:user_id, :image_id)");
				$db->bindParam(":user_id", $user_id);
				$db->bindParam(":image_id", $image_id);
				$db->execute();
				$db = null;
			} else {
				$error = array("status" => "Error", "message" => "Provided image_id is already exists");
				$this->response($this->json($error), 400);
			}
			
			$error = array("status" => "Success", "message" => "Image was successfully added");
			$this->response($this->json($error), 200);
		}
		
		$error = array("status" => "Error", "message" => "Provided data is incorrect");
		$this->response($this->json($error), 400);
	}
	
	private function _getimagefromgalleryAction() {
		if($this->getRequestMethod() != "GET") {
			$this->response("", 406);
		}
		
		if (isset($this->request["user_id"]) && !empty($this->request["user_id"])) {
			$user_id = intval($this->request["user_id"]);
			
			$db = $this->_db->prepare(
				"SELECT tb_gallery.*
				FROM tb_user_gallery
				LEFT JOIN tb_gallery ON tb_gallery.image_id = tb_user_gallery.image_id
				WHERE tb_user_gallery.user_id = ?
				ORDER BY tb_user_gallery.id DESC
				LIMIT 1"
				);
			$db->bindParam(1, $user_id);
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