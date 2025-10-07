import { ArrowRight } from 'lucide-react';
import React from 'react';


const PaystackForm = () => {
	return (
		<div className='bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-8'>
			<h4 className='text-xl font-bold text-gray-900 mb-4'>Payment Details</h4>
			<div className='space-y-3 mb-6'>
				<div className='flex justify-between items-center'>
					<span className='text-gray-600'>Subscription Plan</span>
					<span className='font-bold text-gray-900'>Monthly Access</span>
				</div>
				<div className='flex justify-between items-center'>
					<span className='text-gray-600'>Amount</span>
					<span className='text-3xl font-black text-gray-900'>₦5,000</span>
				</div>
			</div>
			<button
				
				className='w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition flex items-center justify-center gap-2'>
				Pay with Paystack
				<ArrowRight className='w-5 h-5' />
			</button>
			<p className='text-xs text-gray-500 text-center mt-4'>
				🔒 Secured by Paystack • Your payment is safe and encrypted
			</p>
		</div>
	);
};

export default PaystackForm;
