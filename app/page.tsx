import ContactUs from "./Component/ContactUS/ContactUs"

export default function Expense() {  
  return (
    <main>
      <ContactUs />    
      <section className='w-full bg-26A1F8'>
      <div className='text-5xl text-center'>ALL PROJECTS OF NEXT JS</div></section>
     <div className='text-center pt-14'>
        <button className='border-4 border-black py-2 px-4 h-[100px] bg-0A213B text-right hover:bg-gray-600 rounded-xl'>
          <a href='/expense' className='text-4xl text-white'>Visit Expense Website</a>
        </button> 
      </div>
    
      <div className='flex justify-between pt-2'>
      <div className=' text-right'>
        <button className='border-4 border-black py-2 px-4 h-[100px] bg-0A213B text-right hover:bg-gray-600 rounded-xl'>
          <a href='/blog' className='text-4xl text-white'>Visit Adding Blog Website</a>
        </button>
      </div>
      <div className='text-left'>
        <button className='border-4 border-black py-2 px-4 h-[100px]  bg-0A213B text-right hover:bg-gray-600 rounded-xl '>
          <a href='/Grid' className='text-4xl text-white'>Visit Grid Layout Website</a>
        </button>
      </div>
      </div>
      
    </main>
  )
}   