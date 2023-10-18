import {motion, AnimatePresence} from "framer-motion"
import { useContext } from "react";
        // {/* useing props */}
// import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";

        // {/* useing props */}
// function FeedbackList({ handleDelete }) {
  function FeedbackList() {
  const {feedBack} = useContext(FeedbackContext)
  if (!feedBack || feedBack.length === 0) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <>

      <div className="feedback-list">
      <AnimatePresence>
        {feedBack.map((item) => (
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
             {/* useing props */}
          {/* <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/> */}
          <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </>
  );
}


export default FeedbackList;
