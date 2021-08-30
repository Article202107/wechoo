import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";

const ContentForm = ({ userObj }) => {
  
	// 변수들 초기화
	const [ctnt_uid, setCtntUid] = useState("");//컨텐츠 UID
	const [ctnt_type, setCtntType] = useState("");//컨텐츠 유형
	const [ctnt_wrt_uid, setCtntWrtUid] = useState("");//작성자 uid
	const [ctnt_wrt_ymd, setCtntWrtYmd] = useState("");//작성일시
	const [ctnt_tit, setCtntTit] = useState("");//글제목
	const [ctnt_cn, setCtntCn] = useState("");//글내용
	const [ctnt_thmbnl, setCtntThmbnl] = useState("");//썸네일
	const [ctnt_ctgry, setCtntCtgry] = useState("");//카테고리
	const [ctnt_img_url1, setCtntImgUrl1] = useState("");//이미지1 url
	const [ctnt_img_url2, setCtntImgUrl2] = useState("");//이미지2 url
	const [ctnt_sel_item1, setCtntSelItem1] = useState("");//선택변수1
	const [ctnt_sel_item2, setCtntSelItem2] = useState("");//선택변수2
	const [ctnt_status, setCtntStatus] = useState("");//컨텐츠status


	// 페이지 들어왔을 때 렌더링
	useEffect(() => {
		
		
	}, []);
	
	//컨텐츠 타입 변경시
	const onChngCtntType = (event) => {
		const {
			target :{name , value}
		} = event;
		if(value == "1"){
			
		} else if(value=="2"){

		}
	}

	//양식 제출시
	const contentSubmit = async (event) =>{

	}
	
	
	// render
	return (
		<form onSubmit={contentSubmit}>	
			<select
				name="ctnt_type"
				onChange={onChngCtntType}
				required
			>
				<option value="1">VS</option>
				<option value="2">월드컵</option>
			</select>
			<input 
				name="ctnt_tit"
				type="text"
				placeholder="제목을 입력하세요."
				required
			/>
			<input
				name="ctnt_cn"
				type="text"
				placeholder="내용을 입력하세요."
				maxLength="200"
				required
			/>
			<select
				name="ctnt_ctgry"
			>
			</select>
			<select
				name="img_cnt"
				id="img_cnt"
			></select>
		</form>	
	);	
};

export default ContentForm;
