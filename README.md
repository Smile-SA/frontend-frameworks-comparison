Implements lazy loading ?

- FCP: First Contentful Paint - First Contentful Paint marks the time at which the first text or image is painted.
- LCP: Largest Contentful Paint - Largest Contentful Paint marks the time at which the largest text or image is painted.
- TBT: Total Blocking Time - Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.
- CLS: Cumulative Layout Shift - Cumulative Layout Shift measures the movement of visible elements within the viewport.
- SI: Speed Index - Speed Index shows how quickly the contents of a page are visibly populated.

## React app (Vite)

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

## Gatsby app

- npm run build
- npm run serve

Common statistics:

| Doc size | CSS size  | Image size | font size |
| -------- | --------- | ---------- | --------- |
| 9.5k/57k | 119k/908k | 3.5M       | 439k/977k |

Statistics per page:

| Pages   | Requests | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 79.7k/227k | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 71       | 81.4k/279k | 82          | 0.9s | 3.1s | 0ms | 0.001 | 0.9s |
| dynamic | 73       | 128k/435k  | 80          | 1.0s | 3.4s | 0ms | 0.004 | 1.0s |
| ssr     | 73       | 126k/410k  | 79          | 1.0s | 3.4s | 0ms | 0.014 | 1.3s |
| ssg     | 74       | 126k/410k  | 80          | 1.0s | 3.4s | 0ms | 0.014 | 1.0s |

## Next app (Using Pages Router)

- npm run build
- npm run start

Common statistics:

| Doc size | CSS size  | Image size | font size |
| -------- | --------- | ---------- | --------- |
| 8.8k/56k | 119k/908k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 74       | 86.7k/310k | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 75       | 88.5k/312k | 81          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 135k/469k  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 76       | 133k/443k  | 78          | 1.0s | 3.5s | 0ms | 0.001 | 1.4s |
| ssg     | 76       | 133k/443k  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |

## Next app (Using App Router)

- npm run build
- npm run start

Common statistics:

| Doc size   | CSS size  | Image size | font size |
| ---------- | --------- | ---------- | --------- |
| 19.6k/142k | 119k/909k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 70       | 79.0k/262k | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| layout  | 74       | 91.1k/314k | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| dynamic | 75       | 186k/644k  | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| ssr     | 76       | 179k/609k  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssg     | 76       | 180k/609k  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

## Remix app

- npm run build
- npm run start

Common statistics:

| Doc size    | CSS size  | Image size | font size |
| ----------- | --------- | ---------- | --------- |
| 17.6k/55.8k | 118k/909k | 3.5M       | 438k/977k |

Statistics per page:

| Pages   | Requests | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 0          | 82          | 1.0s | 3.0s | 0ms | 0.001 | 1.0s |
| layout  | 73       | 96.3k/332k | 80          | 1.2s | 3.1s | 0ms | 0.001 | 1.2s |
| dynamic | 71       | 143k/488k  | 79          | 1.2s | 3.3s | 0ms | 0.001 | 1.2s |
| ssr     | 73       | 140k/462k  | 78          | 1.1s | 3.4s | 0ms | 0.001 | 1.4s |

## Astro app (With React Components)

- npm run build
- npm run preview

Common statistics:

| Doc size    | CSS size  | Image size | font size |
| ----------- | --------- | ---------- | --------- |
| 81.4k/81.1k | 747k/895k | 3.5M       | 979k/977k |

Statistics per page (`client:load`):

| Pages   | Requests | JS size   | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 0         | 68          | 1.9s | 4.3s | 0ms | 0.001 | 1.9s |
| layout  | 68       | 167k/165k | 68          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| dynamic | 71       | 255k/356k | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| ssr     | 73       | 231k/331k | 65          | 2.1s | 4.9s | 0ms | 0.001 | 2.1s |
| ssg     | 73       | 231k/331k | 65          | 2.1s | 4.8s | 0ms | 0.001 | 2.1s |

## Astro app (Without React Components)

- npm run build
- npm run preview

Common statistics:

| Doc size    | CSS size  | Image size | font size |
| ----------- | --------- | ---------- | --------- |
| 80.7k/80.4k | 747k/895k | 3.5M       | 979k/977k |

Statistics per page (`client:load`):

| Pages   | Requests | JS size    | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 0          | 68          | 1.9s | 4.3s | 0ms | 0.001 | 1.9s |
| layout  | 64       | 2.3k/2.0k  | 68          | 1.9s | 4.3s | 0ms | 0.001 | 1.9s |
| dynamic | 64       | 68.3k/171k | 68          | 2.0s | 4.5s | 0ms | 0.001 | 2.0s |
| ssr     | 66       | 51.8k/155k | 68          | 1.9s | 4.6s | 0ms | 0.001 | 1.9s |
| ssg     | 66       | 51.8k/155k | 69          | 1.8s | 4.6s | 0ms | 0.001 | 1.8s |

## Qwik app

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
