import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus consequatur qui nobis facere, itaque expedita vitae, vero mollitia eos culpa sint aut illo corrupti autem similique totam dignissimos et?'
			},
			{
				icon: <FaHiking />,
				title: 'Endless Hiking',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus consequatur qui nobis facere, itaque expedita vitae, vero mollitia eos culpa sint aut illo corrupti autem similique totam dignissimos et?'
			},
			{
				icon: <FaShuttleVan />,
				title: 'free shuttle',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus consequatur qui nobis facere, itaque expedita vitae, vero mollitia eos culpa sint aut illo corrupti autem similique totam dignissimos et?'
			},
			{
				icon: <FaBeer />,
				title: 'strongest beer',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus consequatur qui nobis facere, itaque expedita vitae, vero mollitia eos culpa sint aut illo corrupti autem similique totam dignissimos et?'
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
