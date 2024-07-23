"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { waitlist } from "@/actions/waitlist"
import { Loader } from 'lucide-react'
import { useState } from "react"

const formSchema = z.object({
	email: z.string({ required_error: "Email é obrigatório" }).email({ message: "Email inválido" }),
})

export function WaitlistForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [hasSavedEmail, setHasSavedEmail] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true)

		await waitlist(values.email)

		setIsLoading(false)
		setHasSavedEmail(true)
	}

	if (hasSavedEmail) {
		return (
			<div className="w-96">
				<p className="text-5xl font-bold text-white/85">Obrigado por se inscrever!</p>
				<div className="my-4" />
				<p className="text-gray-100">
					Você será notificado quando estivermos próximos de lançarmos nosso produto.
				</p>
			</div >
		)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md lg:col-span-5 lg:pt-2">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 relative items-center">
					<label htmlFor="email-address" className="sr-only">
						Email address
					</label>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="col-span-2">
								<FormControl>
									<input
										{...field}
										placeholder="Digite seu email"
										autoComplete="email"
										className="min-w-0 w-full flex-auto rounded-md border-0 px-3.5 py-2 text-gray-100 bg-white/10 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
									/>
								</FormControl>
								<FormMessage className="absolute -top-12" />
							</FormItem>
						)}
					/>
					<button
						type="submit"
						className="flex-none col-span-2 md:col-span-1 md:w-32 flex items-center justify-center rounded-md h-10 bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{
							isLoading
								? <Loader className="mr-2 h-5 w-5 animate-spin" />
								: "Notifique-me"
						}
					</button>
				</div>
				<p className="mt-4 text-sm leading-6 text-gray-100 w-full">
					Nós nos preocupamos com os dados. Leia nossa{' '}
					<a href="#" className="font-semibold text-gray-200 underline hover:text-gray-200">
						política de privacidade
					</a>
					.
				</p>
			</form>
		</Form>
	)
}
