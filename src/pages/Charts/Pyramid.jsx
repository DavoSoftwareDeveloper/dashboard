import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from "@syncfusion/ej2-react-charts"
import { PyramidData } from "../../data/dummy"

import Header from '../../components/Header'
import {useStateContext} from '../../contexts/ContextProvider'

const Pyramid = () => {
  const { currentMode } = useStateContext()

  const titleStyle = {}

  return (
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='chart' title='Pyramid'/>
      <AccumulationChartComponent
        id='pyramid'
        title='Food Comparison Chart'
        tooltip={{enable:true}}
        enableSmartLabels={true}
        legendSettings={{visible:true, position:'Top'}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
        <Inject services={[PyramidSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}/>
        <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={PyramidData} 
                                        xName='x'
                                        yName='y'
                                        type='Pyramid' 
                                        explode={true}
                                        innerRadius='20%'
                                        dataLabel={{visible:true, name:'text',font: {
                fontWeight: '600'
            }}}radius='70%'
                                                              />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid
