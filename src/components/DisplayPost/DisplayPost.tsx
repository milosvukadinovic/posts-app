import React from 'react';
import { Button } from '../Button/Button';
import { DisplayPostInterface } from './DisplayPostInterface';

export const DisplayPost: React.FC<DisplayPostInterface> =
	({ post, toggleComments, children, handleRedirect, propsMessage }) => {
		const { title, body } = post
		console.log(`${propsMessage} DisplayPost`)
		return (<>
			<div className='content-header'>
				{title}
				<Button propsMessage={propsMessage} onClick={() => handleRedirect()} text={'View post'} />
			</div>
			<div className='content-body'>
				<p>{body}</p>
				<Button propsMessage={propsMessage} onClick={() => toggleComments()} text={'View comments'} />
				{children}
			</div>
		</>
		);
	}

export default DisplayPost;