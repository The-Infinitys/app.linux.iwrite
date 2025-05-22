import LeftBox from "./components/left-box";
import MiddleBox from "./components/middle-box";
import RightBox from "./components/right-box";
import styles from "./components.module.css";
export default function Main() {
  return (
    <main className={styles.main}>
      <LeftBox />
      <MiddleBox />
      <RightBox />
    </main>
  );
}
