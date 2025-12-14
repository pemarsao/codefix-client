'use client';
import React, { useState } from "react";

export default function BugButton() {
    const [clicked, setClicked] = useState(false);

    if (clicked) {
        throw new Error("Oh no! Something went wrong!");
    }
    
    return (
        <button
            onClick={() => {
                setClicked(true)
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
        >
            Trigger Error
        </button>
    );
}