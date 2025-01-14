import { useEffect } from "react";
import { themeChange } from 'theme-change'
import SVG from "./Logos";


export default function ThemeController() {
    useEffect(() => {
        themeChange(false)
      }, []);
    return (
        <>
            <label className="flex cursor-pointer gap-2">
                <button data-toggle-theme="light" data-act-class="ACTIVECLASS">
                    <SVG logo={'light-button'} />
                </button>
                <button data-toggle-theme="dark" data-act-class="ACTIVECLASS">
                    <SVG logo={'dark-button'} />
                </button>
            </label>
        </>
    );
}