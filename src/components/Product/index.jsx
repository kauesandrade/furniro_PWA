import Cards from "../Cards";

const Product = () => {

    return (
        <>
            <div className="mt-16 flex flex-col">
            <h3 className="font-poppins font-bold text-4xl text-center">Our Produts</h3>
                <div className="flex flex-row space-x-10 justify-center mt-10">
                    <Cards src='/imagens/card1.png' titulo='Syltherine' descricao='Stylish cafe chair' preco='Rp 2.500.000' />
                    <Cards src='/imagens/card2.png' titulo='Leviosa' descricao='Stylish cafe chair' preco='Rp 2.500.000' />
                    <Cards src='/imagens/card3.png' titulo='Lolito' descricao='Luxury big sofa' preco='Rp 7.000.000' />
                    <Cards src='/imagens/card4.png' titulo='Respira' descricao='Outdoor bar table and stool' preco='Rp 500.000' />
                </div>
                <div className="flex flex-row space-x-10 justify-center mt-10">
                    <Cards src='/imagens/card5.png' titulo='Grifo' descricao='Night lamp' preco='Rp 1.500.000' />
                    <Cards src='/imagens/card6.png' titulo='Muggo' descricao='Small mug' preco='Rp 150.000' />
                    <Cards src='/imagens/card7.png' titulo='Pingky' descricao='Cute bed set' preco='Rp 7.000.000' />
                    <Cards src='/imagens/card8.png' titulo='Potty' descricao='Minimalist flower pot' preco='Rp 500.000' />
                </div>
                <div className="flex justify-center mt-10">
                    <button className=" font-poppins font-semibold py-3 px-20 border-solid border-borCor1 text-borCor1 border-4">Show More</button>
                </div>
            </div>
        </>
    )
}

export default Product;