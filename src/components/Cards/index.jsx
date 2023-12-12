const cards = (props) =>{

    return(
            <div className="border-solid border-white bg-colorCard text-start" >
                <img src={props.src} />
                <div className="ml-5">
                    <h3 className="pt-6 font-poppins font-bold text-2xl">{props.titulo}</h3>
                    <p className="pt-1.5 font-poppins font-semibold text-base text-txCor1">{props.descricao}</p>
                    <h4 className="pt-1.5 font-poppins pb-6 font-semibold text-2xl">{props.preco}</h4>
                </div>

            </div>
    )
}

export default cards;