import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Question from "./Question";
import { imageUpload } from "assets/js/common";

const Home = ({ userObj }) => {
  const [question, setQuestion] = useState("");
  const [itemA, setItemA] = useState("");
  const [itemB, setItemB] = useState("");
  const [questions, setQuestions] = useState([]);
  const [attachImageA, setAttachImageA] = useState("");
  const [attachImageB, setAttachImageB] = useState("");

  /* const getquestions = async () => {
    const docs = await dbService.collection("question").get();
    docs.forEach((doc) => {
      const { id } = doc;
      const docData = doc.data();
      setQuestions((pre) => [{ id, ...docData }, ...pre]);
    });
  }; */

  useEffect(() => {
    dbService
      .collection("Question")
      .orderBy("createAt", "desc")
      .onSnapshot((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          pickCountA: 0,
          pickCountB: 0,
        }));

        setQuestions(docs);
      });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "question") {
      setQuestion(value);
    } else if (name === "itemA") {
      setItemA(value);
    } else if (name === "itemB") {
      setItemB(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const imageUrlA = await imageUpload(userObj.uid, attachImageA);
    const imageUrlB = await imageUpload(userObj.uid, attachImageB);

    await dbService.collection("Question").add({
      question,
      itemA,
      imageUrlA,
      itemB,
      imageUrlB,
      creator: userObj.uid,
      createAt: Date.now(),
    });

    // console.log(result);
    //console.log(">>>> result : " + JSON.stringify(result));

    setQuestion("");
    setAttachImageA(null);
    setAttachImageB(null);
    document.querySelector("input[name='fileA']").value = null;
    document.querySelector("input[name='fileB']").value = null;
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
    <div className="home-main main">
      <form className="form-question" onSubmit={onSubmit}>
        <span className="label">Title</span>
        <input
          name="question"
          placeholder="무엇을 선택하시겠습니까?"
          value={question}
          onChange={onChange}
          className="question-title"
          type="text"
        />
        <div className="form-question__select select-items">
          <div className="select-items__input">
            <span className="label">선택1</span>
            <input
              type="text"
              name="itemA"
              placeholder="A안"
              value={itemA}
              onChange={onChange}
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
            <span className="label">선택1</span>
            <input
              type="text"
              name="itemB"
              placeholder="B안"
              value={itemB}
              onChange={onChange}
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
        <input type="submit" value="question" />
      </form>
      <div>
        {questions.map((question) => (
          <Question
            key={question.id}
            questionObj={question}
            userObj={userObj}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
