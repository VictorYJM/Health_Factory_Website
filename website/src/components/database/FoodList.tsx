import { useEffect, useState, type KeyboardEvent } from "react";
import supabase from "../../lib/supabase";
import type { Food } from "../../types/Food";

const FoodList = () => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageInput, setPageInput] = useState<string>("1");
    const itemsPerPage = 10;

    useEffect(() => {
        getFoods();
    }, []);

    useEffect(() => {
        setPageInput(currentPage.toString());
    }, [currentPage]);

    async function getFoods() {
        try {
            if(!supabase) { throw new Error("Supabase client is not available!"); }

            const { data, error } = await supabase.from("hf_food").select("*");

            if(error) { throw error; }
            setFoods(data || []);

        }
        catch(err) { console.log("Error fetching foods:", err); }
    };

    const totalPages = foods.length > 0 ? Math.ceil(foods.length / itemsPerPage) : 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentFoods = foods.slice(startIndex, endIndex);

    const goToNextPage = () => { setCurrentPage((prev) => Math.min(prev + 1, totalPages)); };
    const goToPreviousPage = () => { setCurrentPage((prev) => Math.max(prev - 1, 1)); };

    const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPageInput(e.target.value); };

    const goToPage = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            const pageNumber = parseInt(pageInput, 10);
            if(!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) { setCurrentPage(pageNumber); }
            else { setPageInput(currentPage.toString()); }
        }
    };

    return (
        <div className="bg-main py-12 md:py-20 text-main">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
                    <span className="text-transparent bg-clip-text transition-colors duration-200 gradient-food-light-theme gradient-food-dark-theme">
                        Base Alimentar
                    </span>
                </h1>
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                        <p className="text-lg max-w-prose">
                            Os alimentos foram obtidos através de uma pesquisa apurada pela Tabela Brasileira de Composição de Alimentos (TACO).
                        </p>
                        <a
                            href="https://cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-block animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-background-dark to-background-dark dark:from-background-light via-glow dark:to-background-light p-[2px] flex-shrink-0">
                            <div className="text-center bg-main px-4 py-2 rounded-md font-semibold text-text-dark/80 dark:text-text-light/80 group-hover:text-glow transition-all duration-200">
                                Visite a Página Oficial
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Table of foods */}
            <div className="overflow-x-auto max-h-[500px] minimal-scrollbar">
                <table className="min-w-full text-sm text-left rtl:text-right text-main">
                    <thead className="text-xs text-main-inverse uppercase bg-main-inverse sticky top-0">
                        <tr>
                            { foods.length > 0 && Object.keys(foods[0]).filter((key) => key != "id").map((key) => (
                                <th scope="col" className="px-6 py-3" key={ key }>
                                    { key }
                                </th>
                            )) }
                        </tr>
                    </thead>
                    <tbody>
                        {currentFoods.map((food, index) => (
                            <tr key={ index } className="border-b bg-main border-main">
                                { Object.entries(food)
                                    .filter(([key]) => key !== "id")
                                    .map(([key, value], idx) => (
                                        <td className="px-6 py-4" key={ idx }>
                                            { key === 'tags' && Array.isArray(value) ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {value.map((tag, tagIdx) => (
                                                        <span key={ tagIdx } className="bg-main-inverse text-main-inverse opacity-50 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                                            { tag }
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                String(value ?? '')
                                            ) }
                                        </td>
                                    )) }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination system */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={ goToPreviousPage }
                    disabled={ currentPage === 1 }
                    className="disabled:opacity-50 group inline-block animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-background-dark to-background-dark dark:from-background-light via-glow dark:to-background-light p-[2px] flex-shrink-0"
                >
                    <div className="text-center bg-main px-4 py-2 rounded-md font-semibold text-text-dark/80 dark:text-text-light/80 group-hover:text-glow transition-all duration-200">
                        Anterior
                    </div>
                </button>
                <div className="flex items-center gap-2 text-sm">
                    Página
                    <input
                        type="text"
                        value={ pageInput }
                        onChange={ handlePageInputChange }
                        onKeyDown={ goToPage }
                        className="w-12 text-center bg-main-inverse text-main-inverse opacity-75 rounded-md p-1"
                    />
                    de { totalPages }
                </div>
                <button
                    onClick={ goToNextPage }
                    disabled={ currentPage === totalPages }
                    className="disabled:opacity-50 group inline-block animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-background-dark to-background-dark dark:from-background-light via-glow dark:to-background-light p-[2px] flex-shrink-0"
                >
                    <div className="text-center bg-main px-4 py-2 rounded-md font-semibold text-text-dark/80 dark:text-text-light/80 group-hover:text-glow transition-all duration-200">
                        Próxima
                    </div>
                </button>
            </div>
        </div>
    );
};

export default FoodList;