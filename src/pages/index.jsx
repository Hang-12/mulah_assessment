import Head from "next/head";
import { datas } from "@@/data/data";
import { category } from "@@/data/calculation";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mulah Assessment</title>
        <meta name="description" content="Mulah Assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white min-h-screen p-4">
        <div className="p-2">
          <p className="text-3xl font-bold">Table 1</p>
          <ul className="divide-y m-2">
            <li className="py-4 grid grid-cols-2">
              <div className="col-span-1">
                <p className="font-bold">{`Index #`}</p>
              </div>
              <div className="col-span-1">
                <p className="font-bold">{`Value`}</p>
              </div>
            </li>
            {datas.map((data) => {
              return (
                <li key={data.index} className="py-2 grid grid-cols-2">
                  <div className="col-span-1">
                    <p>{data.index}</p>
                  </div>
                  <div className="col-span-1">
                    <p>{data.value}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="p-2">
          <p className="text-3xl font-bold">Table 2</p>
          <ul className="divide-y m-2">
            <li className="py-4 grid grid-cols-2">
              <div className="col-span-1">
                <p className="font-bold">{`Category`}</p>
              </div>
              <div className="col-span-1">
                <p className="font-bold">{`Value`}</p>
              </div>
            </li>
            {category.map((result) => {
              return (
                <li key={result.label} className="py-2 grid grid-cols-2">
                  <div className="col-span-1">
                    <p>{result.label}</p>
                  </div>
                  <div className="col-span-1">
                    <p>{result.total}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home;