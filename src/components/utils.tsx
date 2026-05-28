function TitleText( {title} : { title: any }) {
    return (
        <div className="w-full h-fit flex flex-row justify-center items-center pt-4 pb-2">
            <span className="w-full h-[2px] bg-orange-400 mx-4 my-4"></span>
            <h2 className="xl:text-4xl"><span className="whitespace-nowrap">{title}</span></h2>
            <span className="w-full h-[2px] bg-orange-400 mx-4 my-4"></span>
        </div>

    )
}

export { TitleText }