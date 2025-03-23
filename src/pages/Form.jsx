import React from "react";

const Form = () => {
  return (
    <>


<div class="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 class="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
        <form>
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md text-gray-800"/>
            </div>
            <button type="submit" class="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
        </form>
    </div>

    </>
  )
}

export default Form;
