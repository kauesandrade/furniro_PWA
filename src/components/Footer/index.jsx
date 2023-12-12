const footer = () => {
    return (
        <div className="py-14">
            <div className="flex justify-between border-solid border-b-2 border-borCor3 pb-14 mx-24">
                <div>
                    <h3 className="font-poppins font-bold text-2xl pb-12">Funiro.</h3>
                    <p className="font-poppins font-normal text-base text-txCor3">400 University Drive Suite 200 Coral Gables,</p>
                    <p className="font-poppins font-normal text-base text-txCor3">FL 33134 USA</p>
                </div>

                <div className="flex flex-col justify-between gap-12">
                    <h5 className="font-poppins font-medium text-base text-txCor3">Links</h5>
                    <h5 className="font-poppins font-medium text-base">Home</h5>
                    <h5 className="font-poppins font-medium text-base">Shop</h5>
                    <h5 className="font-poppins font-medium text-base">About</h5>
                    <h5 className="font-poppins font-medium text-base">Contact</h5>
                </div>

                <div className="flex flex-col gap-12">
                    <h5 className="font-poppins font-medium text-base text-txCor3">Help</h5>
                    <h5 className="font-poppins font-medium text-base">Payment Options</h5>
                    <h5 className="font-poppins font-medium text-base">Returns</h5>
                    <h5 className="font-poppins font-medium text-base">Privacy Policies</h5>
                </div>

                <div className="flex flex-col gap-12">
                    <h5 className="font-poppins font-medium text-base text-txCor3">Newsletter</h5>
                    <div className="flex gap-4">
                        <input className="border-solid border-b-2 border-black pr-4" type="text" placeholder="Enter Your Email Address" />
                        <button className="font-poppins font-medium text-sm border-solid border-b-2 border-black">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="flex mx-24 mt-12">
                <h5 className="font-poppins font-normal text-base">2023 furino. All rights reverved</h5>
            </div>


        </div>
    )
}
export default footer;