import { FaChevronCircleRight, FaEllipsisV, FaAngleLeft } from "react-icons/fa";
import Chat from "./chats";

function Phone() {
  return (
    <div className="phone-container">
      <div className="phone">
        <div className="head"></div>
        <div className="profile">
          <div className="profile-div">
            <FaAngleLeft />
            <img src="\avatar.jpg" alt="avatar" />
            <div className="name">
              <p
                className=""
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  margin: 0,
                }}
              >
                Olanre Yusuf
              </p>
              <p
                className=""
                style={{
                  margin: "3px 0",
                  color: "hsl(276, 100%, 81%)",
                  fontSize: 10,
                }}
              >
                Available to walk
              </p>
            </div>
          </div>
          <FaEllipsisV style={{ margin: "0 10px 20px 0" }} />
        </div>
        <div className="chat-page">
          {/* Chats are import*/}
          <Chat />
          <div className="button">
            <p className="text">Type a message...</p>
            <FaChevronCircleRight
              style={{
                color: "hsl(271, 36%, 24%)",
                fontSize: 35,
                marginRight: 5,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
