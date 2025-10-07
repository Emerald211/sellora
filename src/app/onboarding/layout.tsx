'use client';

import { Check, CreditCard, Rocket, Store } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import React from 'react';

export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const description = [
		{ title: 'Make Payment', icon: CreditCard },
		{ title: 'Create Your Store', icon: Store },
		{ title: 'Start Publishing your site', icon: Rocket },
	];

	const activeStep = useSelector((state: RootState) => state.activeStep.step);
	const currentStep = useSelector(
		(state: RootState) => state.activeStep.currentStep
	);

	return (
		<div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50'>
			<div className='max-w-4xl mx-auto px-6 py-12'>
				<div className='flex items-center justify-between mb-16'>
					{activeStep.map((step, index) => (
						<React.Fragment key={step.id}>
							<div className='flex flex-col items-center flex-1'>
								<div
									className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all ${
										step.status === 'completed'
											? 'bg-green-500 text-white'
											: currentStep === step.id
											? 'bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg'
											: 'bg-gray-200 text-gray-400'
									}`}>
									{step.status === 'completed' ? (
										<Check className='w-8 h-8' />
									) : (
										(() => {
											const Icon = description[step.id - 1]?.icon;
											return Icon ? <Icon className='w-8 h-8' /> : null;
										})()
									)}
								</div>
								<div className='text-center'>
									<div
										className={`text-sm font-bold mb-1 ${
											step.status === 'completed'
												? 'text-gray-900'
												: 'text-gray-400'
										}`}>
										Step {step.id}
									</div>
									<div
										className={`text-xs ${
											step.status === 'completed'
												? 'text-gray-600'
												: 'text-gray-400'
										}`}>
										{step.id === 1 ? (
											<span key={index}>{description[0].title}</span>
										) : step.id === 2 ? (
											<span key={index}>{description[1].title}</span>
										) : step.id === 3 ? (
											<span key={index}>{description[2].title}</span>
										) : (
											''
										)}
									</div>
								</div>
							</div>
							{/* {index < steps.length - 1 && (
								<div
									className={`h-1 flex-1 mx-4 rounded-full transition-all ${
										currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
									}`}
								/>
							)} */}
						</React.Fragment>
					))}
				</div>

				<div className='bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12'>
					<div className='max-w-4xl mx-auto px-6 py-12'>
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
