'use client';

import { goToNextStep } from '@/app/store/slices/stepSlice';

import { ArrowRight, CheckCircle, Copy, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const BankTransferForm = () => {
	const [bankReceipt, setBankReceipt] = useState<File | null>(null);
	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setBankReceipt(e.target.files[0]);
		}
	};

	const router = useRouter();

	const dispatch = useDispatch();

	const handleBankTransferSubmit = () => {
		if (bankReceipt) {
			console.log('Submitting bank receipt:', bankReceipt);

			setBankReceipt(null);

			dispatch(goToNextStep());
			router.push('/onboarding/create-account');
			window.open('https://wa.me/2348012345678', '_blank');
		}
	};
	return (
		<div className='bg-green-50 border-2 border-green-200 rounded-2xl p-8 mb-8'>
			<h4 className='text-xl font-bold text-gray-900 mb-6'>
				Bank Transfer Instructions
			</h4>

			<div className='bg-white rounded-xl p-6 mb-6'>
				<div className='space-y-4'>
					<div>
						<label className='text-sm text-gray-500 block mb-1'>
							Bank Name
						</label>
						<div className='flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg'>
							<span className='font-bold text-gray-900'>
								First Bank Nigeria
							</span>
							<button className='text-orange-600 hover:text-orange-700 transition'>
								<Copy className='w-5 h-5' />
							</button>
						</div>
					</div>
					<div>
						<label className='text-sm text-gray-500 block mb-1'>
							Account Number
						</label>
						<div className='flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg'>
							<span className='font-bold text-gray-900'>1234567890</span>
							<button className='text-orange-600 hover:text-orange-700 transition'>
								<Copy className='w-5 h-5' />
							</button>
						</div>
					</div>
					<div>
						<label className='text-sm text-gray-500 block mb-1'>
							Account Name
						</label>
						<div className='flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg'>
							<span className='font-bold text-gray-900'>Sellora Limited</span>
							<button className='text-orange-600 hover:text-orange-700 transition'>
								<Copy className='w-5 h-5' />
							</button>
						</div>
					</div>
					<div>
						<label className='text-sm text-gray-500 block mb-1'>Amount</label>
						<div className='bg-orange-100 px-4 py-3 rounded-lg'>
							<span className='text-2xl font-black text-orange-600'>
								₦5,000.00
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='mb-6'>
				<label className='block text-sm font-bold text-gray-900 mb-3'>
					Upload Payment Receipt
				</label>
				<div className='border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-500 transition'>
					<input
						type='file'
						accept='image/*'
						onChange={handleFileUpload}
						className='hidden'
						id='receipt-upload'
					/>
					<label htmlFor='receipt-upload' className='cursor-pointer'>
						{bankReceipt ? (
							<div className='flex items-center justify-center gap-3'>
								<CheckCircle className='w-6 h-6 text-green-600' />
								<span className='text-gray-900 font-medium'>
									{bankReceipt.name}
								</span>
							</div>
						) : (
							<>
								<Upload className='w-12 h-12 text-gray-400 mx-auto mb-3' />
								<p className='text-gray-600 font-medium mb-1'>
									Click to upload receipt
								</p>
								<p className='text-xs text-gray-500'>PNG, JPG up to 5MB</p>
							</>
						)}
					</label>
				</div>
			</div>

			<button
				onClick={handleBankTransferSubmit}
				disabled={!bankReceipt}
				className='w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
				Submit Receipt
				<ArrowRight className='w-5 h-5' />
			</button>

			<div className='mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4'>
				<p className='text-sm text-yellow-800'>
					💬 After submitting, send your receipt to WhatsApp:{' '}
					<span className='font-bold'>+234 801 234 5678</span> for faster
					verification
				</p>
			</div>
		</div>
	);
};

export default BankTransferForm;
