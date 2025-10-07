'use client';

import React, { useState } from 'react';
import { CreditCard, Store, CheckCircle } from 'lucide-react';
import BankTransferForm from '../components/Forms/BankTransferForm';
import PaystackForm from '../components/Forms/PaystackForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const OnboardingFlow = () => {
	const currentStep = useSelector(
		(state: RootState) => state.activeStep.currentStep
	);
	const activeStep = useSelector((state: RootState) => state.activeStep.step);

	console.log(activeStep);

	const [paymentMethod, setPaymentMethod] = useState<
		'paystack' | 'bank' | null
	>(null);

	return (
		<div>
			<div>
				<div>
					{currentStep === 1 ? (
						<div>
							<div className='text-center mb-10'>
								<h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-3'>
									Choose Your Payment Method
								</h2>
								<p className='text-lg text-gray-600'>
									Secure payment to unlock all 5 winning templates
								</p>
							</div>

							<div className='grid md:grid-cols-2 gap-6 mb-8'>
								{/* Bank Transfer Option */}
								<button
									onClick={() => setPaymentMethod('bank')}
									className={`p-8 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
										paymentMethod === 'bank'
											? 'border-orange-600 bg-orange-50 shadow-lg'
											: 'border-gray-200 hover:border-orange-300'
									}`}>
									<div className='flex items-start justify-between mb-4'>
										<div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center'>
											<Store className='w-6 h-6 text-white' />
										</div>
										{paymentMethod === 'bank' && (
											<CheckCircle className='w-6 h-6 text-orange-600' />
										)}
									</div>
									<h3 className='text-xl font-bold text-gray-900 mb-2'>
										Bank Transfer
									</h3>
									<p className='text-gray-600 text-sm mb-4'>
										Direct transfer to our account
									</p>
									<div className='flex items-center gap-2 text-xs text-yellow-600 font-medium'>
										<CheckCircle className='w-4 h-4' />
										<span>Verified within 24hrs</span>
									</div>
								</button>

								{/* Paystack Option */}
								<button
									onClick={() => setPaymentMethod('paystack')}
									className={`p-8 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
										paymentMethod === 'paystack'
											? 'border-orange-600 bg-orange-50 shadow-lg'
											: 'border-gray-200 hover:border-orange-300'
									}`}>
									<div className='flex items-start justify-between mb-4'>
										<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center'>
											<CreditCard className='w-6 h-6 text-white' />
										</div>
										{paymentMethod === 'paystack' && (
											<CheckCircle className='w-6 h-6 text-orange-600' />
										)}
									</div>
									<h3 className='text-xl font-bold text-gray-900 mb-2'>
										Pay with Card
									</h3>
									<p className='text-gray-600 text-sm mb-4'>
										Fast & secure payment via Paystack
									</p>
									<div className='flex items-center gap-2 text-xs text-green-600 font-medium'>
										<CheckCircle className='w-4 h-4' />
										<span>Instant activation</span>
									</div>
								</button>
							</div>

							{paymentMethod === 'paystack' && <PaystackForm />}

							{paymentMethod === 'bank' && <BankTransferForm />}
						</div>
					) : currentStep === 2 ? (
						<div className=' flex justify-center items-center'>
							{' '}
							<button className=' bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg  px-3 py-3'>
								Complete your Account verification
							</button>
						</div>
					) : (
						<div className='flex justify-center items-center'>
							<button className=' bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg  px-3 py-3'>
								You&#39;all set! Go to your Dashboard
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OnboardingFlow;
