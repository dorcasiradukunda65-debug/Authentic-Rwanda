import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
const index5fc95283f596afe9da492fb193bc7819 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5fc95283f596afe9da492fb193bc7819.url(options),
    method: 'get',
})

index5fc95283f596afe9da492fb193bc7819.definition = {
    methods: ["get","head"],
    url: '/explore',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
index5fc95283f596afe9da492fb193bc7819.url = (options?: RouteQueryOptions) => {
    return index5fc95283f596afe9da492fb193bc7819.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
index5fc95283f596afe9da492fb193bc7819.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5fc95283f596afe9da492fb193bc7819.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
index5fc95283f596afe9da492fb193bc7819.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index5fc95283f596afe9da492fb193bc7819.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
const index5fc95283f596afe9da492fb193bc7819Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5fc95283f596afe9da492fb193bc7819.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
index5fc95283f596afe9da492fb193bc7819Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5fc95283f596afe9da492fb193bc7819.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/explore'
*/
index5fc95283f596afe9da492fb193bc7819Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5fc95283f596afe9da492fb193bc7819.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index5fc95283f596afe9da492fb193bc7819.form = index5fc95283f596afe9da492fb193bc7819Form
/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
const index980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

index980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return index980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
const index980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DiscoveryController::index
* @see app/Http/Controllers/DiscoveryController.php:14
* @route '/'
*/
index980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index980bb49ee7ae63891f1d891d2fbcf1c9.form = index980bb49ee7ae63891f1d891d2fbcf1c9Form

/**
* Multiple routes resolve to \App\Http\Controllers\DiscoveryController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/explore': index5fc95283f596afe9da492fb193bc7819,
    '/': index980bb49ee7ae63891f1d891d2fbcf1c9,
}

const DiscoveryController = { index }

export default DiscoveryController