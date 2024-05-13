import React from 'react'

function Card({destinationName='Unknown', location='Somewhere in the world', img='https://images.pexels.com/photos/17033858/pexels-photo-17033858/free-photo-of-view-of-the-nubra-valley-in-ladakh-india.jpeg?auto=compress&cs=tinysrgb&w=600', description='Na'}) {
  return (
    
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        {description}
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {destinationName}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {location}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card