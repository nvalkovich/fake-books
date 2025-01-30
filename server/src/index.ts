import express, { Request, Response } from "express";
import cors from "cors";
import { StatusCodes, Errors } from "./common/types";
import { validateRequest } from "./utils/helpers";
import { generateBooks } from "./services/bookGeneration";

const app = express();
const port = 3000;
const booksRoute = "/books";

app.use(cors());
app.use(express.json());

app.get(booksRoute, (req: Request, res: Response) => {
  const { seed, page, lang, likes, reviews } = req.query;

  const validation = validateRequest(seed, page, lang, likes, reviews);
  if (!validation.isValid) {
    return res.status(StatusCodes.badRequest).json({ error: validation.error });
  }

  try {
    const books = generateBooks(
      seed as string,
      Number(page),
      lang as string,
      Number(likes),
      Number(reviews),
    );
    return res.json(books);
  } catch (error) {
    console.error(error);
    return res
      .status(StatusCodes.internalServerError)
      .json({ error: Errors.generatingBooks });
  }
});

app.listen(port, () => {
  console.log(`Server starts on http://localhost:${port}`);
});
