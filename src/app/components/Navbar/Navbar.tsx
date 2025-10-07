'use client';

import { useState } from 'react';
import { Menu, Rocket, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const router = useRouter();

	return (
		<>
			<div className='bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 text-center'>
				<p className='text-sm font-medium'>
					Limited Time: Get access to all 5 high-converting templates for just
					₦5,000/month
				</p>
			</div>
			<nav className='sticky top-0 z-50 bg-white border-b shadow-sm'>
				<div className='max-w-7xl mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						<div onClick={() => router.push('/')} className='flex items-center gap-2'>
							<div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center'>
								<Rocket className='w-6 h-6 text-white' />
							</div>
							<span className='text-2xl font-bold text-gray-900'>
								<span className='text-orange-600'>Sellora</span>
							</span>
						</div>

						<div className='hidden md:flex items-center gap-6'>
							<a
								href='#problem'
								className='text-gray-600 hover:text-gray-900 font-medium'>
								The Problem
							</a>
							<a
								href='#solution'
								className='text-gray-600 hover:text-gray-900 font-medium'>
								How It Works
							</a>
							<a
								href='#templates'
								className='text-gray-600 hover:text-gray-900 font-medium'>
								Templates
							</a>
							<button onClick={() => router.push('/onboarding')} className='px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-bold hover:shadow-lg transition'>
								Start Selling Today →
							</button>
						</div>

						<button
							className='md:hidden text-gray-900'
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							{mobileMenuOpen ? <X /> : <Menu />}
						</button>
					</div>

					{mobileMenuOpen && (
						<div className='md:hidden mt-4 pb-4 space-y-3'>
							<a
								href='#problem'
								className='block text-gray-600 hover:text-gray-900 font-medium'>
								The Problem
							</a>
							<a
								href='#solution'
								className='block text-gray-600 hover:text-gray-900 font-medium'>
								How It Works
							</a>
							<a
								href='#templates'
								className='block text-gray-600 hover:text-gray-900 font-medium'>
								Templates
							</a>
							<button
								onClick={() => router.push('/onboarding')}
								className='w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-bold'>
								Start Selling Today →
							</button>
						</div>
					)}
				</div>
			</nav>
		</>
	);
}
