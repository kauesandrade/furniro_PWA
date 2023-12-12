import InformationCards from '../InformationCards'

const information = () => {
    return (
        <div className='flex justify-between bg-cor4 px-16 py-24'>
            <InformationCards src='/imagens/InfIcon1.png' titulo='High Quality' descricao='crafted from top materials' />
            <InformationCards src='/imagens/InfIcon2.png' titulo='Warranty Protection' descricao='Over 2 years' />
            <InformationCards src='/imagens/InfIcon3.png' titulo='Free Shipping' descricao='Order over 150 $' />
            <InformationCards src='/imagens/InfIcon4.png' titulo='24 / 7 Support' descricao='Dedicated support' />
        </div>
    )
}

export default information;