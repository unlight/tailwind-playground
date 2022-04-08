import React from 'react';

export function InputWithIconError() {
    return (
        <div className="container mx-auto my-1 w-1/3 space-y-2">
            <h4>Form example</h4>

            <div className="float-label-container ">
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    placeholder="Name"
                    className="
                            focus:shadow-outline
                            float-label-control
                            w-full
                            border
                            px-1
                            outline-none
                        "
                />
                <label
                    htmlFor="name"
                    className="float-label-self bg-white text-gray-500"
                >
                    Name
                </label>
            </div>

            <div className="float-label-container ">
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    placeholder="Name Invalid 1"
                    className="
                            focus:shadow-outline
                            float-label-control
                            w-full
                            border
                            border-red-400
                            px-1
                            outline-none
                            placeholder:text-red-400
                        "
                />
                <label
                    htmlFor="name"
                    className="float-label-self bg-white text-gray-500"
                >
                    Name 1
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-red-600">
                    <div className="group relative flex items-center">
                        <span
                            className="iconify-inline"
                            data-icon="bx:bx-message-error"
                        ></span>
                        <div className="hidden_ absolute left-0 ml-7 flex items-center group-hover:flex">
                            <div className="-mr-2 h-3 w-3 rotate-45 bg-rose-600"></div>
                            <span className="relative z-10 whitespace-nowrap rounded bg-rose-600 p-2 text-xs leading-none text-white">
                                <p>1. A right aligned tooltip. </p>
                                <p>2. Error example text</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="float-label-container ">
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        placeholder="Name Invalid 2"
                        className="
                            focus:shadow-outline
                            float-label-control
                            w-full
                            border
                            border-red-400
                            px-1
                            outline-none
                            placeholder:text-red-400
                        "
                    />
                    <label
                        htmlFor="name"
                        className="float-label-self bg-white text-gray-500"
                    >
                        Name 2
                    </label>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-red-600">
                        <div className="group relative flex items-center">
                            <span
                                className="iconify-inline"
                                data-icon="bx:bx-message-error"
                            ></span>
                        </div>
                    </div>
                </div>
                <div className="text-xs text-rose-600">
                    <p>1. A right aligned tooltip.</p>
                    <p>2. Error example text</p>
                </div>
            </div>

            <div className="float-label-container ">
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    placeholder="Name Valid"
                    className="
                            focus:shadow-outline
                            float-label-control
                            w-full
                            border
                            px-1
                            outline-none
                        "
                />
                <label
                    htmlFor="name"
                    className="float-label-self bg-white text-gray-500"
                >
                    Name
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-green-600">
                    <div className="group relative flex items-center">
                        <span
                            className="iconify-inline"
                            data-icon="clarity:success-standard-line"
                        ></span>
                    </div>
                </div>
            </div>

            <p>Op.1</p>
            <p>+ no jumping</p>
            <p>- bad in responsive</p>
            <p>Op.2</p>
            <p>- jumping</p>
            <p>+ good for responsive</p>

            {/*            <div className="relative">
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
            </div>*/}
        </div>
    );
}
