
import { WaitlistForm } from "./WaitlisForm";

export function WaitlistSection() {
	return (
		<div id="waitlist" className="bg-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative isolate overflow-hidden bg-brand-blue px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
					<h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Esteja entre os primeiros a modernizar seu consultório.
					</h2>
					<p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
						Não perca a oportunidade de ser um dos primeiros a utilizar o Ydoc e transformar a gestão do seu consultório.
					</p>
					<div className="flex items-center justify-center mt-12">
						<WaitlistForm />
					</div>
				</div>
			</div>
		</div>
	)
}
