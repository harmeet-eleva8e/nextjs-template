"use client";

import { useTestHook } from "@/hooks";
import { axios } from "@/utils";

export default function Home() {
    const { message } = useTestHook({ message: "welcome to NextJS template!" });

    const RenderInstructions = () => {
        return (
            <>
                <h1 className="text-4xl">{message}</h1>

                <br />

                <div className="w-full flex flex-col justify-start items-start">
                    <h4 className="opacity-70 uppercase text-xl">
                        COMPONENTS STRUCTURING:
                    </h4>

                    <p className="pl-10 w-full flex flex-col justify-start items-start text-left">
                        <br />
                        <span className="text-xl">
                            1. for multiple page setup:
                        </span>
                        <span className="opacity-70">
                            &#x2022; setup all pages in '/components' folder
                        </span>
                        <br />
                        <span className="text-xl">
                            2. for single page setup:
                        </span>
                        <span className="opacity-70">
                            &#x2022; setup page design here only
                        </span>
                        <br />
                    </p>

                    <br />

                    <div className="w-full flex flex-col justify-start items-start text-left">
                        <h4 className="opacity-70 uppercase text-xl">
                            packages provided:
                        </h4>

                        <p className="pl-10 w-full flex flex-col justify-start items-start text-left">
                            <br />
                            <span className="text-xl">1. axios:</span>
                            <span className="opacity-70">
                                &#x2022; axios with base url already setup in
                                'src/utils'
                            </span>
                            <span className="opacity-70">
                                &#x2022; axios is also already imported in this
                                page
                            </span>
                            <br />
                            <span className="text-xl">2. custom hook:</span>
                            <span className="opacity-70">
                                &#x2022; 'useTestHook' is provided as a bonus
                                &#x2022; it is rendering the title of this page
                            </span>
                            <br />
                        </p>
                    </div>
                </div>
            </>
        );
    };

    return (
        <main className="w-full">
            <div className="mx-auto pt-10 max-w-screen-2xl w-full flex flex-col justify-center items-center">
                <RenderInstructions />
            </div>
        </main>
    );
}
