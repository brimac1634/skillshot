import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasErrored: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true }
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<div className='w-full flex flex-col items-center py-48'>
					<span className='text-xl text-indigo-600'>Something has gone horribly wrong.</span>
					<span className='text-sm'>Please try refreshing</span>
				</div>
			)
		} 
		return this.props.children
	}
} 

export default ErrorBoundary;