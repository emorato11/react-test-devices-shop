import { useState } from "react";

import './Description.scss'

const Description = ({details}) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
                >
                { isOpen ? 'Ocultar detalles' : 'Mostrar detalles' }
            </div>
            {isOpen && (
                <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                    <div className="flex flex-col gap-2 accordion-content border-dotted border-x-2 border-b-2 divide-y">
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Marca</span>
                            <p className="basis-3/4 self-center">{details.brand}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Modelo</span>
                            <p className="basis-3/4 self-center">{details.model}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Precio</span>
                            <p className="basis-3/4 self-center">{details.price}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">CPU</span>
                            <p className="basis-3/4 self-center">{details.cpu}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">RAM</span>
                            <p className="basis-3/4 self-center">{details.ram}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Sistema Operativo</span>
                            <p className="basis-3/4 self-center">{details.os}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Resolución de pantalla</span>
                            <p className="basis-3/4 self-center">{details.displayResolution}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Batería</span>
                            <p className="basis-3/4 self-center">{details.battery}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Cámara principal</span>
                            <p className="basis-3/4 self-center">
                                { 
                                    details.primaryCamera.join(', ')
                                }
                            </p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Cámara frontal</span>
                            <p className="basis-3/4 self-center">{details.secondaryCmera}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Dimensiones</span>
                            <p className="basis-3/4 self-center">{details.dimentions}</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <span className="basis-1/4 font-bold">Peso</span>
                            <p className="basis-3/4 self-center">{details.weight}</p>
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}

export default Description