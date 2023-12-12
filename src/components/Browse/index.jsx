const Browse = () =>{
    
    return(
        <>
            <div className="mt-20">
                <h1 className="font-poppins font-bold text-3xl text-center">Browse The Range</h1>
                <h4 className="font-poppins font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>

            <div className="mt-20 flex flex-row gap-x-5 justify-center">
                <div>
                    <img src="/imagens/Dining.png" alt="" />
                    <h3 className="font-poppins font-bold text-2xl text-center mt-7">Dining</h3>
                </div>
                <div>
                    <img src="/imagens/living.png" alt="" />
                    <h3 className="font-poppins font-bold text-2xl text-center mt-7">Living</h3>
                </div>
                <div>
                    <img src="/imagens/bedroom.png" alt="" />
                    <h3 className="font-poppins font-bold text-2xl text-center mt-7">Bedroom</h3>
                </div>
            </div>  
        </>

    )

}

export default Browse;