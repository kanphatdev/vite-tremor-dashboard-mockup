import { TextInput } from "@tremor/react"
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div id="top" className="relative w-full sm:flex justify-between items-center p-2">
      <h1 className="capitalize text-gray-300 font-bold">dashboard</h1>
      <div className="py-2">
        <TextInput  placeholder="search" icon={SearchIcon}/>
      </div>
    </div>
  )
}

export default Navbar