import * as React from "react";
import { IconSvgProps } from "../types";

export const CartIcon = ({ height = "24", width = "24", ...props }: IconSvgProps) => {
    return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width={width} height={height} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 0L7 13m0 0L5 21h14l-2-8H7z" />
        </svg>
    );
};

export const DeliveryIcon = ({ height = "24", width = "24", ...props }: IconSvgProps) => {
    return (
        <svg role="img" viewBox="0 0 32 32" width={width} height={height} {...props}>
            <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
            <path
                fill="currentColor"
                d="m29.919 16.606l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A4 4 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
            />
        </svg>
    );
};
