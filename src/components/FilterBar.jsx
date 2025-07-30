import { useTodos } from "../context/TodosContext";


function FilterBar() {
    const { filter, setFilter } = useTodos();

    return (
        <div className="flex justify-center bg-gray-800 cursor-pointer">
            <div className='gap-x-6 flex mt-4 font-bold text-white text-sx'>
                <span className="mr-20">
                    1 item Left
                </span>
                <button
                    onClick={() => setFilter("all")}
                    className={filter === "all" ? "text-blue-500 font-bold" : ""}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("active")}
                    className={filter === "active" ? "text-blue-500 font-bold" : ""}
                >
                    Active
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={filter === "completed" ? "text-blue-500 font-bold" : ""}
                >
                    Completed
                </button>
              <button>
                 Claer Completed
              </button>
            </div>
        </div>
    )
}

export default FilterBar