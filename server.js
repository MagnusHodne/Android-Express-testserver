import express from "express";
import path from "path";

const app = express();

const images = [
  {
    store_link:
      "http://www.thefoodjournal.com.sg/2017/09/different-types-potatoes-benefits/",
    name: "Different Types of Potatoes and Their Benefits - The Food ...",
    domain: "www.thefoodjournal.com.sg",
    identifier: "bing",
    tracking_id: "None",
    thumbnail_link:
      "https://th.bing.com/th/id/OIP.fLSm1-bWXzV5YXsJ98Z7SQHaJ4?pid=ImgDet&w=211&h=281&c=7",
    description: "",
    image_link:
      "https://th.bing.com/th/id/OIP.fLSm1-bWXzV5YXsJ98Z7SQHaJ4?pid=ImgDet&w=211&h=281&c=7",
    current_date: "None",
  },
  {
    store_link: "https://www.eatthis.com/fiber-foods/",
    name: "30 High-Fiber Foods With More Fiber Than an Apple | Eat ...",
    domain: "Eat This, Not That!",
    identifier: "bing",
    tracking_id: "None",
    thumbnail_link:
      "https://th.bing.com/th/id/OIP.cW6NQia6LdrYmpsN9fDxoQHaFb?pid=ImgDet&w=211&h=154&c=7",
    description: "",
    image_link:
      "https://th.bing.com/th/id/OIP.cW6NQia6LdrYmpsN9fDxoQHaFb?pid=ImgDet&w=211&h=154&c=7",
    current_date: "None",
  },
];

const reverseSearch = (req, res) => {
  const { url } = req.query;
  console.log(url);
  res.json(images);
};

app.get("/api/v1/testimage", (req, res, _) => {
  res.sendFile(path.resolve("potato.jpg"));
});

app.post("/api/v1/imagesearch/upload", (req, res, next) => {
  res.send(`${req.protocol}://${req.hostname}/api/v1/testimage`);
});

app.get("/api/v1/imagesearch/bing", (req, res, _) => {
  reverseSearch(req, res);
});

app.get("/api/v1/imagesearch/google", (req, res, _) => {
  reverseSearch(req, res);
});

app.get("/api/v1/imagesearch/tineye", (req, res, _) => {
  reverseSearch(req, res);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server started on ${server.address().protocol}://localhost:${
      server.address().port
    }`
  );
});
