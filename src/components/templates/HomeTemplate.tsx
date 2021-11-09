import React from 'react'
import './style.scss'

const HomeTemplate: React.FC = (props) => {
	return (
		<div className='flex flex-col  items-center select-none min-h-screen'>
			<h1 className='text-6xl text-green-500 border-b-4 pb-4'>Plotter</h1>
			 {props.children}
		</div>
	)
}

export default HomeTemplate
