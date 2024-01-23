// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.query.q}&key=AIzaSyAt0Apj82tm52eUwKaiKUcdaJGs9DEG16Q`
  )
    .then((response) => response.json())
    .then((result) => {
      // generate the embed codes for results
      let codes = result.items.map((x: any) => {
        return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${x.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
      });
      res.status(200).json(codes)
    });
}
