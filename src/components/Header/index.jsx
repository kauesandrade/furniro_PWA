const Header = () =>{
    return(
        <header className='flex flex-row justify-around items-center py-8'>
            <div>
                <img className='w-36' src="./imagens/logo.png" alt="Logo" />
            </div>
            <div className="flex gap-20">
                    <a  className="font-poppins font-medium text-base" href="index.jsx">Home</a>
                    <a  className="font-poppins font-medium text-base" href="index.jsx">Shop</a>
                    <a  className="font-poppins font-medium text-base" href="index.jsx">About</a>
                    <a  className="font-poppins font-medium text-base" href="index.jsx">Contact</a>
            </div>
            <div className='flex gap-8'>
                <a   href="index.jsx"><img src="./imagens/perfilIcon.png" alt="Logo"/></a>
                <a   href="index.jsx"><img src="./imagens/pesquisarIcon.png" alt="Logo"/></a>
                <a   href="index.jsx"><img src="./imagens/coracaoIcon.png" alt="Logo"/></a>
                <a   href="index.jsx"><img src="./imagens/carrinhoIcon.png" alt="Logo"/></a>
            </div>
        </header>
    )
}

export default Header