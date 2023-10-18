import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBack, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sur to delete It?")) {
      setFeedback(feedBack.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedBack]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedBack: feedBack,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
