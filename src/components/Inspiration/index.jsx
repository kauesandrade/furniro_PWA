const inspiration = () =>{

    return(
        <div className="flex flex-row mt-40 bg-cor3 gap-14 justify-end py-11">
            <div className="flex flex-col justify-center">
                <h1 className="font-poppins font-bold text-5xl">50+ Beautiful rooms </h1>
                <h1 className="font-poppins font-bold text-5xl pb-1.5">inspiration</h1>
                <p className="font-poppins font-medium text-lg">Our designer already made a lot of beautiful </p>
                <p className="font-poppins font-medium text-lg pb-8">prototipe of rooms that inspire you</p>
                <div>
                    <button className="font-poppins font-semibold text-white bg-borCor1 py-4 px-16">Explore More</button>
                </div>
            </div>
            <div>
                <img className="h-720" src="/imagens/imgInspiration.png"/>
            </div>
        </div>
    )
}

export default inspiration;