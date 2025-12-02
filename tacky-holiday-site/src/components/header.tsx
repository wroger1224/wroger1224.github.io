import React from 'react'
import styles from './header.module.css'
// Optionally: import styles from './header.module.css'

/**
 * Standard, reusable React component template in TypeScript (TSX).
 * - Use this as a starting point for other components.
 * - Defines Props with an interface, uses default parameters for defaults,
 *   and exposes an optional callback.
 */
export interface HeaderProps {
	/** Main title text to show in the header */
	title?: string
	/** Optional subtitle text */
	subtitle?: string
	/** Additional CSS class(es) to merge onto the component's root */
	className?: string
	/** Optional action handler — e.g., a button click */
	onAction?: () => void
	/** Show decorative lights or other decorations */
	showLights?: boolean
}

/**
 * Header component with sensible defaults and TypeScript types.
 * Keep this file as a template to copy & adapt for other components.
 */
export const Header: React.FC<HeaderProps> = ({
	title = 'My App',
	subtitle = '',
	className = '',
	onAction,
	showLights = false,
}) => {
	// Local helper or callbacks go here
	const handleClick = () => {
		if (onAction) onAction()
	}

	return (
		<header className={`${styles.appHeader} ${className}`.trim()} role="banner">
			{showLights && <div className={styles.headerLights}>✨🎄✨</div>}
			<div className={styles.headerContent}>
				<h1 className={styles.headerTitle}>{title}</h1>
				{subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
			</div>
			<div className={styles.headerActions}>
				<button className={styles.headerAction} onClick={handleClick} aria-label="Header action">
					Action
				</button>
			</div>
		</header>
	)
}

export default Header

/* Usage example:
import Header from './components/header'

<Header
	title="Tacky Holiday"
	subtitle="All the glitter you can handle"
	showLights={true}
	onAction={() => console.log('Clicked')}
	className="custom-class"
 />

Notes:
- This component uses a CSS Module `header.module.css` and imports it as `styles`.
- Prefer CSS Modules for component scoping (unique, locally-scoped class names and no global namespace collisions).
*/
