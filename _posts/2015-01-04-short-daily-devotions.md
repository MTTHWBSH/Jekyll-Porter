---
layout: post
permalink: /short-daily-devotions/
title: 'Short Daily Devotions'
author: mtthwbsh
excerpt: 'A native iOS client for a daily publication, focused on immediately delivering the most relevant content with an eye towards performance'
thumbnail: /assets/images/SDD-thumbnail.png
categories:
  - Portfolio
---

[**Short Daily Devotions iOS app**][link1]

Short Daily Devotions is just as it sounds, a daily publication delivering quick reads via email and its [website][link2]. I'm an avid winter runner, and would often read the daily post while walking my last few blocks, but would spend half my time trying to tap through the mobile site with my gloves on. I decided to solve my own problem by giving myself the ability to say, "Hey Siri, open..." instead. Short Daily Devotions graciously runs entirely off donations, and as a result has not had the resources to invest in native clients, which gave me the opportunity to donate my side project time.

The majority of the time I open the app, I'm doing so to read today's post, so that's exactly what the first screen of that app entails (and only that).

![App screenshot][image1]

To keep the reading interface as focused as possible, I moved a segmented control to the navigation bar title, where you can access the archive of previous posts. The archive view includes a paginated list of past posts, limiting the amount of unnecessary network resources.

![App screenshot][image2]

Any ancillary information is accessible in a separate menu. Pages are dynamically loaded where appropriate. Thanks to the available social networks supporting universal links, tapping any of the social buttons will open the profile in the respective app if installed, and will otherwise fall back on Safari.

![App screenshot][image3]
![App screenshot][image4]

Aside from being a fun side project that solved a problem I dealt with day-to-day, this also alotted me the freedom to explore some new technical challenges. 

Since the blog is hosted on WordPress, I took a shot at using the [WordPress REST API][link4] for the first time. Being a blog with a pre-existing post/data structure I didn't have a say in its architecture based on my client needs, so a lot of the initial work ended up being processing large chunks of HTML into something I could use with my models (not something I'm generally a fan of, but a fun challenge).

Given the simplicity of the app, I also challenged myself to few things:

- Keeping third party dependencies to a minimum
- Not using a single storyboard/XIB (opting instead to layout programmatically)
- Strict MVVM architecture, as light as possible view controllers
- 100% Swift

In a bit of a self-contradiction, I also wanted to assess some of the newer Swift networking and JSON parsing libraries. After some research (and familiarity with the obj-c version of AFNetworking) I decided on [Mapper][link5] by the team at Lyft and [Alamofire][link6].

<!-- Links -->
[link1]:			https://itunes.apple.com/us/app/short-daily-devotions/id1191028579?ls=1&mt=8
[link2]:			http://shortdailydevotions.com
[link3]:			https://github.com/MTTHWBSH/short-daily-devotions
[link4]:			http://v2.wp-api.org/
[link5]:			https://github.com/lyft/mapper
[link6]:			https://github.com/Alamofire/Alamofire

<!-- Images -->
[image1]: 			/assets/images/SDD-1.png
[image2]: 			/assets/images/SDD-2.png
[image3]: 			/assets/images/SDD-3.png
[image4]: 			/assets/images/SDD-4.png
