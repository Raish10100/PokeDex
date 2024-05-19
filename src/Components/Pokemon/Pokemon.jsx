function Pokemon({name, img}){


    return(
        <>
            <h2>{name}</h2>
            <img src={img} />
        </>
    )
}

export default Pokemon;