"use client";

import { useState } from "react";

export const useTestHook = ({ message }) => {
    const [currentMessage, setCurrentMessage] = useState(message);

    return {
        message: currentMessage,
    };
};
