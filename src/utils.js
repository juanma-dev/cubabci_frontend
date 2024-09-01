export function getRoute(parent) {
    let route;
    switch (parent) {
        case 'Home':
            route = '/';
        break;
        case 'Diplomatics':
            route = '/diplomatics';
        break;
        case 'Articles':
            route = '/articles';
        break;
        default:
            route = '/';
        break;
    }
    return route;
}

export function getRouteEN(parent) {
    let route;
    switch (parent) {
        case 'Home':
            route = '/en';
        break;
        case 'Diplomatics':
            route = '/diplomatics/en';
        break;
        case 'Articles':
            route = '/articles/en';
        break;
        default:
            route = '/en';
        break;
    }
    return route;
}