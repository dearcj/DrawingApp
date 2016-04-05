<?php
class Rest {
	protected $request;
	private $_code;
	private $_content_type;
	
	function __construct() {
		$this->_code = 200;
		$this->_content_type = "application/json";
		$this->_inputs();
	}
	
	protected function response($data, $status) {
		$this->_code = $status;
		$this->_setHeaders();
		echo $data;
		exit();
	}
	
	protected function json($data) {
		if (is_array($data)) {
			return json_encode($data);
		}
	}
	
	protected function getRequestMethod() {
		return $_SERVER["REQUEST_METHOD"];
	}
	
	private function _inputs() {
		switch ($this->getRequestMethod()) {
			case "POST":
				$this->request = $_POST;
				break;
			case "GET":
			case "DELETE":
				unset($_GET["request"]);
				$this->request = $_GET;
				break;
			default:
				$this->response("", 406);
		}
	}
	
	private function _getStatusMessage() {
		$status = array(
			100 => "Continue",  
			101 => "Switching Protocols",  
			200 => "OK",
			201 => "Created",  
			202 => "Accepted",  
			203 => "Non-Authoritative Information",  
			204 => "No Content",  
			205 => "Reset Content",  
			206 => "Partial Content",  
			300 => "Multiple Choices",  
			301 => "Moved Permanently",  
			302 => "Found",  
			303 => "See Other",  
			304 => "Not Modified",  
			305 => "Use Proxy",  
			306 => "(Unused)",  
			307 => "Temporary Redirect",  
			400 => "Bad Request",  
			401 => "Unauthorized",  
			402 => "Payment Required",  
			403 => "Forbidden",  
			404 => "Not Found",  
			405 => "Method Not Allowed",  
			406 => "Not Acceptable",  
			407 => "Proxy Authentication Required",  
			408 => "Request Timeout",  
			409 => "Conflict",  
			410 => "Gone",  
			411 => "Length Required",  
			412 => "Precondition Failed",  
			413 => "Request Entity Too Large",  
			414 => "Request-URI Too Long",  
			415 => "Unsupported Media Type",  
			416 => "Requested Range Not Satisfiable",  
			417 => "Expectation Failed",  
			500 => "Internal Server Error",  
			501 => "Not Implemented",  
			502 => "Bad Gateway",  
			503 => "Service Unavailable",  
			504 => "Gateway Timeout",  
			505 => "HTTP Version Not Supported"
		);
		
		return $status[$this->_code];
	}
	
	private function _setHeaders() {
		header("HTTP/1.1 ".$this->_code." ".$this->_getStatusMessage());
		header("Content-Type: ".$this->_content_type);
	}
}
?>