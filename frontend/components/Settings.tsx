import React, { createContext, useContext, useState } from "react";

const settingsSample = {
    setting1: true,
    setting2: false,
}
const themeValues = {
    colors: {
        header: '#ebfbff',
        body: ('#000000'),
        footer: '#003333',
    },
    mobile: '768px',
}


const settingsContext = createContext({
    settings: settingsSample,
    changeSetting(setting: string, value: boolean): void {},
    theme: themeValues
});

export function ProvideSettings({children}: any) {
    const search = useSettingsProvide();
    return <settingsContext.Provider value={search}>{children}</settingsContext.Provider>
}

export const useSettings = () => {
    return useContext(settingsContext);
}

function useSettingsProvide() {
    const [settings, setSettings] = useState(settingsSample)

    const theme = themeValues;

    const changeSetting = (setting: string, value: boolean) => {
        let input = value;
        setSettings(old => {
            return {
                ...old,
                setting1: setting == "setting1" ? input : old.setting1,
                setting2: setting == "setting2" ? input : old.setting2,
            }
        })
    }

    return {
        settings,
        changeSetting,
        theme
    }
}
