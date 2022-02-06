import React from 'react';

import { ContentGridSection, Title, SubTitle, ContentText } from './styles';

import Modal from '@components/modal';

const Pokemon = ({ visible, handleCloseModal, data }) => {
	return (
		<Modal visible={visible} onCloseModal={handleCloseModal}>
			<Title>{data?.name}</Title>
			<ContentGridSection>
				<div>
					<img src={data?.sprites?.front_default} width={100} height={'100%'} />
				</div>
				<div>
					<img src={data?.sprites?.back_default} width={100} height={'100%'} />
				</div>
				<div>
					<img src={data?.sprites?.front_shiny} width={100} height={'100%'} />
				</div>
				<div>
					<img src={data?.sprites?.back_shiny} width={100} height={'100%'} />
				</div>
			</ContentGridSection>

			<SubTitle>Stats</SubTitle>
			<ContentGridSection>
				{data?.stats.map(({ stat, base_stat }) => {
					return (
						<ContentText key={stat.name}>
							{stat.name} ({base_stat})
						</ContentText>
					);
				})}
			</ContentGridSection>

			<SubTitle>Abilities</SubTitle>
			<ContentGridSection>
				{data?.abilities.map(({ ability }) => {
					return <ContentText key={ability.name}>{ability.name}</ContentText>;
				})}
			</ContentGridSection>

			<SubTitle>Top Moves</SubTitle>
			<ContentGridSection>
				{data?.moves.slice(0, 8).map(({ move }) => {
					return <ContentText key={move.name}>{move.name}</ContentText>;
				})}
			</ContentGridSection>
		</Modal>
	);
};

export default Pokemon;
