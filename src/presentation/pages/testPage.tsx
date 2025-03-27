import ButtonSubmit from "../components/Button";

export default function TestPage() {
 
    return (
        <>
            <form>

                <div className="flex flex-col items-center content-center justify-center h-screen bg-gray-100">
                    <div className="bg-white min-w-[40vw] max-w-lg shadow-lg mx-auto py-10 lg:px-20 rounded-md">
                        <div className="flex items-center justify-center mt-5 text-center ">
                            <h1 className="text-5xl font-bold text-center text-green-950 mb-7 ">test Page</h1>
                        </div>

                        <div className="w-full my-8 ">
                            <ButtonSubmit  > Se connecter </ButtonSubmit>

                        </div>
                    </div>

                </div>

            </form>

        </>
    );
}

