import TopMenu from "./components/top-menu";
import LeftMenu from "./components/left-menu";
import CenterContent from "./components/center-content";
import RightMenu from "./components/right-menu";
import BottomMenu from "./components/bottom-menu";
import styles from "./components.module.css";
export default function MiddleBox() {
  return (
    <div className={styles.middleBox}>
      <TopMenu />
      <div>
        <LeftMenu />
        <CenterContent />
        <RightMenu />
      </div>
      <BottomMenu />
    </div>
  );
}
