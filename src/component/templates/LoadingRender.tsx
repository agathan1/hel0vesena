import { Loader } from 'lucide-react'

export default function LoadingRender() {
  return (
    <main className='h-screen flex flex-col justify-center'>
        <div className='mx-auto shrink-0 text-center space-y-4'>
            <Loader className='animate-spin mx-auto'/>
            <span className='text-base font-semibold font-poppins'>Loading...</span>
        </div>
    </main>
  )
}
