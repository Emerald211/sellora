'use client';

import {
	AlertCircle,
	ArrowRight,
	CheckCircle2,
	Clock,
	DollarSign,
	PlayCircle,
	Rocket,
	Target,
	TrendingUp,
} from 'lucide-react';

import {
	ProblemCardProps,
	StepCardProps,
	BenefitCardProps,
	TemplateShowcaseProps,
	TestimonialCardProps,
	PricingFeatureProps,
	FeatureProps,
} from '../types/landingPage';
import { useRouter } from 'next/navigation';

export default function Home() {

	const router = useRouter();
	return (
		<div className=' font-urbanist'>
			<div className='min-h-screen bg-white'>
				<section className='py-20 px-6 bg-gradient-to-b from-orange-50 to-white'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center max-w-4xl mx-auto mb-12'>
							<div className='inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium mb-6'>
								<Target className='w-4 h-4' />
								For Marketers Running Facebook, Instagram & Google Ads
							</div>

							<h1 className='text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6'>
								Sell Your Products
								<span className='text-orange-600'>3X Faster</span> with
								Professional Landing Pages
							</h1>

							<p className='text-2xl text-gray-700 leading-relaxed mb-8'>
								Stop losing sales to ugly product pages. Get high-converting,
								single-product landing pages that turn your ad clicks into
								<span className='font-bold text-orange-600'>instant sales</span>
								.
							</p>

							<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
								<button onClick={() => router.push('/onboarding')} className='group px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition flex items-center justify-center gap-2'>
									Get Your Landing Pages Now
									<ArrowRight className='w-6 h-6 group-hover:translate-x-2 transition' />
								</button>
								<button onClick={() => router.push('/onboarding')} className='px-10 py-5 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition flex items-center justify-center gap-2'>
									<PlayCircle className='w-5 h-5' />
									Watch Demo
								</button>
							</div>

							<div className='flex flex-wrap items-center justify-center gap-6 text-sm'>
								<div className='flex items-center gap-2'>
									<CheckCircle2 className='w-5 h-5 text-green-600' />
									<span className='text-gray-600 font-medium'>
										Setup in 5 minutes
									</span>
								</div>
								<div className='flex items-center gap-2'>
									<CheckCircle2 className='w-5 h-5 text-green-600' />
									<span className='text-gray-600 font-medium'>
										No coding needed
									</span>
								</div>
								<div className='flex items-center gap-2'>
									<CheckCircle2 className='w-5 h-5 text-green-600' />
									<span className='text-gray-600 font-medium'>
										Mobile optimized
									</span>
								</div>
							</div>
						</div>

						{/* Hero Image/Preview */}
						<div className='max-w-5xl mx-auto'>
							<div className='relative'>
								<div className='absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-20'></div>
								<div className='relative bg-white rounded-2xl shadow-2xl border-8 border-gray-100 overflow-hidden'>
									<div className='bg-gray-100 px-4 py-3 flex items-center gap-2'>
										<div className='flex gap-1.5'>
											<div className='w-3 h-3 rounded-full bg-red-500'></div>
											<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
											<div className='w-3 h-3 rounded-full bg-green-500'></div>
										</div>
										<div className='flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500'>
											yourproduct.com
										</div>
									</div>
									<div className='aspect-video bg-gradient-to-br from-orange-100 via-white to-red-100 flex items-center justify-center p-12'>
										<div className='text-center space-y-6 w-full max-w-2xl'>
											<div className='h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-lg'></div>
											<div className='space-y-3'>
												<div className='h-8 bg-gray-200 rounded-lg w-3/4 mx-auto'></div>
												<div className='h-4 bg-gray-200 rounded w-full'></div>
												<div className='h-4 bg-gray-200 rounded w-5/6 mx-auto'></div>
											</div>
											<div className='h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Problem Section */}
				<section id='problem' className='py-20 px-6 bg-gray-50'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl lg:text-5xl font-black text-gray-900 mb-4'>
								Are You Wasting Money on Ads That
								<span className='text-red-600'>Don&apos;t Convert?</span>
							</h2>
							<p className='text-xl text-gray-600'>
								You&apos;re not alone. Here&apos;s what&apos;s killing your
								sales...
							</p>
						</div>

						<div className='grid md:grid-cols-3 gap-8'>
							<ProblemCard
								icon={<AlertCircle className='w-8 h-8' />}
								title='Your Landing Page Looks Unprofessional'
								description="Customers don't trust ugly pages. They click your ad, see a poorly designed page, and leave immediately."
							/>
							<ProblemCard
								icon={<Clock className='w-8 h-8' />}
								title='It Takes Forever to Set Up'
								description='Hiring a designer costs ₦50,000+. DIY website builders are confusing. You waste weeks just to launch.'
							/>
							<ProblemCard
								icon={<TrendingUp className='w-8 h-8' />}
								title='Low Conversion Rate'
								description="Your page doesn't convince people to buy. No clear call-to-action. No social proof. No urgency."
							/>
						</div>
					</div>
				</section>

				{/* Solution Section */}
				<section id='solution' className='py-20 px-6 bg-white'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl lg:text-5xl font-black text-gray-900 mb-4'>
								The Solution:{' '}
								<span className='text-orange-600'>Ready-to-Use</span> Product
								Pages Built for Ads
							</h2>
							<p className='text-xl text-gray-600'>
								Launch your product in 3 simple steps
							</p>
						</div>

						<div className='grid md:grid-cols-3 gap-8'>
							<StepCard
								number='1'
								title='Choose a Template'
								description='Pick from 5 proven, high-converting templates designed specifically for single-product sales.'
								color='orange'
							/>
							<StepCard
								number='2'
								title='Add Your Product Details'
								description='Upload images, write your product description, set your price. No coding, just fill in the blanks.'
								color='orange'
							/>
							<StepCard
								number='3'
								title='Publish & Start Selling'
								description='Get your unique link instantly. Add it to your Facebook ads, Instagram bio, or WhatsApp. Done!'
								color='orange'
							/>
						</div>

						<div className='mt-16 text-center'>
							<div className='inline-block bg-green-50 border-2 border-green-600 rounded-2xl px-8 py-6'>
								<div className='flex items-center gap-3 text-green-800'>
									<Clock className='w-6 h-6' />
									<p className='text-lg font-bold'>
										Total time from signup to published page: Less than 5
										minutes!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className='py-20 px-6 bg-gradient-to-b from-orange-600 to-red-600 text-white'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl lg:text-5xl font-black mb-4'>
								Why Successful Marketers Use Sellora
							</h2>
							<p className='text-xl text-orange-100'>
								Real results from real users
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
							<BenefitCard
								icon={<TrendingUp className='w-10 h-10' />}
								stat='3X Higher'
								label='Conversion Rate'
							/>
							<BenefitCard
								icon={<Clock className='w-10 h-10' />}
								stat='5 Minutes'
								label='Setup Time'
							/>
							<BenefitCard
								icon={<DollarSign className='w-10 h-10' />}
								stat='Save ₦50k+'
								label='vs Hiring Designer'
							/>
							<BenefitCard
								icon={<Target className='w-10 h-10' />}
								stat='Mobile Ready'
								label='Perfect on All Devices'
							/>
						</div>
					</div>
				</section>

				{/* Templates Showcase */}
				<section id='templates' className='py-20 px-6 bg-white'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl lg:text-5xl font-black text-gray-900 mb-4'>
								5 High-Converting Templates{' '}
								<span className='text-orange-600'>Proven to Sell</span>
							</h2>
							<p className='text-xl text-gray-600'>
								Each template is designed to maximize conversions from your ads
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12'>
							{[
								{ name: 'The Minimalist', best: 'Digital Products' },
								{ name: 'Bold Impact', best: 'Physical Products' },
								{ name: 'Trust Builder', best: 'High-Ticket Items' },
								{ name: 'Urgency Master', best: 'Limited Offers' },
								{ name: 'Story Seller', best: 'Brand Products' },
							].map((template, idx) => (
								<TemplateShowcase
									key={idx}
									number={idx + 1}
									name={template.name}
									bestFor={template.best}
								/>
							))}
						</div>

						<div className='text-center'>
							<p className='text-gray-600 mb-6'>All templates include:</p>
							<div className='flex flex-wrap justify-center gap-4 mb-8'>
								<Feature text='Hero section with product image' />
								<Feature text='Compelling product description' />
								<Feature text='Clear pricing display' />
								<Feature text='Strong call-to-action button' />
								<Feature text='WhatsApp order integration' />
								<Feature text='Mobile responsive design' />
							</div>
							<button onClick={() => router.push('/onboarding')} className='px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition'>
								See All Templates in Action →
							</button>
						</div>
					</div>
				</section>

				{/* Social Proof */}
				<section className='py-20 px-6 bg-gray-50'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl lg:text-5xl font-black text-gray-900 mb-4'>
								Real Results from{' '}
								<span className='text-orange-600'>Real Marketers</span>
							</h2>
						</div>

						<div className='grid md:grid-cols-3 gap-8'>
							<TestimonialCard
								quote='I was spending ₦30k on Facebook ads with ZERO sales. Switched to AdPagePro and got my first 5 sales in 2 days!'
								name='Tunde Bakare'
								role='Fashion Marketer'
								result='+₦150,000 in first week'
							/>
							<TestimonialCard
								quote='My conversion rate went from 0.8% to 3.2%. This platform literally 4X my sales from the same ad budget.'
								name='Blessing Okoro'
								role='Beauty Product Seller'
								result='4X Conversion Rate'
							/>
							<TestimonialCard
								quote='I launched my product page in 10 minutes. Started running ads immediately. Made back my subscription fee in 2 hours!'
								name='Emeka Obi'
								role='Digital Marketer'
								result='ROI in 2 hours'
							/>
						</div>
					</div>
				</section>

				{/* Pricing CTA */}
				<section className='py-20 px-6 bg-white'>
					<div className='max-w-4xl mx-auto'>
						<div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden'>
							<div className='absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20'></div>

							<div className='relative z-10'>
								<div className='text-center mb-12'>
									<div className='inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6'>
										LAUNCH OFFER - LIMITED TIME
									</div>
									<h2 className='text-4xl lg:text-5xl font-black mb-4'>
										Start Selling Today for Only
									</h2>
									<div className='flex items-center justify-center gap-4 mb-6'>
										<span className='text-6xl font-black'>₦5,000</span>
										<span className='text-2xl text-gray-400'>/month</span>
									</div>
									<p className='text-xl text-gray-300 mb-8'>
										That&apos;s less than the cost of ONE Facebook ad campaign
									</p>
								</div>

								<div className='grid md:grid-cols-2 gap-4 mb-10'>
									<PricingFeature text='All 5 high-converting templates' />
									<PricingFeature text='Unlimited product pages' />
									<PricingFeature text='Custom branding & colors' />
									<PricingFeature text='Image uploads (5 per page)' />
									<PricingFeature text='Instant publishing' />
									<PricingFeature text='Mobile-optimized pages' />
									<PricingFeature text='WhatsApp integration' />
									<PricingFeature text='24/7 support' />
								</div>

								<div className='text-center'>
									<button onClick={() => router.push('/onboarding')} className='w-full md:w-auto px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-black text-xl hover:shadow-2xl hover:scale-105 transition mb-4'>
										Get Started Now - ₦5,000/Month →
									</button>
									<p className='text-sm text-gray-400'>
										💳 Pay with Paystack or Bank Transfer • Cancel Anytime •
										30-Day Money-Back Guarantee
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className='py-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white'>
					<div className='max-w-4xl mx-auto text-center'>
						<h2 className='text-3xl lg:text-4xl font-black mb-6'>
							Stop Losing Sales. Start Converting Today.
						</h2>
						<p className='text-xl mb-8 text-orange-100'>
							Every day you wait is money left on the table. Join 100+ marketers
							already crushing it.
						</p>
						<button onClick={() => router.push('/onboarding')} className='px-12 py-6 bg-white text-orange-600 rounded-xl font-black text-lg hover:shadow-2xl hover:scale-105 transition'>
							Yes! I Want to Sell More →
						</button>
					</div>
				</section>

				{/* Footer */}
				<footer className='py-12 px-6 bg-gray-900 text-white'>
					<div className='max-w-7xl mx-auto text-center'>
						<div className='flex items-center justify-center gap-2 mb-6'>
							<div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center'>
								<Rocket className='w-6 h-6 text-white' />
							</div>
							<span className='text-2xl font-bold'>
								<span className='text-orange-600'>Sellora</span>
							</span>
						</div>
						<p className='text-gray-400 mb-6'>
							Sell faster with professional product landing pages
						</p>
						<div className='flex justify-center gap-8 text-sm text-gray-400'>
							<a href='#' className='hover:text-white'>
								Privacy Policy
							</a>
							<a href='#' className='hover:text-white'>
								Terms of Service
							</a>
							<a href='#' className='hover:text-white'>
								Contact Support
							</a>
						</div>
						<p className='text-gray-600 text-sm mt-6'>
							&copy; 2025 Sellora. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

const ProblemCard: React.FC<ProblemCardProps> = ({
	icon,
	title,
	description,
}) => (
	<div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200 hover:border-red-400 transition'>
		<div className='w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6'>
			{icon}
		</div>
		<h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
		<p className='text-gray-600 leading-relaxed'>{description}</p>
	</div>
);

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
	<div className='relative'>
		<div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition h-full'>
			<div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg'>
				{number}
			</div>
			<h3 className='text-xl font-bold text-gray-900 mb-3 mt-4'>{title}</h3>
			<p className='text-gray-600 leading-relaxed'>{description}</p>
		</div>
	</div>
);

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, stat, label }) => (
	<div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20'>
		<div className='flex justify-center mb-4'>{icon}</div>
		<div className='text-4xl font-black mb-2'>{stat}</div>
		<div className='text-orange-100 font-medium'>{label}</div>
	</div>
);

const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({
	number,
	name,
	bestFor,
}) => (
	<div className='bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-orange-500 transition overflow-hidden group cursor-pointer'>
		<div className='aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative'>
			<div className='absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/20 group-hover:to-red-600/20 transition'></div>
			<span className='text-6xl font-black text-gray-300 group-hover:text-orange-600 transition'>
				T{number}
			</span>
		</div>
		<div className='p-4 bg-white'>
			<h4 className='font-bold text-gray-900 mb-1'>{name}</h4>
			<p className='text-sm text-orange-600 font-medium'>Best for: {bestFor}</p>
		</div>
	</div>
);

const Feature: React.FC<FeatureProps> = ({ text }) => (
	<div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
		<CheckCircle2 className='w-4 h-4 text-green-600' />
		<span className='text-sm text-gray-700 font-medium'>{text}</span>
	</div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	quote,
	name,
	role,
	result,
}) => (
	<div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200'>
		<div className='mb-6'>
			<div className='flex gap-1 mb-4'>
				{[...Array(5)].map((_, i) => (
					<div key={i} className='w-5 h-5 bg-yellow-400 rounded-full'></div>
				))}
			</div>
			<p className='text-gray-700 leading-relaxed mb-4 italic'>
				&quot;{quote}&quot;
			</p>

			<div className='inline-block bg-green-50 border border-green-600 rounded-lg px-4 py-2'>
				<p className='text-green-800 font-bold text-sm'>{result}</p>
			</div>
		</div>
		<div>
			<p className='font-bold text-gray-900'>{name}</p>
			<p className='text-sm text-gray-600'>{role}</p>
		</div>
	</div>
);

const PricingFeature: React.FC<PricingFeatureProps> = ({ text }) => (
	<div className='flex items-center gap-3'>
		<CheckCircle2 className='w-5 h-5 text-green-400 flex-shrink-0' />
		<span className='text-gray-300'>{text}</span>
	</div>
);
