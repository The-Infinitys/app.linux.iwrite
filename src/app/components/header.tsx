"use client";
import styles from "./components.module.css";
import Image from "next/image";
import iWriteLogo from "@/../public/logo.svg";
import windowLogo from "@/../public/window.svg";
import {
  MaximizeButton,
  MinimizeButton,
  CloseButton,
  UnmaximizeButton,
} from "@/images/window-buttons";
import * as windowCtrl from "@/src-tauri/window-ctrl";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={iWriteLogo} width={16} height={16} alt="" />
      <h1 className={styles.title}>iWrite</h1>
      <Image src={windowLogo} width={16} height={16} alt="" />
      <WindowControl />
    </header>
  );
}

function WindowControl() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    // 初回マウント時に最大化状態を取得
    windowCtrl.isMaximized?.().then((result) => {
      setIsMaximized(result as boolean);
    });
    // イベントリスナー等で状態を監視したい場合はここに追加
  }, []);

  const handleMaximize = async () => {
    await windowCtrl.maximize();
    setIsMaximized(true);
  };

  const handleUnmaximize = async () => {
    await windowCtrl.unmaximize();
    setIsMaximized(false);
  };

  return (
    <div className={styles.windowControl}>
      <button onClick={() => windowCtrl.minimize()} aria-label="最小化">
        <MinimizeButton />
      </button>
      {isMaximized ? (
        <button onClick={handleUnmaximize} aria-label="元に戻す">
          <UnmaximizeButton />
        </button>
      ) : (
        <button onClick={handleMaximize} aria-label="最大化">
          <MaximizeButton />
        </button>
      )}
      <button onClick={() => windowCtrl.close()} aria-label="閉じる">
        <CloseButton />
      </button>
    </div>
  );
}
