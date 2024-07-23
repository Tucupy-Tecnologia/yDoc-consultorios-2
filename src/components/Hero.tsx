"use client"

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Header } from './Header'
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './Button'
import { FlipWords } from './FlipWords'
import { cn } from '@/lib/utils'

export function Hero() {

	const { scrollY } = useScroll()

	const y = useTransform(scrollY, [0, 600], [0, 500], { ease: easeInOut })
	const x = useTransform(scrollY, [0, 500], ["0%", "-47%"], { ease: easeInOut })

	const opacity = useTransform(scrollY, [0, 200], [1, 0])

	const words = ["eficiente.", "fácil.", "personalizada.", "moderna."];

	return (
		<>
			<Header />
			<div className="relative bg-brand-blue isolate overflow-hidden pb-[30rem]">
				<svg
					aria-hidden="true"
					className="absolute inset-0 -z-10 h-full w-full stroke-gray-100/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
				>
					<defs>
						<pattern
							x="50%"
							y={-1}
							id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
							width={200}
							height={200}
							patternUnits="userSpaceOnUse"
						>
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
					<rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
				</svg>
				<div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
					<div className="lg:hidden mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
						<div className="mt-24 sm:mt-32 lg:mt-16">
							<a href="#" className="inline-flex space-x-6">
								<span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/10">
									Novidades
								</span>
								<span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-100">
									<span>Abrimos nossa waitlist</span>
									<ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
								</span>
							</a>
						</div>
						<h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
							Tornando a gestão de consultórios <FlipWords words={words} />
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-200">
							Aproveite nossa plataforma inovadora para otimizar cada aspecto da gestão do seu consultório, desde agendamentos até atendimento ao paciente.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Button color='white'>
								Começar gratuitamente
							</Button>
							<Button variant='outline'>
								Saiba mais
							</Button>
						</div>
					</div>

					<motion.div style={{ opacity }} className="hidden lg:block mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
						<div className="mt-24 sm:mt-32 lg:mt-16">
							<a href="#" className="inline-flex space-x-6">
								<span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/10">
									Novidades
								</span>
								<span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-100">
									<span>Abrimos nossa waitlist</span>
									<ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
								</span>
							</a>
						</div>
						<h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
							Tornando a gestão de consultórios <FlipWords words={words} />
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-200">
							Aproveite nossa plataforma inovadora para otimizar cada aspecto da gestão do seu consultório, desde agendamentos até atendimento ao paciente.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Button color='white'>
								Começar gratuitamente
							</Button>
							<Button variant='outline'>
								Saiba mais
							</Button>
						</div>
					</motion.div>
					<div className={cn("lg:hidden mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:max-w-none lg:flex-none")}>
						<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
							<div className="rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
								<img
									alt="App screenshot"
									src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
									width={2432}
									height={1442}
									className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
								/>
							</div>
						</div>
					</div>
					<motion.div style={{ y, x }} className={cn("hidden lg:flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:mt-0 lg:max-w-none lg:flex-none")}>
						<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
							<div className="rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
								<img
									alt="App screenshot"
									src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
									width={2432}
									height={1442}
									className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div >
		</>
	)
}
