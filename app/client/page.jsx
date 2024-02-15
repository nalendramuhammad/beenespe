import Image from "next/image";

const client = () => {
    return(
        <div className="h-screen flex w-full justify-center items-center">
            <div className="content w-fit h-fit">
                <div className="  rounded-xl cards border-solid border-2 border-slate-300 px-10 py-10 flex flex-col items-center gap-2 ">
                <h2 className="text-center text-2xl xl:text-4xl  font-semibold">CLIENT</h2>
                <p className="text-center mt-7 leading-7 text-sm xl:text-base  max-w-3xl mx-auto px-5">
                  From the ULTIMATE E to the ROCKET 900 – each BRABUS supercar is the result of a perfect interplay: consummate technology, sophisticated art of engineering and custom craftsmanship make every BRABUS supercar unique in its class.
                </p>
                  <div className="flex">
                    <div className="card   rounded-xl ">
                        <Image
                        src={'/client1.jpg'}
                        width={100}
                        height={100}
                        />
                    </div>
                    <div className="card   rounded-xl ">
                    <Image
                        src={'/client2.jpg'}
                        width={100}
                        height={100}
                        />
                    </div>
                    <div className="card   rounded-xl ">
                    <Image
                        src={'/client3.jpg'}
                        width={100}
                        height={100}
                        />
                    </div>   
                    </div>                 
                </div>
            </div>
        </div>
    )
}

export default client;