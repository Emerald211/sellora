'use client';

import { RootState } from '@/app/store/store';
import { Check, Rocket } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

const OnboardingCompleted = () => {
	const currentStep = useSelector(
		(state: RootState) => state.activeStep.currentStep
	);

	return (
		<div>
			{currentStep === 3 && (
				<div className='text-center'>
					<div className='w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6'>
						<Check className='w-12 h-12 text-white' />
					</div>

					<h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-3'>
					 Welcome to Sellora!
					</h2>
					<p className='text-lg text-gray-600 mb-8'>
						Your store is ready. Let's create your first product page!
					</p>

					<div className='bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-8'>
						<h3 className='text-xl font-bold text-gray-900 mb-6'>
							What's Next?
						</h3>
						<div className='space-y-4 text-left'>
							<div className='flex items-start gap-4'>
								<div className='w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold'>
									1
								</div>
								<div>
									<h4 className='font-bold text-gray-900 mb-1'>
										Choose a Template
									</h4>
									<p className='text-gray-600 text-sm'>
										Browse our 5 high-converting templates and pick your
										favorite
									</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold'>
									2
								</div>
								<div>
									<h4 className='font-bold text-gray-900 mb-1'>
										Customize Your Page
									</h4>
									<p className='text-gray-600 text-sm'>
										Add your product images, description, price, and branding
									</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold'>
									3
								</div>
								<div>
									<h4 className='font-bold text-gray-900 mb-1'>
										Publish & Share
									</h4>
									<p className='text-gray-600 text-sm'>
										Get your unique link and start using it in your ads!
									</p>
								</div>
							</div>
						</div>
					</div>

					<button className='w-full py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-xl hover:shadow-xl transition flex items-center justify-center gap-2'>
						Go to Dashboard
						<Rocket className='w-6 h-6' />
					</button>
				</div>
			)}
		</div>
	);
};

export default OnboardingCompleted;
