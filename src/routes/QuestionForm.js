import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";

const QuestionForm = ({ userObj, questionObj = null, toggleEdit = null }) => {
  const [question, setQuestion] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newItemA, setNewItemA] = useState("");
  const [newItemB, setNewItemB] = useState("");
  const [itemA, setItemA] = useState("");
  const [itemB, setItemB] = useState("");
  const [attachImageA, setAttachImageA] = useState("");
  const [attachImageB, setAttachImageB] = useState("");

  useEffect(() => {
    if (questionObj) {
      setNewQuestion(questionObj.question);
      setNewItemA(questionObj.itemA);
      setNewItemB(questionObj.itemB);
      setAttachImageA("");
      setAttachImageB("");
      document.querySelector("input[name='fileA']").value = null;
      document.querySelector("input[name='fileB']").value = null;
    }
  }, [questionObj]);

  const clearImages = async () => {
    if (questionObj.imageUrlA && attachImageA) {
      await storageService.refFromURL(questionObj.imageUrlA).delete();
    }
    if (questionObj.imageUrlB && attachImageB) {
      await storageService.refFromURL(questionObj.imageUrlB).delete();
    }
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (questionObj) {
      if (name === "question") {
        setNewQuestion(value);
      } else if (name === "itemA") {
        setNewItemA(value);
      } else if (name === "itemB") {
        setNewItemB(value);
      }
    } else {
      if (name === "question") {
        setQuestion(value);
      } else if (name === "itemA") {
        setItemA(value);
      } else if (name === "itemB") {
        setItemB(value);
      }
    }
  };

  //Firebase Image upload function
  const imageUpload = async (attachImage) => {
    let downloadUrl = "";

    if (attachImage) {
      const imageUploadRef = storageService
        .ref()
        .child(`images/${userObj.uid}/${uuidv4()}`);

      const result = await imageUploadRef.putString(attachImage, "data_url");
      downloadUrl = await result.ref.getDownloadURL();
    }
    return downloadUrl;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    //upload image
    const imageUrlA = await imageUpload(attachImageA);
    const imageUrlB = await imageUpload(attachImageB);

    if (questionObj) {
      //?????? ????????? ?????? - ?????? ????????? ??????
      await clearImages();

      await dbService
        .collection("Question")
        .doc(questionObj.id)
        .update({
          question: newQuestion,
          itemA: newItemA,
          itemB: newItemB,
          imageUrlA: imageUrlA ? imageUrlA : questionObj.imageUrlA,
          imageUrlB: imageUrlB ? imageUrlB : questionObj.imageUrlB,
        });
      toggleEdit();
    } else {
      await dbService.collection("Question").add({
        question,
        itemA,
        imageUrlA,
        itemB,
        imageUrlB,
        creator: userObj.uid,
        createAt: Date.now(),
      });

      setQuestion("");
      setAttachImageA(null);
      setAttachImageB(null);
      document.querySelector("input[name='fileA']").value = null;
      document.querySelector("input[name='fileB']").value = null;
    }
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
    <form className="form-question" onSubmit={onSubmit}>
      <input
        name="question"
        placeholder="Title *"
        value={questionObj ? newQuestion : question}
        onChange={onChange}
        className="question-title"
        type="text"
        required
      />
      <div className="div-line"></div>
      <div className="form-question__select select-items">
        <div className="select-items__input">
          <input
            type="text"
            name="itemA"
            className="item__input-text"
            placeholder="??????1 *"
            value={questionObj ? newItemA : itemA}
            onChange={onChange}
            required
          />
          <input
            type="file"
            name="fileA"
            className="item__file-attach"
            accept="image/*"
            placeholder="????????????1"
            onChange={onFileChange}
          />
          {attachImageA && (
            <div className="preview-image">
              <img src={attachImageA} alt="A??? ?????????" />
              <button name="cancelImageA" onClick={cancelImage}>
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="div-line"></div>
        <div className="select-items__input">
          <input
            type="text"
            name="itemB"
            className="item__input-text"
            placeholder="??????2 *"
            value={questionObj ? newItemB : itemB}
            onChange={onChange}
            required
          />
          <input
            type="file"
            name="fileB"
            className="item__file-attach"
            accept="image/*"
            placeholder="????????????2"
            onChange={onFileChange}
          />
          {attachImageB && (
            <div className="preview-image">
              <img src={attachImageB} alt="B??? ?????????" />
              <button name="cancelImageB" onClick={cancelImage}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="question-buttons">
        <button className="question-cancel" onClick={toggleEdit}>
          ??? ???
        </button>
        <input
          className="question-submit"
          type="submit"
          value={questionObj ? "??????" : "??? ???"}
        />
      </div>
    </form>
  );
};

export default QuestionForm;
