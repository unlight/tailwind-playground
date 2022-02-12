import React from 'react';

export function InputWithIconError() {
    return (
        <div className="container mx-auto my-1 w-1/3 space-y-2">
            <h4>Form example</h4>

            <div className="has-float-label ">
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    placeholder="Name"
                    className="
                            control-with-float-label
                            outline-none
                            focus:shadow-outline
                            border
                            w-full
                            px-1
                        "
                />
                <label htmlFor="name" className="is-float-label bg-white text-gray-500">
                    Name
                </label>
                <div className="absolute right-0 inset-y-0 flex items-center px-2 text-red-600">
                    <div className="relative flex items-center group">
                        ℹ
                        <div className="absolute left-0 items-center hidden ml-6 group-hover:flex">
                            <div className="w-3 h-3 -mr-2 rotate-45 bg-black"></div>
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg">
                                A right aligned tooltip.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <input
                    className="appearance-none border-2 border-red-300 bg-red-50 transition-colors rounded-md w-full py-2 px-3 text-gray-8w00 leading-tight focus:outline-none focus:ring-red-500 focus:border-red-500 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                />
                <div className="absolute right-0 inset-y-0 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}