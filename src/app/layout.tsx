import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Urbanist } from 'next/font/google';

import Navbar from './components/Navbar/Navbar';

const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
});

export const metadata: Metadata = {
	title: 'Sellora | Sell Easy',
	description: 'Sales made easy',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${urbanist.variable} font-sans`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
