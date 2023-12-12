const banner = () =>{

    return(
        <div className='flex w-full h-720 bg-banner items-center justify-end'>
            <div className=" flex flex-col bg-cor2 mr-14 p-10">
                <div>
                    <h5 className="font-poppins font-semibold text-base">New Arrival</h5>
                    <h1 className="font-poppins font-bold text-6xl text-txCor2 pt-1">Discover Our</h1>
                    <h1 className="font-poppins font-bold text-6xl text-txCor2 pb-4">New Collection</h1>
                    <h5 className="font-poppins font-medium text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut </h5>
                    <h5 className="font-poppins font-medium text-lg pb-11">elit tellus, luctus nec ullamcorper mattis.</h5>
                </div>
                <div>
                <button className='bg-cor1 font-poppins font-bold text-white justify-center py-6 px-20' type="button">Buy Now</button>
                </div>
            </div>
        </div>
    )

}

export default banner;