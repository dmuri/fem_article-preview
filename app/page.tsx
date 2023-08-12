import Image from "next/image";
import Share from "@/components/Share";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="sr-only">Article</h1>
        <div className="bg-white grid rounded-2xl max-w-[25rem] md:max-w-[47rem] md:grid-cols-[auto,1fr]">
          <Image
            src="/images/drawers.jpg"
            alt="Picture of drawers"
            width="274"
            height="270"
            className="h-full w-full object-cover rounded-t-2xl md:rounded-none md:rounded-l-2xl md:object-left md:w-[18rem]"
          />
          <div className="flex flex-col p-7">
            <h2 className="text-very-dark-grayish-blue text-xl font-bold tracking-wide">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className="mt-4 text-sm text-desaturated-dark-blue">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="mt-5 flex items-end justify-between relative items-center">
              <figure className="flex items-center gap-4">
                <Image
                  src="/images/avatar-michelle.jpg"
                  alt="Profile picture of Michelle"
                  width="70"
                  height="30"
                  className="object-cover rounded-full h-12 w-12"
                />
                <figcaption className="tracking-normal">
                  <p className="text-sm font-bold">Michelle Appleton</p>
                  <time className="text-sm text-desaturated-dark-blue">
                    28 Jun 2020
                  </time>
                </figcaption>
              </figure>
              <Share />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
