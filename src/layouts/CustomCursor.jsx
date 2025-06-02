import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    const [isLink, setIsLink] = useState(false);
    const pulseControls = useAnimation();

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.getAttribute("role") === "button"
            ) {
                setIsLink(true);
            }
        };

        const handleMouseOut = (e) => {
            const target = e.relatedTarget;
            if (
                !target ||
                (!target.closest("a") &&
                    !target.closest("button") &&
                    target.getAttribute("role") !== "button")
            ) {
                setIsLink(false);
            }
        };

        const handleClick = async () => {
            await pulseControls.start({
                opacity: [0.6, 0],
                scale: [1, 2],
                transition: { duration: 0.4, ease: "easeOut" },
            });

            // Reset to default state for next click
            pulseControls.set({ opacity: 0.6, scale: 1 });
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("mousedown", handleClick);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("mousedown", handleClick);
        };
    }, [cursorX, cursorY, pulseControls]);

    const baseClasses =
        "fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out";
    const sizeClass = isLink ? "w-6 h-6" : "w-6 h-6";
    const colorClass = isLink ? "bg-white" : "bg-black";

    return (
        <>
            {/* Main dot */}
            <motion.div
                className={`${baseClasses} ${sizeClass} ${colorClass} rounded-full`}
                style={{ x, y }}
            />

            {/* Pulse ring */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full border-[3px] border-blue-500 pointer-events-none z-[9998]"
                style={{ x, y }}
                initial={{ opacity: 0.6, scale: 1 }}
                animate={pulseControls}
            />
        </>
    );
};

export default CustomCursor;