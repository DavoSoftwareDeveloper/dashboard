import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Editor = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[HtmlEditor, Toolbar, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
