import React from "react";
function ChildComponent({ onUpdateMessage }) {
   return (
      <div>
         <button onClick={() => onUpdateMessage("Hello oo from child!")}>
            Send Message
         </button>
      </div>
   );
}
export default ChildComponent;