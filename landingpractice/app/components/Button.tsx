"use client";

interface ButtonProps {
  title1: string;
  title2: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title1, title2, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        text-center
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
       text-maingraytext
       hover:text-mainwhite
        h-auto  
        w-[10rem]  
        overflow-hidden   
        transition-all
        duration-100">
      <span
        className="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
        border-maingreen
        transition-all
        duration-500"></span>

      <p
        className="
        group-hover:opacity-0 
        group-hover:translate-x-[-100%] 
        absolute 
        translate-x-0 
        transition-all 
        text-center
        duration-200">
        {title1}
      </p>

      <span
        className="
        group-hover:translate-x-0  
        group-hover:opacity-100 
        absolute  
        translate-x-full 
        opacity-0  
        transition-all 
        duration-200">
        {title2}
      </span>

      <span
        className="
        group-hover:w-full 
        absolute 
        right-0 
        h-full 
        w-5  
        border-y 
        border-r  
        border-maingreen
        transition-all 
        duration-500"></span>
    </button>
  );
};

export default Button;
