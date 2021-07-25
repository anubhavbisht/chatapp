import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chat = () => {
  console.log(process.env.REACT_ID);
  console.log(process.env.REACT_KEY);
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setloading] = useState(true);
  console.log("hello ");
  console.log(user);
  const logout = async () => {
    await auth.signOut();
    history.push("/");
  };
  const getfile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userphoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user || user == null) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "add your id",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setloading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getfile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "add your key",
              },
            })
            .then(() => setloading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);
  if (!user || loading) return "Loading>>>>";
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          <i class="fab fa-pied-piper"></i>
          PiedPiper Chat App
        </div>
        <div className="logout-tab" onClick={logout}>
          LogOut
        </div>
      </div>
      <ChatEngine
        height="90vh"
        projectID="add your id"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
