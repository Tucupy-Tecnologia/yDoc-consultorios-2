"use client"

import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
	return (
		<div className="relative">
			<motion.div
				className="h-screen sticky top-0 z-10 flex items-center justify-center bg-blue-500/50 text-white"
			>
				<h1 className="text-4xl">First Section</h1>
			</motion.div>
			<motion.div
				className="h-screen relative flex items-center z-50 justify-center bg-red-500 text-white"
			>
				<h1 className="text-4xl">Second Section</h1>
			</motion.div>
		</div>
	);
};

export default ScrollAnimation;

