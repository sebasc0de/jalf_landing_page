import { useContext, useRef } from "react";
import { UIContext } from "../context/UI";
import styles from "../styles/modules/UI/Story.module.scss";
import Portal from "./Portal";

export const Story = ({ video }: { video: string }) => {
  const { hideComponent } = useContext(UIContext);

  const videoRef = useRef<HTMLVideoElement>(null);

  const playHandler = () => videoRef.current && videoRef.current.play();

  const closeHandler = () => {
    document.body.style.overflow = "scroll";
    hideComponent();
  };

  return (
    <Portal>
      <div onTouchStart={playHandler} className={styles.container}>
        <video
          ref={videoRef}
          onEnded={closeHandler}
          autoPlay
          src={video}
          preload="auto"
        />
        <i onClick={closeHandler} id="close" className="bx bx-x"></i>
      </div>
    </Portal>
  );
};
