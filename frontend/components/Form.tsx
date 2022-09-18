import { GetStaticProps } from "next";

const Form = () => {
  return (
    <form className="sm:w-[40%] px-4 mx-auto flex flex-col">
      <label className="text-2xl">
        Name:
        <div className="rounded-full border-4 border-[#231955] px-6 py-2 my-2">
          <input className="w-[90%] outline-none py-2" type="text" />
        </div>
      </label>
      <label className="text-2xl">
        Symbol:
        <div className="rounded-full border-4 border-[#231955] px-6 py-2 my-2">
          <input className="w-[90%] outline-none py-2" type="text" />
        </div>
      </label>
      <label className="text-2xl">
        Claim Amount:
        <div className="rounded-full border-4 border-[#231955] px-6 py-2 my-2">
          <input className="w-[90%] outline-none py-2" type="number" />
        </div>
      </label>
      <button className="bg-skin-base text-xl text-white sm:w-[30%] w-[50%] py-3 rounded-full mt-10 self-end mb-8">
        Deploy
      </button>
    </form>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default Form;
