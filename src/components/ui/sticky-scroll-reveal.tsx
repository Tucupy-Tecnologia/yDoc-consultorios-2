"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Stethoscope } from "lucide-react";

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: (isActive: boolean) => React.ReactNode;
		description: (isActive: boolean) => React.ReactNode;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		target: ref,
		// container: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);
	});

	const linearGradients = [
		"linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
		"linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
		"linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
	];

	const [backgroundGradient, setBackgroundGradient] = useState(
		linearGradients[0]
	);

	useEffect(() => {
		setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
	}, [activeCard]);

	return (
		<motion.div
			className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 relative rounded-md"
			ref={ref}
		>
			<div className="hidden lg:block bg-white/10 h-full w-2/4 absolute -right-5" />
			<div className="ml-0 w-full div relative flex items-start md:pr-6">
				<div className="w-full space-y-20">
					{content.map((item, index) => (
						<div key={index} className="first:mt-10 snap-center h-screen lg:h-[45rem] flex flex-col justify-center rounded-xl p-4">
							<motion.div initial={{
								opacity: 0,
							}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="flex items-center justify-between mb-4 pr-4">
								<div className="bg-white/10 rounded-lg p-3">
									<Stethoscope className="text-brand-yellow size-5" />
								</div>
								<span className="font-bold text-brand-yellow">{index + 1}</span>
							</motion.div>
							<div className="hidden lg:block h-px bg-white/10 w-full mb-5" />
							{item.title(activeCard === index)}
							{item.description(activeCard === index)}
						</div>
					))}
					<div className="h-40" />
				</div>
			</div>
			<motion.div
				className={cn(
					"hidden lg:block lg:h-[54rem] rounded-xl max-w-xl ml-auto mr-2 sticky top-8 my-10 overflow-hidden",
					contentClassName
				)}
			>
				<AnimatePresence>
					{content[activeCard].content ?? null}
				</AnimatePresence>
			</motion.div>
		</motion.div >
	);
};
