# Loading performances

## Introduction

The goal is to compare the loading performances of 11 different frameworks (13 if we take into account 2 different implementations for the same framework).

To effectively compare them, I integrated the https://www.smile.eu/fr page into all those frameworks to base the comparison on a real use case (and not on a dummy blank page).  
The page itself is clearly not perfect and, at the time I am writing this, it scores 75 in lighthouse.  
The goal is not to try to achieve a 100 score, nor to say that something is bad or good, but only to compare the frameworks to each others, with the same imperfect base scenario.

Also for some frameworks you will notice multiple tests:

- to try different options for the same framework (using async components for example)
- or to try to find the optimal way to serve the content for the comparison to be fair (using `serve` for example that use compression for CSS, JS, HTML and fonts)

## Structure

In the root folder, you will find a folder for each framework project plus:

- an `express-app` folder containing a little express app used to fetch some data and deliver some assets.

When installing and running a project you will always find the same routes:

- `/`: this is the integration of the https://www.smile.eu/fr page, but without any JavaScript. The page is completely static.
- `/layout`: same page, but with some interactivity added in the header and the footer.
- `/dynamic`: same as previous, but now some interactivity has been added in the content (leaflet map and tabs).

Then depending on the framework you can also find the following routes:

- `/async`: for Client Side Rendering (`CSR`) frameworks. Same as `/dynamic` but some data are fetched in the client from the express app.
- `/ssr`: for Server Side Rendering (`SSR`) frameworks. Same as `/dynamic` but some data are fetched on the fly in the server from the express app.
- `/ssg`: for Static Site Generating (`SSG`) frameworks. Same as `/dynamic` but some data are fetched during the build step from the express app.
- `/busy`: Same as `/async` or `/ssg` (depending on the framework) with an additional long calculation that is either done on server side (for `SSR` frameworks) or client side (for `CSR` frameworks).
- `/hydration`: for Server Side Rendering (`SSR`) frameworks. Same as `/busy` but the long calculation is done both on the server and on the client (because of the page hydration).

For all those cases, the response time of the express app has been delayed by 1 second to simulate a long API call.

## Glossary

- FCP: First Contentful Paint - First Contentful Paint marks the time at which the first text or image is painted.
- LCP: Largest Contentful Paint - Largest Contentful Paint marks the time at which the largest text or image is painted.
- TBT: Total Blocking Time - Sum of all time periods between FCP and Time to Interactive, when a task length exceeded 50ms, expressed in milliseconds.
- CLS: Cumulative Layout Shift - Cumulative Layout Shift measures the movement of visible elements within the viewport.
- SI: Speed Index - Speed Index shows how quickly the contents of a page are visibly populated.

## Tests

The tests were made using Lighthouse with following configuration:

- Mode: "Navigation"
- Device: "Desktop"

In the results I recorded:

- the number of requests
- the document size (\*)
- the total JS files size (\*)
- the total CSS files size (\*) (\*\*)
- the total Image files size (\*\*)
- the total Font files size (\*) (\*\*)
- the performance score returned by Lighthouse (the higher the better)
- the FCP metric from Lighthouse (the lower the better)
- the LCP metric from Lighthouse (the lower the better)
- the TBT metric from Lighthouse (the lower the better)
- the CLS metric from Lighthouse (the lower the better)
- the SI metric from Lighthouse (the lower the better)

(\*) the two numbers separated by a <kbd>/</kbd> represent, for the first, the size transferred over network (sometimes with gzip compression which makes it smaller) and the size of the resource for the second.

(\*\*) These metrics don't vary across different scenarios, so I've grouped them in a separated "Common statistics" table.

## Results

### Alpine app

Commands:

- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 125kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 120.0.6099.62):

| Pages   | Requests | Doc size      | JS size       | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | -------- | ------------- | ------------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 67       | 12.1kB/135kB  | 24.2kB/99.6kB | 69          | 1.9s | 4.1s | 0ms    | 0.001 | 1.9s |
| layout  | 67       | 12.8kB/140kB  | 111kB/404kB   | 69          | 1.9s | 4.2s | 0ms    | 0.001 | 1.9s |
| dynamic | 67       | 11.4kB/112kB  | 139kB/556kB   | 68          | 1.9s | 4.3s | 0ms    | 0.001 | 1.9s |
| async   | 73       | 10.3kB/96.1kB | 138kB/531kB   | 68          | 1.9s | 4.2s | 0ms    | 0.001 | 1.9s |
| busy    | 74       | 10.3kB/96.2kB | 139kB/531kB   | 29          | 2.0s | 5.8s | 3750ms | 0.001 | 6.2s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages   | Requests | Doc size      | JS size     | Performance | FCP  | LCP  | TBT  | CLS | SI   |
| ------- | -------- | ------------- | ----------- | ----------- | ---- | ---- | ---- | --- | ---- |
| static  | 81       | 12.0kB/134kB  | 27kB/102kB  | 83          | 0.5s | 3.2s | 0ms  | 0   | 0.5s |
| layout  | 81       | 12.6kB/139kB  | 27kB/102kB  | 82          | 0.8s | 3.2s | 0ms  | 0   | 0.8s |
| dynamic | 78       | 11.4kB/112kB  | 142kB/559kB | 80          | 1.0s | 3.3s | 30ms | 0   | 1.0s |
| async   | 84       | 10.2kB/95.7kB | 141kB/534kB | 83          | 0.5s | 3.2s | 0ms  | 0   | 0.5s |
| busy    | 85       | 10.2kB/95.8kB | 141kB/534kB | 56          | 6.6s | 6.6s | 0ms  | 0   | 9.7s |

Statistics per page (with Chrome 128.0.6613.137 and some missing images):

| Pages   | Requests | Doc size      | JS size       | Performance | FCP  | LCP  | TBT  | CLS | SI   |
| ------- | -------- | ------------- | ------------- | ----------- | ---- | ---- | ---- | --- | ---- |
| static  | 81       | 12.0kB/134kB  | 24.2kB/99.6kB | 83          | 0.5s | 3.2s | 0ms  | 0   | 0.5s |
| layout  | 81       | 12.6kB/139kB  | 27kB/102kB    | 82          | 0.8s | 3.2s | 0ms  | 0   | 0.8s |
| dynamic | 78       | 11.4kB/112kB  | 142kB/559kB   | 80          | 1.0s | 3.3s | 30ms | 0   | 1.0s |
| async   | 84       | 10.2kB/95.7kB | 141kB/534kB   | 83          | 0.5s | 3.2s | 0ms  | 0   | 0.5s |
| busy    | 85       | 10.2kB/95.8kB | 141kB/534kB   | 56          | 6.6s | 6.6s | 0ms  | 0   | 9.7s |

### Angular app

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 66       | 1.0kB/1.2kB | 111kB/404kB | 81          | 1.0s | 3.1s | 0ms | 0.004 | 1.0s |
| layout  | 66       | 1.0kB/1.2kB | 111kB/404kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 65       | 1.0kB/1.2kB | 154kB/553kB | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 70       | 1.0kB/1.2kB | 154kB/553kB | 78          | 1.2s | 3.4s | 0ms | 0.014 | 1.2s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 66       | 1.0kB/1.2kB | 111kB/404kB | 68          | 2.0s | 4.4s | 0ms    | 0.014 | 2.0s |
| layout  | 66       | 1.0kB/1.2kB | 111kB/404kB | 67          | 2.0s | 4.2s | 0ms    | 0.004 | 2.0s |
| dynamic | 65       | 1.0kB/1.2kB | 154kB/553kB | 66          | 2.1s | 4.5s | 0ms    | 0.004 | 2.1s |
| async   | 70       | 1.0kB/1.2kB | 154kB/553kB | 67          | 2.0s | 4.5s | 0ms    | 0.004 | 2.0s |
| busy    | 74       | 1.0kB/1.2kB | 155kB/557kB | 26          | 4.1s | 6.2s | 2050ms | 0.014 | 9.5s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | ------ | --- | ---- |
| static  | 84       | 1.0kB/1.2kB | 111kB/407kB | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| layout  | 84       | 1.0kB/1.2kB | 111kB/407kB | 80          | 1.0s | 3.4s | 10ms   | 0   | 1.0s |
| dynamic | 80       | 1.0kB/1.2kB | 155kB/556kB | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| async   | 85       | 1.0kB/1.2kB | 155kB/556kB | 80          | 1.1s | 3.3s | 0ms    | 0   | 1.1s |
| busy    | 99       | 1.0kB/1.2kB | 255kB/556kB | 27          | 3.4s | 5.8s | 2460ms | 0   | 9.0s |

### Angular SSR app

Commands:

- `npm run build`
- `npm run serve:ssr:angular-ssr-app`

Common statistics (some missing images):

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 127kB/1.0MB | 2.9MB      | 440kB/977kB |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages     | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| --------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static    | 103      | 9.8kB/75.8kB  | 116kB/411kB  | 82          | 0.7s | 3.2s | 40ms   | 0   | 0.7s |
| layout    | 102      | 10.1kB/75.9kB | 1116kB/411kB | 82          | 0.7s | 3.3s | 50ms   | 0   | 0.7s |
| dynamic   | 84       | 9.1kB/64.1kB  | 159kB/561kB  | 81          | 0.9s | 3.2s | 90ms   | 0   | 0.9s |
| ssg       | 92       | 9.3kB/64.3kB  | 159kB/561kB  | 81          | 0.8s | 3.2s | 90ms   | 0   | 0.8s |
| busy(ssg) | 92       | 9.3kB/64.3kB  | 159kB/561kB  | 41          | 0.9s | 4.7s | 4920ms | 0   | 2.5s |

### Astro app (Without React Components)

#### Using vite preview

Commands:

- `npm run build`
- `npm run preview`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 747kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 80.7kB/80.4kB | 0           | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 64       | 81.2kB/80.9kB | 2.3kB/2.0kB | 67          | 2.1s | 4.4s | 0ms | 0.001 | 2.1s |
| dynamic | 65       | 66.9kB/66.6kB | 175kB/174kB | 64          | 2.3s | 5.0s | 0ms | 0.001 | 2.3s |
| ssr     | 67       | 69.7kB/67.6kB | 159kB/158kB | 66          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |
| ssg     | 67       | 67.9kB/67.6kB | 159kB/158kB | 66          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |

#### Using `serve`

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/80.4kB | 0            | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 64       | 10.2kB/80.9kB | 1.0kB/2.0kB  | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| dynamic | 65       | 9.1kB/66.6kB  | 50.8kB/174kB | 78          | 1.2s | 3.5s | 0ms | 0.001 | 1.2s |
| ssg     | 67       | 9.1kB/67.6kB  | 48.7kB/158kB | 80          | 1.0s | 3.3s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages     | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| --------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static    | 63       | 10.1kB/80.4kB | 0            | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| layout    | 64       | 10.2kB/80.9kB | 1.0kB/2.0kB  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic   | 65       | 9.1kB/66.6kB  | 50.8kB/174kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| ssg       | 67       | 9.1kB/67.6kB  | 48.7kB/158kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| busy(ssg) | 70       | 9.1kB/67.6kB  | 48.7kB/158kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages     | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS | SI   |
| --------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | --- | ---- |
| static    | 80       | 10.0kB/79.0kB | 0            | 81          | 0.6s | 3.4s | 0ms | 0   | 0.6s |
| layout    | 81       | 10.1kB/79.5kB | 1.0kB/2.0kB  | 82          | 0.6s | 3.3s | 0ms | 0   | 0.6s |
| dynamic   | 79       | 9.0kB/66.3kB  | 50.9kB/174kB | 81          | 1.0s | 3.1s | 0ms | 0   | 1.0s |
| ssg       | 81       | 9.0kB/67.3kB  | 48.8kB/158kB | 80          | 1.0s | 3.2s | 0ms | 0   | 1.0s |
| busy(ssg) | 70       | 9.0kB/67.3kB  | 48.8kB/158kB | 80          | 1.0s | 3.3s | 0ms | 0   | 1.0s |

### Astro app (With React Components)

#### Using vite preview + `client:load` directive

Commands:

- `npm run build`
- `npm run preview`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 747kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 81.4kB/81.1kB | 0           | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 70       | 70.1kB/69.6kB | 177kB/175kB | 65          | 2.2s | 4.7s | 0ms | 0.001 | 2.2s |
| dynamic | 72       | 52.0kB/51.7kB | 363kB/359kB | 64          | 2.2s | 5.2s | 0ms | 0.001 | 2.2s |
| ssr     | 74       | 57.6kB/56.8kB | 338kB/335kB | 66          | 2.0s | 4.9s | 0ms | 0.001 | 2.1s |
| ssg     | 74       | 57.1kB/56.8kB | 338kB/335kB | 67          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |

#### Using `serve`

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/81.1kB | 0            | 81          | 1.0s | 3.1s | 0ms | 0.004 | 1.0s |
| layout  | 70       | 10.6kB/69.6kB | 55.5kB/175kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| dynamic | 72       | 8.8kB/51.7kB  | 108kB/359kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssg     | 74       | 9.6kB/56.8kB  | 105kB/335kB  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

No SSR here (because it needs a server).

#### Using `serve` + `client:visible` directive

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/81.1kB | 0            | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 69       | 10.7kB/69.8kB | 53.1kB/165kB | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 48       | 8.9kB/51.9kB  | 53.1kB/165kB | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| ssg     | 49       | 9.7kB/57.0kB  | 53.1kB/165kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages                             | Requests | Doc size      | JS size       | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| --------------------------------- | -------- | ------------- | ------------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static                            | 63       | 10.1kB/81.1kB | 0             | 67          | 2.0s | 4.5s | 0ms    | 0.001 | 2.0s |
| layout                            | 69       | 10.7kB/69.8kB | 53.1kB/165kB  | 66          | 2.1s | 4.5s | 0ms    | 0.001 | 2.1s |
| dynamic                           | 48       | 8.9kB/51.9kB  | 53.1kB/165kB  | 67          | 2.0s | 4.5s | 0ms    | 0.001 | 2.0s |
| ssg                               | 49       | 9.7kB/57.0kB  | 53.1kB/165kB  | 67          | 2.1s | 4.5s | 0ms    | 0.001 | 2.1s |
| busy(ssg)                         | 52       | 9.7kB/57.0kB  | 53.1kB/165kB  | 67          | 2.1s | 4.5s | 0ms    | 0.001 | 2.1s |
| hydration(using `client:load`)    | 77       | 9.8kB/57.4kB  | 103.0kB/326kB | 36          | 2.1s | 4.5s | 8500ms | 0.001 | 2.1s |
| hydration(using `client:visible`) | 52       | 9.8kB/57.3kB  | 53.1kB/165kB  | 68          | 1.9s | 4.4s | 0ms    | 0.001 | 1.9s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages                             | Requests | Doc size      | JS size      | Performance | FCP  | LCP   | TBT     | CLS | SI   |
| --------------------------------- | -------- | ------------- | ------------ | ----------- | ---- | ----- | ------- | --- | ---- |
| static                            | 80       | 10.0kB/79.1kB | 0            | 82          | 0.6s | 3.2s  | 0ms     | 0   | 0.6s |
| layout                            | 86       | 10.7kB/68.5kB | 53.1kB/165kB | 80          | 0.9s | 3.4s  | 0ms     | 0   | 0.9s |
| dynamic                           | 65       | 8.9kB/51.5kB  | 53.1kB/165kB | 81          | 0.9s | 3.2s  | 0ms     | 0   | 0.9s |
| ssg                               | 66       | 9.7kB/56.6kB  | 53.1kB/165kB | 82          | 0.6s | 3.2s  | 0ms     | 0   | 0.6s |
| busy(ssg)                         | 66       | 9.7kB/56.6kB  | 53.1kB/165kB | 81          | 1.0s | 3.2s  | 0ms     | 0   | 1.0s |
| hydration(using `client:load`)    | 80       | 9.8kB/56.9kB  | 103kB/326kB  | 40          | 0.7s | 10.9s | 19520ms | 0   | 2.3s |
| hydration(using `client:visible`) | 66       | 9.8kB/56.9kB  | 53.1kB/165kB | 82          | 0.6s | 3.3s  | 0ms     | 0   | 0.6s |

No SSR again here.

### Gatsby app

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 125kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 72       | 9.5kB/57.0kB | 79.7kB/227kB | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| layout  | 73       | 9.5kB/57.2kB | 81.4kB/279kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| dynamic | 71       | 8.2kB/46.1kB | 127kB/437kB  | 78          | 1.1s | 3.6s | 0ms | 0.001 | 1.1s |
| ssr     | 73       | 8.6kB/52.3kB | 125kB/411kB  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.4s |
| ssg     | 74       | 8.1kB/46.4kB | 125kB/411kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages          | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI    |
| -------------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | ------ | ----- | ----- |
| static         | 72       | 9.5kB/57.0kB | 79.7kB/227kB | 68          | 2.0s | 4.5s | 0ms    | 0.001 | 2.0s  |
| layout         | 73       | 9.5kB/57.2kB | 81.4kB/279kB | 67          | 2.0s | 4.5s | 0ms    | 0.001 | 2.0s  |
| dynamic        | 71       | 8.2kB/46.1kB | 127kB/437kB  | 67          | 2.0s | 4.7s | 0ms    | 0.001 | 2.0s  |
| ssr            | 73       | 8.6kB/52.3kB | 125kB/411kB  | 67          | 2.0s | 4.8s | 0ms    | 0.001 | 2.0s  |
| ssg            | 74       | 8.1kB/46.4kB | 125kB/411kB  | 67          | 2.0s | 4.8s | 0ms    | 0.001 | 2.0s  |
| busy(ssr)      | 73       | 8.7kB/52.6kB | 125kB/412kB  | 62          | 1.9s | 4.5s | 0ms    | 0.001 | 7.2s  |
| hydration(ssr) | 73       | 8.7kB/52.6kB | 125kB/412kB  | 32          | 1.9s | 4.5s | 8190ms | 0.004 | 12.1s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages          | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| -------------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static         | 89       | 9.5kB/55.9kB | 79.7kB/276kB | 81          | 0.5s | 3.3s | 0ms    | 0   | 0.5s |
| layout         | 87       | 9.5kB/56.1kB | 81.4kB/278kB | 82          | 0.5s | 3.2s | 0ms    | 0   | 0.5s |
| dynamic        | 82       | 8.2kB/45.9kB | 128kB/437kB  | 82          | 0.5s | 3.2s | 0ms    | 0   | 0.5s |
| ssr            | 84       | 8.7kB/52.2kB | 125kB/412kB  | 81          | 0.9s | 3.2s | 0ms    | 0   | 1.2s |
| ssg            | 85       | 8.2kB/46.3kB | 125kB/412kB  | 82          | 0.5s | 3.2s | 0ms    | 0   | 0.5s |
| busy(ssr)      | 84       | 8.7kB/52.2kB | 125kB/412kB  | 72          | 0.8s | 3.2s | 0ms    | 0   | 6.7s |
| hydration(ssr) | 84       | 8.7kB/52.2kB | 125kB/412kB  | 42          | 0.8s | 3.2s | 9620ms | 0   | 7.8s |

### Next app (Using App Router)

Commands:

- `npm run build`
- `npm run start`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 127kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 70       | 19.6kB/142kB  | 79.0kB/262kB | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 73       | 15.5kB/106kB  | 88.3kB/307kB | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 10.8kB/65.1kB | 138kB/490kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 74       | 13.5kB/70.9kB | 131kB/455kB  | 81          | 0.9s | 3.3s | 0ms | 0.001 | 0.9s |
| ssg     | 74       | 11.6kB/70.1kB | 131kB/455kB  | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages     | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| --------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static    | 70       | 19.6kB/142kB  | 79.0kB/262kB | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| layout    | 73       | 15.5kB/106kB  | 88.3kB/307kB | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic   | 73       | 10.8kB/65.1kB | 138kB/490kB  | 66          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |
| ssr       | 74       | 13.5kB/70.9kB | 131kB/455kB  | 67          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |
| ssg       | 74       | 11.6kB/70.1kB | 131kB/455kB  | 68          | 1.9s | 4.6s | 0ms | 0.001 | 1.9s |
| busy(ssr) | 74       | 13.5kB/70.9kB | 131kB/455kB  | 62          | 1.9s | 4.3s | 0ms | 0.001 | 9.8s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages     | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT  | CLS | SI   |
| --------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | ---- | --- | ---- |
| static    | 84       | 19.6kB/140kB  | 79.2kB/262kB | 81          | 0.7s | 3.4s | 0ms  | 0   | 0.7s |
| layout    | 87       | 15.5kB/103kB  | 88.3kB/306kB | 81          | 0.6s | 3.5s | 0ms  | 0   | 0.6s |
| dynamic   | 84       | 10.8kB/64.6kB | 138kB/490kB  | 81          | 0.9s | 3.2s | 0ms  | 0   | 0.9s |
| ssr       | 85       | 13.5kB/70.9kB | 131kB/455kB  | 82          | 0.6s | 3.2s | 0ms  | 0   | 0.6s |
| ssg       | 85       | 12.2kB/69.6kB | 131kB/455kB  | 82          | 0.6s | 3.2s | 20ms | 0   | 0.6s |
| busy(ssr) | 85       | 14.3kB/70.4kB | 131kB/455kB  | 73          | 0.6s | 3.1s | 0ms  | 0   | 6.0s |

### Next app (Using Pages Router)

Commands:

- `npm run build`
- `npm run start`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 74       | 8.8kB/56.0kB | 87.6kB/312kB | 79          | 1.2s | 3.3s | 0ms | 0.001 | 1.2s |
| layout  | 75       | 8.9kB/56.3kB | 89.4kB/314kB | 81          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 7.5kB/45.1kB | 135kB/472kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 76       | 8.1kB/51.3kB | 132kB/446kB  | 78          | 1.0s | 3.5s | 0ms | 0.001 | 1.6s |
| ssg     | 76       | 8.1kB/51.3kB | 132kB/446kB  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages          | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI    |
| -------------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | ------ | ----- | ----- |
| static         | 74       | 8.8kB/56.0kB | 87.6kB/312kB | 68          | 1.9s | 4.4s | 0ms    | 0.001 | 1.9s  |
| layout         | 75       | 8.9kB/56.3kB | 89.4kB/314kB | 68          | 1.9s | 4.4s | 0ms    | 0.001 | 1.9s  |
| dynamic        | 73       | 7.5kB/45.1kB | 135kB/472kB  | 66          | 2.0s | 4.8s | 0ms    | 0.001 | 2.0s  |
| ssr            | 76       | 8.1kB/51.3kB | 132kB/446kB  | 67          | 2.0s | 4.7s | 0ms    | 0.001 | 2.0s  |
| ssg            | 76       | 8.1kB/51.3kB | 132kB/446kB  | 66          | 2.0s | 4.8s | 0ms    | 0.001 | 2.0s  |
| busy(ssr)      | 76       | 8.1kB/51.3kB | 132kB/446kB  | 61          | 1.9s | 4.6s | 0ms    | 0.001 | 7.2s  |
| hydration(ssr) | 76       | 8.1kB/51.3kB | 133kB/446kB  | 31          | 1.9s | 4.6s | 8610ms | 0.001 | 14.3s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages          | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| -------------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static         | 88       | 8.8kB/54.6kB | 87.7kB/311kB | 81          | 0.7s | 3.5s | 20ms   | 0   | 0.7s |
| layout         | 89       | 8.9kB/54.9kB | 89.5kB/313kB | 81          | 0.8s | 3.5s | 20ms   | 0   | 0.8s |
| dynamic        | 84       | 7.5kB/44.7kB | 135kB/472kB  | 80          | 1.0s | 3.4s | 10ms   | 0   | 1.0s |
| ssr            | 87       | 8.1kB/50.9kB | 132kB/446kB  | 80          | 0.7s | 3.4s | 10ms   | 0   | 1.3s |
| ssg            | 87       | 8.1kB/50.9kB | 132kB/446kB  | 82          | 0.6s | 3.2s | 30ms   | 0   | 0.8s |
| busy(ssr)      | 87       | 8.1kB/50.9kB | 132kB/446kB  | 71          | 0.8s | 3.4s | 10ms   | 0   | 6.8s |
| hydration(ssr) | 87       | 8.1kB/50.9kB | 133kB/446kB  | 41          | 0.7s | 3.3s | 9650ms | 0   | 9.9s |

### Nuxt app

#### Using generated server file

Commands:

- `npm run build`
- `node .output/server/index.mjs`

Common statistics:

| CSS size     | Image size | font size   |
| ------------ | ---------- | ----------- |
| 32.6kB/181kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 755kB/754kB | 205kB/203kB | 65          | 2.3s | 4.3s | 0ms | 0.001 | 2.3s |
| layout  | 71       | 755kB/755kB | 207kB/205kB | 65          | 2.3s | 4.4s | 0ms | 0.001 | 2.3s |
| dynamic | 70       | 744kB/744kB | 366kB/364kB | 64          | 2.3s | 5.0s | 0ms | 0.004 | 2.3s |
| ssr     | 71       | 750kB/750kB | 355kB/353kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| ssg     | 71       | 751kB/750kB | 355kB/353kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |

#### Using vite preview

Commands:

- `npm run build`
- `npm run preview`

Common statistics:

| CSS size     | Image size | font size   |
| ------------ | ---------- | ----------- |
| 32.6kB/181kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 755kB/754kB | 204kB/203kB | 65          | 2.3s | 4.4s | 0ms | 0.001 | 2.3s |
| layout  | 71       | 755kB/755kB | 207kB/205kB | 64          | 2.3s | 4.7s | 0ms | 0.001 | 2.4s |
| dynamic | 70       | 744kB/744kB | 366kB/364kB | 64          | 2.3s | 5.0s | 0ms | 0.001 | 2.3s |
| ssg     | 71       | 751kB/750kB | 355kB/353kB | 66          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |

#### Using `serve`

Commands:

- `npm run generate`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 125kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 89.8kB/754kB | 66.4kB/203kB | 82          | 0.9s | 3.0s | 0ms | 0.004 | 0.9s |
| layout  | 71       | 89.9kB/755kB | 67.8kB/206kB | 82          | 1.0s | 3.0s | 0ms | 0.004 | 1.0s |
| dynamic | 70       | 88.6kB/744kB | 115kB/365kB  | 81          | 0.9s | 3.2s | 0ms | 0.001 | 0.9s |
| ssg     | 71       | 89.4kB/750kB | 117kB/354kB  | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages          | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| -------------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | ------ | ----- | ---- |
| static         | 71       | 9.1kB/56.5kB | 66.4kB/203kB | 68          | 1.9s | 4.4s | 0ms    | 0.001 | 1.9s |
| layout         | 71       | 9.1kB/56.7kB | 67.8kB/206kB | 67          | 2.0s | 4.4s | 0ms    | 0.001 | 2.0s |
| dynamic        | 70       | 7.9kB/45.7kB | 115kB/365kB  | 66          | 2.0s | 4.7s | 0ms    | 0.001 | 2.0s |
| ssg            | 71       | 8.7kB/52.5kB | 117kB/354kB  | 67          | 2.0s | 4.6s | 0ms    | 0.001 | 2.0s |
| busy(ssg)      | 73       | 8.7kB/52.4kB | 118kB/355kB  | 67          | 2.0s | 4.5s | 0ms    | 0.001 | 2.0s |
| hydration(ssg) | 73       | 8.7kB/52.4kB | 118kB/355kB  | 36          | 1.9s | 4.4s | 8520ms | 0.001 | 2.4s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages          | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| -------------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static         | 88       | 9.0kB/55.1kB | 66.6kB/203kB | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| layout         | 88       | 9.1kB/55.3kB | 68.0kB/205kB | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| dynamic        | 84       | 7.8kB/45.3kB | 115kB/366kB  | 82          | 0.5s | 3.2s | 0ms    | 0   | 0.5s |
| ssg            | 86       | 8.7kB/52.1kB | 118kB/354kB  | 81          | 0.6s | 3.4s | 0ms    | 0   | 0.6s |
| busy(ssg)      | 85       | 8.7kB/52.1kB | 118kB/354kB  | 82          | 0.6s | 3.2s | 0ms    | 0   | 0.6s |
| hydration(ssg) | 85       | 8.7kB/52.1kB | 118kB/354kB  | 46          | 0.6s | 3.2s | 9730ms | 0   | 2.6s |

### Owl app

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size   | Image size   | font size   |
| ---------- | ------------ | ----------- |
| 12kB/1.0MB | 10.4kB/2.9MB | 440kB/977kB |

Statistics per page (with Chrome 128.0.6613.137 and some missing images):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT     | CLS   | SI    |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | ------- | ----- | ----- |
| static  | 85       | 799B/488B | 33.7kB/125kB | 82          | 0.6s | 3.3s | 0ms     | 0.013 | 0.6s  |
| layout  | 86       | 797B/486B | 35.1kB/128kB | 81          | 0.8s | 3.3s | 0ms     | 0.012 | 0.8s  |
| dynamic | 83       | 797B/486B | 43.6kB/334kB | 82          | 0.6s | 3.3s | 0ms     | 0.012 | 0.6s  |
| async   | 91       | 797B/486B | 41.8kB/306kB | 82          | 0.6s | 3.2s | 0ms     | 0.003 | 0.6s  |
| busy    | 90       | 797B/486B | 41.1kB/306kB | 42          | 0.6s | 3.2s | 9.210ms | 0.012 | 10.6s |

### Preact app

Commands:

- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 120.0.6099.62):

| Pages   | Requests | Doc size   | JS size       | Performance | FCP  | LCP  | TBT    | CLS   | SI    |
| ------- | -------- | ---------- | ------------- | ----------- | ---- | ---- | ------ | ----- | ----- |
| static  | 68       | 933B/1.2kB | 17.7kB/85.0kB | 69          | 1.8s | 4.3s | 0ms    | 0.004 | 1.8s  |
| layout  | 69       | 933B/1.2kB | 19.3kB/87.3kB | 69          | 1.9s | 4.0s | 0ms    | 0.014 | 1.9s  |
| dynamic | 67       | 933B/1.2kB | 66.0kB/247kB  | 69          | 1.9s | 4.3s | 0ms    | 0.014 | 1.9s  |
| async   | 75       | 933B/1.2kB | 64.0kB/222kB  | 70          | 1.9s | 4.0s | 0ms    | 0.004 | 1.9s  |
| busy    | 74       | 933B/1.2kB | 63.5kB/222kB  | 32          | 1.9s | 4.2s | 8170ms | 0.014 | 10.0s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages   | Requests | Doc size   | JS size       | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| ------- | -------- | ---------- | ------------- | ----------- | ---- | ---- | ------ | --- | ---- |
| static  | 82       | 934B/1.2kB | 17.7kB/83.7kB | 81          | 0.9s | 3.3s | 0ms    | 0   | 0.9s |
| layout  | 83       | 934B/1.2kB | 19.2kB/86.0kB | 82          | 0.5s | 3.3s | 0ms    | 0   | 0.5s |
| dynamic | 78       | 934B/1.2kB | 22.2kB/246kB  | 81          | 1.0s | 3.2s | 0ms    | 0   | 1.0s |
| async   | 86       | 934B/1.2kB | 20.2kB/222kB  | 81          | 1.0s | 3.1s | 0ms    | 0   | 1.0s |
| busy    | 85       | 934B/1.2kB | 19.7kB/222kB  | 41          | 1.0s | 3.2s | 9050ms | 0   | 8.8s |

### Qwik app

#### Using vite preview

Commands:

- `npm run preview`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 9.2kB/56.3kB  | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| layout  | 64       | 11.5kB/62.3kB | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| dynamic | 43       | 10.4kB/52.7kB | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| ssr     | 44       | 10.5kB/53.6kB | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |

#### Using Node.js Express Server Adapter

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 747kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size        | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 56.5.2kB/56.3kB | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 64       | 62.5kB/62.3kB   | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| dynamic | 43       | 52.9kB/52.7kB   | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| ssr     | 44       | 53.8kB/53.6kB   | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |

#### Using Static site Adapter + `serve`

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 125kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages    | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| -------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static   | 64       | 9.4kB/56.3kB  | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout   | 64       | 11.6kB/62.3kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| dynamic  | 43       | 10.5kB/52.7kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| ssr(ssg) | 44       | 10.6kB/53.6kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages     | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| --------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static    | 64       | 9.4kB/56.3kB  | 0       | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout    | 64       | 11.6kB/62.3kB | 0       | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| dynamic   | 43       | 10.5kB/52.7kB | 0       | 68          | 2.0s | 4.3s | 0ms | 0.001 | 2.0s |
| ssr(ssg)  | 44       | 10.6kB/53.6kB | 0       | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| busy(ssg) | 46       | 10.9kB/54.1kB | 0       | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages     | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS | SI   |
| --------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | --- | ---- |
| static    | 80       | 9.5kB/55.3kB  | 0       | 82          | 0.5s | 3.4s | 0ms | 0   | 0.5s |
| layout    | 80       | 11.8kB/61.3kB | 0       | 83          | 0.5s | 3.2s | 0ms | 0   | 0.5s |
| dynamic   | 59       | 10.8kB/52.7kB | 0       | 83          | 0.5s | 3.2s | 0ms | 0   | 0.5s |
| ssr(ssg)  | 60       | 10.9kB/53.7kB | 0       | 83          | 0.5s | 3.2s | 0ms | 0   | 0.5s |
| busy(ssg) | 60       | 10.9kB/53.7kB | 0       | 83          | 0.5s | 3.2s | 0ms | 0   | 0.5s |

### React app (Vite)

#### Using vite preview

Commands:

- `npm run build`
- `npm run preview`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 118kB/908kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 66       | 934B/1.2kB | 71.8kB/322kB | 73          | 1.6s | 3.7s | 0ms | 0.004 | 1.6s |
| layout  | 66       | 934B/1.2kB | 71.8kB/322kB | 74          | 1.6s | 3.7s | 0ms | 0.014 | 1.6s |
| dynamic | 65       | 934B/1.2kB | 116kB/472kB  | 71          | 1.7s | 4.1s | 0ms | 0.004 | 1.7s |
| async   | 71       | 934B/1.2kB | 116kB/472kB  | 72          | 1.4s | 4.6s | 0ms | 0.014 | 1.4s |

#### Using `serve`

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 66       | 949B/1.2kB | 71.8kB/322kB | 79          | 1.1s | 3.3s | 0ms | 0.014 | 1.1s |
| layout  | 66       | 949B/1.2kB | 71.8kB/322kB | 79          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |
| dynamic | 65       | 949B/1.2kB | 116kB/472kB  | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 71       | 949B/1.2kB | 116kB/472kB  | 78          | 1.2s | 3.6s | 0ms | 0.014 | 1.2s |

#### Using `serve` + async components

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 69       | 949B/1.2kB | 61.1kB/225kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 69       | 949B/1.2kB | 62.9kB/228kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 68       | 949B/1.2kB | 110kB/386kB  | 77          | 1.3s | 3.6s | 0ms | 0.004 | 1.3s |
| async   | 74       | 949B/1.2kB | 107kB/361kB  | 79          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 69       | 949B/1.2kB | 61.1kB/225kB | 67          | 2.0s | 4.4s | 0ms    | 0.004 | 2.0s |
| layout  | 69       | 949B/1.2kB | 62.9kB/228kB | 67          | 2.0s | 4.4s | 0ms    | 0.004 | 2.0s |
| dynamic | 68       | 949B/1.2kB | 110kB/386kB  | 67          | 2.0s | 4.6s | 0ms    | 0.004 | 2.0s |
| async   | 74       | 949B/1.2kB | 107kB/361kB  | 67          | 2.0s | 4.3s | 0ms    | 0.004 | 2.0s |
| busy    | 74       | 949B/1.2kB | 107kB/362kB  | 32          | 2.0s | 4.3s | 8490ms | 0.003 | 8.3s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static  | 82       | 941B/1.2kB | 52.3kB/225kB | 82          | 0.5s | 3.3s | 0ms    | 0   | 0.7s |
| layout  | 83       | 941B/1.2kB | 52.4kB/227kB | 82          | 0.5s | 3.2s | 20ms   | 0   | 0.5s |
| dynamic | 78       | 941B/1.2kB | 52.4kB/387kB | 82          | 0.9s | 3.1s | 0ms    | 0   | 0.9s |
| async   | 86       | 941B/1.2kB | 52.7kB/362kB | 81          | 1.0s | 3.1s | 0ms    | 0   | 1.0s |
| busy    | 85       | 941B/1.2kB | 52.5kB/362kB | 42          | 0.9s | 3.1s | 9450ms | 0   | 9.0s |

### Remix app

Commands:

- `npm run build`
- `npm run start`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 17.6kB/55.8kB | 0            | 80          | 1.1s | 3.1s | 0ms | 0.001 | 1.1s |
| layout  | 74       | 18.1kB/57.2kB | 97.1kB/332kB | 79          | 1.2s | 3.1s | 0ms | 0.001 | 1.2s |
| dynamic | 72       | 16.1kB/46.0kB | 144kB/490kB  | 75          | 1.4s | 3.7s | 0ms | 0.001 | 1.4s |
| ssr     | 74       | 18.1kB/52.1kB | 140kB/464kB  | 77          | 1.2s | 3.4s | 0ms | 0.001 | 1.5s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages          | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| -------------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | ------ | ----- | ---- |
| static         | 65       | 17.6kB/55.8kB | 0            | 68          | 2.0s | 4.4s | 0ms    | 0.001 | 2.0s |
| layout         | 74       | 18.1kB/57.2kB | 97.1kB/332kB | 67          | 2.1s | 4.5s | 0ms    | 0.001 | 2.1s |
| dynamic        | 72       | 16.1kB/46.0kB | 144kB/490kB  | 66          | 2.1s | 4.7s | 0ms    | 0.001 | 2.1s |
| ssr            | 74       | 18.1kB/52.1kB | 140kB/464kB  | 66          | 2.1s | 4.7s | 0ms    | 0.001 | 2.1s |
| busy(ssr)      | 75       | 18.1kB/52.3kB | 141kB/465kB  | 60          | 2.1s | 4.6s | 0ms    | 0.001 | 7.6s |
| hydration(ssr) | 75       | 18.1kB/52.3kB | 141kB/466kB  | 31          | 2.0s | 4.5s | 8460ms | 0.001 | 8.5s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages          | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| -------------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static         | 79       | 17.3kB/54.5kB | 0            | 82          | 0.6s | 3.2s | 0ms    | 0   | 0.6s |
| layout         | 88       | 17.9kB/55.9kB | 97.1kB/331kB | 81          | 0.7s | 3.3s | 0ms    | 0   | 0.7s |
| dynamic        | 83       | 16.1kB/45.7kB | 144kB/491kB  | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| ssr            | 86       | 18.2kB/51.9kB | 141kB/465kB  | 79          | 1.0s | 3.3s | 0ms    | 0   | 1.3s |
| busy(ssr)      | 86       | 18.2kB/51.9kB | 141kB/465kB  | 69          | 1.1s | 3.5s | 0ms    | 0   | 6.8s |
| hydration(ssr) | 86       | 18.2kB/51.9kB | 141kB/466kB  | 41          | 0.8s | 3.3s | 9660ms | 0   | 7.4s |

### Solid app

#### Using vite preview

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 1.0kB/706B | 33kB/174kB   | 74          | 1.6s | 3.7s | 0ms | 0.014 | 1.6s |
| layout  | 64       | 1.0kB/706B | 33kB/174kB   | 74          | 1.6s | 3.6s | 0ms | 0.004 | 1.6s |
| dynamic | 63       | 1.0kB/706B | 77.7kB/324kB | 72          | 1.6s | 4.0s | 0ms | 0.004 | 1.6s |
| async   | 69       | 1.0kB/706B | 77.7kB/324kB | 75          | 1.4s | 3.7s | 0ms | 0.004 | 1.4s |

#### Using `serve`

Commands:

- `npm run build`
- `npm run realserve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 1.0kB/706B | 33.8kB/174kB | 80          | 1.0s | 3.2s | 0ms | 0.014 | 1.0s |
| layout  | 64       | 1.0kB/706B | 33.8kB/174kB | 81          | 1.1s | 3.1s | 0ms | 0.004 | 1.1s |
| dynamic | 63       | 1.0kB/706B | 77.7kB/324kB | 79          | 1.1s | 3.5s | 0ms | 0.004 | 1.1s |
| async   | 69       | 1.0kB/706B | 77.7kB/324kB | 80          | 1.0s | 3.2s | 0ms | 0.004 | 1.0s |

#### Using `serve` + async components

Commands:

- `npm run build`
- `npm run realserve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 127kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size       | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67       | 1.0kB/706B | 20.8kB/83.9kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 68       | 1.0kB/706B | 22.7kB/88.3kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 66       | 1.0kB/706B | 69.7kB/249kB  | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 72       | 1.0kB/706B | 67.1kB/227kB  | 80          | 1.0s | 3.3s | 0ms | 0.004 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Requests | Doc size   | JS size       | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | -------- | ---------- | ------------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 67       | 1.0kB/706B | 20.8kB/83.9kB | 67          | 2.0s | 4.5s | 0ms    | 0.004 | 2.0s |
| layout  | 68       | 1.0kB/706B | 22.7kB/88.3kB | 67          | 2.1s | 4.4s | 0ms    | 0.014 | 2.1s |
| dynamic | 66       | 1.0kB/706B | 69.7kB/249kB  | 67          | 2.1s | 4.4s | 0ms    | 0.014 | 2.1s |
| async   | 72       | 1.0kB/706B | 67.1kB/227kB  | 67          | 2.1s | 4.4s | 0ms    | 0.004 | 2.1s |
| busy    | 76       | 1.0kB/706B | 68.2kB/228kB  | 26          | 4.1s | 6.0s | 2000ms | 0.004 | 9.3s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages   | Requests | Doc size  | JS size       | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| ------- | -------- | --------- | ------------- | ----------- | ---- | ---- | ------ | --- | ---- |
| static  | 84       | 996B/685B | 20.9kB/83.1kB | 82          | 0.6s | 3.3s | 0ms    | 0   | 0.6s |
| layout  | 85       | 996B/685B | 22.8kB/87.5kB | 81          | 0.9s | 3.3s | 0ms    | 0   | 0.9s |
| dynamic | 80       | 996B/685B | 26.0kB/249kB  | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| async   | 88       | 996B/685B | 24.8kB/227kB  | 81          | 1.0s | 3.2s | 0ms    | 0   | 1.0s |
| busy    | 87       | 996B/685B | 24.3kB/227kB  | 27          | 3.3s | 5.5s | 2260ms | 0   | 8.6s |

### Sveltekit app

#### Using vite preview

Commands:

- `npm run build`
- `npm run preview`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 118kB/908kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 9.5kB/61.6kB  | 0            | 75          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| layout  | 77       | 10.0kB/63.1kB | 53.0kB/161kB | 70          | 1.9s | 3.8s | 0ms | 0.004 | 1.9s |
| dynamic | 75       | 8.5kB/51.7kB  | 99.9kB/320kB | 69          | 1.9s | 4.2s | 0ms | 0.001 | 1.9s |
| ssr     | 77       | 9.6kB/57.4kB  | 98.9kB/307kB | 71          | 1.6s | 3.9s | 0ms | 0.014 | 2.0s |
| ssg     | 77       | 8.9kB/58.3kB  | 98.9kB/307kB | 72          | 1.6s | 3.9s | 0ms | 0.001 | 1.6s |

#### Using `@sveltejs/adapter-static` + `serve`

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 125kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 9.6kB/61.6kB  | 0            | 81          | 1.1s | 3.0s | 0ms | 0.001 | 1.1s |
| layout  | 77       | 10.1kB/63.1kB | 53.5kB/161kB | 76          | 1.5s | 3.3s | 0ms | 0.001 | 1.5s |
| dynamic | 75       | 8.6kB/51.7kB  | 100kB/322kB  | 74          | 1.5s | 3.7s | 0ms | 0.001 | 1.5s |
| ssg     | 80       | 9.0kB/58.3kB  | 99.5kB/307kB | 78          | 1.2s | 3.4s | 0ms | 0.001 | 1.2s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages          | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| -------------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | ------ | ----- | ---- |
| static         | 65       | 9.6kB/61.6kB  | 0            | 68          | 2.0s | 4.4s | 0ms    | 0.001 | 2.0s |
| layout         | 77       | 10.1kB/63.1kB | 53.5kB/161kB | 66          | 2.1s | 4.5s | 0ms    | 0.001 | 2.1s |
| dynamic        | 75       | 8.6kB/51.7kB  | 100kB/322kB  | 65          | 2.1s | 4.9s | 0ms    | 0.001 | 2.1s |
| ssg            | 80       | 9.0kB/58.3kB  | 99.5kB/307kB | 66          | 2.1s | 4.6s | 0ms    | 0.001 | 2.1s |
| busy(ssg)      | 77       | 9.1kB/58.4kB  | 101kB/310kB  | 30          | 2.2s | 4.6s | 8020ms | 0.001 | 5.7s |
| hydration(ssg) | 77       | 9.1kB/58.4kB  | 100kB/310kB  | 33          | 2.1s | 5.1s | 3760ms | 0.001 | 2.6s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages          | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| -------------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static         | 79       | 9.5kB/60.3kB  | 0            | 82          | 0.5s | 3.3s | 0ms    | 0   | 0.5s |
| layout         | 91       | 10.0kB/61.8kB | 54.0kB/161kB | 82          | 0.7s | 3.2s | 0ms    | 0   | 0.7s |
| dynamic        | 86       | 8.5kB/51.4kB  | 101kB/324kB  | 82          | 0.7s | 3.1s | 0ms    | 0   | 0.7s |
| ssg            | 89       | 9.0kB/58.1kB  | 102kB/310kB  | 82          | 0.7s | 3.2s | 0ms    | 0   | 0.7s |
| busy(ssg)      | 88       | 9.0kB/58.1kB  | 101kB/310kB  | 44          | 0.7s | 3.2s | 9470ms | 0   | 3.6s |
| hydration(ssg) | 88       | 9.0kB/58.0kB  | 101kB/309kB  | 43          | 1.0s | 4.4s | 4550ms | 0   | 2.0s |

### Vue app

#### Using vite preview

Commands:

- `npm run build`
- `npm run preview`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 878B/583B | 51.6kB/219kB | 73          | 1.6s | 3.8s | 0ms | 0.014 | 1.6s |
| layout  | 64       | 878B/583B | 51.6kB/219kB | 74          | 1.6s | 3.6s | 0ms | 0.004 | 1.6s |
| dynamic | 63       | 878B/583B | 95.5kB/369kB | 72          | 1.6s | 4.1s | 0ms | 0.004 | 1.6s |
| async   | 67       | 878B/583B | 95.5kB/369kB | 74          | 1.4s | 3.8s | 0ms | 0.004 | 1.4s |

#### Using `serve`

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 894B/583B | 51.6kB/219kB | 80          | 1.1s | 3.2s | 0ms | 0.004 | 1.1s |
| layout  | 64       | 894B/583B | 51.6kB/219kB | 80          | 1.1s | 3.1s | 0ms | 0.014 | 1.1s |
| dynamic | 63       | 894B/583B | 95.6kB/369kB | 78          | 1.1s | 3.6s | 0ms | 0.004 | 1.1s |
| async   | 67       | 894B/583B | 95.6kB/369kB | 80          | 1.0s | 3.3s | 0ms | 0.004 | 1.0s |

#### Using `serve` + async components

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 126kB/1.0MB | 3.5MB      | 440kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67       | 894B/583B | 41.3kB/136kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 68       | 894B/583B | 43.3kB/138kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 67       | 894B/583B | 90.7kB/298kB | 77          | 1.2s | 3.7s | 0ms | 0.004 | 1.2s |
| async   | 71       | 894B/583B | 89.9kB/291kB | 80          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 67       | 894B/583B | 41.3kB/136kB | 67          | 2.1s | 4.5s | 0ms    | 0.004 | 2.1s |
| layout  | 68       | 894B/583B | 43.3kB/138kB | 67          | 2.1s | 4.4s | 0ms    | 0.014 | 2.1s |
| dynamic | 67       | 894B/583B | 90.7kB/298kB | 66          | 2.1s | 4.7s | 0ms    | 0.014 | 2.1s |
| async   | 71       | 894B/583B | 89.9kB/291kB | 66          | 2.1s | 4.4s | 0ms    | 0.004 | 2.1s |
| busy    | 75       | 894B/583B | 91.1kB/292kB | 26          | 3.9s | 6.0s | 2020ms | 0.003 | 9.3s |

Statistics per page (with Chrome 125.0.6422.76 and some missing images):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT    | CLS | SI   |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | ------ | --- | ---- |
| static  | 84       | 851B/540B | 41.4kB/135kB | 81          | 0.6s | 3.4s | 0ms    | 0   | 0.6s |
| layout  | 85       | 851B/540B | 43.4kB/138kB | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| dynamic | 81       | 851B/540B | 47.0kB/298kB | 80          | 1.0s | 3.3s | 0ms    | 0   | 1.0s |
| async   | 87       | 851B/540B | 48.0kB/292kB | 80          | 1.0s | 3.2s | 0ms    | 0   | 1.0s |
| busy    | 86       | 851B/540B | 47.3kB/292kB | 27          | 3.3s | 5.7s | 2360ms | 0   | 8.8s |

# Update performances

## Introduction

In this part the goal is to compare the ability of the framework to quickly update the DOM.

The problem is that this is quite hard to measure and compare, because updating a little part of the DOM is basically really quick for all frameworks (less than 1ms).

To have some way to measure and compare, the idea was to create a counter that increments in a loop during a fixed period of time (here 1 second).

But the tricky part is that it should not be a basic `for` loop for example, because we want the framework to render the value between each increments.

Also I wanted to use a solution that was almost the same for each framework so I ended up using `MessageChannel` to dispatch a message to increment the counter.  
This technique is quite similar to the node JS `setImmediate` function but for browsers, and gives the following result:

![Increment counter animation](framework-comparison.gif)

To try it yourself you can go to the `/counter` page for the following frameworks:

- Vanilla JS (`astro-app`)
- Angular (`angular-app`)
- Angular with signals (`angular-zoneless-app`)
- Qwik (`qwik-app`)
- React (`react-app`)
- Solid (`solis-app`)
- Svelte (`sveltekit-app`)
- Vue (`vue-app`)

The `/counter` was not implemented in Next, Nuxt, Remix or Gatsby because all those frameworks use either React or Vue in the frontend part.  
The result should be similar to the corresponding frontend technology used.

## Tests

The tests were made on my system which has the following characteristic:

- OS: Linux 5.19 Ubuntu 22.04.2 LTS 22.04.2 LTS (Jammy Jellyfish)
- CPU: (8) x64 11th Gen Intel(R) Core(TM) i5-1145G7 @ 2.60GHz
- Memory: 32 GB

In the results I recorded:

- the counter number (that represents the number of updates the framework can do within 1s) for 10 tests using the production build.
- then I calculated a approximate average.

The higher the numbers are, the better.

## Results

Here are the results for 10 tests using the production build (with Chrome 114.0.5735.198):

| Framework  | #1     | #2     | #3     | #4     | #5     | #6     | #7     | #8     | #9     | #10    |     Moy |
| ---------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------: |
| JS (astro) | 180263 | 184498 | 180515 | 183130 | 181785 | 187459 | 183429 | 184006 | 186710 | 180995 | ~183300 |
| Angular    | 3312   | 3311   | 2960   | 3244   | 3134   | 3250   | 3364   | 3228   | 3306   | 3272   |   ~3200 |
| Qwik       | 76107  | 79209  | 79447  | 79365  | 76764  | 79439  | 78580  | 79925  | 80502  | 80103  |  ~79000 |
| React      | 1938   | 2122   | 2219   | 2364   | 2368   | 2299   | 2311   | 2417   | 2302   | 2309   |   ~2300 |
| Solid      | 168062 | 171013 | 175605 | 174752 | 170880 | 172523 | 171351 | 172993 | 170332 | 169980 | ~171700 |
| Svelte     | 126536 | 134018 | 136673 | 137853 | 135600 | 138685 | 136942 | 136943 | 134005 | 136293 | ~135400 |
| Vue        | 78924  | 83854  | 84252  | 83616  | 83020  | 84608  | 83578  | 83658  | 85105  | 82963  |  ~83400 |

Second batch with Chrome 116.0.5845.96:

| Framework  | #1     | #2     | #3     | #4     | #5     | #6     | #7     | #8     | #9     | #10    |     Moy |
| ---------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------: |
| JS (astro) | 174826 | 174231 | 170129 | 175555 | 176947 | 175290 | 172952 | 174353 | 170748 | 175374 | ~174000 |
| Angular    | 2782   | 3132   | 3246   | 3237   | 3218   | 3075   | 3096   | 3040   | 3250   | 3133   |   ~3100 |
| Qwik       | 70937  | 70671  | 71225  | 70031  | 71001  | 70906  | 70961  | 69775  | 72061  | 71650  |  ~70900 |
| React      | 1992   | 2019   | 2331   | 2347   | 2264   | 2323   | 2316   | 2221   | 2315   | 2246   |   ~2200 |
| Solid      | 142492 | 151921 | 148178 | 149183 | 152139 | 151963 | 147109 | 145726 | 149721 | 145872 | ~148400 |
| Svelte     | 123196 | 124066 | 125866 | 125257 | 123423 | 118916 | 126096 | 123017 | 125038 | 123117 | ~123800 |
| Vue        | 74406  | 77208  | 78163  | 78539  | 77928  | 77157  | 77175  | 77820  | 77880  | 77361  |  ~77400 |

Third batch for new Angular with signals using Chrome 125.0.6422.76 (adding Alpine.js, Angular with signals and Preact):

| Framework            | #1     | #2     | #3     | #4     | #5     | #6     | #7     | #8     | #9     | #10    |     Moy |
| -------------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------: |
| Alpine.js            | 57470  | 60698  | 61561  | 59736  | 59930  | 61216  | 62329  | 61395  | 61138  | 61225  |  ~60600 |
| JS (astro)           | 209420 | 204963 | 209047 | 193645 | 200839 | 208963 | 210568 | 209604 | 208557 | 206534 | ~206200 |
| Angular              | 973    | 1079   | 1071   | 1002   | 1019   | 1127   | 1119   | 1122   | 1133   | 976    |   ~1100 |
| Angular with signals | 46684  | 49178  | 48688  | 50357  | 49664  | 47479  | 49309  | 48877  | 49606  | 49128  |  ~48900 |
| Qwik                 | 91046  | 93584  | 93585  | 92187  | 90990  | 91354  | 91835  | 93811  | 94153  | 92505  |  ~92500 |
| Preact               | 1679   | 1736   | 1740   | 1725   | 1746   | 1780   | 1779   | 1783   | 1826   | 1749   |   ~1800 |
| React                | 2591   | 2393   | 2390   | 2573   | 2561   | 2518   | 2542   | 2520   | 2541   | 2487   |   ~2500 |
| Solid                | 182110 | 188771 | 186447 | 187892 | 187985 | 189573 | 188348 | 191138 | 190856 | 172008 | ~186500 |
| Svelte               | 146677 | 155088 | 151699 | 153530 | 152954 | 152077 | 151122 | 152078 | 153716 | 153163 | ~152200 |
| Vue                  | 55405  | 61152  | 64446  | 57971  | 62819  | 63234  | 63017  | 62465  | 64879  | 61313  |  ~61700 |

Fourth batch with Chrome 128.0.6613.137 (Adding Owl):

| Framework            | #1     | #2     | #3     | #4     | #5     | #6     | #7     | #8     | #9     | #10    |     Moy |
| -------------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------: |
| Alpine.js            | 83039  | 83601  | 82670  | 85285  | 84082  | 81886  | 82818  | 84942  | 85241  | 81249  |  ~83500 |
| JS (astro)           | 159963 | 163782 | 161964 | 161054 | 159611 | 159359 | 158439 | 162481 | 161562 | 162014 | ~161000 |
| Angular              | 2783   | 3149   | 3475   | 3370   | 3334   | 3414   | 3357   | 3345   | 3150   | 3221   |   ~3300 |
| Angular with signals | 39820  | 41821  | 43593  | 43380  | 42841  | 42775  | 42037  | 44322  | 42221  | 43237  |  ~42600 |
| Owl                  | 114475 | 113804 | 115880 | 116760 | 115459 | 115278 | 114605 | 115966 | 115791 | 115819 | ~115400 |
| Qwik                 | 69681  | 76307  | 76290  | 74496  | 77450  | 77602  | 73326  | 77388  | 77329  | 77812  |  ~75800 |
| Preact               | 1156   | 1227   | 1129   | 1224   | 1136   | 1209   | 1216   | 1205   | 1197   | 1205   |   ~1200 |
| React                | 2021   | 2235   | 2067   | 2245   | 2255   | 2203   | 2153   | 2295   | 2283   | 2214   |   ~2200 |
| Solid                | 146954 | 156324 | 159909 | 156128 | 159501 | 155287 | 156894 | 157910 | 155464 | 157851 | ~156200 |
| Svelte               | 123545 | 128608 | 128116 | 136790 | 135788 | 147408 | 148084 | 151280 | 150578 | 152724 | ~140300 |
| Vue                  | 86985  | 86437  | 92002  | 91710  | 89047  | 91476  | 90139  | 91346  | 90768  | 89162  |  ~89900 |

### React

We clearly see here that React is the worst and this is due to the usage of the virtual DOM.

I intentionally put the counter state in the root page component, and in that case React needs to generate the virtual DOM for the entire page, then compare the whole generated tree to the real DOM to then only update the counter text.  
We can improve the React performances by creating a component that only contains the DOM for the counter and the start button.

This better React version is accessible on the route `/better-counter`, and here are the results (with Chrome 114.0.5735.198):

| Framework | #1    | #2    | #3    | #4    | #5    | #6    | #7    | #8    | #9    | #10   |    Moy |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----: |
| React 2   | 33077 | 34264 | 34396 | 34648 | 34670 | 33541 | 34443 | 32920 | 34416 | 34235 | ~34100 |

Second batch with Chrome 116.0.5845.96:

| Framework | #1    | #2    | #3    | #4    | #5    | #6    | #7    | #8    | #9    | #10   |    Moy |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----: |
| React 2   | 32804 | 34820 | 35459 | 35419 | 35090 | 35283 | 34795 | 35476 | 34775 | 34513 | ~34800 |

Third batch with Chrome 125.0.6422.76:

| Framework | #1    | #2    | #3    | #4    | #5    | #6    | #7    | #8    | #9    | #10   |    Moy |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----: |
| React 2   | 30606 | 32299 | 31672 | 31742 | 31325 | 32665 | 31826 | 29185 | 30855 | 29335 | ~31200 |

Fourth batch with Chrome 128.0.6613.137:

| Framework | #1    | #2    | #3    | #4    | #5    | #6    | #7    | #8    | #9    | #10   |    Moy |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----: |
| React 2   | 31368 | 32355 | 33168 | 32825 | 32636 | 32972 | 32927 | 32748 | 33173 | 32845 | ~32700 |

It is more than 10 times faster than the previous implementation.

### Preact

This is exactly the same problem as with React.

Here are the results of the `/better-counter` page with Chrome 120.0.6099.62:

| Framework | #1    | #2    | #3    | #4    | #5    | #6    | #7    | #8    | #9    | #10   |    Moy |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----: |
| Preact 2  | 65360 | 70167 | 70675 | 69853 | 70717 | 69172 | 70469 | 69436 | 70471 | 68423 | ~69500 |

### Angular (without signals)

Angular (without signals) is also quite slow (compared to the others).

Trying to do the same optimization as for React does not improve the performance.  
I suspect this is more due to the usage of `NgZone` that is needed to tell Angular to update the template when the message from `MessageChannel` is received.

If you know a way to improve the performance here (without using signals) I would be glad to hear about.
