import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "./../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE:
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src="https://avatar.iran.liara.run/public/boy" alt="user avatar" />
//             </div>
//         </div>
//         <div className="chat-bubble text-white bg-blue-500">Hi! I am Usama</div>
//         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:54</div>
//     </div>
//   )
// }

// export default Message
