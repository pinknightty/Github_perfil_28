import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    }, [props]); 

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA);
    }, [materiaA])
    

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console
        });
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>
                   Olá {nome}, você foi aprovado
                </p>
            )
        } else {
            return (                
            <p>
                Olá {nome}, você foi reprovado
            </p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item =>( 
                    
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={( {target} ) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
           { renderizaResultado() }
        </form>
    )
}

export default Formulario;