import { IconSvgProps } from "./types";
import * as React from "react";

export const SearchIcon = (props: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
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

export const EyeSlashFilledIcon = (props: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
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

export const EyeFilledIcon = ({ width = "1em", height = "1em", ...props }: IconSvgProps) => (
    <svg fill="none" focusable="false" height={height} role="presentation" viewBox="0 0 24 24" width={width} {...props}>
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

export const PlusIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
            <path d="M6 12h12" />
            <path d="M12 18V6" />
        </g>
    </svg>
);

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            fill="currentColor"
        />
    </svg>
);

export const ChevronDownIcon = ({ strokeWidth = 1.5, width = "1em", height = "1em", ...otherProps }) => (
    <svg aria-hidden="true" fill="none" focusable="false" height={height} role="presentation" viewBox="0 0 24 24" width={width} {...otherProps}>
        <path
            d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={strokeWidth}
        />
    </svg>
);

export const ChevronRightIcon = ({ strokeWidth = 1.5, width = "1em", height = "1em", ...otherProps }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...otherProps}>
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const NotificationIcon = ({ size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg fill="none" height={size || height || 24} viewBox="0 0 24 24" width={size || width || 24} {...props}>
            <path
                clipRule="evenodd"
                d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const CheckIcon = ({ strokeWidth = 1.5, size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width || 18} height={size || height || 18} viewBox="0 0 24 24" fill="none" {...props}>
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

export const EyeIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...props}>
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

export const EditIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...props}>
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

export const DeleteIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => (
    <svg aria-hidden="true" fill="none" focusable="false" role="presentation" viewBox="0 0 20 20" width={width} height={height} {...props}>
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

export const MailIcon = ({ height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
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

export const LocationIcon = ({ height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
        <path d="M12 2C8.1 2 5 5.1 5 9c0 4.9 7 13 7 13s7-8.1 7-13c0-3.9-3.1-7-7-7zm0 17.2c-1.5-1.8-6-7.5-6-11.2 0-3.3 2.7-6 6-6s6 2.7 6 6c0 3.7-4.5 9.4-6 11.2z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
);

export const CancelIcon = ({ strokeWidth = 1.5, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props}>
        <path
            fill="currentColor"
            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.41z"
            strokeWidth={strokeWidth}
        />
    </svg>
);

export const AdminIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props}>
        <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2s5.78 1.28 6 2H6zm16-12h-2v6h-2v-6h-2V6h6v2z"
        />
    </svg>
);

export const ComponentsIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props}>
        <rect x="3" y="5" width="18" height="2" fill="currentColor" />
        <circle cx="6" cy="6" r="3" fill="currentColor" />

        <rect x="3" y="10" width="8" height="4" rx="2" ry="2" fill="currentColor" />

        <rect x="15" y="10" width="6" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M16 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />

        <rect x="3" y="17" width="10" height="4" rx="2" ry="2" fill="currentColor" />
        <path d="M16 18h5v2h-5z" fill="currentColor" />
    </svg>
);

export const EcommerceIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <path d="M7 4h-2V2H2v2H1v2h1v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6h1V4h-1V2h-3v2h-2V2h-2v2h-6V2H7v2zm0 2h10v12H7V6zm2 2v2h6V8H9z" />

        <path d="M19 8.5c-1.1 0-2-.9-2-2 0-.2.2-.5.4-.7.4-.6.6-1.3.6-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .7.2 1.4.6 2 .2.2.4.5.4.7 0 1.1-.9 2-2 2-.3 0-.6 0-.9.1.2.3.3.6.3.9 0 1.1-.9 2-2 2s-2-.9-2-2c0-.3.1-.6.3-.9-.3-.1-.6-.1-.9-.1-1.1 0-2 .9-2 2 0 1.6 1.3 3 3 3h8c1.7 0 3-1.4 3-3 0-1.1-.9-2-2-2z" />
    </svg>
);

export const ProfileIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <circle cx="12" cy="8" r="4" />

        <path d="M12 14c-5 0-8 2.5-8 6v2h16v-2c0-3.5-3-6-8-6z" />
    </svg>
);

export const CalendarIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
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

export const DocumentIcon = ({ strokeWidth = 2, size = 24, height = "24", width = "24", ...props }: IconSvgProps) => (
    <svg viewBox="0 0 24 24" width={size || width} height={size || height} {...props} fill="currentColor">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM13 9V3.5L18.5 9H13z" />

        <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
        <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
);

export const RightArrowIcon = ({ strokeWidth = 1.5, size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} fill="currentColor" viewBox="0 0 24 24">
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

export const AttachmentIcon = ({ strokeWidth = 1.5, size, height = "16", width = "16", ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
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

export const VoiceIcon = ({ strokeWidth = 1.5, size, height = "16", width = "16", ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} aria-hidden="true" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} d="M12 4v16m4-13v10M8 7v10m12-6v2M4 11v2" />
        </svg>
    );
};

export const TemplateIcon = ({ strokeWidth = 1.5, size, height = "18", width = "18", ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} aria-hidden="true" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
                <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73c.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
                <path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592c.426-.114.813-.218 1.165-.309" />
                <path strokeLinecap="round" d="m11.777 10l4.83 1.294M11 12.898l2.898.776" />
            </g>
        </svg>
    );
};

export const StarIcon = ({ size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} aria-hidden="true" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
            ></path>
        </svg>
    );
};

export const FunnelIcon = ({ size, height, width, ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} aria-hidden="true" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"
            ></path>
        </svg>
    );
};

export const EllipsisIcon = ({ size = 24, height = "24", width = "24", ...props }: IconSvgProps) => {
    return (
        <svg width={size || width} height={size || height} {...props} aria-hidden="true" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
        </svg>
    );
};

export const CopyIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ThumbsUpIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m4 7l2.94-5.041a1.932 1.932 0 0 1 3.56 1.378L10.25 4.5L9.93 6h2.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14zm5.771 6.11l-3.863-.455l-.379-5.3l2.708-4.64a.432.432 0 0 1 .796.308l-.571 2.663L8.073 7.5h4.796a.5.5 0 0 1 .482.634l-.879 3.162a2.5 2.5 0 0 1-2.7 1.814ZM2.748 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ThumbsDownIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12 9l-2.94 5.041a1.932 1.932 0 0 1-3.56-1.378l.25-1.163l.321-1.5h-2.94a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2zM6.229 2.89l3.863.455l.379 5.3l-2.708 4.64a.432.432 0 0 1-.796-.308l.571-2.663l.389-1.814H3.13a.5.5 0 0 1-.482-.634l.879-3.162a2.5 2.5 0 0 1 2.7-1.814Zm7.023 5.663a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const EmojiIcon = ({ height = "1em", width = "1em", ...props }: IconSvgProps) => {
    return (
        <svg width={width} height={height} {...props} aria-hidden="true" viewBox="0 0 16 16">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5.67 2.835a.75.75 0 1 0 1.34-.67C10.268 9.356 9.219 8.75 8 8.75s-2.267.606-2.67 1.415a.75.75 0 1 0 1.34.67c.097-.191.548-.585 1.33-.585s1.233.394 1.33.585M10 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z"
                clipRule="evenodd"
            />
        </svg>
    );
};
