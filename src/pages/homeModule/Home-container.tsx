import React, { useEffect, useState } from 'react'
import useEcharts from 'react-hooks-echarts';
import HomeTemplate from '../../components/templates/HomeTemplate'
import { getColumns, getColumnsData } from '../../services/product-data-service';
import { columnsDataUiModel } from '../../ui-models/columns-data-ui-model';
import { columnsUiModel } from '../../ui-models/columns-ui-model';
import Columns from './components/columns-component'
import echarts from "echarts";
import ReactECharts from 'echarts-for-react';

interface Props { }

const Home: React.FC = (props: Props) => {
    const [columns, setColumns] = useState<columnsUiModel[] | void>();
    const [columnsData, setColumnsData] = useState<columnsDataUiModel[] | void>();
    const [chartRef, ref] = useEcharts();

    useEffect(() => {
        getColumns().then((data) => setColumns(data));
    }, [])
    function getdata(data: { measures: string[], dimension: string }) {
        getColumnsData(data).then((data) => {
            setColumnsData(data);
            if (Array.isArray(data)) {
                const chart = chartRef.current;
                chart && chart.setOption({
                    xAxis: {
                        type: "category",
                        data: data[0].values
                    },
                    yAxis: {
                        type: "value"
                    },
                    series: [
                        {
                            data: data[1].values,
                            type: "line"
                        }
                    ]
                });
            }

        })
    }
    return (
        <HomeTemplate>
                 <Columns ColumnsData={columns || []}
                    submitDimensionAndMeasures={(data) => {
                        if (data.dimension && data.measures) {
                            getdata({
                                "measures": [data.measures],
                                "dimension": data.dimension
                            })
                        }
                    }} > 
               <div ref={ref} className="chart overflow-x-auto" style={{ height: 800, width: "100%" }}></div>
               <ReactECharts option={{}} />
                </Columns> 
        </HomeTemplate>)
}

export default Home
