import { Chatbar } from "./Chatbar";
import { ChatOptions } from "./ChatOptions";
import { Content } from "./Content";
import Image from "next/image";
import styles from "../../styles/modules/Home/Questioner.module.scss";

export const Chat = () => {
  return (
    <div className={styles.card}>
      <Header />
      <Content />
      <ChatOptions />
      <Chatbar />
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/brand/logo.png" width={50} height={50} />
      <div>
        <span>Jalf</span>
        <small>En linea</small>
      </div>
    </div>
  );
};
