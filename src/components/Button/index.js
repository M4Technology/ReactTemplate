import React from "react";
import classNames from "classnames";

export default function Button({children}) {
    return (
        <button
            className={classNames(
                'border border-gray-500',
                'p-1 px-3',
                'text-gray-500',
                'hover:shadow-md',
                'focus:outline-none'
            )}
        >
            {children}
        </button>
    );
}