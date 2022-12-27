import React, { useState, useEffect } from "react";

function Chat() {
  const [loadChatOne, setLoadChatOne] = useState(true);
  const [loadChatTwo, setLoadChatTwo] = useState(true);
  const [loadChatThree, setLoadChatThree] = useState(true);
  const [loadChatFour, setLoadChatFour] = useState(true);
  const [loadChatFive, setLoadChatFive] = useState(true);
  const [loadChatSix, setLoadChatSix] = useState(true);
  const [loadChatSeven, setLoadChatSeven] = useState(true);
  const [loadChatEight, setLoadChatEight] = useState(true);

  //Chat interface animation function
  useEffect(() => {
    setTimeout(() => {
      setLoadChatOne(false);
    }, 1000);
    setTimeout(() => {
      setLoadChatTwo(false);
    }, 2000);
    setTimeout(() => {
      setLoadChatThree(false);
    }, 4500);
    setTimeout(() => {
      setLoadChatFour(false);
    }, 5000);
    setTimeout(() => {
      setLoadChatFive(false);
    }, 5500);
    setTimeout(() => {
      setLoadChatSix(false);
    }, 8000);
    setTimeout(() => {
      setLoadChatSeven(false);
    }, 8500);
    setTimeout(() => {
      setLoadChatEight(false);
    }, 9000);
  }, []);
  return (
    <div className="chatting">
      <div className="chat left-chat">
        {loadChatOne || <p>That sounds great. I'd be happy with that.</p>}
      </div>
      <div className="chat left-chat">
        {loadChatTwo || (
          <p>Could you send over some pictures of your dog, please?</p>
        )}
      </div>
      {loadChatThree || (
        <div className="image right-chat">
          <img src="dog-image-1.jpg" alt="" />
          <img src="dog-image-2.jpg" alt="" />
          <img src="dog-image-3.jpg" alt="" />
        </div>
      )}
      {loadChatFour || (
        <div className="chat right-chat">
          <p>Here are few pictures. She's a happy girl!</p>
        </div>
      )}
      {loadChatFive || (
        <div className="right-chat last-right">
          <p>Can you make it?</p>
        </div>
      )}
      {loadChatSix || (
        <div className="chat left-chat third-left-chat">
          <p>
            She looks so happy! The time we discussed works. How long shall i
            takwe her out for?
          </p>
        </div>
      )}
      {loadChatSeven || (
        <div className="price">
          <div className="price-div">
            <div></div>
            <p>30 minutes work</p>
          </div>
          <span>$29</span>
        </div>
      )}
      {loadChatEight || (
        <div className="price">
          <div className="price-div">
            <div></div>
            <p>1 hour work</p>
          </div>
          <span>$49</span>
        </div>
      )}
    </div>
  );
}

export default Chat;
