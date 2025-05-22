// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

mod window {
    pub mod ctrl {
        use tauri::Window;

        #[tauri::command]
        pub fn maximize(window: Window) {
            let _ = window.maximize();
        }

        #[tauri::command]
        pub fn unmaximize(window: Window) {
            let _ = window.unmaximize();
        }

        #[tauri::command]
        pub fn minimize(window: Window) {
            let _ = window.minimize();
        }

        #[tauri::command]
        pub fn close(window: Window) {
            let _ = window.close();
        }

        #[tauri::command]
        pub fn is_maximized(window: Window) -> bool {
            window.is_maximized().unwrap_or(false)
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            window::ctrl::maximize,
            window::ctrl::unmaximize,
            window::ctrl::minimize,
            window::ctrl::close,
            window::ctrl::is_maximized,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
