import * as React from "react";
import { IconSvgProps } from "../types";

export const Discord: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                fill="currentColor"
            />
        </svg>
    );
};

export const Linkedin: React.FC<IconSvgProps> = ({ width = "24", height = "24", ...props }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={width}
            height={height}
            {...props}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
};

export const Twitter: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                fill="currentColor"
            />
        </svg>
    );
};

export const Github: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const Facebook: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                fill="currentColor"
            />
        </svg>
    );
};

export const Youtube: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
            <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                fill="currentColor"
            />
        </svg>
    );
};

export const WhatsApp: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    return (
        <svg viewBox="0 0 24 24" height={size || height} width={size || width} {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.996 0.002C5.372 0.002 0 5.374 0 11.996c0 2.116.555 4.184 1.618 6.012L.053 24l6.188-1.603a11.925 11.925 0 0 0 5.755 1.456c6.622 0 11.996-5.372 11.996-11.996 0-6.622-5.374-11.996-11.996-11.996zm5.668 17.583c-.211.596-1.234 1.157-1.696 1.215-.455.057-1.03.08-1.666-.098a18.145 18.145 0 0 1-2.629-.99c-4.628-2.087-7.634-7.194-7.875-7.529-.24-.334-1.871-2.493-1.871-4.756 0-2.263 1.197-3.39 1.623-3.854.423-.459 1.116-.566 1.484-.566.371 0 .743.014 1.063.033.346.021.805-.13 1.262.95.455 1.084 1.568 3.771 1.706 4.038.139.267.226.58.048.938-.177.358-.266.579-.533.88-.272.305-.571.684-.822.916-.253.234-.516.492-.222 1.017.291.524 1.296 2.141 2.783 3.462 1.916 1.707 3.527 2.246 4.054 2.504.524.258.831.229 1.144-.139.311-.364 1.284-1.494 1.629-2.007.347-.51.695-.422 1.185-.243.489.178 3.086 1.455 3.622 1.725.536.272.892.404 1.023.629.13.226.13 1.303-.081 1.899z"
                fill="currentColor"
            />
        </svg>
    );
};
