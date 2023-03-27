import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from "@syncfusion/ej2-react-charts"
import {  pieChartData, ecomPieChartData } from "../../data/dummy"

import Header from '../../components/Header'
import {useStateContext} from '../../contexts/ContextProvider'

const Bar = () => {
  const { currentMode } = useStateContext()

  const titleStyle = {}

  return (
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='chart' title='Pie'/>
      <AccumulationChartComponent
        id='pie-chart'
        title='Project Cost Breakdown'
        tooltip={{enable:true}}
        enableSmartLabels={true}
        legendSettings={{visible:true, position:'Top'}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
        <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
        <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} 
                                        xName='x'
                                        yName='y'
                                        type='Pie' 
                                        explode={true}
                                        innerRadius='20%'
                                        dataLabel={{visible:true, name:'text', position:'Outside',font: {
                fontWeight: '600'
            }}}radius='70%'
                                                              />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Bar
