"use client";
import React, { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

type SideToMiddleScrollProps = {
	children: ReactNode;
};

function SideToMiddleScroll({ children }: SideToMiddleScrollProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
	});

	// Define the x position transformation based on scroll
	const x = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);

	return (
		<div
			className="h-[200vh] bg-red-50 w-flex items-center justify-center relative p-2"
			ref={containerRef}
		>
			<motion.div
				style={{ x }}
				className="absolute top-0 left-0 w-32 h-32 bg-blue-500"
			>
				{children}
			</motion.div>
		</div>
	);
}

export { SideToMiddleScroll };
