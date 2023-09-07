import express from "express";
import {index, loadMoreArticles, getCategoryArticles, getSingleArticle, renderArticleForm, createArticle} from "../controllers/articles.js";
import { authenticateUser, isAdmin} from "../middlewares/auth.js"

const routeArticles = express.Router();

// Root route
routeArticles.get("/",authenticateUser, index);
routeArticles.get("/load-more/:numberArticles", authenticateUser, loadMoreArticles);
routeArticles.get("/category/:tag",authenticateUser, getCategoryArticles);
routeArticles.get("/create", isAdmin, authenticateUser, renderArticleForm);
routeArticles.post("/create", isAdmin, authenticateUser, createArticle);

routeArticles.get("/:id", authenticateUser, getSingleArticle);


export default routeArticles;