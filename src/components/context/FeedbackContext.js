import { createContext, useEffect, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedBack, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    featchFeedback();
  }, []);

  // Featch feedBack
  const featchFeedback = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sur to delete It?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedBack.filter((item) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    setFeedback([data, ...feedBack]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();
    setFeedback(
      feedBack.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedBack: feedBack,
        deleteFeedback,
        addFeedback,
        isLoading,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
