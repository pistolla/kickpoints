import React, {useState} from 'react';
import { createMuiTheme } from '@material-ui/core';

const themeConfig = {
    palette: {
        primary: {
            main: "#cfd8dc"
        },
        secondary: {
            main: "#00838f",
            light: "#616161",
            contrastText: "#bdbdbd"
        },
        type: 'light',
    },
  };
  
export const useThemed: any = () => {
    const [theme, setTheme] = useState(themeConfig);
    const { palette: {type}} = theme;

    const toggleTheme = () => {
        console.log("Toggled")
        const updatedTheme = {
            theme,
            palette: {
                ...theme.palette,
                type: type === 'light' ? 'light':'dark'
            }
        }
        setTheme(updatedTheme);
        
    }
    return [theme, toggleTheme]
}