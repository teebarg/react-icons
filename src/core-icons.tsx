import { IconSvgProps } from "./types";
import * as React from "react";

export const Search = ({ width = "1em", height = "1em", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={width} {...attributes} height={height} fill="none" focusable="false" role="presentation">
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
);

export const EyeSlashFilled = ({ width = "1em", height = "1em", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={width} {...attributes} height={height} fill="none" focusable="false" role="presentation">
        <path
            d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
            fill="currentColor"
        />
        <path
            d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
            fill="currentColor"
        />
        <path
            d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
            fill="currentColor"
        />
        <path
            d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
            fill="currentColor"
        />
        <path
            d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
            fill="currentColor"
        />
    </svg>
);

export const EyeFilled = ({ width = "1em", height = "1em", ...attributes }: IconSvgProps) => (
    <svg fill="none" focusable="false" height={height} role="presentation" viewBox="0 0 24 24" width={width} {...attributes}>
        <path
            d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
            fill="currentColor"
        />
        <path
            d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
            fill="currentColor"
        />
    </svg>
);

export const MinusIcon = ({ size = 24, width, height, ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" fill="none" width={size || width} height={size || height} {...attributes}>
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const VerticalDotsIcon = ({ size = 24, width, height, ...attributes }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...attributes}
    >
        <path
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            fill="currentColor"
        />
    </svg>
);

export const ChevronDown = ({ strokeWidth = "1.5", width = "20", height = "20", ...attributes }) => (
    <svg fill="none" width={width} {...attributes} height={height}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            d="M16.25 6.875 10 13.125l-6.25-6.25"
        ></path>
    </svg>
);

export const ChevronDownMini = ({ strokeWidth = "1.5", width = "20", height = "20", ...attributes }) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="m15 8-5 5-5-5"></path>
    </svg>
);

export const ChevronRight = ({ strokeWidth = 1.5, width = "20", height = "20", ...attributes }) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth={strokeWidth} d="m6.875 3.75 6.25 6.25-6.25 6.25"></path>
    </svg>
);

export const ChevronRightMini = ({ strokeWidth = 1.5, width = "20", height = "20", ...attributes }) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth={strokeWidth} d="m8 6 4 4-4 4"></path>
    </svg>
);

export const NotificationIcon = ({ size, height, width, ...attributes }: IconSvgProps) => {
    return (
        <svg fill="none" height={size || height || 24} viewBox="0 0 24 24" width={size || width || 24} {...attributes}>
            <path
                clipRule="evenodd"
                d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const CheckIcon = ({ strokeWidth = 1.5, size, height, width, ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width || 18} height={size || height || 18} viewBox="0 0 24 24" fill="none" {...attributes}>
            <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const Eye = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...attributes}>
        <path
            d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);

export const EditIcon = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...attributes}>
        <path
            d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path
            d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} />
    </svg>
);

export const DeleteIcon = ({ size = 16, height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        role="presentation"
        viewBox="0 0 20 20"
        width={size || width}
        height={size || height}
        {...attributes}
    >
        <path
            d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path d="M8.60834 13.75H11.3833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <path d="M7.91669 10.4167H12.0834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    </svg>
);

export const Mail = ({ height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={width} height={height} {...attributes}>
        <path
            fill="currentColor"
            d="M12 13.5l-11.2-7.2c-.3-.2-.3-.6-.1-.8.2-.2.6-.2.8 0l11 7.1 11-7.1c.3-.2.6-.2.8 0 .2.2.2.6 0 .8l-11.2 7.2-11.2-7.2z"
        />
        <path
            fill="currentColor"
            d="M21 4h-18c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-1 14h-16c-.6 0-1-.4-1-1v-10.5l8.7 5.6c.1.1.3.1.4.1s.3 0 .4-.1l8.7-5.6v10.5c0 .6-.4 1-1 1z"
        />
    </svg>
);

export const LocationIcon = ({ height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={width} height={height} {...attributes}>
        <path d="M12 2C8.1 2 5 5.1 5 9c0 4.9 7 13 7 13s7-8.1 7-13c0-3.9-3.1-7-7-7zm0 17.2c-1.5-1.8-6-7.5-6-11.2 0-3.3 2.7-6 6-6s6 2.7 6 6c0 3.7-4.5 9.4-6 11.2z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
);

export const CancelIcon = ({ strokeWidth = 1.5, size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes}>
        <path
            fill="currentColor"
            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.41z"
            strokeWidth={strokeWidth}
        />
    </svg>
);

export const AdminIcon = ({ size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes}>
        <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2s5.78 1.28 6 2H6zm16-12h-2v6h-2v-6h-2V6h6v2z"
        />
    </svg>
);

export const ComponentsIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes}>
        <rect x="3" y="5" width="18" height="2" fill="currentColor" />
        <circle cx="6" cy="6" r="3" fill="currentColor" />

        <rect x="3" y="10" width="8" height="4" rx="2" ry="2" fill="currentColor" />

        <rect x="15" y="10" width="6" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M16 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />

        <rect x="3" y="17" width="10" height="4" rx="2" ry="2" fill="currentColor" />
        <path d="M16 18h5v2h-5z" fill="currentColor" />
    </svg>
);

export const EcommerceIcon = ({ size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes} fill="currentColor">
        <path d="M7 4h-2V2H2v2H1v2h1v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6h1V4h-1V2h-3v2h-2V2h-2v2h-6V2H7v2zm0 2h10v12H7V6zm2 2v2h6V8H9z" />

        <path d="M19 8.5c-1.1 0-2-.9-2-2 0-.2.2-.5.4-.7.4-.6.6-1.3.6-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .7.2 1.4.6 2 .2.2.4.5.4.7 0 1.1-.9 2-2 2-.3 0-.6 0-.9.1.2.3.3.6.3.9 0 1.1-.9 2-2 2s-2-.9-2-2c0-.3.1-.6.3-.9-.3-.1-.6-.1-.9-.1-1.1 0-2 .9-2 2 0 1.6 1.3 3 3 3h8c1.7 0 3-1.4 3-3 0-1.1-.9-2-2-2z" />
    </svg>
);

export const ProfileIcon = ({ size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes} fill="currentColor">
        <circle cx="12" cy="8" r="4" />

        <path d="M12 14c-5 0-8 2.5-8 6v2h16v-2c0-3.5-3-6-8-6z" />
    </svg>
);

export const CalendarIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes} fill="currentColor">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />

        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="7" y1="10" x2="7" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="11" y1="10" x2="11" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="15" y1="10" x2="15" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="19" y1="10" x2="19" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />

        <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />

        <circle cx="7" cy="4" r="1.5" fill="currentColor" />
        <circle cx="17" cy="4" r="1.5" fill="currentColor" />
    </svg>
);

export const DocumentIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes} fill="currentColor">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM13 9V3.5L18.5 9H13z" />

        <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
);

export const RightArrowIcon = ({ strokeWidth = 1.5, size, height, width, ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} fill="currentColor" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
            ></path>
        </svg>
    );
};

export const AttachmentIcon = ({ strokeWidth = 1.5, size, height = "16", width = "16", ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196c-2.653-2.539-6.954-2.539-9.607 0L3 10.034"
            />
        </svg>
    );
};

export const VoiceIcon = ({ strokeWidth = 1.5, size, height = "16", width = "16", ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} aria-hidden="true" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} d="M12 4v16m4-13v10M8 7v10m12-6v2M4 11v2" />
        </svg>
    );
};

export const TemplateIcon = ({ strokeWidth = 1.5, size, height = "18", width = "18", ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} aria-hidden="true" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
                <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73c.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
                <path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592c.426-.114.813-.218 1.165-.309" />
                <path strokeLinecap="round" d="m11.777 10l4.83 1.294M11 12.898l2.898.776" />
            </g>
        </svg>
    );
};

export const Star = ({ size, height, width, ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} aria-hidden="true" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
            ></path>
        </svg>
    );
};

export const FunnelIcon = ({ size, height, width, ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} aria-hidden="true" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"
            ></path>
        </svg>
    );
};

export const EllipsisIcon = ({ size = 24, height = "24", width = "24", ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} aria-hidden="true" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
        </svg>
    );
};

export const CopyIcon = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...attributes} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ThumbsUpIcon = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...attributes} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m4 7l2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5L9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14zm5.771 6.11l-3.863-.455l-.379-5.3l2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const Tags = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...attributes} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512">
            <path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path>
        </svg>
    );
};

export const ThumbsDownIcon = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...attributes} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12 9l-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163l.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2zM6.229 2.89l3.863.455l.379 5.3l-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663l.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const EmojiIcon = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...attributes} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5.67 2.835a.75.75 0 1 0 1.34-.67C10.268 9.356 9.219 8.75 8 8.75s-2.267.606-2.67 1.415a.75.75 0 1 0 1.34.67c.097-.191.548-.585 1.33-.585s1.233.394 1.33.585M10 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ArrowUpIcon = ({ size, height = "24", width = "24", ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );
};

export const SquareIcon = ({ size, height = "24", width = "24", ...attributes }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...attributes} viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" strokeWidth="0"></path>
        </svg>
    );
};

export const ExclamationIcon = ({ size, height = "20", width = "20", ...attributes }: IconSvgProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={size || width} height={size || height} {...attributes}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
    );
};

export const UploadIcon = ({ size, height = "20", width = "20", ...attributes }: IconSvgProps) => {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z" />
        </svg>
    );
};

export const FavouriteIcon = ({ size = 24, width, height, ...attributes }: IconSvgProps) => (
    <svg aria-hidden="true" role="img" viewBox="0 0 24 24" width={size || width} height={size || height} {...attributes}>
        <path
            fill="currentColor"
            d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043c-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"
        />
    </svg>
);

export const Home = ({ size = 24, width, height, ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" fill="none" width={size || width} height={size || height} {...attributes}>
        <path
            d="M3 9.5L12 3L21 9.5V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V9.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ArrowLeft = ({ size = 24, width, height, ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" fill="none" width={size || width} height={size || height} {...attributes}>
        <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const RefreshCcw = ({ size = 24, width, height, ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" fill="none" width={size || width} height={size || height} {...attributes}>
        <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 20V14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M3.51 9A9 9 0 015.63 5.63 9 9 0 0112 3H13A9 9 0 0120.49 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M20.49 15A9 9 0 0118.37 18.37 9 9 0 0112 21H11A9 9 0 013.51 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const CheckCircleSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const ArrowRightOnRectangle = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.125 7.5V4.375A1.875 1.875 0 0 0 11.25 2.5h-5a1.875 1.875 0 0 0-1.875 1.875v11.25A1.875 1.875 0 0 0 6.25 17.5h5a1.875 1.875 0 0 0 1.875-1.875V12.5m2.5 0 2.5-2.5m0 0-2.5-2.5m2.5 2.5H7.5"
        ></path>
    </svg>
);

export const ChevronUpDown = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m6 12.75 3.75 3.75 3.75-3.75m-7.5-6L9.75 3l3.75 3.75"
        ></path>
    </svg>
);

export const PenPlus = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.389 13.5s3.199-.505 4.04-1.347c.843-.841 6.514-6.513 6.514-6.513a1.904 1.904 0 1 0-2.694-2.693L3.736 9.46c-.841.842-1.346 4.04-1.346 4.04zM3.278 1.056V5.5M5.5 3.278H1.056"
        ></path>
    </svg>
);

export const Pencil = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m11.903 6.236.985-.986c.521-.52.521-1.365 0-1.885l-1.252-1.253a1.333 1.333 0 0 0-1.885 0l-.986.986zM7.43 4.43 3.187 8.676c-.222.222-.381.5-.462.804l-1.002 3.798 3.798-1.002c.304-.08.582-.24.804-.462l4.244-4.245M8.986 5.986 5.07 9.904"
        ></path>
    </svg>
);

export const PencilSquare = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m14.052 3.74 1.405-1.408a1.563 1.563 0 0 1 2.21 2.21l-8.849 8.85a3.75 3.75 0 0 1-1.58.941L5 15l.667-2.238a3.75 3.75 0 0 1 .941-1.58l7.444-7.443Zm0 0 2.198 2.197M15 11.667v3.958a1.875 1.875 0 0 1-1.875 1.875h-8.75A1.875 1.875 0 0 1 2.5 15.625v-8.75A1.875 1.875 0 0 1 4.375 5h3.958"
        ></path>
    </svg>
);

export const PencilSquareSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 1 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65v-.001Z"
        ></path>
        <path
            fill="currentColor"
            d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 1 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 1 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"
        ></path>
    </svg>
);

export const Plus = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3.75v12.5M16.25 10H3.75"></path>
    </svg>
);

export const Trash = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.283 7.5-.288 7.5m-3.99 0-.288-7.5m8.306-2.675c.285.043.569.09.852.138m-.852-.137-.89 11.568a1.875 1.875 0 0 1-1.87 1.73H6.737a1.875 1.875 0 0 1-1.87-1.73l-.89-11.569m12.046 0a40.08 40.08 0 0 0-2.898-.33m-10 .467c.283-.049.567-.095.852-.137m0 0a40.091 40.091 0 0 1 2.898-.33m6.25 0V3.73c0-.984-.758-1.804-1.742-1.834a43.3 43.3 0 0 0-2.766 0c-.984.03-1.742.851-1.742 1.834v.763m6.25 0c-2.08-.16-4.17-.16-6.25 0"
        ></path>
    </svg>
);

export const InformationCircleSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18 10a8 8 0 1 1-16.001 0A8 8 0 0 1 18 10Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 1 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const Spinner = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            fill="currentColor"
            d="M14.865 14.865c.437.437.441 1.154-.053 1.526A8 8 0 1 1 9.634 2.008c.618-.028 1.072.527 1.014 1.143-.059.615-.609 1.056-1.224 1.118a5.76 5.76 0 1 0 3.785 10.514c.514-.345 1.219-.355 1.656.082Z"
        ></path>
    </svg>
);

export const ArrowUpRightMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.75 14.25 8.5-8.5m0 0h-7.5m7.5 0v7.5"></path>
    </svg>
);

export const XMark = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15 15 5M5 5l10 10"></path>
    </svg>
);

export const XMarkMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 14 8-8M6 6l8 8"></path>
    </svg>
);

export const MagnifyingGlassMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m16 16-3.464-3.464m0 0a5 5 0 1 0-7.072-7.072 5 5 0 0 0 7.072 7.072v0Z"
        ></path>
    </svg>
);

export const ArrowUpMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 9 5-5m0 0 5 5m-5-5v12"></path>
    </svg>
);

export const ChatBubble = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.188 8.125h-.313m3.438 0H10m3.438 0h-.313m-5.938 0a.312.312 0 1 1-.624 0 .312.312 0 0 1 .625 0v0Zm3.125 0a.312.312 0 1 1-.624 0 .312.312 0 0 1 .624 0v0Zm3.126 0a.312.312 0 1 1-.625 0 .312.312 0 0 1 .624 0v0ZM1.874 10.633c0 1.334.936 2.495 2.256 2.69.906.133 1.82.235 2.744.307v3.87l3.487-3.486a.95.95 0 0 1 .648-.276 40.242 40.242 0 0 0 4.858-.415c1.321-.195 2.257-1.356 2.257-2.69V5.618c0-1.336-.936-2.496-2.256-2.69A40.329 40.329 0 0 0 10 2.5c-1.993 0-3.953.146-5.87.428-1.32.194-2.255 1.355-2.255 2.69V10.633Z"
        ></path>
    </svg>
);

export const ChatBubbleLeftRight = ({ height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
    </svg>
);

export const ChatBubbleLeftRightSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} fill="none">
        <path
            fill="currentColor"
            d="M4.094 2.215a41.058 41.058 0 0 1 10.562 0c1.602.208 2.742 1.55 2.837 3.106a3.67 3.67 0 0 0-.86-.176 42.408 42.408 0 0 0-7.016 0C7.652 5.308 6.25 6.97 6.25 8.84v3.572a3.725 3.725 0 0 0 2.027 3.32l-2.21 2.21A.625.625 0 0 1 5 17.5v-3.358a40.495 40.495 0 0 1-.906-.107c-1.673-.218-2.844-1.674-2.844-3.317V5.532c0-1.642 1.17-3.1 2.844-3.317Z"
        ></path>
        <path
            fill="currentColor"
            d="M13.125 6.25c-1.147 0-2.283.048-3.405.14-1.283.107-2.22 1.196-2.22 2.45v3.572c0 1.255.94 2.345 2.225 2.45 1.036.085 2.083.13 3.14.137l2.318 2.318a.625.625 0 0 0 1.067-.442v-1.992l.275-.021c1.285-.104 2.225-1.194 2.225-2.45V8.84c0-1.254-.938-2.343-2.22-2.45a41.163 41.163 0 0 0-3.405-.14Z"
        ></path>
    </svg>
);

export const Activity = ({ height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg
        width={width}
        height={height}
        {...attributes}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
    </svg>
);

export const ArrowPath = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#a)">
            <path d="M4.752 9.616 1.935 8.86l-.755 2.817"></path>
            <path d="M13.136 8.53a5.729 5.729 0 0 1-11.196.357M10.248 5.384l2.817.755.755-2.817"></path>
            <path d="M1.864 6.469a5.729 5.729 0 0 1 11.184-.403"></path>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const ArrowLongDown = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.5 13.055V1.945M11.278 9.278 7.5 13.056 3.722 9.278"
        ></path>
    </svg>
);

export const ArrowLongLeft = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        ></path>
    </svg>
);

export const ArrowLongRight = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        ></path>
    </svg>
);

export const ArrowLongUp = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.667 1.944v11.111M3.889 5.722l3.778-3.778 3.778 3.778"
        ></path>
    </svg>
);

export const ArrowRight = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        ></path>
    </svg>
);

export const ArrowUpCircleSolid = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.693 6.915a.665.665 0 0 1-.942 0L8.167 6.22v4.168a.667.667 0 0 1-1.334 0V6.221L5.75 7.305a.667.667 0 1 1-.943-.943L7.028 4.14c.26-.26.683-.26.943 0l2.222 2.222c.26.26.26.683 0 .943"
            ></path>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const ArrowUpDown = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.056 10.611 9.944 13.5l2.89-2.889M9.944 13.5V6.389M2.167 4.389 5.056 1.5l2.888 2.889M5.056 1.5v7.111"
        ></path>
    </svg>
);

export const ArrowUpRightOnBox = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8.833 1.944h4.223v4.223M13.056 1.944 7.5 7.5M11.278 8.833v2.445c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V5.5c0-.982.796-1.778 1.778-1.778h2.445"
        ></path>
    </svg>
);

export const ArrowUpTray = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.056 9.944v1.334c0 .982-.796 1.777-1.778 1.777H3.722a1.777 1.777 0 0 1-1.778-1.777V9.944M10.611 5.055 7.5 1.945l-3.111 3.11M7.5 1.944v6.667"
        ></path>
    </svg>
);

export const ArrowUturnLeft = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#a)">
            <path d="M1.5 5.056h8.667a3.333 3.333 0 0 1 0 6.666H6.833"></path>
            <path d="M4.611 8.167 1.5 5.056l3.111-3.112"></path>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const ArrowsPointingOut = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.056 1.944h4v4M13.056 1.944l-4 4M1.944 9.056v4h4M1.944 13.056l4-4"
        ></path>
    </svg>
);

export const Bell = ({ height = "24px", width = "24px", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} viewBox="0 0 24 24" fill="none">
        <path
            d="M14 20C13.7968 20.3042 13.505 20.5566 13.154 20.7321C12.803 20.9076 12.4051 21 12 21C11.5949 21 11.197 20.9076 10.846 20.7321C10.495 20.5566 10.2032 20.3042 10 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4735 11.7793C18.0077 11.9228 17.5129 12 17.0001 12C16.9947 12 16.9894 12 16.9841 12C17.2526 13.1526 17.6265 14.0517 18.0122 14.7412C18.1157 14.9262 18.2197 15.0955 18.3223 15.25H5.67782C5.78041 15.0955 5.88443 14.9262 5.98793 14.7412C6.72391 13.4256 7.41673 11.347 7.41673 8.2C7.41673 7.026 7.89488 5.89613 8.7524 5.06004C9.61057 4.22333 10.7784 3.75 12.0001 3.75C12.372 3.75 12.7391 3.79389 13.0938 3.87856C13.4571 3.42462 13.8978 3.03537 14.3959 2.73085C13.6453 2.41632 12.831 2.25 12.0001 2.25C10.3927 2.25 8.84747 2.87238 7.70525 3.98604C6.56238 5.10034 5.91673 6.61575 5.91673 8.2C5.91673 8.46632 5.9114 8.7235 5.90126 8.97181L3.58406 15.3759C3.31067 15.5581 3.18742 15.8975 3.28099 16.2132C3.37538 16.5316 3.66795 16.75 4.00006 16.75H20.0001C20.3322 16.75 20.6247 16.5316 20.7191 16.2132C20.8127 15.8975 20.6895 15.5582 20.4161 15.376M3.59055 15.3713L3.59037 15.3718L3.58947 15.3724L3.58787 15.3734L3.58537 15.3751L3.58406 15.3759L3.58945 15.3721C3.5898 15.3718 3.59017 15.3716 3.59055 15.3713ZM3.59055 15.3713L5.90099 8.97837C5.79921 11.4485 5.22124 13.0393 4.67886 14.0088C4.37901 14.5448 4.08562 14.8989 3.87883 15.1117C3.77524 15.2183 3.69289 15.29 3.6417 15.3316C3.61711 15.3516 3.5997 15.3646 3.59055 15.3713ZM20.4108 15.3725L20.4123 15.3734L20.4148 15.3751L20.4157 15.3757C20.4146 15.3749 20.413 15.3737 20.4107 15.3721C20.4019 15.3657 20.384 15.3524 20.3584 15.3316C20.3072 15.29 20.2249 15.2183 20.1213 15.1117C19.9145 14.8989 19.6211 14.5448 19.3213 14.0088C19.0206 13.4713 18.7089 12.7428 18.4735 11.7793M5.90099 8.97837L7.70525 3.98604L5.90126 8.97181C5.90117 8.974 5.90108 8.97619 5.90099 8.97837Z"
            fill="currentColor"
        ></path>
        <circle cx="17" cy="7" r="3" fill="#F43F5E"></circle>
    </svg>
);

export const BellOff = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg
        width={width}
        height={height}
        {...attributes}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
        <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
        <path d="M18 8a6 6 0 0 0-9.33-5"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
);

export const Bot = ({ height = "64", width = "64", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} viewBox="0 0 64 64">
        <rect x="12" y="20" width="40" height="32" rx="8" ry="8" fill="#4CAF50" />
        <rect x="18" y="26" width="12" height="12" rx="6" ry="6" fill="#FFFFFF" />
        <rect x="34" y="26" width="12" height="12" rx="6" ry="6" fill="#FFFFFF" />
        <rect x="26" y="46" width="12" height="4" fill="#FFFFFF" rx="2" ry="2" />
        <line x1="32" y1="12" x2="32" y2="20" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" />
        <circle cx="32" cy="8" r="4" fill="#4CAF50" />
    </svg>
);

export const Calendar = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.625 2.5v1.875m8.75-1.875v1.875M2.5 15.625V6.25a1.875 1.875 0 0 1 1.875-1.875h11.25A1.875 1.875 0 0 1 17.5 6.25v9.375m-15 0A1.875 1.875 0 0 0 4.375 17.5h11.25a1.875 1.875 0 0 0 1.875-1.875m-15 0v-6.25A1.875 1.875 0 0 1 4.375 7.5h11.25A1.875 1.875 0 0 1 17.5 9.375v6.25m-7.5-5h.007v.007H10v-.007Zm0 1.875h.007v.007H10V12.5Zm0 1.875h.007v.007H10v-.007ZM8.125 12.5h.007v.007h-.007V12.5Zm0 1.875h.007v.007h-.007v-.007ZM6.25 12.5h.007v.007H6.25V12.5Zm0 1.875h.007v.007H6.25v-.007Zm5.625-3.75h.007v.007h-.007v-.007Zm0 1.875h.007v.007h-.007V12.5Zm0 1.875h.007v.007h-.007v-.007Zm1.875-3.75h.007v.007h-.007v-.007Zm0 1.875h.007v.007h-.007V12.5Z"
        ></path>
    </svg>
);

export const CalendarMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.5 4v1.5m7-1.5v1.5m-9.5 9V7a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 16 7v7.5m-12 0A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5m-12 0v-5A1.5 1.5 0 0 1 5.5 8h9A1.5 1.5 0 0 1 16 9.5v5"
        ></path>
        <path
            stroke="currentColor"
            strokeWidth="0.75"
            d="M7.875 10.868a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM7.875 13.194a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12.875 10.868a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM10.375 10.868a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM10.375 13.194a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        ></path>
    </svg>
);

export const CalendarSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="M10.625 10.625a.624.624 0 1 1-1.249 0 .624.624 0 0 1 1.249 0Zm-4.375 2.5a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm.625 1.25a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0Zm1.25-1.25a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm.625 1.25a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0Zm1.25-1.25a.624.624 0 1 0 0-1.249.624.624 0 0 0 0 1.249Zm.625 1.25a.624.624 0 1 1-1.249 0 .624.624 0 0 1 1.249 0Zm1.25-1.25a.624.624 0 1 0 0-1.249.624.624 0 0 0 0 1.249Zm.625 1.25a.624.624 0 1 1-1.249 0 .624.624 0 0 1 1.249 0Zm1.25-1.25a.624.624 0 1 0 0-1.249.624.624 0 0 0 0 1.249Zm-1.25-2.5a.624.624 0 1 1-1.249 0 .624.624 0 0 1 1.249 0Zm1.25.625a.624.624 0 1 0 0-1.249.624.624 0 0 0 0 1.249Z"
        ></path>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.625 1.875a.625.625 0 0 1 .625.625v1.25h7.5V2.5a.625.625 0 1 1 1.25 0v1.25h.625a2.5 2.5 0 0 1 2.5 2.5v9.375a2.5 2.5 0 0 1-2.5 2.5H4.375a2.5 2.5 0 0 1-2.5-2.5V6.25a2.5 2.5 0 0 1 2.5-2.5H5V2.5a.625.625 0 0 1 .625-.625Zm11.25 7.5a1.25 1.25 0 0 0-1.25-1.25H4.375a1.25 1.25 0 0 0-1.25 1.25v6.25a1.25 1.25 0 0 0 1.25 1.25h11.25a1.25 1.25 0 0 0 1.25-1.25v-6.25Z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const ChartBar = ({ height = "24", width = "24", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
        <path d="M7 16h8"></path>
        <path d="M7 11h12"></path>
        <path d="M7 6h3"></path>
    </svg>
);

export const Check = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 10.625 5 5 7.5-11.25"></path>
    </svg>
);

export const CheckMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.833 10.417 3.334 3.333 5-7.5"></path>
    </svg>
);

export const ChevronLeft = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <g clipPath="url(#a)">
            <g clipPath="url(#b)">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.722 13.055 4.167 7.5l5.555-5.556"
                ></path>
            </g>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z"></path>
            </clipPath>
            <clipPath id="b">
                <path fill="#fff" d="M-.5-.5h16v16h-16z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const ChevronLeftMini = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.722 13.055 4.167 7.5l5.555-5.556"></path>
    </svg>
);

export const Clock = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg
        width={width}
        {...attributes}
        height={height}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

export const Collection = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" width={width} {...attributes} height={height}>
        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"></path>
    </svg>
);

export const Component = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.125 7.375 7.75 10l-2.625 2.625L2.5 10l2.625-2.625ZM10 2.5l2.625 2.625L10 7.75 7.375 5.125 10 2.5ZM14.875 7.375 17.5 10l-2.625 2.625L12.25 10l2.625-2.625ZM10 12.25l2.625 2.625L10 17.5l-2.625-2.625L10 12.25Z"
        ></path>
    </svg>
);

export const ComponentSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.125 7.375 7.75 10l-2.625 2.625L2.5 10l2.625-2.625ZM10 2.5l2.625 2.625L10 7.75 7.375 5.125 10 2.5ZM14.875 7.375 17.5 10l-2.625 2.625L12.25 10l2.625-2.625ZM10 12.25l2.625 2.625L10 17.5l-2.625-2.625L10 12.25Z"
        ></path>
    </svg>
);

export const CogSixTooth = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.995 3.283A.938.938 0 0 1 8.92 2.5h2.16c.46 0 .85.332.926.783l.177 1.068c.053.311.261.572.538.725.062.033.122.069.183.106.27.163.6.214.896.103l1.014-.38a.937.937 0 0 1 1.142.408l1.08 1.873a.937.937 0 0 1-.217 1.192l-.836.69c-.244.2-.365.51-.359.826.002.071.002.142 0 .213-.006.315.115.625.359.825l.837.69a.938.938 0 0 1 .217 1.191l-1.082 1.873a.938.938 0 0 1-1.14.409l-1.015-.38a1.039 1.039 0 0 0-.897.103c-.06.037-.121.073-.183.107a1.04 1.04 0 0 0-.537.724l-.177 1.067a.938.938 0 0 1-.925.784H8.919a.938.938 0 0 1-.925-.783l-.177-1.068a1.037 1.037 0 0 0-.537-.725 5.398 5.398 0 0 1-.183-.106c-.271-.163-.6-.214-.897-.103l-1.014.38a.938.938 0 0 1-1.14-.408l-1.082-1.873a.938.938 0 0 1 .217-1.192l.837-.69c.243-.2.364-.51.358-.826a5.788 5.788 0 0 1 0-.213 1.034 1.034 0 0 0-.358-.825l-.837-.69a.938.938 0 0 1-.217-1.191l1.081-1.873a.938.938 0 0 1 1.142-.409l1.013.38c.297.11.626.06.897-.103.06-.037.121-.073.183-.107.277-.152.485-.413.537-.724l.178-1.068v0Z"
        ></path>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0v0Z"
        ></path>
    </svg>
);

export const CogSixToothSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.232 1.875c-.765 0-1.416.553-1.542 1.306l-.148.893c-.017.1-.096.217-.248.29-.285.137-.56.296-.822.475-.138.096-.278.105-.375.07L5.25 4.59a1.563 1.563 0 0 0-1.902.683l-.768 1.33a1.563 1.563 0 0 0 .36 1.988l.7.577c.08.065.142.19.128.358a6.334 6.334 0 0 0 0 .949c.013.167-.049.293-.127.358l-.701.577a1.562 1.562 0 0 0-.36 1.988l.768 1.33a1.562 1.562 0 0 0 1.902.682l.85-.318c.095-.036.235-.026.374.068.26.178.534.338.821.475.152.073.23.19.247.292l.149.892a1.563 1.563 0 0 0 1.541 1.306h1.537c.764 0 1.416-.552 1.542-1.306l.148-.893c.017-.1.095-.217.248-.291.286-.137.56-.297.82-.475.14-.095.28-.104.376-.068l.85.318a1.562 1.562 0 0 0 1.9-.683l.769-1.33a1.563 1.563 0 0 0-.36-1.988l-.7-.577c-.08-.065-.142-.19-.129-.358a6.345 6.345 0 0 0 0-.949c-.013-.167.05-.293.128-.358l.7-.577c.59-.485.742-1.325.36-1.987l-.768-1.331a1.562 1.562 0 0 0-1.901-.682l-.85.318c-.095.036-.235.026-.374-.069a6.246 6.246 0 0 0-.821-.475c-.153-.072-.231-.189-.248-.29l-.149-.893a1.563 1.563 0 0 0-1.542-1.306H9.232ZM10 13.125a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const CurrencyDollar = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" clipPath="url(#a)">
            <path d="M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888"></path>
            <path d="M9.115 5.679c-.35-.83-1.051-1.017-1.581-1.017-.493 0-1.787.262-1.667 1.504.084.872.906 1.196 1.624 1.324s1.761.402 1.787 1.454c.021.888-.778 1.495-1.744 1.495-.923 0-1.565-.359-1.812-1.17M7.5 3.722v.94M7.5 10.44v.838"></path>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const CurrencyDollarSolid = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                d="M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m1.871 9.994c-.313.32-.736.538-1.204.645v.25a.667.667 0 0 1-1.334 0v-.247c-.876-.183-1.49-.72-1.748-1.568a.666.666 0 1 1 1.275-.389c.106.346.328.699 1.175.699.355 0 .686-.121.883-.322a.66.66 0 0 0 .194-.49c-.007-.288-.11-.612-1.237-.814-1.758-.314-2.114-1.335-2.17-1.916-.055-.575.104-1.086.46-1.478.318-.349.753-.545 1.17-.653v-.378a.667.667 0 0 1 1.333 0v.358A2.23 2.23 0 0 1 9.73 5.42a.667.667 0 0 1-1.228.518c-.064-.15-.258-.61-.967-.61-.246 0-.683.1-.884.321-.063.07-.145.193-.12.454.013.136.053.549 1.077.732 1.522.273 2.309.977 2.336 2.093a2 2 0 0 1-.573 1.455"
            ></path>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h15v15H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const DocumentSeries = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.125 14.375v2.813c0 .517-.42.937-.938.937H4.063a.938.938 0 0 1-.938-.938V6.563c0-.517.42-.937.938-.937h1.562c.419 0 .837.034 1.25.103m6.25 8.647h2.813c.517 0 .937-.42.937-.938V9.375a7.502 7.502 0 0 0-7.5-7.5H7.812a.938.938 0 0 0-.937.938v2.915m6.25 8.647H7.812a.938.938 0 0 1-.937-.938V5.729m10 5.522V9.687a2.812 2.812 0 0 0-2.813-2.812h-1.25a.937.937 0 0 1-.937-.938v-1.25a2.811 2.811 0 0 0-2.813-2.812h-.937"
        ></path>
    </svg>
);

export const DocumentText = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16.25 11.846V9.692c0-.734-.296-1.438-.824-1.958a2.835 2.835 0 0 0-1.989-.81h-1.25a.945.945 0 0 1-.662-.271A.916.916 0 0 1 11.25 6V4.77c0-.735-.296-1.44-.824-1.959A2.835 2.835 0 0 0 8.437 2H6.875m0 10.461h6.25m-6.25 2.462H10M8.75 2H4.687a.93.93 0 0 0-.937.923v14.154c0 .51.42.923.938.923h10.625a.93.93 0 0 0 .937-.923V9.385c0-1.959-.79-3.837-2.197-5.222A7.56 7.56 0 0 0 8.75 2v0Z"
        ></path>
    </svg>
);

export const DocumentTextSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.915 1.625c-.826 0-1.495.67-1.495 1.496v13.758c0 .826.67 1.496 1.495 1.496h10.17c.825 0 1.495-.67 1.495-1.495v-6.282a2.99 2.99 0 0 0-2.99-2.99h-1.496a1.495 1.495 0 0 1-1.496-1.496V4.616a2.991 2.991 0 0 0-2.99-2.991H4.914Zm1.496 10.768a.598.598 0 0 1 .598-.598h5.982a.598.598 0 0 1 0 1.196H7.01a.599.599 0 0 1-.598-.598Zm.598 1.794a.598.598 0 1 0 0 1.197H10a.598.598 0 1 0 0-1.197H7.009Z"
            clipRule="evenodd"
        ></path>
        <path
            fill="currentColor"
            d="M10.774 1.877a4.171 4.171 0 0 1 1.02 2.74v1.495a.3.3 0 0 0 .3.299h1.495a4.172 4.172 0 0 1 2.74 1.02 7.792 7.792 0 0 0-5.555-5.554Z"
        ></path>
    </svg>
);

export const Dot = ({ height = "24px", width = "24px", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} style={{ strokeWidth: 8 }} viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9" />
    </svg>
);

export const DotsSix = ({ height = "24px", width = "24px", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} viewBox="0 0 20 20" fill="none">
        <path
            d="M7.5 10.75C7.91421 10.75 8.25 10.4142 8.25 10C8.25 9.58579 7.91421 9.25 7.5 9.25C7.08579 9.25 6.75 9.58579 6.75 10C6.75 10.4142 7.08579 10.75 7.5 10.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.5 5.75C7.91421 5.75 8.25 5.41421 8.25 5C8.25 4.58579 7.91421 4.25 7.5 4.25C7.08579 4.25 6.75 4.58579 6.75 5C6.75 5.41421 7.08579 5.75 7.5 5.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.5 15.75C7.91421 15.75 8.25 15.4142 8.25 15C8.25 14.5858 7.91421 14.25 7.5 14.25C7.08579 14.25 6.75 14.5858 6.75 15C6.75 15.4142 7.08579 15.75 7.5 15.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.5 10.75C12.9142 10.75 13.25 10.4142 13.25 10C13.25 9.58579 12.9142 9.25 12.5 9.25C12.0858 9.25 11.75 9.58579 11.75 10C11.75 10.4142 12.0858 10.75 12.5 10.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.5 5.75C12.9142 5.75 13.25 5.41421 13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.5 15.75C12.9142 15.75 13.25 15.4142 13.25 15C13.25 14.5858 12.9142 14.25 12.5 14.25C12.0858 14.25 11.75 14.5858 11.75 15C11.75 15.4142 12.0858 15.75 12.5 15.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const EllipsisHorizontal = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} viewBox="0 0 20 20" fill="none">
        <path
            d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const EllipsisVertical = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M10 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 5.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.53 5.72a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06Z"
        ></path>
    </svg>
);

export const Excel = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg fill="none" width={width} height={height} {...attributes} viewBox="0 0 20 20">
        <path
            d="M13.333 17.5H14.1663C14.8294 17.5 15.4653 17.2366 15.9341 16.7678C16.4029 16.2989 16.6663 15.663 16.6663 15V7.09109C16.6663 6.42805 16.4029 5.79217 15.9341 5.32333L13.843 3.23223C13.3742 2.76339 12.7383 2.5 12.0752 2.5H5.83301C5.16997 2.5 4.53408 2.76339 4.06524 3.23223C3.5964 3.70107 3.33301 4.33696 3.33301 5V7.5"
            stroke="#2DD4BF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
        <path
            d="M16.6663 7.08333H13.7497C13.3076 7.08333 12.8837 6.90774 12.5712 6.59518C12.2586 6.28262 12.083 5.85869 12.083 5.41667V2.5"
            stroke="#2DD4BF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
        <path
            d="M4.99967 10H9.16634C9.60837 10 10.0323 10.1756 10.3449 10.4882C10.6574 10.8007 10.833 11.2246 10.833 11.6667V15.8333C10.833 16.2754 10.6574 16.6993 10.3449 17.0118C10.0323 17.3244 9.60837 17.5 9.16634 17.5H4.99967C4.55765 17.5 4.13372 17.3244 3.82116 17.0118C3.5086 16.6993 3.33301 16.2754 3.33301 15.8333V11.6667C3.33301 11.2246 3.5086 10.8007 3.82116 10.4882C4.13372 10.1756 4.55765 10 4.99967 10V10Z"
            stroke="#2DD4BF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
        <path d="M10.833 13.75H3.33301" stroke="#2DD4BF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M7.08301 10V17.5" stroke="#2DD4BF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
);

export const Folder = ({ height = "18", width = "18", ...attributes }: IconSvgProps) => (
    <svg width={width} height={height} {...attributes} viewBox="0 0 20 20" fill="none">
        <path
            d="M3.49557 8.24663C3.58387 8.23322 3.67454 8.22613 3.76678 8.22613H16.2328C16.325 8.22613 16.4157 8.23322 16.504 8.24663M3.49557 8.24663C3.03418 8.31808 2.61956 8.56856 2.34165 8.94373C2.06373 9.31891 1.94494 9.78852 2.01103 10.2507L2.68668 14.9811C2.74703 15.4037 2.95781 15.7905 3.28032 16.0703C3.60284 16.3501 4.01546 16.5041 4.44243 16.5042H15.5579C15.9849 16.5041 16.3975 16.3501 16.72 16.0703C17.0426 15.7905 17.2533 15.4037 17.3137 14.9811L17.9893 10.2507C18.0554 9.78852 17.9366 9.31891 17.6587 8.94373C17.3808 8.56856 16.9654 8.31808 16.504 8.24663M3.49557 8.24663L3.49636 5.26967C3.49636 4.79934 3.68314 4.34827 4.01564 4.01562C4.34813 3.68298 4.79912 3.496 5.26945 3.49579H8.32761C8.64115 3.49606 8.94174 3.62084 9.16331 3.84268L10.8363 5.51407C11.0578 5.73591 11.3584 5.86068 11.672 5.86096H14.7301C15.2006 5.86096 15.6518 6.04785 15.9844 6.38051C16.3171 6.71318 16.504 7.16437 16.504 7.63484V8.24663"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const Headphones = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16">
        <path d="M4.5 9h-1v7h1c0.275 0 0.5-0.225 0.5-0.5v-6c0-0.275-0.225-0.5-0.5-0.5z"></path>
        <path d="M11.5 9c-0.275 0-0.5 0.225-0.5 0.5v6c0 0.275 0.225 0.5 0.5 0.5h1v-7h-1z"></path>
        <path d="M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 0.96 0.169 1.88 0.479 2.732-0.304 0.519-0.479 1.123-0.479 1.768 0 1.763 1.304 3.222 3 3.464v-6.928c-0.499 0.071-0.963 0.248-1.371 0.506-0.084-0.417-0.129-0.849-0.129-1.292 0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 0.442-0.044 0.874-0.128 1.292-0.408-0.259-0.873-0.435-1.372-0.507v6.929c1.696-0.243 3-1.701 3-3.464 0-0.645-0.175-1.249-0.479-1.768 0.31-0.853 0.479-1.773 0.479-2.732z"></path>
    </svg>
);

export const Loader = ({ height = "32", width = "32", ...attributes }: IconSvgProps) => (
    <svg
        width={width}
        {...attributes}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
);

export const Help = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg
        width={width}
        {...attributes}
        height={height}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);

export const LogIn = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        <polyline points="10 17 15 12 10 7"></polyline>
        <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
);

export const LogOut = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

export const Naira = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10h16M4 14h16M12 4v16M6 4l12 16M18 4L6 20" />
    </svg>
);

export const PhoneCall = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg
        width={width}
        {...attributes}
        height={height}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export const Send = ({ height = "16", width = "17", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1 1l2.166 5.39 8.5 1.564-8.5 1.666L1 15l16-7z"
        />
    </svg>
);

export const Shield = ({ height = "1em", width = "1em", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512">
        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
    </svg>
);

export const Smiley = ({ height = "16", width = "16", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height}>
        <path
            fill="#687882"
            fillRule="evenodd"
            d="M8 16c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM8 1.333A6.674 6.674 0 0 0 1.333 8 6.674 6.674 0 0 0 8 14.667 6.674 6.674 0 0 0 14.667 8 6.674 6.674 0 0 0 8 1.333zm0 12c-1.942 0-3.705-1.167-4.601-3.046A.666.666 0 1 1 4.6 9.713C5.275 11.123 6.577 12 8 12c1.431 0 2.733-.875 3.397-2.285a.666.666 0 1 1 1.206.57c-.886 1.88-2.65 3.048-4.603 3.048zM10.667 8a1.335 1.335 0 0 1-1.334-1.333 1.335 1.335 0 0 1 2.667 0C12 7.402 11.402 8 10.667 8zM5.333 8A1.335 1.335 0 0 1 4 6.667c0-.736.599-1.334 1.333-1.334a1.335 1.335 0 0 1 0 2.667z"
        />
    </svg>
);

export const Tag = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7.973 2.5H4.375A1.875 1.875 0 0 0 2.5 4.375v3.598c0 .498.197.975.55 1.326l7.983 7.984c.583.583 1.484.727 2.173.275a15.078 15.078 0 0 0 4.352-4.352c.452-.69.308-1.59-.275-2.173L9.3 3.05a1.875 1.875 0 0 0-1.327-.55Z"
        ></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h.006v.006H6V6Z"></path>
    </svg>
);

export const TagSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.782 2A2.782 2.782 0 0 0 2 4.782v3.204c0 .737.293 1.444.815 1.966l7.233 7.233a2.782 2.782 0 0 0 3.934 0l3.203-3.203a2.784 2.784 0 0 0 0-3.934L9.952 2.815A2.782 2.782 0 0 0 7.987 2H4.782Zm.556 4.451a1.113 1.113 0 1 0 0-2.226 1.113 1.113 0 0 0 0 2.226Z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const TriangleDownMini = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="M10.09 5c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455A.7.7 0 0 1 4 5.797a.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        ></path>
    </svg>
);

export const TriangleLeftMini = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="M10 10.09c0 .163-.037.323-.108.463a.85.85 0 0 1-.293.335.7.7 0 0 1-.397.111.7.7 0 0 1-.39-.141l-3.454-2.59a.9.9 0 0 1-.263-.33 1.04 1.04 0 0 1 0-.876.9.9 0 0 1 .263-.33l3.455-2.59A.7.7 0 0 1 9.203 4a.7.7 0 0 1 .396.112.85.85 0 0 1 .293.335c.07.14.108.3.108.463z"
        ></path>
    </svg>
);

export const TriangleRightMini = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="M5 4.91c0-.163.037-.323.108-.464a.85.85 0 0 1 .293-.334A.7.7 0 0 1 5.798 4a.7.7 0 0 1 .39.142l3.454 2.59c.11.082.2.195.263.33a1.04 1.04 0 0 1 0 .876.9.9 0 0 1-.263.33l-3.455 2.59a.7.7 0 0 1-.39.141.7.7 0 0 1-.396-.111.85.85 0 0 1-.293-.335c-.07-.14-.108-.3-.108-.464z"
        ></path>
    </svg>
);

export const TriangleUpMini = ({ height = "15", width = "15", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="M4.91 10c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 9.202a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108z"
        ></path>
    </svg>
);

export const User = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none" viewBox="0 0 20 20">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.909 5.346a2.909 2.909 0 1 1-5.818 0 2.909 2.909 0 0 1 5.818 0v0Zm-8.726 10.95a5.818 5.818 0 0 1 11.633 0A13.91 13.91 0 0 1 10 17.564c-2.076 0-4.046-.453-5.817-1.266Z"
        ></path>
    </svg>
);

export const UserCircleMini = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 20 20" width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM5 15.412a5 5 0 0 1 10 0 11.956 11.956 0 0 1-5 1.088c-1.784 0-3.477-.39-5-1.088Z"
        ></path>
    </svg>
);

export const UserGroup = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 20 20" width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14.216 12.934a2.5 2.5 0 0 1 3.902 2.267c-1 .35-2.062.485-3.118.399a4.996 4.996 0 0 0-5-4.975 4.996 4.996 0 0 0-4.215 2.31m9.214 2.664.001.026c0 .188-.01.373-.03.555A9.953 9.953 0 0 1 10 17.5a9.952 9.952 0 0 1-4.97-1.32A5.052 5.052 0 0 1 5 15.6m0 0a7.484 7.484 0 0 1-3.116-.398 2.5 2.5 0 0 1 3.901-2.267M5 15.599a4.977 4.977 0 0 1 .785-2.664m6.715-7.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 2.5a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm-11.25 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Z"
        ></path>
    </svg>
);

export const Users = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 20 20" width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.5 15.94c.71.206 1.447.31 2.188.31a7.782 7.782 0 0 0 3.434-.793 3.438 3.438 0 0 0-6.278-2.078m.656 2.561v-.002c0-.928-.237-1.8-.655-2.559m.655 2.561v.088A10.265 10.265 0 0 1 7.187 17.5c-1.943 0-3.76-.538-5.312-1.472v-.09a5.312 5.312 0 0 1 9.97-2.559M10 5.313a2.812 2.812 0 1 1-5.625 0 2.812 2.812 0 0 1 5.625 0v0Zm6.875 1.875a2.188 2.188 0 1 1-4.375 0 2.188 2.188 0 0 1 4.375 0v0Z"
        ></path>
    </svg>
);

export const UsersSolid = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg viewBox="0 0 20 20" width={width} {...attributes} height={height} fill="none">
        <path
            fill="currentColor"
            d="M4.018 5.513a3.29 3.29 0 1 1 6.58 0 3.29 3.29 0 0 1-6.58 0Zm7.776 1.795a2.692 2.692 0 1 1 5.384 0 2.692 2.692 0 0 1-5.384 0ZM1.625 15.683a5.683 5.683 0 0 1 11.366 0v.097a.598.598 0 0 1-.29.503 10.423 10.423 0 0 1-5.393 1.494c-1.972 0-3.817-.546-5.392-1.494a.598.598 0 0 1-.29-.503l-.001-.097Zm12.562.002v.115a1.794 1.794 0 0 1-.186.766 8.047 8.047 0 0 0 4.036-.806.6.6 0 0 0 .335-.513 3.89 3.89 0 0 0-5.55-3.677 6.848 6.848 0 0 1 1.365 4.113v.002Z"
        ></path>
    </svg>
);

export const Window = ({ height = "20", width = "20", ...attributes }: IconSvgProps) => (
    <svg width={width} {...attributes} height={height} fill="none">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.5 6.875V15a1.875 1.875 0 0 0 1.875 1.875h11.25A1.875 1.875 0 0 0 17.5 15V6.875m-15 0V5a1.875 1.875 0 0 1 1.875-1.875h11.25A1.875 1.875 0 0 1 17.5 5v1.875m-15 0h15M4.375 5h.007v.007h-.007V5ZM6.25 5h.007v.007H6.25V5Zm1.875 0h.007v.007h-.007V5Z"
        ></path>
    </svg>
);
