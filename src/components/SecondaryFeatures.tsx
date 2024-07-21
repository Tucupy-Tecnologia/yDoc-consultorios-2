
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { Button } from './Button'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const features = [
	{
		name: 'Push to deploy',
		description:
			'Pellentesque enim.',
		href: '#',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates',
		description:
			'Pellentesque enim.',
		href: '#',
		icon: LockClosedIcon,
	},
	{
		name: 'Simple queues',
		description:
			'Pellentesque enim.',
		href: '#',
		icon: ArrowPathIcon,
	},
]

export default function Example() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Everything you need to deploy your app
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex items-center border border-brand-blue flex-col px-20 py-6 rounded-xl w-fit mx-auto justify-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<feature.icon aria-hidden="true" className="size-32 flex-none text-brand-blue" />
									<p className="flex-auto mt-4">{feature.description}</p>
								</dt>
							</div>
						))}
					</dl>
				</div>
				<div className='mx-auto max-w-lg flex flex-col items-center justify-center gap-y-10 mt-16'>
					<p className="text-lg leading-8 text-gray-600 text-center">
						Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
						pulvinar et feugiat blandit at. In mi viverra elit nunc.
					</p>
					<HoverBorderGradient>Get started</HoverBorderGradient>
				</div>
			</div>
		</div>
	)
}
