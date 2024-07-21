"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Features01 } from "./animations/features01";
import { Features02 } from "./animations/features02";
import { motion } from "framer-motion";

const content = [
	{
		title: (isActive: boolean) => (
			<motion.h2
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-4xl font-bold text-white"
			>
				<span className="text-brand-yellow">Cadastro de boletins</span> cirúrgicos ou anestésicos
			</motion.h2>
		),
		description: (isActive: boolean) => (
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-3xl mt-4 text-gray-200"
			>
				Mantenha um <span className="text-brand-yellow">registro detalhado</span> de todos os boletins cirúrgicos ou anestésicos, garantindo a organização e acessibilidade das informações. <br /> <br /> Este sistema de cadastro permite a inserção de <span className="text-brand-yellow">dados abrangentes</span> sobre cada procedimento.
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<Features01 />
			</div>
		),
	},


	{
		title: (isActive: boolean) => (
			<motion.h2
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-4xl font-bold text-white"
			>
				<span className="text-brand-yellow">Cadastro de boletins</span> cirúrgicos ou anestésicos
			</motion.h2>
		),
		description: (isActive: boolean) => (
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-3xl mt-4 text-gray-200"
			>
				Mantenha um <span className="text-brand-yellow">registro detalhado</span> de todos os boletins cirúrgicos ou anestésicos, garantindo a organização e acessibilidade das informações.
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<Features02 />
			</div>
		),
	},


	{
		title: (isActive: boolean) => (
			<motion.h2
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-4xl font-bold text-white"
			>
				<span className="text-brand-yellow">Cadastro de boletins</span> cirúrgicos ou anestésicos
			</motion.h2>
		),
		description: (isActive: boolean) => (
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-3xl mt-4 text-gray-200"
			>
				Mantenha um <span className="text-brand-yellow">registro detalhado</span> de todos os boletins cirúrgicos ou anestésicos, garantindo a organização e acessibilidade das informações.
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<Features01 />
			</div>
		),
	},


	{
		title: (isActive: boolean) => (
			<motion.h2
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-4xl font-bold text-white"
			>
				<span className="text-brand-yellow">Cadastro de boletins</span> cirúrgicos ou anestésicos
			</motion.h2>
		),
		description: (isActive: boolean) => (
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isActive ? 1 : 0.3,
				}}
				className="text-3xl mt-4 text-gray-200"
			>
				Mantenha um <span className="text-brand-yellow">registro detalhado</span> de todos os boletins cirúrgicos ou anestésicos, garantindo a organização e acessibilidade das informações.
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<Features02 />
			</div>
		),
	},

];
export function Features() {
	return (
		<div>
			<StickyScroll content={content} />
		</div>
	);
}



