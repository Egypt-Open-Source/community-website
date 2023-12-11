---
title: Code Runner
description: coderunner plugin for nvim
slug: coderunner
date: 2023-12-09 00:00:00+0000
image: cover.jpg
categories:
    - Project
tags:
    - nvim
    - code
    - terminal
weight: 1
---

### Intro

CodeRunner.nvim is a versatile Neovim plugin designed to streamline the process of executing code directly within the Neovim environment. This document provides a comprehensive guide on installing, configuring, and contributing to CodeRunner.nvim.

### Installation

#### Lazy.nvim

```lua
-- lazy.nvim setup
use "Coptan99/CodeRunner.nvim"
```

#### Packer.nvim

```lua
-- packer.nvim setup
use "Coptan99/CodeRunner.nvim"
```

#### vim-plug

```vim
" vim-plug setup
Plug "Coptan99/CodeRunner.nvim"
```

### Supported Files

CodeRunner.nvim currently supports the following file types:

- C
- C++
- Python

### Usage

To execute the code in the active file, simply use the following command:

```vim
:lua require("coderunner").runner()
```

### Keymapping

For convenient access to the CodeRunner functionality, consider adding a key mapping to your Neovim configuration. Open your `init.vim` or `init.lua` and append the following:

#### Example Keymapping

```lua
-- Example key mapping in init.lua
vim.keymap.set("n", "<leader>qq", ":lua require('coderunner').runner()")
```

Feel free to customize the key mapping according to your preferences.

### Configuration

CodeRunner.nvim is designed to be easily configurable. To tailor it to your specific needs, modify the key mapping in the provided configuration. Refer to the example key mapping above and adjust it accordingly.

### Contribution

Contributions to CodeRunner.nvim are highly encouraged. If you have new ideas, enhancements, or bug fixes, feel free to submit a pull request. As the project evolves, your contributions play a crucial role in improving the functionality and user experience of CodeRunner.nvim.

Please note that all contributions should adhere to the project's guidelines, and constructive feedback is always welcome. Whether you're a seasoned developer or a beginner, your input is valued as we work together to enhance CodeRunner.nvim.

Thank you for considering CodeRunner.nvim, and happy coding!*CodeRunner.nvim Documentation**

CodeRunner.nvim is a versatile Neovim plugin designed to streamline the process of executing code directly within the Neovim environment. This document provides a comprehensive guide on installing, configuring, and contributing to CodeRunner.nvim.

### Installation

#### Lazy.nvim

```lua
-- lazy.nvim setup
use "Coptan99/CodeRunner.nvim"
```

#### Packer.nvim

```lua
-- packer.nvim setup
use "Coptan99/CodeRunner.nvim"
```

#### vim-plug

```vim
" vim-plug setup
Plug "Coptan99/CodeRunner.nvim"
```

### Supported Files

CodeRunner.nvim currently supports the following file types:

- C
- C++
- Python

### Usage

To execute the code in the active file, simply use the following command:

```vim
:lua require("coderunner").runner()
```

### Keymapping

For convenient access to the CodeRunner functionality, consider adding a key mapping to your Neovim configuration. Open your `init.vim` or `init.lua` and append the following:

#### Example Keymapping

```lua
-- Example key mapping in init.lua
vim.keymap.set("n", "<leader>qq", ":lua require('coderunner').runner()")
```

Feel free to customize the key mapping according to your preferences.

### Configuration

CodeRunner.nvim is designed to be easily configurable. To tailor it to your specific needs, modify the key mapping in the provided configuration. Refer to the example key mapping above and adjust it accordingly.

### Contribution

Contributions to CodeRunner.nvim are highly encouraged. If you have new ideas, enhancements, or bug fixes, feel free to submit a pull request. As the project evolves, your contributions play a crucial role in improving the functionality and user experience of CodeRunner.nvim.

Please note that all contributions should adhere to the project's guidelines, and constructive feedback is always welcome. Whether you're a seasoned developer or a beginner, your input is valued as we work together to enhance CodeRunner.nvim.

Thank you for considering CodeRunner.nvim, and happy coding!
