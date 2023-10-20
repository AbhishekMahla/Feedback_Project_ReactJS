import { FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import Card from "./shared/Cards";
import PropTypes from "prop-types";
import FeedbackContext from "./context/FeedbackContext";

        // {/* useing props */}
// function FeedbackItem({ item , handleDelete}) {
  function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
                {/* useing props */}
        {/* <button onClick={()=>handleDelete(item.id)} className="close"> */}
        <button onClick={()=>deleteFeedback(item.id)} className="close"> 
          <FaTimes color='purple'/>
          
        </button>
        <button onClick={()=>editFeedback(item)} className="edit">
        <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
