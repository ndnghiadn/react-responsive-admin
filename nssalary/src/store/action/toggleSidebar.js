import { createAction } from "@reduxjs/toolkit";

export const toggleSidebar = createAction('toggle_sidebar', (value) => {
    
    return {
        payload: {
            isDisplay: value,
        }
    }
});