function NewsLetterInput({ placeholder }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full md:w-[232px] h-[54px] rounded-md border-[1px] border-gray-300 text-white py-[17px] px-[16px] bg-transparent placeholder:text-white"
      />
    </div>
  );
}

function ButtonSubscribe() {
  return (
    <div>
      <button
        type="submit"
        className="bg-black text-white p-4 rounded-lg md:w-[219.259px] w-full">
        Subscribe Now
      </button>
    </div>
  );
}

export default function NewsLetter() {
  return (
    <article className="bg-blue-600 rounded-[20px] grid  min-h-[350px] md:min-h-[286px] relative overflow-hidden mb-[90px] px-5">
      <img
        src="/Hi-Social/ringnewslettergray.png"
        className="absolute -top-28 -left-28 rotate-45"
      />
      <img
        src="/Hi-Social/ringnewsletterwhite.png"
        className="absolute -bottom-36 -right-28 rotate-45"
      />

      <div className="m-auto">
        <h3 className="text-3xl md:text-[42px] font-semibold text-white text-center mb-[28px] md:mb-[45.2px]">
          Subscribe to our newsletter
        </h3>

        <form className="flex flex-col md:flex-row gap-3">
          <NewsLetterInput placeholder={"First Name"} />
          <NewsLetterInput placeholder={"Email Address"} />
          <ButtonSubscribe />
        </form>
      </div>
    </article>
  );
}
