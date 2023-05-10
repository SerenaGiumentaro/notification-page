import "./container.css";
import Notification from "../notification/notification";
import notificationData from "../data";
import DisplayNotification from "../display-notif/display-notif";
import { useState } from "react";
import SignReadBtn from "../sign-read-btn/sign-read-btn";
export default function Container() {
  const [notificationDisplay, setNotificationDisplay] = useState(3);
  const [data, setData] = useState(notificationData);

  const markAllAsRead = () => {
    const updatedData = data.map((notif) => {
      notif.read = true;
      return notif;
    });
    setData(updatedData);
    setNotificationDisplay("0");
  };
  const markAsRead = (i) => {
    const newData = [...data];
    if (newData[i].read === false) {
      newData[i].read = true;
      setData(newData);
      setNotificationDisplay(notificationDisplay - 1);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <DisplayNotification
          notification={notificationDisplay}
        ></DisplayNotification>
        <SignReadBtn markAllAsRead={markAllAsRead}></SignReadBtn>
      </div>
      {data.map((notification, index) => (
        <Notification
          onClick={() => markAsRead(index)}
          key={index}
          src={notification.src}
          read={notification.read}
          text={notification.text}
          name={notification.name}
          time={notification.time}
          message={notification.message}
          commentedPicSrc={notification.commentedPicSrc}
        ></Notification>
      ))}
    </div>
  );
}
