import * as React from "react";
import {motion, SVGMotionProps} from "framer-motion";

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
        fill="#1E1014"
        strokeWidth="2.7"
        stroke="hsl(0, 0%, 0%)"
        strokeLinecap="round"
        initial={false}
        {...props}
    />
);

interface IProps {
    showMenu?: boolean;
}

export const MenuToggle = (props: IProps) => {
    const animate = props.showMenu ? "open" : "closed";
    return (
        <svg width="40" height="60" viewBox="0 0 40 30">
            <Path
                variants={{
                    closed: {d: "M 2 1.5 L 33 1.5"},
                      open: {d: "M 2 28 L 33 1.5"}
                }}
                animate={animate}

            />
            <Path
                d="M 2 15 L 33 15"
                variants={{
                    closed: {opacity: 1},
                    open: {opacity: 0}
                }}
                transition={{duration: 0.1}}
                animate={animate}
            />
            <Path
                variants={{
                    closed: {d: "M 2 28 L 33 28 "},
                    open:   {d: "M 2 1.5 L 33 28 "}
                }}
                animate={animate}
            />
        </svg>
    );
};