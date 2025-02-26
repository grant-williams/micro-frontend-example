import React from 'react';
import './home.css';

const TrendingProducts = () => (
	<div className='widget'>
		<h2>Trending Products</h2>
		<ol>
			<li>Product A - 100 sales</li>
			<li>Product B - 80 sales</li>
			<li>Product C - 60 sales</li>
		</ol>
	</div>
);

const OrderConfirmations = () => (
	<div className='widget'>
		<h2>Order Confirmations</h2>
		<ul>
			<li>Order #1234 - 2x Product A</li>
			<li>Order #1235 - 1x Product B</li>
			<li>Order #1236 - 3x Product C</li>
		</ul>
	</div>
);

const TrendingArticles = () => (
	<div className='widget'>
		<h2>Trending Articles</h2>
		<ol>
			<li>Article A - 500 impressions</li>
			<li>Article B - 400 impressions</li>
			<li>Article C - 300 impressions</li>
		</ol>
	</div>
);

const Analytics = () => (
	<div className='widget'>
		<h2>Analytics</h2>
		<p>Visits: 1234</p>
		<p>Sign-ups: 56</p>
		<p>Conversions: 12%</p>
	</div>
);

const Home = () => (
	<div className='home'>
		<TrendingProducts />
		<OrderConfirmations />
		<TrendingArticles />
		<Analytics />
	</div>
);

export default Home;
