import express from "express";
import {listeArticle, loadMoreArticles, getCategoryArticles, getSingleArticle, renderArticleForm, createArticle, renderUpdateArticleForm, updateArticle, deleteArticle} from "../controllers/articles.js";
import { authenticateUser, isAdmin} from "../middlewares/auth.js"

const routeArticles = express.Router();

// Root route
routeArticles.get("/",authenticateUser, listeArticle);
routeArticles.get("/load-more/:numberArticles", authenticateUser, loadMoreArticles);
routeArticles.get("/category/:tag",authenticateUser, getCategoryArticles);
routeArticles.get("/create", isAdmin, authenticateUser, renderArticleForm);
routeArticles.post("/create", isAdmin, authenticateUser, createArticle);
routeArticles.get("/:id", authenticateUser, getSingleArticle);
routeArticles.get("/:id/edit",isAdmin, authenticateUser, renderUpdateArticleForm);
routeArticles.post("/:id/edit",isAdmin, authenticateUser, updateArticle);
routeArticles.get("/:id/deleteArticle",isAdmin, authenticateUser, deleteArticle);


export default routeArticles;