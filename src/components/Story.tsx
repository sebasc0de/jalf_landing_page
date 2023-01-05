import { useContext } from "react";
import { UIContext } from "../context/UI";
import styles from "../styles/modules/UI/Story.module.scss";
import Portal from "./Portal";

export const Story = ({ video }: { video: string }) => {
  const { hideComponent } = useContext(UIContext);

  const closeHandler = () => {
    document.body.style.overflow = "scroll";
    hideComponent();
  };

  return (
    <Portal>
      <div className={styles.container}>
        <video
          onEnded={closeHandler}
          src={video}
          autoPlay
          muted
          preload="auto"
        />
        <i onClick={closeHandler} className="bx bx-x"></i>
      </div>
    </Portal>
  );
};
