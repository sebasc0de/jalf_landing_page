import { Controllers } from "./Story/Controllers";
import { UIContext } from "../context/UI";
import { useContext, useRef } from "react";
import Portal from "./Portal";
import styles from "../styles/modules/UI/Story.module.scss";

export const Story = ({ video }: { video: string }) => {
  // Function to hide components
  const hideComponent = useContext(UIContext).hideComponent;

  // Video reference
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEndedHandler = () => {
    document.body.style.overflow = "scroll";
    hideComponent();
  };

  return (
    <Portal>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <video
          onEnded={onEndedHandler}
          ref={videoRef}
          autoPlay
          muted
          src={video}
          preload="auto"
        />
        <Controllers videoRef={videoRef} />
      </div>
    </Portal>
  );
};
