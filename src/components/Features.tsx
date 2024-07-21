"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Features01 } from "./animations/features01";
import { Features02 } from "./animations/features02";
import { AnimatePresence, motion } from "framer-motion";

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
				<motion.div
					key={1}
					exit={{
						y: 100,
						x: 100,
						opacity: 0,
					}}
					initial={{
						opacity: 0,
						y: 100,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						amount: 0.5,
					}}
				>
					<Features01 />
				</motion.div>
			</div >
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
				Integração com <span className="text-brand-yellow">tabelas CBHPM</span>
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
				Integre diretamente com as tabelas CBHPM para <span className="text-brand-yellow">garantir precisão nos valores cobrados e reembolsados.</span><br /><br /> Este sistema <span className="text-brand-yellow">automatiza o processo de cobrança e reembolso</span>, associando automaticamente os procedimentos registrados nos boletins cirúrgicos ou anestésicos com os valores corretos definidos pela CBHPM.
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<motion.div
					key={2}
					exit={{
						y: 100,
						x: 100,
						opacity: 0,
					}}
					initial={{
						opacity: 0,
						y: 100,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						amount: 0.5,
					}}
				>
					<Features02 />
				</motion.div>
			</div >
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
				<span className="text-brand-yellow">Relatórios</span> de procedimentos
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
				Aumente a <span className="text-brand-yellow">eficiência e a transparência</span> da gestão clínica com a capacidade de gerar relatórios detalhados de procedimentos realizados. <br /> <br /> Nosso sistema permite a <span className="text-brand-yellow">filtragem dos dados</span> por convênios, profissionais envolvidos e períodos específicos,
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<motion.div
					key={3}
					exit={{
						y: 100,
						x: 100,
						opacity: 0,
					}}
					initial={{
						opacity: 0,
						y: 100,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						amount: 0.5,
					}}
				>
					<Features01 />
				</motion.div>
			</div >
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
				Integração com <span className="text-brand-yellow">fluxo financeiro</span>
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
				<span className="text-brand-yellow">Integre todos os dados</span> dos procedimentos cirúrgicos e anestésicos ao fluxo financeiro do consultório, proporcionando uma <span className="text-brand-yellow">visão clara e consolidada das finanças.</span><br /> <br /> Este sistema robusto permite que cada registro de procedimento se reflita diretamente nas finanças.
			</motion.p>
		),
		content: (
			<div className="h-full w-full flex items-center justify-center text-white bg-brand-blue">
				<motion.div
					key={4}
					exit={{
						y: 100,
						x: 100,
						opacity: 0,
					}}
					initial={{
						opacity: 0,
						y: 100,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						amount: 0.5,
					}}
				>
					<Features02 />
				</motion.div>
			</div >
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



