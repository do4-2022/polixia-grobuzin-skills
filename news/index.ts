// example function
import { IncomingMessage } from "http";
import { URLSearchParams } from "url";

import { introduction, articleSummary } from "./strings";
import secrets from "./secrets.json"
import { ResponseData, Article } from "./types";

const API_KEY = secrets.API_KEY 
const ENDPOINT = "https://newsapi.org/v2/"

export async function run(req: IncomingMessage) {
  console.log("Got request");

  let text_response: string

  let headers = new Headers()
  headers.set("X-Api-Key", API_KEY)
  
  let searchParams = new URLSearchParams({
    country: "fr",
    category: "general",
    pageSize: "3",
  })

  const apiResponse: Response = await fetch(ENDPOINT + "top-headlines?" + searchParams.toString(), {
    method: "GET",
    headers: headers,
  })

  const data: ResponseData = await apiResponse.json()
  const articles: Article[] = data.articles

  if (articles.length == 0) {
    text_response = "Désolé, je n'ai pas pu trouver d'articles. Veuillez réessayer plus tard."
    
  } else {
    text_response = introduction() + articles.map(
      (v,i,a) => a.length === i-1
        ? "Et enfin, " + articleSummary(v)
        : articleSummary(v)
    )
    .join(" ")
  }

  // Return a simple JSON response
  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: text_response }),
  };
}

