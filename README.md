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

### Angular app

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/884kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 66       | 1.0kB/1.2kB | 111kB/404kB | 81          | 1.0s | 3.1s | 0ms | 0.004 | 1.0s |
| layout  | 66       | 1.0kB/1.2kB | 111kB/404kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 65       | 1.0kB/1.2kB | 154kB/553kB | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 70       | 1.0kB/1.2kB | 154kB/553kB | 78          | 1.2s | 3.4s | 0ms | 0.014 | 1.2s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 68          | 2.0s | 4.4s | 0ms    | 0.014 | 2.0s |
| layout  | 67          | 2.0s | 4.2s | 0ms    | 0.004 | 2.0s |
| dynamic | 66          | 2.1s | 4.5s | 0ms    | 0.004 | 2.1s |
| async   | 67          | 2.0s | 4.5s | 0ms    | 0.004 | 2.0s |
| busy    | 26          | 4.1s | 6.2s | 2050ms | 0.014 | 9.5s |

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
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/80.4kB | 0            | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 64       | 10.2kB/80.9kB | 1.0kB/2.0kB  | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| dynamic | 65       | 9.1kB/66.6kB  | 50.8kB/174kB | 78          | 1.2s | 3.5s | 0ms | 0.001 | 1.2s |
| ssg     | 67       | 9.1kB/67.6kB  | 48.7kB/158kB | 80          | 1.0s | 3.3s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| layout  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| ssg     | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| busy    | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |

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
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/81.1kB | 0            | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 69       | 10.7kB/69.8kB | 53.1kB/165kB | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 48       | 8.9kB/51.9kB  | 53.1kB/165kB | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| ssg     | 49       | 9.7kB/57.0kB  | 53.1kB/165kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| layout  | 66          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |
| dynamic | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| ssg     | 67          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |
| busy    | 67          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |

No SSR again here.

### Gatsby app

Commands:

- `npm run build`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 439kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 72       | 9.5kB/57.0kB | 79.7kB/227kB | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| layout  | 73       | 9.5kB/57.2kB | 81.4kB/279kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| dynamic | 71       | 8.2kB/46.1kB | 127kB/437kB  | 78          | 1.1s | 3.6s | 0ms | 0.001 | 1.1s |
| ssr     | 73       | 8.6kB/52.3kB | 125kB/411kB  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.4s |
| ssg     | 74       | 8.1kB/46.4kB | 125kB/411kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 68          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| layout  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic | 67          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |
| ssr     | 67          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |
| ssg     | 67          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |
| busy    | 64          | 1.9s | 4.8s | 0ms | 0.001 | 2.8s |

### Next app (Using App Router)

Commands:

- `npm run build`
- `npm run start`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/909kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 70       | 19.6kB/142kB  | 79.0kB/262kB | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 73       | 15.5kB/106kB  | 88.3kB/307kB | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 10.8kB/65.1kB | 138kB/490kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 74       | 13.5kB/70.9kB | 131kB/455kB  | 81          | 0.9s | 3.3s | 0ms | 0.001 | 0.9s |
| ssg     | 74       | 11.6kB/70.1kB | 131kB/455kB  | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| layout  | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic | 66          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |
| ssr     | 67          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |
| ssg     | 68          | 1.9s | 4.6s | 0ms | 0.001 | 1.9s |
| busy    | 66          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |

### Next app (Using Pages Router)

Commands:

- `npm run build`
- `npm run start`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 74       | 8.8kB/56.0kB | 87.6kB/312kB | 79          | 1.2s | 3.3s | 0ms | 0.001 | 1.2s |
| layout  | 75       | 8.9kB/56.3kB | 89.4kB/314kB | 81          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 7.5kB/45.1kB | 135kB/472kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 76       | 8.1kB/51.3kB | 132kB/446kB  | 78          | 1.0s | 3.5s | 0ms | 0.001 | 1.6s |
| ssg     | 76       | 8.1kB/51.3kB | 132kB/446kB  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 68          | 1.9s | 4.4s | 0ms | 0.001 | 1.9s |
| layout  | 68          | 1.9s | 4.4s | 0ms | 0.001 | 1.9s |
| dynamic | 66          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |
| ssr     | 67          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |
| ssg     | 66          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |
| busy    | 68          | 1.9s | 4.6s | 0ms | 0.001 | 1.9s |

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

| CSS size     | Image size | font size   |
| ------------ | ---------- | ----------- |
| 32.6kB/181kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 89.8kB/754kB | 66.4kB/203kB | 82          | 0.9s | 3.0s | 0ms | 0.004 | 0.9s |
| layout  | 71       | 89.9kB/755kB | 67.8kB/206kB | 82          | 1.0s | 3.0s | 0ms | 0.004 | 1.0s |
| dynamic | 70       | 88.6kB/744kB | 115kB/365kB  | 81          | 0.9s | 3.2s | 0ms | 0.001 | 0.9s |
| ssg     | 71       | 89.4kB/750kB | 117kB/354kB  | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 68          | 1.9s | 4.4s | 0ms | 0.001 | 1.9s |
| layout  | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| dynamic | 66          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |
| ssg     | 67          | 2.0s | 4.6s | 0ms | 0.001 | 2.0s |
| busy    | 67          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |

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

- `npm run build.server`
- `npm run serve`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages    | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| -------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static   | 64       | 9.4kB/56.3kB  | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout   | 64       | 11.6kB/62.3kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| dynamic  | 43       | 10.5kB/52.7kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| ssr(ssg) | 44       | 10.6kB/53.6kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| -------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static   | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout   | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| dynamic  | 68          | 2.0s | 4.3s | 0ms | 0.001 | 2.0s |
| ssr(ssg) | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| busy     | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |

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
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 69       | 949B/1.2kB | 61.1kB/225kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 69       | 949B/1.2kB | 62.9kB/228kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 68       | 949B/1.2kB | 110kB/386kB  | 77          | 1.3s | 3.6s | 0ms | 0.004 | 1.3s |
| async   | 74       | 949B/1.2kB | 107kB/361kB  | 79          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 67          | 2.0s | 4.4s | 0ms    | 0.004 | 2.0s |
| layout  | 67          | 2.0s | 4.4s | 0ms    | 0.004 | 2.0s |
| dynamic | 68          | 1.9s | 4.5s | 0ms    | 0.004 | 1.9s |
| async   | 67          | 2.0s | 4.3s | 0ms    | 0.004 | 2.0s |
| busy    | 32          | 2.0s | 4.3s | 8490ms | 0.003 | 8.3s |

### Remix app

Commands:

- `npm run build`
- `npm run start`

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 118kB/909kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 17.6kB/55.8kB | 0            | 80          | 1.1s | 3.1s | 0ms | 0.001 | 1.1s |
| layout  | 74       | 18.1kB/57.2kB | 97.1kB/332kB | 79          | 1.2s | 3.1s | 0ms | 0.001 | 1.2s |
| dynamic | 72       | 16.1kB/46.0kB | 144kB/490kB  | 75          | 1.4s | 3.7s | 0ms | 0.001 | 1.4s |
| ssr     | 74       | 18.1kB/52.1kB | 140kB/464kB  | 77          | 1.2s | 3.4s | 0ms | 0.001 | 1.5s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 67          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |
| dynamic | 66          | 2.1s | 4.7s | 0ms | 0.001 | 2.1s |
| ssr     | 66          | 2.1s | 4.7s | 0ms | 0.001 | 2.1s |
| busy    | 64          | 2.0s | 4.6s | 0ms | 0.001 | 2.9s |

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
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size   | JS size       | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67       | 1.0kB/706B | 20.8kB/83.9kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 68       | 1.0kB/706B | 22.7kB/88.3kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 66       | 1.0kB/706B | 69.7kB/249kB  | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 72       | 1.0kB/706B | 67.1kB/227kB  | 80          | 1.0s | 3.3s | 0ms | 0.004 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 67          | 2.0s | 4.5s | 0ms    | 0.004 | 2.0s |
| layout  | 67          | 2.1s | 4.4s | 0ms    | 0.014 | 2.1s |
| dynamic | 67          | 2.1s | 4.4s | 0ms    | 0.014 | 2.1s |
| async   | 67          | 2.1s | 4.4s | 0ms    | 0.004 | 2.1s |
| busy    | 26          | 4.1s | 6.0s | 2000ms | 0.004 | 9.3s |

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
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 9.6kB/61.6kB  | 0            | 81          | 1.1s | 3.0s | 0ms | 0.001 | 1.1s |
| layout  | 77       | 10.1kB/63.1kB | 53.5kB/161kB | 76          | 1.5s | 3.3s | 0ms | 0.001 | 1.5s |
| dynamic | 75       | 8.6kB/51.7kB  | 100kB/322kB  | 74          | 1.5s | 3.7s | 0ms | 0.001 | 1.5s |
| ssg     | 80       | 9.0kB/58.3kB  | 99.5kB/307kB | 78          | 1.2s | 3.4s | 0ms | 0.001 | 1.2s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 68          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 66          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |
| dynamic | 65          | 2.1s | 4.9s | 0ms | 0.001 | 2.1s |
| ssg     | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| busy    | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |

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
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page (with Chrome 114.0.5735.198):

| Pages   | Requests | Doc size  | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67       | 894B/583B | 41.3kB/136kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 68       | 894B/583B | 43.3kB/138kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 67       | 894B/583B | 90.7kB/298kB | 77          | 1.2s | 3.7s | 0ms | 0.004 | 1.2s |
| async   | 71       | 894B/583B | 89.9kB/291kB | 80          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |

Statistics per page (with Chrome 116.0.5845.96):

| Pages   | Performance | FCP  | LCP  | TBT    | CLS   | SI   |
| ------- | ----------- | ---- | ---- | ------ | ----- | ---- |
| static  | 67          | 2.1s | 4.5s | 0ms    | 0.004 | 2.1s |
| layout  | 67          | 2.1s | 4.4s | 0ms    | 0.014 | 2.1s |
| dynamic | 66          | 2.1s | 4.7s | 0ms    | 0.014 | 2.1s |
| async   | 66          | 2.1s | 4.4s | 0ms    | 0.004 | 2.1s |
| busy    | 26          | 3.9s | 6.0s | 2020ms | 0.003 | 9.3s |

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
- Chrome: 114.0.5735.198

In the results I recorded:

- the counter number (that represents the number of updates the framework can do within 1s) for 10 tests using the production build.
- then I calculated a approximate average.

The higher the numbers are, the better.

## Results

Here are the results for 10 tests using the production build:

| Framework  | #1     | #2     | #3     | #4     | #5     | #6     | #7     | #8     | #9     | #10    |     Moy |
| ---------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------: |
| JS (astro) | 180263 | 184498 | 180515 | 183130 | 181785 | 187459 | 183429 | 184006 | 186710 | 180995 | ~183300 |
| Angular    | 3312   | 3311   | 2960   | 3244   | 3134   | 3250   | 3364   | 3228   | 3306   | 3272   |   ~3200 |
| Qwik       | 76107  | 79209  | 79447  | 79365  | 76764  | 79439  | 78580  | 79925  | 80502  | 80103  |  ~79000 |
| React      | 1938   | 2122   | 2219   | 2364   | 2368   | 2299   | 2311   | 2417   | 2302   | 2309   |   ~2300 |
| Solid      | 168062 | 171013 | 175605 | 174752 | 170880 | 172523 | 171351 | 172993 | 170332 | 169980 | ~171700 |
| Svelte     | 126536 | 134018 | 136673 | 137853 | 135600 | 138685 | 136942 | 136943 | 134005 | 136293 | ~135400 |
| Vue        | 78924  | 83854  | 84252  | 83616  | 83020  | 84608  | 83578  | 83658  | 85105  | 82963  |  ~83400 |

### React

We clearly see here that React is the worst and this is due to the usage of the virtual DOM.

I intentionally put the counter state in the root page component, and in that case React needs to generate the virtual DOM for the entire page, then compare the whole generated tree to the real DOM to then only update the counter text.  
We can improve the React performances by creating a component that only contains the DOM for the counter and the start button.

This better React version is accessible on the route `/better-counter`, and here are the results:

| Framework | #1    | #2    | #3    | #4    | #5    | #6    | #7    | #8    | #9    | #10   |    Moy |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | -----: |
| React 2   | 33077 | 34264 | 34396 | 34648 | 34670 | 33541 | 34443 | 32920 | 34416 | 34235 | ~34100 |

It is more than 10 times faster than the previous implementation.

### Angular

Angular is also quite slow (compared to the others).

Trying to do the same optimization as for React does not improve the performance.  
I suspect this is more due to the usage of `NgZone` that is needed to tell Angular to update the template when the message from `MessageChannel` is received.

If you know a way to improve the performance here I would be glad to hear about.
