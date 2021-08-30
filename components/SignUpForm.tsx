export function SignUpForm() {
  return (
    <div className="md:rounded-xl bg-brandGreen py-12 px-4 md:px-48 text-white mb-8">
      <h2 className="text-3xl font-semibold mb-2">
        Subscribe to our biweekly newsletter!
      </h2>
      <p>Get helpful tips to help you get in shape and stay in shape for life!</p>
      <form className="mt-4 text-black">
        <input
          v-model="firstName"
          name="firstName"
          className="rounded mr-2 pl-2 py-2 w-2/3 mb-2"
          placeholder="First Name"
        />
        <input
          v-model="lastName"
          name="lastName"
          className="rounded mr-2 pl-2 py-2 w-2/3 mb-2"
          placeholder="Last Name"
        />
        <input
          v-model="email"
          name="email"
          className="rounded mr-2 pl-2 py-2 w-2/3 mb-4"
          placeholder="Email"
        />

        <button className="block text-white primary sign-up-btn capitalize font-semibold p-2 rounded mx-auto">Sign Up</button>
      </form>
    </div>
  )
}