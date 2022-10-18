export class Router {
    routes = {}

    swap(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
    
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const { body } = document
        const handle_route = this.routes[pathname] || this.routes[404];
        switch (pathname) {
            case "/":
                body.className = "bg-img-home";
                break;
            case "/home":
                body.className = "bg-img-home";
                break;
            case "/universe":
                body.className = "bg-img-universe";
                break;
            case "/exploration":
                body.className = "bg-img-exploration"
                break
            default:
                body.className = "bg-img-home";
                break;
        }
        fetch(handle_route)
            .then((data) => data.text())
            .then((html) => (document.querySelector("#app").innerHTML = html));
    }
} { Router }