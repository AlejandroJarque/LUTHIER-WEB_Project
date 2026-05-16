
function Landing() {
    return (
        <div className="h-screen bg-cover bg-[center_00%]"
            style={{backgroundImage: "url('/img/landingv.jpg')" }}>
                <div className="bg-gray-900/50 w-full h-full">
                    <div className="flex justify-center items-center flex-col gap-20 text-white text-center w-1/3 h-full mx-auto">
                        <div className="text-[5.5rem] font-bebas mt-10">REPARACIÓN PROFESIONAL DE INSTRUMENTOS DE CUERDA</div>
                        <a className="bg-black text-7xl font-bebas" href="#contact">Contacto</a>
                    </div> 
                </div>
        </div>
    )
}

export default Landing;
