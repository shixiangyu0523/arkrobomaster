# 视觉方向

> 👁️ 负责机器人的 **目标检测、自动瞄准、定位导航、图像处理**

---

## 学习路线

### 第一阶段：基础入门
1. **C++ / Python 基础**：STL、面向对象、多线程
2. **Linux 环境**：Ubuntu 安装、命令行、包管理
3. **OpenCV 入门**：图像读取、滤波、边缘检测、轮廓提取
4. **相机基础**：相机标定、畸变校正、投影变换

### 第二阶段：专业进阶
1. **传统视觉算法**：HSV 颜色空间、灯条检测、装甲板识别
2. **深度学习**：YOLOv5/v8/v11 目标检测、数据集制作、模型训练
3. **PNP 解算**：PnP 位姿估计、角度解算
4. **卡尔曼滤波**：目标跟踪、运动预测

### 第三阶段：实战应用
1. **自瞄系统**：装甲板检测 + 弹道补偿 + 击打决策
2. **能量机关**：大能量机关识别与击打
3. **双目测距**：立体视觉、深度估计
4. **模型部署**：TensorRT/NCNN 推理加速

---

## 环境搭建

```bash
# Ubuntu 20.04 / 22.04 推荐环境

# OpenCV
sudo apt install libopencv-dev

# CMake
sudo apt install cmake

# 深度学习（选一个）
pip install ultralytics    # YOLOv8
# 或
git clone https://github.com/ultralytics/ultralytics
```

---

## 推荐资源

- [上海交大视觉部培训系列](https://sjtu-robomaster-team.github.io/vision-learning-1-overview/) — 从零开始的 RM 视觉教程
- [OpenCV 官方教程](https://docs.opencv.org/)
- [Ultralytics YOLOv8 文档](https://docs.ultralytics.com/)
- [RoboMaster 视觉开源项目汇总](https://github.com/OpenRoboMaster/awesome-robomaster)
- [RM CV Docs (交龙视觉文档)](https://sjtu-robomaster-team.github.io/cv-docs/)

---

## 新人任务清单

- [ ] 安装 Ubuntu 双系统或 WSL2
- [ ] 配置 OpenCV + CMake 开发环境
- [ ] 跑通一个简单的图像读取 + 显示程序
- [ ] 实现基于 HSV 的颜色识别
- [ ] 训练一个 YOLOv8 小模型（检测装甲板）
- [ ] 完成相机标定并验证效果