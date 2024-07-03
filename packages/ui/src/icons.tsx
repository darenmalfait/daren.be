import {
	AlertTriangle,
	ArrowUpDown,
	Bold,
	Bug,
	Camera,
	Check,
	CheckCircle2,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
	Circle,
	CircleDot,
	CircleOff,
	Code,
	Component,
	Copy,
	Edit,
	ExternalLink,
	Eye,
	FileDown,
	FileText,
	Filter,
	Flag,
	Globe,
	GripVertical,
	Heading1,
	Heading2,
	Heading3,
	Heart,
	HelpCircle,
	Home,
	Image,
	Info,
	Italic,
	Key,
	Lightbulb,
	Link2,
	List,
	Loader2,
	Lock,
	type LucideIcon,
	type LucideProps,
	MapPin,
	Menu,
	MessageCircle,
	MessageSquare,
	MoreHorizontal,
	MoreVertical,
	Pilcrow,
	Plus,
	Quote,
	RefreshCw,
	Rss,
	Search,
	Settings,
	Settings2,
	Share2,
	Strikethrough,
	Text,
	Trash,
	Underline,
	Unlink,
	Upload,
	User,
	X,
} from 'lucide-react'

import { ArrowIcon } from './components/arrow-icon'

export type Icon = LucideIcon

export const Icons = {
	Add: Plus,
	Arrow: ArrowIcon,
	ArrowUpDown,
	Blockquote: Quote,
	Bold,
	Bug,
	Camera,
	Chat: MessageSquare,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
	Circle,
	Close: X,
	Closed: CircleOff,
	Code,
	Completed: CheckCircle2,
	Config: Settings2,
	Copy,
	Domain: Component,
	Dots: MoreHorizontal,
	Download: FileDown,
	DragHandle: GripVertical,
	Edit,
	Ellipsis: MoreVertical,
	ExternalLink,
	Facebook: ({ ...props }: LucideProps) => (
		<svg
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
	),
	Feature: Lightbulb,
	Filter,
	Flag,
	Globe,
	H1: Heading1,
	H2: Heading2,
	H3: Heading3,
	Hamburger: Menu,
	Heart,
	Help: HelpCircle,
	Home,
	Info,
	Instagram: ({ ...props }: LucideProps) => (
		<svg
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
	),
	Issue: CircleDot,
	Italic,
	Key,
	Link: Link2,
	LinkedIn: ({ ...props }: LucideProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	),
	List,
	Lock,
	Logo: ({ ...props }: LucideProps) => (
		<svg
			{...props}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 723 236"
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
	),
	Media: Image,
	Message: MessageCircle,
	NoResults: ({ ...props }: LucideProps) => {
		return (
			<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
				/>
			</svg>
		)
	},
	Paragraph: Pilcrow,
	Pin: MapPin,
	Post: FileText,
	Preview: Eye,
	Private: Lock,
	Refresh: RefreshCw,
	Rss,
	Search,
	Settings,
	Share: Share2,
	Spinner: Loader2,
	Strikethrough,
	Text,
	Trash,
	Underline,
	Unlink,
	Upload,
	User,
	Warning: AlertTriangle,
	GitHub: ({ ...props }: LucideProps) => (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fab"
			data-icon="github"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 496 512"
			{...props}
		>
			<path
				fill="currentColor"
				d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			/>
		</svg>
	),
	Twitter: ({ ...props }: LucideProps) => {
		return (
			<svg
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1668.56 1221.19"
				xmlSpace="preserve"
				{...props}
			>
				<path d="m336.33 142.251 386.39 516.64-388.83 420.05h87.51l340.42-367.76 275.05 367.76h297.8l-408.13-545.7 361.92-390.99h-87.51l-313.51 338.7-253.31-338.7h-297.8zm128.69 64.46h136.81l604.13 807.76h-136.81l-604.13-807.76z" />
			</svg>
		)
	},
	Check,
}
