function PropsExample({name, info})//Here insted of props used direct variable name undet {}.thats rasonson no need to use of props.
{
    return(
        <div className="bg-black shadow-md p-6 rounded-md max-w-xs">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""
          className="bg-gray-500 rounded-md w-full h-72 object-center object-cover"
        />
        <div className="mt-6 mb-2">
          <span className="block font-mono font-medium text-indigo-400 text-sm uppercase tracking-widest">
            Title
          </span>
          <h2 className="font-semibold text-xl tracking-wide">{name}</h2>
          
        </div>
        <p className="text-gray-300">
         {info}
        </p>
      </div>

    )

}
export default PropsExample