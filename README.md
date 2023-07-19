# Framework performance comparison

## Introduction

The tests were made using Lighthouse in Chrome 114.0.5735.198 with following configuration:

- Mode: "Navigation"
- Device: "Desktop"

In the result when there is two number separated by a <key>/</key> it means than:

- the first one in the size transferred over network (sometimes with gzip compression which makes the size smaller)
- the second one in the size of the resource

## Glossary

- FCP: First Contentful Paint - First Contentful Paint marks the time at which the first text or image is painted.
- LCP: Largest Contentful Paint - Largest Contentful Paint marks the time at which the largest text or image is painted.
- TBT: Total Blocking Time - Sum of all time periods between FCP and Time to Interactive, when taskB length exceeded 50ms, expressed in milliseconds.
- CLS: Cumulative Layout Shift - Cumulative Layout Shift measures the movement of visible elements within the viewport.
- SI: Speed Index - Speed Index shows how quickly the contents of a page are visibly populated.

## Astro app (Without React Components)

- npm run build
- npm run preview

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 747kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 80.7kB/80.4kB | 0           | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 64       | 81.2kB/80.9kB | 2.3kB/2.0kB | 67          | 2.1s | 4.4s | 0ms | 0.001 | 2.1s |
| dynamic | 65       | 66.9kB/66.6kB | 175kB/174kB | 64          | 2.3s | 5.0s | 0ms | 0.001 | 2.3s |
| ssr     | 67       | 69.7kB/67.6kB | 159kB/158kB | 66          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |
| ssg     | 67       | 67.9kB/67.6kB | 159kB/158kB | 66          | 2.0s | 4.7s | 0ms | 0.001 | 2.0s |

### Using `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/80.4kB | 0            | 82          | 0.9s | 3.0s | 0ms | 0.001 | 0.9s |
| layout  | 64       | 10.2kB/80.9kB | 1.0kB/2.0kB  | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| dynamic | 65       | 9.1kB/66.6kB  | 50.8kB/174kB | 78          | 1.2s | 3.5s | 0ms | 0.001 | 1.2s |
| ssg     | 67       | 9.1kB/67.6kB  | 48.7kB/158kB | 80          | 1.0s | 3.3s | 0ms | 0.001 | 1.0s |

## Astro app (With React Components)

### Using `client:load` directive

- npm run build
- npm run preview

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 747kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 81.4kB/81.1kB | 0           | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 70       | 70.1kB/69.6kB | 177kB/175kB | 65          | 2.2s | 4.7s | 0ms | 0.001 | 2.2s |
| dynamic | 72       | 52.0kB/51.7kB | 363kB/359kB | 64          | 2.2s | 5.2s | 0ms | 0.001 | 2.2s |
| ssr     | 74       | 57.6kB/56.8kB | 338kB/335kB | 66          | 2.0s | 4.9s | 0ms | 0.001 | 2.1s |
| ssg     | 74       | 57.1kB/56.8kB | 338kB/335kB | 67          | 2.0s | 4.8s | 0ms | 0.001 | 2.0s |

### Using `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/81.1kB | 0            | 81          | 1.0s | 3.1s | 0ms | 0.004 | 1.0s |
| layout  | 70       | 10.6kB/69.6kB | 55.5kB/175kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| dynamic | 72       | 8.8kB/51.7kB  | 108kB/359kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssg     | 74       | 9.6kB/56.8kB  | 105kB/335kB  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

No SSR here (because it needs a server).

### Using `serve` + `client:visible` directive

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 63       | 10.1kB/81.1kB | 0            | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 69       | 10.7kB/69.8kB | 53.1kB/165kB | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 48       | 8.9kB/51.9kB  | 53.1kB/165kB | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| ssg     | 49       | 9.7kB/57.0kB  | 53.1kB/165kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |

No SSR again here.

## Gatsby app

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 439kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 72       | 9.5kB/57.0kB | 79.7kB/227kB | 80          | 1.1s | 3.2s | 0ms | 0.001 | 1.1s |
| layout  | 73       | 9.5kB/57.2kB | 81.4kB/279kB | 80          | 1.1s | 3.3s | 0ms | 0.001 | 1.1s |
| dynamic | 71       | 8.2kB/46.1kB | 127kB/437kB  | 78          | 1.1s | 3.6s | 0ms | 0.001 | 1.1s |
| ssr     | 73       | 8.6kB/52.3kB | 125kB/411kB  | 79          | 1.0s | 3.4s | 0ms | 0.001 | 1.4s |
| ssg     | 74       | 8.1kB/46.4kB | 125kB/411kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |

## Next app (Using App Router)

- npm run build
- npm run start

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/909kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 70       | 19.6kB/142kB  | 79.0kB/262kB | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout  | 73       | 15.5kB/106kB  | 88.3kB/307kB | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 10.8kB/65.1kB | 138kB/490kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 74       | 13.5kB/70.9kB | 131kB/455kB  | 81          | 0.9s | 3.3s | 0ms | 0.001 | 0.9s |
| ssg     | 74       | 11.6kB/70.1kB | 131kB/455kB  | 80          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |

## Next app (Using Pages Router)

- npm run build
- npm run start

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 74       | 8.8kB/56.0kB | 87.6kB/312kB | 79          | 1.2s | 3.3s | 0ms | 0.001 | 1.2s |
| layout  | 75       | 8.9kB/56.3kB | 89.4kB/314kB | 81          | 1.0s | 3.2s | 0ms | 0.001 | 1.0s |
| dynamic | 73       | 7.5kB/45.1kB | 135kB/472kB  | 80          | 1.0s | 3.4s | 0ms | 0.001 | 1.0s |
| ssr     | 76       | 8.1kB/51.3kB | 132kB/446kB  | 78          | 1.0s | 3.5s | 0ms | 0.001 | 1.6s |
| ssg     | 76       | 8.1kB/51.3kB | 132kB/446kB  | 79          | 1.0s | 3.5s | 0ms | 0.001 | 1.0s |

## Nuxt app

### Using generated server file

- npm run build
- node .output/server/index.mjs

Common statistics:

| CSS size     | Image size | font size   |
| ------------ | ---------- | ----------- |
| 32.6kB/181kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 755kB/754kB | 205kB/203kB | 65          | 2.3s | 4.3s | 0ms | 0.001 | 2.3s |
| layout  | 71       | 755kB/755kB | 207kB/205kB | 65          | 2.3s | 4.4s | 0ms | 0.001 | 2.3s |
| dynamic | 70       | 744kB/744kB | 366kB/364kB | 64          | 2.3s | 5.0s | 0ms | 0.004 | 2.3s |
| ssr     | 71       | 750kB/750kB | 355kB/353kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |
| ssg     | 71       | 751kB/750kB | 355kB/353kB | 66          | 2.1s | 4.6s | 0ms | 0.001 | 2.1s |

### Using vite preview

- npm run build
- npm run preview

Common statistics:

| CSS size     | Image size | font size   |
| ------------ | ---------- | ----------- |
| 32.6kB/181kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size    | JS size     | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ----------- | ----------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 755kB/754kB | 204kB/203kB | 65          | 2.3s | 4.4s | 0ms | 0.001 | 2.3s |
| layout  | 71       | 755kB/755kB | 207kB/205kB | 64          | 2.3s | 4.7s | 0ms | 0.001 | 2.4s |
| dynamic | 70       | 744kB/744kB | 366kB/364kB | 64          | 2.3s | 5.0s | 0ms | 0.001 | 2.3s |
| ssg     | 71       | 751kB/750kB | 355kB/353kB | 66          | 2.1s | 4.5s | 0ms | 0.001 | 2.1s |

### Using `serve`

- npm run generate
- npm run serve

Common statistics:

| CSS size     | Image size | font size   |
| ------------ | ---------- | ----------- |
| 32.6kB/181kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size     | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------ | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 71       | 89.8kB/754kB | 66.4kB/203kB | 82          | 0.9s | 3.0s | 0ms | 0.004 | 0.9s |
| layout  | 71       | 89.9kB/755kB | 67.8kB/206kB | 82          | 1.0s | 3.0s | 0ms | 0.004 | 1.0s |
| dynamic | 70       | 88.6kB/744kB | 115kB/365kB  | 81          | 0.9s | 3.2s | 0ms | 0.001 | 0.9s |
| ssg     | 71       | 89.4kB/750kB | 117kB/354kB  | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |

## Qwik app

### Using vite preview

- npm run preview

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 9.2kB/56.3kB  | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| layout  | 64       | 11.5kB/62.3kB | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| dynamic | 43       | 10.4kB/52.7kB | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| ssr     | 44       | 10.5kB/53.6kB | 0       | 74          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |

### Using Node.js Express Server Adapter

- npm run build.server
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 747kB/895kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size        | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | --------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 64       | 56.5.2kB/56.3kB | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| layout  | 64       | 62.5kB/62.3kB   | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| dynamic | 43       | 52.9kB/52.7kB   | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |
| ssr     | 44       | 53.8kB/53.6kB   | 0       | 67          | 2.0s | 4.4s | 0ms | 0.001 | 2.0s |

### Using Static site Adapter + `serve`

- npm run build.server
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 116kB/895kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages    | Requests | Doc size      | JS size | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| -------- | -------- | ------------- | ------- | ----------- | ---- | ---- | --- | ----- | ---- |
| static   | 64       | 9.4kB/56.3kB  | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| layout   | 64       | 11.6kB/62.3kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| dynamic  | 43       | 10.5kB/52.7kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |
| ssr(ssg) | 44       | 10.6kB/53.6kB | 0       | 81          | 1.0s | 3.1s | 0ms | 0.001 | 1.0s |

## React app (Vite)

### Using vite preview

- npm run build
- npm run preview

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 118kB/908kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 66       | 934B/1.2kB | 71.8kB/322kB | 73          | 1.6s | 3.7s | 0ms | 0.004 | 1.6s |
| layout  | 66       | 934B/1.2kB | 71.8kB/322kB | 74          | 1.6s | 3.7s | 0ms | 0.014 | 1.6s |
| dynamic | 65       | 934B/1.2kB | 116kB/472kB  | 71          | 1.7s | 4.1s | 0ms | 0.004 | 1.7s |
| async   | 71       | 934B/1.2kB | 116kB/472kB  | 72          | 1.4s | 4.6s | 0ms | 0.014 | 1.4s |

### Using `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 66       | 949B/1.2kB | 71.8kB/322kB | 79          | 1.1s | 3.3s | 0ms | 0.014 | 1.1s |
| layout  | 66       | 949B/1.2kB | 71.8kB/322kB | 79          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |
| dynamic | 65       | 949B/1.2kB | 116kB/472kB  | 77          | 1.2s | 3.6s | 0ms | 0.004 | 1.2s |
| async   | 71       | 949B/1.2kB | 116kB/472kB  | 78          | 1.2s | 3.6s | 0ms | 0.014 | 1.2s |

### Using `serve` + async components

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size   | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ---------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 69       | 949B/1.2kB | 61.1kB/225kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| layout  | 69       | 949B/1.2kB | 62.9kB/228kB | 79          | 1.2s | 3.2s | 0ms | 0.004 | 1.2s |
| dynamic | 68       | 949B/1.2kB | 110kB/386kB  | 77          | 1.3s | 3.6s | 0ms | 0.004 | 1.3s |
| async   | 74       | 949B/1.2kB | 107kB/361kB  | 79          | 1.1s | 3.3s | 0ms | 0.004 | 1.1s |

## Remix app

- npm run build
- npm run start

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 118kB/909kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 17.6kB/55.8kB | 0            | 80          | 1.1s | 3.1s | 0ms | 0.001 | 1.1s |
| layout  | 74       | 18.1kB/57.2kB | 97.1kB/332kB | 79          | 1.2s | 3.1s | 0ms | 0.001 | 1.2s |
| dynamic | 72       | 16.1kB/46.0kB | 144kB/490kB  | 75          | 1.4s | 3.7s | 0ms | 0.001 | 1.4s |
| ssr     | 74       | 18.1kB/52.1kB | 140kB/464kB  | 77          | 1.2s | 3.4s | 0ms | 0.001 | 1.5s |

## Sveltekit app

### Using vite preview

- npm run build
- npm run preview

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 118kB/908kB | 3.5MB      | 979kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 9.5kB/61.6kB  | 0            | 75          | 1.5s | 3.6s | 0ms | 0.001 | 1.5s |
| layout  | 77       | 10.0kB/63.1kB | 53.0kB/161kB | 70          | 1.9s | 3.8s | 0ms | 0.004 | 1.9s |
| dynamic | 75       | 8.5kB/51.7kB  | 99.9kB/320kB | 69          | 1.9s | 4.2s | 0ms | 0.001 | 1.9s |
| ssr     | 77       | 9.6kB/57.4kB  | 98.9kB/307kB | 71          | 1.6s | 3.9s | 0ms | 0.014 | 2.0s |
| ssg     | 77       | 8.9kB/58.3kB  | 98.9kB/307kB | 72          | 1.6s | 3.9s | 0ms | 0.001 | 1.6s |

### Using `@sveltejs/adapter-static` + `serve`

- npm run build
- npm run serve

Common statistics:

| CSS size    | Image size | font size   |
| ----------- | ---------- | ----------- |
| 119kB/908kB | 3.5MB      | 438kB/977kB |

Statistics per page:

| Pages   | Requests | Doc size      | JS size      | Performance | FCP  | LCP  | TBT | CLS   | SI   |
| ------- | -------- | ------------- | ------------ | ----------- | ---- | ---- | --- | ----- | ---- |
| static  | 65       | 9.6kB/61.6kB  | 0            | 81          | 1.1s | 3.0s | 0ms | 0.001 | 1.1s |
| layout  | 77       | 10.1kB/63.1kB | 53.5kB/161kB | 76          | 1.5s | 3.3s | 0ms | 0.001 | 1.5s |
| dynamic | 75       | 8.6kB/51.7kB  | 100kB/322kB  | 74          | 1.5s | 3.7s | 0ms | 0.001 | 1.5s |
| ssg     | 80       | 9.0kB/58.3kB  | 99.5kB/307kB | 78          | 1.2s | 3.4s | 0ms | 0.001 | 1.2s |
