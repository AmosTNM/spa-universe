import { Router } from "./router.js"
const router = new Router()

router.swap("/", "/pages/home.html")
router.swap("/universe", "/pages/universe.html")
router.swap("/exploration", "/pages/exploration.html")
router.swap(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle();
window.route = () => router.route()