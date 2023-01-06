import { RefObject, useContext, useState } from "react";
import { UIContext } from "../../context/UI";
import styles from "../../styles/modules/UI/Story.module.scss";

export const Controllers = ({
  videoRef,
}: {
  videoRef: RefObject<HTMLVideoElement>;
}) => {
  const [muted, setMuted] = useState(true);

  const { hideComponent } = useContext(UIContext);

  const closeHandler = () => {
    document.body.style.overflow = "auto";
    hideComponent();
  };

  const muteHandler = () => {
    setMuted(!muted);
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <div className={styles.controllers}>
      <i
        onClick={muteHandler}
        className={muted ? "bx bx-volume-mute" : "bx bx-volume-full"}
      ></i>
      <i onClick={closeHandler} className="bx bx-x"></i>
    </div>
  );
};
