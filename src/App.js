//  {/* useing props */}
// import {v4 as uuidv4} from "uuid"
// import { useState } from "react";
// import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Aboutus from "./components/Aboutus";

function App() {
    //  {/* useing props */}
  // const [feedBack, setFeedback] = useState(FeedbackData);
  // const deleteFeedack = (id) =>{
  //   if(window.confirm('Are you sur to delete It?')){
  //     setFeedback(feedBack.filter((item)=> item.id !== id))
  //   }
  // }

  // const addFeedback = (newFeedback)=>{
  //   newFeedback.id = uuidv4()
    
  //   setFeedback([newFeedback, ...feedBack])
  // }
  return (
    <FeedbackProvider>
    <>
      <Header text="FeedBack UI" />

      <div className="container">
      <FeedbackForm />
        <FeedbackStates />
        
        {/* useing props */}
        {/* <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStates /> */}
        {/* <FeedbackList handleDelete={deleteFeedack}/> */}
        <FeedbackList />
        <Aboutus />
      </div>
    </>
    </FeedbackProvider>
  );
}

export default App;
