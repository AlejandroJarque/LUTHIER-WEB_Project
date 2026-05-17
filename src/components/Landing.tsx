
function Landing() {
    return (
        <div className="h-screen bg-cover bg-[center_00%]"
            style={{backgroundImage: "url('/img/landingv.jpg')" }}>
                <div className="bg-gray-900/50 w-full h-full flex justify-center items-center flex-col text-white text-center w-1/3 h-full mx-auto">
                    <div className=" flex justify-center items-center flex-col text-white text-center w-1/3 h-full mx-auto text-[5.6rem] font-bebas mt-10 leading-none">REPARACIÓN PROFESIONAL DE INSTRUMENTOS DE CUERDA</div>
                    <a className="bg-black text-7xl font-bebas mb-14" href="#contact">Contacto</a>
                </div>
        </div>
    )
}

export default Landing;
