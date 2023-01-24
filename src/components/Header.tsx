import { Navigation as data } from "../data/Navigation";
import { FullScreenNavigation } from "./FullScreenNavigation";
import { Logo } from "./Logo";
import { Topbar } from "./Topbar";
import { UIContext } from "../context/UI";
import { useContext } from "react";
import Link from "next/link";
import styles from "../styles/modules/UI/Header.module.scss";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Topbar />
      <FullScreenNavigation />
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
          <Menu />
        </div>
        <DesktopButtons />
        <MobileButtons />
      </div>
    </header>
  );
};

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Navigation data={data} />
    </div>
  );
};

const DesktopButtons = () => {
  return (
    <div className="flex gap-1 items-center sm-hidden">
      <Link href="404">
        <small className="enphasis">Iniciar sesión</small>
      </Link>
      <Link href="404">
        <button className="rounded-full secondary">Registrarme</button>
      </Link>
    </div>
  );
};

const MobileButtons = () => {
  const { showComponent } = useContext(UIContext);

  const menuHandler = () => {
    document.body.style.overflow = "hidden";
    showComponent("full-screen-navigation");
  };

  return (
    <div className={styles.MobileButtons}>
      <Link href="/login">
        <i className="bx bx-user"></i>
      </Link>
      <button onClick={menuHandler}>
        <i className="bx bx-menu"></i>
      </button>
    </div>
  );
};
