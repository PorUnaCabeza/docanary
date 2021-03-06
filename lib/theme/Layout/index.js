import React from 'react';
import Navbar from '@theme/Navbar';
import BackToTop from '@theme/BackToTop';
import Footer from '@theme/Footer';
import '../style/theme.styl'; // import theme css
import './index.styl';

function Layout(props) {
	return (
		<>
			<Navbar />
			<div className='layout'>{props.children}</div>
			<Footer />
			<BackToTop />
		</>
	);
}

export default Layout;
