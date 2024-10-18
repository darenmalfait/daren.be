import { cx } from '@nerdfish/utils'
import { Loader2, type LucideProps } from 'lucide-react'
import * as React from 'react'
export * from 'lucide-react'
export * from './components/arrow-icon'

export const Logo = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			ref={ref}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 723 236"
			{...props}
		>
			<mask
				id="a"
				style={{ maskType: 'alpha' }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="723"
				height="236"
			>
				<path
					d="M56.263 107.261c-2.108 1.054-4.392 1.976-6.852 2.767a128.204 128.204 0 0 1-7.51 2.24c5.27 1.23 10.058 2.899 14.362 5.007l43.087 22.533c2.284 1.054 3.865 2.372 4.743 3.953.967 1.581 1.45 3.338 1.45 5.271v25.563L0 119.384v-14.363l105.543-55.08v25.563a9.67 9.67 0 0 1-1.45 5.14c-.878 1.58-2.459 2.898-4.743 3.952l-43.087 22.665ZM148.255 51.654c0-5.447 1.01-10.542 3.03-15.286 2.109-4.831 4.92-9.004 8.433-12.518 3.602-3.601 7.818-6.412 12.65-8.433 4.831-2.02 10.014-3.03 15.548-3.03 5.534 0 10.716 1.01 15.548 3.03 4.919 2.02 9.135 4.832 12.649 8.433 3.602 3.514 6.413 7.687 8.433 12.518 2.108 4.744 3.162 9.84 3.162 15.286s-1.054 10.541-3.162 15.285c-2.02 4.744-4.831 8.917-8.433 12.518-3.514 3.514-7.73 6.325-12.649 8.434-4.832 2.02-10.014 3.03-15.548 3.03-5.534 0-10.717-1.01-15.548-3.03-4.832-2.109-9.048-4.92-12.65-8.434-3.513-3.601-6.324-7.774-8.433-12.518-2.02-4.744-3.03-9.839-3.03-15.285Zm9.487 0c0 4.216.79 8.17 2.372 11.86 1.581 3.689 3.689 6.895 6.324 9.618 2.723 2.724 5.93 4.876 9.619 6.457 3.689 1.581 7.642 2.372 11.859 2.372 4.216 0 8.169-.79 11.858-2.372 3.69-1.581 6.896-3.733 9.619-6.457 2.723-2.723 4.875-5.93 6.457-9.619 1.581-3.69 2.371-7.642 2.371-11.86 0-4.216-.79-8.169-2.371-11.858-1.582-3.69-3.734-6.896-6.457-9.62-2.723-2.81-5.929-5.007-9.619-6.588-3.689-1.581-7.642-2.372-11.858-2.372-4.217 0-8.17.79-11.859 2.372-3.689 1.581-6.896 3.777-9.619 6.588-2.635 2.724-4.743 5.93-6.324 9.62-1.582 3.69-2.372 7.642-2.372 11.859ZM284.785 118.066c0-19.766-2.68-38.653-8.038-56.661-5.27-18.097-13.176-35.534-23.717-52.313-.879-1.493-1.142-2.68-.791-3.558.439-.966 1.01-1.669 1.713-2.108L259.486 0c6.764 10.366 12.43 20.424 16.998 30.175 4.655 9.663 8.389 19.327 11.2 28.99a175.821 175.821 0 0 1 6.192 28.99c1.318 9.662 1.977 19.633 1.977 29.911 0 10.278-.659 20.249-1.977 29.912-1.229 9.663-3.294 19.326-6.192 28.989-2.811 9.575-6.545 19.195-11.2 28.858-4.568 9.751-10.234 19.809-16.998 30.175l-5.534-3.426c-.703-.439-1.274-1.142-1.713-2.108-.351-.879-.088-2.065.791-3.558 10.541-16.779 18.447-34.172 23.717-52.181 5.358-18.096 8.038-36.983 8.038-56.661ZM352.725 118.066c0-19.766-2.679-38.653-8.037-56.661-5.271-18.097-13.177-35.534-23.718-52.313-.878-1.493-1.142-2.68-.79-3.558.439-.966 1.01-1.669 1.713-2.108L327.427 0c6.764 10.366 12.429 20.424 16.997 30.175 4.656 9.663 8.389 19.327 11.2 28.99a175.824 175.824 0 0 1 6.193 28.99c1.318 9.662 1.977 19.633 1.977 29.911 0 10.278-.659 20.249-1.977 29.912-1.23 9.663-3.294 19.326-6.193 28.989-2.811 9.575-6.544 19.195-11.2 28.858-4.568 9.751-10.233 19.809-16.997 30.175l-5.534-3.426c-.703-.439-1.274-1.142-1.713-2.108-.352-.879-.088-2.065.79-3.558 10.541-16.779 18.447-34.172 23.718-52.181 5.358-18.096 8.037-36.983 8.037-56.661ZM420.007 200.554c-1.669 4.392-4.348 7.686-8.037 9.883-3.602 2.284-7.291 3.426-11.069 3.426h-15.416L461.513 17.13c1.493-3.953 3.865-7.028 7.115-9.224 3.25-2.196 6.984-3.294 11.2-3.294h15.548l-75.369 195.942ZM636.015 105.021v14.363l-105.542 55.211v-25.563c0-1.933.439-3.69 1.317-5.271.967-1.581 2.592-2.899 4.876-3.953l43.086-22.533a58.816 58.816 0 0 1 6.852-2.767 60.236 60.236 0 0 1 7.642-2.24 79.932 79.932 0 0 1-7.642-2.108 80.348 80.348 0 0 1-6.852-2.899l-43.086-22.665c-2.284-1.054-3.909-2.371-4.876-3.953a10.414 10.414 0 0 1-1.317-5.139V49.941l105.542 55.08ZM715.358 9.751c-3.777 0-7.247.659-10.41 1.976a23.473 23.473 0 0 0-8.037 5.667c-2.196 2.46-3.953 5.446-5.271 8.96-1.229 3.514-1.844 7.423-1.844 11.727 0 5.008.395 9.883 1.185 14.627a362.628 362.628 0 0 0 2.636 14.1c.966 4.567 1.844 9.18 2.635 13.835a80.941 80.941 0 0 1 1.186 13.836c0 3.25-.571 6.237-1.713 8.96-1.054 2.724-2.504 5.096-4.348 7.116a25.11 25.11 0 0 1-6.193 5.139 24.242 24.242 0 0 1-7.247 2.767 24.9 24.9 0 0 1 7.247 3.031 22.845 22.845 0 0 1 6.193 5.007c1.844 2.021 3.294 4.392 4.348 7.116 1.142 2.723 1.713 5.71 1.713 8.96 0 4.656-.395 9.312-1.186 13.968a425.405 425.405 0 0 1-2.635 13.836 362.185 362.185 0 0 0-2.636 14.099 88.088 88.088 0 0 0-1.185 14.495c0 4.304.615 8.213 1.844 11.727 1.318 3.514 3.075 6.501 5.271 8.961a23.487 23.487 0 0 0 8.037 5.666c3.163 1.317 6.633 1.976 10.41 1.976h4.348c.791 0 1.537.264 2.24.791.703.527 1.054 1.274 1.054 2.24v5.534h-7.247c-5.798 0-11.024-.966-15.68-2.899-4.568-1.845-8.433-4.48-11.595-7.906-3.162-3.338-5.578-7.291-7.247-11.859-1.669-4.568-2.504-9.532-2.504-14.89 0-4.92.396-9.663 1.186-14.231a647.034 647.034 0 0 1 2.767-13.836 375.634 375.634 0 0 0 2.636-13.704c.878-4.568 1.317-9.268 1.317-14.1 0-2.899-.483-5.534-1.449-7.906-.966-2.46-2.372-4.568-4.217-6.325-1.756-1.845-3.909-3.25-6.456-4.216-2.46-.967-5.227-1.45-8.301-1.45v-8.038c3.074 0 5.841-.483 8.301-1.449 2.547-.967 4.7-2.328 6.456-4.085a19.009 19.009 0 0 0 4.217-6.325c.966-2.46 1.449-5.14 1.449-8.038 0-4.832-.439-9.532-1.317-14.1a375.634 375.634 0 0 0-2.636-13.704 764.19 764.19 0 0 1-2.767-13.704 85.72 85.72 0 0 1-1.186-14.363c0-5.358.835-10.322 2.504-14.89 1.669-4.568 4.085-8.52 7.247-11.859 3.162-3.426 7.027-6.061 11.595-7.906 4.656-1.933 9.882-2.9 15.68-2.9H723V6.72c0 .967-.351 1.713-1.054 2.24-.703.527-1.449.791-2.24.791h-4.348Z"
					fill="#E85100"
				/>
			</mask>
			<g mask="url(#a)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M-47.976-21.413 702.06 110.839c-8.419 34.055-21.711 67.512-40.13 99.416-25.036 43.363-57.293 79.956-94.375 109.136L7.032 220.556C-37.463 148.577-57.066 63.19-47.976-21.414Z"
					fill="url(#b)"
					style={{ mixBlendMode: 'darken' }}
				/>
				<path
					d="M5.67-39.181C165.087-153.956 453.858-171.678 650.66-78.763c196.802 92.915 227.109 261.281 67.694 376.056C558.938 412.068 270.167 429.79 73.365 336.875-123.437 243.96-153.745 75.594 5.67-39.181Z"
					fill="#E85100"
				/>
				<path
					d="M5.67-39.181C165.087-153.956 453.858-171.678 650.66-78.763c196.802 92.915 227.109 261.281 67.694 376.056C558.938 412.068 270.167 429.79 73.365 336.875-123.437 243.96-153.745 75.594 5.67-39.181Z"
					fill="#FF9546"
				/>
				<path
					opacity=".422"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M113.98 354.022c.752.283 1.504.564 2.258.843l704.236-232.187c-.021-.521-.045-1.042-.072-1.564L113.98 354.022Z"
					fill="#fff"
					fillOpacity=".91"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M-81.456 60.796 717.27 298.07C557.632 412.148 269.722 429.579 73.365 336.875-71.362 268.546-126.048 159.413-81.455 60.796Z"
					fill="url(#c)"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m65.667-75.008 168.018 460.857c-56.854-9.635-111.426-25.89-160.32-48.974C-123.437 243.96-153.745 75.594 5.67-39.181c18.391-13.241 38.503-25.19 59.997-35.827Z"
					fill="url(#d)"
					fillOpacity=".5"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M187.736-118.288c150.015-35.864 328.063-24.146 462.923 39.525 121.504 57.365 179.545 143.49 168.656 228.007L187.736-118.288Z"
					fill="url(#e)"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m-80.71 59.167 865.385 173.727c-16.395 22.644-38.461 44.34-66.322 64.399-37.867 27.264-83.034 49.051-132.533 65.18L-60.906 232.642c-39.282-54.687-46.497-115.924-19.804-173.475Z"
					fill="url(#f)"
					style={{ mixBlendMode: 'darken' }}
				/>
				<path
					opacity=".206"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M-31.622 266.47c.877.016 1.754.031 2.63.044l391.295-403.032c-.47-.432-.943-.864-1.417-1.294L-31.623 266.47Z"
					fill="#000"
				/>
				<path
					opacity=".034"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M363.197 374.428c231.705 0 419.539-109.546 419.539-244.676 0-135.131-187.834-244.676-419.539-244.676-231.705 0-419.54 109.545-419.54 244.676 0 135.13 187.835 244.676 419.54 244.676Zm1.058-49.124c184.601 0 334.249-87.276 334.249-194.935 0-107.66-149.648-194.935-334.249-194.935-184.602 0-334.25 87.275-334.25 194.935 0 107.659 149.648 194.935 334.25 194.935Z"
					fill="#fff"
				/>
			</g>
			<defs>
				<linearGradient
					id="b"
					x1="869.684"
					y1="676.79"
					x2="973.721"
					y2="75.508"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity=".01" />
					<stop offset="1" stopOpacity=".113" />
				</linearGradient>
				<linearGradient
					id="c"
					x1="807.046"
					y1="509.206"
					x2="953.598"
					y2="36.757"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#788086" />
					<stop offset="1" stopOpacity=".01" />
				</linearGradient>
				<linearGradient
					id="d"
					x1="335.655"
					y1="345.845"
					x2="324.026"
					y2="93.412"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopOpacity=".01" />
					<stop offset="1" stopColor="#C92300" />
				</linearGradient>
				<linearGradient
					id="e"
					x1="1020.14"
					y1="244.75"
					x2="1091.13"
					y2="26.173"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity=".01" />
					<stop offset="1" stopColor="#F88F00" />
				</linearGradient>
				<linearGradient
					id="f"
					x1="877.238"
					y1="642.912"
					x2="963.564"
					y2="208.382"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity=".01" />
					<stop offset="1" stopOpacity=".113" />
				</linearGradient>
			</defs>
		</svg>
	)
})
Logo.displayName = 'Logo'

export const FacebookIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	)
})
FacebookIcon.displayName = 'FacebookIcon'

export const InstagramIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props}
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
		</svg>
	)
})
InstagramIcon.displayName = 'InstagramIcon'

export const LinkedInIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			ref={ref}
			{...props}
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	)
})
LinkedInIcon.displayName = 'LinkedInIcon'

export const NoResultsIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			ref={ref}
			viewBox="0 0 20 20"
			fill="none"
			aria-hidden="true"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
			/>
		</svg>
	)
})
NoResultsIcon.displayName = 'NoResultsIcon'

export const SpinnerIcon = React.forwardRef<SVGSVGElement, LucideProps>(
	({ className, ...props }, ref) => {
		return (
			<Loader2
				{...props}
				ref={ref}
				className={cx('size-4 animate-spin', className)}
			/>
		)
	},
)
SpinnerIcon.displayName = 'SpinnerIcon'

export const GithubIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 496 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			/>
		</svg>
	)
})
GithubIcon.displayName = 'GithubIcon'

export const TwitterIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			ref={ref}
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1668.56 1221.19"
			xmlSpace="preserve"
			{...props}
		>
			<path d="m336.33 142.251 386.39 516.64-388.83 420.05h87.51l340.42-367.76 275.05 367.76h297.8l-408.13-545.7 361.92-390.99h-87.51l-313.51 338.7-253.31-338.7h-297.8zm128.69 64.46h136.81l604.13 807.76h-136.81l-604.13-807.76z" />
		</svg>
	)
})
TwitterIcon.displayName = 'TwitterIcon'

export const JavascriptIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
		>
			<path d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z" />
		</svg>
	)
})

JavascriptIcon.displayName = 'JavascriptIcon'

export const TypescriptIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			{...props}
			ref={ref}
		>
			<path d="M45 4H5a1 1 0 0 0-1 1v40a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM29 26.445h-5V42h-4V26.445h-5V23h14v3.445zm1.121 14.667v-4.158s2.271 1.712 4.996 1.712c2.725 0 2.62-1.782 2.62-2.026 0-2.586-7.721-2.586-7.721-8.315 0-7.791 11.25-4.717 11.25-4.717l-.14 3.704s-1.887-1.258-4.018-1.258-2.9 1.013-2.9 2.096c0 2.795 7.791 2.516 7.791 8.141.001 8.664-11.878 4.821-11.878 4.821z" />
		</svg>
	)
})

TypescriptIcon.displayName = 'TypescriptIcon'

export const NodeIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
		>
			<path d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
		</svg>
	)
})

NodeIcon.displayName = 'NodeIcon'

export const ReactIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
		>
			<path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
		</svg>
	)
})

ReactIcon.displayName = 'ReactIcon'

export const SassIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
		>
			<path d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z" />
		</svg>
	)
})

SassIcon.displayName = 'SassIcon'

export const CSSIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
		>
			<path d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z" />
		</svg>
	)
})

CSSIcon.displayName = 'CSSIcon'

export const HTMLIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			ref={ref}
		>
			<path d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z" />
		</svg>
	)
})

HTMLIcon.displayName = 'HTMLIcon'

export const GitIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			ref={ref}
		>
			<path d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z" />
		</svg>
	)
})

GitIcon.displayName = 'GitIcon'

export const VSCodeIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			ref={ref}
		>
			<path d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z" />
		</svg>
	)
})

VSCodeIcon.displayName = 'VSCodeIcon'

export const FigmaIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 384 512"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			ref={ref}
		>
			<path d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z" />
		</svg>
	)
})

FigmaIcon.displayName = 'FigmaIcon'

export const NextJSIcon = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
	return (
		<svg
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			ref={ref}
		>
			<path d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325Zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5Z" />
		</svg>
	)
})

NextJSIcon.displayName = 'NextJSIcon'
