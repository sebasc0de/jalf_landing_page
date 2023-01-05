import { useContext } from "react";
import { UIContext } from "../context/UI";
import styles from "../styles/modules/UI/Story.module.scss";
import Portal from "./Portal";

export const Story = ({ video }: { video: string }) => {
  const { hideComponent } = useContext(UIContext);

  return (
    <Portal>
      <div className={styles.container}>
        <video
          onEnded={hideComponent}
          src={video}
          autoPlay
          muted
          preload="auto"
        />
        <i onClick={hideComponent} className="bx bx-x"></i>
      </div>
    </Portal>
  );
};
