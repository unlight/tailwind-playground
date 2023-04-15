import React, { useEffect, useRef } from 'react';

export function TopFixedError() {
  return (
    <section className="container mx-auto my-1 w-1/3 space-y-2">
      <h4 className="font-bold">TopFixedError example</h4>

      <div className="mb-8">
        <label
          htmlFor="success"
          className="mb-2 block text-sm font-medium text-green-700 dark:text-green-500"
        >
          Your name
        </label>
        <input
          type="text"
          id="success"
          className="block w-full rounded-lg border border-green-500 bg-green-50 p-2.5 text-sm text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500"
          placeholder="Success input"
        />
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">Well done!</span> Some success message.
        </p>
      </div>
      <div className="inline">
        <label
          htmlFor="error"
          className="mb-2 block text-sm font-medium text-red-700 dark:text-red-500"
        >
          Your name
        </label>
        <input
          type="text"
          id="error"
          className="block w-full rounded-lg border border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500"
          placeholder="Error input"
        />
        <p className="sticky top-0 mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oh, snapp!</span> Some error message.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Website URL
          </label>
          <input
            type="url"
            id="website"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="visitors"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Unique visitors (per month)
          </label>
          <input
            type="number"
            id="visitors"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="mb-8">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="confirm_password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm_password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-8 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>

      <div className="inline">
        <label
          htmlFor="error2"
          className="mb-2 block text-sm font-medium text-red-700 dark:text-red-500"
        >
          Your name B
        </label>
        <input
          type="text"
          id="error2"
          className="block w-full rounded-lg border border-red-500 bg-red-50 p-2.5 text-sm text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500"
          placeholder="Error input"
        />
        <p className="sticky top-0 mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oh, snapp 2!</span> Some error message
          2.
        </p>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>

      <div className="h-96">h96</div>
      <div className="h-96">h96</div>
      <div className="h-96">h96</div>
    </section>
  );
}
