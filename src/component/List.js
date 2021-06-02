import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function List({ text, onBtnClick, id }) {
	return (
		<>
			<ul>
				<li>ㅎㅎㅎㅎ</li>
				<li>
					<Link to={`/${id}`}>{text}</Link>
				</li>
				<button onClick={onBtnClick}>지우기</button>
			</ul>
		</>
	);
}

export default connect();
