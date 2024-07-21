"use client"

import Lottie from 'react-lottie'
import animationData from '@/images/lottie/dashboard.json'

export function Features02() {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: ''
		}
	};

	return (
		<Lottie
			options={defaultOptions}
		/>
	)
}
