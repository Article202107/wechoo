import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";

const WorldCupForm = ({ userObj, questionObj = null }) => {
  
	// 변수들 초기화
	const [question, setQuestion] = useState("");
	const [newQuestion, setNewQuestion] = useState("");
	const [countOpt, setCountOpt] = useState("");
	
	
	// 페이지 들어왔을 때 렌더링
	useEffect(() => {
		
		
	}, []);
	
	
	// 옵션 변경시 
	const onOptChange = (event) => {
		
		
		
		
	};
	
	
	// render
	return (
			
		<div>	
			<form>
				// 제목
				<input
					name="question"
			        placeholder="Title *"
		        	className="question-title"
	                type="text"
	                required
				/>
				// input select 4, 8, 16, 32
				<select
					name="countOpt"
					onChange={onOptChange}	
				>
					<option>4</option>
					<option>8</option>
					<option>16</option>
					<option>32</option>
				</select>
				
				// 이미지, 선택사항 div
				
				
				
				// 취소, 등록
				
				
			</form>
		</div>
		
	);	
};

export default WorldCup;
