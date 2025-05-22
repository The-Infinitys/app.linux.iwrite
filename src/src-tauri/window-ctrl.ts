import { invoke } from "@tauri-apps/api/core";
/**
 * ウィンドウを最大化します。
 */
export function maximize() {
  return invoke("maximize");
}

/**
 * ウィンドウの最大化を解除します。
 */
export function unmaximize() {
  return invoke("unmaximize");
}

/**
 * ウィンドウを最小化します。
 */
export function minimize() {
  return invoke("minimize");
}

/**
 * ウィンドウを閉じます。
 */
export function close() {
  return invoke("close");
}
/**
 * ウィンドウが最大化されているかどうかを取得します。
 */
export function isMaximized() {
  return invoke("is_maximized");
}