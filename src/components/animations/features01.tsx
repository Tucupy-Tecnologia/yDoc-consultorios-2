"use client"

import Lottie from 'react-lottie'
import animationData from '@/images/lottie/hero.json'

export function Features01() {

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
