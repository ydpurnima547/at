import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
   const [message, setMessage] = useState("");

   function handleMessageUpdate(newMessage) {
      setMessage(newMessage);
   }

   return (
      <div>
         <ChildComponent onUpdateMessage={handleMessageUpdate} />
         <p>Message from child: {message}</p>
      </div>
   );
}
export default ParentComponent;