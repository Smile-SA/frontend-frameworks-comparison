- use serve (gzip)
- Implements lazy loading ? (client:visible for Astro)
- Qwik SSG

* FCP: First Contentful Paint - First Contentful Paint marks the time at which the first text or image is painted.
* LCP: Largest Contentful Paint - Largest Contentful Paint marks the time at which the largest text or image is painted.
* TBT: Total Blocking Time - Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.
* CLS: Cumulative Layout Shift - Cumulative Layout Shift measures the movement of visible elements within the viewport.
* SI: Speed Index - Speed Index shows how quickly the contents of a page are visibly populated.

## React app (Vite)

### Using vite preview

- npm run build
- npm run preview

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 118k/908k | 3.5M       | 979k/977k |

Statistics per page:

| Pages   | Requests | Doc size  | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67       | 1.0k/1.3k | 116k/469k | 75          | 1.5s | 3.6s | 0ms | 0.014 | 1.5s |
| layout  | 67       | 1.0k/1.3k | 116k/469k | 75          | 1.5s | 3.6s | 0ms | 0.014 | 1.5s |
| dynamic | 67       | 1.0k/1.3k | 116k/469k | 72          | 1.6s | 4.1s | 0ms | 0.014 | 1.6s |
| async   | 71       | 1.0k/1.3k | 116k/469k | 74          | 1.5s | 3.8s | 0ms | 0.004 | 1.5s |

### Using `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 119k/908k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size  | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 67       | 1.0k/1.3k | 116k/469k | 80          | 1.1s | 3.2s | 0ms | 0.004 | 1.1s |
| layout  | 67       | 1.0k/1.3k | 116k/469k | 79          | 1.2s | 3.3s | 0ms | 0.004 | 1.2s |
| dynamic | 65       | 1.0k/1.3k | 116k/469k | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 71       | 1.0k/1.3k | 116k/469k | 79          | 1.1s | 3.4s | 0ms | 0.014 | 1.1s |

### Using `serve` + async components

- npm run build
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 119k/908k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size  | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 69       | 1.0k/1.3k | 105k/373k | 80          | 1.1s | 3.2s | 0ms | 0.004 | 1.1s |
| layout  | 70       | 1.0k/1.3k | 107k/375k | 80          | 1.1s | 3.1s | 0ms | 0.004 | 1.1s |
| dynamic | 68       | 1.0k/1.3k | 110k/384k | 79          | 1.1s | 3.4s | 0ms | 0.004 | 1.1s |
| async   | 74       | 1.0k/1.3k | 107k/359k | 79          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |

## Gatsby app

- npm run build
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 119k/908k | 3.5M       | 439k/977k |

Statistics per page:

| Pages   | Requests | Doc size   | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 9.5k/57.0k | 79.7k/227k | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 71       | 9.5k/57.2k | 81.4k/279k | 82          | 0.9s | 3.1s | 0ms | 0.001 | 0.9s |
| dynamic | 73       | 8.3k/46.2k | 128k/435k  | 80          | 1.0s | 3.4s | 0ms | 0.004 | 1.0s |
| ssr     | 73       | 8.7k/52.5k | 126k/410k  | 79          | 1.0s | 3.4s | 0ms | 0.014 | 1.3s |
| ssg     | 74       | 8.2k/46.5k | 126k/410k  | 80          | 1.0s | 3.4s | 0ms | 0.014 | 1.0s |

## Next app (Using Pages Router)

- npm run build
- npm run start

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 119k/908k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size   | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 74       | 8.8k/56.0k | 86.7k/310k | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 75       | 8.9k/56.3k | 88.5k/312k | 81          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 7.5k/45.1k | 135k/469k  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 76       | 8.1k/51.3k | 133k/443k  | 78          | 1.0s | 3.5s | 0ms | 0.001 | 1.4s |
| ssg     | 76       | 8.1k/51.3k | 133k/443k  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |

## Next app (Using App Router)

- npm run build
- npm run start

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 119k/909k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 70       | 19.6k/142k  | 79.0k/262k | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| layout  | 74       | 15.5k/106k  | 91.1k/314k | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| dynamic | 75       | 11.0k/65.5k | 186k/644k  | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| ssr     | 76       | 13.6k/71.2k | 179k/609k  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssg     | 76       | 12.4k/70.4k | 180k/609k  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

# Nuxt app

### Using server file

- npm run build
- node .output/server/index.mjs

Common statistics:

| CSS size   | Image size | font size |
| ---------- | ---------- | --------- |
| 32.6k/181k | 3.5M       | 979k/977k |

Statistics per page:

| Pages   | Requests | Doc size  | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 754k/754k | 205k/203k | 67          | 2.1s | 4.2s | 0ms | 0.004 | 2.1s |
| layout  | 71       | 755k/754k | 207k/205k | 67          | 2.1s | 4.2s | 0ms | 0.004 | 2.1s |
| dynamic | 70       | 744k/744k | 261k/362k | 66          | 2.2s | 4.5s | 0ms | 0.004 | 2.2s |
| ssr     | 71       | 751k/750k | 266k/367k | 66          | 2.1s | 4.4s | 0ms | 0.004 | 2.1s |
| ssg     | 71       | 751k/750k | 266k/367k | 66          | 2.1s | 4.4s | 0ms | 0.004 | 2.1s |

### Using vite preview

- npm run build
- npm run preview

Common statistics:

| CSS size   | Image size | font size |
| ---------- | ---------- | --------- |
| 32.6k/181k | 3.5M       | 979k/977k |

Statistics per page:

| Pages   | Requests | Doc size  | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 754k/754k | 205k/203k | 67          | 2.1s | 4.2s | 0ms | 0.004 | 2.1s |
| layout  | 71       | 755k/754k | 207k/205k | 67          | 2.1s | 4.2s | 0ms | 0.004 | 2.1s |
| dynamic | 70       | 744k/744k | 261k/362k | 66          | 2.1s | 4.5s | 0ms | 0.004 | 2.1s |
| ssg     | 71       | 751k/750k | 266k/367k | 66          | 2.2s | 4.5s | 0ms | 0.004 | 2.2s |

### Using `serve`

- npm run generate
- npm run serve

Common statistics:

| CSS size   | Image size | font size |
| ---------- | ---------- | --------- |
| 32.6k/181k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size   | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 89.8k/754k | 66.5k/204k | 80          | 1.1s | 3.1s | 0ms | 0.004 | 1.1s |
| layout  | 71       | 89.8k/754k | 67.7k/206k | 80          | 1.1s | 3.1s | 0ms | 0.004 | 1.1s |
| dynamic | 70       | 88.7k/744k | 116k/362k  | 79          | 1.2s | 3.4s | 0ms | 0.004 | 1.2s |
| ssg     | 71       | 89.5k/750k | 120k/368k  | 79          | 1.1s | 3.4s | 0ms | 0.004 | 1.1s |

## Remix app

- npm run build
- npm run start

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 118k/909k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 17.6k/55.8k | 0          | 82          | 1.0s | 3.0s | 0ms | 0.001 | 1.0s |
| layout  | 73       | 18.1k/57.1k | 96.3k/332k | 80          | 1.2s | 3.1s | 0ms | 0.001 | 1.2s |
| dynamic | 71       | 16.2k/46.1k | 143k/488k  | 79          | 1.2s | 3.3s | 0ms | 0.001 | 1.2s |
| ssr     | 73       | 18.2k/52.2k | 140k/462k  | 78          | 1.1s | 3.4s | 0ms | 0.001 | 1.4s |

## Astro app (With React Components)

### Using `client:load` directive

- npm run build
- npm run preview

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 747k/895k | 3.5M       | 979k/977k |

Statistics per page:

| Pages   | Requests | Doc size    | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 81.4k/81.1k | 0         | 68          | 1.9s | 4.3s | 0ms | 0.001 | 1.9s |
| layout  | 68       | 70.1k/69.6k | 167k/165k | 68          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic | 71       | 52.0k/51.8k | 255k/356k | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| ssr     | 73       | 57.7k/56.8k | 231k/331k | 65          | 2.1s | 4.9s | 0ms | 0.001 | 2.1s |
| ssg     | 73       | 57.1k/56.8k | 231k/331k | 65          | 2.1s | 4.8s | 0ms | 0.001 | 2.1s |

### Using `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 116k/895k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1k/81.1k | 0          | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 69       | 10.6k/69.6k | 54.9k/174k | 81          | 1.0s | 3.2s | 0ms | 0.004 | 1.0s |
| dynamic | 71       | 8.9k/51.8k  | 107k/356k  | 79          | 1.1s | 3.4s | 0ms | 0.001 | 1.1s |
| ssg     | 73       | 9.6k/56.8k  | 104k/331k  | 79          | 1.1s | 3.5s | 0ms | 0.001 | 1.1s |

No SSR here (because it needs a server).

### Using `serve` + `client:visible` directive

- npm run build
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 116k/895k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1k/81.1k | 0          | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 68       | 10.7k/69.8k | 52.5k/165k | 82          | 0.9s | 3.1s | 0ms | 0.004 | 0.9s |
| dynamic | 49       | 8.9k/52.0k  | 97.1k/313k | 80          | 1.1s | 3.1s | 0ms | 0.001 | 1.1s |
| ssg     | 50       | 9.7k/57.0k  | 97.1k/313k | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |

No SSR again here.

## Astro app (Without React Components)

- npm run build
- npm run preview

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 747k/895k | 3.5M       | 979k/977k |

Statistics per page (`client:load`):

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 80.7k/80.4k | 0          | 68          | 1.9s | 4.3s | 0ms | 0.001 | 1.9s |
| layout  | 64       | 81.4k/80.9k | 2.3k/2.0k  | 68          | 1.9s | 4.3s | 0ms | 0.001 | 1.9s |
| dynamic | 64       | 67.1k/66.8k | 68.3k/171k | 68          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| ssr     | 66       | 69.9k/67.8k | 51.8k/155k | 68          | 1.9s | 4.6s | 0ms | 0.001 | 1.9s |
| ssg     | 66       | 68.2k/67.8k | 51.8k/155k | 69          | 1.8s | 4.6s | 0ms | 0.001 | 1.8s |

### Using `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 747k/895k | 3.5M       | 979k/977k |

Statistics per page (`client:load`):

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1k/80.4k | 0          | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 64       | 10.2k/80.9k | 1.0k/2.0k  | 82          | 1.0s | 3.0s | 0ms | 0.001 | 1.0s |
| dynamic | 64       | 9.2k/66.8k  | 49.9k/171k | 80          | 1.0s | 3.3s | 0ms | 0.001 | 1.0s |
| ssg     | 66       | 9.2k/67.8k  | 47.8k/155k | 81          | 0.9s | 3.4s | 0ms | 0.001 | 0.9s |

## Qwik app

### Using vite preview

- npm run preview

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 116k/895k | 3.5M       | 979k/977k |

Statistics per page:

| Pages   | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 9.2k/56.3k  | 0          | 76          | 1.4s | 3.5s | 0ms | 0.004 | 1.4s |
| layout  | 64       | 11.5k/62.3k | 0          | 76          | 1.4s | 3.5s | 0ms | 0.004 | 1.4s |
| dynamic | 66       | 10.5k/52.8k | 44.2k/214k | 76          | 1.3s | 3.7s | 0ms | 0.001 | 1.3s |
| ssr     | 67       | 10.6k/53.8k | 44.2k/198k | 76          | 1.1s | 3.8s | 0ms | 0.001 | 1.4s |

### Using Node.js Express Server Adapter

- npm run build.server
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 747k/895k | 3.5M       | 979k/977k |

Statistics per page:

| Pages   | Requests | Doc size      | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 56.5.2k/56.3k | 0          | 68          | 1.9s | 4.4s | 0ms | 0.001 | 1.9s |
| layout  | 64       | 62.7k/62.3k   | 0          | 68          | 1.9s | 4.3s | 0ms | 0.004 | 1.9s |
| dynamic | 66       | 53.0k/52.8k   | 44.2k/214k | 68          | 1.9s | 4.6s | 0ms | 0.001 | 1.9s |
| ssr     | 68       | 54.0k/53.8k   | 44.2k/198k | 68          | 1.9s | 4.7s | 0ms | 0.001 | 1.9s |

### Using Static site Adapter + `serve`

- npm run build.server
- npm run serve

Common statistics:

| CSS size  | Image size | font size |
| --------- | ---------- | --------- |
| 116k/895k | 3.5M       | 438k/977k |

Statistics per page:

| Pages    | Requests | Doc size    | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| -------- | -------- | ----------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static   | 64       | 9.4k/56.3k  | 0          | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout   | 64       | 11.6k/62.3k | 0          | 82          | 0.9s | 3.1s | 0ms | 0.001 | 0.9s |
| dynamic  | 66       | 10.6k/52.8k | 44.2k/214k | 82          | 0.8s | 3.2s | 0ms | 0.001 | 0.8s |
| ssr(ssg) | 68       | 10.8k/53.8k | 44.2k/198k | 81          | 0.9s | 3.2s | 0ms | 0.001 | 0.9s |
