import React from 'react';

export function InputWithIconError() {
    return (
        <section className="container mx-auto my-1 w-1/3 space-y-2">
            <h4 className="font-bold">Form example</h4>

            <div className="float-label-container ">
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    placeholder="Option 1"
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
                        placeholder="Option 2"
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
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-green-600">
                    <div className="group relative flex items-center">
                        <span
                            className="iconify-inline"
                            data-icon="clarity:success-standard-line"
                        ></span>
                    </div>
                </div>
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
                            pr-8
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
            <p className="text-xs text-green-600">We are good.</p>

            <p className="whitespace-pre-line font-mono">
                {`Option 1
+ no jumping
- bad in responsive
Option 2
- jumping
+ good for responsive`}
            </p>

            <h4 className="font-bold">Icon positioning by flex</h4>

            <div className="flex flex-row items-center">
                <div className="float-label-container flex-1">
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        placeholder="Icon positioning"
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
                        Icon positioning
                    </label>
                </div>
                <span
                    className="iconify-inline ml-1"
                    data-icon="bx:bx-message-error"
                ></span>
            </div>

            <h4 className="font-bold">Icon positioning by grid with error message</h4>

            <div className="grid auto-rows-min grid-cols-2 gap-1 overflow-hidden">
                <div className="col-start-1 col-end-3 row-start-1">
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        placeholder="grid with error message"
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
                        grid with error message
                    </label>
                </div>
                <span
                    className="iconify-inline row-start-1 self-center"
                    data-icon="bx:bx-message-error"
                ></span>
                <div className="col-start-1 col-end-4 row-start-2 text-xs text-rose-600">
                    <p>1. A right aligned tooltip.</p>
                    <p>2. Error example text</p>
                </div>
            </div>
        </section>
    );
}
