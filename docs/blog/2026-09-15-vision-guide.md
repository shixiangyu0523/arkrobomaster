---
title: 视觉方向入门指南
date: 2026-10-01
author: ARK 视觉组
tags: [视觉, 入门, OpenCV, YOLO]
---

# 视觉方向入门指南

## 我应该在什么时候开始学习视觉？

**现在。** 越早越好。

## 第一步：搭环境

RoboMaster 视觉开发的主流环境是：

- **操作系统**：Ubuntu 22.04 LTS
- **语言**：C++（主力）/ Python（辅助）
- **工具**：OpenCV + CMake

```bash
# 安装 OpenCV
sudo apt update
sudo apt install libopencv-dev

# 安装 CMake
sudo apt install cmake
```

## 第二步：学基础

推荐学习顺序：

1. C++ 基础（先看一遍，不用精通）
2. OpenCV 基础（图像读取、滤波、颜色空间）
3. 相机成像原理（内参、外参、畸变）
4. 目标检测（传统方法 → YOLO）

## 第三步：上手 RM

- 找一张 RM 比赛图片，尝试识别装甲板
- 训练一个 YOLOv8 小模型
- 看 [交龙战队视觉教程](https://sjtu-robomaster-team.github.io/vision-learning-1-overview/)

## 常见问题

### Q: Python 和 C++ 选哪个？
**A:** 入门用 Python（语法简单），上场比赛用 C++（速度快）。

### Q: 需要学 ROS 吗？
**A:** 视觉方向如果只做自瞄，ROS 不是必须的。但如果涉及导航/哨兵，ROS2 是必修课。

---

*有疑问？来实验室找我们聊聊！*