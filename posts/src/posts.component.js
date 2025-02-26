import React, { useState } from 'react';
import './posts.css';

const articles = [
	{ id: 1, title: 'Article A', summary: 'Summary of Article A', content: 'Full content of Article A' },
	{ id: 2, title: 'Article B', summary: 'Summary of Article B', content: 'Full content of Article B' },
	{ id: 3, title: 'Article C', summary: 'Summary of Article C', content: 'Full content of Article C' },
	{ id: 4, title: 'Article D', summary: 'Summary of Article D', content: 'Full content of Article D' },
	{ id: 5, title: 'Article E', summary: 'Summary of Article E', content: 'Full content of Article E' },
	{ id: 6, title: 'Article F', summary: 'Summary of Article F', content: 'Full content of Article F' },
];

const getArticleImage = (name) => {
	const formattedName = name.replace(' ', '+');
	return `https://placehold.co/400x400/D8E1EA/375064?text=${formattedName}&font=Lato`;
};

const ArticleList = ({ onSelect }) => (
	<div className='article-list'>
		{articles.map((article) => (
			<div key={article.id} className='article' onClick={() => onSelect(article)}>
				<img src={getArticleImage(article.title)} alt={article.title} />
				<h3>{article.title}</h3>
				<p>{article.summary}</p>
			</div>
		))}
	</div>
);

const ArticleDetails = ({ article }) => (
	<div className='article-details'>
		<h2>{article.title}</h2>
		<p>{article.content}</p>
	</div>
);

const Posts = () => {
	const [selectedArticle, setSelectedArticle] = useState(null);

	return (
		<div className='page'>
			{selectedArticle ? <ArticleDetails article={selectedArticle} /> : <ArticleList onSelect={setSelectedArticle} />}
		</div>
	);
};

export default Posts;
