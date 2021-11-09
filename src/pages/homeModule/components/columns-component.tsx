import React, { ReactNode, useState } from 'react'
import { columnsUiModel } from '../../../ui-models/columns-ui-model'

interface Props {
    ColumnsData: columnsUiModel[];
    submitDimensionAndMeasures: (data: { dimension: string, measures: string }) => void,
}

const Columns: React.FC<Props> = ({ColumnsData,submitDimensionAndMeasures, children}) => {
    const [dimension, setDimension] = useState<string>('');
    const [measures, setMeasures] = useState<string>('');

    return (
        <div className='flex flex-row flex-wrap justify-center w-full mt-5'>
            <div className='flex flex-col justify-start w-fit p-5 border-solid border-2 mr-4 h-screen'>
                <h3 className='text-3xl w-fit text-green-500 border-b-4 pb-4'>columns</h3>
                {ColumnsData.map((column) => (
                    <div key={column.name} draggable onDragStart={(e) => {
                        e.dataTransfer.setData('id', column.name);
                        e.dataTransfer.setData('function', column.function);

                    }}>{column.name}</div>
                ))}
            </div>
            <div className='flex flex-col justify-start w-6/12'>
                <div className="w-full">
                    <input type="text"
                        className='w-10/12'
                        value={dimension}
                        onKeyPress={(e) => e.preventDefault()}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDrop={(ev) => {
                            let id = ev.dataTransfer.getData("id");
                            let fun = ev.dataTransfer.getData("function");
                            if (fun == 'dimension') {
                                setDimension(id);
                            submitDimensionAndMeasures({
                                    dimension: id,
                                    measures
                                })
                            }
                        }}
                        placeholder="Dimension" />
                    <button
                        onClick={() => {
                            setDimension('');
                            submitDimensionAndMeasures({
                                dimension: '',
                                measures
                            })
                        }} className="ml-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        clear
                    </button>
                </div>
                <div className="w-full">
                    <input type="text"
                        className='w-10/12'
                        value={measures}
                        onKeyPress={(e) => e.preventDefault()}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDrop={(ev) => {
                            let id = ev.dataTransfer.getData("id");
                            let fun = ev.dataTransfer.getData("function");
                            if (fun == 'measure') {
                                setMeasures(id);
                                submitDimensionAndMeasures({
                                    measures: id,
                                    dimension
                                })
                            }
                        }} placeholder="Measures" />
                    <button onClick={() => {
                        setMeasures('');
                        submitDimensionAndMeasures({
                            measures: '',
                            dimension
                        })
                    }} className="ml-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        clear
                    </button>

                </div>
                <div  className="w-full"> {children}</div>
            </div>
        </div>
    )
}

export default Columns;
