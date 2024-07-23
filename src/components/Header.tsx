"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { Logo } from './Logo'

export function Header() {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const navigation = [
		{ name: 'Nossa plataforma', href: '#' },
		{ name: 'Funcionalidades', href: '#' },
		{ name: 'Relatos', href: '#' },
		{ name: 'FAQs', href: '#' },
	]

	return (
		<header className="max-w-7xl mx-auto absolute inset-x-0 top-0 z-50">
			<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Logo
							className="h-10 w-auto"
						/>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6 text-gray-100" />
					</button>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<div className="hidden mr-20 lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className="group hover:text-brand-yellow transition-colors gap-1 whitespace-nowrap flex items-center justify-center text-xs font-semibold leading-6 text-gray-100">
								<span aria-hidden="true" className='mb-0.5 text-brand-yellow group-hover:translate-x-0.5 transition-transform'>&rarr;</span>
								{item.name}
							</a>
						))}
					</div>
					<HoverBorderGradient
						containerClassName="rounded-full"
						as="button"
						className="bg-white text-black flex items-center space-x-2"
					>
						Dashboard
					</HoverBorderGradient>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">yDoc</span>
							<Logo
								className="h-10 w-auto"
							/>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6 text-gray-100" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-100/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<HoverBorderGradient
									containerClassName="rounded-full"
									as="button"
									className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
								>
									<span>Dashboard</span>
								</HoverBorderGradient>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
