import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";
import { imageUpload } from "assets/js/common";

const Question = ({ questionObj, userObj }) => {
  const isOwner = questionObj.creator === userObj.uid;
  const [isEditing, setIsEditing] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newItemA, setNewItemA] = useState("");
  const [newItemB, setNewItemB] = useState("");
  const [pickCount, setPickCount] = useState({});
  const [answerList, setAnswerList] = useState([]);
  const [attachImageA, setAttachImageA] = useState("");
  const [attachImageB, setAttachImageB] = useState("");

  const onDelete = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await dbService.collection("Question").doc(questionObj.id).delete();
      await clearImages();
    }
  };

  const clearImages = async () => {
    if (questionObj.imageUrlA) {
      await storageService.refFromURL(questionObj.imageUrlA).delete();
    }
    if (questionObj.imageUrlB) {
      await storageService.refFromURL(questionObj.imageUrlB).delete();
    }
  };

  const changeQuestion = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "newQuestion") {
      setNewQuestion(value);
    } else if (name === "newItemA") {
      setNewItemA(value);
    } else if (name === "newItemB") {
      setNewItemB(value);
    }
  };

  //
  const toggleEdit = () => {
    if (!isEditing) {
      setNewQuestion(questionObj.question);
      setNewItemA(questionObj.itemA);
      setNewItemB(questionObj.itemB);
      setAttachImageA("");
      setAttachImageB("");
      document.querySelector("input[name='fileA']").value = null;
      document.querySelector("input[name='fileB']").value = null;
    }
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    dbService
      .collection("Answer")
      .where("qid", "==", questionObj.id)
      .onSnapshot((snapshot) => {
        const result = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAnswerList(result);
        //console.log(answerCount);
        setPickCount({
          pickCountA: result.filter((answer) => answer.pickCode === "A").length,
          pickCountB: result.filter((answer) => answer.pickCode === "B").length,
        });
      });
  }, [questionObj.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    //기존 이미지 삭제
    await clearImages();

    //이미지 첨부 확인
    const imageUrlA = await imageUpload(userObj.uid, attachImageA);
    const imageUrlB = await imageUpload(userObj.uid, attachImageB);

    await dbService.collection("Question").doc(questionObj.id).update({
      question: newQuestion,
      itemA: newItemA,
      itemB: newItemB,
      imageUrlA,
      imageUrlB,
    });
    toggleEdit();
  };

  const onPick = async (pickCode) => {
    if (answerList.find(({ uid }) => uid === userObj.uid)) {
      alert("이미 선택하셨습니다.");
      return;
    }

    await dbService.collection("Answer").add({
      qid: questionObj.id,
      uid: userObj.uid,
      pickCode,
      createAt: Date.now(),
    });
  };

  const onFileChange = (event) => {
    const {
      target: { name, files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (loadFile) => {
      const {
        currentTarget: { result },
      } = loadFile;

      if (name === "fileA") {
        setAttachImageA(result);
      } else if (name === "fileB") {
        setAttachImageB(result);
      }

      //console.log(attachImageA);
    };

    reader.readAsDataURL(theFile);
  };

  const cancelImage = (event) => {
    event.preventDefault();

    const {
      target: { name },
    } = event;

    let fileSelector;
    if (name === "cancelImageA") {
      fileSelector = document.querySelector("input[name='fileA']");
      setAttachImageA(null);
    } else if (name === "cancelImageB") {
      fileSelector = document.querySelector("input[name='fileB']");
      setAttachImageB(null);
    }
    fileSelector.value = null;
  };

  return (
    <>
      {isEditing ? (
        <>
          <form className="form-question edit" onSubmit={onSubmit}>
            <input
              name="newQuestion"
              onChange={changeQuestion}
              value={newQuestion}
              className="question-title"
              type="text"
            />
            <div className="form-question__select select-items">
              <div className="select-items__input">
                <input
                  name="newItemA"
                  onChange={changeQuestion}
                  value={newItemA}
                  type="text"
                />
                <input
                  type="file"
                  name="fileA"
                  accept="image/*"
                  onChange={onFileChange}
                />
                {attachImageA && (
                  <div className="preview-image">
                    <img src={attachImageA} alt="A안 이미지" />
                    <button name="cancelImageA" onClick={cancelImage}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className="select-items__input">
                <input
                  name="newItemB"
                  onChange={changeQuestion}
                  value={newItemB}
                  type="text"
                />
                <input
                  type="file"
                  name="fileB"
                  accept="image/*"
                  onChange={onFileChange}
                />
                {attachImageB && (
                  <div className="preview-image">
                    <img src={attachImageB} alt="B안 이미지" />
                    <button name="cancelImageB" onClick={cancelImage}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
            <input type="submit" value="Edit" />
            <button onClick={toggleEdit}>Cancel</button>
          </form>
        </>
      ) : (
        <div className="question-card">
          <h4>{questionObj.question}</h4>
          <div className="question-card__view">
            <div className="view__choose-one">
              <img src={questionObj.imageUrlA} alt="A안 이미지" />
              <span>{pickCount.pickCountA}</span>
              <button onClick={() => onPick("A")}>{questionObj.itemA}</button>
            </div>
            <span> VS </span>
            <div className="view__choose-one">
              <img src={questionObj.imageUrlB} alt="B안 이미지" />
              <span>{pickCount.pickCountB}</span>
              <button onClick={() => onPick("B")}>{questionObj.itemB}</button>
            </div>
          </div>
          {isOwner && (
            <div className="owner-edit">
              <button onClick={onDelete}>Delete Question</button>
              <button onClick={toggleEdit}>Edit Question</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Question;
