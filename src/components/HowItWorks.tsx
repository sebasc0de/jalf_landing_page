import { Steps as data } from "../data/Business";
import { Step } from "../interfaces/Business";
import { Story } from "./Story";
import { UIContext } from "../context/UI";
import { useContext, useState } from "react";
import Image from "next/image";
import styles from "../styles/modules/Home/HowItWorks.module.scss";

export const HowItWorks = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const { UI } = useContext(UIContext);

  return (
    <section className={styles.container}>
      {UI === "story" && <Story video={videoUrl} />}

      <div className={styles.wrapper}>
        {data.map((item) => (
          <StepCard Step={item} setVideoUrl={setVideoUrl} key={item.id} />
        ))}
      </div>
      <span>
        Puedes pulsar la foto de cada paso para ver el video explicativo. 🤓
      </span>
    </section>
  );
};

const StepCard = ({ Step, setVideoUrl }: StepCardProps) => {
  const { showComponent } = useContext(UIContext);

  const StoryHandler = () => {
    document.body.style.overflow = "hidden";
    setVideoUrl(Step.videoUrl);
    showComponent("story");
  };

  return (
    <div className={styles.stepCard}>
      <div>{Step.desc}</div>
      <footer>
        <div className={styles.story}>
          <Image onClick={StoryHandler} src={Step.img} width={60} height={60} />
        </div>

        <div>
          <p className={styles.stepTitle}>{Step.title}</p>
          <p className={styles.stepDesc}>{Step.short_desc}</p>
        </div>
      </footer>
    </div>
  );
};

interface StepCardProps {
  Step: Step;
  setVideoUrl: (url: string) => void;
}
