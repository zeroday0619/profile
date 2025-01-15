import { useEffect } from "react";
import { themeChange } from 'theme-change'


export default function ThemeController() {
    useEffect(() => {
        themeChange(false)
      }, []);
    return (
        <>
            <label className="flex cursor-pointer gap-2">
                <select data-choose-theme className="select select-accent w-full max-w-xs">
                    <option disabled selected>Theme</option>
                    <option value="light" data-act-class="ACTIVECLASS">Light</option>
                    <option value="dark" data-act-class="ACTIVECLASS">Dark</option>
                </select>
            </label>
        </>
    );
}