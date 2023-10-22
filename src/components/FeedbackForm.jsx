import { useEffect, useState } from "react";
import { useContext } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Cards";
import Button from "./shared/Button";
import FeedbackContext from "./context/FeedbackContext";
//  {/* useing props */}
// function FeedbackForm({handleAdd}) {
function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleTextCahnge = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  //  {/* useing props */}
  // const handleSubmit = (e)=>{
  //     e.preventDefault()
  //     if(text.trim().length > 10){
  //         const newFeedback = {
  //             text: text,
  //             rating: rating
  //         }
  //         handleAdd(newFeedback)
  //     }

  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        rating: rating,
        text: text,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
  };
  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h4>How would you rate your servies with us</h4>
          <RatingSelect
            select={(rating) => {
              setRating(rating);
            }}
          />
          <div className="input-group">
            <input
              onChange={handleTextCahnge}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
