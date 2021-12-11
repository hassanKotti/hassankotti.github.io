import React from 'react'
import { Icon } from "@iconify/react";


const SocialLink = ({ icon,name,link}) => {
    return (
      <a className="flex flex-col items-center py-4 " href={link}>
        <Icon
          icon={icon}
          className="w-auto h-12 text-stone-900 fill-current "
        />

        <div className="mt-3 text-sm font-semibold text-stone-900 ">
          {name}
        </div>
      </a>
    );
}

export default SocialLink
