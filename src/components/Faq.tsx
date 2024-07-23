import { Container } from '@/components/Container'

const faqs = [
	[
		{
			question: 'Como o Ydoc pode ajudar meu consultório?',
			answer:
				'O Ydoc oferece uma gama de funcionalidades para simplificar e otimizar a gestão do seu consultório, desde a organização da agenda até o controle financeiro.',
		},
		{
			question: 'É fácil de usar?',
			answer:
				'Sim, o Ydoc foi desenvolvido com uma interface intuitiva e fácil de usar, garantindo que você possa aproveitar todas as funcionalidades sem complicações.',
		},
		{
			question: 'Posso integrar com outros sistemas?',
			answer:
				'Sim, o Ydoc permite integração com diversos sistemas e ferramentas que você já utiliza, proporcionando um fluxo de trabalho mais eficiente.',
		},
	],
	[
		{
			question: 'O Ydoc é seguro?',
			answer:
				'Sim, a segurança dos seus dados é nossa prioridade. Utilizamos as mais avançadas tecnologias de segurança para garantir a proteção das suas informações.',
		},
		{
			question: 'Quais são os custos?',
			answer:
				'O Ydoc oferece diferentes planos de assinatura, adaptados às necessidades do seu consultório. Consulte nossa página de preços para mais informações.',
		},
		{
			question: 'Posso experimentar antes de comprar?',
			answer:
				'Sim, oferecemos um período de teste gratuito para que você possa explorar todas as funcionalidades do Ydoc antes de tomar uma decisão.',
		},
	],
	[
		{
			question: 'Como é o suporte ao cliente?',
			answer:
				'Nossa equipe de suporte está disponível para ajudar com qualquer dúvida ou problema que você possa ter, garantindo que você aproveite ao máximo o Ydoc.',
		},
		{
			question: 'O Ydoc funciona em dispositivos móveis?',
			answer:
				'Sim, o Ydoc possui um aplicativo mobile que se integra perfeitamente à nossa plataforma, permitindo que você gerencie seu consultório de qualquer lugar.',
		},
		{
			question: 'Como faço para começar?',
			answer:
				'É simples! Basta criar uma conta, escolher o plano que melhor se adapta às suas necessidades e começar a usar o Ydoc para transformar a gestão do seu consultório.',
		},
	],
]

export function Faq() {
	return (
		<section
			id="faqs"
			aria-labelledby="faqs-title"
			className="bg-white border-t border-gray-200 py-20 sm:py-32"
		>
			<Container>
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2
						id="faqs-title"
						className="text-3xl font-medium tracking-tight text-gray-900"
					>
						Perguntas Frequentes
					</h2>
					<p className="mt-2 text-lg text-gray-600">
						Se você tiver qualquer outra dúvida,{' '}
						<a
							href="mailto:info@example.com"
							className="text-gray-900 underline"
						>
							entre em contato conosco
						</a>
						.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
				>
					{faqs.map((column, columnIndex) => (
						<li key={columnIndex}>
							<ul role="list" className="space-y-10">
								{column.map((faq, faqIndex) => (
									<li key={faqIndex}>
										<h3 className="text-lg font-semibold leading-6 text-gray-900">
											{faq.question}
										</h3>
										<p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</Container>
		</section>
	)
}
