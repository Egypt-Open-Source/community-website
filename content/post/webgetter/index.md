---
title: Web Getter
description: An open-source project allowed you to get any website source code in a few minutes 
slug: webgetter
date: 2023-12-11 00:00:00+0000
image: cover.jpg
categories:
    - Tool
tags:
    - linux
    - tool
    - terminal
    - cli
weight: 2
---

# WebGetter

WebGetter is an open-source tool developed by Team Egypt Open Source that allows you to quickly obtain the source code of any website. This tool is designed for ease of use on any Linux system or Termux. Feel free to contribute and support us by buying a coffee.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)

## Requirements

Before using WebGetter, make sure you have the following:

- Any Linux system terminal or Termux.

## Installation

1. Install `wget`:
```bash
sudo apt install wget
```

2. Clone the tool:
```bash
curl https://raw.githubusercontent.com/Egypt-Open-Source/WebGetter/main/web_getter.sh >> web_getter.sh
```

3. Give the tool permissions:
```bash
chmod +x web_getter.sh
```

4. Open the tool:
```bash
./web_getter.sh
 ```

## Usage

Once the tool is open, follow these steps:

1. Choose your desired option:
   - Option 1: Get basic website source code without additional links, videos, or audio.
   - Option 2: Get all website source code, including HTML, CSS, JS files, and linked websites. Also, retrieves audio and videos.

2. When adding a website link, ensure it starts with "http/https" and includes "www" (except for GitHub Pages source code, where "www" is not needed).

3. After entering the link and pressing Enter, the tool will save the source code in a folder named after the website.

## About

WebGetter is a free open-source tool developed by Team Egypt Open Source. It allows you to obtain any website's source code in just a few minutes.

## License

This project is licensed under the MIT License.
