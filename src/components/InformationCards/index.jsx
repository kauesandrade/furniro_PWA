const cardsInformation = (props) => {
    return (
        <>
            <div className="flex gap-2">
                <img className="w-14 h-14" src={props.src}/>
                <div>
                    <h1 className="font-poppins font-semibold text-2xl">{props.titulo}</h1>
                    <h4 className="font-poppins font-medium text-lx text-txCor1">{props.descricao}</h4>
                </div>

            </div>
        </>
    )
}

export default cardsInformation;    