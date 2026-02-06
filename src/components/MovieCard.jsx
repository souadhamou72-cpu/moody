import { useEffect, useState } from 'react';
import {formatMovieTitle} from "../heplers/stringHelpers.js";

function MovieCard({title, img}) {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-[720px] mx-auto">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-50">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-50">
                        <img
                            src={img}
                            alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-ellipsis">
                                {/*{formatMovieTitle(title)}*/}
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
