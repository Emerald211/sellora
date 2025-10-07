'use client';
import { goToNextStep } from '@/app/store/slices/stepSlice';
import { RootState } from '@/app/store/store';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CreateAccount = () => {
	const currentStep = useSelector(
		(state: RootState) => state.activeStep.currentStep
	);

	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		storeName: '',
		phone: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleAccountCreation = () => {
		console.log('Account Data:', formData);

		dispatch(goToNextStep());
	};

	return (
		<div>
			{currentStep === 2 ? (
				<div>
					<div className='text-center mb-10'>
						<h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-3'>
							Create Your Store Account
						</h2>
						<p className='text-lg text-gray-600'>
							Almost there! Let&#39;s set up your account
						</p>
					</div>

					<form className='space-y-6'>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-sm font-bold text-gray-900 mb-2'>
									Email Address
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									placeholder='your@email.com'
									className='w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition outline-none'
								/>
							</div>
							<div>
								<label className='block text-sm font-bold text-gray-900 mb-2'>
									Phone Number
								</label>
								<input
									type='tel'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									placeholder='+234 800 000 0000'
									className='w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition outline-none'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-bold text-gray-900 mb-2'>
								Store Name
							</label>
							<input
								type='text'
								name='storeName'
								value={formData.storeName}
								onChange={handleInputChange}
								placeholder='Your Store Name'
								className='w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition outline-none text-black'
							/>
							<p className='text-xs text-gray-500 mt-2'>
								Your store URL:{' '}
								<span className='font-mono text-orange-600'>
									sellora.com/
									{formData.storeName.toLowerCase().replace(/\s+/g, '-')}
								</span>
							</p>
						</div>

						<div>
							<label className='block text-sm font-bold text-gray-900 mb-2'>
								Password
							</label>
							<input
								type='password'
								name='password'
								value={formData.password}
								onChange={handleInputChange}
								placeholder='Enter a strong password'
								className='w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition outline-none'
							/>
						</div>

						<button
							onClick={handleAccountCreation}
							type='button'
							className='w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition flex items-center justify-center gap-2'>
							Create My Store
							<ArrowRight className='w-5 h-5' />
						</button>
					</form>
				</div>
			) : currentStep === 3 ? (
				<div className='flex justify-center items-center'>
					<button className=' bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg  px-3 py-3'>
						Youre all set! Go to your Dashboard
					</button>
				</div>
			) : (
				<div className='flex justify-center items-center'>
					<button className=' bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg  px-3 py-3'>
						Go back and Complete Payment
					</button>
				</div>
			)}
		</div>
	);
};

export default CreateAccount;
