import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";

const WorldCupForm = ({ userObj, questionObj = null }) => {
  
	// 변수들 초기화
	const [question, setQuestion] = useState("");
	const [newQuestion, setNewQuestion] = useState("");
	
	
	
	// 페이지 들어왔을 때 렌더링
	useEffect(() => {
		
		
	}, []);
	
	
	
	
	// render
	return (
			
		<div>	
			<form>
				
				// 제목
				<input/>
			
				// 작성자
			
				// input select 4, 8, 16, 32
				
				// 이미지, 선택사항 div
			
				// 취소, 등록
				
				
			</form>
		</div>
		
	);	
};

export default WorldCup;
