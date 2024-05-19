import ResumePreview from './../components/ResumePreview';
import ResumeForm from './../components/ResumeForm';
import { DrawerDefault } from '../components/resume';

const CreatePage = () => {


  return (
    <div className="flex flex-row items-center justify-center gap-4 overflow-hidden h-screen ">
        <div id='style-3' className='p-4 flex-1 hidden xl:block  overflow-y-auto h-screen'>
          <ResumePreview />
        </div>
        {/* <DrawerDefault/> */}
        <ResumeForm/>
    </div>
  )
}

export default CreatePage