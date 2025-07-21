import React from 'react'
import "./Publications.css"; 
import { bookChapter, conference , journals } from "./data";

const Publications = () => {
  return (
		<div className='publication'>
			<h2>Publications</h2>
			<p>
				You can also find my articles on{" "}
				<a
					href='https://scholar.google.com/citations?hl=en&user=5fyMOVoAAAAJ'
					target='_blank'
					rel='noreferrer'>
					my Google Scholar profile
				</a>
				.
			</p>

<h3>Journal Articles</h3>
			<hr />

			{journals.map((pub, i) => (
				<div key={i} className='pub-entry'>
					<h4>
						<a href={pub.paperLink ? pub.paperLink : ""}>{pub.title}</a>
					</h4>
					<p>
						Published in <em>{pub.publisher}</em>, {pub.year}
					</p>
					<p>{pub.abstract}</p>
					<p className=''>
						<strong>Recommended citation:</strong> {pub.citation}
					</p>
				</div>
			))}

			<h3>Conference Articles</h3>
			<hr />

			{conference.map((pub, i) => (
				<div key={i} className='pub-entry'>
					<h4>
						<a href={pub.paperLink ? pub.paperLink : ""}>{pub.title}</a>
					</h4>
					<p>
						Published in <em>{pub.publisher}</em>, {pub.year}
					</p>
					<p>{pub.abstract}</p>
					<p className=''>
						<strong>Recommended citation:</strong> {pub.citation}
					</p>
				</div>
			))}

			<h3>Book Chapter</h3>
			<hr />

			{bookChapter.map((pub, i) => (
				<div key={i} className='pub-entry'>
					<h4>
						<a href={pub.paperLink ? pub.paperLink : ""}>{pub.title}</a>
					</h4>
					<p>
						Published in <em>{pub.publisher}</em>, {pub.year}
					</p>
					<p>{pub.abstract}</p>
					<p className=''>
						<strong>Recommended citation:</strong> {pub.citation}
					</p>
				</div>
			))}
		</div>
	);
}

export default Publications