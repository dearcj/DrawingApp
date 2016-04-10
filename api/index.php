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
		 && isset($this->request["name"]) && !empty($this->request["name"])
		 && isset($this->request["description"]) && !empty($this->request["description"])) {
			
			$user_id = intval($this->request["user_id"]);
			$image_id = intval($this->request["image_id"]);

			$db = $this->_db->prepare("INSERT INTO tb_gallery (user_id, image, name, description, tags) VALUES (:user_id, :image, :name, :description, :tags)");
			$db->bindParam(":tags", $this->request["tags"]);
            $db->bindParam(":image", $this->request["image"]);
			$db->bindParam(":name", $this->request["name"]);
			$db->bindParam(":user_id", $this->request["user_id"]);
			$db->bindParam(":description", $this->request["description"]);
			$db->execute();

			$db = null;

			
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
				"SELECT * FROM tb_gallery t WHERE t.user_id = ? ORDER BY t.image_id DESC LIMIT 1"
				);
			$db->bindParam(1, $user_id);
			$db->execute();
			$result = $db->fetch(PDO::FETCH_ASSOC);
			
			if ($result != false) {
				$imgfilename = tempnam('../imgs/', 'pic');
				$image = preg_replace('#^data:image/[^;]+;base64,#', '', $image);
				$data = base64_decode($image);
				file_put_contents($imgfilename . '.jpg', $data);


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