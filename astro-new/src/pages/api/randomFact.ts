const facts = ["This site is made with Astro","Coded in Spain","Me gusta la pizza con piña"]
const initialRandom = Math.floor(Math.random()*333)

export async function GET({}:{params:{[key:string]:any},request:Request}) {
    const newRandom = Math.floor(Math.random()*45)
    return new Response(
      JSON.stringify({
        fact: facts[newRandom%facts.length],
        randoms: [initialRandom,newRandom]
      })
    )
  }