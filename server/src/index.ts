import express, { Request, Response } from "express";
import path from "path";
import { StatusCodes, Errors } from "./common/types";
import { validateRequest } from "./utils/helpers";
import { generateBooks } from "./services/bookGeneration";

const app = express();
const apiBooksRoute = "/api/books";
const PORT = process.env.PORT || 3000;

app.use(express.json());

const staticFilesPath = path.join(__dirname, "../../client/dist");
app.use(express.static(staticFilesPath));


app.get(apiBooksRoute, (req: Request, res: Response) => {
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

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
