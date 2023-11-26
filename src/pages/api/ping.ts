import { NextApiResponse } from "next";

export default function handler(req: NextApiResponse, res: NextApiResponse) {
  res.status(200).json({ message: "pong" });
}
