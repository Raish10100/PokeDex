function Pokemon({name, img}){


    return(
        <div className='pokemon-parent flex flex-[30%] flex-col justify-center items-center md:my-[40px]'>
            <div className="pokemon transition-[0.5s] lg:w-[400px] w-[300px] cursor-pointer bg-[#2e3444] hover:bg-[#2e3444d4] py-[20px] sm:px-[30px] lg:px-[80px] border-white border-[2px] rounded-xl flex flex-col justify-center items-center">
                <h2 className="text-center tracking-[15px] ">{name}</h2>
                <img src={img} className="w-[271px] h-[271px] mt-[5px] " />
            </div>
        </div>
    )
}

export default Pokemon;