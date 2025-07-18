'use client'
import { GlobeIcon, YouTubeIcon, GitHubIcon } from '@/services/iconos.jsx'

export default function LinkBar() {
	return (
		<section className='linkbar-box'>
			<a
				href='/'
				className='linkbar-card linkbar-items-1 '
			>
				<GlobeIcon />
				<h3 className='text-xs'>SOURCE</h3>
			</a>
			<a
				href='/'
				className='linkbar-card linkbar-items-2'
			>
				<GitHubIcon />
				<h3 className='text-xs'>REPO</h3>
			</a>
			<a
				href='/'
				className='linkbar-card linkbar-items-3'
			>
				<YouTubeIcon />
				<h3 className='text-xs'>VIDEO</h3>
			</a>
		</section>
	)
}
